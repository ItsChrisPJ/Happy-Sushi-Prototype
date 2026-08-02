import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_menu = """const MENU_ITEMS = [
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
];"""

new_content = re.sub(r'const MENU_ITEMS = \[.*?\];', new_menu, content, flags=re.DOTALL)
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
