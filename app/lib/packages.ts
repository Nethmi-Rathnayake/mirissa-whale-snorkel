export type IconKey = "vessel" | "clock" | "card" | "pin";

export type SidebarFact = {
  id: string;
  label: string;
  icon: IconKey;
  value: string;
};

export type PriceInfo =
  | {
      kind: "tiered";
      tiers: { persons: string; price: number }[];
      note: string;
    }
  | {
      kind: "flat";
      price: number;
      unit: string;
      note?: string;
    };

export type PackageSection = {
  id: string;
  title: string;
  kind: "paragraph" | "list" | "chips";
  body?: string;
  items?: string[];
  defaultOpen?: boolean;
  cta?: { label: string; href: string };
};

export type TourPackage = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  popular: boolean;
  cardImage: string;
  cardImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo?: string;
  price: PriceInfo;
  sidebarFacts: SidebarFact[];
  sections: PackageSection[];
  topics: { label: string; anchor: string }[];
  videos?: { src: string; label: string }[];
};

const PAYMENTS_TEXT =
  "Sri Lankan Rupees (LKR), US Dollars (USD), and card payments are all accepted.";

const HOTEL_PICKUP_TEXT =
  "Free hotel pickup and drop-off from nearby areas such as Mirissa.";

export const packages: TourPackage[] = [
  {
    slug: "whale-snorkeling",
    name: "Whale Snorkeling",
    tagline:
      "Slip into the water and swim alongside gentle giants in their natural habitat.",
    description:
      "Our signature in-water encounter pairs a scenic boat cruise with a respectful, guided snorkel alongside blue and sperm whales. Small groups and calm, careful entries mean more time watching and less time waiting.",
    popular: false,
    cardImage: "/images/whale-snorkelers-pair-blue-whales.png",
    cardImageAlt: "A snorkeler swimming alongside two blue whales underwater",
    heroImage: "/images/whale-snorkeling-group-blue-whale.png",
    heroImageAlt: "A group of snorkelers swimming beside a massive blue whale underwater",
    heroVideo: "/videos/whale-snorkeling-hero.mp4",
    videos: [
      { src: "/videos/whale-snorkeling-clip-1.mp4", label: "In the Water with Whales" },
      { src: "/videos/whale-snorkeling-clip-2.mp4", label: "Snorkeling Alongside Giants" },
      { src: "/videos/whale-snorkeling-clip-3.mp4", label: "A Close Encounter" },
      { src: "/videos/whale-snorkeling-clip-4.mp4", label: "Whale Snorkeling Highlights" },
      { src: "/videos/whale-snorkeling-clip-5.mp4", label: "Guided by Our Crew" },
    ],
    price: {
      kind: "tiered",
      tiers: [
        { persons: "2 Persons", price: 250 },
        { persons: "3 Persons", price: 325 },
        { persons: "4 Persons", price: 400 },
      ],
      note: "Private boat charters are also available on request, with rates varying by group size and itinerary.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value:
          "Free tuk-tuk or taxi pickup and drop-off from nearby hotels in Mirissa and the surrounding area.",
      },
      {
        id: "start-time",
        label: "Start Time",
        icon: "clock",
        value:
          "Departs approximately 5:30–6:30 AM, returning around 11:30 AM–1:00 PM. The trip generally runs 4–5 hours depending on whale location, weather and sea conditions.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "guest-info",
        title: "Meeting & Guest Information",
        kind: "paragraph",
        defaultOpen: true,
        body: "Welcome aboard! You'll be accompanied by professional guides with years of ocean and whale-behaviour experience, so you can relax and enjoy the encounter while staying safe in the water. Spaces are limited to keep every group small and personal.",
        cta: { label: "Book Your Spot", href: "#price" },
      },
      {
        id: "best-season",
        title: "Best Season & Safety Rules",
        kind: "paragraph",
        body: "November to April is the main whale season in Mirissa, with February to April offering the best underwater visibility for snorkeling. To keep both you and the whales safe, please maintain a distance of at least 15–20 metres, stay calm and quiet in the water, and never touch or chase the whales.",
      },
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        items: [
          "Snorkeling equipment",
          "Life jackets",
          "Boat and fuel",
          "Experienced captain and crew",
          "Professional guide / instructor",
          "Breakfast & snacks",
          "Fresh fruit",
          "Drinking water, tea & coffee",
          "First-aid equipment",
          "GoPro underwater photography & video",
          "Hotel-to-boat transportation",
        ],
      },
      {
        id: "species",
        title: "Whale Species You May See",
        kind: "chips",
        items: [
          "Blue Whale",
          "Sperm Whale",
          "Fin Whale",
          "Bryde's Whale",
          "Occasional Humpback Whale",
          "Spinner Dolphin",
          "Bottlenose Dolphin",
          "Risso's Dolphin",
        ],
      },
      {
        id: "what-to-bring",
        title: "What to Bring",
        kind: "list",
        items: [
          "Swimsuit or rash guard",
          "Extra clothes",
          "Towel",
          "Reef-safe sunscreen",
          "Sunglasses & a hat",
          "Motion-sickness medication, if needed",
          "GoPro or waterproof camera",
          "Waterproof phone wallet or bag",
          "Your own snorkeling equipment, if preferred",
          "A copy or digital version of your passport or national ID",
        ],
      },
      {
        id: "sighting-guaranteed",
        title: "Is Whale Sighting Guaranteed?",
        kind: "paragraph",
        body: "Whales are wild animals, so no sighting can ever be 100% guaranteed. That said, during the appropriate season our sighting success rate is generally very high. November to April is the recommended season, and December to March is especially reliable.",
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Meeting & Guest Info", anchor: "guest-info" },
      { label: "Best Season & Safety Rules", anchor: "best-season" },
      { label: "What's Included", anchor: "included" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Start Time", anchor: "start-time" },
      { label: "Whale Species You May See", anchor: "species" },
      { label: "What to Bring", anchor: "what-to-bring" },
      { label: "Is Whale Sighting Guaranteed?", anchor: "sighting-guaranteed" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "whale-watching",
    name: "Whale Watching Tour",
    tagline:
      "Our flagship boat tour — watch whales surface, blow and dive from the comfort of the deck.",
    description:
      "No swimming required. Cruise out from Mirissa Fisheries Harbour in a small group and watch for blows, breaches and fins as we follow marine park guidelines every step of the way.",
    popular: true,
    cardImage: "/images/blue-whale-spouting.png",
    cardImageAlt: "A blue whale surfacing and spouting near the boat",
    heroImage: "/images/turtle-snorkeler-boy.png",
    heroImageAlt: "A child snorkeling over a shallow reef",
    price: {
      kind: "flat",
      price: 45,
      unit: "USD per person",
      note: "Children under 5 years travel free.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value: HOTEL_PICKUP_TEXT,
      },
      {
        id: "tour-details",
        label: "Tour Details",
        icon: "clock",
        value:
          "Departs from Mirissa Fisheries Harbour between 6:00–6:30 AM — please arrive by 5:30 AM. Tours run approximately 3–5 hours.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        defaultOpen: true,
        items: [
          "Wildlife & port fees",
          "Marine park permits",
          "Breakfast box or sandwich",
          "Fresh fruit",
          "Drinking water",
          "Tea & coffee",
          "Approved life jackets",
        ],
      },
      {
        id: "foreign-visitors",
        title: "Important Information for Foreign Visitors",
        kind: "paragraph",
        body: "Please carry your original passport or a passport copy for port inspection. Payments can be made in USD or Sri Lankan Rupees, with card payments accepted where available. We recommend booking in advance, especially between October and April.",
      },
      {
        id: "best-season",
        title: "Best Season",
        kind: "paragraph",
        body: "November to April is the best time to go, when the sea is generally calmer and whale sightings are highly likely. Between May and October, the southwest monsoon can bring rougher seas.",
      },
      {
        id: "species",
        title: "Animals You May See",
        kind: "chips",
        items: [
          "Blue Whale",
          "Sperm Whale",
          "Fin Whale",
          "Bryde's Whale",
          "Spinner Dolphin",
          "Bottlenose Dolphin",
          "Striped Dolphin",
          "Seabirds",
          "Flying Fish",
          "Occasional Sea Turtle",
        ],
      },
      {
        id: "tips",
        title: "Important Tips",
        kind: "list",
        items: [
          "Take precautions for seasickness before boarding",
          "Wear light, comfortable clothing",
          "Use reef-safe sunscreen and sunglasses",
          "Protect phones & cameras in a waterproof bag",
          "Follow all wildlife-safety regulations",
          "Never feed marine animals",
          "Do not enter the water during the tour",
        ],
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "What's Included", anchor: "included" },
      { label: "Info for Foreign Visitors", anchor: "foreign-visitors" },
      { label: "Best Season", anchor: "best-season" },
      { label: "Animals You May See", anchor: "species" },
      { label: "Tour Details", anchor: "tour-details" },
      { label: "Important Tips", anchor: "tips" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "dolphin-watching",
    name: "Dolphin Watching Tour",
    tagline:
      "Watch playful spinner and bottlenose dolphins ride the bow in Mirissa's morning waters.",
    description:
      "Large pods of dolphins are a near-daily sight on our morning boat trips. We follow them at a respectful distance from the deck — no swimming required — on the same comfortable catamaran as our Whale Watching Tour.",
    popular: false,
    cardImage: "/images/dolphin-pod-leaping.png",
    cardImageAlt: "A large pod of dolphins leaping together above the waves",
    heroImage: "/images/dolphin-pod-underwater.png",
    heroImageAlt: "A pod of dolphins swimming together underwater",
    price: {
      kind: "flat",
      price: 45,
      unit: "USD per person",
      note: "Children under 5 years travel free. This experience uses the same boat, schedule and pricing structure as our Whale Watching Tour.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value: HOTEL_PICKUP_TEXT,
      },
      {
        id: "tour-info",
        label: "Tour Info",
        icon: "clock",
        value:
          "Boats usually depart from Mirissa around 6:00–6:30 AM. Best season is October to April, when sea conditions are generally calmer.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "species",
        title: "Dolphin Species",
        kind: "chips",
        defaultOpen: true,
        items: ["Spinner Dolphin", "Bottlenose Dolphin", "Striped Dolphin"],
      },
      {
        id: "tour-information",
        title: "Tour Information",
        kind: "paragraph",
        body: "The best season to see dolphins is October to April, when the sea is generally calmer. Boats usually depart from Mirissa Fisheries Harbour around 6:00–6:30 AM.",
      },
      {
        id: "special-tip",
        title: "Special Tip",
        kind: "paragraph",
        body: "For the best chance of a close encounter, ask to stand near the bow (front) of the boat — dolphins love riding the wake there.",
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Dolphin Species", anchor: "species" },
      { label: "Tour Information", anchor: "tour-information" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Payments", anchor: "payments" },
      { label: "Special Tip", anchor: "special-tip" },
    ],
  },
  {
    slug: "fun-diving",
    name: "Fun Diving",
    tagline:
      "Two-tank boat dives, night dives and refreshers for certified divers exploring Mirissa's reefs and rock pinnacles.",
    description:
      "For certified divers who just want to get in the water, our Fun Diving trips run daily from Mirissa's dive centers — single dives, two-tank morning trips, night dives and refresher sessions are all available, with full rental gear and a PADI/SSI divemaster on every trip.",
    popular: false,
    cardImage: "/images/fun-diving-turtle-encounter.png",
    cardImageAlt: "A diver swimming toward a hawksbill turtle over the reef",
    heroImage: "/images/fun-diving-diver-anemone-clownfish-selfie.png",
    heroImageAlt: "A diver posing beside a fellow diver, framed by coral, anemone and clownfish",
    videos: [
      { src: "/videos/fun-diving-clip-1.mp4", label: "Reef Dive Highlights" },
      { src: "/videos/fun-diving-clip-2.mp4", label: "Exploring the Reef" },
      { src: "/videos/fun-diving-clip-3.mp4", label: "Diving with the Crew" },
      { src: "/videos/fun-diving-clip-4.mp4", label: "Underwater Moments" },
      { src: "/videos/fun-diving-clip-5.mp4", label: "Reef Life Up Close" },
      { src: "/videos/fun-diving-clip-6.mp4", label: "A Day of Fun Diving" },
    ],
    price: {
      kind: "flat",
      price: 45,
      unit: "USD per single dive",
      note: "2-tank morning dives ($70), night dives ($65) and refresher + 1 dive packages ($55) are also available — see Pricing Options below. Discounts apply when booking 4 or more dives at once.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value:
          "Boat transfers to and from the dive site are included. Hotel pickup can be arranged with select dive centers for a small fee.",
      },
      {
        id: "start-time",
        label: "Dive Schedule",
        icon: "clock",
        value:
          "Two-tank trips run approximately 7:30 AM–12:30 PM; night dives depart around 5:30 PM. Please report at least 30 minutes before departure.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "pricing-options",
        title: "Pricing Options",
        kind: "list",
        defaultOpen: true,
        items: [
          "Single Dive – $45",
          "2-Tank Dives (Morning) – $70",
          "Night Dive – $65",
          "Refresher + 1 Dive – $55",
        ],
      },
      {
        id: "requirements",
        title: "Certification & Requirements",
        kind: "list",
        items: [
          "Valid PADI, SSI, NAUI, CMAS or other recognized certification card (Open Water or higher)",
          "Dive logbook showing your recent experience",
          "Passport or national ID for registration",
          "A completed medical form confirming you're fit to dive",
        ],
      },
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        items: [
          "Boat rides to and from the dive site",
          "Two-tank dives on standard day trips",
          "Dive guide (certified PADI/SSI Divemaster or Instructor)",
          "Dive briefing on site conditions and safety",
          "Full rental gear — BCD, regulator, wetsuit, mask & snorkel, fins",
          "Tanks and weight belts",
          "Waterside refreshments (fruit, biscuits, tea/coffee or water) between dives",
          "Toilets, showers, equipment wash and lockers at the dive center",
          "Logbook stamping at the end of the dive",
        ],
      },
      {
        id: "extras",
        title: "Optional Extras",
        kind: "list",
        items: [
          "GoPro / photo rental – $15–20 per day",
          "Dive computer rental – $5–10",
          "10–15% discount at some centers if you bring your own basic gear (BCD, regulator, wetsuit)",
        ],
      },
      {
        id: "dive-sites",
        title: "Popular Dive Sites",
        kind: "list",
        items: [
          "Mirissa Point (6–25 m) – suitable for beginners and experienced divers alike; turtles, colorful corals and reef fish, also popular for night diving",
          "Bridge Rock (~18 m) – large rocky reefs with lionfish, moray eels and small barracuda schools",
          "Lobster Point / Lobster Rock (7–15 m) – lobsters among small caves and holes in the rock",
          "Athamaramba Rock & White Rock (8–12 m) – shallow-to-medium reefs with colorful coral and marine life",
          "Yala Rock & Dispa Rock (20 m+) – for experienced/advanced divers; eagle rays, stingrays, reef sharks and occasional manta rays",
        ],
      },
      {
        id: "what-to-bring",
        title: "What to Bring",
        kind: "list",
        items: [
          "Certification card and logbook",
          "Passport or national ID",
          "Swimwear and a towel, plus a change of clothes",
          "Reef-safe sunscreen, sunglasses and a hat",
          "Motion-sickness medication, if needed",
          "A waterproof/dry bag for phone, money and documents",
          "Your own mask, snorkel, fins or dive computer, if you have them",
        ],
      },
      {
        id: "meeting-pickup",
        title: "Meeting & Pickup",
        kind: "paragraph",
        body: "Report to the dive center between 7:30–8:00 AM, or arrange a free or low-cost tuk-tuk/shuttle pickup from hotels in Mirissa, Weligama or Matara (confirm in advance). On arrival, we check your certification, complete medical/disclaimer forms and fit your equipment before a full site briefing. After the dive you're dropped back at the center for equipment wash-down, then returned to your hotel.",
      },
      {
        id: "schedule",
        title: "Schedule & Duration",
        kind: "paragraph",
        body: "A standard two-tank day runs about 3–4 hours: registration and gear setup, a dive briefing, the first dive, a surface interval, the second dive, then equipment cleaning and logbook entries. Average time underwater is 40–50 minutes per dive, up to 18 m for Open Water certification or 30 m for Advanced Open Water.",
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Pricing Options", anchor: "pricing-options" },
      { label: "Certification & Requirements", anchor: "requirements" },
      { label: "What's Included", anchor: "included" },
      { label: "Optional Extras", anchor: "extras" },
      { label: "Popular Dive Sites", anchor: "dive-sites" },
      { label: "What to Bring", anchor: "what-to-bring" },
      { label: "Meeting & Pickup", anchor: "meeting-pickup" },
      { label: "Schedule & Duration", anchor: "schedule" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "discover-scuba-diving",
    name: "Discover Scuba Diving",
    tagline:
      "No experience needed — get a full introduction to scuba and take your first breaths underwater with an instructor by your side.",
    description:
      "Never dived before? Discover Scuba Diving is a guided, 1:1 first experience for complete beginners — no certification or prior swimming skill required. After a shore-side briefing on breathing and hand signals, your instructor takes you into Mirissa's calm, shallow reefs for a gentle introduction to life underwater.",
    popular: false,
    cardImage: "/images/dsd-fish-school-reef.png",
    cardImageAlt: "A school of reef fish over Mirissa's coral, seen on a Discover Scuba Diving trip",
    heroImage: "/images/dsd-diver-ok-sign.png",
    heroImageAlt: "A first-time diver giving the OK hand signal underwater",
    videos: [
      { src: "/videos/discover-scuba-diving-clip-1.mp4", label: "First Breath Underwater" },
      { src: "/videos/discover-scuba-diving-clip-2.mp4", label: "Guided Reef Introduction" },
      { src: "/videos/discover-scuba-diving-clip-3.mp4", label: "Discover Scuba Highlights" },
    ],
    price: {
      kind: "flat",
      price: 70,
      unit: "USD per person",
      note: "Includes full equipment, a shore-side briefing and a 1:1 guided dive with an instructor.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value: HOTEL_PICKUP_TEXT,
      },
      {
        id: "start-time",
        label: "Sessions",
        icon: "clock",
        value:
          "Morning session 8:00–11:30 AM (calmest seas, clearest water) or afternoon session 1:30–5:00 PM. The full program takes 3–4 hours.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "who-can-dive",
        title: "Who Can Take Part",
        kind: "list",
        defaultOpen: true,
        items: [
          "General good health — no serious lung, heart or ear conditions",
          "Generally open to anyone aged 10 and over",
          "No swimming ability required — first-timers dive with full instructor support",
        ],
      },
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        items: [
          "Full equipment kit — BCD, regulator, tank, wetsuit, mask, fins and weights",
          "20–30 minute pre-dive briefing on breathing, hand signals and safety",
          "1:1 guidance from an experienced PADI/SSI instructor throughout",
        ],
      },
      {
        id: "what-to-bring",
        title: "What to Bring",
        kind: "list",
        items: [
          "Swimwear, a towel and a change of dry clothes",
          "Passport or national ID for registration",
          "Reef-safe sunscreen (optional)",
          "A clear waterproof bag for phone/wallet on the boat (optional)",
          "An underwater camera or GoPro, if you have one (optional)",
          "A water bottle",
        ],
      },
      {
        id: "dive-sites",
        title: "Beginner-Friendly Dive Sites",
        kind: "list",
        items: [
          "Mirissa Point (6–12 m) – sandy bottom, low currents; parrotfish, angelfish and pufferfish",
          "Mirissa Reef (6–10 m) – shallow and calm, ideal for practicing basic technique; turtles and coral reef fish",
          "Coral Reef Point, near Bandaramulla Temple (8–12 m) – close to shore with clear visibility",
        ],
      },
      {
        id: "booking",
        title: "Booking",
        kind: "paragraph",
        body: "Book by phone, WhatsApp or in person at the dive center. During high season (November to April) we recommend booking a day or two in advance. On arrival you'll fill out a medical and disclaimer form before being fitted for equipment.",
      },
      {
        id: "schedule",
        title: "Program Schedule",
        kind: "list",
        items: [
          "Arrival & Registration (20–30 min) — medical form and equipment fitting",
          "Briefing (20–30 min) — breathing underwater, hand signals, equalizing and safety",
          "Boat Ride (15–20 min) — out to the dive site and gearing up",
          "The Dive (30–45 min) — exploring 6–12 m of shallow reef under full 1:1 supervision",
        ],
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Who Can Take Part", anchor: "who-can-dive" },
      { label: "What's Included", anchor: "included" },
      { label: "Beginner-Friendly Dive Sites", anchor: "dive-sites" },
      { label: "What to Bring", anchor: "what-to-bring" },
      { label: "Sessions", anchor: "start-time" },
      { label: "Booking", anchor: "booking" },
      { label: "Program Schedule", anchor: "schedule" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "snorkeling-with-turtles",
    name: "Snorkeling with Turtles",
    tagline:
      "Meet Mirissa's gentle sea turtles face to face on a guided snorkel over their favorite feeding grounds.",
    description:
      "A relaxed, family-friendly snorkel out to a turtle feeding site just off Mirissa. Life jackets mean even non-swimmers can join safely, and our guide keeps a respectful distance so you can watch these gentle animals without disturbing them.",
    popular: false,
    cardImage: "/images/turtle.jpg",
    cardImageAlt: "A sea turtle swimming near the reef in clear water",
    heroImage: "/images/turtle-couple-snorkeling.png",
    heroImageAlt: "A couple snorkeling together, holding hands underwater",
    videos: [
      { src: "/videos/snorkeling-with-turtles-clip-1.mp4", label: "Snorkeling with Turtles Highlights" },
      { src: "/videos/snorkeling-with-turtles-clip-2.mp4", label: "Face to Face with a Turtle" },
      { src: "/videos/snorkeling-with-turtles-clip-3.mp4", label: "A Gentle Encounter" },
      { src: "/videos/snorkeling-with-turtles-clip-4.mp4", label: "Guided Turtle Snorkel" },
    ],
    price: {
      kind: "flat",
      price: 20,
      unit: "USD per person",
      note: "Life jackets are provided, so non-swimmers can join safely.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value: HOTEL_PICKUP_TEXT,
      },
      {
        id: "start-time",
        label: "Start Time",
        icon: "clock",
        value:
          "Departs 7:30–8:00 AM, returning by around 11:00 AM. The trip runs approximately 3–3.5 hours.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "schedule",
        title: "Schedule",
        kind: "list",
        defaultOpen: true,
        items: [
          "7:30–8:00 AM — Arrival, registration and equipment fitting",
          "8:00–8:30 AM — Safety briefing",
          "8:30–10:30 AM — Snorkeling by boat or from the beach at the turtle site",
          "10:30–11:00 AM — Return, rinse off and finish",
        ],
      },
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        items: [
          "Snorkel mask, fins and life jacket",
          "An experienced snorkeling guide",
          "Drinking water and fruit/biscuits",
          "GoPro underwater photography & video (included with some packages)",
        ],
      },
      {
        id: "what-to-bring",
        title: "What to Bring",
        kind: "list",
        items: [
          "Swimwear and a towel",
          "Reef-safe sunscreen and sunglasses",
          "A change of clothes",
          "A waterproof/dry bag",
        ],
      },
      {
        id: "guidelines",
        title: "Turtle Safety Guidelines",
        kind: "list",
        items: [
          "Do not touch or ride the turtles — this is strictly prohibited",
          "Keep a minimum distance of 1–2 meters from turtles at all times",
          "Non-swimmers can safely take part using a life jacket",
        ],
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Schedule", anchor: "schedule" },
      { label: "What's Included", anchor: "included" },
      { label: "What to Bring", anchor: "what-to-bring" },
      { label: "Turtle Safety Guidelines", anchor: "guidelines" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "night-diving",
    name: "Night Diving",
    tagline:
      "Explore Mirissa's reefs after dark and watch nocturnal reef life — and bioluminescent plankton — come alive.",
    description:
      "Night diving reveals a completely different reef: lobsters, crabs and moray eels emerge to hunt, sleeping turtles and reef fish tuck into the coral, and disturbed plankton can glow blue-green in the beam of your torch. For certified divers only, guided by a PADI/SSI Divemaster from sunset.",
    popular: false,
    cardImage: "/images/coral-reef.jpg",
    cardImageAlt: "A coral reef lit by a diver's torch at night",
    heroImage: "/images/journey-beyond-surface.jpg",
    heroImageAlt: "A diver descending into deep blue water",
    price: {
      kind: "flat",
      price: 65,
      unit: "USD per person",
      note: "Requires an Advanced Open Water or Night Diver Adventure Dive certification.",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value: HOTEL_PICKUP_TEXT,
      },
      {
        id: "start-time",
        label: "Schedule",
        icon: "clock",
        value:
          "Report 5:30–6:00 PM; the boat departs around sunset. Dive time is 6:30–7:30 PM (40–45 minutes underwater), returning to the center by 8:00 PM.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "schedule",
        title: "Schedule",
        kind: "list",
        defaultOpen: true,
        items: [
          "5:30–6:00 PM — Report to the dive center, registration and equipment check",
          "6:00–6:30 PM — Night dive briefing and boarding at sunset",
          "6:30–7:30 PM — Dive (40–45 minutes underwater)",
          "7:30–8:00 PM — Return, gear hand-over and logbook entries",
        ],
      },
      {
        id: "species",
        title: "What You Might See",
        kind: "chips",
        items: [
          "Lobsters",
          "Crabs",
          "Moray Eels",
          "Sleeping Turtles",
          "Reef Fish at Rest",
          "Bioluminescent Plankton",
        ],
      },
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        items: [
          "Full basic gear — BCD, regulator, wetsuit, mask & fins",
          "Dive torch and backup light",
          "Guidance from a PADI/SSI Divemaster",
          "Boat transport to and from the site",
        ],
      },
      {
        id: "requirements",
        title: "Certification & What to Bring",
        kind: "list",
        items: [
          "Advanced Open Water or Night Diver Adventure Dive certification, plus logbook",
          "Swimwear, a towel and a change of clothes",
          "Your own dive torch or dive computer, if you have one",
        ],
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Schedule", anchor: "schedule" },
      { label: "What You Might See", anchor: "species" },
      { label: "What's Included", anchor: "included" },
      { label: "Certification & What to Bring", anchor: "requirements" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "padi-bubblemaker-seal-team",
    name: "PADI Bubblemaker & Seal Team",
    tagline:
      "A safe, playful introduction to scuba for kids, in a pool or a calm, shallow stretch of reef with 1:1 instructor support.",
    description:
      "Designed for young explorers, Bubblemaker and Seal Team give kids their first taste of breathing underwater in a controlled, shallow setting. An instructor holds their hand throughout the dive, so there's nothing to worry about but the fun of it.",
    popular: false,
    cardImage: "/images/bubblemaker-lionfish-coral.jpg",
    cardImageAlt: "A lionfish resting on the coral at a shallow Mirissa reef",
    heroImage: "/images/bubblemaker-fish-school-rocky-reef.png",
    heroImageAlt: "A school of reef fish over a shallow, rocky reef",
    videos: [
      { src: "/videos/padi-bubblemaker-clip-1.mp4", label: "Kids' First Dive" },
      { src: "/videos/padi-bubblemaker-clip-2.mp4", label: "Shallow Reef Exploring" },
      { src: "/videos/padi-bubblemaker-clip-3.mp4", label: "Bubblemaker Highlights" },
    ],
    price: {
      kind: "flat",
      price: 65,
      unit: "USD per child",
    },
    sidebarFacts: [
      {
        id: "depth",
        label: "Maximum Depth",
        icon: "pin",
        value:
          "Up to 2 meters (6 ft) in a pool, or 6–12 meters (20–40 ft) in the sea at Mirissa Reef / Mirissa Point.",
      },
      {
        id: "location",
        label: "Location",
        icon: "vessel",
        value:
          "A swimming pool or a calm, shallow section of Mirissa Reef / Mirissa Point, chosen for safety.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "requirements",
        title: "Requirements for Kids",
        kind: "list",
        defaultOpen: true,
        items: [
          "A Medical Statement & Parental Consent form signed by a parent or guardian",
          "No serious asthma, lung, eardrum or heart conditions",
          "Comfortable in water and able to follow the instructor's basic instructions",
          "Swimming ability is not mandatory, though floating comfortably helps",
        ],
      },
      {
        id: "procedure",
        title: "Program Procedure",
        kind: "list",
        items: [
          "Registration & Equipment (30 min) — child-sized wetsuit, mask and fins",
          "Briefing (30 min) — breathing through the mouth, equalizing ear pressure, simple hand signals",
          "Shallow Training — surface breathing practice before entering the sea",
          "The Dive (30–45 min) — the instructor stays 1:1, holding hands throughout",
        ],
      },
      {
        id: "what-to-bring",
        title: "What to Bring",
        kind: "list",
        items: [
          "A comfortable swimsuit or trunks",
          "A towel and a change of clothes",
          "Reef-safe sunscreen and a water bottle",
          "A birth certificate or passport, to verify age",
        ],
      },
      {
        id: "safety-note",
        title: "Important Safety Note",
        kind: "paragraph",
        body: "Children need time to off-gas nitrogen from their bodies after diving, so avoid flying for 12–18 hours afterward.",
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Requirements for Kids", anchor: "requirements" },
      { label: "Program Procedure", anchor: "procedure" },
      { label: "What to Bring", anchor: "what-to-bring" },
      { label: "Maximum Depth", anchor: "depth" },
      { label: "Location", anchor: "location" },
      { label: "Important Safety Note", anchor: "safety-note" },
      { label: "Payments", anchor: "payments" },
    ],
  },
  {
    slug: "refresher-dive",
    name: "Refresher Dive",
    tagline:
      "Shake off the rust with a guided skills review before you get back in the water — ideal if it's been 6 months or more since your last dive.",
    description:
      "A short, guided program for certified divers who haven't been in the water for a while. We review basic safety skills, equipment handling and buoyancy control in shallow water before heading out for a full open-water dive with an instructor.",
    popular: false,
    cardImage: "/images/fun-diving-friends-wetsuits-beach.png",
    cardImageAlt: "Two divers in wetsuits smiling on the beach before a dive",
    heroImage: "/images/about-hero-cave-divers.png",
    heroImageAlt: "Divers exploring an underwater rock formation",
    price: {
      kind: "flat",
      price: 55,
      unit: "USD per person",
    },
    sidebarFacts: [
      {
        id: "transportation",
        label: "Transportation",
        icon: "vessel",
        value: HOTEL_PICKUP_TEXT,
      },
      {
        id: "start-time",
        label: "Duration",
        icon: "clock",
        value:
          "The full session runs roughly 2–2.5 hours, from registration through to the open-water dive.",
      },
      {
        id: "payments",
        label: "Payments",
        icon: "card",
        value: PAYMENTS_TEXT,
      },
    ],
    sections: [
      {
        id: "schedule",
        title: "Session Breakdown",
        kind: "list",
        defaultOpen: true,
        items: [
          "Registration & Equipment (20–30 min) — logbook, certification and gear fitting",
          "Skills Briefing (30 min) — a review of key safety and skill points before entering the water",
          "Water Skill Practice (30 min) — mask clearing, regulator recovery and buoyancy control in shallow water",
          "Open Water Dive (45–60 min) — a full dive at a Mirissa site (12–18 m) with an instructor",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        kind: "list",
        items: [
          "A valid PADI, SSI, NAUI or other recognized certification card or e-card",
          "A completed health declaration confirming no serious lung, heart or ear conditions",
          "A logbook is recommended, to confirm the date of your last dive",
        ],
      },
      {
        id: "included",
        title: "What's Included",
        kind: "list",
        items: [
          "All technical equipment — BCD, regulator, tank, weights, wetsuit, mask, fins",
          "Full guidance from a PADI/SSI certified instructor",
          "Boat fees and a dive log endorsement",
        ],
      },
      {
        id: "what-to-bring",
        title: "What to Bring",
        kind: "list",
        items: [
          "Certification card / e-card and logbook",
          "Swimwear and a towel",
          "National ID or passport",
          "Reef-safe sunscreen and a water bottle",
        ],
      },
      {
        id: "safety-note",
        title: "Important Safety Note",
        kind: "paragraph",
        body: "Avoid flying for 12–18 hours after a refresher dive, as your body still needs time to adjust to nitrogen absorbed during the dive.",
      },
    ],
    topics: [
      { label: "Price", anchor: "price" },
      { label: "Session Breakdown", anchor: "schedule" },
      { label: "Requirements", anchor: "requirements" },
      { label: "What's Included", anchor: "included" },
      { label: "What to Bring", anchor: "what-to-bring" },
      { label: "Duration", anchor: "start-time" },
      { label: "Important Safety Note", anchor: "safety-note" },
      { label: "Transportation", anchor: "transportation" },
      { label: "Payments", anchor: "payments" },
    ],
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}
