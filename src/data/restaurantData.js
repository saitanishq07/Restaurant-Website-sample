// EMBER & SPICE - Brand & Menu Dataset
// Contemporary Indian Fine Dining in Jubilee Hills, Hyderabad

export const RESTAURANT_INFO = {
  name: "EMBER & SPICE",
  tagline: "Fire. Flavor. Stories.",
  category: "Contemporary Indian Fine Dining",
  address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
  phone: "+91 90000 00000",
  email: "hello@emberandspice.example",
  whatsapp: "+919000000000",
  city: "Hyderabad, India",
  instagram: "@emberandspice",
  googleMapsUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
  hours: [
    { days: "Tuesday – Thursday", lunch: "12:30 PM – 3:30 PM", dinner: "7:00 PM – 11:00 PM" },
    { days: "Friday – Sunday", lunch: "12:30 PM – 4:00 PM", dinner: "7:00 PM – 11:30 PM" },
    { days: "Monday", text: "Closed for Culinary Research & Preparation" }
  ],
  closingNote: "Kitchen closes 30 minutes before restaurant closing.",
  parking: "Valet parking available at private dining entrance.",
  nearbyLandmarks: ["Durgam Cheruvu Cable Bridge", "Peddamma Temple Road", "Road No. 36 Metro Station"]
};

export const MENU_CATEGORIES = [
  { id: "ALL", label: "ALL" },
  { id: "SMALL PLATES", label: "SMALL PLATES" },
  { id: "FROM THE FIRE", label: "FROM THE FIRE" },
  { id: "MAINS", label: "MAINS" },
  { id: "VEGETARIAN", label: "VEGETARIAN" },
  { id: "DESSERTS", label: "DESSERTS" },
  { id: "DRINKS", label: "DRINKS" }
];

