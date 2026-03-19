/* ============================================
   WanderLens — App Logic
   ============================================ */

// Country data with images and structured info
const countries = [
  {
    name: "Japan",
    tagline: "Where ancient traditions meet futuristic wonders in perfect harmony.",
    image: "https://s27363.pcdn.co/wp-content/uploads/2026/01/Kyoto-Japan-Photo.jpg.optimal.jpg",
    budget: "$150–250/day",
    bestTime: "Mar–May / Oct–Nov",
    visa: "90 days visa-free",
    places: [
      { name: "Kyoto", desc: "Traditional Japan with geisha districts, golden temples, and Arashiyama bamboo groves." },
      { name: "Tokyo", desc: "Bustling capital blending neon-lit skyscrapers, historic sites, and vibrant neighborhoods." },
      { name: "Mount Fuji", desc: "Iconic snow-capped volcano offering stunning views and hiking opportunities." },
      { name: "Hiroshima & Miyajima", desc: "Peace Memorial site and floating torii gate shrine on scenic island." },
      { name: "Kanazawa", desc: "Preserved samurai district, Kenroku-en Garden, and geisha teahouses." }
    ],
    culture: [
      { title: "Greeting", text: "Bow slightly for casual; deeper for formal. No handshakes or hugs expected." },
      { title: "Shoes", text: "Always remove shoes indoors — homes, temples, many restaurants." },
      { title: "Dining", text: 'Say "itadakimasu" before meals. Slurping noodles is a compliment.' },
      { title: "Tipping", text: "Never tip — it's considered rude. Service is included." },
      { title: "Trains", text: "Stay quiet on trains. No phone calls, eat discreetly." }
    ],
    tips: [
      { title: "Best Time", text: "Spring (cherry blossoms) or autumn (foliage). Mild weather, stunning scenery." },
      { title: "Budget", text: "$150–250 USD/day mid-range including accommodation, food, and transport." },
      { title: "Visa", text: "EU citizens get 90-day visa exemption with a valid passport." },
      { title: "Safety", text: "Extremely safe with low crime. Prepare for occasional earthquakes." }
    ],
    food: [
      { dish: "Sushi", desc: "Fresh raw fish on vinegared rice — an art form perfected over centuries." },
      { dish: "Ramen", desc: "Rich noodle soup in broths like tonkotsu, miso, or shoyu." },
      { dish: "Tempura", desc: "Lightly battered and fried seafood and vegetables." },
      { dish: "Okonomiyaki", desc: 'Savory cabbage pancake — "as you like it" style.' }
    ],
    nightlife: "Tokyo's Shibuya/Shinjuku (izakaya, clubs), Osaka's Dotonbori (street food, neon vibes), Kyoto's Pontocho (intimate bars)."
  },
  {
    name: "Italy",
    tagline: "Where history whispers, cuisine captivates, and la dolce vita beckons every traveler.",
    image: "https://i.natgeofe.com/n/c5d27878-57b9-4f26-b468-37dac30dce7b/63433.jpg",
    budget: "$100–250/day",
    bestTime: "Apr–Jun / Sep–Oct",
    visa: "Free EU travel",
    places: [
      { name: "Rome", desc: "Eternal City with ancient Colosseum, Roman Forum, and Vatican treasures." },
      { name: "Venice", desc: "Magical canals, St. Mark's Basilica, and gondola rides through floating beauty." },
      { name: "Florence", desc: "Renaissance heart featuring the Duomo, Uffizi Gallery, and Ponte Vecchio." },
      { name: "Cinque Terre", desc: "Colorful cliffside villages connected by scenic hikes and azure seas." },
      { name: "Amalfi Coast", desc: "Dramatic cliffs, Positano's pastel houses, and Path of the Gods trails." }
    ],
    culture: [
      { title: "Greeting", text: 'Say "buongiorno" (morning) or "buonasera" (evening). Cheek kisses for friends.' },
      { title: "Dining", text: "Don't rush meals. Let staff bring the bill — asking for it is impolite." },
      { title: "Dress Code", text: "Cover shoulders and knees when visiting churches." },
      { title: "Tipping", text: 'Round up or leave 5–10%. "Coperto" (cover charge) is standard.' },
      { title: "Volume", text: "Italians are expressive but avoid being overly loud as a visitor." }
    ],
    tips: [
      { title: "Best Time", text: "Shoulder seasons (Apr–Jun, Sep–Oct) for mild weather and fewer crowds." },
      { title: "Budget", text: "$100–250 USD/day per person, budget to mid-range." },
      { title: "Visa", text: "EU citizens travel freely. No visa needed." },
      { title: "Safety", text: "Watch for pickpockets in Rome and Milan. Secure valuables on transit." }
    ],
    food: [
      { dish: "Carbonara", desc: "Rome's creamy pasta with guanciale and egg — never cream." },
      { dish: "Pizza Margherita", desc: "Neapolitan classic with fresh mozzarella, tomato, and basil." },
      { dish: "Gelato", desc: "Creamy artisanal ice cream — look for natural colors." },
      { dish: "Tiramisù", desc: "Coffee-soaked ladyfingers layered with mascarpone." }
    ],
    nightlife: "Rome's Testaccio clubs and rooftops, Milan's Navigli bars, Florence's Santo Spirito aperitivo scene."
  },
  {
    name: "Thailand",
    tagline: "Where ancient temples meet turquoise beaches in eternal paradise.",
    image: "https://thailandstartshere.com/wp-content/uploads/2024/03/Wat-Arun-1.jpg",
    budget: "$50–150/day",
    bestTime: "Nov–Feb",
    visa: "60 days visa-free",
    places: [
      { name: "Bangkok Grand Palace", desc: "Opulent royal complex housing the revered Emerald Buddha." },
      { name: "Chiang Mai Doi Suthep", desc: "Mountaintop golden temple offering panoramic views and serenity." },
      { name: "Ayutthaya", desc: "UNESCO ruins of ancient temples with Buddha heads in tree roots." },
      { name: "Railay Beach, Krabi", desc: "Limestone cliffs enclosing pristine beaches, great for climbing." },
      { name: "Khao Yai National Park", desc: "Thailand's first national park with elephants and diverse trails." }
    ],
    culture: [
      { title: "Greeting", text: "Perform a 'wai' — palms together with a slight bow. Say 'sawasdee'." },
      { title: "Temples", text: "Remove shoes, cover knees and shoulders. Never point feet at Buddha." },
      { title: "Head & Feet", text: "The head is sacred — never touch it. Feet are low — keep them down." },
      { title: "Tipping", text: "Not compulsory but appreciated: 10–20 THB at restaurants, round up taxis." },
      { title: "Monks", text: "Women should never touch monks. Maintain respectful distance." }
    ],
    tips: [
      { title: "Best Time", text: "November to February — cool, dry weather around 29–34°C." },
      { title: "Budget", text: "$50–150 USD/day mid-range for hostels, food, transport, and activities." },
      { title: "Visa", text: "EU citizens get 60 days visa-exempt, extendable by 30 days." },
      { title: "Safety", text: "Petty theft in tourist areas — use secure bags. Drink responsibly." }
    ],
    food: [
      { dish: "Pad Thai", desc: "Stir-fried noodles with shrimp, tofu, eggs, and peanuts." },
      { dish: "Tom Yum Goong", desc: "Spicy-sour shrimp soup with lemongrass and chili." },
      { dish: "Green Curry", desc: "Creamy coconut curry with chicken, eggplant, and Thai basil." },
      { dish: "Som Tam", desc: "Spicy papaya salad with lime, fish sauce, and peanuts." }
    ],
    nightlife: "Bangkok's Khao San Road and Sukhumvit Soi 11, Koh Phangan's Full Moon beach parties."
  },
  {
    name: "Spain",
    tagline: "Where passion meets paradise in every sun-kissed street and flamenco beat.",
    image: "https://bucket-files.city-sightseeing.com/blog/2023/06/sagrada1.jpg",
    budget: "$90–220/day",
    bestTime: "Apr–Jun / Sep–Oct",
    visa: "Free EU Schengen",
    places: [
      { name: "Barcelona", desc: "Iconic Gaudí architecture like Sagrada Família and vibrant La Rambla." },
      { name: "Madrid", desc: "Royal Palace, Prado Museum, and lively Puerta del Sol square." },
      { name: "Seville", desc: "Stunning Alcázar Palace, Gothic cathedral, and romantic Plaza de España." },
      { name: "Granada", desc: "Breathtaking Alhambra fortress with Moorish palaces and gardens." },
      { name: "Toledo", desc: "Medieval city of three cultures overlooking the Tagus River." }
    ],
    culture: [
      { title: "Greeting", text: "Two cheek kisses (women). Men shake hands. Use 'buenos días'." },
      { title: "Dining", text: "Dinner starts at 9pm or later. Never rush — dining is social." },
      { title: "Siesta", text: "Many shops close 2–5pm. Embrace the rhythm." },
      { title: "Tipping", text: "Optional: round up or leave 5–10% for great service." },
      { title: "Dress", text: "Avoid athletic clothes casually — Spaniards dress well." }
    ],
    tips: [
      { title: "Best Time", text: "Spring (Apr–Jun) or fall (Sep–Oct) for mild weather and fewer crowds." },
      { title: "Budget", text: "$90–220 USD/day mid-range." },
      { title: "Visa", text: "EU citizens: no visa needed, valid ID or passport for Schengen." },
      { title: "Safety", text: "Beware pickpockets at tourist spots like Las Ramblas." }
    ],
    food: [
      { dish: "Paella", desc: "Saffron rice with seafood or chicken — a Valencian icon." },
      { dish: "Jamón Ibérico", desc: "World-class cured ham from acorn-fed pigs." },
      { dish: "Tortilla Española", desc: "Thick potato omelet — served at every bar." },
      { dish: "Gazpacho", desc: "Chilled tomato soup perfect for hot summer days." }
    ],
    nightlife: "Barcelona's Port Olímpic, Madrid's variety scene, Seville's flamenco bars, Ibiza's superclubs."
  },
  {
    name: "Morocco",
    tagline: "Where ancient medinas meet golden dunes in a tapestry of spice and color.",
    image: "https://www.naturallymorocco.co.uk/cms/destinations/24_6399d485377cas_0.jpg?v=1685629804",
    budget: "$50–100/day",
    bestTime: "Mar–May / Sep–Oct",
    visa: "90 days visa-free",
    places: [
      { name: "Marrakech Medina", desc: "UNESCO labyrinth of souks, palaces, and vibrant Jemaa el-Fna square." },
      { name: "Fes Medina", desc: "World's oldest medina with ancient tanneries and artisan workshops." },
      { name: "Chefchaouen", desc: "The Blue City — cobalt-washed streets in the Rif Mountains." },
      { name: "Sahara Desert", desc: "Golden dunes near Merzouga for camel treks and starlit nights." },
      { name: "Ait Benhaddou", desc: "Stunning mud-brick fortress — backdrop of Gladiator and Game of Thrones." }
    ],
    culture: [
      { title: "Greeting", text: "'Salaam alaikum' — handshake with right hand." },
      { title: "Dress", text: "Dress modestly — cover shoulders and knees, especially women." },
      { title: "Hands", text: "Use right hand for eating and giving. Remove shoes entering homes." },
      { title: "Tipping", text: "Customary: 5–10% restaurants, 10–20 MAD for services." },
      { title: "Haggling", text: "Polite bargaining is expected in souks. Start at half the asking price." }
    ],
    tips: [
      { title: "Best Time", text: "Spring (Mar–May) or fall (Sep–Oct) for mild 18–24°C weather." },
      { title: "Budget", text: "$50–100 USD/day mid-range." },
      { title: "Visa", text: "EU citizens get 90 days visa-free with a valid passport." },
      { title: "Safety", text: "Beware pickpockets in tourist areas. Use licensed taxis at night." }
    ],
    food: [
      { dish: "Tagine", desc: "Slow-cooked stew in clay pot — chicken with preserved lemon or lamb with prunes." },
      { dish: "Couscous", desc: "Steamed semolina with veggies, meat, and chickpeas. Traditional on Fridays." },
      { dish: "Harira", desc: "Hearty tomato-chickpea soup with lentils and herbs." },
      { dish: "Pastilla", desc: "Flaky pie of pigeon or seafood with cinnamon-sweet layers." }
    ],
    nightlife: "Marrakech rooftop bars in Gueliz, Casablanca's modern clubs, Essaouira's live Gnaoua music."
  },
  {
    name: "Mexico",
    tagline: "Where ancient wonders meet vibrant beaches and flavors that ignite the soul.",
    image: "https://i.natgeofe.com/n/bc4a1a44-9397-4f89-a3e2-662bd2603af2/28011.jpg",
    budget: "$50–150/day",
    bestTime: "Nov–Apr",
    visa: "180 days visa-free",
    places: [
      { name: "Chichén Itzá", desc: "Iconic Mayan pyramid and UNESCO site — one of the New Seven Wonders." },
      { name: "Mexico City", desc: "Bustling capital with Teotihuacán pyramids and vibrant culture." },
      { name: "Tulum", desc: "Cliffside Mayan ruins overlooking turquoise Caribbean beaches." },
      { name: "Oaxaca City", desc: "Colonial gem famed for markets, mezcal, and indigenous crafts." },
      { name: "Guanajuato", desc: "Colorful hill town with underground tunnels and UNESCO old town." }
    ],
    culture: [
      { title: "Greeting", text: "Handshake or cheek kiss (women). Say goodbye individually." },
      { title: "Closeness", text: "Stand close during conversations — personal space is smaller." },
      { title: "Dining", text: "'Buen provecho' before meals. Patience and politeness are valued." },
      { title: "Tipping", text: "10–15% at restaurants is expected." },
      { title: "Formality", text: "Use formal 'usted' initially with strangers." }
    ],
    tips: [
      { title: "Best Time", text: "November–April dry season for sun and minimal rain." },
      { title: "Budget", text: "$50–150 USD/day mid-range." },
      { title: "Visa", text: "EU citizens get 180 days visa-free." },
      { title: "Safety", text: "Stick to tourist areas. Use Uber at night. Don't flash valuables." }
    ],
    food: [
      { dish: "Tacos al Pastor", desc: "Spicy pork with pineapple on soft corn tortillas." },
      { dish: "Mole Poblano", desc: "Rich chili-chocolate sauce served over chicken." },
      { dish: "Cochinita Pibil", desc: "Yucatán slow-roasted pork wrapped in banana leaves." },
      { dish: "Churros", desc: "Sweet fried dough dusted with cinnamon sugar." }
    ],
    nightlife: "Mexico City's Roma/Condesa (rooftops, clubs), Cancún and Puerto Vallarta beach parties."
  },
  {
    name: "Greece",
    tagline: "Cradle of civilization, where ancient wonders meet sun-kissed islands.",
    image: "https://www.antoperla.com/blog/user/pages/01.home/13.santorini-blue-domes-churches/Santorini-Blue-Domes.jpg",
    budget: "$100–250/day",
    bestTime: "May–Jun / Sep–Oct",
    visa: "Free EU Schengen",
    places: [
      { name: "Athens Acropolis", desc: "Iconic ancient citadel with the Parthenon overlooking the city." },
      { name: "Santorini", desc: "Volcanic island with whitewashed cliffside villages and epic sunsets." },
      { name: "Meteora", desc: "UNESCO monasteries perched dramatically atop towering rock pillars." },
      { name: "Delphi", desc: "Ancient oracle sanctuary with mountain views and archaeological ruins." },
      { name: "Mykonos", desc: "Cosmopolitan island with chic beaches, windmills, and vibrant nightlife." }
    ],
    culture: [
      { title: "Greeting", text: "Firm handshake with eye contact. 'Kalimera' (good morning). Friends kiss both cheeks." },
      { title: "Hospitality", text: "Bring a small gift (sweets/wine) when invited to someone's home." },
      { title: "Pace", text: "'Siga siga' — slowly. Greeks value patience and enjoying the moment." },
      { title: "Tipping", text: "Not obligatory (service charge included), but 5–10% cash is appreciated." },
      { title: "Gestures", text: "Avoid palm-out gesture — it's offensive. Use words for yes/no instead of nodding." }
    ],
    tips: [
      { title: "Best Time", text: "Late spring (May–Jun) or fall (Sep–Oct) for mild weather and fewer crowds." },
      { title: "Budget", text: "$100–250 USD/day per person, budget to mid-range." },
      { title: "Visa", text: "EU citizens: free movement within Schengen, no visa needed." },
      { title: "Safety", text: "Very safe. Watch for pickpockets in tourist areas and Athens metro." }
    ],
    food: [
      { dish: "Souvlaki", desc: "Grilled meat skewers in pita with tzatziki — the Greek staple." },
      { dish: "Moussaka", desc: "Layered eggplant, potato, and minced meat casserole with béchamel." },
      { dish: "Tzatziki", desc: "Creamy yogurt dip with cucumber, garlic, and dill." },
      { dish: "Grilled Octopus", desc: "Tender, smoky seafood straight from the sea." }
    ],
    nightlife: "Mykonos beach clubs (Cavo Paradiso), Athens rooftop bars in Psyrri, Zante's Laganas clubs."
  },
  {
    name: "Portugal",
    tagline: "Where sun-kissed beaches meet timeless wonders and warm-hearted people.",
    image: "https://www.thewanderinglens.com/wp-content/uploads/2023/11/2023-portugal-photography-jbaaske-lisboa-1M9A6231.jpg",
    budget: "$100–200/day",
    bestTime: "Apr–Jun / Sep–Oct",
    visa: "Free EU travel",
    places: [
      { name: "Lisbon", desc: "Vibrant capital with historic trams, castles, and waterfront views." },
      { name: "Porto", desc: "Romantic riverside city famous for port wine and colorful Ribeira." },
      { name: "Sintra", desc: "Fairy-tale palaces like Pena Palace nestled in misty hills." },
      { name: "Algarve", desc: "Stunning cliffs, golden beaches, and sea caves like Benagil." },
      { name: "Douro Valley", desc: "UNESCO terraced vineyards with wine tasting and river cruises." }
    ],
    culture: [
      { title: "Greeting", text: "Handshake formal; two kisses (right-left) for friends. 'Bom dia'." },
      { title: "Pace", text: "Relaxed punctuality. Long goodbyes are normal and expected." },
      { title: "Language", text: "Never speak Spanish to a Portuguese person — they're distinct cultures." },
      { title: "Tipping", text: "5–10% optional. Round up the bill for good service." },
      { title: "Gifts", text: "Bring flowers or sweets when visiting someone's home." }
    ],
    tips: [
      { title: "Best Time", text: "Spring or fall for mild weather and fewer crowds." },
      { title: "Budget", text: "$100–200 USD/day mid-range." },
      { title: "Visa", text: "EU citizens: none needed, 3 months with ID or passport." },
      { title: "Safety", text: "Very safe overall. Pickpockets in Lisbon tourist spots." }
    ],
    food: [
      { dish: "Pastéis de Nata", desc: "Iconic custard tarts with caramelized tops — try them in Belém." },
      { dish: "Bacalhau", desc: "Salted cod prepared in over 365 traditional recipes." },
      { dish: "Francesinha", desc: "Porto's legendary meaty sandwich covered in cheese and beer sauce." },
      { dish: "Sardinhas Assadas", desc: "Grilled sardines — a summer tradition, especially in June." }
    ],
    nightlife: "Lisbon's Bairro Alto and Cais do Sodré, Porto's Ribeira, Algarve's Albufeira strip."
  }
];

