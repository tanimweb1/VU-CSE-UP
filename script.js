const routineData = {
  1: {
    A: {
      Sunday: [
        {
          time: "11:50-1:15",
          info: "PHY-1152 [JF] [SHR] (EEL)",
        },
        {
          time: "1:45-3:10",
          info: "CHE-1161 [SP] (2.10-3.10) (311)",
        },
        {
          time: "3:10-4:35",
          info: "EEE-1131 [JH] (311)",
        },
      ],
      Monday: [
        {
          time: "10:25-11:50",
          info: "CSE-1100 [SY] [MH] (BCL)",
        },
        {
          time: "11:50-1:15",
          info: "ENG-0002 [EMH] (311)",
        },
        {
          time: "1:45-3:10",
          info: "MAT-1141 [AKS] (408)",
        },
      ],
      Tuesday: [
        {
          time: "11:50-1:15",
          info: "EEE-1132 [AHP] [ZM] (EEL)",
        },
        {
          time: "1:45-3:10",
          info: "PHY-1151 [SHR] (313)",
        },
        {
          time: "3:10-4:35",
          info: "EEE-1131 [JH] (1011)",
        },
      ],
      Wednesday: [
        {
          time: "9:00-10:25",
          info: "ENG-0002 [EMH] (1011)",
        },
        {
          time: "10:25-11:50",
          info: "MAT-1141 [AKS] (1011)",
        },
        {
          time: "1:45-3:10",
          info: "EEE-1131 [JH] (1011)",
        },
        {
          time: "3:10-4:35",
          info: "CSE-1203 [SKC] (311)",
        },
      ],
      Thursday: [
        {
          time: "9:00-10:25",
          info: "PHY-1151 [SHR] (408)",
        },
        {
          time: "10:25-11:50",
          info: "CHE-1151 [SP] (408)",
        },
      
      ],
    },
    B: {
      Sunday: [
        {
          time: "1:45-3:10",
          info: "PHY-1151 [SHR] (314)",
        },
        {
          time: "3:10-4:35",
          info: "EEE-1132 [AHP] [NIS] (EEL)",
        },
      ],
      Monday: [
        {
          time: "11:50-1:15",
          info: "CSE-1100 [SY] [MH] (BCL)",
        },
        {
          time: "1:45-3:10",
          info: "PHY-1152 [SHR] [SJR] (DSCAL)",
        },
        {
          time: "3:10-4:35",
          info: "CHE-1161 [JEH] (511)",
        },
      ],
      Tuesday: [
        {
          time: "9:00-10:25",
          info: "PHY-1151 [SHR] (411)",
        },
        {
          time: "10:25-11:50",
          info: "ENG-0002 [EMH] (411)",
        },
        {
          time: "11:50-1:15",
          info: "EEE-1131 [NIS] (513)",
        },
      ],
      Wednesday: [
        {
          time: "9:00-10:25",
          info: "EEE-1131 [NIS] (1012)",
        },
        {
          time: "10:25-11:50",
          info: "ENG-0002 [EMH] (1012)",
        },
        {
          time: "11:50-1:15",
          info: "MAT-1141 [AKS] (1012)",
        },
      ],
      Thursday: [
        {
          time: "1:45-3:10",
          info: "EEE-1131 [NIS] (513)",
        },
        {
          time: "3:10-4:45",
          info: "CHE-1161 [JEH] (513)",
        },
        {
          time: "4:35-6:00",
          info: "MAT-1141 [AKS] (513)",
        },
      ],
    },
    C: {
      Sunday: [
        {
          time: "9:00-10:25",
          info: "CSE-1100 [SY] [TAN] (BCL)",
        },
        {
          time: "10:25-11:50",
          info: "ENG-0002 [EMH] (509)",
        },
      ],
      Monday: [
        {
          time: "9:00-10:25",
          info: "EEE-1132 [AHP] [NIS] (EEL)",
        },
        {
          time: "10:25-11:50",
          info: "MAT-1141 [AKS] (814)",
        },
        {
          time: "11:50-1:15",
          info: "PHY-1151 [SHR] (814)",
        },
      ],
      Tuesday: [
        {
          time: "11:50-1:15",
          info: "PHY-1152 [SHR] [SJR] (DSCAL)",
        },
        {
          time: "1:45-3:10",
          info: "EEE-1131 [NIS] (408)",
        },
        {
          time: "3:10-4:35",
          info: "MAT-1141 [AKS] (408)",
        },
      ],
      Wednesday: [
        {
          time: "9:00-10:25",
          info: "#REF!",
        },
        {
          time: "1:45-3:10",
          info: "ENG-0002 [EMH] (513)",
        },
        {
          time: "3:10-4:35",
          info: "CHE-1161 [MMI] (3.10-4.10) (513)",
        },
      ],
      Thursday: [
        {
          time: "11:50-1:15",
          info: "EEE-1131 [NIS] (514)",
        },
        {
          time: "1:45-3:10",
          info: "PHY-1151 [SHR] (514)",
        },
        {
          time: "3:10-4:35",
          info: "CHE-1161 [MMI] (3.10-4.10) (514)",
        },
      ],
    },
  },
};