export const MENU_ITEMS = [
  {
    id: "dish-1",
    name: "Coal-Roasted Paneer Tikka",
    category: "FROM THE FIRE",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 745,
    description: "Artisanal cottage cheese cubes marinated in yellow chilli paste, hung curd, and mustard oil, flame-charred over wood coals with sweet bell peppers and onions.",
    ingredients: ["House-made Malai Paneer", "Yellow Chilli Paste", "Hung Curd", "Charred Peppers & Shallots", "Curry Leaf Butter"],
    flavorNotes: "Velvety cheese texture with smoky char and warm spice aroma.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=1000",
    prepTime: "16 mins"
  },
  {
    id: "dish-2",
    name: "Malabar Pepper Prawn Curry",
    category: "SMALL PLATES",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 895,
    description: "Bay of Bengal jumbo tiger prawns seared over charcoal embers, simmered in a rich crushed Tellicherry black pepper, roasted coconut, and curry leaf gravy.",
    ingredients: ["Bay of Bengal Tiger Prawns", "Tellicherry Black Peppercorn", "Roasted Coconut Reduction", "Desi Ghee", "Curry Leaves"],
    flavorNotes: "Bold black pepper heat balanced by caramelized coconut sweetness.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000",
    prepTime: "18 mins"
  },
  {
    id: "dish-3",
    name: "Ember Smoked Lamb Chops",
    category: "FROM THE FIRE",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 1250,
    description: "Slow-marinated Telangana lamb chops, wood-smoked over applewood embers with Mathania chilli rub, served with fresh mint jus and pickled onions.",
    ingredients: ["Grass-fed Lamb Chops", "Mathania Smoked Chilli", "Applewood Smoke", "Raw Mint Jus", "Pickled Shallots"],
    flavorNotes: "Deeply smoky, tender meat with a fragrant chilli kick and cooling mint.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
    prepTime: "22 mins"
  },
  {
    id: "dish-4",
    name: "Sigri Smoked Chicken Tikka",
    category: "FROM THE FIRE",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: false,
    price: 925,
    description: "Tender chicken thighs cured in hung yogurt, smoked mace, and green cardamom, skewered and grilled over live sigri charcoal.",
    ingredients: ["Free-range Chicken Thigh", "Smoked Mace (Javitri)", "Green Cardamom", "Charred Garlic Butter", "Anardana Glaze"],
    flavorNotes: "Succulent, aromatic, with a subtle tangy pomegranate finish.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000",
    prepTime: "20 mins"
  },
  {
    id: "dish-5",
    name: "Fire-Roasted Black Dal Makhani",
    category: "MAINS",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 695,
    description: "Whole black urad lentils slow-cooked for 18 hours over dying tandoor embers with vine-ripened tomato reduction, cultured white butter, and fenugreek cream.",
    ingredients: ["Black Urad Lentils", "Cultured White Butter", "San Marzano Tomatoes", "Kasoori Methi Dust", "Smoked Cream"],
    flavorNotes: "Silky, dark, rich with authentic clay-pot smoke background.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000",
    prepTime: "15 mins"
  },
  {
    id: "dish-6",
    name: "Hyderabadi Saffron Dum Biryani",
    category: "MAINS",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 1150,
    description: "Aged long-grain Basmati rice dum-cooked under dough seal with marinated spiced meat, Kashmiri saffron strands, caramelized onions, and mint leaves.",
    ingredients: ["Aged Basmati Rice", "Kashmiri Mongra Saffron", "Caramelized Birista Onions", "Mint & Cilantro", "Rose Water Glaze"],
    flavorNotes: "Intensely aromatic, layered with delicate herbal spices.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1000",
    prepTime: "25 mins"
  },
  {
    id: "dish-7",
    name: "Ember Velvet Butter Chicken",
    category: "MAINS",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: false,
    price: 975,
    description: "Charcoal-smoked tandoori chicken pieces simmered in a velvety tomato, cashew, and honey butter sauce finished with sun-dried fenugreek.",
    ingredients: ["Tandoori Smoked Chicken", "San Marzano Tomato Puree", "Cashew Paste", "Honey", "Hand-churned Butter"],
    flavorNotes: "Creamy, mildly sweet with a rich tomato depth.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1000",
    prepTime: "20 mins"
  },
  {
    id: "dish-8",
    name: "Truffle & Cheese Stuffed Kulcha",
    category: "SMALL PLATES",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isChefSpecial: true,
    price: 525,
    description: "Hand-stretched refined wheat bread stuffed with sharp aged cheddar, green chillies, and fresh herbs, baked in clay tandoor and brushed with truffle ghee.",
    ingredients: ["Refined Wheat Dough", "Aged Cheddar & Mozzarella", "Black Truffle Oil", "Fresh Coriander", "Desi Ghee"],
    flavorNotes: "Crisp crust, gooey molten cheese center with earthy truffle aroma.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000",
    prepTime: "12 mins"
  },
  {
    id: "dish-9",
    name: "Shahi Kadhai Paneer",
    category: "VEGETARIAN",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: false,
    price: 795,
    description: "Fresh cottage cheese cubes sauteed in a brass wok with pounded coriander seeds, red Mathania chillies, charred capsicum, and chunky tomato gravy.",
    ingredients: ["Fresh Malai Paneer", "Pounded Coriander & Cumin", "Mathania Red Chilli", "Charred Capsicum", "Tomato Onion Gravy"],
    flavorNotes: "Robust, chunky texture with fresh roasted spice notes.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=1000",
    prepTime: "18 mins"
  },
  {
    id: "dish-10",
    name: "Smoked Guava Clove Old Fashioned",
    category: "DRINKS",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 650,
    description: "Artisanal pink guava nectar smoked live with clove wood, blended with spiced aromatic bitters, botanical extracts, and a chilli-salt ice sphere.",
    ingredients: ["Pink Guava Nectar", "Clove Smoke Infusion", "Chilli Rock Salt", "Angostura Bitters", "Charred Cinnamon Bark"],
    flavorNotes: "Sweet tropical fruit layered with woody smoke and spicy rim edge.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
    prepTime: "8 mins"
  },
  {
    id: "dish-11",
    name: "Kashmiri Saffron Botanical Spritz",
    category: "DRINKS",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isChefSpecial: false,
    price: 495,
    description: "Cold-pressed young coconut water infused with Kashmiri saffron strands, green cardamom distillate, fresh lime juice, and Thai basil seeds.",
    ingredients: ["Fresh Young Coconut Water", "Kashmiri Mongra Saffron", "Green Cardamom", "Thai Basil Seeds", "Lime Juice"],
    flavorNotes: "Ultra-refreshing, botanical, delicately perfumed floral notes.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000",
    prepTime: "5 mins"
  },
  {
    id: "dish-12",
    name: "Smoked Chilli & Dark Chocolate Tart",
    category: "DESSERTS",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isChefSpecial: true,
    price: 525,
    description: "70% Single-origin Valrhona dark chocolate ganache tart infused with a whisper of smoked Mathania chilli, Maldon sea salt flakes, and espresso gelato.",
    ingredients: ["70% Valrhona Dark Chocolate", "Mathania Chilli Infusion", "Maldon Sea Salt", "Espresso Gelato", "Cocoa Nib Crust"],
    flavorNotes: "Intense cocoa depth with a surprising warm ember finish.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1000",
    prepTime: "12 mins"
  },
  {
    id: "dish-13",
    name: "Saffron Tres Leches & Rose Petals",
    category: "DESSERTS",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isChefSpecial: true,
    price: 495,
    description: "Kashmiri saffron milk-soaked sponge cake topped with crushed Iranian pistachios, edible silver leaf, and handcrafted rose petal preserve.",
    ingredients: ["Kashmiri Mongra Saffron", "Condensed Three-Milk Reduction", "Iranian Green Pistachios", "Organic Damask Rose", "Chantilly Cream"],
    flavorNotes: "Richly aromatic, silky, floral notes paired with crunchy nut texture.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1000",
    prepTime: "10 mins"
  },
  {
    id: "dish-14",
    name: "Deccan Slow-Cooked Nihari Curry",
    category: "MAINS",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    price: 1195,
    description: "12-hour slow-simmered lamb shank broth infused with nutmeg, vetiver root, and roasted spices, served with fresh ginger juliennes and lemon wedge.",
    ingredients: ["Prime Lamb Shank", "Deccani Spice Medley", "Vetiver Root", "Crispy Ginger Juliennes", "Saffron Ghee"],
    flavorNotes: "Deeply savory, melt-in-the-mouth lamb with complex warm spices.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=1000",
    prepTime: "25 mins"
  }
];

