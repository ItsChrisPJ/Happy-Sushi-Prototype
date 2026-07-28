// Base de datos oficial de la carta HAPPY SUSHI LAMPA
const MENU_ITEMS = [
  // === PROMOCIONES (Foto 3: Carta de Promociones) ===
  {
    id: 'promo-20',
    title: '20 Piezas',
    price: 7500,
    category: 'promos',
    desc: 'Env. Queso: pollo, palta, ciboulette. | Frito: camarón, queso, cebollín.',
    badge: 'Popular',
    badgeType: 'hot',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-vegana',
    title: 'Promoción Vegana',
    price: 11000,
    category: 'promos',
    desc: 'Env. Sésamo: pimentón, palta, cebollín. | Env. Palta: champiñón, aceituna, ciboulette. | Env. Nori: palmito, pimentón, palta.',
    badge: '100% Vegano',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-vegetariana',
    title: 'Promoción Vegetariana',
    price: 11000,
    category: 'promos',
    desc: 'Env. Sésamo: palta, cebollín, queso. | Frito: champiñón, aceituna, queso. | Env. Nori: palmito, queso, palta.',
    badge: 'Veggie',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-30',
    title: '30 Piezas',
    price: 10900,
    category: 'promos',
    desc: 'Env. Queso: pollo, palta, ciboulette. | Env. Ciboulette: kanikama, pimentón, queso. | Frito: camarón, cebollín, queso.',
    badge: '',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-40',
    title: '40 Piezas',
    price: 14900,
    category: 'promos',
    desc: 'Env. Palta: kanikama, cebollín, queso. | Env. Queso: pollo, palta, ciboulette. | Frito: camarón, palmito, queso. | Frito: churrasco, palta, queso.',
    badge: '',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-40-fritas',
    title: '40 Piezas 100% Fritas',
    price: 16000,
    category: 'promos',
    desc: 'Frito: pollo, cebollín, queso. | Frito: pollo, palta, queso. | Frito: camarón, pimentón, queso. | Frito: churrasco, champiñón, queso.',
    badge: '100% Fritas',
    badgeType: 'hot',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-50',
    title: '50 Piezas Best Seller',
    price: 18500,
    category: 'promos',
    desc: 'Env. Palta: camarón, cebollín, queso. | Env. Queso: pollo, palta, ciboulette. | Frito: pollo, palta, queso. | Frito: churrasco, champiñón, queso. | Frito: camarón, ciboulette, queso.',
    badge: 'BEST SELLER',
    badgeType: 'best',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-70',
    title: '70 Piezas',
    price: 26000,
    category: 'promos',
    desc: 'Env. Palta: camarón, ciboulette, queso. | Env. Queso: kanikama, cebollín, palta. | Env. Ciboulette: pollo, palta, aceituna. | Frito: churrasco, champiñón, queso. | Frito: pollo, palta, queso. | Frito: pollo, pimentón, queso. | Frito: camarón, queso, cebollín.',
    badge: '',
    img: 'assets/promo50.jpg'
  },
  {
    id: 'promo-80-torta',
    title: '80 Piezas (Torta de Sushi)',
    price: 35000,
    category: 'promos',
    desc: 'Env. Palta: kanikama, queso, cebollín. | Env. Queso: pollo, palta, ciboulette. | Env. Sésamo: kanikama, palmito, queso. | Env. Ciboulette: kanikama, pimentón, queso. | Env. Nori: camarón, palmito, queso. | Frito: churrasco, champiñón, queso. | Frito: churrasco, palta, queso. | Frito: camarón, ciboulette, queso. | Frito: camarón, cebollín, queso. | Frito: pollo, palta, queso.',
    badge: 'Torta de Sushi',
    badgeType: 'best',
    img: 'assets/hero.jpg'
  },
  {
    id: 'promo-100',
    title: '100 Piezas',
    price: 37000,
    category: 'promos',
    desc: 'Env. Palta: camarón, queso, cebollín. | Env. Queso: pollo, palta, ciboulette. | Env. Sésamo: pollo, aceituna, queso. | Env. Ciboulette: kanikama, palta, queso. | Env. Nori: camarón, palmito, queso. | Frito: churrasco, champiñón, queso. | Frito: churrasco, ciboulette, queso. | Frito: camarón, pimentón, queso. | Frito: camarón, cebollín, queso. | Frito: pollo, palta, queso.',
    badge: 'Mega Promo',
    badgeType: 'hot',
    img: 'assets/hero.jpg'
  },

  // === ENTRADAS (Fotos 1 y 2) ===
  {
    id: 'sushi-balls',
    title: 'Sushi Balls (8 Unidades)',
    price: 5000,
    category: 'entradas',
    desc: 'Crujientes bolitas de arroz panko rellenas. Incluye salsa verde y salsa a elección.',
    badge: 'FAVORITO',
    badgeType: 'best',
    img: 'assets/appetizer.jpg'
  },
  {
    id: 'arrollados-primavera',
    title: 'Arrollados Primavera / Jamón Queso (5 Un)',
    price: 3500,
    category: 'entradas',
    desc: 'Recién fritos, crujientes y calentitos. ¡Pídelos ahora!',
    badge: 'Recién Fritos',
    badgeType: 'hot',
    img: 'assets/appetizer.jpg'
  },
  {
    id: 'sin-arroz-20-fritas',
    title: '20 Piezas Sin Arroz',
    price: 12000,
    category: 'sinarroz',
    desc: 'Frito: pollo, queso, palta, cebollín. | Env. Queso: churrasco, palta, queso, cebollín, pimentón. Sin arroz.',
    badge: 'Sin Arroz',
    img: 'assets/promo50.jpg'
  },

  // === CREA TU ROLL IDEAL (Foto 4 arriba) ===
  {
    id: 'roll-ideal',
    title: 'Crea Tu Roll Ideal (10 Pzs)',
    price: 4500,
    category: 'sushiburger',
    desc: 'Elige envoltura (palta, queso, ciboulette, sésamo, nori, frito). 1 proteína (pollo, pollo apanado, pollo teriyaki, camarón, camarón apanado, churrasco, kanikama, kanikama apanado) + 2 agregados. *Salmón +$1.000. Ingrediente extra: vegetal $500, proteína $800.',
    badge: 'Personalizable',
    badgeType: 'best',
    img: 'assets/hero.jpg'
  },

  // === HANDROLL A TU GUSTO (Foto 4 medio) ===
  {
    id: 'handroll-1x',
    title: 'Handroll A Tu Gusto (1x)',
    price: 3500,
    category: 'sushiburger',
    desc: '1 proteína (pollo, camarón, churrasco, kanikama) + 2 agregados (palta, queso, ciboulette, cebollín, pimentón, palmito, champiñón, aceituna). *Salmón +$1.000, apanado/teriyaki $800.',
    badge: '',
    img: 'assets/appetizer.jpg'
  },
  {
    id: 'handroll-3x',
    title: 'Promo 3 Handrolls A Tu Gusto',
    price: 10000,
    category: 'sushiburger',
    desc: '3 Handrolls a tu gusto. Cada uno con 1 proteína + 2 agregados a tu elección. *Ingrediente adicional: vegetal $500, proteína $800.',
    badge: 'BEST SELLER',
    badgeType: 'best',
    img: 'assets/appetizer.jpg'
  },

  // === SUSHIBURGERS (Foto 5 arriba) ===
  {
    id: 'happy-burger',
    title: 'Happy Burger (Churrasco)',
    price: 7000,
    category: 'sushiburger',
    desc: 'Churrasco, palta, queso, cebollín, palmito.',
    badge: 'De la Casa',
    badgeType: 'hot',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'chicken-burger',
    title: 'Chicken Burger (Pollo)',
    price: 7000,
    category: 'sushiburger',
    desc: 'Pollo, palta, queso, cebollín, champiñón.',
    badge: 'Clásica',
    badgeType: 'best',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'marina-burger',
    title: 'Marina Burger (Camarón)',
    price: 7000,
    category: 'sushiburger',
    desc: 'Camarón, palta, queso, cebollín, aceituna.',
    badge: '',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'arma-sushiburger',
    title: 'Arma Tu Sushiburger (A Tu Gusto)',
    price: 8000,
    category: 'sushiburger',
    desc: '1 proteína (pollo, pollo apanado, pollo teriyaki, camarón, camarón apanado, churrasco, kanikama, kanikama apanado) + 4 agregados. *Salmón +$1.000. Extra vegetal $500, proteína $800.',
    badge: 'Personalizable',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'promo-2-burgers-sugeridas',
    title: '2 Sushiburger Sugeridas',
    price: 13500,
    category: 'sushiburger',
    desc: 'Elige 2 entre Happy Burger, Chicken Burger o Marina Burger.',
    badge: 'Promo Dúo',
    badgeType: 'best',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'promo-2-burgers-gusto',
    title: '2 Sushiburger A Tu Gusto',
    price: 15000,
    category: 'sushiburger',
    desc: 'Arma a gusto 2 sushiburgers con tus ingredientes favoritos.',
    badge: '',
    img: 'assets/sushiburger.jpg'
  },

  // === GOHAN (Foto 4 abajo) ===
  {
    id: 'chicken-gohan',
    title: 'Chicken Gohan Best Seller',
    price: 6000,
    category: 'gohan',
    desc: 'Pollo, palta, queso, cebollín. *Ingrediente extra: vegetal $500, proteína $800, salmón $1.000.',
    badge: 'BEST SELLER',
    badgeType: 'best',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'happy-gohan',
    title: 'Happy Gohan',
    price: 6000,
    category: 'gohan',
    desc: 'Churrasco, palta, queso, cebollín. *Ingrediente extra: vegetal $500, proteína $800, salmón $1.000.',
    badge: '',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'marino-gohan',
    title: 'Marino Gohan',
    price: 6000,
    category: 'gohan',
    desc: 'Camarón, aceituna, queso, palta. *Ingrediente extra: vegetal $500, proteína $800, salmón $1.000.',
    badge: '',
    img: 'assets/sushiburger.jpg'
  },
  {
    id: 'gohan-a-gusto',
    title: 'Gohan A Tu Gusto',
    price: 6500,
    category: 'gohan',
    desc: 'Elige 2 proteínas (pollo, pollo apanado, pollo teriyaki, camarón, camarón apanado, churrasco, kanikama, kanikama apanado, *salmón $1.000) + 3 agregados (queso, palta, cebollín, ciboulette, champiñón, pimentón, palmito, aceituna). *Extra: vegetal $500, proteína $800.',
    badge: 'Personalizable',
    img: 'assets/sushiburger.jpg'
  },

  // === ROLLS SIN ARROZ (Foto 5 abajo) ===
  {
    id: 'sake-roll',
    title: 'Sake Roll',
    price: 8000,
    category: 'sinarroz',
    desc: 'Env. Salmón: camarón apanado, palta, queso, pimentón.',
    badge: 'Premium',
    badgeType: 'best',
    img: 'assets/hero.jpg'
  },
  {
    id: 'cheese-roll',
    title: 'Cheese Roll',
    price: 7000,
    category: 'sinarroz',
    desc: 'Env. Queso: churrasco, palta, queso, cebollín, pimentón.',
    badge: '',
    img: 'assets/hero.jpg'
  },
  {
    id: 'avocado-roll',
    title: 'Avocado Roll',
    price: 7000,
    category: 'sinarroz',
    desc: 'Env. Palta: salmón, camarón, palta, queso, cebollín.',
    badge: '',
    img: 'assets/hero.jpg'
  },
  {
    id: 'crunch-roll',
    title: 'Crunch Roll',
    price: 7000,
    category: 'sinarroz',
    desc: 'Frito: pollo, queso, palta, cebollín.',
    badge: 'Frito Crunch',
    badgeType: 'hot',
    img: 'assets/promo50.jpg'
  }
];

