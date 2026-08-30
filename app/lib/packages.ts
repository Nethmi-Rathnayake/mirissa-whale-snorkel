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
  price: PriceInfo;
  sidebarFacts: SidebarFact[];
  sections: PackageSection[];
  topics: { label: string; anchor: string }[];
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
    cardImage: "/images/diver-reef.jpg",
    cardImageAlt: "A snorkeler exploring clear blue water alongside a reef",
    heroImage: "/images/diver-reef.jpg",
    heroImageAlt: "A snorkeler exploring clear blue water alongside a reef",
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
    cardImage: "/images/whale-breach.jpg",
    cardImageAlt: "A humpback whale breaching near the boat",
    heroImage: "/images/whale-tails-aerial.jpg",
    heroImageAlt: "Aerial view of two whales surfacing side by side",
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
    cardImage: "/images/dolphins.jpg",
    cardImageAlt: "A pod of dolphins swimming just beneath the surface",
    heroImage: "/images/dolphins.jpg",
    heroImageAlt: "A pod of dolphins swimming just beneath the surface",
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
];

export function getPackageBySlug(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}
