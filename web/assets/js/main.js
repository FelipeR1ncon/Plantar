/* ============================================================
   PLANTAR — main.js: i18n, header/footer, helpers
   Requiere data.js (CFG) cargado antes.
   ============================================================ */

const WA_NUMBER = '573125769026'; // (+57) 312 576 90 26 — ventas (pendiente confirmar)
const CONTACT = CFG.partners.contact;

/* ---------- i18n ---------- */
let LANG = localStorage.getItem('plantar-lang') || 'es';

const I18N = {
  es: {
    nav_home: 'Inicio', nav_products: 'Productos', nav_about: 'Nosotros',
    nav_maquila: 'Maquila', nav_contact: 'Contacto', nav_quote: 'Cotiza ahora',
    hero_kicker: 'Snacks colombianos',
    hero_title_1: 'El sabor', hero_script: 'auténtico', hero_title_2: 'del plátano',
    hero_sub: 'Transformamos plátano y otras raíces colombianas en snacks con el crunch perfecto en cada bocado.',
    hero_cta_products: 'Ver productos', hero_cta_quote: 'Cotiza tu pedido',
    marquee: 'Del campo a la mesa • Sabor auténtico • 100% colombiano • Snacks naturales •',
    home_best_kicker: 'Nuestro catálogo', home_best_title: 'Nuestros productos',
    home_best_sub: 'Tostones, tajadas, sticks, yuca, papa y mezclas únicas. Todo con la crocancia de la cocina colombiana.',
    home_best_cta: 'Ver todo el catálogo',
    home_about_kicker: 'Desde 2009', home_about_title: 'Hechos en el Eje Cafetero',
    home_about_text: 'Nuestra planta en La Tebaida, Quindío, cuenta con más de 6.000 m² y un equipo de más de 300 colaboradores. Producimos más de 5.000 toneladas al año con certificaciones ISO 9001, INVIMA, Kosher y Gluten Free.',
    home_about_cta: 'Conoce nuestra historia',
    home_global_title: 'Presencia en 11 países',
    home_global_sub: 'Exportamos el sabor colombiano a Norteamérica, Europa, el Caribe y Oceanía.',
    home_maquila_kicker: 'Marca privada', home_maquila_title: 'Maquila tu marca con nosotros',
    home_maquila_text: 'Fabricamos snacks bajo tu propia marca con nuestra calidad, capacidad y certificaciones.',
    home_maquila_cta: 'Saber más',
    cta_band_title: '¿Listo para llevar Plantar a tu negocio?', cta_band_btn: 'Habla con ventas',
    prods_title: 'Nuestros productos', prods_sub: 'Explora el catálogo completo. Filtra por categoría o busca tu snack favorito.',
    filter_all: 'Todos', search_ph: 'Buscar producto…',
    view_product: 'Ver producto', no_results: 'No encontramos productos con ese filtro.',
    detail_presentations: 'Presentaciones', detail_specs: 'Ficha técnica',
    spec_ref: 'Referencia PT', spec_weight: 'Peso', spec_box: 'Unidades por caja',
    spec_measures: 'Medidas', spec_ingredients: 'Ingredientes', spec_oil: 'Tipo de aceite',
    spec_flavor: 'Saborizantes', spec_cal: 'Calorías', spec_fat: 'Grasa saturada',
    spec_sodium: 'Sodio', spec_sugar: 'Azúcares', spec_extra: 'Presentaciones adicionales',
    detail_quote: 'Cotizar este producto', detail_wa: 'Preguntar por WhatsApp',
    related_title: 'También te puede gustar', back_catalog: '← Volver al catálogo',
    about_title: 'Quiénes somos', about_kicker: 'Plantar S.A.S.',
    about_quienes: 'Plantar S.A.S. nació en el Eje Cafetero colombiano con una misión clara: llevar lo mejor del campo colombiano a Colombia y al mundo. Hoy, 16 años después, seguimos fieles a ese propósito: distribuimos a nivel nacional y exportamos a 11 países, con procesos rigurosos que garantizan la misma calidad en cada lote.',
    about_timeline_title: 'Nuestra historia',
    about_plant_title: 'Nuestra planta', about_plant_text: 'Nuestra planta de producción en La Tebaida, Quindío, combina tecnología de punta con la tradición colombiana. Con más de 4.000 m², garantizamos calidad, trazabilidad y eficiencia en cada lote que transformamos en snacks.',
    about_quality_title: 'Calidad e inocuidad', about_quality_text: CFG.operations.calidad,
    about_certs_title: 'Nuestras certificaciones',
    about_global_title: 'Nuestra presencia', about_global_sub: 'Países donde tenemos presencia',
    about_partners_title: 'Nuestros aliados',
    about_goya_text: 'Somos aliados de marcas reconocidas como Goya Foods, para quienes producimos línea de plátano verde y plátano maduro bajo los más altos estándares de calidad e inocuidad alimentaria.',
    values_title: 'Nuestros valores',
    val_quality_t: 'Calidad', val_quality_d: 'Cada producto sale de nuestra planta con los más altos estándares.',
    val_origin_t: 'Origen', val_origin_d: 'Materia prima 100% colombiana, del campo directo a la planta.',
    val_commit_t: 'Compromiso', val_commit_d: 'Con nuestros colaboradores, clientes y el agro nacional.',
    stat_years: 'Años de trayectoria', stat_countries: 'Países', stat_tons: 'Toneladas producidas', stat_team: 'Colaboradores', stat_containers: 'Contenedores / mes',
    maquila_title: 'Fabricamos tu marca, con nuestros estándares',
    maquila_desc: 'Producimos snacks de plátano, yuca y raíces bajo tu propia marca, con la calidad y trazabilidad que exigen los mercados nacional e internacional.',
    maquila_highlight: CFG.maquila.highlight,
    maquila_pb_title: 'Marca privada', maquila_pb_text: CFG.partners.privateBrand.text,
    maquila_certs_title: 'Certificaciones',
    maquila_how_title: 'Cómo trabajamos',
    maquila_step1: 'Cuéntanos tu marca, tus objetivos y volúmenes esperados',
    maquila_step2: 'Desarrollamos juntos la fórmula, el sabor y el empaque',
    maquila_step3: 'Producimos bajo tus especificaciones y estándares de calidad',
    maquila_step4: 'Entregamos o exportamos donde lo necesites',
    maquila_goya_text: 'Empresas como Goya Foods ya confían en nuestra capacidad de producción y en nuestros estándares de calidad para fabricar su línea de strips de plátano.',
    maquila_band: '¿Tienes una marca o una idea de producto? Hablemos de cómo hacerla realidad.',
    maquila_band_btn: 'Solicitar información de maquila',
    maquila_cta: 'Conocer el servicio de maquila',
    contact_title: 'Conecta con nosotros', contact_sub: '¿Interesado en nuestros productos? Escríbenos y te responderemos lo antes posible.',
    contact_emails: 'Correos', contact_sales: 'Ventas', contact_reception: 'Recepción', contact_phones: 'Teléfonos',
    contact_address: 'Dirección', contact_wa_cta: 'Escríbenos por WhatsApp',
    form_title: 'Solicita una cotización',
    form_name: 'Nombre completo', form_company: 'Empresa', form_email: 'Correo electrónico',
    form_phone: 'Teléfono', form_products: 'Productos de interés', form_msg: 'Mensaje',
    form_msg_ph: 'Cuéntanos qué cantidades y presentaciones necesitas…',
    form_send_wa: 'Enviar por WhatsApp', form_send_mail: 'Enviar solicitud',
    form_note: 'Al enviar se abrirá tu correo con el mensaje listo para nuestro equipo de ventas.',
    form_required: 'Por favor escribe tu nombre y un mensaje o selecciona productos.',
    wa_greeting: 'Hola Plantar 👋, estoy interesado en sus productos.',
    footer_about: 'Empresa colombiana productora de snacks de plátano, yuca, papa y raíces desde 2009. La Tebaida, Quindío — Eje Cafetero.',
    footer_nav: 'Navegación', footer_contact: 'Contacto', footer_certs: 'Certificaciones',
    footer_rights: 'Todos los derechos reservados.',
    cat_tostones: 'Tostones', cat_patakon: 'Patakón / Tostada', cat_tajadas: 'Tajadas y monedas',
    cat_strips: 'Lenguas / Strips', cat_sticks: 'Palitos / Sticks', cat_raices: 'Raíces',
    cat_mix: 'Mezclas / Mix', cat_maiz: 'Maíz', cat_familiares: 'Familiares', cat_esp: 'Especiales',
  },
  en: {
    nav_home: 'Home', nav_products: 'Products', nav_about: 'About us',
    nav_maquila: 'Private label', nav_contact: 'Contact', nav_quote: 'Get a quote',
    hero_kicker: 'Colombian snacks',
    hero_title_1: 'The authentic', hero_script: 'flavor', hero_title_2: 'of plantain',
    hero_sub: 'We transform plantain and other Colombian roots into snacks with the perfect crunch in every bite.',
    hero_cta_products: 'View products', hero_cta_quote: 'Quote your order',
    marquee: 'From farm to table • Authentic flavor • 100% Colombian • Natural snacks •',
    home_best_kicker: 'Our catalog', home_best_title: 'Our products',
    home_best_sub: 'Tostones, chips, sticks, cassava, potato and unique mixes. All with the crunch of Colombian cuisine.',
    home_best_cta: 'View full catalog',
    home_about_kicker: 'Since 2009', home_about_title: 'Made in the Coffee Region',
    home_about_text: 'Our plant in La Tebaida, Quindío, spans over 6,000 m² with a team of 300+ employees. We produce over 5,000 tons per year with ISO 9001, INVIMA, Kosher and Gluten Free certifications.',
    home_about_cta: 'Learn our story',
    home_global_title: 'Present in 11 countries',
    home_global_sub: 'We export Colombian flavor to North America, Europe, the Caribbean and Oceania.',
    home_maquila_kicker: 'Private label', home_maquila_title: 'Manufacture your brand with us',
    home_maquila_text: 'We produce snacks under your own brand with our quality, capacity and certifications.',
    home_maquila_cta: 'Learn more',
    cta_band_title: 'Ready to bring Plantar to your business?', cta_band_btn: 'Talk to sales',
    prods_title: 'Our products', prods_sub: 'Explore the full catalog. Filter by category or search for your favorite snack.',
    filter_all: 'All', search_ph: 'Search product…',
    view_product: 'View product', no_results: 'No products match that filter.',
    detail_presentations: 'Presentations', detail_specs: 'Technical specs',
    spec_ref: 'PT Reference', spec_weight: 'Weight', spec_box: 'Units per box',
    spec_measures: 'Measurements', spec_ingredients: 'Ingredients', spec_oil: 'Oil type',
    spec_flavor: 'Flavorings', spec_cal: 'Calories', spec_fat: 'Saturated fat',
    spec_sodium: 'Sodium', spec_sugar: 'Sugars', spec_extra: 'Additional presentations',
    detail_quote: 'Quote this product', detail_wa: 'Ask on WhatsApp',
    related_title: 'You may also like', back_catalog: '← Back to catalog',
    about_title: 'Who we are', about_kicker: 'Plantar S.A.S.',
    about_quienes: 'Plantar S.A.S. was born in the Colombian Coffee Region with a clear mission: to bring the best of the Colombian countryside to Colombia and the world. Today, 16 years later, we remain true to that purpose: we distribute nationwide and export to 11 countries, with rigorous processes that guarantee the same quality in every batch.',
    about_timeline_title: 'Our story',
    about_plant_title: 'Our plant', about_plant_text: 'Our production plant in La Tebaida, Quindío, combines state-of-the-art technology with Colombian tradition. With over 4,000 m², we guarantee quality, traceability and efficiency in every batch we transform into snacks.',
    about_quality_title: 'Quality & food safety', about_quality_text: 'We are committed to manufacturing innovative, safe, high-quality products. Built on a culture of food safety, continuous improvement and strict regulatory compliance, we strive to guarantee global customer satisfaction and sustainable development.',
    about_certs_title: 'Our certifications',
    about_global_title: 'Our presence', about_global_sub: 'Countries where we operate',
    about_partners_title: 'Our partners',
    about_goya_text: 'We are partners of renowned brands such as Goya Foods, for whom we produce green and ripe plantain lines under the highest quality and food safety standards.',
    values_title: 'Our values',
    val_quality_t: 'Quality', val_quality_d: 'Every product leaves our plant meeting the highest standards.',
    val_origin_t: 'Origin', val_origin_d: '100% Colombian raw material, straight from the field to the plant.',
    val_commit_t: 'Commitment', val_commit_d: 'To our employees, our clients and Colombian agriculture.',
    stat_years: 'Years in the industry', stat_countries: 'Countries', stat_tons: 'Tons produced', stat_team: 'Employees', stat_containers: 'Containers / month',
    maquila_title: 'We manufacture your brand, with our standards',
    maquila_desc: 'We produce plantain, cassava and root snacks under your own brand, with the quality and traceability that national and international markets demand.',
    maquila_highlight: CFG.maquila.highlightEn,
    maquila_pb_title: 'Private label', maquila_pb_text: 'At Plantar we offer contract manufacturing and private label development services. With our experience, technology and installed capacity, we produce plantain snacks and other products under your own brand, guaranteeing the highest quality and food safety standards.',
    maquila_certs_title: 'Certifications',
    maquila_how_title: 'How we work',
    maquila_step1: 'Tell us about your brand, your goals and expected volumes',
    maquila_step2: 'Together we develop the formula, flavor and packaging',
    maquila_step3: 'We produce under your specifications and quality standards',
    maquila_step4: 'We deliver or export wherever you need it',
    maquila_goya_text: 'Companies like Goya Foods already trust our production capacity and quality standards to manufacture their plantain strips line.',
    maquila_band: 'Do you have a brand or a product idea? Let’s talk about making it happen.',
    maquila_band_btn: 'Request private label information',
    maquila_cta: 'Learn about our private label service',
    contact_title: 'Connect with us', contact_sub: 'Interested in our products? Write to us and we will reply as soon as possible.',
    contact_emails: 'Emails', contact_sales: 'Sales', contact_reception: 'Reception', contact_phones: 'Phones',
    contact_address: 'Address', contact_wa_cta: 'Message us on WhatsApp',
    form_title: 'Request a quote',
    form_name: 'Full name', form_company: 'Company', form_email: 'Email',
    form_phone: 'Phone', form_products: 'Products of interest', form_msg: 'Message',
    form_msg_ph: 'Tell us the quantities and presentations you need…',
    form_send_wa: 'Send via WhatsApp', form_send_mail: 'Send request',
    form_note: 'Submitting opens your email client with the message ready for our sales team.',
    form_required: 'Please enter your name and a message or select products.',
    wa_greeting: 'Hello Plantar 👋, I am interested in your products.',
    footer_about: 'Colombian producer of plantain, cassava, potato and root snacks since 2009. La Tebaida, Quindío — Coffee Region.',
    footer_nav: 'Navigation', footer_contact: 'Contact', footer_certs: 'Certifications',
    footer_rights: 'All rights reserved.',
    cat_tostones: 'Tostones', cat_patakon: 'Patakón / Toast', cat_tajadas: 'Slices & coins',
    cat_strips: 'Strips', cat_sticks: 'Sticks', cat_raices: 'Roots',
    cat_mix: 'Mixes', cat_maiz: 'Corn', cat_familiares: 'Family size', cat_esp: 'Specials',
  },
};

