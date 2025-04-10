const skillsData = {
  "Linux": [
    "LPIC-1: Certificación profesional de Linux.",
    "Administración básica de sistemas: usuarios, permisos, procesos.",
    "Configuración de red y servicios SSH, Apache, etc."
  ],
  "Windows": [
    "PowerShell para automatización de tareas.",
    "Active Directory para gestión de usuarios y políticas.",
    "Docker en entorno Windows para contenerización."
  ],
  "HTML5": [
    "Etiquetas semánticas, formularios y estructura.",
    "Multimedia (audio/video), Canvas y APIs modernas.",
    "Accesibilidad y buenas prácticas."
  ],
  "Bash Script": [
    "Automatización de tareas rutinarias.",
    "Condicionales, bucles, variables y funciones.",
    "Manejo de archivos y procesos en scripts."
  ],
  "SQL": [
    "Consultas SELECT, INSERT, UPDATE, DELETE.",
    "Diseño de bases de datos relacionales.",
    "Índices, vistas, joins, subconsultas."
  ],
  "Redes": [
    "Fundamentos del modelo OSI y TCP/IP.",
    "Configuración de routers y switches.",
    "Subredes, direccionamiento y troubleshooting."
  ],
  "Docker": [
    "Creación de imágenes personalizadas.",
    "Docker Compose para orquestación.",
    "Deploy de servicios en contenedores."
  ],
  "GitHub": [
    "Repositorio remoto/local, commits y ramas.",
    "Pull requests, forks, issues.",
    "GitHub Actions y CI/CD."
  ]
};


const skillIcons = {
  "Linux": "fa-brands fa-linux",
  "Windows": "fa-brands fa-windows",
  "HTML5": "fa-brands fa-html5",
  "Bash Script": "fa-solid fa-terminal",
  "SQL": "fa-solid fa-database",
  "Redes": "fa-solid fa-network-wired",
  "Docker": "fa-brands fa-docker",
  "GitHub": "fa-brands fa-github"
};

let currentSkill = "";
let currentPage = 0;

function showModal(skillName) {
  currentSkill = skillName;
  currentPage = 0;
  updateModalContent();
  const modal = document.getElementById("modal");
  modal.classList.add("active");
  modal.style.display = "flex";
}

function updateModalContent() {
  const content = skillsData[currentSkill][currentPage];
  document.getElementById("modal-title").textContent = currentSkill;
  document.getElementById("modal-content").textContent = content;

  document.getElementById("prev-btn").disabled = currentPage === 0;
  document.getElementById("next-btn").disabled = currentPage === skillsData[currentSkill].length - 1;

  document.getElementById("page-indicator").textContent = `Página ${currentPage + 1} de ${skillsData[currentSkill].length}`;
}

function changePage(offset) {
  currentPage += offset;
  updateModalContent();
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  setTimeout(() => {
    if (!modal.classList.contains("active")) {
      modal.style.display = "none";
    }
  }, 400);
}

function searchSkills() {
  const input = document.getElementById('search-bar').value.toLowerCase();
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(function(card) {
    const skillName = card.querySelector('.skill-name').textContent.toLowerCase();
    card.style.display = skillName.includes(input) ? 'block' : 'none';
  });
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  for (const skill in skillsData) {
    const iconClass = skillIcons[skill] || "fa-solid fa-circle-question"; // Asocia el ícono con la habilidad
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-icon"><i class="${iconClass}"></i></div> <!-- Aquí añades el ícono -->
      <h3 class="skill-name">${skill}</h3>
      <button onclick="showModal('${skill}')">Ver detalles</button>
    `;
    container.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", renderSkills);
