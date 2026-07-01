
const RUBRIC_META = {"generated": "2026-07-02", "ocs_count": 21, "course_count": 15};
const CAPTAINS = {"meta": {"version": "1.0.0", "purpose": "模擬審核委員會三視角：紅隊質疑、藍隊辯護、標竿對照"}, "captains": [{"id": "red", "name": "紅隊隊長", "role": "嚴格審查委員／補正風險獵手", "color": "#b91c1c", "mindset": "假設不通過，專找缺證、矛盾、不可稽核之處", "questions": ["佐證資料是否可追溯到原始來源？引用是否過時？", "利益關係人名單是否達 3 年以上資深占 6 成？是否有簽到／訪談紀錄？", "工作描述是否與其他職類重疊？行為指標是否可測量？", "課程 ADDIE 各階段是否有對應文件？試教紀錄是否完整？", "若被要求 7 日內補正，哪些項目無法在期限內完成？"], "scoring_bias": -0.5, "pass_threshold_note": "任一關鍵指標未達 4 分，建議列為高風險補正項"}, {"id": "blue", "name": "藍隊隊長", "role": "申請單位首席顧問／通過路徑設計", "color": "#1d4ed8", "mindset": "在符合官方指標前提下，最大化可辯護性與證據鏈完整性", "questions": ["每一要求條件是否已對應報告書章節頁碼？", "自我檢核表是否全數勾選並附佐證？", "產業需求面是否已連結政策、法規、人力統計三類證據？", "職能分析 DACUM／訪談／驗證是否形成閉環？", "課程評量是否對應行為指標且具學習成果證據？"], "scoring_bias": 0.3, "pass_threshold_note": "全數指標自評符合且頁碼對照完整，可爭取一次通過"}, {"id": "benchmark", "name": "標竿隊長", "role": "已通過案例／官方範例對照官", "color": "#15803d", "mindset": "對照 iCAP 官方手冊範例、同領域通過案例、平台公告 OCS", "questions": ["體例是否對齊附件 2-2 職能基準表格式？", "是否參照《職能導向課程發展示範說明》之 ADDIE 文件結構？", "與 icapV72 自我檢核表欄位是否一一對應？", "課程地圖、模組講義、評量計畫是否形成三角證據？", "個人及社會服務領域既有 OCS 之表述深度是否達標？"], "scoring_bias": 0, "pass_threshold_note": "對照標竿差距 ≤1 分者，列為優先補強而非致命缺失"}], "committee_rules": {"ocs_pass": "全數 21 項要求條件審查重點符合（自我檢核表須全勾）", "course_pass": "ADDIE 五大構面全數符合審查指標要求條件", "weighted_score_formula": "構面加權平均 ≥ 4.0（5 分制），且無單項 ≤ 2", "commercial_readiness": "可輸出客戶版缺口報告＋補正時程＋顧問報價基礎"}};
const CONDITIONS = [{"id": "1.1.1", "track": "ocs", "aspect": "需求面", "indicator": "1.1 產業及勞動力的需求", "text": "應說明發展標的對所屬產業領域及勞動市場之重要性或具體影響，並有具公信力佐證（產業政策方向、區域性產業需求）。", "focus": "產業面重要性說明合理且引用出處明確", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html", "01-寺廟管理師/05-品質檢核表/icapV72ck.html"]}, {"id": "1.1.2", "track": "ocs", "aspect": "需求面", "indicator": "1.1 產業及勞動力的需求", "text": "應說明發展標的對該職業有重要性或具體影響，至少包含兩項（公共安全／法規、附加價值、國際接軌、新興需求、從業規模、人才缺口等）。", "focus": "職業面至少兩項重要性，佐證充分", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "1.2.1", "track": "ocs", "aspect": "需求面", "indicator": "1.2 應用效益", "text": "應說明針對職能基準發展後具體可行或迫切需要之應用方式（學程、職訓、企業人資制度等）。", "focus": "應用方式具體可行", "critical": false, "maps": ["01-寺廟管理師/03-課程地圖/icap-Mmap.html"]}, {"id": "1.2.2", "track": "ocs", "aspect": "需求面", "indicator": "1.2 應用效益", "text": "應說明未來會應用之單位機構及其應用方式具體構想。", "focus": "協力單位與應用場景明確", "critical": false, "maps": ["01-寺廟管理師/06-行政與營運/"]}, {"id": "1.2.3", "track": "ocs", "aspect": "需求面", "indicator": "1.2 應用效益", "text": "應預估該職能基準未來應用可能影響人數規模。", "focus": "影響人數估算合理", "critical": false, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "2.1.1", "track": "ocs", "aspect": "流程面", "indicator": "2.1 方法工具選擇", "text": "應說明職能分析方法的考量原因及合理性。", "focus": "方法選擇有理論或實務依據", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "2.1.2", "track": "ocs", "aspect": "流程面", "indicator": "2.1 方法工具選擇", "text": "應依所選方法規劃符合理論依據的流程步驟，或說明實務操作正當性。", "focus": "分析流程步驟完整", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "2.2.1", "track": "ocs", "aspect": "流程面", "indicator": "2.2 分析流程", "text": "應配合所選方法規劃設計所需工具（問卷、訪談題綱等）。", "focus": "工具設計與方法一致", "critical": false, "maps": ["01-寺廟管理師/06-行政與營運/"]}, {"id": "2.2.2", "track": "ocs", "aspect": "流程面", "indicator": "2.2 分析流程", "text": "應依規劃流程循序進行完整步驟，並提供方法應產出之紀錄文件。", "focus": "步驟紀錄完整可稽核", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/"]}, {"id": "2.2.3", "track": "ocs", "aspect": "流程面", "indicator": "2.2 分析流程", "text": "應有具實務經驗利益關係人參與訂定證據；3 年以上資深占 6 成以上，兼顧不同規模組織。", "focus": "利益關係人比例與代表性", "critical": true, "maps": ["01-寺廟管理師/06-行政與營運/寺廟管理師 協力單位邀請函.docx"]}, {"id": "2.3.1", "track": "ocs", "aspect": "流程面", "indicator": "2.3 驗證方法", "text": "應說明如何選擇合適的驗證方法工具及驗證對象樣本。", "focus": "驗證方法適切", "critical": false, "maps": ["01-寺廟管理師/05-品質檢核表/"]}, {"id": "2.3.2", "track": "ocs", "aspect": "流程面", "indicator": "2.3 驗證方法", "text": "驗證結果應顯示職能內涵信效度或證明為產業／勞動市場所需。", "focus": "驗證結果具說服力", "critical": true, "maps": ["01-寺廟管理師/05-品質檢核表/icapV72ck02.html"]}, {"id": "2.3.3", "track": "ocs", "aspect": "流程面", "indicator": "2.3 驗證方法", "text": "應依據驗證結果合理調整職能內涵項目。", "focus": "調整紀錄與理由清楚", "critical": false, "maps": ["01-寺廟管理師/01-輔導計畫書/歷史版本/"]}, {"id": "3.1", "track": "ocs", "aspect": "成果面", "indicator": "3.1 產出項目", "text": "職能基準產出項目應完備。", "focus": "體例格式符合附件 2-2", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "3.2.1", "track": "ocs", "aspect": "成果面", "indicator": "3.2 工作任務", "text": "工作描述應清楚呈現跨組織適用主要工作範疇，不與其他職類重疊。", "focus": "職類界定清楚", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/HTML-正式版/"]}, {"id": "3.2.2", "track": "ocs", "aspect": "成果面", "indicator": "3.2 工作任務", "text": "工作描述與工作任務應反映目前產業及職場需求現況。", "focus": "任務與現況一致", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/HTML-正式版/icap-TextBookM1.html"]}, {"id": "3.3.1", "track": "ocs", "aspect": "成果面", "indicator": "3.3 職能內涵", "text": "應能透過適切方法驗證職能內涵項目之完整性。", "focus": "內涵完整性經驗證", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/"]}, {"id": "3.3.2", "track": "ocs", "aspect": "成果面", "indicator": "3.3 職能內涵", "text": "職能內涵項目應符合目前實務工作及趨勢所需。", "focus": "內涵與實務一致", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/HTML-正式版/"]}, {"id": "3.4.1", "track": "ocs", "aspect": "成果面", "indicator": "3.4 行為指標", "text": "行為指標項目應符合目前實務工作及趨勢所需。", "focus": "指標與實務對應", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "3.4.2", "track": "ocs", "aspect": "成果面", "indicator": "3.4 行為指標", "text": "行為指標應具體清楚描述行為表現。", "focus": "指標可觀察可評量", "critical": true, "maps": ["01-寺廟管理師/05-品質檢核表/icapV72ck03.html"]}, {"id": "3.4.3", "track": "ocs", "aspect": "成果面", "indicator": "3.4 行為指標", "text": "行為指標描述之能力程度應可對應工作任務之職能級別。", "focus": "級別對應正確", "critical": true, "maps": ["01-寺廟管理師/03-課程地圖/icap-Mmap.html"]}, {"id": "A-1", "track": "course", "aspect": "分析 Analyze", "indicator": "A 分析 Analyze", "text": "具體職能依據（公告 OCS／職能單元／自行職能分析）", "focus": "職能來源明確且與課程目標連結", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "A-2", "track": "course", "aspect": "分析 Analyze", "indicator": "A 分析 Analyze", "text": "需求分析與學習者分析完整", "focus": "目標族群、先備條件、缺口分析", "critical": true, "maps": ["01-寺廟管理師/01-輔導計畫書/最新版/icapV74.html"]}, {"id": "A-3", "track": "course", "aspect": "分析 Analyze", "indicator": "A 分析 Analyze", "text": "課程地圖／學習路徑對應職能單元", "focus": "CU-OCSU-單元對照可追溯", "critical": true, "maps": ["01-寺廟管理師/03-課程地圖/icap-Mmap.html", "01-寺廟管理師/03-課程地圖/icap-Mmap2.html"]}, {"id": "D-1", "track": "course", "aspect": "設計 Design", "indicator": "D1 設計 Design", "text": "教學目標對應行為指標與職能級別", "focus": "目標 SMART 且可評量", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/HTML-正式版/"]}, {"id": "D-2", "track": "course", "aspect": "設計 Design", "indicator": "D1 設計 Design", "text": "課程大綱／單元結構完整（F2-1/F2-2 等價）", "focus": "單元、時數、職能對照齊全", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/HTML-正式版/icap-TextBookM1.html"]}, {"id": "D-3", "track": "course", "aspect": "設計 Design", "indicator": "D1 設計 Design", "text": "評量設計於設計階段已規劃", "focus": "形成性＋總結性評量藍圖", "critical": false, "maps": ["01-寺廟管理師/05-品質檢核表/icapV72ck01.html"]}, {"id": "DV-1", "track": "course", "aspect": "發展 Develop", "indicator": "D2 發展 Develop", "text": "教材與教學資源完備（M1–M8 模組講義等）", "focus": "教材覆蓋所有職能單元", "critical": true, "maps": ["01-寺廟管理師/02-專業講義-模組/HTML-正式版/icap-TextBookM1.html", "icap-TextBookM8.html"]}, {"id": "DV-2", "track": "course", "aspect": "發展 Develop", "indicator": "D2 發展 Develop", "text": "師資資格與產業經驗符合要求", "focus": "師資表、資歷證明", "critical": true, "maps": ["01-寺廟管理師/06-行政與營運/"]}, {"id": "DV-3", "track": "course", "aspect": "發展 Develop", "indicator": "D2 發展 Develop", "text": "教學方法與職能內涵類型匹配（K/S/A）", "focus": "知識講授、技能演練、態度討論配比", "critical": false, "maps": ["01-寺廟管理師/02-專業講義-模組/單元教材/"]}, {"id": "I-1", "track": "course", "aspect": "實施 Implement", "indicator": "I 實施 Implement", "text": "試教／開課實施紀錄（F4-1 等價）", "focus": "簽到、教案、現場照片或紀錄", "critical": true, "maps": ["01-寺廟管理師/04-簡報/icapVdemo.html"]}, {"id": "I-2", "track": "course", "aspect": "實施 Implement", "indicator": "I 實施 Implement", "text": "iCAP 平台開課與學員資料登錄流程知悉", "focus": "平台操作手冊對照", "critical": false, "maps": ["docs/icap-official/認證專區/"]}, {"id": "I-3", "track": "course", "aspect": "實施 Implement", "indicator": "I 實施 Implement", "text": "課程總時數 ≥ 12 小時", "focus": "時數表加總正確", "critical": true, "maps": ["01-寺廟管理師/03-課程地圖/icap-Mmap.html"]}, {"id": "E-1", "track": "course", "aspect": "評估 Evaluate", "indicator": "E 評估 Evaluate", "text": "評量方式對應教學目標與行為指標", "focus": "評量藍圖與職能對照", "critical": true, "maps": ["01-寺廟管理師/05-品質檢核表/icapV72ck02.html"]}, {"id": "E-2", "track": "course", "aspect": "評估 Evaluate", "indicator": "E 評估 Evaluate", "text": "學習成果證據類型明確（作品集、測驗、實作檢核）", "focus": "證據可留存備查", "critical": true, "maps": ["01-寺廟管理師/05-品質檢核表/"]}, {"id": "E-3", "track": "course", "aspect": "評估 Evaluate", "indicator": "E 評估 Evaluate", "text": "課程自我管考與持續改善機制", "focus": "回饋循環、修訂紀錄", "critical": false, "maps": ["01-寺廟管理師/01-輔導計畫書/歷史版本/"]}];
const DEFAULT_SCORES = {"1.1.1": 4, "1.1.2": 4, "1.2.1": 3, "1.2.2": 3, "1.2.3": 4, "2.1.1": 4, "2.1.2": 4, "2.2.1": 3, "2.2.2": 3, "2.2.3": 3, "2.3.1": 3, "2.3.2": 4, "2.3.3": 3, "3.1": 4, "3.2.1": 3, "3.2.2": 3, "3.3.1": 3, "3.3.2": 3, "3.4.1": 4, "3.4.2": 4, "3.4.3": 3, "A-1": 4, "A-2": 4, "A-3": 3, "D-1": 3, "D-2": 3, "D-3": 4, "DV-1": 3, "DV-2": 3, "DV-3": 3, "I-1": 3, "I-2": 3, "I-3": 3, "E-1": 4, "E-2": 3, "E-3": 3};
const STORAGE_KEY = "icap_quality_review_v1";

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function persistField(id, field, value) {
  const s = loadState();
  s[id] = s[id] || {};
  s[id][field] = value;
  saveState(s);
}
function restoreFields() {
  const s = loadState();
  document.querySelectorAll(".score-input, textarea.note").forEach(el => {
    if (el.id === "board-minutes" && s.__board__ && s.__board__.minutes) {
      el.value = s.__board__.minutes;
      return;
    }
    const parts = el.id.split("-");
    const field = parts[0];
    const cid = parts.slice(2).join("-");
    if (s[cid] && s[cid][field === "score" ? "score" : "note"] !== undefined) {
      el.value = s[cid][field === "score" ? "score" : "note"];
    }
    el.addEventListener("change", () => persistField(cid, field === "score" ? "score" : "note", el.value));
    el.addEventListener("input", () => persistField(cid, field === "score" ? "score" : "note", el.value));
  });
  const minutes = document.getElementById("board-minutes");
  if (minutes) {
    minutes.addEventListener("input", () => persistField("__board__", "minutes", minutes.value));
  }
}