function t(key) { return (I18N[LANG] && I18N[LANG][key]) || I18N.es[key] || key; }

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('plantar-lang', lang);
  document.documentElement.lang = lang;
  render();
}

function applyI18n(root) {
  (root || document).querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  (root || document).querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
}

/* ---------- Helpers de producto ---------- */
function slugify(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/ñ/g, 'n').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function prodName(p) { return LANG === 'en' && p.nameEn ? p.nameEn.replace(/:$/, '') : p.name; }
function prodDesc(p) { return LANG === 'en' && p.descEn ? p.descEn : p.desc; }

function categoryOf(p) {
  const n = p.name.toLowerCase();
  // Familiares: formatos grandes y multipacks
  if (n.includes('six pack') || n.includes('bombonera') || n.includes('anillos') || n.includes('454')) return 'familiares';
  if (n.includes('mix') || n.includes('all mix')) return 'mix';
  if (n.includes('strips') || n.includes('lengua')) return 'strips';
  if (n.includes('tostón') || n.includes('toston')) return 'tostones';
  if (n.includes('mini tostada')) return 'esp';
  if (n.includes('patakón') || n.includes('patakon') || n.includes('tostada')) return 'patakon';
  if (n.includes('stick') || n.includes('palito')) return 'sticks';
  if (n.includes('nacho') || n.includes('palomita') || n.includes('carantanta')) return 'maiz';
  if (n.includes('yuca') || n.includes('yukita') || n.includes('papa') || n.includes('batata') || n.includes('arracacha') || n.includes('malanga') || n.includes('ñame')) return 'raices';
  if (n.includes('canasta') || n.includes('cono') || n.includes('cucharita') || n.includes('crouton') || n.includes('rosquill')) return 'esp';
  if (n.includes('tajada') || n.includes('chips') || n.includes('platanito') || n.includes('madurito') || n.includes('moneda')) return 'tajadas';
  return 'esp';
}
// Orden del portafolio: primero Patakis (línea core), luego Familiares y al final Especiales
const CATEGORIES = ['tostones', 'patakon', 'tajadas', 'strips', 'sticks', 'raices', 'mix', 'maiz', 'familiares', 'esp'];