const semesterSelect = document.getElementById("semesterSelect");
const daySelect = document.getElementById("daySelect");
const sectionSelect = document.getElementById("sectionSelect");
const searchBtn = document.getElementById("searchBtn");
const nextDayBtn = document.getElementById("nextDayBtn");
const resultArea = document.getElementById("resultArea");

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function parseInfo(raw) {
  const info = String(raw || "").trim();
  if (!info) return { course: "", teacher: "", room: "", raw: "" };

  const roomMatch = info.match(/\(([^()]*\d[^()]*)\)\s*$/);
  const room = roomMatch ? roomMatch[1] : "";

  const teacherMatch = info.match(/\[([^\]]+)\]/);
  const teacher = teacherMatch ? teacherMatch[1] : "";

  const course = info.split("[")[0].split("(")[0].trim();

  return { course, teacher, room, raw: info };
}

function renderEmpty(msg) {
  resultArea.innerHTML = `<div class="empty">${escapeHtml(msg)}</div>`;
}

function renderList(list, headerText) {
  if (!list || list.length === 0) {
    renderEmpty(
      "এই সেকশন ও দিনের জন্য কোনো ক্লাস নেই। অন্য সেকশন বা দিন নির্বাচন করুন।"
    );
    return;
  }
  let html = `<div style="font-weight:900;margin-bottom:10px">${escapeHtml(
    headerText
  )}</div>`;
  html += `<div class="cardGrid">`;
  list.forEach((it) => {
    const p = parseInfo(it.info);
    html += `<div class="card">
      <div class="time">${escapeHtml(it.time)}</div>
      <div class="infoTitle">${escapeHtml(p.course || p.raw)}</div>
      <div class="meta">${
        p.teacher
          ? `<strong>Teacher:</strong> ${escapeHtml(p.teacher)}<br>`
          : ""
      }${
      p.room ? `<strong>Room:</strong> ${escapeHtml(p.room)}` : escapeHtml("")
    }</div>
      <div class="pillRow"><div class="pill">Raw: ${escapeHtml(
        p.raw
      )}</div></div>
    </div>`;
  });
  html += `</div>`;
  resultArea.innerHTML = html;
}

function searchAndRender() {
  const sem = String(semesterSelect.value || "1");
  const day = daySelect.value;
  const sec = sectionSelect.value;

  if (!routineData[sem]) {
    renderEmpty(`Semester ${escapeHtml(sem)} এর কোন ডাটা পাওয়া যায়নি।`);
    return;
  }
  const semObj = routineData[sem];
  if (!semObj[sec]) {
    renderEmpty(`Section ${escapeHtml(sec)} এর কোন ডাটা পাওয়া যায়নি।`);
    return;
  }
  const dayList = semObj[sec][day] || [];
  const header = `Semester ${sem} — Section ${sec} — ${day}`;
  renderList(dayList, header);
}

function nextDay() {
  const cur = daySelect.value;
  const idx = weekdays.indexOf(cur);
  const nextIdx = idx === -1 || idx === weekdays.length - 1 ? 0 : idx + 1;
  daySelect.value = weekdays[nextIdx];
  searchAndRender();
}

searchBtn.addEventListener("click", searchAndRender);
nextDayBtn.addEventListener("click", nextDay);

window.addEventListener("load", () => {
  semesterSelect.value = "1";
  daySelect.value = "Sunday";
  sectionSelect.value = "A";
  searchAndRender();
});
