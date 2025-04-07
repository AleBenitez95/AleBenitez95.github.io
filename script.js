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
  // Obtén el valor ingresado en la barra de búsqueda y conviértelo a minúsculas
  var input = document.getElementById('search-bar').value.toLowerCase();

  // Obtén todas las tarjetas de habilidad (skill cards)
  var skillCards = document.querySelectorAll('.skill-card');

  // Recorre cada tarjeta de habilidad y verifica si el nombre contiene lo que se busca
  skillCards.forEach(function(card) {
    // Obtiene el nombre de la habilidad que está dentro de la tarjeta
    var skillName = card.querySelector('.skill-name').textContent.toLowerCase();

    // Si el nombre de la habilidad incluye el texto de la barra de búsqueda
    if (skillName.includes(input)) {
      // Muestra la tarjeta
      card.style.display = 'block';
    } else {
      // Si no coincide, oculta la tarjeta
      card.style.display = 'none';
    }
  });
}