const PRODUCTS = CFG.productos
  .map((p, i) => ({ ...p, id: slugify(p.name), idx: i, category: categoryOf(p) }))
  // orden: por categoría y, dentro de cada una, alfabético — así los nombres iguales quedan seguidos
  .sort((a, b) => CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category) ||
    a.name.localeCompare(b.name, 'es'));

function productUrl(p) { return `producto.html?id=${p.id}`; }
function findProduct(id) { return PRODUCTS.find(p => p.id === id); }

function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message || t('wa_greeting'))}`;
}

/* ---------- Header / Footer ---------- */
function buildHeader() {
  const page = document.body.dataset.page || '';
  const links = [
    ['index.html', 'nav_home', 'home'],
    ['productos.html', 'nav_products', 'products'],
    ['nosotros.html', 'nav_about', 'about'],
    ['maquila.html', 'nav_maquila', 'maquila'],
    ['contacto.html', 'nav_contact', 'contact'],
  ];
  return `
  <div class="container inner">
    <a class="logo" href="index.html"><img src="assets/img/portada-logo.png" alt="Plantar — Plantain Company"></a>
    <nav class="main-nav" id="mainNav">
      ${links.map(([href, key, id]) =>
        `<a href="${href}" class="${page === id ? 'active' : ''}" data-i18n="${key}"></a>`).join('')}
    </nav>
    <div class="header-actions">
      <div class="lang-toggle" role="group" aria-label="Idioma / Language">
        <button data-lang="es" class="${LANG === 'es' ? 'on' : ''}">ES</button>
        <button data-lang="en" class="${LANG === 'en' ? 'on' : ''}">EN</button>
      </div>
      <a class="btn btn-primary btn-quote" href="contacto.html" data-i18n="nav_quote"></a>
      <button class="nav-burger" id="navBurger" aria-label="Menú">☰</button>
    </div>
  </div>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
  <div class="container">
    <div class="cols">
      <div>
        <div class="logo-foot"><img src="assets/img/logo.png" alt="Plantar"></div>
        <p style="font-size:0.9rem" data-i18n="footer_about"></p>
      </div>
      <div>
        <h4 data-i18n="footer_nav"></h4>
        <ul>
          <li><a href="index.html" data-i18n="nav_home"></a></li>
          <li><a href="productos.html" data-i18n="nav_products"></a></li>
          <li><a href="nosotros.html" data-i18n="nav_about"></a></li>
          <li><a href="maquila.html" data-i18n="nav_maquila"></a></li>
          <li><a href="contacto.html" data-i18n="nav_contact"></a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer_certs"></h4>
        <ul>
          <li>ISO 9001</li><li>INVIMA</li><li>Kosher</li><li>Gluten Free</li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer_contact"></h4>
        <ul>
          ${CONTACT.emails.map(e => `<li><a href="mailto:${e}">${e}</a></li>`).join('')}
          ${CONTACT.phones.map(p => `<li>${p}</li>`).join('')}
          <li>${CONTACT.address}</li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${year} Plantar S.A.S — Plantain Company. <span data-i18n="footer_rights"></span></span>
      <span>${CONTACT.website}</span>
    </div>
  </div>`;
}

const WA_SVG = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2.7C8.7 2.7 2.8 8.6 2.8 15.9c0 2.3.6 4.6 1.8 6.6L2.7 29.3l7-1.8c1.9 1 4.1 1.6 6.3 1.6 7.3 0 13.2-5.9 13.2-13.2S23.3 2.7 16 2.7zm0 24.1c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.8 0-6.1 5-11.1 11.1-11.1s11.1 5 11.1 11.1-5 10.9-11.1 10.9zm6.1-8.2c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z"/></svg>`;

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rev').forEach(el => io.observe(el));
}

