/* ============================================================
   PLANTAR — main.js: i18n, header/footer, helpers
   Requiere data.js (CFG) cargado antes.
   ============================================================ */

const WA_NUMBER = '573106437745'; // (+57) 310 643 77 45 — ventas
const CONTACT = CFG.partners.contact;

/* ---------- i18n ---------- */
let LANG = localStorage.getItem('plantar-lang') || 'es';

const I18N = {
  es: {
    nav_home: 'Inicio', nav_products: 'Productos', nav_about: 'Nosotros',
    nav_maquila: 'Maquila', nav_contact: 'Contacto', nav_quote: 'Cotiza ahora',
    hero_kicker: 'Snacks colombianos',
    hero_title_1: 'El sabor', hero_script: 'auténtico', hero_title_2: 'del plátano',
    hero_sub: 'Somos Plantar, empresa colombiana con más de 16 años llevando snacks de plátano, yuca, papa y raíces del Eje Cafetero al mundo.',
    hero_cta_products: 'Ver productos', hero_cta_quote: 'Cotizar',
    marquee: 'Del campo a la mesa • Sabor auténtico • 100% colombiano • Snacks naturales •',
    home_best_kicker: 'Nuestro catálogo', home_best_title: 'Productos estrella',
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
    about_title: 'Nuestro legado', about_kicker: 'Desde 2009',
    about_quienes: CFG.legacy.quienes,
    about_timeline_title: 'Nuestra historia',
    about_plant_title: 'Nuestra planta', about_plant_text: CFG.operations.planta,
    about_quality_title: 'Calidad e inocuidad', about_quality_text: CFG.operations.calidad,
    about_certs_title: 'Certificaciones y sellos',
    about_global_title: 'Presencia global', about_global_sub: 'Países donde tenemos presencia',
    about_partners_title: 'Aliados estratégicos', about_goya_text: CFG.partners.goya.text,
    stat_years: 'Años de experiencia', stat_countries: 'Países', stat_tons: 'Toneladas / año', stat_team: 'Colaboradores',
    maquila_title: CFG.maquila.title, maquila_desc: CFG.maquila.desc,
    maquila_highlight: CFG.maquila.highlight,
    maquila_pb_title: 'Marca privada', maquila_pb_text: CFG.partners.privateBrand.text,
    maquila_how_title: '¿Qué incluye nuestro servicio?',
    maquila_cta: 'Cotiza tu proyecto de maquila',
    contact_title: 'Conecta con nosotros', contact_sub: '¿Interesado en nuestros productos? Escríbenos y te responderemos lo antes posible.',
    contact_sales: 'Ventas', contact_reception: 'Recepción', contact_phones: 'Teléfonos',
    contact_address: 'Dirección', contact_wa_cta: 'Escríbenos por WhatsApp',
    form_title: 'Solicita una cotización',
    form_name: 'Nombre completo', form_company: 'Empresa', form_email: 'Correo electrónico',
    form_phone: 'Teléfono', form_products: 'Productos de interés', form_msg: 'Mensaje',
    form_msg_ph: 'Cuéntanos qué cantidades y presentaciones necesitas…',
    form_send_wa: 'Enviar por WhatsApp', form_send_mail: 'Enviar por correo',
    form_note: 'Al enviar se abrirá WhatsApp o tu correo con el mensaje listo para nuestro equipo de ventas.',
    form_required: 'Por favor escribe tu nombre y un mensaje o selecciona productos.',
    wa_greeting: 'Hola Plantar 👋, estoy interesado en sus productos.',
    footer_about: 'Empresa colombiana productora de snacks de plátano, yuca, papa y raíces desde 2009. La Tebaida, Quindío — Eje Cafetero.',
    footer_nav: 'Navegación', footer_contact: 'Contacto', footer_certs: 'Certificaciones',
    footer_rights: 'Todos los derechos reservados.',
    cat_tostones: 'Tostones', cat_tajadas: 'Tajadas y chips', cat_sticks: 'Sticks y palitos',
    cat_raices: 'Yuca, papa y raíces', cat_mix: 'Mezclas', cat_maiz: 'Maíz',
    cat_six: 'Six pack', cat_esp: 'Especiales',
  },
  en: {
    nav_home: 'Home', nav_products: 'Products', nav_about: 'About us',
    nav_maquila: 'Private label', nav_contact: 'Contact', nav_quote: 'Get a quote',
    hero_kicker: 'Colombian snacks',
    hero_title_1: 'The authentic', hero_script: 'flavor', hero_title_2: 'of plantain',
    hero_sub: 'We are Plantar, a Colombian company with over 16 years bringing plantain, cassava, potato and root snacks from the Coffee Region to the world.',
    hero_cta_products: 'View products', hero_cta_quote: 'Get a quote',
    marquee: 'From farm to table • Authentic flavor • 100% Colombian • Natural snacks •',
    home_best_kicker: 'Our catalog', home_best_title: 'Featured products',
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
    about_title: 'Our legacy', about_kicker: 'Since 2009',
    about_quienes: 'We are a Colombian company dedicated to producing and marketing the highest quality plantain snacks. With over 16 years of experience, we bring the authentic flavor of Colombian plantain to international markets, standing out for our quality standards, innovation and commitment to excellence.',
    about_timeline_title: 'Our story',
    about_plant_title: 'Our plant', about_plant_text: 'Located in La Tebaida, Quindío, 500m from the Quindío free trade zone, our plant spans over 6,000 m² with optimal facilities that allow us to develop our expansion projects.',
    about_quality_title: 'Quality & food safety', about_quality_text: 'We are committed to manufacturing innovative, safe, high-quality products. Built on a culture of food safety, continuous improvement and strict regulatory compliance, we strive to guarantee global customer satisfaction and sustainable development.',
    about_certs_title: 'Certifications & seals',
    about_global_title: 'Global presence', about_global_sub: 'Countries where we operate',
    about_partners_title: 'Strategic partners',
    about_goya_text: 'Goya Foods is one of our main commercial partners. As the largest Hispanic food company in the United States, Goya trusts the quality and authenticity of our plantain products to bring Latin flavor to millions of homes.',
    stat_years: 'Years of experience', stat_countries: 'Countries', stat_tons: 'Tons / year', stat_team: 'Employees',
    maquila_title: CFG.maquila.titleEn, maquila_desc: CFG.maquila.descEn,
    maquila_highlight: CFG.maquila.highlightEn,
    maquila_pb_title: 'Private label', maquila_pb_text: 'At Plantar we offer contract manufacturing and private label development services. With our experience, technology and installed capacity, we produce plantain snacks and other products under your own brand, guaranteeing the highest quality and food safety standards.',
    maquila_how_title: 'What does our service include?',
    maquila_cta: 'Quote your private label project',
    contact_title: 'Connect with us', contact_sub: 'Interested in our products? Write to us and we will reply as soon as possible.',
    contact_sales: 'Sales', contact_reception: 'Reception', contact_phones: 'Phones',
    contact_address: 'Address', contact_wa_cta: 'Message us on WhatsApp',
    form_title: 'Request a quote',
    form_name: 'Full name', form_company: 'Company', form_email: 'Email',
    form_phone: 'Phone', form_products: 'Products of interest', form_msg: 'Message',
    form_msg_ph: 'Tell us the quantities and presentations you need…',
    form_send_wa: 'Send via WhatsApp', form_send_mail: 'Send via email',
    form_note: 'Submitting opens WhatsApp or your email client with the message ready for our sales team.',
    form_required: 'Please enter your name and a message or select products.',
    wa_greeting: 'Hello Plantar 👋, I am interested in your products.',
    footer_about: 'Colombian producer of plantain, cassava, potato and root snacks since 2009. La Tebaida, Quindío — Coffee Region.',
    footer_nav: 'Navigation', footer_contact: 'Contact', footer_certs: 'Certifications',
    footer_rights: 'All rights reserved.',
    cat_tostones: 'Tostones', cat_tajadas: 'Chips & slices', cat_sticks: 'Sticks',
    cat_raices: 'Cassava, potato & roots', cat_mix: 'Mixes', cat_maiz: 'Corn',
    cat_six: 'Six pack', cat_esp: 'Specials',
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
  if (n.includes('six pack')) return 'six';
  if (n.includes('tostón') || n.includes('toston') || n.includes('patakón') || n.includes('bombonera') || n.includes('tostada') || n.includes('mini tostada')) return 'tostones';
  if (n.includes('mix') || n.includes('all mix')) return 'mix';
  if (n.includes('stick') || n.includes('palito')) return 'sticks';
  if (n.includes('nacho') || n.includes('palomita') || n.includes('carantanta')) return 'maiz';
  if (n.includes('yuca') || n.includes('yukita') || n.includes('papa') || n.includes('batata') || n.includes('arracacha') || n.includes('malanga') || n.includes('ñame')) return 'raices';
  if (n.includes('tajada') || n.includes('chips') || n.includes('platanito') || n.includes('madurito') || n.includes('moneda') || n.includes('strips')) return 'tajadas';
  return 'esp';
}
const CATEGORIES = ['tostones', 'tajadas', 'sticks', 'raices', 'mix', 'maiz', 'six', 'esp'];

const PRODUCTS = CFG.productos.map((p, i) => ({
  ...p, id: slugify(p.name), idx: i, category: categoryOf(p),
}));

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
