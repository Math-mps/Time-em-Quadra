const state = {
  role: "atleta",
  currentScreen: "dashboard",
  report: "jogo",
  selectedAthlete: "Mateus",
  presence: {
    "Treino técnico": "Pendente",
    "Jogo vs. Equipe Azul": "Pendente",
    "Treino tático": "Presente"
  },
  readNotices: new Set(["Uniforme do jogo"])
};

const notices = [
  {
    date: "14/06/2026",
    title: "Alteração no horário do treino",
    text: "Treino de quarta será às 20h no Ginásio Municipal.",
    aware: "12/15"
  },
  {
    date: "16/06/2026",
    title: "Uniforme do jogo",
    text: "Levar camisa azul, documento e garrafa identificada.",
    aware: "10/15"
  },
  {
    date: "18/06/2026",
    title: "Foco técnico da semana",
    text: "Recepção, cobertura de ataque e bloqueio duplo nas extremidades.",
    aware: "8/15"
  }
];

const events = [
  {
    name: "Treino técnico",
    date: "17/06/2026",
    type: "Treino",
    place: "Ginásio Municipal",
    goal: "Passe, defesa e transição para ataque."
  },
  {
    name: "Jogo vs. Equipe Azul",
    date: "22/06/2026",
    type: "Jogo",
    place: "Clube Central",
    goal: "Aplicar saque direcionado e bloqueio duplo."
  },
  {
    name: "Treino tático",
    date: "25/06/2026",
    type: "Treino",
    place: "Ginásio Municipal",
    goal: "Sistema defensivo, chamada de bola e cobertura."
  }
];

const attendance = [
  ["Mateus", 8, 1, 1, "88%"],
  ["Lucas", 7, 2, 0, "78%"],
  ["Rafael", 9, 0, 0, "100%"],
  ["Bruno", 6, 2, 1, "75%"],
  ["João", 8, 1, 0, "89%"]
];

const collective = [
  {
    title: "Jogo vs. Equipe Azul",
    meta: "22/06/2026 · Vitória por 2 sets a 1",
    strengths: "Saque agressivo no segundo set, cobertura defensiva e comunicação em ralis longos.",
    improve: "Recepção no início do jogo e ajuste de tempo no bloqueio.",
    tactics: "Saque na zona 1, bloqueio duplo nas extremidades e defesa em diagonal curta."
  },
  {
    title: "Treino técnico",
    meta: "17/06/2026 · 14 jogadores presentes",
    strengths: "Boa energia coletiva e aumento de regularidade no passe.",
    improve: "Reduzir erros não forçados após defesa positiva.",
    tactics: "Sequência de passe, levantamento na entrada e cobertura do ataque."
  }
];

const athletes = {
  Mateus: {
    role: "Ponteiro",
    skills: { Saque: 8, Passe: 7, Levantamento: 5, Ataque: 8, Bloqueio: 6, Defesa: 7 },
    notes: [
      "Boa postura nos treinos e comunicação positiva com o grupo.",
      "Evoluiu na regularidade do passe em bola flutuante.",
      "Precisa trabalhar tempo de bloqueio contra atacante de ponta."
    ]
  },
  Lucas: {
    role: "Oposto",
    skills: { Saque: 6, Passe: 6, Levantamento: 4, Ataque: 7, Bloqueio: 6, Defesa: 6 },
    notes: [
      "Potência ofensiva boa quando chega equilibrado.",
      "Frequência irregular reduziu assimilação tática.",
      "Próximo foco: deslocamento defensivo e controle emocional."
    ]
  },
  Rafael: {
    role: "Líbero",
    skills: { Saque: 7, Passe: 8, Levantamento: 5, Ataque: 3, Bloqueio: 2, Defesa: 9 },
    notes: [
      "Destaque em leitura defensiva e cobertura.",
      "Mantém alta assiduidade e ajuda na organização da quadra.",
      "Pode evoluir na qualidade da bola de apoio para contra-ataque."
    ]
  },
  Bruno: {
    role: "Levantador",
    skills: { Saque: 7, Passe: 7, Levantamento: 8, Ataque: 5, Bloqueio: 6, Defesa: 7 },
    notes: [
      "Boa distribuição quando a recepção chega estável.",
      "Precisa variar mais a bola de meio em momentos de pressão.",
      "Demonstra liderança tranquila nos treinos."
    ]
  }
};

