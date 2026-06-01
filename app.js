// Mock Data for Staff Members (佐藤さんの再設計および5本柱対応版)
const staffData = [
  {
    id: "sato",
    name: "佐藤",
    facility: "桜木整形外科クリニック",
    mbti: "INFJ (提唱者)",
    values: "「臨床推論の徹底と、科学的根拠（エビデンス）に基づくリハビリテーションの追求」",
    target: "院内における超音波エコーを活用した客観的評価システムの確立と臨床導入",
    strengths: "臨床推論能力が極めて高く、難治性の症例に対する論理的アプローチが得意。学術活動（学会発表・論文執筆）に熱心で、若手の臨床指導でも高い信頼を得ている。",
    aspirations: ["スペシャリスト志向", "臨床研究・学術", "後輩の臨床指導"],
    skills: [5, 4, 4, 2, 3], // 臨床, 教育, 学術, スポーツ支援, 健康増進
    condition: {
      motivation: "良好 (Good)",
      motivationClass: "cond-good",
      workload: "適正 (Normal)",
      workloadClass: "cond-good"
    },
    contributions: [
      "腰椎・骨盤帯領域の最新エビデンスに基づく『臨床推論チェックリスト』を独自に作成し、リハビリ科内へ導入。",
      "月2回開催される症例検討会の進行方法を刷新し、若手セラピストが主体的に課題をアウトプットできる学習環境を構築。",
      "若手スタッフ向けの「超音波エコーを用いた運動器評価」の実技ミニ勉強会を主導。"
    ],
    metrics: {
      units: 950,
      patients: 125
    },
    chartData: {
      labels: ["12月", "1月", "2月", "3月", "4月", "5月"],
      units: [850, 880, 820, 890, 930, 950],
      patients: [110, 115, 108, 118, 122, 125]
    },
    achievements: [
      { type: "学会発表", title: "「急性腰痛症に対する超音波画像を用いた体幹深部筋群のリアルタイムフィードバック効果」（2025年）" },
      { type: "論文", title: "「足関節外側靭帯損傷後における足底感覚閾値と静的バランス能力の関連性について」（2024年）" },
      { type: "外部活動", title: "近隣の理学療法士養成校における非常勤講師（運動器物理療法）" }
    ],
    interviews: [
      {
        date: "2026/05/18",
        interviewer: "リハビリ科長",
        notes: "秋の学術大会に向けた症例データの収集状況について確認。予定通り必要症例数の収集が完了しており、今月中に抄録の第1稿を作成するスケジュールで合意。",
        action: "学術大会発表用の抄録ドラフト作成"
      },
      {
        date: "2026/04/12",
        interviewer: "リハビリ科長",
        notes: "科内で主導した『臨床評価表の改訂プロジェクト』の評価。評価項目が整理されたことで、カルテ記載時間が短縮されつつ、評価の精度が上がったと報告を受けた。",
        action: "改訂評価表の定着度と課題についてアンケート実施"
      }
    ]
  },
  {
    id: "takahashi",
    name: "高橋",
    facility: "桜木整形外科クリニック",
    mbti: "ENFJ (主人公)",
    values: "「チーム全体の成長が、患者様の笑顔と早期回復に繋がる」",
    target: "若手セラピストの臨床推論スキルの向上と教育システムの体系化",
    strengths: "徒手療法の実技指導力と、スタッフ個人のやる気を引き出すファシリテーション技術。新人の教育計画やカリキュラム構築に強みを持つ。",
    aspirations: ["マネジメント志向", "教育・後輩育成", "院内研修の標準化"],
    skills: [4, 5, 3, 3, 4], // 臨床, 教育, 学術, スポーツ支援, 健康増進
    condition: {
      motivation: "良好 (Good)",
      motivationClass: "cond-good",
      workload: "やや過多 (Warning)",
      workloadClass: "cond-warning"
    },
    contributions: [
      "新人セラピスト向けの臨床推論教育プラン（カリキュラム）を策定・導入し、即戦力化を支援。",
      "科内の週次症例検討会・勉強会のファシリテーターとして、スタッフ間の活発な知見共有を促進。",
      "他部署（看護部・地域連携室）との合同退院支援ミーティング窓口として、スムーズな他職種連携に貢献。"
    ],
    metrics: {
      units: 1180,
      patients: 150
    },
    chartData: {
      labels: ["12月", "1月", "2月", "3月", "4月", "5月"],
      units: [1100, 1120, 1050, 1150, 1140, 1180],
      patients: [140, 142, 135, 148, 146, 150]
    },
    achievements: [
      { type: "学会発表", title: "「人工膝関節置換術（TKA）後早期における歩行獲得に影響する因子の検討」（2024年）" },
      { type: "論文", title: "「回復期リハビリテーション病棟における新人セラピスト向け臨床推論評価シートの導入効果」（2023年）" }
    ],
    interviews: [
      {
        date: "2026/05/20",
        interviewer: "リハビリ科長",
        notes: "管理業務と臨床業務のバランスについてヒアリング。若手スタッフの指導タスクが増えており、実務負担の軽減策を検討。今後は副主任の佐藤さんとタスク分担を行うことで合意。",
        action: "佐藤副主任との新人指導進捗会議の設定、業務の棚卸し"
      },
      {
        date: "2026/04/15",
        interviewer: "リハビリ科長",
        notes: "リハビリ技術向上のための院内勉強会のカリキュラム改訂について。エビデンス（機能解剖学・物理療法）に基づく評価項目を追加したプランを提出され、承認。",
        action: "第1回勉強会（超音波エコー見学）の資料作成と講師調整"
      }
    ]
  },
  {
    id: "ito",
    name: "伊藤",
    facility: "桜木整形外科クリニック",
    mbti: "ESTP (起業家)",
    values: "「迅速な初期評価と、早期の社会復帰・スポーツ競技復帰のサポート」",
    target: "スポーツ障害に対する運動療法の専門スキルの習得と担当患者数の拡大",
    strengths: "外傷急性期へのテーピング対応およびクイック動作分析。学生スポーツ選手やアクティブな高齢患者との関係構築が非常に速い。",
    aspirations: ["スポーツ現場・帯同", "健康増進・予防プログラム", "運動療法スペシャリスト"],
    skills: [3, 3, 2, 5, 5], // 臨床, 教育, 学術, スポーツ支援, 健康増進
    condition: {
      motivation: "良好 (Good)",
      motivationClass: "cond-good",
      workload: "適正 (Normal)",
      workloadClass: "cond-good"
    },
    contributions: [
      "地域高校陸上競技部への帯同活動で得た外傷急性期対応（RICE処置や固定法）のノウハウを、若手向けの実技勉強会として還元。",
      "急性期スポーツ障害の運動療法アプローチにおいて、患者アンケートの満足度で高評価を獲得。",
      "近隣の中学・高校スポーツチームとのメディカル窓口を開拓し、紹介患者数の向上に貢献。"
    ],
    metrics: {
      units: 820,
      patients: 100
    },
    chartData: {
      labels: ["12月", "1月", "2月", "3月", "4月", "5月"],
      units: [720, 750, 730, 780, 800, 820],
      patients: [88, 92, 90, 96, 98, 100]
    },
    achievements: [
      { type: "外部活動", title: "地域公立高校陸上競技部へのトレーナー帯同（インターハイ予選サポート）" }
    ],
    interviews: [
      {
        date: "2026/05/11",
        interviewer: "佐藤副主任",
        notes: "月次目標の面談。稼働実績（単位数）は順調に伸びている。物理療法の併用と運動療法の論理的な選択理由を他スタッフにも説明できるよう、課題を設定。",
        action: "症例報告シート（週1回提出）での臨床リーズニングの記述練習"
      },
      {
        date: "2026/03/25",
        interviewer: "佐藤副主任",
        notes: "整形外科的な外傷初期対応（急性足関節捻挫へのRICE処置等）の実技研修を実施。手順はクリアしているが、カルテ記載における他職種連携用の記載内容について一部指導。",
        action: "他職種が理解しやすい共通用語を用いたカルテ記述の意識付け"
      }
    ]
  },
  {
    id: "watanabe",
    name: "渡辺",
    facility: "桜木整形外科クリニック",
    mbti: "ISTJ (管理者)",
    values: "「客観的なデータとエビデンスに基づいた確実な治療計画の立案」",
    target: "物理療法機器の臨床効果検証と、データ解析に基づくリハビリプログラムの設計",
    strengths: "学術論文（英文含む）の検索および読解力。個別リハビリ計画における緻密な仮説検証と、正確で迅速なカルテ記録が特長。",
    aspirations: ["臨床研究・論文", "臨床スペシャリスト", "データ集計・分析"],
    skills: [4, 3, 5, 2, 2], // 臨床, 教育, 学術, スポーツ支援, 健康増進
    condition: {
      motivation: "普通 (Normal)",
      motivationClass: "cond-normal",
      workload: "適正 (Normal)",
      workloadClass: "cond-good"
    },
    contributions: [
      "リハビリ室全体の統計データ集計自動マクロ（スプレッドシート用）を作成し、スタッフの月末事務作業時間を大幅に効率化。",
      "超音波エコーを用いた運動療法（大腿四頭筋腱評価）の院内ミニレクチャーで講師を担当。",
      "学会発表を目指す他のアソシエイトスタッフに対して、データ統計解析やグラフ作成の技術的サポートを提供。"
    ],
    metrics: {
      units: 1080,
      patients: 140
    },
    chartData: {
      labels: ["12月", "1月", "2月", "3月", "4月", "5月"],
      units: [980, 1020, 990, 1040, 1060, 1080],
      patients: [125, 132, 128, 136, 138, 140]
    },
    achievements: [
      { type: "論文", title: "「物理療法（温熱刺激・高周波治療）が慢性腰痛症の関節可動域に与える影響の比較」（2025年）" },
      { type: "学会発表", title: "「超音波エコーを用いた大腿四頭筋腱の形態変化と運動アプローチの関連性について」（2026年）" }
    ],
    interviews: [
      {
        date: "2026/05/22",
        interviewer: "高橋主任",
        notes: "カルテ記載業務の効率化に向けて、音声入力アプリケーション（Typeless）をテスト導入中。定性記載にかかる時間が約30％短縮されており、残業時間削減に直結していることを確認した。",
        action: "他のリハビリスタッフへの操作説明資料の作成と共有"
      },
      {
        date: "2026/04/18",
        interviewer: "佐藤副主任",
        notes: "学会発表予定のデータ集計に関する相談。記述統計および統計解析（t検定）の手順について確認し、プレゼンテーション資料のスライド構成をアドバイスした。",
        action: "統計データ分析の完了と、発表用スライド第1稿の作成"
      }
    ]
  }
];

