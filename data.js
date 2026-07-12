const db = {
    "users": {
        "@cafe_chain": {
            "name": "星空コーヒー 公式",
            "icon": "☕",
            "bio": "新作フラペチーノ情報などを発信中！",
            "following": [],
            "followers": [
                "@akari",
                "@sister_ami",
                "@mika_cafe",
                "@sato_yuki"
            ]
        },
        "@gift_bot": {
            "name": "懸賞プレゼントBot",
            "icon": "🎁",
            "bio": "毎日当たる！フォロー＆RTで応募完了",
            "following": [],
            "followers": [
                "@sato_yuki",
                "@student_A",
                "@friend_C",
                "@friend_yumi"
            ]
        },
        "@news_24": {
            "name": "ニュース24時",
            "icon": "📰",
            "bio": "最新のニュースをお届け",
            "following": [],
            "followers": [
                "@kazu_gamer",
                "@camp_lover_hiro",
                "@student_A"
            ]
        },
        "@vtuber_x": {
            "name": "九条エックス🎮",
            "icon": "👾",
            "bio": "毎日21時から配信！FPS多め",
            "following": [],
            "followers": [
                "@kazu_gamer",
                "@student_A",
                "@friend_B"
            ]
        },
        "@idol_official": {
            "name": "Sparkle Girls 公式",
            "icon": "✨",
            "bio": "5人組アイドルグループ公式アカウント",
            "following": [],
            "followers": [
                "@sato_yuki",
                "@mika_cafe",
                "@akari"
            ]
        },
        "@hoshinagi_ramen": {
            "name": "星凪ラーメン",
            "icon": "🍜",
            "bio": "星凪市のソールフード、星凪ラーメン発祥の店",
            "following": [],
            "followers": [
                "@sato_yuki",
                "@ramen_bot"
            ]
        },
        "@uranai_bot": {
            "name": "365日誕生日占いBot",
            "icon": "🔮",
            "bio": "毎日の誕生日占いを配信します。",
            "following": [],
            "followers": [
                "@sato_yuki",
                "@akari"
            ]
        },
        "@local_super_f": {
            "name": "スーパーふくや 福岡本店",
            "icon": "🛒",
            "bio": "地元密着型スーパー。県内15店舗展開中！",
            "following": [],
            "followers": [
                "@sato_yuki"
            ]
        },
        "@outdoor_gear": {
            "name": "アウトドアGEAR",
            "icon": "⛺",
            "bio": "最新のキャンプギアを紹介！",
            "following": [],
            "followers": [
                "@camp_lover_hiro",
                "@friend_daiki"
            ]
        },
        "@ramen_bot": {
            "name": "全国ラーメン巡り",
            "icon": "🍜",
            "bio": "毎日ラーメンの画像を流します",
            "following": [],
            "followers": [
                "@camp_lover_hiro"
            ]
        },
        "@hoshinagi_tourism": {
            "name": "星凪市 観光協会",
            "icon": "🏞️",
            "bio": "星凪市の魅力を発信中！",
            "following": [],
            "followers": [
                "@mika_cafe"
            ]
        },
        "@sakuragi_alumni": {
            "name": "桜木小学校 同窓会",
            "icon": "🏫",
            "bio": "桜木小学校の卒業生向け連絡用アカウントです",
            "following": [],
            "followers": [
                "@mika_cafe",
                "@friend_yumi"
            ]
        },
        "@ito_farm_official": {
            "name": "伊藤農園",
            "icon": "🌾",
            "bio": "美味しいお米を全国へお届け！",
            "following": [],
            "followers": [
                "@takeru_univ"
            ]
        },
        "@aoba_minami_brass": {
            "name": "青葉南高校 吹奏楽部",
            "icon": "🎷",
            "bio": "青葉南高校吹奏楽部の公式アカウントです。",
            "following": [],
            "followers": [
                "@takeru_univ",
                "@friend_daichi"
            ]
        },
        "@aoba_kita_fes": {
            "name": "青葉北高校 文化祭実行委員",
            "icon": "🎈",
            "bio": "今年の文化祭は最高だ！",
            "following": [],
            "followers": [
                "@takeru_univ"
            ]
        },
        "@spam_bot_01": {
            "name": "スマホ副業ナビ",
            "icon": "💰",
            "bio": "1日5分で稼げる！",
            "following": [],
            "followers": []
        },
        "@ramdom_user_99": {
            "name": "田中",
            "icon": "👤",
            "bio": "無言フォロー失礼します",
            "following": [
                "@takeru_univ"
            ],
            "followers": []
        },
        "@brass_record_bot": {
            "name": "県吹奏楽コンクール記録Bot",
            "icon": "🎺",
            "bio": "過去のコンクール結果を不定期につぶやきます。",
            "following": [],
            "followers": [
                "@takeru_univ"
            ]
        },
        "@sato_yuki": {
            "name": "佐藤 ユキ",
            "icon": "⛄",
            "bio": "大学生！毎日楽しい！無言フォロー歓迎",
            "following": [
                "@akari",
                "@gift_bot",
                "@idol_official",
                "@cafe_chain",
                "@local_super_f"
            ],
            "followers": [
                "@akari"
            ]
        },
        "@akari": {
            "name": "あかり",
            "icon": "👱‍♀️",
            "bio": "ユキのいつメン",
            "following": [
                "@sato_yuki",
                "@cafe_chain",
                "@idol_official"
            ],
            "followers": [
                "@sato_yuki"
            ]
        },
        "@kazu_gamer": {
            "name": "カズ",
            "icon": "🎮",
            "bio": "FPSエンジョイ勢。無言フォロー失礼します。",
            "following": [
                "@sister_ami",
                "@news_24",
                "@vtuber_x"
            ],
            "followers": [
                "@sister_ami"
            ]
        },
        "@sister_ami": {
            "name": "あみ",
            "icon": "🎀",
            "bio": "JK2 / カフェ巡り / 兄(@kazu_gamer)はゲーマー",
            "following": [
                "@kazu_gamer",
                "@cafe_chain"
            ],
            "followers": [
                "@kazu_gamer"
            ]
        },
        "@camp_lover_hiro": {
            "name": "ヒロ",
            "icon": "⛺",
            "bio": "週末キャンパー / 焚き火愛好家",
            "following": [
                "@friend_daiki",
                "@car_weekly",
                "@news_24"
            ],
            "followers": [
                "@friend_daiki"
            ]
        },
        "@friend_daiki": {
            "name": "ダイキ",
            "icon": "🍺",
            "bio": "ヒロの大学のツレ",
            "following": [
                "@camp_lover_hiro"
            ],
            "followers": [
                "@camp_lover_hiro"
            ]
        },
        "@car_weekly": {
            "name": "週刊クルマ情報",
            "icon": "🚙",
            "bio": "最新の自動車ニュース・特集記事をお届け",
            "following": [],
            "followers": [
                "@camp_lover_hiro"
            ]
        },
        "@mika_cafe": {
            "name": "ミカ",
            "icon": "🍩",
            "bio": "カフェ巡りの記録。甘いものは正義。",
            "following": [
                "@friend_yumi",
                "@cafe_chain",
                "@idol_official"
            ],
            "followers": [
                "@friend_yumi"
            ]
        },
        "@friend_yumi": {
            "name": "ユミ",
            "icon": "💄",
            "bio": "コスメ大好き",
            "following": [
                "@mika_cafe",
                "@gift_bot"
            ],
            "followers": [
                "@mika_cafe"
            ]
        },
        "@student_A": {
            "name": "Aくん",
            "icon": "👦",
            "bio": "高校2年。適当に呟く",
            "following": [
                "@friend_B",
                "@gift_bot",
                "@vtuber_x"
            ],
            "followers": [
                "@friend_B"
            ]
        },
        "@friend_B": {
            "name": "Bくん",
            "icon": "🧑",
            "bio": "Aの友達",
            "following": [
                "@student_A",
                "@vtuber_x"
            ],
            "followers": [
                "@student_A"
            ]
        },
        "@friend_C": {
            "name": "Cくん",
            "icon": "👱",
            "bio": "適当に呟く",
            "following": [
                "@gift_bot"
            ],
            "followers": []
        },
        "@school_info_bot": {
            "name": "【非公式】星凪第二高校 掲示板",
            "icon": "🏫",
            "bio": "星凪第二高校の生徒向けに情報を発信。",
            "following": [],
            "followers": [
                "@student_A",
                "@friend_B",
                "@friend_C"
            ]
        },
        "@friend_D": {
            "name": "Dくん",
            "icon": "👦",
            "bio": "星凪第二 2-1",
            "following": [
                "@student_A"
            ],
            "followers": [
                "@student_A"
            ]
        },
        "@takeru_univ": {
            "name": "タケル",
            "icon": "🎷",
            "bio": "星凪（ほしなぎ）市で大学生やってます。元吹奏楽部。ラーメン巡り。",
            "following": [
                "@friend_daichi",
                "@brass_bot",
                "@gift_bot",
                "@cafe_chain",
                "@hoshinagi_ramen"
            ],
            "followers": [
                "@friend_daichi"
            ]
        },
        "@friend_daichi": {
            "name": "ダイチ",
            "icon": "😎",
            "bio": "大学生。タケルとは腐れ縁。",
            "following": [
                "@takeru_univ"
            ],
            "followers": [
                "@takeru_univ"
            ]
        },
        "@brass_bot": {
            "name": "吹奏楽コンクール結果Bot",
            "icon": "🎺",
            "bio": "全国の吹奏楽コンクールの結果を非公式に発信しています。",
            "following": [],
            "followers": [
                "@takeru_univ"
            ]
        },
        "@creepy_ojisan": {
            "name": "マサト@カフェ巡り",
            "icon": "👨",
            "bio": "美味しいコーヒーを求めて。カフェ好きと繋がりたいです。",
            "following": [
                "@mika_cafe"
            ],
            "followers": []
        },
        "@useless_classmate": {
            "name": "Eくん",
            "icon": "🏀",
            "bio": "星凪第二 2年。バスケ部。",
            "following": [
                "@student_A",
                "@friend_B"
            ],
            "followers": [
                "@student_A"
            ]
        },
        "@kato_saki": {
            "name": "サキ",
            "icon": "🎀",
            "bio": "ユキの親友！",
            "following": [
                "@sato_yuki"
            ],
            "followers": [
                "@sato_yuki"
            ]
        }
    },
    "posts": [
        {
            "id": "n1",
            "author": "@gift_bot",
            "date": "2024/10/25 12:00",
            "text": "🎁秋の大還元祭🎁\n抽選で100名様にAmazonギフト券1000円分が当たる！\nこの投稿をリポストで応募完了！",
            "retweetedBy": [
                "@sato_yuki",
                "@student_A",
                "@friend_yumi"
            ],
            "likedBy": [
                "@friend_C",
                "@kazu_gamer",
                "@friend_daiki"
            ],
            "repliesCount": 124
        },
        {
            "id": "n2",
            "author": "@cafe_chain",
            "date": "2024/10/22 15:00",
            "text": "☕新作「さつまいもマキアート」本日発売！🍂",
            "retweetedBy": [
                "@akari",
                "@sister_ami"
            ],
            "likedBy": [
                "@mika_cafe",
                "@sato_yuki"
            ],
            "repliesCount": 56
        },
        {
            "id": "n3",
            "author": "@vtuber_x",
            "date": "2024/10/27 20:00",
            "text": "【配信告知】21時からランクマ耐久！マスターいくまで終われません😭🔥",
            "retweetedBy": [
                "@kazu_gamer"
            ],
            "likedBy": [
                "@student_A",
                "@friend_B",
                "@kazu_gamer"
            ],
            "repliesCount": 89
        },
        {
            "id": "n4",
            "author": "@idol_official",
            "date": "2024/10/20 18:00",
            "text": "✨冬の全国ツアー決定！✨\nチケット先行受付は明日からスタートです！",
            "retweetedBy": [
                "@mika_cafe",
                "@sato_yuki"
            ],
            "likedBy": [
                "@akari",
                "@mika_cafe"
            ],
            "repliesCount": 210
        },
        {
            "id": "n5",
            "author": "@news_24",
            "date": "2024/10/28 08:00",
            "text": "【天気】今週末は全国的に冷え込む見込み。冬物の準備を。",
            "retweetedBy": [
                "@camp_lover_hiro"
            ],
            "likedBy": [
                "@kazu_gamer",
                "@student_A"
            ],
            "repliesCount": 12
        },
        {
            "id": "n6",
            "author": "@hoshinagi_ramen",
            "date": "2026/05/04 18:00",
            "text": "今日から１週間、大学生限定替え玉半額キャンペーン開催中！",
            "retweetedBy": [
                "@takeru_univ"
            ],
            "likedBy": [
                "@takeru_univ",
                "@ramen_bot"
            ],
            "repliesCount": 3
        },
        {
            "id": "p_super_1",
            "author": "@local_super_f",
            "date": "2024/09/20 10:00",
            "text": "お土産にもおすすめ、「通りもん」好評販売中！",
            "likedBy": ["@sato_yuki"],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p1_1",
            "author": "@sato_yuki",
            "date": "2024/10/10 18:00",
            "text": "ついに20歳になりました！今日からお酒解禁🍻 飲むぞー！",
            "likedBy": [
                "@akari",
                "@kato_saki"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p1_2",
            "author": "@akari",
            "date": "2024/10/10 18:05",
            "text": "@sato_yuki おめ！10月10日生まれって覚えやすくていいよねｗ 今度飲み行こ！",
            "replyTo": "p1_1",
            "likedBy": [
                "@sato_yuki"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p1_3",
            "author": "@kato_saki",
            "date": "2024/10/10 18:17",
            "text": "@sato_yuki お誕生日おめでとう🎉良い1年となりますように！",
            "replyTo": "p1_1",
            "likedBy": [
                "@sato_yuki"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p1_3",
            "author": "@sato_yuki",
            "date": "2024/09/25 18:30",
            "text": "親が実家から明太子と「通りもん」送ってくれた〜！地元の味最高😭",
            "likedBy": [
                "@akari"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p1_4",
            "author": "@akari",
            "date": "2024/09/25 18:35",
            "text": "@sato_yuki いいなー！やっぱ福岡の明太子は最高だよね✨",
            "replyTo": "p1_3",
            "likedBy": [
                "@sato_yuki"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p1_m1",
            "author": "@sato_yuki",
            "date": "2024/08/10 12:05",
            "text": "来月は北海道旅行だー！涼しいといいな",
            "likedBy": [
                "@akari"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p1_n1",
            "author": "@kato_saki",
            "date": "2024/09/25 18:40",
            "text": "@sato_yuki 通りもん美味しいよねー！長崎の名物だっけ？私もこの前食べた！",
            "replyTo": "p1_3",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p1_n2",
            "author": "@sato_yuki",
            "date": "2024/09/25 18:45",
            "text": "@kato_saki いや福岡だよｗｗｗ",
            "quoteId": "p_super_1", // ← ここでIDを指定する
            "replyTo": "p1_n1",
            "likedBy": [
                "@kato_saki"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p2_1",
            "author": "@kazu_gamer",
            "date": "2024/10/20 22:15",
            "text": "昨日のランクマッチ、味方強くて助かったわ",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p2_2",
            "author": "@kazu_gamer",
            "date": "2024/10/15 12:00",
            "text": "実家から荷物届いたわ。食料助かるー",
            "likedBy": [
                "@sister_ami"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p2_3",
            "author": "@sister_ami",
            "date": "2024/10/15 12:05",
            "text": "@kazu_gamer おかんが古い段ボールを再利用したせいで、送り状の宛名が旧姓の『高橋』のまま送っちゃったらしいよｗ 誰宛だよってならなかった？ｗ",
            "replyTo": "p2_2",
            "likedBy": [
                "@kazu_gamer"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p2_4",
            "author": "@kazu_gamer",
            "date": "2024/10/15 12:10",
            "text": "@sister_ami 宅配のお兄さん困惑してたわｗ",
            "replyTo": "p2_3",
            "likedBy": [
                "@sister_ami"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p2_m1",
            "author": "@kazu_gamer",
            "date": "2024/09/15 15:00",
            "text": "友達の家のポチ、可愛すぎ🐶 いつか犬飼いたいわ",
            "likedBy": [
                "@sister_ami"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p2_m2",
            "author": "@sister_ami",
            "date": "2024/10/12 18:00",
            "text": "実家の『ソラ』の散歩疲れたー🐶 でも可愛いから許す",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p2_5",
            "author": "@sister_ami",
            "date": "2024/05/10 15:30",
            "text": "部屋の片付けしてたら懐かしい写真出てきた！私が小学生の時に初めて飼った『マロン』🐶 今のソラも可愛いけど、やっぱり初代の思い入れは強いなー😢",
            "likedBy": [
                "@kazu_gamer"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p3_n1",
            "author": "@camp_lover_hiro",
            "date": "2024/10/10 20:00",
            "text": "昨日の焼き肉、最高だった！やっぱり肉だな🥩",
            "likedBy": [
                "@friend_daiki"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p3_n2",
            "author": "@ramen_bot",
            "date": "2024/10/08 12:00",
            "text": "本日の濃厚豚骨ラーメン🍜",
            "likedBy": [
                "@camp_lover_hiro"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p3_1",
            "author": "@friend_daiki",
            "date": "2024/10/01 12:30",
            "text": "相変わらずキャンプ飯ばっかり食ってんな笑",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p3_2",
            "author": "@camp_lover_hiro",
            "date": "2024/10/01 12:35",
            "text": "@friend_daiki キャンプでは肉焼くけど、俺の人生のソウルフードは『オムライス』一択だから！",
            "replyTo": "p3_1",
            "likedBy": [
                "@friend_daiki"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p3_3",
            "author": "@car_weekly",
            "date": "2024/10/12 08:00",
            "text": "【特集】キャンプにも最適！積載量抜群の『N-BOX』の魅力を徹底解剖！",
            "likedBy": [
                "@camp_lover_hiro"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p3_4",
            "author": "@camp_lover_hiro",
            "date": "2024/10/12 09:00",
            "text": "これ！俺が免許とって最初に買った相棒！めっちゃ走ってくれたなー⛺",
            "quoteId": "p3_3",
            "likedBy": [
                "@friend_daiki"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p3_5",
            "author": "@friend_daiki",
            "date": "2024/10/12 09:10",
            "text": "@camp_lover_hiro あの白のN-BOX、大学の時めっちゃ乗せてもらったわｗ 懐かしい",
            "replyTo": "p3_4",
            "likedBy": [
                "@camp_lover_hiro"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p4_1",
            "author": "@mika_cafe",
            "date": "2024/10/25 15:00",
            "text": "お母さんの実家に帰省中！昔からあるこのお店、テラス席からの眺めが最高✨",
            "likedBy": [
                "@friend_yumi"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p4_c1",
            "author": "@hoshinagi_tourism",
            "date": "2024/10/25 10:00",
            "text": "【おかえりなさい】帰省シーズンですね。星凪市は今日も快晴です！名物のスイーツをぜひご堪能ください。",
            "likedBy": [
                "@mika_cafe"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p4_m1",
            "author": "@mika_cafe",
            "date": "2024/09/15 12:00",
            "text": "テレビで『第一小学校』の特集やってる！制服かわいいな〜。うちのボロい小学校とは大違い😂",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p4_2",
            "author": "@friend_yumi",
            "date": "2024/10/05 21:00",
            "text": "来月の同窓会、当時のタイムカプセル掘り起こすイベントあるらしい！今からめっちゃ楽しみ！",
            "likedBy": [
                "@mika_cafe"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p4_3",
            "author": "@mika_cafe",
            "date": "2024/10/05 21:05",
            "text": "@friend_yumi 私も同窓会のアカウントからDM来て知った！当日よろしくね✨",
            "replyTo": "p4_2",
            "likedBy": [
                "@friend_yumi"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p4_c2",
            "author": "@sakuragi_alumni",
            "date": "2024/09/01 12:00",
            "text": "【お知らせ】第30期生の皆様、来月10周年の同窓会を開催いたします。詳細はDMにて。",
            "likedBy": [
                "@mika_cafe",
                "@friend_yumi"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p4_n1",
            "author": "@creepy_ojisan",
            "date": "2024/10/25 15:05",
            "text": "@mika_cafe テラス席いいですね！私もよく行きますよ！今度ご一緒しませんか？😅",
            "replyTo": "p4_1",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p5_1",
            "author": "@student_A",
            "date": "2024/10/28 15:00",
            "text": "文化祭の準備マジで終わらん。買い出しで段ボール大量にもらってきたけど、これ全部黒く塗るのか…",
            "likedBy": [
                "@friend_B"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p5_2",
            "author": "@friend_B",
            "date": "2024/10/28 15:05",
            "text": "@student_A お疲れｗ でも3組の『メイド喫茶』みたいな面倒な接客よりはマシっしょ！",
            "replyTo": "p5_1",
            "likedBy": [
                "@student_A"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p5_3",
            "author": "@friend_C",
            "date": "2024/10/27 19:00",
            "text": "2組のチュロス、試食させてもらったけど美味かったわー",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p5_4",
            "author": "@friend_D",
            "date": "2024/10/29 17:00",
            "text": "うちのクラスの劇、リハーサル大成功！明日がんばるぞー！",
            "likedBy": [
                "@student_A"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p5_c1",
            "author": "@school_info_bot",
            "date": "2024/10/20 12:00",
            "text": "【文化祭パンフレット情報】\n今年の2学年のクラス出し物は以下の通りです！全4クラスで競い合います🔥\n・メイド喫茶\n・お化け屋敷\n・チュロス販売\n・演劇",
            "likedBy": [
                "@student_A",
                "@friend_B",
                "@friend_C"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "p5_n1",
            "author": "@useless_classmate",
            "date": "2024/10/28 15:10",
            "text": "@student_A 買い出しお疲れ！俺らはこれからバスケの練習あるから手伝えんわスマン🙏",
            "replyTo": "p5_1",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "p5_n2",
            "author": "@student_A",
            "date": "2024/10/28 15:15",
            "text": "@useless_classmate 部活ふぁいとー。俺は死ぬ気で塗るわ😇",
            "replyTo": "p5_n1",
            "likedBy": [
                "@useless_classmate"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_1",
            "author": "@takeru_univ",
            "date": "2026/05/05 12:00",
            "text": "母方の実家からお米が届いた！じいちゃん達が作ってくれたお米、マジで日本一美味い🌾",
            "likedBy": [
                "@friend_daichi"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "t_n1",
            "author": "@spam_bot_01",
            "date": "2026/05/05 12:01",
            "text": "@takeru_univ 突然のメッセージ失礼します！スマホで簡単に稼げる副業に興味ありませんか？詳細はこちら！",
            "replyTo": "t_1",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_c1",
            "author": "@ito_farm_official",
            "date": "2026/05/05 14:00",
            "text": "離れて暮らす孫からこうやって褒めてもらえるのが一番のやりがいです！いつもありがとうね🌾",
            "quote": {
                "author": "@takeru_univ",
                "name": "タケル",
                "text": "母方の実家からお米が届いた！じいちゃん達が作ってくれたお米、マジで日本一美味い🌾"
            },
            "likedBy": [
                "@takeru_univ"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_3",
            "author": "@takeru_univ",
            "date": "2026/04/20 22:00",
            "text": "大掃除してたら、高校最後のコンクールのDVD出てきた。自由曲の『宝島』、今聴いても最高の演奏だわ✨",
            "likedBy": [
                "@friend_daichi",
                "@ramdom_user_99"
            ],
            "retweetedBy": [],
            "repliesCount": 2
        },
        {
            "id": "t_n2",
            "author": "@ramdom_user_99",
            "date": "2026/04/20 22:05",
            "text": "@takeru_univ 宝島いいですよね！自分も好きです！",
            "replyTo": "t_3",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_4",
            "author": "@friend_daichi",
            "date": "2026/04/20 22:15",
            "text": "@takeru_univ あの時のタケルのサックスソロ、マジで鳥肌モンだったぞ！",
            "replyTo": "t_3",
            "likedBy": [
                "@takeru_univ"
            ],
            "retweetedBy": [],
            "repliesCount": 1
        },
        {
            "id": "t_5",
            "author": "@takeru_univ",
            "date": "2026/04/20 22:20",
            "text": "@friend_daichi ありがと！あの年だけ奇跡的に県大会で『金賞』とれたの、今でも俺の誇りだわ😭",
            "replyTo": "t_4",
            "likedBy": [
                "@friend_daichi"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_c2",
            "author": "@brass_record_bot",
            "date": "2026/03/10 18:00",
            "text": "【過去データ振り返り】〇〇県吹奏楽コンクール 高等学校の部\n🥇金賞・県代表：青葉南高校（自由曲『宝島』）\n🥇金賞：星凪第一高校（自由曲『春の猟犬』）\n🥈銀賞：青葉北高校（自由曲『宝島』）",
            "likedBy": [
                "@takeru_univ"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_noise_1",
            "author": "@takeru_univ",
            "date": "2026/05/11 08:30",
            "text": "1限休講になった！もっと早く言ってくれよ…",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_noise_2",
            "author": "@friend_daichi",
            "date": "2026/05/10 23:00",
            "text": "明日のレポート終わらん。誰か助けて",
            "likedBy": [
                "@takeru_univ"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_noise_3",
            "author": "@takeru_univ",
            "date": "2026/05/08 19:00",
            "text": "最近このアニメにハマってるんだけど、作画神すぎない？",
            "likedBy": [],
            "retweetedBy": [],
            "repliesCount": 0
        },
        {
            "id": "t_noise_4",
            "author": "@takeru_univ",
            "date": "2026/05/02 12:00",
            "text": "バイト先の店長、シフトの組み方下手くそすぎてキレそう",
            "likedBy": [
                "@friend_daichi"
            ],
            "retweetedBy": [],
            "repliesCount": 0
        }
    ],
    "scenarios": [
        {
            "id": "s1",
            "title": "【S1】点と点を繋ぐ情報収集（ユキ編）",
            "target": "@sato_yuki",
            "questions": [
                {
                    "id": "q1",
                    "label": "生年月日は？ (例: 1995/01/01)",
                    "answer": "2004/10/10"
                },
                {
                    "id": "q2",
                    "label": "出身の都道府県は？ (例: 東京)",
                    "answer": "福岡"
                }
            ]
        },
        {
            "id": "s2",
            "title": "【S2】家族のタイムライン調査（カズ編）",
            "target": "@kazu_gamer",
            "questions": [
                {
                    "id": "q1",
                    "label": "母親の旧姓は？ (漢字2文字)",
                    "answer": "高橋"
                },
                {
                    "id": "q2",
                    "label": "初めて飼ったペットの名前は？",
                    "answer": "マロン"
                }
            ]
        },
        {
            "id": "s3",
            "title": "【S3】引用リポストと隠れた会話（ヒロ編）",
            "target": "@camp_lover_hiro",
            "questions": [
                {
                    "id": "q1",
                    "label": "好きな食べ物は？",
                    "answer": "オムライス"
                },
                {
                    "id": "q2",
                    "label": "初めて買った車の車種は？",
                    "answer": "N-BOX"
                }
            ]
        },
        {
            "id": "s4",
            "title": "【S4】フォロー関係と組織の調査（ミカ編）",
            "target": "@mika_cafe",
            "questions": [
                {
                    "id": "q1",
                    "label": "出身の小学校は？ (「小学校」は省く。例: 第一)",
                    "answer": "桜木"
                },
                {
                    "id": "q2",
                    "label": "母親の出身地は？ (市区町村まで。例: 星凪市)",
                    "answer": "星凪市"
                }
            ]
        },
        {
            "id": "s5",
            "title": "【S5】交友関係からの消去法特定（Aくん編）",
            "target": "@student_A",
            "questions": [
                {
                    "id": "q1",
                    "label": "所属しているクラスは？ (例: 1年1組)",
                    "answer": "2年4組"
                },
                {
                    "id": "q2",
                    "label": "文化祭の出し物は？",
                    "answer": "お化け屋敷"
                }
            ]
        },
        {
            "id": "s6",
            "title": "【S6】複合OSINT調査（タケル編）",
            "target": "@takeru_univ",
            "questions": [
                {
                    "id": "q1",
                    "label": "母親の旧姓は？ (漢字2文字)",
                    "answer": "伊藤"
                },
                {
                    "id": "q2",
                    "label": "出身の高校は？ (例: 〇〇高校)",
                    "answer": "青葉南高校"
                }
            ]
        }
    ]
};