const reportData = {
  jogo: {
    title: "Jogo vs. Equipe Azul · 22/06/2026",
    summary: [
      ["Resultado", "Vitória por 2x1"],
      ["Jogadores presentes", "10 de 12"],
      ["Assiduidade do evento", "83%"],
      ["Fundamento destaque", "Saque"],
      ["Principal melhoria", "Recepção"]
    ],
    rows: [
      ["Mateus", "Presente", "8", "7", "8", "Boa virada de bola"],
      ["Lucas", "Ausente justificado", "-", "-", "-", "Trabalho"],
      ["Rafael", "Presente", "7", "8", "9", "Destaque defensivo"],
      ["Bruno", "Presente", "7", "8", "7", "Boa distribuição"]
    ],
    bullets: [
      "A equipe cresceu no saque a partir do segundo set.",
      "Jogadores com maior frequência responderam melhor aos ajustes táticos.",
      "Recepção será prioridade no treino seguinte."
    ]
  },
  semanal: {
    title: "Semana 15/06/2026 a 21/06/2026",
    summary: [
      ["Treinos realizados", "3"],
      ["Média de presença", "86%"],
      ["Fundamento com maior evolução", "Defesa"],
      ["Fundamento instável", "Passe"],
      ["Foco recomendado", "Recepção e transição"]
    ],
    rows: [
      ["Mateus", "100%", "8", "7", "7", "Boa evolução"],
      ["Lucas", "67%", "6", "6", "6", "Precisa regularidade"],
      ["Rafael", "100%", "7", "8", "9", "Destaque defensivo"],
      ["Bruno", "75%", "7", "8", "7", "Boa liderança"]
    ],
    bullets: [
      "O grupo teve melhor resposta em exercícios de cobertura.",
      "A presença acima de 85% acelerou a assimilação das dinâmicas.",
      "A próxima semana deve reforçar passe sob pressão."
    ]
  },
  mensal: {
    title: "Junho/2026",
    summary: [
      ["Treinos realizados", "8"],
      ["Jogos realizados", "2"],
      ["Média de presença", "84%"],
      ["Maior evolução", "Saque"],
      ["Prioridade do mês seguinte", "Bloqueio"]
    ],
    rows: [
      ["Mateus", "92%", "+18%", "8", "7", "Melhor evolução ofensiva"],
      ["Rafael", "100%", "+15%", "7", "9", "Regularidade e defesa forte"],
      ["Bruno", "82%", "+11%", "8", "7", "Organização de jogo"],
      ["Lucas", "74%", "+6%", "7", "6", "Evolução limitada por faltas"]
    ],
    bullets: [
      "Saque e organização defensiva foram os pontos de maior crescimento.",
      "Bloqueio ainda precisa de treino específico e repetição.",
      "A relação entre frequência e evolução técnica ficou evidente no mês."
    ]
  }
};

const titles = {
  dashboard: "Início",
  presenca: "Presença",
  mural: "Informativos",
  coletivo: "Equipe",
  individual: "Individual",
  atletas: "Elenco",
  relatorios: "Relatórios"
};

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function setScreen(screen) {
  state.currentScreen = screen;
  document.querySelectorAll(".screen").forEach((item) => item.classList.toggle("active", item.id === screen));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.screen === screen));
  document.getElementById("pageTitle").textContent = titles[screen];
}

function renderDashboard() {
  document.getElementById("dashboardNotices").innerHTML = notices.slice(0, 2).map((notice) => `
    <article class="notice-item">
      <strong>${notice.title}</strong>
      <p>${notice.date} · ${notice.text}</p>
    </article>
  `).join("");

  const teamSkills = { Saque: 78, Passe: 68, Ataque: 74, Bloqueio: 57, Defesa: 81 };
  document.getElementById("dashboardSkills").innerHTML = Object.entries(teamSkills).map(([name, value]) => skillRow(name, value)).join("");
}

function skillRow(name, value) {
  return `
    <div class="skill-row">
      <strong>${name}</strong>
      <div class="skill-track"><div class="skill-fill" style="width: ${value}%"></div></div>
      <span>${value}</span>
    </div>
  `;
}