// DOM refs
const grid = document.getElementById('countriesGrid');
const overlay = document.getElementById('detailOverlay');
const panel = document.getElementById('detailPanel');
const closeBtn = document.getElementById('closeDetail');
const detailBody = document.getElementById('detailBody');
const detailImg = document.getElementById('detailHeroImg');
const detailLabel = document.getElementById('detailCountryLabel');

// Theme toggle
const themeToggle = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;

function getTheme() {
  return root.getAttribute('data-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  if (!themeToggle) return;
  themeToggle.innerHTML = theme === 'dark'
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// Init theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme);
else updateThemeIcon(getTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

// Render country cards
function renderCards() {
  grid.innerHTML = countries.map((c, i) => `
    <article class="country-card" data-index="${i}" role="button" tabindex="0"
      aria-label="Explore ${c.name}">
      <img class="card-image" src="${c.image}" alt="${c.name}" loading="lazy" decoding="async">
      <div class="card-content">
        <h2 class="card-country-name">${c.name}</h2>
        <p class="card-tagline">${c.tagline}</p>
        <div class="card-meta">
          <span class="card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${c.bestTime}
          </span>
          <span class="card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            ${c.budget}
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click + keyboard events
  grid.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => openDetail(+card.dataset.index));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(+card.dataset.index); }
    });
  });
}

// Open detail panel
function openDetail(index) {
  const c = countries[index];
  detailImg.src = c.image;
  detailImg.alt = c.name;
  detailLabel.textContent = c.name;

  detailBody.innerHTML = `
    <h2 class="detail-country-name">${c.name}</h2>
    <p class="detail-tagline">${c.tagline}</p>

    <div class="quick-stats">
      <div class="stat-card">
        <div class="stat-label">Best Time</div>
        <div class="stat-value">${c.bestTime}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Daily Budget</div>
        <div class="stat-value">${c.budget}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Visa</div>
        <div class="stat-value" style="font-size:var(--text-sm);">${c.visa}</div>
      </div>
    </div>

    <nav class="detail-tabs" role="tablist">
      <button class="detail-tab active" role="tab" data-tab="places">📍 Places</button>
      <button class="detail-tab" role="tab" data-tab="culture">🎭 Culture</button>
      <button class="detail-tab" role="tab" data-tab="tips">💡 Tips</button>
      <button class="detail-tab" role="tab" data-tab="food">🍽️ Food</button>
      <button class="detail-tab" role="tab" data-tab="nightlife">🌙 Nightlife</button>
    </nav>

    <div class="tab-content active" data-panel="places">
      ${c.places.map(p => `
        <div class="info-card">
          <div class="info-card-header">
            <div class="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="info-card-title">${p.name}</h3>
          </div>
          <p>${p.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="tab-content" data-panel="culture">
      <div class="info-card">
        <ul>
          ${c.culture.map(item => `<li><strong>${item.title}:</strong> ${item.text}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="tab-content" data-panel="tips">
      ${c.tips.map(t => `
        <div class="info-card">
          <div class="info-card-header">
            <div class="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 class="info-card-title">${t.title}</h3>
          </div>
          <p>${t.text}</p>
        </div>
      `).join('')}
    </div>

    <div class="tab-content" data-panel="food">
      ${c.food.map(f => `
        <div class="info-card">
          <div class="info-card-header">
            <div class="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            </div>
            <h3 class="info-card-title">${f.dish}</h3>
          </div>
          <p>${f.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="tab-content" data-panel="nightlife">
      <div class="info-card">
        <div class="info-card-header">
          <div class="info-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </div>
          <h3 class="info-card-title">Nightlife</h3>
        </div>
        <p>${c.nightlife}</p>
      </div>
    </div>
  `;

  // Tab switching
  detailBody.querySelectorAll('.detail-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      detailBody.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
      detailBody.querySelectorAll('.tab-content').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      detailBody.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add('active');
    });
  });

  overlay.classList.add('active');
  panel.classList.add('active');
  document.body.style.overflow = 'hidden';
  panel.scrollTop = 0;
}

// Close detail
function closeDetail() {
  overlay.classList.remove('active');
  panel.classList.remove('active');
  document.body.style.overflow = '';
}

function showHome() {
  closeDetail();
}

closeBtn.addEventListener('click', closeDetail);
overlay.addEventListener('click', closeDetail);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});

// Init
renderCards();