// Estado global de la aplicación
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// Variables del Creador de Rolls (Wizard)
let builderState = {
  type: 'roll',
  typeName: 'Roll Ideal (8 Pzs)',
  basePrice: 4500,
  wrap: 'Panko Frito Crujiente',
  protein: 'Pollo Teriyaki',
  extras: ['Queso Crema', 'Palta'],
  sauce: 'Salsa Acevichada Casera',
  extraCost: 0
};

// Inicialización de la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupEventListeners();
  setupBuilderListeners();
});

// Configuración de escuchadores de eventos
function setupEventListeners() {
  // === Menú hamburguesa (móvil) ===
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.querySelector('.nav-links');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : 'auto';
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = 'auto';
      });
    });
  }

  // Pestañas de categoría
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.filter-tab');
      if (!clickedTab) return;
      tabs.forEach(t => t.classList.remove('active'));
      clickedTab.classList.add('active');
      currentCategory = clickedTab.getAttribute('data-category');
      renderMenu();
    });
  });

  // Input de búsqueda en tiempo real
  const searchInput = document.getElementById('menu-search');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderMenu();
  });

  // Controles de apertura/cierre de carrito
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  openCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Cambios en zona de despacho
  const deliveryZoneSelect = document.getElementById('delivery-zone');
  deliveryZoneSelect.addEventListener('change', updateCartUI);

  // Cambios en medio de pago (para mostrar/ocultar datos de transferencia)
  const paymentMethodSelect = document.getElementById('payment-method');
  if (paymentMethodSelect) {
    paymentMethodSelect.addEventListener('change', updateCartUI);
  }

  // Botón de WhatsApp
  const btnWhatsApp = document.getElementById('btn-send-whatsapp');
  btnWhatsApp.addEventListener('click', sendOrderToWhatsApp);

  // Botones para abrir Modal Wizard "Crea Tu Roll"
  const openBuilderBtn = document.getElementById('open-builder-btn');
  const openBuilderHeroBtn = document.getElementById('open-builder-hero-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOverlay = document.getElementById('modal-overlay');

  const openModal = () => {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  if (openBuilderBtn) openBuilderBtn.addEventListener('click', openModal);
  if (openBuilderHeroBtn) openBuilderHeroBtn.addEventListener('click', openModal);

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Indicador de horario en vivo
  updateLiveStoreStatus();
  setInterval(updateLiveStoreStatus, 60000); // Revisar cada 1 minuto
}

// Renderizado del Menú según categoría y búsqueda
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  const filtered = MENU_ITEMS.filter(item => {
    const matchCat = (currentCategory === 'all' || item.category === currentCategory);
    const matchSearch = (
      item.title.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery)
    );
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <div style="font-size: 48px; margin-bottom: 16px;"><span data-picto="search"></span><span data-picto="chopsticks"></span></div>
        <h3 class="font-heading" style="font-size: 24px; color: white;">No encontramos rollos o promos con esa búsqueda</h3>
        <p>Intenta buscar por "pollo", "camarón", "queso crema", "frito" o selecciona otra categoría.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const badgeHTML = item.badge ? `<div class="card-badge ${item.badgeType || ''}">${item.badge}</div>` : '';
    const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price);

    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      ${badgeHTML}
      <div class="card-img-wrapper">
        <img src="${item.img}" alt="${item.title}" class="card-img" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">${formattedPrice}</span>
          <button class="btn-add" data-id="${item.id}">
            <span data-picto="plus"></span> <span>Agregar</span>
          </button>
        </div>
      </div>
    `;

    // Botón agregar al carrito
    card.querySelector('.btn-add').addEventListener('click', () => {
      addToCart(item);
      showToast(`¡Agregado al pedido: ${item.title}!`);
    });

    grid.appendChild(card);
  });

  if (typeof renderPictograms === 'function') {
    renderPictograms();
  }
}

// Función para mostrar una notificación flotante (Toast)
function showToast(message) {
  const existing = document.querySelector('.toast-popup');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-popup';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(50px);
    background: var(--brand-red);
    color: white;
    padding: 14px 28px;
    border-radius: var(--radius-full);
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 14px;
    box-shadow: 0 10px 30px rgba(229, 9, 20, 0.6);
    z-index: 9999;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: 2px solid white;
    pointer-events: none;
  `;
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 50);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(50px)';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// Funciones del Carrito de Compras
function addToCart(item, customTitle = null) {
  const itemId = customTitle ? `custom-${Date.now()}` : item.id;
  const itemTitle = customTitle || item.title;
  const itemPrice = item.price;

  const existing = cart.find(i => i.id === itemId || (i.title === itemTitle && !customTitle));

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: itemId,
      title: itemTitle,
      price: itemPrice,
      qty: 1
    });
  }

  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