function renderEvents() {
  document.getElementById("eventList").innerHTML = events.map((event) => {
    const current = state.presence[event.name] || "Pendente";
    return `
      <article class="event-card">
        <div>
          <h3>${event.name}</h3>
          <div class="event-meta">
            <span>${event.date}</span>
            <span>${event.type}</span>
            <span>${event.place}</span>
            <span class="chip">${current}</span>
          </div>
        </div>
        <p>${event.goal}</p>
        <div class="event-actions" data-event="${event.name}">
          ${["Presente", "Ausente", "Falta justificada"].map((status) => `
            <button class="${current === status ? "selected" : ""}" data-presence="${status}">${status}</button>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderAttendance() {
  const registeredRows = Object.keys(athletes).map((name) => {
    const existing = attendance.find((row) => row[0] === name);
    return existing || [name, 0, 0, 0, "0%"];
  });

  document.getElementById("attendanceTable").innerHTML = registeredRows.map((row) => `
    <tr>
      ${row.map((cell) => `<td>${cell}</td>`).join("")}
    </tr>
  `).join("");
}

function renderNotices() {
  document.getElementById("noticeGrid").innerHTML = notices.map((notice) => {
    const read = state.readNotices.has(notice.title);
    return `
      <article class="notice-card ${read ? "read" : ""}">
        <div>
          <span class="chip">${notice.date}</span>
          <strong>${notice.title}</strong>
          <p>${notice.text}</p>
        </div>
        <div class="notice-actions">
          <button data-read="${notice.title}">${read ? "Ciente marcado" : "Marcar ciente"}</button>
          <span class="small-label">${notice.aware} cientes</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderCollective() {
  document.getElementById("collectiveList").innerHTML = collective.map((item) => `
    <article class="record-card">
      <h3>${item.title}</h3>
      <p>${item.meta}</p>
      <ul class="focus-list">
        <li><strong>Pontos fortes:</strong> ${item.strengths}</li>
        <li><strong>A melhorar:</strong> ${item.improve}</li>
        <li><strong>Táticas:</strong> ${item.tactics}</li>
      </ul>
    </article>
  `).join("");
}

function renderAthleteSelector() {
  const select = document.getElementById("athleteSelect");
  select.innerHTML = Object.keys(athletes).map((name) => `<option value="${name}">${name}</option>`).join("");
  select.value = state.selectedAthlete;
}

function renderIndividual() {
  if (!athletes[state.selectedAthlete]) {
    state.selectedAthlete = Object.keys(athletes)[0] || "";
  }

  if (!state.selectedAthlete) {
    document.getElementById("athleteName").textContent = "Nenhum jogador cadastrado";
    document.getElementById("athleteRole").textContent = "";
    document.getElementById("individualSkills").innerHTML = "";
    document.getElementById("observationBox").innerHTML = "<p>Adicione jogadores na tela Elenco para iniciar o acompanhamento individual.</p>";
    document.getElementById("radarChart").innerHTML = "";
    return;
  }

  const athlete = athletes[state.selectedAthlete];
  document.getElementById("athleteName").textContent = state.selectedAthlete;
  document.getElementById("athleteRole").textContent = athlete.role;
  document.getElementById("individualSkills").innerHTML = Object.entries(athlete.skills)
    .map(([name, value]) => skillRow(name, value * 10))
    .join("");
  document.getElementById("observationBox").innerHTML = athlete.notes.map((note) => `<p>${note}</p>`).join("");
  renderRadar(athlete.skills);
}

function renderAthleteManager() {
  const names = Object.keys(athletes);
  document.getElementById("athleteCount").textContent = `${names.length} jogadores`;
  document.getElementById("athleteList").innerHTML = names.map((name) => `
    <article class="athlete-card">
      <div>
        <strong>${name}</strong>
        <span>${athletes[name].role}</span>
      </div>
      <button class="danger-action" data-remove-athlete="${name}">Remover</button>
    </article>
  `).join("");
}

function refreshAthleteViews() {
  renderAthleteSelector();
  renderIndividual();
  renderAttendance();
  renderAthleteManager();
}

function addAthlete(name, role) {
  const normalizedName = name.trim();
  if (!normalizedName) {
    showToast("Informe o nome do jogador.");
    return;
  }

  if (athletes[normalizedName]) {
    showToast("Este jogador já está cadastrado.");
    return;
  }

  athletes[normalizedName] = {
    role,
    skills: { Saque: 5, Passe: 5, Levantamento: 5, Ataque: 5, Bloqueio: 5, Defesa: 5 },
    notes: [
      "Jogador recém-cadastrado. Inicie as avaliações após os próximos treinos."
    ]
  };
  attendance.push([normalizedName, 0, 0, 0, "0%"]);
  state.selectedAthlete = normalizedName;
  refreshAthleteViews();
  showToast(`${normalizedName} foi adicionado ao time.`);
}

function removeAthlete(name) {
  if (!athletes[name]) return;

  delete athletes[name];
  const attendanceIndex = attendance.findIndex((row) => row[0] === name);
  if (attendanceIndex >= 0) attendance.splice(attendanceIndex, 1);

  if (state.selectedAthlete === name) {
    state.selectedAthlete = Object.keys(athletes)[0] || "";
  }

  refreshAthleteViews();
  showToast(`${name} foi removido do cadastro.`);
}

function renderRadar(skills) {
  const svg = document.getElementById("radarChart");
  const entries = Object.entries(skills);
  const center = 130;
  const maxRadius = 92;
  const points = entries.map(([, value], index) => {
    const angle = (Math.PI * 2 * index) / entries.length - Math.PI / 2;
    const radius = maxRadius * (value / 10);
    return [center + Math.cos(angle) * radius, center + Math.sin(angle) * radius];
  });
  const grid = [0.25, 0.5, 0.75, 1].map((scale) => {
    const polygon = entries.map(([,], index) => {
      const angle = (Math.PI * 2 * index) / entries.length - Math.PI / 2;
      return `${center + Math.cos(angle) * maxRadius * scale},${center + Math.sin(angle) * maxRadius * scale}`;
    }).join(" ");
    return `<polygon points="${polygon}" fill="none" stroke="#dfe6df" stroke-width="1"></polygon>`;
  }).join("");
  const axes = entries.map(([name], index) => {
    const angle = (Math.PI * 2 * index) / entries.length - Math.PI / 2;
    const x = center + Math.cos(angle) * (maxRadius + 25);
    const y = center + Math.sin(angle) * (maxRadius + 25);
    return `
      <line x1="${center}" y1="${center}" x2="${center + Math.cos(angle) * maxRadius}" y2="${center + Math.sin(angle) * maxRadius}" stroke="#dfe6df"></line>
      <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#68736d">${name}</text>
    `;
  }).join("");
  svg.innerHTML = `
    ${grid}
    ${axes}
    <polygon points="${points.map((point) => point.join(",")).join(" ")}" fill="rgba(27, 107, 74, 0.24)" stroke="#1b6b4a" stroke-width="3"></polygon>
    <circle cx="${center}" cy="${center}" r="3" fill="#1b6b4a"></circle>
  `;
}

function renderReport() {
  const report = reportData[state.report];
  const firstHeader = state.report === "mensal" ? "Evolução" : "Presença";
  document.getElementById("reportContent").innerHTML = `
    <div class="report-layout">
      <div class="summary-list">
        <h3>${report.title}</h3>
        ${report.summary.map(([label, value]) => `
          <div class="summary-line">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
      <div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Jogador</th>
                <th>${firstHeader}</th>
                <th>Saque</th>
                <th>Passe</th>
                <th>Defesa</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              ${report.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
        <ul class="focus-list">
          ${report.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function updateRole() {
  document.getElementById("roleLabel").textContent = state.role === "atleta" ? "Visualizando como jogador" : "Visualizando como técnico";
  document.querySelectorAll("[data-role]").forEach((button) => button.classList.toggle("active", button.dataset.role === state.role));
  document.querySelectorAll(".admin-only").forEach((item) => item.classList.toggle("hidden", state.role !== "tecnico"));
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-screen]");
    const link = event.target.closest("[data-screen-link]");
    const role = event.target.closest("[data-role]");
    const presenceButton = event.target.closest(".event-actions [data-presence]");
    const quickPresence = event.target.closest(".quick-actions [data-presence]");
    const readButton = event.target.closest("[data-read]");
    const reportButton = event.target.closest("[data-report]");
    const removeAthleteButton = event.target.closest("[data-remove-athlete]");

    if (nav) setScreen(nav.dataset.screen);
    if (link) setScreen(link.dataset.screenLink);
    if (role) {
      state.role = role.dataset.role;
      updateRole();
    }
    if (presenceButton) {
      const card = presenceButton.closest(".event-actions");
      state.presence[card.dataset.event] = presenceButton.dataset.presence;
      renderEvents();
      showToast(`Status atualizado: ${presenceButton.dataset.presence}`);
    }
    if (quickPresence) {
      state.presence["Treino técnico"] = quickPresence.dataset.presence;
      renderEvents();
      showToast("Presença confirmada para o próximo treino.");
    }
    if (readButton) {
      state.readNotices.add(readButton.dataset.read);
      renderNotices();
      showToast("Informativo marcado como ciente.");
    }
    if (reportButton) {
      state.report = reportButton.dataset.report;
      document.querySelectorAll("[data-report]").forEach((button) => button.classList.toggle("active", button.dataset.report === state.report));
      renderReport();
    }
    if (removeAthleteButton) {
      removeAthlete(removeAthleteButton.dataset.removeAthlete);
    }
  });

  document.getElementById("athleteSelect").addEventListener("change", (event) => {
    state.selectedAthlete = event.target.value;
    renderIndividual();
  });

  document.getElementById("athleteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addAthlete(
      document.getElementById("newAthleteName").value,
      document.getElementById("newAthleteRole").value
    );
    event.target.reset();
  });
}

function init() {
  renderDashboard();
  renderEvents();
  renderAttendance();
  renderNotices();
  renderCollective();
  renderAthleteSelector();
  renderIndividual();
  renderAthleteManager();
  renderReport();
  updateRole();
  bindEvents();
}

init();
