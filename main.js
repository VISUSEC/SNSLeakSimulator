// ==========================================
// 1. データ管理 (将来的なファイル分割に対応)
// ==========================================
const DataManager = {
    users: {},
    posts: [],
    scenarios: [],

    // 初期データの読み込み（data.js の db 変数から）
    init() {
        if (typeof db !== 'undefined') {
            this.mergeData(db);
        } else {
            console.error("データが見つかりません。data.jsが正しく読み込まれているか確認してください。");
        }
    },

    // 将来シナリオごとに分割したデータを統合するためのメソッド
    mergeData(newData) {
        if (newData.users) Object.assign(this.users, newData.users);
        if (newData.posts) this.posts = this.posts.concat(newData.posts);
        if (newData.scenarios) this.scenarios = this.scenarios.concat(newData.scenarios);
    },

    getUser(userId) { return this.users[userId]; },
    getPost(postId) { return this.posts.find(p => p.id === postId); },
    getAllScenarios() { return this.scenarios; }
};

// ==========================================
// 2. アプリケーションの状態と履歴管理 (History API対応)
// ==========================================
const AppState = {
    currentScenario: null,
    viewHistory: [],

    setScenario(scenarioId) {
        this.currentScenario = DataManager.scenarios.find(s => s.id === scenarioId);
    },

    pushHistory(state) {
        if (this.viewHistory.length > 0) {
            const current = this.viewHistory[this.viewHistory.length - 1];
            if (JSON.stringify(current) === JSON.stringify(state)) return;
        }
        this.viewHistory.push(state);
        history.pushState(state, '', '');
    },

    popHistory() {
        this.viewHistory.pop();
    },

    resetHistory(initialState, isPopState = false) {
        this.viewHistory = [];
        if (!isPopState) {
            history.replaceState(initialState, '', '');
            this.viewHistory.push(initialState);
        }
    }
};

// ==========================================
// 3. UI描画・イベント制御 (View)
// ==========================================
window.onload = () => {
    DataManager.init();
    
    const selector = document.getElementById('scenario-selector');
    DataManager.getAllScenarios().forEach(s => {
        const option = document.createElement('option');
        option.value = s.id; 
        option.textContent = s.title;
        selector.appendChild(option);
    });
    
    loadSelectedScenario();
};

function loadSelectedScenario() {
    const scenarioId = document.getElementById('scenario-selector').value;
    AppState.setScenario(scenarioId);
    
    document.getElementById('target-id-display').value = AppState.currentScenario.target;
    document.getElementById('feedback').style.display = 'none';

    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    AppState.currentScenario.questions.forEach((q, idx) => {
        container.innerHTML += `
            <div class="form-group">
                <label>質問${idx + 1}: ${q.label}</label>
                <input type="text" id="${q.id}" placeholder="回答を入力">
            </div>
        `;
    });
    
    resetNavigation();
}

function linkify(text) { 
    return text.replace(/(@\w+)/g, '<a href="#" class="mention" onclick="navigateTo(\'$1\'); event.stopPropagation(); return false;">$1</a>'); 
}

// ブラウザの「戻る/進む」操作を検知するイベントリスナー
window.addEventListener('popstate', (event) => {
    if (event.state) {
        AppState.popHistory(); 
        restoreState(event.state);
    } else {
        resetNavigation(true);
    }
});

function restoreState(state) {
    if (state.type === 'user') navigateTo(state.id, state.mode, true);
    else if (state.type === 'postDetail') renderPostDetail(state.id, true);
    else if (state.type === 'usersList') renderPostUsers(state.id, state.listType, true);
}

function goBack() {
    if (AppState.viewHistory.length > 1) {
        history.back(); // popstate イベントが発火する
    } else {
        resetNavigation();
    }
}

function resetNavigation(isPopState = false) {
    const initialState = { type: 'user', id: AppState.currentScenario.target, mode: 'posts' };
    AppState.resetHistory(initialState, isPopState);
    navigateTo(AppState.currentScenario.target, 'posts', true);
}