// State variables
let currentChart = null;
let currentRadarChart = null;

// DOM Elements
const staffListContainer = document.getElementById("staff-list-container");
const searchInput = document.getElementById("staff-search");
const welcomeScreen = document.getElementById("welcome-screen");
const detailContainer = document.getElementById("detail-container");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  renderStaffList(staffData);
  setupEventListeners();
});

// Setup Events
function setupEventListeners() {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = staffData.filter(s => 
      s.name.toLowerCase().includes(query) || 
      s.facility.toLowerCase().includes(query)
    );
    renderStaffList(filtered);
  });
}

// Render the Sidebar List
function renderStaffList(list) {
  staffListContainer.innerHTML = "";
  if (list.length === 0) {
    staffListContainer.innerHTML = `<p style="padding: 16px; color: var(--text-muted); font-size: 14px;">見つかりませんでした</p>`;
    return;
  }

  list.forEach(staff => {
    const item = document.createElement("div");
    item.className = "staff-item";
    item.setAttribute("data-id", staff.id);
    
    // Get Initials for Avatar
    const initials = staff.name.substring(0, 1);
    
    item.innerHTML = `
      <div class="avatar">${initials}</div>
      <div class="staff-info">
        <div class="staff-name">${staff.name}</div>
        <div class="staff-meta">
          <span>${staff.facility.replace("整形外科クリニック", "").replace("リハビリセンター", "")}</span>
        </div>
      </div>
    `;
    
    item.addEventListener("click", () => selectStaff(staff.id));
    staffListContainer.appendChild(item);
  });
}

