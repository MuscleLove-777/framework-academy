/* ============================================
   Level 6: イノベーション・応用フレームワーク
   ============================================ */
const LEVEL6_DATA = {
    id: 6,
    title: "イノベーション・応用フレームワーク",
    icon: "🚀",
    description: "ブルーオーシャン、リーンスタートアップ、シックスシグマなど革新と応用",
    modules: [
        // ========================================
        // Module 601: ブルーオーシャン戦略 & 破壊的イノベーション
        // ========================================
        {
            id: 601,
            title: "ブルーオーシャン戦略 & 破壊的イノベーション",
            duration: "12分",
            content: `
<h2>ブルーオーシャン戦略 & 破壊的イノベーション</h2>
<p>競争の激しい既存市場（レッドオーシャン）で戦い続けるのではなく、未開拓の新市場（ブルーオーシャン）を創造する戦略と、既存の巨大企業が見落としがちなローエンド市場から革新が起こる破壊的イノベーション理論を学びます。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 なぜ重要か？</div>
    <p>既存市場での価格競争は利益を圧迫し、差別化が困難になります。ブルーオーシャン戦略は「競争を無意味にする」という発想の転換を提供し、破壊的イノベーション理論は業界のゲームチェンジがどこから起こるかを理解するフレームワークです。</p>
</div>

<h3>1. ブルーオーシャン vs レッドオーシャン</h3>
<p>W・チャン・キムとレネ・モボルニュが提唱したブルーオーシャン戦略の核心は、競争のない市場空間を創造することです。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h3>🔴 レッドオーシャン</h3>
        <ul>
            <li><strong>既存の市場空間</strong>で競争する</li>
            <li>競合他社に<strong>打ち勝つ</strong>ことが目標</li>
            <li><strong>既存の需要</strong>を奪い合う</li>
            <li>価値と<strong>コストのトレードオフ</strong></li>
            <li>差別化 or 低コストの<strong>どちらか</strong>を選択</li>
            <li>市場が飽和し<strong>利益率が低下</strong></li>
        </ul>
    </div>
    <div class="compare-card">
        <h3>🔵 ブルーオーシャン</h3>
        <ul>
            <li><strong>未開拓の市場空間</strong>を創造する</li>
            <li>競争を<strong>無意味にする</strong>ことが目標</li>
            <li><strong>新しい需要</strong>を掘り起こす</li>
            <li>価値と<strong>コストを同時に追求</strong></li>
            <li>差別化と低コストを<strong>同時に実現</strong></li>
            <li>無競争で<strong>高い利益率</strong></li>
        </ul>
    </div>
</div>

<h3>2. 戦略キャンバスと価値曲線</h3>
<p>戦略キャンバスは、業界の競争要因を横軸、各要因の提供レベルを縦軸にとったグラフです。自社と競合の「価値曲線」を描くことで、差別化ポイントを視覚的に把握できます。</p>

<div class="visual-box">
    <div class="visual-box-title">📊 戦略キャンバスのイメージ（ワイン業界の例）</div>
    <table>
        <tr>
            <th>競争要因</th>
            <th>従来型ワイン</th>
            <th>ブルーオーシャン型<br>（イエローテイル）</th>
        </tr>
        <tr><td>価格</td><td>高い</td><td>手頃</td></tr>
        <tr><td>ワインの複雑さ</td><td>高い</td><td>低い（シンプル）</td></tr>
        <tr><td>ヴィンテージ品質</td><td>高い</td><td>低い</td></tr>
        <tr><td>ワイナリーの格式</td><td>高い</td><td>低い</td></tr>
        <tr><td>飲みやすさ</td><td>低い</td><td>高い</td></tr>
        <tr><td>楽しさ・冒険心</td><td>低い</td><td>高い</td></tr>
        <tr><td>選びやすさ</td><td>低い</td><td>高い</td></tr>
    </table>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 価値曲線の作り方</div>
    <p><strong>① 競争要因の特定</strong> → 業界で一般的に競争される要素をリストアップ<br>
    <strong>② スコアリング</strong> → 各要因について自社と競合の提供レベルを評価（高・中・低）<br>
    <strong>③ プロット</strong> → 折れ線グラフとして描画<br>
    <strong>④ 差別化の発見</strong> → 曲線の形が異なるほど差別化が大きい</p>
</div>

<h3>3. 4つのアクション・フレームワーク（ERRCグリッド）</h3>
<p>ブルーオーシャンを創出するための具体的な4つのアクションです。</p>

<div class="visual-box">
    <div class="visual-box-title">🔧 4つのアクション・フレームワーク</div>
    <table>
        <tr>
            <th>アクション</th>
            <th>英語</th>
            <th>内容</th>
            <th>イエローテイルの例</th>
        </tr>
        <tr>
            <td><strong>排除</strong></td>
            <td>Eliminate</td>
            <td>業界が当然とする要素を取り除く</td>
            <td>ヴィンテージ表記、熟成表現</td>
        </tr>
        <tr>
            <td><strong>削減</strong></td>
            <td>Reduce</td>
            <td>業界標準以下に削る要素</td>
            <td>味の複雑さ、ワインの種類</td>
        </tr>
        <tr>
            <td><strong>増加</strong></td>
            <td>Raise</td>
            <td>業界標準以上に引き上げる要素</td>
            <td>飲みやすさ、店頭での選びやすさ</td>
        </tr>
        <tr>
            <td><strong>創造</strong></td>
            <td>Create</td>
            <td>業界にない要素を新しく作る</td>
            <td>楽しさ、冒険心、カジュアルさ</td>
        </tr>
    </table>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 ERRCグリッドの活用法</div>
    <p>4つのアクションを2×2のマトリクスに配置して一覧化すると、チーム全体で戦略方針を共有しやすくなります。「排除」と「削減」でコストを下げ、「増加」と「創造」で価値を高めるのがポイントです。</p>
</div>

<h3>4. 破壊的イノベーション理論</h3>
<p>クレイトン・クリステンセンが提唱した理論で、優れた企業がなぜ失敗するのかを説明します。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h3>🔄 持続的イノベーション</h3>
        <ul>
            <li>既存顧客の要求に応えて<strong>性能を向上</strong>させる</li>
            <li>既存の大企業が<strong>得意</strong>とする</li>
            <li>市場の<strong>上位セグメント</strong>を狙う</li>
            <li>利益率が<strong>高い</strong></li>
            <li>例：より高性能なPC、高画質カメラ</li>
        </ul>
    </div>
    <div class="compare-card">
        <h3>💥 破壊的イノベーション</h3>
        <ul>
            <li>既存製品より<strong>性能は劣る</strong>が別の価値を持つ</li>
            <li>新規参入者・<strong>小さな企業</strong>が起こす</li>
            <li>市場の<strong>下位セグメントや新市場</strong>を狙う</li>
            <li>初期は利益率が<strong>低い</strong></li>
            <li>例：初期のPC、デジカメ、ストリーミング</li>
        </ul>
    </div>
</div>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h3>ローエンド型破壊</h3>
            <p>既存市場の<strong>低価格帯</strong>から参入。既存企業が過剰品質・過剰機能を提供しているセグメントで、「十分な品質」を低コストで提供する。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h3>新市場型破壊</h3>
            <p>従来<strong>非消費者</strong>だった人々に向けた新市場を創出。手軽さ・便利さ・低価格で、従来は利用していなかった層を取り込む。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h3>市場の逆転</h3>
            <p>破壊的製品の性能が向上し、やがて<strong>メインストリーム顧客</strong>も満足するレベルに達する。既存企業のシェアが急速に奪われる。</p>
        </div>
    </div>
</div>

<h3>5. 事例研究：Netflix</h3>

<div class="visual-box">
    <div class="visual-box-title">🎬 Netflixの破壊的イノベーション</div>
    <table>
        <tr>
            <th>段階</th>
            <th>Netflix</th>
            <th>Blockbuster（既存企業）</th>
        </tr>
        <tr>
            <td><strong>Phase 1</strong><br>DVDレンタル</td>
            <td>郵送DVDレンタル（月額制）<br>品揃え豊富、延滞料なし</td>
            <td>店舗型レンタル<br>巨大な店舗ネットワーク</td>
        </tr>
        <tr>
            <td><strong>Phase 2</strong><br>ストリーミング</td>
            <td>オンラインストリーミング開始<br>低画質だが利便性が高い</td>
            <td>店舗型に固執<br>オンライン対応が遅れる</td>
        </tr>
        <tr>
            <td><strong>Phase 3</strong><br>オリジナルコンテンツ</td>
            <td>自社制作コンテンツ<br>グローバル2億人超の会員</td>
            <td>2010年破産申請<br>市場から退場</td>
        </tr>
    </table>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ イノベーターのジレンマ</div>
    <p>Blockbusterは「優れた経営判断」をしたにもかかわらず失敗しました。既存顧客の声を聞き、利益率の高い事業に集中した結果、破壊的変化に対応できなかったのです。これが「イノベーターのジレンマ」の本質です。大企業ほどこの罠に陥りやすいことを忘れないでください。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ ブルーオーシャン × 破壊的イノベーションの統合的理解</div>
    <p><strong>ブルーオーシャン戦略</strong>は「どのように新市場を創るか」のアクション手法、<strong>破壊的イノベーション理論</strong>は「なぜ既存企業が新市場に対応できないか」のメカニズム説明です。両方を理解することで、戦略立案の精度が格段に上がります。</p>
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "ブルーオーシャン戦略の「4つのアクション・フレームワーク（ERRC）」に含まれないものはどれですか？",
                    options: [
                        "排除（Eliminate）",
                        "削減（Reduce）",
                        "模倣（Replicate）",
                        "創造（Create）"
                    ],
                    answer: 2,
                    explanation: "ERRCグリッドは「排除（Eliminate）・削減（Reduce）・増加（Raise）・創造（Create）」の4つです。「模倣（Replicate）」は含まれません。「増加（Raise）」が正しい要素です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "クリステンセンの破壊的イノベーション理論において、破壊的製品の初期の特徴として正しいものはどれですか？",
                    options: [
                        "既存製品より高性能で高価格である",
                        "既存製品より性能は劣るが、別の価値（安さ・手軽さ等）を持つ",
                        "既存の主流顧客に最も支持される",
                        "既存企業が積極的に投資して開発する"
                    ],
                    answer: 1,
                    explanation: "破壊的イノベーションの初期段階では、既存製品と比較して性能は劣りますが、低価格・手軽さ・便利さなど別の価値を提供します。そのため既存企業は脅威と認識せず、対応が遅れます。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "ブルーオーシャン戦略における「戦略キャンバス」の正しい使い方はどれですか？",
                    options: [
                        "財務指標を時系列で比較するためのグラフ",
                        "組織構造を階層的に図示するためのチャート",
                        "業界の競争要因を横軸、提供レベルを縦軸にとり、自社と競合の価値曲線を比較する",
                        "顧客セグメントごとの市場規模を円グラフで表すツール"
                    ],
                    answer: 2,
                    explanation: "戦略キャンバスは、横軸に業界の主要な競争要因、縦軸に各要因の提供レベルをとり、自社と競合の「価値曲線」を折れ線グラフとして描くことで、差別化ポイントを視覚的に把握するツールです。"
                }
            ]
        },

        // ========================================
        // Module 602: リーンスタートアップ & ビジネスモデルキャンバス
        // ========================================
        {
            id: 602,
            title: "リーンスタートアップ & ビジネスモデルキャンバス",
            duration: "12分",
            content: `
<h2>リーンスタートアップ & ビジネスモデルキャンバス</h2>
<p>エリック・リースが提唱したリーンスタートアップは、不確実性の高い状況で素早く仮説検証を繰り返し、無駄を最小化して事業を構築する手法です。アレクサンダー・オスターワルダーのビジネスモデルキャンバスと組み合わせることで、事業の全体像と検証サイクルを体系的に管理できます。</p>

<h3>1. Build → Measure → Learn サイクル</h3>
<p>リーンスタートアップの中核は「構築→計測→学習」のフィードバックループを高速で回すことです。</p>

<div class="visual-box">
    <div class="visual-box-title">🔄 Build → Measure → Learn ループ</div>
    <div style="text-align:center; padding:20px 0;">
        <table>
            <tr>
                <th>ステップ</th>
                <th>内容</th>
                <th>アウトプット</th>
            </tr>
            <tr>
                <td><strong>① Build（構築）</strong></td>
                <td>アイデアを最小限の製品（MVP）として素早く形にする</td>
                <td>MVP（実用最小限の製品）</td>
            </tr>
            <tr>
                <td><strong>② Measure（計測）</strong></td>
                <td>MVPを実際の顧客に使ってもらい、データを収集する</td>
                <td>定量・定性データ</td>
            </tr>
            <tr>
                <td><strong>③ Learn（学習）</strong></td>
                <td>データから仮説が正しいかを検証し、次のアクションを決める</td>
                <td>ピボット or 続行の判断</td>
            </tr>
        </table>
    </div>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 BMLループの核心</div>
    <p><strong>このサイクルの1周を「いかに短くするか」</strong>が成功の鍵です。<br>
    アイデア → <strong>Build</strong> → プロダクト → <strong>Measure</strong> → データ → <strong>Learn</strong> → アイデア … のループを最短で回します。<br>
    一般的なスタートアップでは、1サイクルを<strong>1〜4週間</strong>で回すことが目標です。</p>
</div>

<h3>2. MVP（Minimum Viable Product）の考え方と種類</h3>
<p>MVPとは「仮説を検証するために必要な<strong>最小限の機能</strong>を持った製品」です。完璧な製品を作ることが目的ではなく、学習を最大化することが目的です。</p>

<div class="visual-box">
    <div class="visual-box-title">🧪 MVPの種類と特徴</div>
    <table>
        <tr>
            <th>種類</th>
            <th>概要</th>
            <th>コスト</th>
            <th>事例</th>
        </tr>
        <tr>
            <td><strong>ランディングページ型</strong></td>
            <td>製品説明のWebページだけ作り、需要を測定</td>
            <td>極低</td>
            <td>Buffer（SNS管理ツール）</td>
        </tr>
        <tr>
            <td><strong>動画MVP</strong></td>
            <td>製品コンセプトを動画で紹介して反応を測定</td>
            <td>低</td>
            <td>Dropbox（デモ動画）</td>
        </tr>
        <tr>
            <td><strong>オズの魔法使い型</strong></td>
            <td>自動化されたように見せて裏で人手で運営</td>
            <td>中</td>
            <td>Zappos（靴のEC）</td>
        </tr>
        <tr>
            <td><strong>コンシェルジュ型</strong></td>
            <td>少数の顧客に手動でサービスを提供</td>
            <td>中</td>
            <td>Food on the Table</td>
        </tr>
        <tr>
            <td><strong>プロトタイプ型</strong></td>
            <td>基本機能だけの実動プロトタイプを開発</td>
            <td>高</td>
            <td>多くのSaaS製品</td>
        </tr>
    </table>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 MVPで最も重要なこと</div>
    <p>MVPは「品質が低い製品」ではなく「<strong>検証に必要最小限の製品</strong>」です。検証したい仮説を明確にし、その仮説を検証できる最もシンプルな方法を選びましょう。作りすぎは最大の無駄です。</p>
</div>

<h3>3. ピボットの種類</h3>
<p>計測・学習の結果、当初の仮説が正しくないと判断した場合、戦略を方向転換します。これが「ピボット」です。</p>

<div class="visual-box">
    <div class="visual-box-title">🔀 ピボットの10類型</div>
    <table>
        <tr>
            <th>ピボット類型</th>
            <th>内容</th>
            <th>例</th>
        </tr>
        <tr>
            <td><strong>ズームイン</strong></td>
            <td>製品の一機能を全体として切り出す</td>
            <td>Instagram（位置情報→写真共有）</td>
        </tr>
        <tr>
            <td><strong>ズームアウト</strong></td>
            <td>製品全体を一機能に格下げし拡張する</td>
            <td>Yelp（メール推薦→レビューサイト）</td>
        </tr>
        <tr>
            <td><strong>顧客セグメント</strong></td>
            <td>ターゲット顧客を変更する</td>
            <td>Slack（ゲーム会社→一般企業）</td>
        </tr>
        <tr>
            <td><strong>顧客ニーズ</strong></td>
            <td>解決する問題を変更する</td>
            <td>Starbucks（豆販売→カフェ体験）</td>
        </tr>
        <tr>
            <td><strong>プラットフォーム</strong></td>
            <td>アプリ↔プラットフォームを転換</td>
            <td>多くのSaaS企業</td>
        </tr>
        <tr>
            <td><strong>収益モデル</strong></td>
            <td>マネタイズ方法を変更する</td>
            <td>YouTube（有料→広告収益）</td>
        </tr>
        <tr>
            <td><strong>チャネル</strong></td>
            <td>販売・流通経路を変更する</td>
            <td>Dell（店舗→直販）</td>
        </tr>
        <tr>
            <td><strong>テクノロジー</strong></td>
            <td>同じ価値を別技術で実現する</td>
            <td>Netflix（DVD→ストリーミング）</td>
        </tr>
        <tr>
            <td><strong>バリューキャプチャー</strong></td>
            <td>価値の取り込み方を変更する</td>
            <td>フリーミアムモデルへの転換</td>
        </tr>
        <tr>
            <td><strong>成長エンジン</strong></td>
            <td>成長戦略を変更する</td>
            <td>バイラル→有料獲得</td>
        </tr>
    </table>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ ピボットの判断基準</div>
    <p>「うまくいっていないから変える」のではなく、<strong>データに基づいて仮説が棄却された場合</strong>にピボットします。感覚的な判断ではなく、事前に設定した指標（アクショナブルメトリクス）に基づいて決断しましょう。</p>
</div>

<h3>4. ビジネスモデルキャンバス（BMC）</h3>
<p>9つのブロックでビジネスモデルの全体像を1枚の図に可視化するフレームワークです。</p>

<div class="visual-box">
    <div class="visual-box-title">📋 ビジネスモデルキャンバス 9ブロック</div>
    <table>
        <tr>
            <th>#</th>
            <th>ブロック</th>
            <th>問い</th>
            <th>具体例（Netflix）</th>
        </tr>
        <tr>
            <td>1</td>
            <td><strong>顧客セグメント</strong><br>(CS)</td>
            <td>誰のために価値を創造するか？</td>
            <td>映画・ドラマファン、家族、若年層</td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>価値提案</strong><br>(VP)</td>
            <td>顧客にどんな価値を提供するか？</td>
            <td>好きな時に好きなだけ視聴、オリジナル作品</td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>チャネル</strong><br>(CH)</td>
            <td>どのように価値を届けるか？</td>
            <td>Webアプリ、モバイルアプリ、スマートTV</td>
        </tr>
        <tr>
            <td>4</td>
            <td><strong>顧客との関係</strong><br>(CR)</td>
            <td>どんな関係を構築するか？</td>
            <td>パーソナライズ推薦、セルフサービス</td>
        </tr>
        <tr>
            <td>5</td>
            <td><strong>収益の流れ</strong><br>(RS)</td>
            <td>どのように収益を得るか？</td>
            <td>月額サブスクリプション</td>
        </tr>
        <tr>
            <td>6</td>
            <td><strong>主要リソース</strong><br>(KR)</td>
            <td>価値提供に必要な資源は？</td>
            <td>コンテンツライブラリ、推薦アルゴリズム</td>
        </tr>
        <tr>
            <td>7</td>
            <td><strong>主要活動</strong><br>(KA)</td>
            <td>価値提供のために何をするか？</td>
            <td>コンテンツ制作・調達、プラットフォーム開発</td>
        </tr>
        <tr>
            <td>8</td>
            <td><strong>主要パートナー</strong><br>(KP)</td>
            <td>誰と協力するか？</td>
            <td>制作会社、通信事業者、デバイスメーカー</td>
        </tr>
        <tr>
            <td>9</td>
            <td><strong>コスト構造</strong><br>(CS)</td>
            <td>主なコストは何か？</td>
            <td>コンテンツ制作費、配信インフラ、マーケ費</td>
        </tr>
    </table>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ リーンスタートアップ × BMC の統合活用</div>
    <p>ビジネスモデルキャンバスの各ブロックを「仮説」として捉え、リーンスタートアップのBMLループで1つずつ検証していくのが最も効果的な使い方です。<br>
    <strong>① BMCで仮説を可視化 → ② 最もリスクの高い仮説を特定 → ③ MVPで検証 → ④ 結果に応じてBMCを更新</strong></p>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 リーンキャンバスとの違い</div>
    <p>アッシュ・マウリヤが提案した<strong>リーンキャンバス</strong>は、BMCをスタートアップ向けにアレンジしたものです。「主要パートナー」を「課題」に、「主要活動」を「ソリューション」に、「顧客との関係」を「圧倒的な優位性」に、「主要リソース」を「主要指標」に置き換えています。早期のスタートアップにはリーンキャンバスが、ある程度事業が確立したらBMCが適しています。</p>
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "リーンスタートアップの「Build → Measure → Learn」サイクルにおいて、最も重要な目標は何ですか？",
                    options: [
                        "できるだけ多くの機能を持つ完成品を構築すること",
                        "サイクルの1周をできるだけ短くして学習を最大化すること",
                        "各フェーズに十分な時間をかけて品質を確保すること",
                        "投資家へのプレゼン資料を作成すること"
                    ],
                    answer: 1,
                    explanation: "BMLループの核心は、1サイクルを高速で回して学習を最大化することです。完璧な製品を作ることではなく、仮説を素早く検証して方向性を確認・修正することが目的です。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "MVP（Minimum Viable Product）の「オズの魔法使い型」の特徴として正しいものはどれですか？",
                    options: [
                        "製品コンセプトを動画で紹介して反応を測定する",
                        "自動化されたように見せかけて裏では人手で運営する",
                        "必要最小限の機能だけで実動するプロトタイプを作る",
                        "製品説明のWebページだけ作り需要を測定する"
                    ],
                    answer: 1,
                    explanation: "「オズの魔法使い型」MVPは、顧客にはシステムが自動的に動いているように見せかけながら、裏側では人手でサービスを運営する方法です。Zapposの創業者が靴の写真をWebに載せ、注文が来たら自分で買いに行ったのが有名な例です。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "ビジネスモデルキャンバスの9つのブロックに含まれないものはどれですか？",
                    options: [
                        "価値提案（Value Propositions）",
                        "顧客セグメント（Customer Segments）",
                        "競合分析（Competitor Analysis）",
                        "収益の流れ（Revenue Streams）"
                    ],
                    answer: 2,
                    explanation: "ビジネスモデルキャンバスの9ブロックは、顧客セグメント・価値提案・チャネル・顧客との関係・収益の流れ・主要リソース・主要活動・主要パートナー・コスト構造です。「競合分析」は含まれていません。"
                }
            ]
        },

        // ========================================
        // Module 603: TOC & シックスシグマ & TQM
        // ========================================
        {
            id: 603,
            title: "TOC & シックスシグマ & TQM",
            duration: "10分",
            content: `
<h2>TOC & シックスシグマ & TQM</h2>
<p>製造業から生まれ、あらゆる業界に応用されている3つの品質・プロセス改善フレームワークを学びます。TOC（制約理論）は全体最適のボトルネック管理、シックスシグマは統計的品質管理、TQM（総合的品質管理）は組織全体の品質文化構築に焦点を当てています。</p>

<h3>1. TOC（Theory of Constraints：制約理論）</h3>
<p>エリヤフ・ゴールドラットが提唱した理論で、「システム全体のパフォーマンスは最も弱い部分（制約・ボトルネック）によって決まる」という考え方です。</p>

<div class="info-box formula">
    <div class="info-box-title">📐 TOCの基本原理</div>
    <p><strong>鎖の強さは最も弱い環で決まる</strong><br>
    工程A（100個/h）→ 工程B（50個/h）→ 工程C（80個/h）<br>
    この場合、システム全体の生産量は<strong>50個/h</strong>（工程Bがボトルネック）<br>
    工程AやCをいくら改善しても、全体は50個/hのまま変わらない</p>
</div>

<h3>TOCの5つの集中ステップ</h3>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h3>制約を特定する（Identify）</h3>
            <p>システム全体のスループットを制限しているボトルネックを見つけます。仕掛品が溜まっている場所、待ち行列が長い場所が制約です。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h3>制約を最大活用する（Exploit）</h3>
            <p>制約工程の無駄を排除し、既存のリソースで最大限の能力を引き出します。休憩時間の調整、段取り替え時間の短縮など。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h3>他を制約に従属させる（Subordinate）</h3>
            <p>制約以外の工程を、制約のペースに合わせます。非制約工程が制約より速く動いても仕掛品が増えるだけで逆効果です。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <h3>制約を強化する（Elevate）</h3>
            <p>投資により制約のキャパシティを拡大します。設備追加、人員増強、外注化など。ステップ2・3で改善しきれない場合に実施します。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
            <h3>繰り返す（Repeat）</h3>
            <p>制約が解消されると、別の場所に新たな制約が生まれます。ステップ1に戻り、継続的に改善を続けます。<strong>惰性を制約にしない</strong>ことが重要です。</p>
        </div>
    </div>
</div>

<h3>2. シックスシグマ（Six Sigma）</h3>
<p>モトローラが開発しGEが発展させた品質管理手法で、統計的手法を用いてプロセスのバラつきを最小限にします。「シグマ（σ）」は統計学の標準偏差を意味し、6σレベルは100万回中3.4回の欠陥率を目標とします。</p>

<div class="visual-box">
    <div class="visual-box-title">📊 シグマレベルと欠陥率</div>
    <table>
        <tr>
            <th>シグマレベル</th>
            <th>欠陥率（DPMO）</th>
            <th>歩留まり率</th>
            <th>イメージ</th>
        </tr>
        <tr><td>1σ</td><td>691,462</td><td>30.85%</td><td>ほぼ毎回失敗</td></tr>
        <tr><td>2σ</td><td>308,538</td><td>69.15%</td><td>3回に1回失敗</td></tr>
        <tr><td>3σ</td><td>66,807</td><td>93.32%</td><td>一般的な企業水準</td></tr>
        <tr><td>4σ</td><td>6,210</td><td>99.38%</td><td>業界平均以上</td></tr>
        <tr><td>5σ</td><td>233</td><td>99.977%</td><td>優良企業水準</td></tr>
        <tr><td><strong>6σ</strong></td><td><strong>3.4</strong></td><td><strong>99.99966%</strong></td><td><strong>世界トップクラス</strong></td></tr>
    </table>
</div>

<h3>DMAIC プロセス</h3>
<p>シックスシグマの改善手法の中核が「DMAIC」です。</p>

<div class="visual-box">
    <div class="visual-box-title">🔧 DMAICの5フェーズ</div>
    <table>
        <tr>
            <th>フェーズ</th>
            <th>名称</th>
            <th>目的</th>
            <th>主なツール</th>
        </tr>
        <tr>
            <td><strong>D</strong></td>
            <td>Define（定義）</td>
            <td>問題・目標・プロジェクト範囲を明確化</td>
            <td>プロジェクト憲章、SIPOC、VOC</td>
        </tr>
        <tr>
            <td><strong>M</strong></td>
            <td>Measure（測定）</td>
            <td>現状のプロセスを測定しベースラインを確立</td>
            <td>データ収集計画、工程能力分析</td>
        </tr>
        <tr>
            <td><strong>A</strong></td>
            <td>Analyze（分析）</td>
            <td>データからバラつきの根本原因を特定</td>
            <td>特性要因図、回帰分析、仮説検定</td>
        </tr>
        <tr>
            <td><strong>I</strong></td>
            <td>Improve（改善）</td>
            <td>根本原因に対する改善策を実施</td>
            <td>実験計画法（DOE）、ブレインストーミング</td>
        </tr>
        <tr>
            <td><strong>C</strong></td>
            <td>Control（管理）</td>
            <td>改善結果を維持・標準化する仕組みを構築</td>
            <td>管理図、標準作業手順書（SOP）</td>
        </tr>
    </table>
</div>

<h3>3. TQM（Total Quality Management：総合的品質管理）</h3>
<p>デミング、ジュラン、クロスビーらが発展させた、組織全体で品質改善に取り組む経営哲学・手法です。</p>

<div class="visual-box">
    <div class="visual-box-title">🏛️ TQMの8つの原則</div>
    <table>
        <tr>
            <th>#</th>
            <th>原則</th>
            <th>内容</th>
        </tr>
        <tr><td>1</td><td><strong>顧客重視</strong></td><td>全ての活動は最終的に顧客満足に結びつくべき</td></tr>
        <tr><td>2</td><td><strong>リーダーシップ</strong></td><td>経営層が品質方針を示し率先して推進する</td></tr>
        <tr><td>3</td><td><strong>全員参加</strong></td><td>品質は特定部門だけでなく全社員の責任</td></tr>
        <tr><td>4</td><td><strong>プロセスアプローチ</strong></td><td>活動をプロセスとして管理し最適化する</td></tr>
        <tr><td>5</td><td><strong>継続的改善</strong></td><td>PDCAサイクルで絶えず改善を続ける</td></tr>
        <tr><td>6</td><td><strong>事実に基づく意思決定</strong></td><td>データと分析に基づいて判断する</td></tr>
        <tr><td>7</td><td><strong>相互利益のある供給者関係</strong></td><td>サプライヤーとWin-Winの関係を構築する</td></tr>
        <tr><td>8</td><td><strong>システムアプローチ</strong></td><td>相互に関連するプロセスを一つのシステムとして管理する</td></tr>
    </table>
</div>

<h3>4. 3つの手法の使い分け</h3>

<div class="compare-grid">
    <div class="compare-card">
        <h3>🎯 TOC（制約理論）</h3>
        <ul>
            <li><strong>焦点:</strong> ボトルネック</li>
            <li><strong>適用場面:</strong> スループットが出ない時</li>
            <li><strong>アプローチ:</strong> 制約に集中投資</li>
            <li><strong>速度:</strong> 即効性が高い</li>
            <li><strong>例:</strong> 生産ラインの停滞解消</li>
        </ul>
    </div>
    <div class="compare-card">
        <h3>📊 シックスシグマ</h3>
        <ul>
            <li><strong>焦点:</strong> バラつき・欠陥</li>
            <li><strong>適用場面:</strong> 品質問題が多い時</li>
            <li><strong>アプローチ:</strong> 統計的にバラつき削減</li>
            <li><strong>速度:</strong> 中期的</li>
            <li><strong>例:</strong> 不良品率の削減</li>
        </ul>
    </div>
</div>

<div class="info-box tip" style="margin-top:16px;">
    <div class="info-box-title">💡 TQM（総合的品質管理）の位置づけ</div>
    <p><strong>焦点:</strong> 組織文化・全員参加の品質<br>
    <strong>適用場面:</strong> 組織全体の品質文化を構築したい時<br>
    <strong>アプローチ:</strong> トップダウン＋ボトムアップの全社的活動<br>
    <strong>速度:</strong> 長期的・持続的<br>
    <strong>例:</strong> トヨタ生産方式（TPS）</p>
</div>

<div class="visual-box">
    <div class="visual-box-title">📋 3手法の比較まとめ</div>
    <table>
        <tr>
            <th>観点</th>
            <th>TOC</th>
            <th>シックスシグマ</th>
            <th>TQM</th>
        </tr>
        <tr>
            <td><strong>目的</strong></td>
            <td>スループット最大化</td>
            <td>欠陥・バラつき最小化</td>
            <td>総合的品質向上</td>
        </tr>
        <tr>
            <td><strong>主なツール</strong></td>
            <td>5集中ステップ、DBR</td>
            <td>DMAIC、統計分析</td>
            <td>PDCA、QCサークル</td>
        </tr>
        <tr>
            <td><strong>改善範囲</strong></td>
            <td>制約点に集中</td>
            <td>特定プロセスに集中</td>
            <td>組織全体</td>
        </tr>
        <tr>
            <td><strong>必要スキル</strong></td>
            <td>システム思考</td>
            <td>統計学の知識</td>
            <td>チームワーク・リーダーシップ</td>
        </tr>
        <tr>
            <td><strong>成果の速さ</strong></td>
            <td>数週間〜数ヶ月</td>
            <td>数ヶ月〜半年</td>
            <td>1年以上（文化定着）</td>
        </tr>
    </table>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 3つを組み合わせる</div>
    <p>最も効果的なアプローチは、まず<strong>TOCでボトルネックを特定</strong>し、そのボトルネック工程に<strong>シックスシグマを適用</strong>してバラつきを削減、そして<strong>TQMで改善を組織文化として定着</strong>させることです。短期→中期→長期の時間軸で3つを組み合わせましょう。</p>
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "TOC（制約理論）の5つの集中ステップの正しい順序はどれですか？",
                    options: [
                        "特定 → 強化 → 従属 → 活用 → 繰り返し",
                        "特定 → 活用 → 従属 → 強化 → 繰り返し",
                        "分析 → 測定 → 改善 → 管理 → 定義",
                        "計画 → 実行 → 確認 → 改善 → 繰り返し"
                    ],
                    answer: 1,
                    explanation: "TOCの5つの集中ステップは「① 制約を特定する（Identify）→ ② 制約を最大活用する（Exploit）→ ③ 他を制約に従属させる（Subordinate）→ ④ 制約を強化する（Elevate）→ ⑤ 繰り返す（Repeat）」の順です。まず活用してから投資（強化）するのがポイントです。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "シックスシグマのDMAICにおける「A」フェーズの正しい内容はどれですか？",
                    options: [
                        "改善策を実施して効果を測定する（Action）",
                        "データからバラつきの根本原因を特定する（Analyze）",
                        "改善結果を維持する仕組みを構築する（Adjust）",
                        "プロジェクトの目標を承認する（Approve）"
                    ],
                    answer: 1,
                    explanation: "DMAICの「A」はAnalyze（分析）です。Measure（測定）フェーズで収集したデータを用いて、バラつきや欠陥の根本原因を統計的に特定します。特性要因図や回帰分析などのツールが使われます。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "TOC・シックスシグマ・TQMの3つを比較した場合、最も即効性が高い手法はどれですか？",
                    options: [
                        "TQM（全員参加で幅広くカバーするため）",
                        "シックスシグマ（統計的手法で精密に分析するため）",
                        "TOC（ボトルネック1点に集中して改善するため）",
                        "3つとも同じ速度で成果が出る"
                    ],
                    answer: 2,
                    explanation: "TOCは最も弱い部分（ボトルネック）1点に集中して改善するため、即効性が高く、数週間〜数ヶ月で成果が出ます。シックスシグマは数ヶ月〜半年、TQMは組織文化の定着を含むため1年以上の長期的取り組みとなります。"
                }
            ]
        },

        // ========================================
        // Module 604: フレームワーク統合活用ガイド
        // ========================================
        {
            id: 604,
            title: "フレームワーク統合活用ガイド",
            duration: "12分",
            content: `
<h2>フレームワーク統合活用ガイド</h2>
<p>これまで6つのレベルで学んだ数多くのフレームワークを、実際のビジネスシーンでどのように選び、組み合わせ、活用するかを総合的に学びます。フレームワークは単体で使うより、状況に応じて組み合わせることでより強力な分析・意思決定ツールとなります。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 このモジュールの位置づけ</div>
    <p>フレームワークアカデミー全6レベルの<strong>総まとめ</strong>です。Level 1〜6で学んだ全てのフレームワークを俯瞰し、実践で使いこなすための統合ガイドとして活用してください。</p>
</div>

<h3>1. フレームワーク選択マトリクス</h3>
<p>「どのフレームワークをいつ使うか」を判断するためのマトリクスです。</p>

<div class="visual-box">
    <div class="visual-box-title">📋 目的別フレームワーク選択マトリクス</div>
    <table>
        <tr>
            <th>目的・課題</th>
            <th>推奨フレームワーク</th>
            <th>Level</th>
        </tr>
        <tr>
            <td><strong>外部環境を分析したい</strong></td>
            <td>PEST分析、5フォース</td>
            <td>Lv1</td>
        </tr>
        <tr>
            <td><strong>自社の立ち位置を把握したい</strong></td>
            <td>SWOT分析、3C分析、VRIO</td>
            <td>Lv1</td>
        </tr>
        <tr>
            <td><strong>事業ポートフォリオを最適化したい</strong></td>
            <td>BCGマトリクス、アンゾフのマトリクス</td>
            <td>Lv1</td>
        </tr>
        <tr>
            <td><strong>ターゲット顧客を決めたい</strong></td>
            <td>STP分析、ペルソナ設計</td>
            <td>Lv2</td>
        </tr>
        <tr>
            <td><strong>マーケ施策を設計したい</strong></td>
            <td>4P/4C、AIDMA/AISAS</td>
            <td>Lv2</td>
        </tr>
        <tr>
            <td><strong>顧客体験を改善したい</strong></td>
            <td>カスタマージャーニー、LTV</td>
            <td>Lv2</td>
        </tr>
        <tr>
            <td><strong>論理的に問題を整理したい</strong></td>
            <td>MECE、ロジックツリー</td>
            <td>Lv3</td>
        </tr>
        <tr>
            <td><strong>革新的な解決策を生みたい</strong></td>
            <td>デザインシンキング</td>
            <td>Lv3</td>
        </tr>
        <tr>
            <td><strong>提案・プレゼンを構成したい</strong></td>
            <td>PREP法、ピラミッドストラクチャー</td>
            <td>Lv4</td>
        </tr>
        <tr>
            <td><strong>交渉を成功させたい</strong></td>
            <td>BATNA/ZOPA、ハーバード流交渉術</td>
            <td>Lv4</td>
        </tr>
        <tr>
            <td><strong>目標管理・業績評価をしたい</strong></td>
            <td>OKR、KPI、BSC</td>
            <td>Lv5</td>
        </tr>
        <tr>
            <td><strong>組織変革を推進したい</strong></td>
            <td>7S、コッターの8ステップ</td>
            <td>Lv5</td>
        </tr>
        <tr>
            <td><strong>新市場を創造したい</strong></td>
            <td>ブルーオーシャン戦略、破壊的イノベーション</td>
            <td>Lv6</td>
        </tr>
        <tr>
            <td><strong>新規事業を立ち上げたい</strong></td>
            <td>リーンスタートアップ、BMC</td>
            <td>Lv6</td>
        </tr>
        <tr>
            <td><strong>プロセス品質を改善したい</strong></td>
            <td>TOC、シックスシグマ、TQM</td>
            <td>Lv6</td>
        </tr>
    </table>
</div>

<h3>2. フレームワーク組み合わせパターン</h3>
<p>フレームワークは単体で使うのではなく、目的に応じて連鎖的に組み合わせることで真価を発揮します。</p>

<h3>パターン1: 戦略立案の王道フロー</h3>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h3>PEST分析（マクロ環境）</h3>
            <p>政治・経済・社会・技術の外部環境変化を俯瞰し、機会と脅威の源泉を特定する。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h3>5フォース分析（業界環境）</h3>
            <p>業界の競争構造と収益性を分析し、参入・撤退の判断材料を得る。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h3>3C分析（事業環境）</h3>
            <p>自社・顧客・競合の関係性を整理し、KSF（成功要因）を導出する。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <h3>SWOT分析（戦略方向性）</h3>
            <p>内部の強み・弱みと外部の機会・脅威を統合し、戦略オプションを生成する。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
            <h3>STP分析（ターゲティング）</h3>
            <p>市場をセグメント化し、ターゲットを選定し、ポジショニングを決める。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">6</div>
        <div class="step-content">
            <h3>4P/4C（施策設計）</h3>
            <p>マーケティングミックスを具体的に設計し、実行計画を策定する。</p>
        </div>
    </div>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 王道フロー公式</div>
    <p><strong>PEST</strong>（マクロ） → <strong>5フォース</strong>（業界） → <strong>3C</strong>（事業） → <strong>SWOT</strong>（統合） → <strong>STP</strong>（ターゲット） → <strong>4P/4C</strong>（施策）<br><br>
    ポイント：外部から内部へ、マクロからミクロへ、分析から施策へと段階的に絞り込む</p>
</div>

<h3>パターン2: 新規事業開発フロー</h3>

<div class="visual-box">
    <div class="visual-box-title">🚀 新規事業開発の組み合わせパターン</div>
    <table>
        <tr>
            <th>フェーズ</th>
            <th>使用フレームワーク</th>
            <th>目的</th>
        </tr>
        <tr>
            <td><strong>① 機会発見</strong></td>
            <td>ブルーオーシャン戦略（戦略キャンバス）</td>
            <td>競争のない市場空間を発見する</td>
        </tr>
        <tr>
            <td><strong>② アイデア創出</strong></td>
            <td>デザインシンキング（共感→定義→創造）</td>
            <td>顧客の潜在ニーズから革新的ソリューションを生む</td>
        </tr>
        <tr>
            <td><strong>③ モデル設計</strong></td>
            <td>ビジネスモデルキャンバス</td>
            <td>事業の全体像を9ブロックで可視化する</td>
        </tr>
        <tr>
            <td><strong>④ 仮説検証</strong></td>
            <td>リーンスタートアップ（MVP→BML）</td>
            <td>最小コストで仮説を検証し学習する</td>
        </tr>
        <tr>
            <td><strong>⑤ 成長戦略</strong></td>
            <td>アンゾフのマトリクス + OKR</td>
            <td>成長方向を決め、目標を管理する</td>
        </tr>
    </table>
</div>

<h3>パターン3: 問題解決フロー</h3>

<div class="visual-box">
    <div class="visual-box-title">🔍 問題解決の組み合わせパターン</div>
    <table>
        <tr>
            <th>フェーズ</th>
            <th>使用フレームワーク</th>
            <th>目的</th>
        </tr>
        <tr>
            <td><strong>① 問題の構造化</strong></td>
            <td>MECE + ロジックツリー</td>
            <td>問題を漏れなくダブりなく分解する</td>
        </tr>
        <tr>
            <td><strong>② 根本原因の特定</strong></td>
            <td>TOC（制約特定）/ なぜなぜ分析</td>
            <td>真のボトルネック・原因を見つける</td>
        </tr>
        <tr>
            <td><strong>③ 改善策の設計</strong></td>
            <td>シックスシグマ（DMAIC）</td>
            <td>データに基づく改善策を設計・実施する</td>
        </tr>
        <tr>
            <td><strong>④ 提案・合意形成</strong></td>
            <td>ピラミッドストラクチャー + PREP法</td>
            <td>改善策を論理的に提案し承認を得る</td>
        </tr>
        <tr>
            <td><strong>⑤ 実行・定着</strong></td>
            <td>PDCA + TQM</td>
            <td>改善を継続的に回し組織に定着させる</td>
        </tr>
    </table>
</div>

<h3>3. フレームワーク活用の注意点</h3>

<div class="info-box warning">
    <div class="info-box-title">⚠️ やりがちな失敗パターン</div>
    <p><strong>① フレームワークの目的化</strong>：フレームワークを埋めること自体が目的になり、「何を意思決定するか」を見失う。フレームワークは手段であり目的ではない。</p>
    <p><strong>② 一つのフレームワークへの過度な依存</strong>：万能なフレームワークは存在しない。複数の視点を組み合わせることが重要。</p>
    <p><strong>③ 分析の精度に固執しすぎる</strong>：80%の精度で迅速に意思決定する方が、100%を目指して時間を浪費するより価値がある。</p>
    <p><strong>④ 結論ありきの分析</strong>：先に結論を決めてフレームワークで正当化するのは本末転倒。客観的にデータと向き合う。</p>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 効果的な活用のコツ</div>
    <p><strong>① 目的から逆算して選ぶ</strong>：「何を意思決定したいか」を明確にしてからフレームワークを選択する。</p>
    <p><strong>② 複数のフレームワークを重ねる</strong>：1つの分析結果を別のフレームワークのインプットにし、多角的に検証する。</p>
    <p><strong>③ チームで議論する</strong>：フレームワークは共通言語。チームメンバーと同じ枠組みで議論することで認識のズレを防ぐ。</p>
    <p><strong>④ 定期的に見直す</strong>：環境は常に変化する。一度作った分析も定期的にアップデートする。</p>
</div>

<h3>4. 全6レベル総復習</h3>

<div class="visual-box">
    <div class="visual-box-title">🎓 フレームワークアカデミー 全6レベル総覧</div>
    <table>
        <tr>
            <th>Level</th>
            <th>テーマ</th>
            <th>主要フレームワーク</th>
            <th>キーワード</th>
        </tr>
        <tr>
            <td><strong>Lv1</strong></td>
            <td>ビジネス戦略</td>
            <td>PEST、SWOT、5フォース、3C、VRIO、バリューチェーン、BCG、アンゾフ</td>
            <td>環境分析・競争戦略・成長戦略</td>
        </tr>
        <tr>
            <td><strong>Lv2</strong></td>
            <td>マーケティング</td>
            <td>STP、4P/4C、AIDMA/AISAS、カスタマージャーニー、LTV、RFM</td>
            <td>顧客理解・施策設計・顧客価値</td>
        </tr>
        <tr>
            <td><strong>Lv3</strong></td>
            <td>思考・問題解決</td>
            <td>MECE、ロジックツリー、ピラミッドストラクチャー、デザインシンキング、クリティカルシンキング</td>
            <td>論理思考・構造化・創造的問題解決</td>
        </tr>
        <tr>
            <td><strong>Lv4</strong></td>
            <td>コミュニケーション</td>
            <td>PREP、SDS、DESC、GROW、SBI、BATNA/ZOPA、ハーバード流交渉術</td>
            <td>伝える力・聴く力・交渉力</td>
        </tr>
        <tr>
            <td><strong>Lv5</strong></td>
            <td>マネジメント・組織</td>
            <td>PDCA、OODA、OKR、KPI、BSC、7S、アジャイル、コッターの8ステップ</td>
            <td>目標管理・組織設計・変革推進</td>
        </tr>
        <tr>
            <td><strong>Lv6</strong></td>
            <td>イノベーション・応用</td>
            <td>ブルーオーシャン、破壊的イノベーション、リーンスタートアップ、BMC、TOC、シックスシグマ、TQM</td>
            <td>市場創造・事業構築・品質改善</td>
        </tr>
    </table>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ フレームワークを使いこなすための最終アドバイス</div>
    <p>フレームワークは「知っている」だけでは意味がありません。実際のビジネスシーンで<strong>繰り返し使う</strong>ことで初めて身につきます。以下の3ステップで実践力を高めましょう。</p>
    <p><strong>Step 1: 今日から使う</strong> — 日々の業務で「これはどのフレームワークで整理できるか？」と考える習慣をつける<br>
    <strong>Step 2: 人に教える</strong> — 学んだフレームワークを同僚に説明してみる。教えることで理解が深まる<br>
    <strong>Step 3: 自分流にアレンジする</strong> — フレームワークをベースに、自社・自分の状況に合わせてカスタマイズする</p>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 フレームワーク活用の究極公式</div>
    <p><strong>成果 = 正しいフレームワーク選択 × 深い分析 × 迅速な実行</strong><br><br>
    どれだけ優れた分析をしても、実行しなければ成果はゼロです。<br>
    フレームワークで「考える時間」を短縮し、「行動する時間」を増やすことが本当の価値です。</p>
</div>
`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "戦略立案の王道フローとして最も適切な順序はどれですか？",
                    options: [
                        "4P → STP → SWOT → PEST",
                        "PEST → 5フォース → 3C → SWOT → STP → 4P",
                        "SWOT → PEST → 4P → STP",
                        "STP → 3C → PEST → 5フォース → SWOT → 4P"
                    ],
                    answer: 1,
                    explanation: "戦略立案の王道フローは「PEST（マクロ環境）→ 5フォース（業界環境）→ 3C（事業環境）→ SWOT（統合分析）→ STP（ターゲティング）→ 4P/4C（施策設計）」です。外部からスタートし、マクロからミクロへ、分析から施策へと段階的に絞り込むのがポイントです。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "フレームワーク活用の注意点として「やりがちな失敗パターン」に該当しないものはどれですか？",
                    options: [
                        "フレームワークを埋めること自体が目的になる",
                        "一つのフレームワークに過度に依存する",
                        "複数のフレームワークを組み合わせて多角的に検証する",
                        "結論ありきでフレームワークを使って正当化する"
                    ],
                    answer: 2,
                    explanation: "「複数のフレームワークを組み合わせて多角的に検証する」は失敗パターンではなく、むしろ効果的な活用法です。失敗パターンは、目的化、過度な依存、精度への固執、結論ありきの分析などです。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "新規事業開発フローにおいて、「ビジネスモデルキャンバスでモデルを設計した後」に行うべきステップとして最も適切なものはどれですか？",
                    options: [
                        "PEST分析でマクロ環境を再調査する",
                        "リーンスタートアップのBMLループで仮説を検証する",
                        "シックスシグマのDMAICで品質を管理する",
                        "7Sで組織の整合性を分析する"
                    ],
                    answer: 1,
                    explanation: "新規事業開発フローでは、ビジネスモデルキャンバスでモデルを設計した後、リーンスタートアップのBuild→Measure→Learnループで仮説を検証するのが最も適切です。BMCの各ブロックを仮説として捉え、MVPで最小コストで検証していきます。"
                }
            ]
        }
    ]
};