// --- 描画関数群 ---
function navigateTo(userId, mode = 'posts', isHistoryBack = false) {
    const user = DataManager.getUser(userId);
    if (!user) return;
    
    if (!isHistoryBack) AppState.pushHistory({ type: 'user', id: userId, mode: mode });

    const content = document.getElementById('sns-content');
    const likesCount = DataManager.posts.filter(p => p.likedBy && p.likedBy.includes(userId)).length;
    const postsCount = DataManager.posts.filter(p => p.author === userId || (p.retweetedBy && p.retweetedBy.includes(userId))).length;

    let html = `
        <div class="profile-header">
            <div class="profile-avatar">${user.icon || '👤'}</div>
            <div class="profile-name">${user.name}</div>
            <div class="profile-handle">${userId}</div>
            <div class="profile-bio">${linkify(user.bio)}</div>
            <div class="profile-stats">
                <span onclick="navigateTo('${userId}', 'posts')" style="color: ${mode === 'posts' ? '#1da1f2' : 'inherit'};"><strong>${postsCount}</strong> 📝 投稿</span>
                <span onclick="renderUserList('${userId}', 'following')"><strong>${user.following.length}</strong> フォロー</span>
                <span onclick="renderUserList('${userId}', 'followers')"><strong>${user.followers.length}</strong> フォロワー</span>
                <span onclick="navigateTo('${userId}', 'likes')" style="color: ${mode === 'likes' ? '#e0245e' : 'inherit'};"><strong>${likesCount}</strong> ❤️ いいね</span>
            </div>
        </div>
    `;

    let relatedPosts = [];
    if (mode === 'likes') {
        relatedPosts = DataManager.posts.filter(p => p.likedBy && p.likedBy.includes(userId));
        html += `<div style="padding: 10px 15px; background: #ffebeb; color: #e0245e; font-weight: bold; font-size: 0.9em; border-bottom: 1px solid #eee;">❤️ いいねした投稿を表示中</div>`;
    } else {
        relatedPosts = DataManager.posts.filter(p => p.author === userId || (p.retweetedBy && p.retweetedBy.includes(userId)));
    }

    relatedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    relatedPosts.forEach(post => { html += generatePostHtml(post, userId, mode); });
    content.innerHTML = html;
}

function renderPostDetail(postId, isHistoryBack = false) {
    const mainPost = DataManager.getPost(postId);
    if (!mainPost) return;
    
    if (!isHistoryBack) AppState.pushHistory({ type: 'postDetail', id: postId });

    let html = `<div class="list-header"><button onclick="goBack()">←戻る</button>投稿と返信</div>`;
    html += generatePostHtml(mainPost, null, 'posts');

    const replies = DataManager.posts.filter(p => p.replyTo === postId);
    if (replies.length > 0) {
        html += `<div class="reply-header">返信スレッド</div>`;
        replies.sort((a, b) => new Date(a.date) - new Date(b.date));
        replies.forEach(reply => { html += generatePostHtml(reply, null, 'posts'); });
    }

    document.getElementById('sns-content').innerHTML = html;
}

function renderPostUsers(postId, type, isHistoryBack = false) {
    if (!isHistoryBack) AppState.pushHistory({ type: 'usersList', id: postId, listType: type });
    
    const post = DataManager.getPost(postId);
    const userIds = type === 'likes' ? post.likedBy : post.retweetedBy;
    const title = type === 'likes' ? 'いいねしたユーザー' : 'リポストしたユーザー';
    
    let html = `<div class="list-header"><button onclick="goBack()">←戻る</button>${title}</div>`;
    if (!userIds || userIds.length === 0) {
        html += `<div style="padding: 20px; color: #888; text-align: center;">まだ誰もいません</div>`;
    } else {
        userIds.forEach(id => {
            const u = DataManager.getUser(id);
            if(u) html += createUserListItem(id, u);
        });
    }
    document.getElementById('sns-content').innerHTML = html;
}

function renderUserList(userId, type, isHistoryBack = false) {
    if (!isHistoryBack) AppState.pushHistory({ type: 'usersList', id: userId, listType: type });
    
    const user = DataManager.getUser(userId);
    const list = user[type];
    const title = type === 'following' ? 'フォロー中' : 'フォロワー';
    
    let html = `<div class="list-header"><button onclick="goBack()">←戻る</button>${user.name} の ${title}</div>`;
    list.forEach(id => {
        const u = DataManager.getUser(id);
        if(u) html += createUserListItem(id, u);
    });
    document.getElementById('sns-content').innerHTML = html;
}