/* ---------- Marquee ---------- */
function marqueeHTML(cls) {
  const txt = `<span>${t('marquee')}</span>`.repeat(6);
  return `<div class="marquee ${cls || ''}"><div class="track">${txt}${txt}</div></div>`;
}

/* ---------- Product card ---------- */
function cardHTML(p) {
  return `
  <a class="prod-card rev" href="${productUrl(p)}">
    <span class="cat" data-cat>${t('cat_' + p.category)}</span>
    <div class="ph"><img loading="lazy" src="${p.empaque || p.image}" alt="${prodName(p)}"></div>
    <h3>${prodName(p)}</h3>
    <span class="btn btn-outline" data-i18n="view_product">${t('view_product')}</span>
  </a>`;
}

/* ---------- Render global ---------- */
function render() {
  document.getElementById('site-header').innerHTML = buildHeader();
  document.getElementById('site-footer').innerHTML = buildFooter();

  // marquees declaradas con <div data-marquee="lime">
  document.querySelectorAll('[data-marquee]').forEach(el => {
    el.className = `marquee ${el.dataset.marquee || ''}`;
    const txt = `<span>${t('marquee')}</span>`.repeat(8);
    el.innerHTML = `<div class="track">${txt}${txt}</div>`;
  });

  if (typeof renderPage === 'function') renderPage();

  applyI18n();
  initReveal();

  document.querySelectorAll('.lang-toggle button').forEach(b =>
    b.addEventListener('click', () => setLang(b.dataset.lang)));
  const burger = document.getElementById('navBurger');
  if (burger) burger.addEventListener('click', () =>
    document.getElementById('mainNav').classList.toggle('open'));

  const wa = document.getElementById('waFloat');
  if (wa) wa.href = waLink();
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = LANG;
  // botón flotante de WhatsApp
  const a = document.createElement('a');
  a.id = 'waFloat'; a.className = 'wa-float'; a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', 'WhatsApp');
  a.innerHTML = WA_SVG;
  document.body.appendChild(a);
  render();
});