// Actualizar vista del carrito y cálculos de precio
function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total');
  const zoneSelect = document.getElementById('delivery-zone');

  // Total de items para el badge
  const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
  countBadge.textContent = totalQty;

  // Subtotal de productos
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  // Cálculo de envío según sector de Lampa
  const selectedOption = zoneSelect.options[zoneSelect.selectedIndex];
  const zoneName = selectedOption.getAttribute('data-name');
  let deliveryCost = parseInt(selectedOption.value, 10);
  const minFree = parseInt(selectedOption.getAttribute('data-minfree') || '0', 10);

  if (minFree > 0 && subtotal >= minFree && subtotal > 0) {
    deliveryCost = 0; // Envío Gratis en Lampa Centro por compras > $20.000
  }

  // Mostrar u ocultar campo de dirección si es retiro en local
  const addressGroup = document.getElementById('address-group');
  if (addressGroup) {
    if (zoneName === 'Retiro en Local') {
      addressGroup.style.display = 'none';
    } else {
      addressGroup.style.display = 'block';
    }
  }

  // Mostrar u ocultar caja de datos de transferencia según medio de pago
  const paymentSelect = document.getElementById('payment-method');
  const transferBox = document.getElementById('transfer-info-box');
  if (paymentSelect && transferBox) {
    if (paymentSelect.value === 'Transferencia Bancaria') {
      transferBox.style.display = 'block';
    } else {
      transferBox.style.display = 'none';
    }
  }

  const total = subtotal + (subtotal > 0 ? deliveryCost : 0);

  // Formateador monetario CLP
  const fmt = (val) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

  subtotalEl.textContent = fmt(subtotal);
  deliveryEl.textContent = subtotal > 0 ? (deliveryCost === 0 ? '$0 (¡GRATIS!)' : fmt(deliveryCost)) : '$0';
  totalEl.textContent = fmt(total);

  // Renderizar lista de ítems en el drawer
  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon"><span data-picto="chopsticks"></span></div>
        <p>Tu pedido está vacío aún.</p>
        <p style="font-size: 13px;">¡Agrega unas promos crujientes o sushiburgers para comenzar!</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = '';
  cart.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <div class="item-info">
        <h5>${item.title}</h5>
        <span class="item-price">${fmt(item.price)} c/u</span>
      </div>
      <div class="item-controls">
        <button class="qty-btn" data-action="minus" data-id="${item.id}">-</button>
        <span class="item-qty">${item.qty}</span>
        <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
        <button class="btn-remove" data-action="remove" data-id="${item.id}" title="Eliminar">&times;</button>
      </div>
    `;

    itemEl.querySelector('[data-action="minus"]').addEventListener('click', () => changeQty(item.id, -1));
    itemEl.querySelector('[data-action="plus"]').addEventListener('click', () => changeQty(item.id, 1));
    itemEl.querySelector('[data-action="remove"]').addEventListener('click', () => removeFromCart(item.id));

    itemsContainer.appendChild(itemEl);
  });

  if (typeof renderPictograms === 'function') {
    renderPictograms();
  }
}

// Configuración del Creador Interactivo de Rolls (Modal Wizard)
function setupBuilderListeners() {
  const typeGrid = document.getElementById('builder-type-grid');
  const wrapGrid = document.getElementById('builder-wrap-grid');
  const proteinGrid = document.getElementById('builder-protein-grid');
  const extrasGrid = document.getElementById('builder-extras-grid');
  const sauceGrid = document.getElementById('builder-sauce-grid');
  const btnAddCustom = document.getElementById('btn-add-custom-roll');
  const stepEnvoltura = document.getElementById('step-envoltura');

  // 1. Cambiar Tipo de Producto (Roll, Sushiburger, Gohan, Handroll)
  typeGrid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      typeGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      builderState.type = btn.getAttribute('data-type');
      builderState.typeName = btn.getAttribute('data-name');
      builderState.basePrice = parseInt(btn.getAttribute('data-price'), 10);

      // Si es Sushiburger, Gohan o Handroll, el paso de envoltura se oculta o se adapta
      if (builderState.type === 'roll') {
        stepEnvoltura.style.display = 'block';
      } else {
        stepEnvoltura.style.display = 'none';
        builderState.wrap = builderState.typeName;
      }

      calculateBuilderPrice();
    });
  });

  // 2. Elegir Envoltura (solo para rolls)
  wrapGrid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrapGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      builderState.wrap = btn.getAttribute('data-wrap');
      calculateBuilderPrice();
    });
  });

  // 3. Elegir Proteína
  proteinGrid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      proteinGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      builderState.protein = btn.getAttribute('data-protein');
      calculateBuilderPrice();
    });
  });

  // 4. Elegir Agregados (múltiple selección hasta 3 o 4 según producto)
  extrasGrid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.getAttribute('data-extra-item');
      if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        builderState.extras = builderState.extras.filter(i => i !== item);
      } else {
        const maxLimit = builderState.type === 'sushiburger' ? 4 : (builderState.type === 'gohan' ? 3 : 2);
        if (builderState.extras.length >= maxLimit) {
          showToast(`¡Para ${builderState.typeName} puedes elegir máximo ${maxLimit} agregados!`);
          return;
        }
        btn.classList.add('selected');
        builderState.extras.push(item);
      }
      calculateBuilderPrice();
    });
  });

  // 5. Elegir Salsa
  sauceGrid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sauceGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      builderState.sauce = btn.getAttribute('data-sauce');
    });
  });

  // Botón final: Agregar pedido personalizado al carrito
  btnAddCustom.addEventListener('click', () => {
    if (builderState.extras.length === 0) {
      showToast('Por favor elige al menos 1 agregado (ej. queso crema, palta).');
      return;
    }

    const titleFormatted = `[PERSONALIZADO] ${builderState.typeName}: ${builderState.type === 'roll' ? `Env: ${builderState.wrap} | ` : ''}Prot: ${builderState.protein} | Extras: ${builderState.extras.join(', ')} | Salsa: ${builderState.sauce}`;
    
    addToCart({ price: calculateBuilderPrice() }, titleFormatted);
    showToast('¡Tu pedido personalizado fue creado y agregado!');
    
    // Cerrar modal
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = 'auto';
  });
}

function calculateBuilderPrice() {
  let total = builderState.basePrice;
  
  // Revisar costos extras de salmón en envoltura o proteína
  const selectedWrap = document.querySelector('#builder-wrap-grid .option-btn.selected');
  const selectedProtein = document.querySelector('#builder-protein-grid .option-btn.selected');

  if (builderState.type === 'roll' && selectedWrap && selectedWrap.getAttribute('data-extra')) {
    total += parseInt(selectedWrap.getAttribute('data-extra'), 10);
  }
  if (selectedProtein && selectedProtein.getAttribute('data-extra')) {
    total += parseInt(selectedProtein.getAttribute('data-extra'), 10);
  }

  const priceEl = document.getElementById('modal-total-price');
  priceEl.textContent = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total);
  return total;
}

// Generador de mensaje para WhatsApp y apertura de enlace API
function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    showToast('¡Tu pedido está vacío! Agrega al menos un roll o promo para pedir.');
    return;
  }

  const zoneSelect = document.getElementById('delivery-zone');
  const selectedOption = zoneSelect.options[zoneSelect.selectedIndex];
  const zoneName = selectedOption.getAttribute('data-name');
  const paymentMethod = document.getElementById('payment-method').value;
  const addressInput = document.getElementById('customer-address').value.trim();
  const customerNameInput = document.getElementById('customer-name') ? document.getElementById('customer-name').value.trim() : '';

  // Validar nombre
  if (!customerNameInput) {
    showToast('Por favor ingresa tu nombre ("A nombre de") para el pedido.');
    if (document.getElementById('customer-name')) document.getElementById('customer-name').focus();
    return;
  }

  // Si no es retiro en local, sugerir poner dirección
  if (zoneName !== 'Retiro en Local' && !addressInput) {
    showToast('Por favor ingresa tu dirección exacta para el despacho en Lampa.');
    document.getElementById('customer-address').focus();
    return;
  }

  // Cálculos de subtotal y envío
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  let deliveryCost = parseInt(selectedOption.value, 10);
  const minFree = parseInt(selectedOption.getAttribute('data-minfree') || '0', 10);

  if (minFree > 0 && subtotal >= minFree) {
    deliveryCost = 0;
  }
  const total = subtotal + deliveryCost;
  const fmt = (val) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

  // Construcción del mensaje preformateado con formato limpio para WhatsApp
  let msg = `*¡HOLA HAPPY SUSHI LAMPA!*\n`;
  msg += `Quiero realizar el siguiente pedido en línea:\n\n`;
  msg += `*--- DETALLE DEL PEDIDO ---*\n`;

  cart.forEach((item, index) => {
    msg += `${index + 1}. *${item.qty}x* ${item.title} -> _${fmt(item.price * item.qty)}_\n`;
  });

  msg += `\n*--- RESUMEN DE PAGO ---*\n`;
  msg += `- *Subtotal:* ${fmt(subtotal)}\n`;
  msg += `- *Sector / Despacho:* ${zoneName} (${deliveryCost === 0 ? '¡GRATIS!' : fmt(deliveryCost)})\n`;
  msg += `- *TOTAL A PAGAR:* *${fmt(total)}*\n\n`;

  msg += `*--- DATOS DE CLIENTE Y ENTREGA ---*\n`;
  msg += `*A nombre de:* ${customerNameInput}\n`;
  if (zoneName === 'Retiro en Local') {
    msg += `*Modalidad:* Retiro presencial por el local (Arturo Prat 1377, Lampa)\n`;
  } else {
    msg += `*Dirección de Entrega:* ${addressInput}\n`;
  }
  msg += `*Medio de Pago:* ${paymentMethod}\n\n`;
  msg += `¡Muchas gracias! Quedo atento a la confirmación de mi pedido.`;

  // Codificar para URL
  const encodedMsg = encodeURIComponent(msg);
  const whatsappPhone = '56971223025'; // Número oficial +56 9 7122 3025 de Google Maps
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodedMsg}`;

  // Abrir WhatsApp
  showToast('¡Abriendo WhatsApp con tu pedido listo para enviar!');
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 600);
}

