/* ============================================
   Level 4: コミュニケーション・交渉フレームワーク
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "コミュニケーション・交渉フレームワーク",
    icon: "💬",
    description: "PREP法、DESC法、SBIフィードバック、GROWモデル、交渉術など、ビジネスコミュニケーションの型を習得します",
    modules: [
        {
            id: 401,
            title: "PREP法 & SDS法 & FABE法",
            duration: "15分",
            content: `
<h2>ビジネスコミュニケーションの「型」を身につける</h2>
<p>ビジネスの現場では、<strong>伝えたいことを論理的に、わかりやすく、説得力をもって伝える力</strong>が不可欠です。しかし、多くの人は「何を話すか」は考えても「どう構成して話すか」は意識していません。</p>
<p>本モジュールでは、ビジネスコミュニケーションで最も使われる3つの話法フレームワーク — <strong>PREP法</strong>、<strong>SDS法</strong>、<strong>FABE法</strong> — を学びます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 話法フレームワークを使うメリット</div>
<ul>
<li>話の構成を事前に組み立てられるので、<strong>準備時間が短縮</strong>される</li>
<li>聞き手にとって<strong>理解しやすい構造</strong>になる</li>
<li>緊張する場面でも<strong>型に沿って話せるので安心</strong></li>
<li>説得力のある<strong>論理的なプレゼン</strong>ができる</li>
</ul>
</div>

<h2>1. PREP法</h2>
<p>PREP法は、<strong>Point（結論）→ Reason（理由）→ Example（具体例）→ Point（結論の再強調）</strong>の順で話すフレームワークです。最も汎用性が高く、報告・提案・プレゼンなどあらゆるビジネスシーンで使えます。</p>

<div class="visual-box">
<div class="visual-box-title">PREP法の構造</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;margin:16px 0;">
<div style="background:#2563eb;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">P — Point（結論）</div>
<div style="font-size:0.8rem;opacity:0.9;">最初に結論を述べる</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#3b82f6;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">R — Reason（理由）</div>
<div style="font-size:0.8rem;opacity:0.9;">結論を支える理由を説明</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#60a5fa;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">E — Example（具体例）</div>
<div style="font-size:0.8rem;opacity:0.9;">理由を裏付ける事例やデータ</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#2563eb;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">P — Point（結論の再強調）</div>
<div style="font-size:0.8rem;opacity:0.9;">もう一度結論を繰り返して印象づける</div>
</div>
</div>
</div>

<div class="scenario-box">
<div class="scenario-box-title">📋 PREP法の例文：上司への報告</div>
<p><strong>P（結論）：</strong>A社との契約を来月中に更新すべきだと考えます。</p>
<p><strong>R（理由）：</strong>なぜなら、A社との取引は当社売上の15%を占めており、競合他社が積極的にアプローチしているためです。</p>
<p><strong>E（具体例）：</strong>実際に、先月B社がA社に対して20%値引きの提案を行ったことが判明しています。また、A社の購買担当者からも「早めに条件を固めたい」との打診を受けています。</p>
<p><strong>P（再強調）：</strong>したがって、来月中に更新条件を提示し、契約を確保すべきです。</p>
</div>

<h2>2. SDS法</h2>
<p>SDS法は、<strong>Summary（要約）→ Details（詳細）→ Summary（まとめ）</strong>の順で話すフレームワークです。短時間で全体像を伝えたい場面に最適です。</p>

<div class="visual-box">
<div class="visual-box-title">SDS法の構造</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;margin:16px 0;">
<div style="background:#059669;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">S — Summary（要約）</div>
<div style="font-size:0.8rem;opacity:0.9;">全体像を一言で要約する</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#10b981;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">D — Details（詳細）</div>
<div style="font-size:0.8rem;opacity:0.9;">具体的な内容を詳しく説明</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#059669;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">S — Summary（まとめ）</div>
<div style="font-size:0.8rem;opacity:0.9;">要点を再度まとめて締める</div>
</div>
</div>
</div>

<div class="scenario-box">
<div class="scenario-box-title">📋 SDS法の例文：チームへの共有</div>
<p><strong>S（要約）：</strong>来週の展示会について、3つの重要な変更点があります。</p>
<p><strong>D（詳細）：</strong>1つ目は、会場がAホールからBホールに変更になりました。2つ目は、ブースのサイズが2倍に拡大されました。3つ目は、新製品デモの時間が午後2時に確定しました。</p>
<p><strong>S（まとめ）：</strong>以上3点の変更を踏まえて、各自の担当部分を再確認してください。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 SDS法はニュース番組の定番構成</div>
テレビのニュース番組は典型的なSDS法です。「〇〇のニュースです」(S) → 「具体的には...」(D) → 「以上、〇〇のニュースでした」(S)。短時間で情報を正確に伝える際に最適な構成です。
</div>

<h2>3. FABE法</h2>
<p>FABE法は、<strong>Feature（特徴）→ Advantage（優位性）→ Benefit（利益）→ Evidence（証拠）</strong>の順で話すフレームワークです。営業やプレゼンでの提案・説得に特化しています。</p>

<div class="visual-box">
<div class="visual-box-title">FABE法の構造</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;margin:16px 0;">
<div style="background:#e85d04;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">F — Feature（特徴）</div>
<div style="font-size:0.8rem;opacity:0.9;">製品・サービスの機能や特徴</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#f59e0b;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">A — Advantage（優位性）</div>
<div style="font-size:0.8rem;opacity:0.9;">競合と比較した際の強み</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#ea580c;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">B — Benefit（利益）</div>
<div style="font-size:0.8rem;opacity:0.9;">お客様が得られる具体的なメリット</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#dc2626;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:80%;max-width:400px;text-align:center;">
<div style="font-size:1.1rem;">E — Evidence（証拠）</div>
<div style="font-size:0.8rem;opacity:0.9;">実績・データ・事例による裏付け</div>
</div>
</div>
</div>

<div class="scenario-box">
<div class="scenario-box-title">📋 FABE法の例文：営業プレゼン</div>
<p><strong>F（特徴）：</strong>当社のクラウド会計システムは、AIによる自動仕訳機能を搭載しています。</p>
<p><strong>A（優位性）：</strong>他社製品では手動で仕訳入力が必要ですが、当社システムは銀行明細を取り込むだけで95%以上を自動仕訳します。</p>
<p><strong>B（利益）：</strong>これにより、御社の経理担当者の作業時間を月40時間削減でき、月次決算を3日早く締められるようになります。</p>
<p><strong>E（証拠）：</strong>実際に、同業界のC社様では導入後6ヶ月で経理コストを35%削減し、決算早期化も実現されています。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ FABE法でよくある間違い</div>
<strong>AdvantageとBenefitを混同しない。</strong>Advantageは「競合と比べた客観的な優位性」、Benefitは「顧客にとっての具体的なメリット」です。「処理速度が2倍速い」はAdvantage、「残業時間を月20時間削減できる」はBenefitです。
</div>

<h2>3つの話法の使い分け</h2>
<table>
<tr><th>話法</th><th>構造</th><th>最適な場面</th><th>特徴</th></tr>
<tr><td><strong>PREP法</strong></td><td>結論→理由→具体例→結論</td><td>報告・提案・面接・会議での発言</td><td>最も汎用性が高い。結論ファーストで説得力がある</td></tr>
<tr><td><strong>SDS法</strong></td><td>要約→詳細→まとめ</td><td>朝会での共有・短いプレゼン・メール</td><td>短時間で全体像を伝える。ニュース形式に近い</td></tr>
<tr><td><strong>FABE法</strong></td><td>特徴→優位性→利益→証拠</td><td>営業提案・製品紹介・企画プレゼン</td><td>顧客の「自分にとっての価値」を明確に伝える</td></tr>
</table>

<h3>ビジネスシーン別の活用ガイド</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>プレゼンテーション</h4>
<p><strong>推奨：PREP法</strong></p>
<ul>
<li>経営層への提案 → PREP法で結論から</li>
<li>製品デモ → FABE法で価値を訴求</li>
<li>全体説明 → SDS法で概要から</li>
</ul>
</div>
<div class="compare-card">
<h4>日常の報告・連絡</h4>
<p><strong>推奨：SDS法 or PREP法</strong></p>
<ul>
<li>朝会での進捗報告 → SDS法</li>
<li>問題のエスカレーション → PREP法</li>
<li>メールでの報告 → SDS法</li>
</ul>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
3つの話法はいずれも「構造化されたコミュニケーション」のフレームワークです。最初は意識的に使い、慣れてくると自然に最適な話法を選べるようになります。まずはPREP法から練習を始めるのがおすすめです。
</div>
`,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "PREP法の「R」は何を表しますか？",
                    options: [
                        "Result（結果）",
                        "Reason（理由）",
                        "Review（振り返り）",
                        "Reference（参考）"
                    ],
                    answer: 1,
                    explanation: "PREP法のRは「Reason（理由）」を表します。P（Point=結論）を述べた後、R（Reason=理由）でなぜそう考えるかを説明し、E（Example=具体例）で裏付け、最後にP（Point=結論の再強調）で締めます。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "営業先で自社製品の優位性を伝え、顧客にとっての具体的なメリットを訴求したい場合、最も適切な話法はどれですか？",
                    options: [
                        "PREP法",
                        "SDS法",
                        "FABE法",
                        "DESC法"
                    ],
                    answer: 2,
                    explanation: "FABE法は「Feature（特徴）→ Advantage（優位性）→ Benefit（利益）→ Evidence（証拠）」の構造で、製品の特徴から顧客にとっての具体的メリットまでを論理的に訴求できる営業・提案に特化した話法です。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "SDS法の構造として正しいものはどれですか？",
                    options: [
                        "Situation → Details → Solution",
                        "Summary → Details → Summary",
                        "Strategy → Data → Summary",
                        "Scope → Description → Summary"
                    ],
                    answer: 1,
                    explanation: "SDS法は「Summary（要約）→ Details（詳細）→ Summary（まとめ）」の構造です。最初に全体像を伝え、次に詳細を説明し、最後に再度要約で締めることで、短時間でわかりやすく伝えることができます。"
                }
            ]
        },
        {
            id: 402,
            title: "DESC法 & アサーティブコミュニケーション",
            duration: "15分",
            content: `
<h2>DESC法とは</h2>
<p>DESC法は、<strong>自分の意見や気持ちを相手を尊重しながら適切に伝えるためのコミュニケーションフレームワーク</strong>です。特に、相手に行動の改善を求めたり、意見の相違がある場面で効果的に使えます。</p>

<div class="visual-box">
<div class="visual-box-title">DESC法の4ステップ</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;margin:16px 0;">
<div style="background:#7c3aed;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">D — Describe（描写）</div>
<div style="font-size:0.8rem;opacity:0.9;">客観的な事実を描写する（感情や評価を含めない）</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#8b5cf6;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">E — Express（表現）</div>
<div style="font-size:0.8rem;opacity:0.9;">自分の気持ちや考えを率直に表現する</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#a78bfa;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">S — Suggest（提案）</div>
<div style="font-size:0.8rem;opacity:0.9;">具体的な解決策や代替案を提案する</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#6d28d9;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">C — Consequence（結果）</div>
<div style="font-size:0.8rem;opacity:0.9;">提案を受け入れた場合のポジティブな結果を示す</div>
</div>
</div>
</div>

<div class="scenario-box">
<div class="scenario-box-title">📋 DESC法の実践例：同僚に会議の遅刻改善を伝える</div>
<p><strong>D（描写）：</strong>「先週の3回のチーム会議のうち、2回で10分以上遅れて参加していましたね。」</p>
<p><strong>E（表現）：</strong>「開始時に説明した内容を再度伝える必要があり、会議の効率が下がっていると感じています。」</p>
<p><strong>S（提案）：</strong>「今後は、前の予定が長引きそうな場合、事前にチャットで一報いただけませんか。」</p>
<p><strong>C（結果）：</strong>「そうしていただければ、私たちも対応方法を調整できますし、会議全体がスムーズに進められます。」</p>
</div>

<h2>アサーティブコミュニケーションとは</h2>
<p>アサーティブコミュニケーションとは、<strong>自分の権利を主張しつつ、同時に相手の権利も尊重するコミュニケーションスタイル</strong>です。DESC法はアサーティブコミュニケーションを実践するための代表的なツールです。</p>

<h3>3つのコミュニケーションタイプ</h3>
<div class="visual-box">
<div class="visual-box-title">コミュニケーションの3タイプ</div>
<div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin:16px 0;">
<div style="background:var(--danger-light);border:2px solid var(--danger);border-radius:10px;padding:20px;min-width:200px;flex:1;text-align:center;">
<div style="font-size:1.5rem;margin-bottom:4px;">😤</div>
<div style="font-weight:700;color:var(--danger);font-size:1rem;margin-bottom:8px;">アグレッシブ（攻撃的）</div>
<div style="font-size:0.85rem;text-align:left;">
<ul>
<li>自分の意見を一方的に押し付ける</li>
<li>相手の気持ちを無視する</li>
<li>威圧的な態度をとる</li>
<li>「お前が悪い」と責める</li>
</ul>
</div>
<div style="text-align:center;font-size:1rem;color:var(--danger);margin-top:8px;font-weight:700;">自分 ◎ / 相手 ✕</div>
</div>
<div style="background:var(--success-light);border:2px solid var(--success);border-radius:10px;padding:20px;min-width:200px;flex:1;text-align:center;">
<div style="font-size:1.5rem;margin-bottom:4px;">😊</div>
<div style="font-weight:700;color:var(--success);font-size:1rem;margin-bottom:8px;">アサーティブ（適切な自己主張）</div>
<div style="font-size:0.85rem;text-align:left;">
<ul>
<li>自分の意見を率直に伝える</li>
<li>相手の意見も聞く</li>
<li>対等な立場で対話する</li>
<li>「私はこう思う」と伝える</li>
</ul>
</div>
<div style="text-align:center;font-size:1rem;color:var(--success);margin-top:8px;font-weight:700;">自分 ◎ / 相手 ◎</div>
</div>
<div style="background:var(--primary-light);border:2px solid var(--primary);border-radius:10px;padding:20px;min-width:200px;flex:1;text-align:center;">
<div style="font-size:1.5rem;margin-bottom:4px;">😔</div>
<div style="font-weight:700;color:var(--primary);font-size:1rem;margin-bottom:8px;">パッシブ（受身的）</div>
<div style="font-size:0.85rem;text-align:left;">
<ul>
<li>自分の意見を言えない</li>
<li>常に相手に合わせる</li>
<li>不満を内に溜め込む</li>
<li>「何でもいいです」と従う</li>
</ul>
</div>
<div style="text-align:center;font-size:1rem;color:var(--primary);margin-top:8px;font-weight:700;">自分 ✕ / 相手 ◎</div>
</div>
</div>
</div>

<h2>Iメッセージ vs YOUメッセージ</h2>
<p>アサーティブコミュニケーションの重要なテクニックが、<strong>「YOUメッセージ」を「Iメッセージ」に変換する</strong>ことです。</p>

<table>
<tr><th>場面</th><th>YOUメッセージ（攻撃的）</th><th>Iメッセージ（アサーティブ）</th></tr>
<tr><td>報告が遅い</td><td>「あなたはいつも報告が遅い！」</td><td>「報告が遅れると、<strong>私は</strong>次の判断に困ってしまいます」</td></tr>
<tr><td>ミスが多い</td><td>「あなたはなぜ同じミスを繰り返すの？」</td><td>「同じミスが続くと、<strong>私は</strong>チームの品質が心配になります」</td></tr>
<tr><td>意見が違う</td><td>「あなたの考えは間違っている」</td><td>「<strong>私は</strong>別の視点もあると考えています」</td></tr>
<tr><td>仕事を断る</td><td>「あなたは無理な依頼をしないでください」</td><td>「<strong>私は</strong>今の業務量を考えると、期限に間に合わない可能性があると思います」</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">📐 Iメッセージの基本構文</div>
「[事実の描写] のとき、<strong>私は</strong> [自分の気持ち] と感じます。なぜなら [理由] だからです。」<br><br>
例：「会議に遅刻されると、<strong>私は</strong>不安を感じます。なぜなら、チーム全体のスケジュールに影響するからです。」
</div>

<h3>アサーティブの権利</h3>
<p>アサーティブコミュニケーションの前提として、すべての人には以下の権利があることを理解しましょう。</p>
<div class="info-box tip">
<div class="info-box-title">💡 アサーティブの基本的権利</div>
<ol>
<li>自分の意見や気持ちを表現する権利</li>
<li>「NO」と言う権利</li>
<li>間違いを犯す権利（そして、そこから学ぶ権利）</li>
<li>自分の優先順位を自分で決める権利</li>
<li>質問する権利、わからないと言う権利</li>
<li>意見を変える権利</li>
<li>敬意をもって扱われる権利</li>
</ol>
</div>

<h3>シナリオ練習</h3>
<div class="scenario-box">
<div class="scenario-box-title">📋 シナリオ1：急な仕事の依頼を断る</div>
<p><strong>状況：</strong>金曜日の夕方、上司から「月曜日までにこの資料を作ってほしい」と言われた。すでに週末に予定がある。</p>
<p class="bad"><strong>パッシブ：</strong>「...わかりました（不満を溜めて無理する）」</p>
<p class="bad"><strong>アグレッシブ：</strong>「無理です。金曜の夕方にそんな急な依頼を出さないでください」</p>
<p class="good"><strong>アサーティブ（DESC法）：</strong></p>
<ul>
<li><strong>D：</strong>「金曜日の17時に月曜日期限の資料のご依頼をいただきました。」</li>
<li><strong>E：</strong>「正直なところ、週末は先約があり、十分な品質の資料を作る時間が確保できないと心配しています。」</li>
<li><strong>S：</strong>「水曜日まで期限をいただけるか、あるいは範囲を絞って簡易版をまず月曜に提出する形はいかがでしょうか。」</li>
<li><strong>C：</strong>「そうすれば、品質の高い資料をお渡しできると思います。」</li>
</ul>
</div>

<div class="scenario-box">
<div class="scenario-box-title">📋 シナリオ2：会議で自分の意見を伝える</div>
<p><strong>状況：</strong>チーム会議で、多数派の意見に自分だけ異なる考えがある。</p>
<p class="bad"><strong>パッシブ：</strong>「（何も言わずに多数派に従う）」</p>
<p class="bad"><strong>アグレッシブ：</strong>「その案は絶対にうまくいきません。考えが甘いです。」</p>
<p class="good"><strong>アサーティブ：</strong>「皆さんのご意見も理解できます。一方で、私は違う角度からの懸念を感じています。具体的には〇〇のリスクがあると思うのですが、この点についてはどう思われますか？」</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>DESC法は「事実→感情→提案→結果」の4ステップで建設的に伝える手法</li>
<li>アサーティブは攻撃的でも受身的でもない、「対等で誠実な」コミュニケーション</li>
<li>YOUメッセージをIメッセージに変換するだけで、受け手の印象が大きく変わる</li>
<li>練習と意識付けにより、誰でもアサーティブなスタイルを身につけられる</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "DESC法の「D」は何を意味しますか？",
                    options: [
                        "Discuss（議論する）",
                        "Decide（決定する）",
                        "Describe（客観的に描写する）",
                        "Demand（要求する）"
                    ],
                    answer: 2,
                    explanation: "DESC法のDは「Describe（描写）」で、客観的な事実を感情や評価を含めずに描写するステップです。主観的な判断を入れず、観察された事実だけを伝えることがポイントです。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "「あなたはいつも遅刻する！」をIメッセージに変換したものとして最も適切なのはどれですか？",
                    options: [
                        "「あなたの遅刻は問題だと私は思います」",
                        "「遅刻が続くと、私はスケジュール調整に困ってしまいます」",
                        "「私はあなたに遅刻しないよう命令します」",
                        "「チームのみんなが遅刻に迷惑していると私は聞きました」"
                    ],
                    answer: 1,
                    explanation: "Iメッセージの基本構文は「[事実] のとき、私は [気持ち] と感じます」です。選択肢Bは事実（遅刻が続く）と自分の気持ち（困る）をI（私は）の形で伝えており、最も適切なIメッセージです。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "アサーティブコミュニケーションの説明として最も正しいものはどれですか？",
                    options: [
                        "自分の意見を常に通すために、強く主張するコミュニケーション",
                        "相手の気持ちを優先し、自分の意見は控えるコミュニケーション",
                        "自分の権利を主張しつつ、相手の権利も尊重する対等なコミュニケーション",
                        "論理的に相手を説得し、必ず合意を得るコミュニケーション"
                    ],
                    answer: 2,
                    explanation: "アサーティブコミュニケーションは、アグレッシブ（攻撃的）でもパッシブ（受身的）でもなく、自分の権利を主張しつつ相手の権利も尊重する「対等で誠実な」コミュニケーションスタイルです。"
                }
            ]
        },
        {
            id: 403,
            title: "SBIフィードバック & GROWモデル",
            duration: "15分",
            content: `
<h2>効果的なフィードバックとコーチング</h2>
<p>人材育成やチームマネジメントにおいて、<strong>フィードバック</strong>と<strong>コーチング</strong>は最も重要なスキルの2つです。本モジュールでは、フィードバックの型である<strong>SBIモデル</strong>と、コーチングの型である<strong>GROWモデル</strong>を学びます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 フィードバックとコーチングの違い</div>
<ul>
<li><strong>フィードバック</strong>：過去の行動に対して、良い点や改善点を具体的に伝えること</li>
<li><strong>コーチング</strong>：質問を通じて相手自身に気づきを促し、主体的な行動変容を支援すること</li>
</ul>
フィードバックは「伝える」技術、コーチングは「引き出す」技術です。
</div>

<h2>1. SBIフィードバックモデル</h2>
<p>SBIモデルは、Center for Creative Leadership（CCL）が開発したフィードバックフレームワークで、<strong>Situation（状況）→ Behavior（行動）→ Impact（影響）</strong>の3要素で構成されます。</p>

<div class="visual-box">
<div class="visual-box-title">SBIモデルの構造</div>
<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin:16px 0;">
<div style="background:var(--primary);color:white;padding:20px;border-radius:10px;text-align:center;min-width:180px;flex:1;">
<div style="font-size:1.5rem;margin-bottom:4px;">📍</div>
<div style="font-weight:700;font-size:1rem;">S — Situation</div>
<div style="font-size:0.85rem;opacity:0.9;">（状況）</div>
<div style="font-size:0.8rem;margin-top:8px;opacity:0.9;">いつ・どこで・<br>どんな場面で</div>
</div>
<div style="display:flex;align-items:center;font-size:1.5rem;">→</div>
<div style="background:var(--primary);color:white;padding:20px;border-radius:10px;text-align:center;min-width:180px;flex:1;">
<div style="font-size:1.5rem;margin-bottom:4px;">👤</div>
<div style="font-weight:700;font-size:1rem;">B — Behavior</div>
<div style="font-size:0.85rem;opacity:0.9;">（行動）</div>
<div style="font-size:0.8rem;margin-top:8px;opacity:0.9;">具体的に何を<br>したか・言ったか</div>
</div>
<div style="display:flex;align-items:center;font-size:1.5rem;">→</div>
<div style="background:var(--primary);color:white;padding:20px;border-radius:10px;text-align:center;min-width:180px;flex:1;">
<div style="font-size:1.5rem;margin-bottom:4px;">💥</div>
<div style="font-weight:700;font-size:1rem;">I — Impact</div>
<div style="font-size:0.85rem;opacity:0.9;">（影響）</div>
<div style="font-size:0.8rem;margin-top:8px;opacity:0.9;">その行動がどんな<br>影響を与えたか</div>
</div>
</div>
</div>

<h3>ポジティブフィードバックのSBI例</h3>
<div class="scenario-box">
<div class="scenario-box-title">📋 ポジティブSBI：プレゼンが上手だった部下に</div>
<p><strong>S（状況）：</strong>「昨日のクライアントA社向けのプレゼンの場で」</p>
<p><strong>B（行動）：</strong>「あなたは冒頭でA社の課題を3つ整理してから、それぞれに対する解決策を順番に提示していましたね」</p>
<p><strong>I（影響）：</strong>「おかげで、A社の担当者が大きく頷いていて、質疑応答でも前向きな質問ばかりでした。次のステップに進める可能性が高まったと感じています」</p>
</div>

<h3>ネガティブフィードバックのSBI例</h3>
<div class="scenario-box">
<div class="scenario-box-title">📋 ネガティブSBI：報告書にミスがあった部下に</div>
<p><strong>S（状況）：</strong>「今週月曜日に提出してもらった月次報告書について」</p>
<p><strong>B（行動）：</strong>「売上データの集計に3か所の計算ミスがありました」</p>
<p><strong>I（影響）：</strong>「そのまま経営会議に出していたら、誤ったデータで意思決定が行われるところでした。修正のために会議を1日延期する必要が生じました」</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ SBIフィードバックの注意点</div>
<ul>
<li>Behavior（行動）は<strong>人格ではなく行動</strong>にフォーカスする（「あなたは怠惰だ」ではなく「提出期限を過ぎていた」）</li>
<li>Impact（影響）は<strong>具体的な結果</strong>を述べる（「ダメだった」ではなく「クライアントからの信頼が損なわれた」）</li>
<li>フィードバックは<strong>できるだけ早く</strong>行う（時間が経つと記憶が曖昧になる）</li>
<li><strong>1対1の場面</strong>で行い、人前で叱責しない</li>
</ul>
</div>

<h2>2. GROWモデル</h2>
<p>GROWモデルは、ジョン・ウィットモアらが体系化した<strong>コーチングフレームワーク</strong>で、<strong>Goal（目標）→ Reality（現状）→ Options（選択肢）→ Will（意志）</strong>の4ステップで構成されます。</p>

<div class="visual-box">
<div class="visual-box-title">GROWモデルの4ステップ</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;margin:16px 0;">
<div style="background:#059669;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">G — Goal（目標）</div>
<div style="font-size:0.8rem;opacity:0.9;">達成したい目標を明確にする</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#10b981;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">R — Reality（現状）</div>
<div style="font-size:0.8rem;opacity:0.9;">現在の状況を客観的に把握する</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#34d399;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">O — Options（選択肢）</div>
<div style="font-size:0.8rem;opacity:0.9;">取り得る行動の選択肢を洗い出す</div>
</div>
<div style="font-size:1.2rem;">▼</div>
<div style="background:#047857;color:white;padding:14px 40px;border-radius:8px;font-weight:700;width:85%;max-width:450px;text-align:center;">
<div style="font-size:1.1rem;">W — Will（意志）</div>
<div style="font-size:0.8rem;opacity:0.9;">具体的な行動計画にコミットする</div>
</div>
</div>
</div>

<h3>GROW各ステップでの効果的な質問例</h3>
<table>
<tr><th>ステップ</th><th>目的</th><th>効果的な質問例</th></tr>
<tr><td><strong>G（Goal）</strong></td><td>目標を具体化する</td><td>
「今日のセッションで何を達成したいですか？」<br>
「理想の状態はどんなイメージですか？」<br>
「いつまでに達成したいですか？」
</td></tr>
<tr><td><strong>R（Reality）</strong></td><td>現状を正確に把握する</td><td>
「今の状況を10点満点で評価すると何点ですか？」<br>
「これまでに試したことはありますか？」<br>
「目標との間にどんなギャップがありますか？」
</td></tr>
<tr><td><strong>O（Options）</strong></td><td>選択肢を広げる</td><td>
「他にどんなアプローチが考えられますか？」<br>
「制約がなかったら、何をしますか？」<br>
「尊敬する人ならどうすると思いますか？」
</td></tr>
<tr><td><strong>W（Will）</strong></td><td>行動にコミットする</td><td>
「最初の一歩として何をしますか？」<br>
「いつまでにやりますか？」<br>
「実行の確度は10段階でどのくらいですか？」
</td></tr>
</table>

<div class="scenario-box">
<div class="scenario-box-title">📋 GROWモデルの実践例：部下の目標達成をコーチングする</div>
<p><strong>G（目標）：</strong>「今期の営業目標を120%達成したいと考えています。」</p>
<p><strong>R（現状）：</strong>「現在の進捗は65%で、残り2ヶ月で55%を達成する必要があります。大型案件が2件、見込み段階です。」</p>
<p><strong>O（選択肢）：</strong>「大型案件のクロージングを加速する、既存顧客へのアップセルを強化する、紹介依頼を出す、など考えられます。」</p>
<p><strong>W（意志）：</strong>「まず今週中に大型案件2件の意思決定者とのミーティングを設定します。並行して、既存顧客トップ10への追加提案リストを金曜日までに作成します。」</p>
</div>

<h2>フィードバックとコーチングの使い分け</h2>
<div class="compare-grid">
<div class="compare-card">
<h4>SBIフィードバックが適する場面</h4>
<ul>
<li>具体的な行動の改善を求めたい時</li>
<li>良い行動を承認・強化したい時</li>
<li>事実に基づいた客観的な評価を伝えたい時</li>
<li>短時間で要点を伝えたい時</li>
</ul>
</div>
<div class="compare-card">
<h4>GROWコーチングが適する場面</h4>
<ul>
<li>本人に考えさせ、気づきを促したい時</li>
<li>目標設定やキャリア開発の場面</li>
<li>本人の主体性を引き出したい時</li>
<li>複雑な問題の解決策を一緒に探りたい時</li>
</ul>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 フィードバック×コーチングの効果的な組み合わせ</div>
<strong>ステップ1：</strong>まずSBIフィードバックで具体的な行動と影響を伝える<br>
<strong>ステップ2：</strong>次にGROWモデルで「では今後どうしていきたいか？」をコーチングで引き出す<br><br>
例：「先日のプレゼンで〇〇の説明が不十分で、クライアントが混乱していた（SBI）。次回のプレゼンではどうしたいと思いますか？（GROW: Goal）」
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li><strong>SBIフィードバック</strong>は、状況・行動・影響の3要素で具体的に伝える手法</li>
<li><strong>GROWモデル</strong>は、目標・現状・選択肢・意志の4ステップで相手の主体性を引き出す手法</li>
<li>フィードバックで「伝え」、コーチングで「引き出す」の両輪でチームを成長させる</li>
<li>ポジティブフィードバック：ネガティブフィードバック = 3:1以上が理想的（ロサダ比）</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "SBIフィードバックモデルの「B」が意味する正しい内容はどれですか？",
                    options: [
                        "Belief（信念）— 相手の考え方や信念を指摘する",
                        "Behavior（行動）— 相手が具体的にとった行動を描写する",
                        "Blame（非難）— 問題の責任を明確にする",
                        "Background（背景）— 問題が起きた背景を説明する"
                    ],
                    answer: 1,
                    explanation: "SBIモデルのBは「Behavior（行動）」です。相手の人格や信念ではなく、具体的に観察された「行動」にフォーカスしてフィードバックすることが重要です。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "GROWモデルで「制約がなかったら、何をしますか？」という質問は、どのステップで使うものですか？",
                    options: [
                        "G（Goal）— 目標設定",
                        "R（Reality）— 現状把握",
                        "O（Options）— 選択肢の洗い出し",
                        "W（Will）— 意志・行動計画"
                    ],
                    answer: 2,
                    explanation: "「制約がなかったら何をしますか？」は、思考の枠を広げて多くの選択肢を引き出すための質問です。これはO（Options=選択肢の洗い出し）のステップで使用する効果的な質問です。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "フィードバックとコーチングの違いとして最も適切な説明はどれですか？",
                    options: [
                        "フィードバックは上司から部下へ、コーチングは部下から上司へ行う",
                        "フィードバックは過去の行動について伝える技術、コーチングは質問で気づきを引き出す技術",
                        "フィードバックは否定的な内容、コーチングは肯定的な内容を扱う",
                        "フィードバックは短時間、コーチングは必ず1時間以上かける"
                    ],
                    answer: 1,
                    explanation: "フィードバックは過去の具体的な行動に対して良い点や改善点を「伝える」技術です。コーチングは質問を通じて相手自身に気づきを促し、主体的な行動変容を「引き出す」技術です。両者は目的と手法が異なります。"
                }
            ]
        },
        {
            id: 404,
            title: "交渉術フレームワーク（BATNA・ZOPA・ハーバード流）",
            duration: "15分",
            content: `
<h2>ビジネス交渉の基本フレームワーク</h2>
<p>ビジネスにおいて交渉は避けて通れないスキルです。価格交渉、条件交渉、社内調整、パートナーシップ交渉など、日々の業務のあらゆる場面で交渉力が求められます。</p>
<p>本モジュールでは、交渉の成功率を飛躍的に高める3つのフレームワーク — <strong>BATNA</strong>、<strong>ZOPA</strong>、<strong>ハーバード流交渉術</strong> — を学びます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 交渉の本質</div>
交渉は「相手を打ち負かすこと」ではなく、<strong>「双方にとって価値ある合意を創り出すプロセス」</strong>です。優れた交渉者は、一方的に勝つのではなく、パイ（全体の価値）を大きくしてからパイを分ける方法を考えます。
</div>

<h2>1. BATNA（バトナ）</h2>
<p><strong>BATNA</strong>は「Best Alternative to a Negotiated Agreement」の略で、日本語では<strong>「交渉が不成立の場合の最善の代替案」</strong>と訳されます。ハーバード大学のロジャー・フィッシャーとウィリアム・ユーリーが提唱した概念です。</p>

<div class="visual-box">
<div class="visual-box-title">BATNAの概念</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin:16px 0;">
<div style="background:var(--primary);color:white;padding:16px 32px;border-radius:8px;font-weight:700;font-size:1rem;">交渉テーブル</div>
<div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;justify-content:center;">
<div style="text-align:center;">
<div style="font-size:0.85rem;font-weight:600;margin-bottom:4px;">相手の提案</div>
<div style="background:var(--warning-light);border:2px solid var(--warning);padding:12px;border-radius:8px;">条件 X</div>
</div>
<div style="font-size:1.5rem;font-weight:700;">vs</div>
<div style="text-align:center;">
<div style="font-size:0.85rem;font-weight:600;margin-bottom:4px;">あなたのBATNA</div>
<div style="background:var(--success-light);border:2px solid var(--success);padding:12px;border-radius:8px;">代替案 Y</div>
</div>
</div>
<div style="background:var(--bg);padding:12px 20px;border-radius:6px;font-size:0.85rem;max-width:500px;text-align:center;border:1px solid var(--border);">
<strong>判断基準：</strong>相手の提案がBATNAより良ければ合意、悪ければ交渉を続けるか離脱する
</div>
</div>
</div>

<h3>BATNAの準備方法</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>代替案をリストアップする</strong>
交渉が不成立になった場合、他にどんな選択肢があるかをすべて洗い出します。（例：他のベンダーに依頼する、内製化する、プロジェクトを延期する等）
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>各代替案を現実的に評価する</strong>
各選択肢のメリット・デメリット、実現可能性、コスト、時間を具体的に評価します。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>最善の代替案（BATNA）を特定する</strong>
最も現実的で価値の高い代替案がBATNAです。これが交渉における「撤退ライン」の基準になります。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>BATNAを強化する</strong>
交渉前にBATNAをさらに良いものにできないか検討します。BATNAが強いほど、交渉での立場が強くなります。（例：他社からの見積もりを取得しておく）
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ BATNAの重要な注意点</div>
<ul>
<li>BATNAは「希望する条件」ではなく「交渉不成立時の最善の代替案」です</li>
<li>BATNAを相手に明かすかどうかは戦略的に判断する（弱いBATNAは明かさない方が良い）</li>
<li><strong>相手のBATNAも推測する</strong>ことが重要。相手のBATNAが弱ければ、あなたの交渉力は高まります</li>
</ul>
</div>

<h2>2. ZOPA（ゾーパ）</h2>
<p><strong>ZOPA</strong>は「Zone of Possible Agreement」の略で、<strong>「合意可能な領域」</strong>を意味します。売り手の最低許容価格と買い手の最大許容価格の間に存在する交渉可能な範囲です。</p>

<div class="visual-box">
<div class="visual-box-title">ZOPAの図解 — 価格交渉の例</div>
<div style="margin:20px 0;padding:12px;">
<div style="display:flex;align-items:center;gap:4px;margin-bottom:8px;font-size:0.8rem;">
<div style="width:30%;text-align:right;padding-right:8px;">売り手の最低価格</div>
<div style="flex:1;height:24px;background:linear-gradient(90deg, transparent 0%, transparent 20%, var(--danger-light) 20%, var(--danger-light) 100%);border-radius:4px;position:relative;border:1px solid var(--border);">
<div style="position:absolute;left:20%;top:-2px;bottom:-2px;width:3px;background:var(--danger);"></div>
<div style="position:absolute;left:22%;top:3px;font-size:0.7rem;font-weight:600;color:var(--danger);">800万円</div>
</div>
</div>
<div style="display:flex;align-items:center;gap:4px;margin-bottom:8px;font-size:0.8rem;">
<div style="width:30%;text-align:right;padding-right:8px;">買い手の最大価格</div>
<div style="flex:1;height:24px;background:linear-gradient(90deg, var(--primary-light) 0%, var(--primary-light) 70%, transparent 70%, transparent 100%);border-radius:4px;position:relative;border:1px solid var(--border);">
<div style="position:absolute;left:70%;top:-2px;bottom:-2px;width:3px;background:var(--primary);"></div>
<div style="position:absolute;left:52%;top:3px;font-size:0.7rem;font-weight:600;color:var(--primary);">1,100万円</div>
</div>
</div>
<div style="display:flex;align-items:center;gap:4px;font-size:0.8rem;">
<div style="width:30%;text-align:right;padding-right:8px;font-weight:700;">ZOPA</div>
<div style="flex:1;height:32px;background:linear-gradient(90deg, transparent 0%, transparent 20%, var(--success) 20%, var(--success) 70%, transparent 70%, transparent 100%);border-radius:4px;position:relative;display:flex;align-items:center;justify-content:center;">
<div style="color:white;font-weight:700;font-size:0.85rem;">合意可能領域（800万〜1,100万円）</div>
</div>
</div>
</div>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>ZOPAが存在する場合</h4>
<p>売り手の最低価格 &lt; 買い手の最大価格</p>
<p>→ 両者の間に合意可能な範囲があり、交渉成立の可能性がある</p>
<p><em>例：売り手「最低800万円」、買い手「最大1,100万円」→ ZOPA = 800万〜1,100万円</em></p>
</div>
<div class="compare-card">
<h4>ZOPAが存在しない場合</h4>
<p>売り手の最低価格 &gt; 買い手の最大価格</p>
<p>→ 合意可能な範囲がなく、条件変更か交渉打ち切りとなる</p>
<p><em>例：売り手「最低1,200万円」、買い手「最大1,000万円」→ ZOPAなし</em></p>
</div>
</div>

<h2>3. ハーバード流交渉術の4原則</h2>
<p>ハーバード大学交渉学プロジェクトが提唱した<strong>「原則に基づく交渉（Principled Negotiation）」</strong>は、世界で最も影響力のある交渉フレームワークです。書籍『Getting to Yes（ハーバード流交渉術）』で広く知られています。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>人と問題を分離する（Separate People from the Problem）</strong>
交渉相手を「敵」ではなく「一緒に問題を解決するパートナー」として扱います。感情的な対立を避け、問題そのものに集中します。
<ul>
<li>相手の人格を攻撃しない</li>
<li>「あなた vs 私」ではなく「私たち vs 問題」の構図にする</li>
<li>相手の感情を認め、積極的に傾聴する</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>立場ではなく利害に焦点を当てる（Focus on Interests, Not Positions）</strong>
表面的な「立場（ポジション）」ではなく、その背後にある「利害（インタレスト）」を探ります。
<ul>
<li>「なぜそれを求めるのか？」を問いかける</li>
<li>相手の本当のニーズ（安心、利益、面子、時間）を理解する</li>
<li>共通の利害を見つけ出す</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>複数の選択肢を創出する（Invent Options for Mutual Gain）</strong>
「これしかない」と思い込まず、双方にとって利益となる複数の選択肢を創造します。
<ul>
<li>パイを大きくする発想（付加価値の創出）</li>
<li>トレードオフの活用（自社にとってコストが低く相手に価値が高いものを提供）</li>
<li>ブレインストーミングで選択肢を広げる</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>客観的基準を使う（Insist on Objective Criteria）</strong>
主観的な主張のぶつけ合いではなく、客観的な基準に基づいて合意点を見出します。
<ul>
<li>市場価格、業界標準、法的基準、前例</li>
<li>第三者の専門家の意見</li>
<li>公平性の原則（同じ立場なら同じ条件）</li>
</ul>
</div>
</div>
</div>

<h2>Win-Win交渉 vs ゼロサム交渉</h2>
<table>
<tr><th>観点</th><th>Win-Win交渉（統合型）</th><th>ゼロサム交渉（分配型）</th></tr>
<tr><td><strong>基本概念</strong></td><td>パイを大きくしてから分ける</td><td>固定されたパイを奪い合う</td></tr>
<tr><td><strong>関係性</strong></td><td>長期的なパートナーシップを重視</td><td>一回限りの取引が前提</td></tr>
<tr><td><strong>情報共有</strong></td><td>お互いの利害を積極的に開示</td><td>情報を隠し、駆け引きする</td></tr>
<tr><td><strong>典型例</strong></td><td>業務提携、パートナーシップ交渉</td><td>中古車の値引き交渉</td></tr>
<tr><td><strong>結果</strong></td><td>双方が満足する創造的な合意</td><td>一方の利益は他方の損失</td></tr>
<tr><td><strong>適したフレームワーク</strong></td><td>ハーバード流交渉術</td><td>BATNA/ZOPA</td></tr>
</table>

<h2>交渉の準備チェックリスト</h2>
<div class="info-box formula">
<div class="info-box-title">📐 交渉前の準備 10項目</div>
<ol>
<li>自分の<strong>目標（最善の結果）</strong>を明確にする</li>
<li>自分の<strong>BATNA</strong>を特定し、可能なら強化する</li>
<li>自分の<strong>留保価格（最低ライン）</strong>を設定する</li>
<li>相手の<strong>BATNA</strong>を推測する</li>
<li>相手の<strong>利害（インタレスト）</strong>を調べる</li>
<li><strong>ZOPA</strong>が存在するか推定する</li>
<li><strong>客観的基準</strong>（市場価格、前例等）を収集する</li>
<li>複数の<strong>提案パッケージ</strong>を用意する</li>
<li><strong>譲歩できる項目と譲歩できない項目</strong>を整理する</li>
<li>最初のオファー（<strong>アンカー</strong>）を戦略的に決める</li>
</ol>
</div>

<div class="scenario-box">
<div class="scenario-box-title">📋 交渉シナリオ：取引先との価格交渉</div>
<p><strong>状況：</strong>あなたはA社にシステム開発を提案中。A社は「予算は800万円まで」と主張、あなたの見積もりは1,200万円。</p>
<p><strong>あなたのBATNA：</strong>B社にも同様の案件を提案中（受注確度60%、見積もり1,000万円）</p>
<p><strong>立場ではなく利害に焦点：</strong>A社の真のニーズは「コスト削減」ではなく「来期の売上目標達成に間に合うシステム」かもしれない。納期が重要なら、価格よりスピードで交渉できる。</p>
<p><strong>複数の選択肢：</strong></p>
<ul>
<li>案1：フルスコープで1,200万円（分割払い対応）</li>
<li>案2：第1フェーズ700万円 + 第2フェーズ500万円の段階導入</li>
<li>案3：機能を絞ったMVP版を800万円で提供し、追加開発は別契約</li>
</ul>
<p><strong>客観的基準：</strong>類似規模のシステム開発の市場相場は1,000万〜1,500万円</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ 交渉フレームワークのまとめ</div>
<ul>
<li><strong>BATNA</strong>：交渉不成立時の最善の代替案。交渉の「撤退ライン」の基準になる</li>
<li><strong>ZOPA</strong>：合意可能な領域。売り手と買い手の許容範囲が重なる部分</li>
<li><strong>ハーバード流4原則</strong>：人と問題を分離 / 利害に焦点 / 複数の選択肢 / 客観的基準</li>
<li>交渉の成功は<strong>準備が8割</strong>。事前のリサーチと戦略構築が結果を左右する</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "BATNAの正しい説明はどれですか？",
                    options: [
                        "交渉で最初に提示する理想的な条件のこと",
                        "交渉相手が提示した最低条件のこと",
                        "交渉が不成立になった場合の最善の代替案のこと",
                        "交渉で双方が合意できる価格帯のこと"
                    ],
                    answer: 2,
                    explanation: "BATNAは「Best Alternative to a Negotiated Agreement」の略で、「交渉が不成立になった場合の最善の代替案」を意味します。BATNAが強いほど、交渉における立場が強くなります。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "売り手の最低許容価格が500万円、買い手の最大許容価格が700万円の場合、ZOPAはどうなりますか？",
                    options: [
                        "ZOPAは存在しない",
                        "ZOPAは500万〜700万円の範囲で存在する",
                        "ZOPAは700万円の一点のみ",
                        "ZOPAは600万円（中間値）の一点のみ"
                    ],
                    answer: 1,
                    explanation: "ZOPA（Zone of Possible Agreement）は、売り手の最低価格（500万円）と買い手の最大価格（700万円）の間に存在する合意可能な範囲です。この場合、500万〜700万円の範囲がZOPAとなり、この中のどこかで合意に至る可能性があります。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "ハーバード流交渉術の4原則に含まれないものはどれですか？",
                    options: [
                        "人と問題を分離する",
                        "立場ではなく利害に焦点を当てる",
                        "相手の弱点を見つけて交渉を有利に進める",
                        "客観的基準を使う"
                    ],
                    answer: 2,
                    explanation: "ハーバード流交渉術の4原則は「人と問題を分離する」「立場ではなく利害に焦点を当てる」「複数の選択肢を創出する」「客観的基準を使う」です。「相手の弱点を攻める」はハーバード流の原則に含まれず、むしろ対立する考え方です。"
                }
            ]
        }
    ]
};