// Select and display staff detail
function selectStaff(staffId) {
  // Update UI active class in sidebar
  document.querySelectorAll(".staff-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-id") === staffId) {
      item.classList.add("active");
    }
  });

  const staff = staffData.find(s => s.id === staffId);
  if (!staff) return;

  // Show container, hide welcome screen
  welcomeScreen.classList.add("hidden");
  detailContainer.classList.remove("hidden");

  // Populate basic header data
  document.getElementById("detail-avatar").textContent = staff.name.substring(0, 1);
  document.getElementById("detail-name").textContent = staff.name;
  document.getElementById("detail-facility").textContent = staff.facility;
  document.getElementById("detail-mbti").innerHTML = `<i class="fa-solid fa-dna"></i> MBTI: ${staff.mbti}`;
  
  // Profile text blocks
  document.getElementById("detail-values").textContent = staff.values;
  document.getElementById("detail-targets").textContent = staff.target;
  document.getElementById("detail-strengths").textContent = staff.strengths;
  
  // 1. Render Aspirations (キャリア志向バッジ)
  const aspirationsContainer = document.getElementById("detail-aspirations");
  aspirationsContainer.innerHTML = "";
  staff.aspirations.forEach(asp => {
    const badge = document.createElement("span");
    badge.className = "badge badge-aspiration";
    badge.textContent = asp;
    aspirationsContainer.appendChild(badge);
  });

  // 2. Render Condition Alerts
  const motivationEl = document.getElementById("status-motivation");
  const workloadEl = document.getElementById("status-workload");
  
  motivationEl.textContent = staff.condition.motivation;
  motivationEl.className = `cond-status badge ${staff.condition.motivationClass}`;
  
  workloadEl.textContent = staff.condition.workload;
  workloadEl.className = `cond-status badge ${staff.condition.workloadClass}`;

  // KPI Metrics
  document.getElementById("metric-units").innerHTML = `${staff.metrics.units} <span class="unit">単位</span>`;
  document.getElementById("metric-patients").innerHTML = `${staff.metrics.patients} <span class="unit">人</span>`;

  // Render Academic Achievements
  const achievementsContainer = document.getElementById("detail-achievements");
  achievementsContainer.innerHTML = "";
  if (staff.achievements && staff.achievements.length > 0) {
    staff.achievements.forEach(ach => {
      const li = document.createElement("li");
      li.className = "achievement-item";
      li.innerHTML = `<strong>[${ach.type}]</strong> ${ach.title}`;
      achievementsContainer.appendChild(li);
    });
  } else {
    achievementsContainer.innerHTML = `<li style="color: var(--text-muted); font-size: 13px; list-style: none;">登録された成果はありません。</li>`;
  }

  // 3. Render Contributions (定性的な組織貢献)
  const contributionsContainer = document.getElementById("detail-contributions");
  contributionsContainer.innerHTML = "";
  if (staff.contributions && staff.contributions.length > 0) {
    staff.contributions.forEach(contrib => {
      const li = document.createElement("li");
      li.className = "contribution-item";
      li.textContent = contrib;
      contributionsContainer.appendChild(li);
    });
  } else {
    contributionsContainer.innerHTML = `<li style="color: var(--text-muted); font-size: 13px; list-style: none;">定性的な貢献実績は登録されていません。</li>`;
  }

  // Render Interview Timeline
  const timelineContainer = document.getElementById("detail-timeline");
  timelineContainer.innerHTML = "";
  staff.interviews.forEach(inv => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <span class="timeline-date">${inv.date}</span>
        <span class="timeline-interviewer">面談者: ${inv.interviewer}</span>
      </div>
      <div class="timeline-body">
        ${inv.notes}
        ${inv.action ? `<div class="timeline-action"><i class="fa-solid fa-circle-check"></i> <strong>Next:</strong> ${inv.action}</div>` : ""}
      </div>
    `;
    timelineContainer.appendChild(item);
  });

  // Render Charts
  renderChart(staff.chartData);
  renderRadarChart(staff.skills);
}

// Render Line Chart
function renderChart(chartData) {
  const ctx = document.getElementById("performance-chart").getContext("2d");
  
  if (currentChart) {
    currentChart.destroy();
  }

  currentChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "消化単位数",
          data: chartData.units,
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.04)",
          borderWidth: 2,
          tension: 0.15,
          fill: true,
          yAxisID: "y-units"
        },
        {
          label: "消化人数",
          data: chartData.patients,
          borderColor: "#0ea5e9",
          backgroundColor: "rgba(14, 165, 233, 0.02)",
          borderWidth: 1.5,
          tension: 0.15,
          borderDash: [3, 3],
          yAxisID: "y-patients"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#475569",
            font: { family: "Inter", size: 10 }
          }
        }
      },
      scales: {
        x: {
          grid: { color: "#e2e8f0" },
          ticks: { color: "#64748b", font: { size: 10 } }
        },
        "y-units": {
          type: "linear",
          position: "left",
          grid: { color: "#e2e8f0" },
          ticks: { color: "#2563eb", font: { size: 10 } }
        },
        "y-patients": {
          type: "linear",
          position: "right",
          grid: { drawOnChartArea: false },
          ticks: { color: "#0ea5e9", font: { size: 10 } }
        }
      }
    }
  });
}

// 4. Render Radar Chart (院内5本柱対応版)
function renderRadarChart(skillsData) {
  const ctx = document.getElementById("skills-chart").getContext("2d");

  if (currentRadarChart) {
    currentRadarChart.destroy();
  }

  currentRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["臨床", "後進育成", "学術", "スポーツ支援", "健康増進"],
      datasets: [{
        label: "5本柱評価",
        data: skillsData,
        backgroundColor: "rgba(37, 99, 235, 0.12)",
        borderColor: "#2563eb",
        borderWidth: 2,
        pointBackgroundColor: "#2563eb",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#2563eb"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          angleLines: {
            color: "#e2e8f0"
          },
          grid: {
            color: "#e2e8f0"
          },
          pointLabels: {
            color: "#475569",
            font: {
              family: "Noto Sans JP",
              size: 11,
              weight: "bold"
            }
          },
          ticks: {
            color: "#94a3b8",
            backdropColor: "transparent",
            stepSize: 1,
            font: { size: 9 }
          },
          suggestedMin: 0,
          suggestedMax: 5
        }
      }
    }
  });
}