// Cálculo de estado en vivo según hora chilena (Horarios oficiales)
function updateLiveStoreStatus() {
  const container = document.getElementById('live-status-container');
  if (!container) return;

  try {
    const now = new Date();
    const chileTimeStr = now.toLocaleString("en-US", { timeZone: "America/Santiago" });
    const chileDate = new Date(chileTimeStr);
    const day = chileDate.getDay(); // 0: Dom, 1: Lun, 2: Mar... 6: Sáb
    const hours = chileDate.getHours();
    const minutes = chileDate.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    let openMin = 0;
    let closeMin = 0;
    let isOpenDay = true;
    let nextOpenText = "";

    if (day >= 1 && day <= 4) { // Lun a Jue: 12:00 - 22:10
      openMin = 12 * 60; // 720
      closeMin = 22 * 60 + 10; // 1330
      nextOpenText = totalMinutes < openMin ? "hoy a las 12:00" : "mañana a las 12:00";
    } else if (day === 5 || day === 6) { // Vie y Sáb: 12:00 - 22:40
      openMin = 12 * 60; // 720
      closeMin = 22 * 60 + 40; // 1360
      nextOpenText = totalMinutes < openMin ? "hoy a las 12:00" : (day === 5 ? "mañana a las 12:00" : "mañana Domingo a las 17:00");
    } else if (day === 0) { // Domingo: 17:00 - 21:30
      openMin = 17 * 60; // 1020
      closeMin = 21 * 60 + 30; // 1290
      nextOpenText = totalMinutes < openMin ? "hoy a las 17:00" : "mañana Lunes a las 12:00";
    }

    const isOpenNow = isOpenDay && (totalMinutes >= openMin && totalMinutes < closeMin);

    if (isOpenNow) {
      container.innerHTML = `
        <div class="store-status-badge">
          <span class="status-dot"></span>
          <span>ABIERTO AHORA • Recibiendo pedidos en Lampa</span>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="store-status-badge closed">
          <span class="status-dot"></span>
          <span>LOCAL CERRADO • Abrimos ${nextOpenText} (Puedes dejar tu pedido)</span>
        </div>
      `;
    }
    if (typeof renderPictograms === 'function') renderPictograms();
  } catch (err) {
    console.error("Error calculando hora chilena:", err);
  }
}
