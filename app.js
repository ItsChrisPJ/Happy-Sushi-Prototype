// Base de datos oficial de la carta HAPPY SUSHI LAMPA
const MENU_ITEMS = [
  // === PROMOCIONES ===
  { id: 'promo-20', title: '20 Piezas', price: 8000, category: 'promos', desc: 'Rolls clásicos variados envueltos en sésamo, ciboulette o queso.', badge: 'Popular', badgeType: 'hot', img: 'assets/hero.jpg' },
  { id: 'promo-20-frita', title: '20 Piezas Fritas', price: 8500, category: 'promos', desc: 'Crujientes piezas fritas en panko.', badge: '100% Fritas', img: 'assets/hero.jpg' },
  { id: 'promo-30', title: '30 Piezas', price: 12000, category: 'promos', desc: 'Mix de piezas frías y calientes ideal para compartir.', badge: '', img: 'assets/hero.jpg' },
  { id: 'promo-40', title: '40 Piezas', price: 16000, category: 'promos', desc: 'Surtido completo de rolls tradicionales y fritos.', badge: '', img: 'assets/hero.jpg' },
  { id: 'promo-40-fritas', title: '40 Fritas', price: 16500, category: 'promos', desc: '40 piezas totalmente fritas y crujientes.', badge: '100% Fritas', badgeType: 'hot', img: 'assets/hero.jpg' },
  { id: 'promo-50', title: '50 Piezas', price: 20000, category: 'promos', desc: 'La favorita para grupos. Gran variedad de sabores.', badge: 'BEST SELLER', badgeType: 'best', img: 'assets/hero.jpg' },
  { id: 'promo-70', title: '70 Piezas', price: 28000, category: 'promos', desc: 'Para cuando hay mucha hambre y muchos amigos.', badge: '', img: 'assets/hero.jpg' },
  { id: 'promo-70-frita', title: '70 Piezas Frita', price: 29000, category: 'promos', desc: '¡70 piezas 100% fritas en panko crujiente!', badge: 'Full Crunch', img: 'assets/hero.jpg' },
  { id: 'promo-80-torta', title: '80 Piezas - Torta de Sushi', price: 40000, category: 'promos', desc: '¿Torta o sushi? Mejor ambos. Una espectacular torta armada con 80 deliciosas piezas.', badge: 'Torta de Sushi', badgeType: 'best', img: 'assets/torta.png' },
  { id: 'promo-100', title: '100 Piezas', price: 40000, category: 'promos', desc: 'El mega combo definitivo para los verdaderos amantes del sushi.', badge: 'Mega Promo', badgeType: 'hot', img: 'assets/hero.jpg' },
  { id: 'promo-veganas', title: 'Combos Veganas', price: 12000, category: 'promos', desc: 'Opción 100% vegana con ingredientes frescos y vegetales.', badge: '100% Vegano', img: 'assets/hero.jpg' },
  { id: 'promo-vegetarianas', title: 'Combos Vegetarianas', price: 12000, category: 'promos', desc: 'Rolls vegetarianos con queso crema y vegetales seleccionados.', badge: 'Veggie', img: 'assets/hero.jpg' },

  // === ENTRADAS / MÁS OPCIONES ===
  { id: 'sushiballs', title: 'Sushi Balls (8U)', price: 5500, category: 'entradas', desc: 'Crujientes bolitas de arroz panko rellenas. Incluye salsa verde y salsa a elección.', badge: 'FAVORITO', badgeType: 'best', img: 'assets/sushi_balls.png' },
  { id: 'arrollados', title: 'Arrollados (5U)', price: 4000, category: 'entradas', desc: 'Arrollados primavera recién fritos y calentitos.', badge: 'Recién Fritos', img: 'assets/appetizer.jpg' },
  { id: 'camaron-apanado', title: 'Camarón Apanado (8U)', price: 5000, category: 'entradas', desc: 'Camarones envueltos en panko frito.', badge: '', img: 'assets/appetizer.jpg' },
  { id: 'pollo-apanado', title: 'Pollo Apanado (6U)', price: 4500, category: 'entradas', desc: 'Trocitos de pollo crujientes en panko.', badge: '', img: 'assets/appetizer.jpg' },

  // === SUSHIBURGERS & HANDROLLS ===
  { id: 'arma-tu-roll', title: 'Arma Tú Roll', price: 4800, category: 'sushiburger', desc: 'Crea tu roll perfecto. Elige envoltura, proteína y agregados desde el creador interactivo.', badge: 'Personalizable', badgeType: 'best', img: 'assets/hero.jpg' },
  { id: 'handroll-1', title: '1 Handroll', price: 4000, category: 'sushiburger', desc: 'Handroll tradicional armado a tu gusto.', badge: '', img: 'assets/handroll.jpg' },
  { id: 'handroll-3', title: '3 Handrolls', price: 11500, category: 'sushiburger', desc: 'Armados a tu gusto. Elige 1 proteína + 2 agregados por handroll.', badge: 'Promo', badgeType: 'hot', img: 'assets/promo_handroll.jpg' },
  { id: 'chicken-burger', title: 'Chicken Burger', price: 8000, category: 'sushiburger', desc: 'Pollo apanado, palta, queso crema, cebollín y salsas.', badge: 'Clásica', img: 'assets/sushiburger.png' },
  { id: 'happy-burger', title: 'Happy Burger', price: 8000, category: 'sushiburger', desc: 'La favorita de la casa, súper contundente.', badge: 'De la Casa', badgeType: 'best', img: 'assets/sushiburger.png' },
  { id: 'marina-burger', title: 'Marina Burger', price: 8000, category: 'sushiburger', desc: 'Camarón apanado, palta, queso y más.', badge: '', img: 'assets/sushiburger.png' },
  { id: 'arma-burger', title: 'Arma tú Burger', price: 8500, category: 'sushiburger', desc: 'Combina tus ingredientes favoritos en una deliciosa base de arroz frito.', badge: 'A tu Gusto', img: 'assets/sushiburger.png' },

  // === GOHAN ===
  { id: 'chicken-gohan', title: 'Chicken Gohan', price: 6500, category: 'gohan', desc: 'Pollo apanado sobre base de arroz, acompañado de palta, queso y salsas.', badge: '', img: 'assets/gohan.png' },
  { id: 'happy-gohan', title: 'Happy Gohan', price: 6500, category: 'gohan', desc: 'Nuestro Gohan estrella con los mejores ingredientes.', badge: 'De la Casa', badgeType: 'best', img: 'assets/gohan.png' },
  { id: 'marino-gohan', title: 'Marino Gohan', price: 6500, category: 'gohan', desc: 'Con deliciosos camarones frescos o apanados.', badge: '', img: 'assets/gohan.png' },
  { id: 'arma-gohan', title: 'Arma tú Gohan', price: 7000, category: 'gohan', desc: 'Elige tus proteínas y agregados sobre una generosa base de arroz.', badge: 'Personalizable', img: 'assets/gohan.png' },

  // === ROLLS SIN ARROZ & ROLLS DE LA CASA ===
  { id: 'acevi-roll', title: 'Acevi Roll', price: 6000, category: 'sinarroz', desc: 'Roll de la Casa cubierto con nuestra exquisita salsa acevichada.', badge: 'De la Casa', img: 'assets/hero.jpg' },
  { id: 'spicy-roll', title: 'Spicy Roll', price: 6300, category: 'sinarroz', desc: 'Roll de la Casa con un toque picante.', badge: 'Picante', img: 'assets/hero.jpg' },
  { id: 'mexa-roll', title: 'Mexa Roll', price: 6000, category: 'sinarroz', desc: 'Sabores inspirados en México, estilo Happy Sushi.', badge: '', img: 'assets/hero.jpg' },
  { id: 'dinamita-roll', title: 'Dinamita Roll', price: 6800, category: 'sinarroz', desc: 'Una explosión de sabor en tu boca.', badge: 'Explosivo', badgeType: 'hot', img: 'assets/hero.jpg' },
  { id: 'champi-roll', title: 'Champi Roll', price: 6000, category: 'sinarroz', desc: 'Delicioso roll con champiñones.', badge: '', img: 'assets/hero.jpg' },
  { id: 'crunch-roll', title: 'Crunch Roll (Sin Arroz)', price: 7000, category: 'sinarroz', desc: 'Roll sin arroz, crujiente y frito.', badge: 'Sin Arroz', img: 'assets/hero.jpg' },
  { id: 'cheese-roll', title: 'Cheese Roll (Sin Arroz)', price: 7000, category: 'sinarroz', desc: 'Roll sin arroz envuelto en extra queso crema.', badge: 'Sin Arroz', img: 'assets/hero.jpg' },
  { id: 'avocado-roll', title: 'Avocado Roll (Sin Arroz)', price: 7000, category: 'sinarroz', desc: 'Roll sin arroz cubierto con palta fresca.', badge: 'Sin Arroz', img: 'assets/hero.jpg' },
  { id: 'promo-sin-arroz', title: 'Promo Sin Arroz', price: 12000, category: 'sinarroz', desc: 'Promoción especial de rolls 100% sin arroz.', badge: 'Promo', badgeType: 'best', img: 'assets/hero.jpg' }
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
  setInterval(updateLiveStoreStatus, 60000);

  // --- ANIMACIONES ON SCROLL (AOS) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  // Seleccionamos todos los bloques principales para animarlos
  const elementsToAnimate = document.querySelectorAll(`
    .hero-content > *,
    .hero-visual > *,
    .section-header > *,
    .builder-info > *,
    .builder-action,
    .coverage-map-card,
    .coverage-info > div,
    .footer-col
  `);

  elementsToAnimate.forEach((el, index) => {
    el.classList.add('aos-init');
    // Pequeño retraso para elementos hermanos
    if (index % 3 === 1) el.classList.add('aos-delay-100');
    if (index % 3 === 2) el.classList.add('aos-delay-200');
    scrollObserver.observe(el);
  });
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
        <h3 class="font-heading" style="font-size: 24px; color: var(--text-main);">No encontramos rollos o promos con esa búsqueda</h3>
        <p>Intenta buscar por "pollo", "camarón", "queso crema", "frito" o selecciona otra categoría.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((item, index) => {
    const badgeHTML = item.badge ? `<div class="card-badge ${item.badgeType || ''}">${item.badge}</div>` : '';
    const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price);

    const card = document.createElement('div');
    card.className = 'bento-box glass-panel card-animate';
    card.style.animationDelay = `${(index % 10) * 0.1}s`;
    card.style.padding = '0'; // Override bento-box padding for image
    card.innerHTML = `
      ${badgeHTML}
      <div class="card-img-wrapper">
        <img src="${item.img}" alt="${item.title}" class="card-img" loading="lazy">
      </div>
      <div class="card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">${formattedPrice}</span>
          <button class="glass-btn glass-btn-primary btn-add" data-id="${item.id}" aria-label="Agregar al carrito" style="width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none;">
            <span data-picto="plus"></span>
          </button>
        </div>
      </div>
    `;

    // Boutique 3D Tilt Effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });

    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      openProductModal(item);
    });

    // Botón agregar al carrito
    card.querySelector('.btn-add').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(item);
      showToast(`¡Agregado al pedido: ${item.title}!`);
    });

    grid.appendChild(card);
  });

  if (typeof renderPictograms === 'function') {
    renderPictograms();
  }
}

