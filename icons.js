// Colección de Iconos Ilustrados (Pictographic Illustrators Style) para Happy Sushi Lampa
// SVGs vectoriales hechos a medida con trazos definidos, colores vivos y estilo moderno/ilustrativo.

const PICTO = {
  // --- UI ICONOS ---
  sun: `<svg class="picto-svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg class="picto-svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  user: `<svg class="picto-svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,

  // --- ICONOS DE CATEGORÍAS PRINCIPALES ---
  all: `<svg class="picto-svg" viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#1a1c23" stroke="#ffb703" stroke-width="3"/>
    <!-- Roll Maki Central -->
    <circle cx="32" cy="34" r="18" fill="#ffffff" stroke="#2d3748" stroke-width="2.5"/>
    <circle cx="32" cy="34" r="14" fill="#2d3748"/>
    <path d="M26 34 A6 6 0 0 1 38 34 A6 6 0 0 1 26 34" fill="#E50914"/>
    <circle cx="35" cy="31" r="3.5" fill="#4ecdc4"/>
    <circle cx="28" cy="37" r="3" fill="#ffb703"/>
    <!-- Palillos (Chopsticks) cruzados en la parte superior -->
    <line x1="14" y1="14" x2="50" y2="26" stroke="#d4a373" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="18" y1="10" x2="48" y2="22" stroke="#fefae0" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="14" x2="14" y2="26" stroke="#d4a373" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  promos: `<svg class="picto-svg" viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <!-- Caja Bento / Promoción -->
    <rect x="8" y="20" width="48" height="34" rx="6" fill="#E50914" stroke="#ffffff" stroke-width="2.5"/>
    <rect x="12" y="24" width="40" height="26" rx="4" fill="#1a1c23"/>
    <!-- Rolls en el interior -->
    <circle cx="22" cy="37" r="7" fill="#ffffff" stroke="#ffb703" stroke-width="2"/>
    <circle cx="22" cy="37" r="3.5" fill="#E50914"/>
    <circle cx="42" cy="37" r="7" fill="#ffffff" stroke="#4ecdc4" stroke-width="2"/>
    <circle cx="42" cy="37" r="3.5" fill="#ffb703"/>
    <!-- Fuego / Promoción Caliente -->
    <path d="M32 6 C32 6 22 14 26 22 C28 26 36 26 38 22 C42 14 32 6 32 6 Z" fill="#ffb703" stroke="#E50914" stroke-width="2"/>
    <path d="M32 10 C32 10 27 16 29 20 C30 22 34 22 35 20 C37 16 32 10 32 10 Z" fill="#ffffff"/>
  </svg>`,

  entradas: `<svg class="picto-svg" viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <!-- Camarón Tempura & Sushi Ball -->
    <circle cx="42" cy="38" r="14" fill="#ffb703" stroke="#d4a373" stroke-width="3" stroke-dasharray="4 2"/>
    <circle cx="42" cy="38" r="8" fill="#ffffff"/>
    <circle cx="42" cy="38" r="4" fill="#E50914"/>
    <!-- Tempura Ebi (Camarón) -->
    <path d="M12 46 C12 30 24 16 38 20 C42 22 38 28 32 28 C22 28 18 36 22 46 Z" fill="#ffb703" stroke="#e76f51" stroke-width="2.5"/>
    <!-- Cola de camarón roja -->
    <path d="M12 46 L6 54 L16 52 Z" fill="#E50914" stroke="#ffffff" stroke-width="1.5"/>
    <!-- Destellos crujientes -->
    <circle cx="48" cy="20" r="2.5" fill="#ffb703"/>
    <circle cx="16" cy="22" r="2" fill="#ffb703"/>
  </svg>`,

  sushiburger: `<svg class="picto-svg" viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <!-- Tapa superior arroz panko -->
    <path d="M10 28 C10 14 54 14 54 28 Z" fill="#ffffff" stroke="#d4a373" stroke-width="3"/>
    <!-- Semillas de sésamo -->
    <circle cx="24" cy="20" r="1.5" fill="#1a1c23"/>
    <circle cx="34" cy="18" r="1.5" fill="#E50914"/>
    <circle cx="44" cy="21" r="1.5" fill="#1a1c23"/>
    <!-- Relleno: Palta verde -->
    <rect x="8" y="30" width="48" height="6" rx="3" fill="#4ecdc4" stroke="#2b9348" stroke-width="1.5"/>
    <!-- Relleno: Salmón / Pollo -->
    <rect x="12" y="38" width="40" height="8" rx="4" fill="#E50914" stroke="#800f2f" stroke-width="1.5"/>
    <!-- Queso Crema fundido -->
    <path d="M14 38 Q22 44 30 38 Q38 44 46 38" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <!-- Tapa inferior arroz -->
    <path d="M12 48 C12 56 52 56 52 48 Z" fill="#ffffff" stroke="#d4a373" stroke-width="3"/>
  </svg>`,

  gohan: `<svg class="picto-svg" viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <!-- Bowl Japonés -->
    <path d="M10 32 L16 52 C18 56 46 56 48 52 L54 32 Z" fill="#1a1c23" stroke="#E50914" stroke-width="3"/>
    <path d="M10 32 Q32 36 54 32" fill="none" stroke="#ffb703" stroke-width="2"/>
    <!-- Arroz en la base y toppings cubos -->
    <circle cx="24" cy="26" r="6" fill="#E50914" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="38" cy="24" r="6" fill="#4ecdc4" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="30" cy="20" r="5" fill="#ffb703" stroke="#ffffff" stroke-width="1.5"/>
    <!-- Palillos -->
    <line x1="44" y1="8" x2="20" y2="26" stroke="#d4a373" stroke-width="3" stroke-linecap="round"/>
    <line x1="52" y1="10" x2="28" y2="28" stroke="#d4a373" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  sinarroz: `<svg class="picto-svg" viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <!-- Roll envuelto en Palta y Salmón (Sin Arroz) -->
    <circle cx="32" cy="32" r="22" fill="#4ecdc4" stroke="#2b9348" stroke-width="3"/>
    <!-- Capa intermedia salmón -->
    <circle cx="32" cy="32" r="16" fill="#E50914" stroke="#ffffff" stroke-width="2"/>
    <!-- Centro relleno queso y camarón -->
    <circle cx="32" cy="32" r="9" fill="#ffffff"/>
    <circle cx="29" cy="30" r="4" fill="#ffb703"/>
    <circle cx="36" cy="35" r="3" fill="#2b9348"/>
    <!-- Brillo en la palta -->
    <path d="M16 20 Q22 14 30 13" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // --- ICONOS DE INTERFAZ Y ACCIONES ---
  cart: `<svg class="picto-svg inline-icon" viewBox="0 0 64 64" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <!-- Bolsa Gourmet Delivery -->
    <rect x="14" y="20" width="36" height="36" rx="6" fill="#E50914" stroke="#ffffff" stroke-width="2.5"/>
    <path d="M22 20 C22 12 42 12 42 20" fill="none" stroke="#ffb703" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Sonrisa / Sushi en la bolsa -->
    <circle cx="26" cy="34" r="2.5" fill="#ffffff"/>
    <circle cx="38" cy="34" r="2.5" fill="#ffffff"/>
    <path d="M26 42 Q32 48 38 42" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  builder: `<svg class="picto-svg inline-icon" viewBox="0 0 64 64" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <!-- Palillos armando roll -->
    <circle cx="32" cy="38" r="16" fill="#ffffff" stroke="#E50914" stroke-width="3"/>
    <circle cx="32" cy="38" r="8" fill="#4ecdc4"/>
    <!-- Herramientas / Palillos mágicos -->
    <line x1="10" y1="12" x2="30" y2="30" stroke="#ffb703" stroke-width="4" stroke-linecap="round"/>
    <line x1="20" y1="8" x2="38" y2="26" stroke="#ffb703" stroke-width="4" stroke-linecap="round"/>
    <!-- Destellos mágicos -->
    <path d="M48 16 L50 22 L56 24 L50 26 L48 32 L46 26 L40 24 L46 22 Z" fill="#ffb703"/>
  </svg>`,

  delivery: `<svg class="picto-svg inline-icon" viewBox="0 0 64 64" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <!-- Moto / Scooter Delivery -->
    <circle cx="18" cy="46" r="8" fill="#1a1c23" stroke="#ffb703" stroke-width="2.5"/>
    <circle cx="48" cy="46" r="8" fill="#1a1c23" stroke="#ffb703" stroke-width="2.5"/>
    <path d="M18 46 L28 46 L34 32 L22 32 Z" fill="#E50914"/>
    <rect x="32" y="22" width="16" height="16" rx="2" fill="#ffffff" stroke="#E50914" stroke-width="2"/>
    <path d="M36 28 L44 28" stroke="#E50914" stroke-width="2"/>
  </svg>`,

  whatsapp: `<svg class="picto-svg inline-icon" viewBox="0 0 64 64" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#25D366"/>
    <path d="M46 38 C45 37 40 35 39 35 C38 35 37 36 36 37 C35 38 34 39 33 39 C32 39 29 38 26 35 C23 32 22 29 22 28 C22 27 23 26 24 25 C25 24 26 23 26 22 C26 21 24 16 23 15 C22 14 21 14 20 14 C18 14 15 16 15 20 C15 24 20 31 25 36 C30 41 37 44 41 44 C44 44 47 41 47 39 C47 38 47 38 46 38 Z" fill="#ffffff"/>
  </svg>`,

  star: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#ffb703" stroke="#d48c00" stroke-width="1"/>
  </svg>`,

  fire: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 C12 2 6 8 8 14 C9 17 13 17 14 14 C16 8 12 2 12 2 Z" fill="#ffb703"/>
    <path d="M12 6 C12 6 8 10 9 14 C10 16 12 16 13 14 C14 10 12 6 12 6 Z" fill="#E50914"/>
  </svg>`,

  location: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 C8.13 2 5 5.13 5 9 C5 14.25 12 22 12 22 C12 22 19 14.25 19 9 C19 5.13 15.87 2 12 2 Z" fill="#E50914" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="12" cy="9" r="3" fill="#ffffff"/>
  </svg>`,

  clock: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#1a1c23" stroke="#ffb703" stroke-width="2"/>
    <polyline points="12 6 12 12 16 14" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  check: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4ecdc4"/>
    <polyline points="7 12 10 15 17 8" fill="none" stroke="#1a1c23" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  heart: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E50914"/>
  </svg>`,

  plus: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#E50914" stroke="#ffffff" stroke-width="1.5"/>
    <line x1="12" y1="7" x2="12" y2="17" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="7" y1="12" x2="17" y2="12" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  chopsticks: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="21" x2="21" y2="3" stroke="#ffb703" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="7" y1="21" x2="21" y2="7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  search: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7" fill="none" stroke="#ffb703" stroke-width="2.5"/>
    <line x1="15" y1="15" x2="21" y2="21" stroke="#ffb703" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  phone: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="2" width="12" height="20" rx="3" fill="#1a1c23" stroke="#ffffff" stroke-width="2"/>
    <circle cx="12" cy="18" r="1.5" fill="#ffb703"/>
    <line x1="9" y1="5" x2="15" y2="5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  info: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#ffb703"/>
    <line x1="12" y1="11" x2="12" y2="17" stroke="#1a1c23" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="12" cy="7.5" r="1.5" fill="#1a1c23"/>
  </svg>`,

  card: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="3" fill="#1a1c23" stroke="#ffb703" stroke-width="2"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="#ffb703" stroke-width="2"/>
    <line x1="6" y1="15" x2="12" y2="15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  cash: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#4ecdc4" stroke="#1a1c23" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="#1a1c23" stroke-width="1.5"/>
    <text x="12" y="14.5" text-anchor="middle" font-size="7" font-weight="bold" fill="#1a1c23">$</text>
  </svg>`,

  house: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12 L12 3 L21 12" fill="none" stroke="#E50914" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 12 L5 20 L19 20 L19 12" fill="#1a1c23" stroke="#ffffff" stroke-width="2"/>
    <rect x="10" y="14" width="4" height="6" fill="#ffb703"/>
  </svg>`,

  tools: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="#ffb703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  bank: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21 L21 21" stroke="#ffb703" stroke-width="2" stroke-linecap="round"/>
    <path d="M3 10 L12 3 L21 10" fill="#1a1c23" stroke="#ffb703" stroke-width="2" stroke-linejoin="round"/>
    <line x1="6" y1="10" x2="6" y2="18" stroke="#ffffff" stroke-width="2"/>
    <line x1="12" y1="10" x2="12" y2="18" stroke="#ffffff" stroke-width="2"/>
    <line x1="18" y1="10" x2="18" y2="18" stroke="#ffffff" stroke-width="2"/>
    <line x1="3" y1="18" x2="21" y2="18" stroke="#ffb703" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  takeout: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 L6 20 L18 20 L20 10" fill="#1a1c23" stroke="#E50914" stroke-width="2" stroke-linejoin="round"/>
    <path d="M4 10 L20 10" stroke="#E50914" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 10 L9 4 L15 4 L16 10" fill="none" stroke="#ffffff" stroke-width="1.5"/>
    <line x1="12" y1="13" x2="12" y2="17" stroke="#ffb703" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  rocket: `<svg class="picto-svg inline-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 C12 2 8 6 8 14 L6 16 L8 18 L10 16 L14 16 L16 18 L18 16 L16 14 C16 6 12 2 12 2 Z" fill="#E50914" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="12" cy="10" r="2" fill="#ffb703"/>
    <path d="M9 20 L12 22 L15 20" fill="#ffb703" stroke="#ffb703" stroke-width="1.5"/>
  </svg>`
};

// Función para inyectar automáticamente pictogramas SVG en elementos con el atributo data-picto
function renderPictograms() {
  document.querySelectorAll('[data-picto]').forEach(el => {
    const iconName = el.getAttribute('data-picto');
    if (PICTO[iconName]) {
      el.innerHTML = PICTO[iconName];
    }
  });
}

// Inicializar cuando el DOM esté listo
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', renderPictograms);
}