function generatePostHtml(post, contextUserId, mode) {
    const author = DataManager.getUser(post.author);
    let actionHtml = '';
    
    if (mode === 'posts' && contextUserId && post.retweetedBy && post.retweetedBy.includes(contextUserId) && post.author !== contextUserId) {
        actionHtml = `<div class="action-label">🔁 ${DataManager.getUser(contextUserId).name}さんがリポスト</div>`;
    }

    let imageHtml = post.image ? `<div class="post-image">${post.image}</div>` : '';

    let quoteHtml = '';
    // 新しいID参照方式
    if (post.quoteId) {
        const quotedPost = DataManager.getPost(post.quoteId);
        if (quotedPost) {
            const quotedAuthor = DataManager.getUser(quotedPost.author);
            quoteHtml = `
                <div class="quote-box" onclick="renderPostDetail('${quotedPost.id}'); event.stopPropagation();">
                    <div class="quote-header"><span class="quote-author">${quotedAuthor.name}</span><span class="quote-handle">${quotedPost.author}</span></div>
                    <div class="quote-text">${linkify(quotedPost.text)}</div>
                </div>`;
        }
    } 
    // 古い直接書き込み方式（互換性維持：投稿IDを持たないため従来通りプロフィールへ飛ぶ）
    else if (post.quote) {
        quoteHtml = `
            <div class="quote-box" onclick="navigateTo('${post.quote.author}'); event.stopPropagation();">
                <div class="quote-header"><span class="quote-author">${post.quote.name}</span><span class="quote-handle">${post.quote.author}</span></div>
                <div class="quote-text">${linkify(post.quote.text)}</div>
            </div>`;
    }

    let repliesCount = post.repliesCount || 0;
    let rtCount = post.retweetedBy ? post.retweetedBy.length : 0;
    let likeCount = post.likedBy ? post.likedBy.length : 0;
    
    let statsHtml = `<div class="post-stats">
        <span>💬 ${repliesCount}</span>
        <span onclick="renderPostUsers('${post.id}', 'retweets'); event.stopPropagation();">🔁 ${rtCount}</span>
        <span class="like-btn" onclick="renderPostUsers('${post.id}', 'likes'); event.stopPropagation();">❤️ ${likeCount}</span>
    </div>`;

    return `
        <div class="post" onclick="renderPostDetail('${post.id}')">
            <div class="post-avatar" onclick="navigateTo('${post.author}'); event.stopPropagation();">${author.icon || '👤'}</div>
            <div class="post-content">
                ${actionHtml}
                <div class="post-meta">
                    <span class="author-name" onclick="navigateTo('${post.author}'); event.stopPropagation();">${author.name}</span>
                    <span class="author-handle" onclick="navigateTo('${post.author}'); event.stopPropagation();">${post.author}</span>
                </div>
                <div class="post-text">${linkify(post.text)}</div>
                ${quoteHtml}
                ${imageHtml}
                ${statsHtml}
                <div class="post-date">${post.date}</div>
            </div>
        </div>
    `;
}

function createUserListItem(id, user) {
    return `
        <div class="user-list-item" onclick="navigateTo('${id}')">
            <div class="post-avatar" style="width:40px; height:40px; font-size:16px; flex-shrink:0;">${user.icon || '👤'}</div>
            <div>
                <div class="author-name">${user.name}</div><div class="author-handle">${id}</div>
                <div style="font-size: 0.9em; color: #555; margin-top: 5px;">${linkify(user.bio)}</div>
            </div>
        </div>`;
}

// ==========================================
// 4. 正誤判定処理とCTF機能
// ==========================================
async function attemptReset() {
    let isAllCorrect = true;
    AppState.currentScenario.questions.forEach(q => {
        const userInput = document.getElementById(q.id).value.trim();
        if (userInput !== q.answer) isAllCorrect = false;
    });
    
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    
    if (isAllCorrect) {
        feedback.className = 'success';
        feedback.innerHTML = `<strong>【ハッキング成功】</strong><br>見事なOSINT調査です。複数の情報を組み合わせることで答えに辿り着きました。`;

        // URLに ?ctf=true が含まれているか判定
        const params = new URLSearchParams(window.location.search);
        
        if (params.get('ctf') === 'true') {
            try {
                // credentials: 'include' を指定することで、ログインセッションをAPIに送信する
                const response = await fetch('https://visusec.jp/app/SNSLeakSimulator/record.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include', 
                    body: JSON.stringify({
                        scenario_id: AppState.currentScenario.id
                    })
                });

                if (response.ok) {

                } else if (response.status === 401) {
                    // 未ログイン状態で ctf=true をつけてアクセスした場合のハンドリング
                    console.warn("CTFモードでの記録に失敗しました：ログインしていません。");
                }
            } catch (error) {
                console.error('通信エラー:', error);
            }
        }
    } else {
        feedback.className = 'error';
        feedback.innerHTML = `<strong>【認証失敗】</strong><br>回答が間違っています。投稿をクリックして「返信」をチェックしたり、「❤️いいねした人」を確認したりして、隠れた情報を探し出しましょう。`;
    }
}