// Lógica del Modal de Detalles del Producto
let currentProductItem = null;

function openProductModal(item) {
  currentProductItem = item;
  
  const modalOverlay = document.getElementById('product-modal-overlay');
  const imgEl = document.querySelector('.product-modal-img');
  const titleEl = document.getElementById('product-modal-title');
  const descEl = document.getElementById('product-modal-desc');
  const badgeEl = document.getElementById('product-modal-badge');
  const priceEl = document.getElementById('product-modal-price');
  
  imgEl.style.backgroundImage = `url(${item.img})`;
  titleEl.textContent = item.title;
  descEl.textContent = item.desc;
  
  if (item.badge) {
    badgeEl.style.display = 'inline-block';
    badgeEl.className = `card-badge ${item.badgeType || ''}`;
    badgeEl.textContent = item.badge;
    badgeEl.style.position = 'relative';
    badgeEl.style.top = '0';
    badgeEl.style.left = '0';
    badgeEl.style.transform = 'none';
  } else {
    badgeEl.style.display = 'none';
  }
  
  priceEl.textContent = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price);
  
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.addEventListener('DOMContentLoaded', () => {
  const prodModalOverlay = document.getElementById('product-modal-overlay');
  const closeProdBtn = document.getElementById('close-product-modal-btn');
  const addProdBtn = document.getElementById('product-modal-add-btn');
  
  if (closeProdBtn) {
    closeProdBtn.addEventListener('click', () => {
      prodModalOverlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  }
  
  if (prodModalOverlay) {
    prodModalOverlay.addEventListener('click', (e) => {
      if (e.target === prodModalOverlay) {
        prodModalOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  if (addProdBtn) {
    addProdBtn.addEventListener('click', () => {
      if (currentProductItem) {
        addToCart(currentProductItem);
        showToast(`¡Agregado al pedido: ${currentProductItem.title}!`);
        prodModalOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
      }
    });
  }
});

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

  // Wizard Navigation State
  let currentStep = 1;
  const maxSteps = 5;
  const wizardSteps = document.querySelectorAll('.wizard-step');
  const btnPrev = document.getElementById('btn-wizard-prev');
  const btnNext = document.getElementById('btn-wizard-next');
  const progressFill = document.getElementById('wizard-progress-fill');

  function updateWizardUI() {
    wizardSteps.forEach(step => {
      if (parseInt(step.getAttribute('data-step')) === currentStep) {
        step.classList.add('active-step');
      } else {
        step.classList.remove('active-step');
      }
    });

    progressFill.style.width = `${(currentStep / maxSteps) * 100}%`;

    btnPrev.style.display = currentStep > 1 ? 'block' : 'none';
    
    if (currentStep === maxSteps) {
      btnNext.style.display = 'none';
      btnAddCustom.style.display = 'flex';
    } else {
      btnNext.style.display = 'block';
      btnAddCustom.style.display = 'none';
    }
  }

  btnNext.addEventListener('click', () => {
    if (currentStep === 1 && builderState.type !== 'roll') {
      currentStep += 2; // Skip step 2 (envoltura) if not a roll
    } else {
      currentStep++;
    }
    if (currentStep > maxSteps) currentStep = maxSteps;
    updateWizardUI();
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep === 3 && builderState.type !== 'roll') {
      currentStep -= 2; // Jump back to step 1
    } else {
      currentStep--;
    }
    if (currentStep < 1) currentStep = 1;
    updateWizardUI();
  });


  // 1. Cambiar Tipo de Producto (Roll, Sushiburger, Gohan, Handroll)
  typeGrid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      typeGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      builderState.type = btn.getAttribute('data-type');
      builderState.typeName = btn.getAttribute('data-name');
      builderState.basePrice = parseInt(btn.getAttribute('data-price'), 10);

      // We handle step skipping in the "Next" button logic now, but we still ensure data is consistent
      if (builderState.type !== 'roll') {
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
    
    // Cerrar modal y reiniciar
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = 'auto';
    currentStep = 1;
    updateWizardUI();
  });

  // Reset modal state when closed from X button
  document.getElementById('close-modal-btn').addEventListener('click', () => {
    currentStep = 1;
    updateWizardUI();
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

// Easter Egg Logic
document.addEventListener('DOMContentLoaded', () => {
  const eggBtn = document.getElementById('easter-egg-btn');
  if (eggBtn) {
    eggBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const emojis = ['🍣', '🍱', '🥢', '🍙', '🍤'];
      const numSushi = 30; // Rain amount

      for (let i = 0; i < numSushi; i++) {
        setTimeout(() => {
          const sushi = document.createElement('div');
          sushi.className = 'falling-sushi';
          sushi.innerText = emojis[Math.floor(Math.random() * emojis.length)];
          
          // Randomize position and duration
          sushi.style.left = Math.random() * 100 + 'vw';
          sushi.style.animationDuration = Math.random() * 2 + 2 + 's'; // 2 to 4 seconds
          
          document.body.appendChild(sushi);
          
          // Cleanup
          setTimeout(() => {
            sushi.remove();
          }, 4500);
        }, i * 150); // Stagger drop
      }
    });
  }
});