function avgScores(track) {
  const inputs = [...document.querySelectorAll(`tr[data-track="${track}"] .score-input`)];
  if (!inputs.length) {
    const items = collectReviewItems().filter(i => i.track === track);
    if (!items.length) return 0;
    return items.reduce((a, i) => a + i.score, 0) / items.length;
  }
  const sum = inputs.reduce((a, el) => a + (parseFloat(el.value) || 0), 0);
  return sum / inputs.length;
}

function updateDashboard() {
  const ocs = avgScores("ocs");
  const course = avgScores("course");
  const overall = (ocs * 0.45 + course * 0.55);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  const setMeter = (id, pct) => { const el = document.getElementById(id); if (el) el.style.width = pct + "%"; };
  set("dash-ocs", ocs.toFixed(2));
  set("dash-course", course.toFixed(2));
  set("dash-overall", overall.toFixed(2));
  setMeter("meter-ocs", (ocs / 5 * 100).toFixed(1));
  setMeter("meter-course", (course / 5 * 100).toFixed(1));
  setMeter("meter-overall", (overall / 5 * 100).toFixed(1));
  const pass = overall >= 4.0 && ocs >= 3.8 && course >= 3.8;
  const verdict = document.getElementById("dash-verdict");
  if (verdict) {
    verdict.textContent = pass ? "建議：補強後可送審" : "建議：重大缺口，暫不宜送審";
    verdict.style.color = pass ? "var(--pass)" : "var(--fail)";
  }
}