export const CHEF_INFO = {
  name: "Arjun Rao",
  title: "Executive Chef & Founder",
  bio: "Chef Arjun Rao brings together regional Indian culinary traditions, open-fire wood cooking, and modern technical precision. Having trained in Michelin-starred kitchens in London and New Delhi, he returned to Hyderabad to create Ember & Spice.",
  philosophy: "Respect the ingredient. Let the fire speak.",
  highlights: [
    "20+ years mastering live-fire wood cooking techniques across India and Southern Europe.",
    "Pioneered regional ingredient revival through direct partnerships with Telangana organic farms.",
    "Featured in International Culinary Forum as Champion of Modern Indian Gastronomy."
  ],
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000"
};

export const EXPERIENCES = [
  {
    id: "alacarte",
    title: "À La Carte Dining",
    subtitle: "Explore the seasonal menu",
    description: "Our main dining room invites guests on an individual journey through regional Indian flavors, wood-charred small plates, and inventive cocktails.",
    features: ["Seasonal Menu Rotation", "Indoor & Courtyard Seating", "Cocktail Pairing Suggestions", "Flexible Group Dining"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "chefstable",
    title: "The Chef's Table",
    subtitle: "An intimate multi-course culinary performance",
    description: "Directly overlooking Chef Arjun Rao's hearth grill, enjoy a 7-course curated tasting menu crafted live before your eyes with sommelier wine pairings.",
    features: ["7-Course Seasonal Tasting Menu", "Exclusive 8-Seat Hearth Counter", "Sommelier Wine & Cocktail Pairing", "Chef-Led Storytelling"],
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "privatedining",
    title: "Private Dining Suite",
    subtitle: "Celebrate in an intimate, bespoke setting",
    description: "Designed for corporate gatherings, intimate anniversaries, and family celebrations with custom menu design, private service staff, and dedicated entrance.",
    features: ["Up to 18 Guests", "Customized Menu & Wine Selection", "Private Sommelier & Butler", "Dedicated Sound & Ambient Lighting Controls"],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
  }
];

export const EVENTS = [
  {
    id: "event-1",
    title: "EMBER NIGHTS",
    tagline: "A seasonal chef collaboration",
    date: "OCTOBER 18, 2026",
    time: "7:30 PM ONWARDS",
    description: "An exclusive one-night four-hands dinner featuring Guest Chef Maya Sen. 6 courses pairing Coastal Malabar seafood with Ember & Spice's signature hearth smoke.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "event-2",
    title: "SUNDAY TABLE",
    tagline: "Long-format family dining experience",
    date: "EVERY SUNDAY",
    time: "12:30 PM – 4:00 PM",
    description: "A leisurely slow-paced lunch celebrating heirloom recipes, sharing platters, artisanal breads, and free-flowing botanical spritzes in our courtyard.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "event-3",
    title: "FIRE & SPICE",
    tagline: "An open-fire tasting evening",
    date: "NOVEMBER 05, 2026",
    time: "8:00 PM ONWARDS",
    description: "Immerse in live flame cooking workshops, rare Single Malt whisky tastings, and flame-carved cuts under the stars.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1000"
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: "2019",
    title: "The Idea",
    description: "Chef Arjun Rao began researching traditional wood-fire cooking techniques across 14 Indian states, gathering heirloom spice varieties and forgotten smoking Woods."
  },
  {
    year: "2021",
    title: "First Kitchen",
    description: "A pop-up research laboratory was established in Hyderabad to master charcoal thermodynamics, fermentations, and modern ingredient extractions."
  },
  {
    year: "2024",
    title: "Ember & Spice Opens",
    description: "Our flagship dining room opened in Jubilee Hills, featuring custom-designed live hearths, handcrafted brass cookware, and 45 indoor & garden seats."
  },
  {
    year: "2026",
    title: "A New Chapter",
    description: "Unveiling our revamped Chef's Table counter and expanding our organic farm-to-table initiative with local Telangana soil cultivators."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    category: "FOOD",
    title: "Ember Smoked Lamb Chops",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    caption: "Slow-marinated lamb chops seared over applewood coals."
  },
  {
    id: "g2",
    category: "INTERIORS",
    title: "Main Dining Room Ambient Lighting",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    caption: "Deep charcoal tones with custom bronze accent lamps and solid teak tables."
  },
  {
    id: "g3",
    category: "CHEF",
    title: "Chef Arjun Plating at the Hearth",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200",
    caption: "Every plate receives final finishing touches over open coals."
  },
  {
    id: "g4",
    category: "FOOD",
    title: "Malabar Pepper Prawn Curry",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1200",
    caption: "Tiger prawns tossed in crushed Tellicherry peppercorn."
  },
  {
    id: "g5",
    category: "EXPERIENCE",
    title: "Private Dining Wine Pairing",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
    caption: "Bespoke wine selections tailored to each private course."
  },
  {
    id: "g6",
    category: "FOOD",
    title: "Smoked Guava Old Fashioned",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    caption: "Artisanal cocktail smoked with clove wood."
  },
  {
    id: "g7",
    category: "INTERIORS",
    title: "The Open Flame Hearth Kitchen",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200",
    caption: "Custom brass hearth grill built to maintain 600°F ember heat."
  },
  {
    id: "g8",
    category: "FOOD",
    title: "Saffron Tres Leches & Rose Petals",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1200",
    caption: "Kashmiri saffron milk cake with rose petals and pistachios."
  }
];

export const INSTAGRAM_TILES = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    caption: "Smoke, spice and precision. The Ember Lamb Chops.",
    likes: "1,420"
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
    caption: "Warm light, dark charcoal, quiet conversations.",
    likes: "980"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600",
    caption: "Tellicherry pepper meets Bay of Bengal prawns.",
    likes: "2,150"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
    caption: "Clove wood smoke infused live at your table.",
    likes: "1,870"
  },
  {
    id: "ig-5",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600",
    caption: "Behind the hearth with Chef Arjun Rao.",
    likes: "3,010"
  },
  {
    id: "ig-6",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600",
    caption: "A sweet ending wrapped in Kashmiri Saffron.",
    likes: "1,640"
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "The food is familiar, unexpected and completely unforgettable. Ember & Spice has redefined fine dining in Hyderabad.",
    author: "Ananya Mehta",
    title: "Food & Wine Critic"
  },
  {
    id: "t2",
    quote: "The Chef's Table experience is a masterclass in fire thermodynamics. Every course carries a story of tradition elevated.",
    author: "Karan Johar",
    title: "Gastronomy Enthusiast"
  },
  {
    id: "t3",
    quote: "An atmosphere of dark luxury and quiet confidence. The Smoked Guava Old Fashioned alone is worth the reservation.",
    author: "Devika Nair",
    title: "Design & Lifestyle Editor"
  }
];