function exportReview() {
  const s = loadState();
  const blob = new Blob([JSON.stringify(s, null, 2)], {type: "application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "icap_quality_review_" + new Date().toISOString().slice(0,10) + ".json";
  a.click();
}

function generateActionPlan() {
  let gaps;
  const rows = [...document.querySelectorAll("tr[data-id]")];
  if (rows.length) {
    gaps = rows.map(row => {
      const cid = row.dataset.id;
      const score = parseFloat(row.querySelector(".score-input")?.value || 0);
      const note = row.querySelector("textarea.note")?.value || "";
      const text = row.cells[1]?.innerText || "";
      return { cid, score, note, text, track: row.dataset.track };
    }).filter(g => g.score < 4).sort((a,b) => a.score - b.score);
  } else {
    gaps = collectReviewItems().filter(g => g.score < 4).map(i => ({
      cid: i.id, score: i.score, note: i.note, text: i.text, track: i.track
    })).sort((a,b) => a.score - b.score);
  }
  const box = document.getElementById("action-plan-output");
  if (!box) return;
  if (!gaps.length) { box.innerHTML = "<p>目前無 &lt;4 分項目，可準備送審。</p>"; return; }
  box.innerHTML = "<ol>" + gaps.map(g =>
    `<li><strong>${g.cid}</strong>（${g.score}分）— ${String(g.text).slice(0,80)}…<br><em>補正：${g.note || "待填寫"}</em></li>`
  ).join("") + "</ol>";
}


function getItemScore(cid, state) {
  if (state[cid] && state[cid].score !== undefined && state[cid].score !== "") {
    return parseFloat(state[cid].score) || 0;
  }
  return DEFAULT_SCORES[cid] ?? 3;
}

function collectReviewItems() {
  const state = loadState();
  return CONDITIONS.map(c => ({
    ...c,
    score: getItemScore(c.id, state),
    note: (state[c.id] && state[c.id].note) || ""
  }));
}

function trackAvg(items, track) {
  const subset = items.filter(i => i.track === track);
  if (!subset.length) return 0;
  return subset.reduce((a, i) => a + i.score, 0) / subset.length;
}

function escHtml(s) {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function mapList(maps) {
  if (!maps || !maps.length) return "<em>（尚無對應文件路徑）</em>";
  return "<ul>" + maps.slice(0, 4).map(m => `<li><code>${escHtml(m)}</code></li>`).join("") + "</ul>";
}

function sevenDayRisk(item) {
  if (!item.maps || !item.maps.length) return true;
  if (item.score <= 2 && item.critical) return true;
  const risky = ["利益關係人", "DACUM", "試教", "訪談", "驗證", "試評"];
  const blob = item.text + item.focus;
  return item.score < 4 && risky.some(k => blob.includes(k));
}

function buildRedReport(items) {
  const ocs = trackAvg(items, "ocs");
  const course = trackAvg(items, "course");
  const overall = ocs * 0.45 + course * 0.55;
  const gaps = items.filter(i => i.score < 4).sort((a, b) => a.score - b.score);
  const fatal = items.filter(i => i.score <= 2);
  const criticalGaps = items.filter(i => i.critical && i.score < 4);
  const risky7 = gaps.filter(sevenDayRisk);
  const verdict = (overall < 4 || criticalGaps.length > 3)
    ? "建議：暫不宜送審，極可能遭要求補正"
    : (gaps.length > 8 ? "建議：條件性送審，須預留補正期" : "建議：可送審但須備妥補正說明");

  let html = `<p><strong>審查結論：</strong>${verdict}</p>`;
  html += `<p>綜合 ${overall.toFixed(2)} 分（OCS ${ocs.toFixed(2)}／課程 ${course.toFixed(2)}）。`;
  html += `未達 4 分共 <strong>${gaps.length}</strong> 項，其中關鍵項 ${criticalGaps.length} 項、≤2 分致命項 ${fatal.length} 項。</p>`;

  if (fatal.length) {
    html += `<h4>⚠ 致命缺口（≤2 分）</h4><ol>`;
    fatal.forEach(i => {
      html += `<li><strong>${i.id}</strong>（${i.score}分，${i.aspect}）— ${escHtml(i.focus)}`;
      if (i.note) html += `<br><em>委員意見：${escHtml(i.note)}</em>`;
      html += `</li>`;
    });
    html += `</ol>`;
  }

  if (criticalGaps.length) {
    html += `<h4>高風險補正項（關鍵指標 &lt;4）</h4><ol>`;
    criticalGaps.slice(0, 12).forEach(i => {
      html += `<li><strong>${i.id}</strong>（${i.score}分）— ${escHtml(i.text.slice(0, 120))}…`;
      html += `<br>質疑：佐證是否可稽核？${escHtml(i.focus)}`;
      html += mapList(i.maps);
      html += `</li>`;
    });
    if (criticalGaps.length > 12) html += `<li>…另有 ${criticalGaps.length - 12} 項</li>`;
    html += `</ol>`;
  }

  if (risky7.length) {
    html += `<h4>7 日內難以補正項目</h4><ul>`;
    risky7.slice(0, 8).forEach(i => {
      html += `<li><strong>${i.id}</strong> — 涉及訪談／試教／驗證流程，短期內難補齊原始紀錄</li>`;
    });
    html += `</ul>`;
  }

  html += `<h4>紅隊質疑清單（依 CAPTAINS 提問框架）</h4><ul>`;
  (CAPTAINS.captains.find(c => c.id === "red")?.questions || []).forEach(q => {
    html += `<li>${escHtml(q)}</li>`;
  });
  html += `</ul>`;

  return { html, verdict, overall, gaps: gaps.length };
}

function buildBlueReport(items) {
  const strengths = items.filter(i => i.score >= 4).sort((a, b) => b.score - a.score);
  const defend = items.filter(i => i.score >= 3 && i.score < 4);
  const weak = items.filter(i => i.score < 3);
  const ocs = trackAvg(items, "ocs");
  const course = trackAvg(items, "course");

  let html = `<p><strong>通過路徑評估：</strong>`;
  if (weak.length === 0 && defend.length <= 5) {
    html += `整體可辯護性佳，建議完成頁碼對照表後送審。`;
  } else if (weak.length <= 3) {
    html += `先補 ${weak.length} 項低分缺口，其餘以佐證鏈串聯爭取一次通過。`;
  } else {
    html += `需分階段補強：先處理無文件對照項，再完善自我檢核表勾選。`;
  }
  html += `</p><p>優勢項 ${strengths.length} 項（≥4分），可辯護項 ${defend.length} 項（3–4分）。</p>`;

  if (strengths.length) {
    html += `<h4>✓ 可主張符合之優勢項</h4><ul>`;
    strengths.slice(0, 10).forEach(i => {
      html += `<li><strong>${i.id}</strong>（${i.score}分）— ${escHtml(i.focus)}`;
      html += `<br>建議引用：${i.maps.length ? escHtml(i.maps[0]) : "待補頁碼"}`;
      html += `</li>`;
    });
    if (strengths.length > 10) html += `<li>…另有 ${strengths.length - 10} 項優勢</li>`;
    html += `</ul>`;
  }

  if (defend.length) {
    html += `<h4>△ 可辯護但須補強話術</h4><ol>`;
    defend.forEach(i => {
      html += `<li><strong>${i.id}</strong>（${i.score}分）<br>`;
      html += `辯護論點：已具 ${i.maps.length ? "對應產出" : "部分內容"}，建議於報告書標註章節頁碼並附自我檢核勾選。<br>`;
      html += `補強動作：${escHtml(i.note || "補充佐證截圖／會議簽到／修訂對照表")}`;
      html += mapList(i.maps);
      html += `</li>`;
    });
    html += `</ol>`;
  }

  html += `<h4>送審前藍隊檢查清單</h4><ol>`;
  html += `<li>自我檢核表（icapV72ck）全數勾選且與報告書敘述一致</li>`;
  html += `<li>每一要求條件附章節頁碼對照（建議獨立附錄）</li>`;
  html += `<li>產業需求面：政策＋法規＋人力統計三類證據齊備</li>`;
  html += `<li>OCS 均分 ${ocs.toFixed(2)}、課程均分 ${course.toFixed(2)}，皆須達委員會門檻</li>`;
  html += `</ol>`;

  return { html, strengths: strengths.length, defend: defend.length };
}

function buildBenchmarkReport(items) {
  const benchmarkTarget = 5;
  const near = items.filter(i => benchmarkTarget - i.score <= 1 && i.score < 5);
  const noMap = items.filter(i => !i.maps || !i.maps.length);
  const hasV72 = items.filter(i => i.maps.some(m => m.includes("icapV72") || m.includes("icapV74")));

  let html = `<p><strong>標竿對照結論：</strong>以官方 iCAP 手冊範例及宮廟管理師 icapV72／V74 產出為標竿。</p>`;
  html += `<p>已對照官方檢核表路徑 <strong>${hasV72.length}</strong>／${items.length} 項；`;
  html += `與標竿差距 ≤1 分（優先補強）共 <strong>${near.length}</strong> 項；`;
  html += `尚無文件對照 <strong>${noMap.length}</strong> 項。</p>`;

  if (near.length) {
    html += `<h4>優先補強（非致命，差距 ≤1 分）</h4><ol>`;
    near.sort((a, b) => a.score - b.score).slice(0, 12).forEach(i => {
      html += `<li><strong>${i.id}</strong>（${i.score}分→目標5分）— ${escHtml(i.focus)}`;
      html += `<br>標竿參照：${i.maps.length ? escHtml(i.maps.join("、")) : "官方附件 2-2 職能基準表格式"}`;
      html += `</li>`;
    });
    html += `</ol>`;
  }

  if (noMap.length) {
    html += `<h4>體例／文件鏈缺口</h4><ul>`;
    noMap.slice(0, 6).forEach(i => {
      html += `<li><strong>${i.id}</strong> — 缺少宮廟管理師 repo 對照路徑，建議對齊 ADDIE 或 I-P-O 官方範例章節</li>`;
    });
    if (noMap.length > 6) html += `<li>…另有 ${noMap.length - 6} 項</li>`;
    html += `</ul>`;
  }

  html += `<h4>標竿隊長對照提問</h4><ul>`;
  (CAPTAINS.captains.find(c => c.id === "benchmark")?.questions || []).forEach(q => {
    html += `<li>${escHtml(q)}</li>`;
  });
  html += `</ul>`;

  html += `<h4>三角證據建議（課程構面）</h4><p>課程地圖 ↔ 模組講義 ↔ 評量計畫應可互相追溯。`;
  const courseWeak = items.filter(i => i.track === "course" && i.score < 4);
  if (courseWeak.length) {
    html += `目前課程面 ${courseWeak.length} 項未達標，優先補齊試教紀錄與評量對照表。</p>`;
  } else {
    html += `課程構面整體達標竿水準。</p>`;
  }

  return { html, near: near.length, noMap: noMap.length };
}

function buildMeetingMinutes(red, blue, bench, items) {
  const ocs = trackAvg(items, "ocs");
  const course = trackAvg(items, "course");
  const overall = ocs * 0.45 + course * 0.55;
  const gaps = items.filter(i => i.score < 4).length;
  const today = new Date().toLocaleString("zh-TW", { hour12: false });

  let md = `【會議時間】${today}\n`;
  md += `【審查標的】宮廟管理師（icap-zhineng-jizhun）\n`;
  md += `【評分摘要】綜合 ${overall.toFixed(2)}／OCS ${ocs.toFixed(2)}／課程 ${course.toFixed(2)}（5分制）\n\n`;

  md += `【紅隊隊長】\n${red.verdict}\n`;
  md += `未達標 ${gaps} 項。紅隊主張：缺證、不可稽核或關鍵指標未達 4 分者，應列補正或不予通過。\n\n`;

  md += `【藍隊隊長】\n優勢項 ${blue.strengths} 項、可辯護項 ${blue.defend} 項。\n`;
  md += `藍隊主張：完成頁碼對照與自我檢核表後，多數缺口可於補正期內化解，爭取一次通過。\n\n`;

  md += `【標竿隊長】\n優先補強 ${bench.near} 項（差距≤1分）；無文件對照 ${bench.noMap} 項。\n`;
  md += `標竿主張：對齊 icapV72 檢核表欄位與官方 ADDIE 文件結構，縮小與通過案例差距。\n\n`;

  const pass = overall >= 4.0 && ocs >= 3.8 && course >= 3.8 && gaps <= 6;
  md += `【委員會決議】\n`;
  md += pass
    ? "條件性同意送審：送審前須完成補正行動計畫所列優先項，並備妥頁碼對照附錄。"
    : "暫緩送審：請依補正行動計畫處理致命缺口與無對照文件項，完成後召開複審。";

  return md;
}

let lastCaptainReportMd = "";

function generateCaptainReports() {
  const items = collectReviewItems();
  const red = buildRedReport(items);
  const blue = buildBlueReport(items);
  const bench = buildBenchmarkReport(items);
  const minutes = buildMeetingMinutes(red, blue, bench, items);

  const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  setHtml("report-red", red.html);
  setHtml("report-blue", blue.html);
  setHtml("report-benchmark", bench.html);

  const meta = document.getElementById("report-meta");
  if (meta) {
    meta.textContent = "產生時間：" + new Date().toLocaleString("zh-TW", { hour12: false })
      + " · 資料來源：localStorage 評分＋宮廟管理師文件初評";
  }

  const box = document.getElementById("board-minutes");
  if (box) {
    box.value = minutes;
    persistField("__board__", "minutes", minutes);
  }

  const ocs = trackAvg(items, "ocs");
  const course = trackAvg(items, "course");
  const overall = ocs * 0.45 + course * 0.55;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set("board-ocs", ocs.toFixed(2));
  set("board-course", course.toFixed(2));
  set("board-overall", overall.toFixed(2));
  set("board-gaps", String(items.filter(i => i.score < 4).length));

  lastCaptainReportMd = `# 三隊長審查會議報告\n\n${minutes}\n\n---\n\n## 紅隊詳細報告\n\n${red.html.replace(/<[^>]+>/g, "")}\n\n## 藍隊詳細報告\n\n${blue.html.replace(/<[^>]+>/g, "")}\n\n## 標竿詳細報告\n\n${bench.html.replace(/<[^>]+>/g, "")}\n`;
}

function downloadCaptainReportMd() {
  if (!lastCaptainReportMd) generateCaptainReports();
  const blob = new Blob([lastCaptainReportMd], { type: "text/markdown;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "三隊長審查報告_" + new Date().toISOString().slice(0, 10) + ".md";
  a.click();
}


document.addEventListener("DOMContentLoaded", () => {
  restoreFields();
  document.querySelectorAll(".score-input").forEach(el => el.addEventListener("input", updateDashboard));
  updateDashboard();
  if (document.getElementById("report-red")) generateCaptainReports();
  if (document.getElementById("action-plan-output")) generateActionPlan();
});
