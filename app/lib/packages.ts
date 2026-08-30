export type TourPackage = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  popular: boolean;
  cardImage: string;
  cardImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  features: string[];
  transportation: string;
  startTime: string;
  meetingPoint: string;
  species: string[];
  whatToBring: string[];
  sightingGuaranteed: string;
  payment: string;
};

const TRANSPORTATION =
  "Free hotel pickup & drop-off within Mirissa and Weligama. Transfers from Galle or Unawatuna available on request.";

const PAYMENT =
  "Reserve your seat with a 20% deposit online. The remaining balance is paid in cash or by card on the morning of your tour. Free cancellation up to 24 hours in advance.";

export const packages: TourPackage[] = [
  {
    slug: "whale-snorkeling",
    name: "Whale Snorkeling",
    tagline:
      "Slip into the water and swim alongside gentle giants in their natural habitat.",
    description:
      "Our signature in-water encounter pairs a scenic boat cruise with a respectful, guided snorkel alongside blue and sperm whales. Small groups and calm, careful entries mean more time watching and less time waiting.",
    price: 120,
    popular: false,
    cardImage: "/images/diver-reef.jpg",
    cardImageAlt: "A snorkeler exploring clear blue water alongside a reef",
    heroImage: "/images/diver-reef.jpg",
    heroImageAlt: "A snorkeler exploring clear blue water alongside a reef",
    features: [
      "Small group experience",
      "Certified snorkel guide",
      "Full snorkeling gear",
      "Breakfast & snacks",
      "Water & refreshments",
      "GoPro photos & videos",
    ],
    transportation: TRANSPORTATION,
    startTime:
      "5:45 AM briefing at the harbour, boat departs 6:15 AM sharp (subject to tide and weather).",
    meetingPoint:
      "Mirissa Fisheries Harbour, Main Jetty — look for our blue Mirissa Whale Snorkel flag.",
    species: ["Blue Whale", "Sperm Whale", "Bryde's Whale", "Spinner Dolphin"],
    whatToBring: [
      "Swimwear & a change of clothes",
      "Reef-safe sunscreen",
      "Hat & sunglasses",
      "A towel",
      "Motion sickness tablets, if you're prone to seasickness",
      "Your own mask, if you prefer a personal fit",
    ],
    sightingGuaranteed:
      "We maintain a 98% sighting rate, but whales are wild animals and no encounter can ever be 100% guaranteed. If we don't find whales on your trip, you're welcome to join a future tour at no extra cost.",
    payment: PAYMENT,
  },
  {
    slug: "whale-watching",
    name: "Whale Watching",
    tagline:
      "Our flagship boat tour — watch whales surface, blow and dive from the comfort of the deck.",
    description:
      "No swimming required. Cruise out from Mirissa Harbour in a small group and watch for blows, breaches and fins with a marine biologist guide narrating every moment.",
    price: 75,
    popular: true,
    cardImage: "/images/whale-breach.jpg",
    cardImageAlt: "A humpback whale breaching near the boat",
    heroImage: "/images/whale-tails-aerial.jpg",
    heroImageAlt: "Aerial view of two whales surfacing side by side",
    features: [
      "Small group experience",
      "Marine biologist guide",
      "Binoculars provided",
      "Breakfast & snacks",
      "Water & refreshments",
      "GoPro photos & videos",
    ],
    transportation: TRANSPORTATION,
    startTime:
      "6:00 AM briefing at the harbour, boat departs 6:30 AM sharp (subject to tide and weather).",
    meetingPoint:
      "Mirissa Fisheries Harbour, Main Jetty — look for our blue Mirissa Whale Snorkel flag.",
    species: [
      "Blue Whale",
      "Sperm Whale",
      "Bryde's Whale",
      "Spinner Dolphin",
      "Occasional Orca",
    ],
    whatToBring: [
      "A warm layer for the early morning crossing",
      "Reef-safe sunscreen",
      "Hat & sunglasses",
      "Camera or phone with a full battery",
      "Motion sickness tablets, if you're prone to seasickness",
    ],
    sightingGuaranteed:
      "We maintain a 98% sighting rate across our whale watching season, but whales are wild animals and no sighting can ever be 100% guaranteed. If we don't spot any on your trip, you're welcome to join a future tour at no extra cost.",
    payment: PAYMENT,
  },
  {
    slug: "dolphin-snorkeling",
    name: "Dolphin Snorkeling",
    tagline:
      "Swim with playful spinner dolphins in Mirissa's crystal-clear morning waters.",
    description:
      "Large pods of spinner dolphins ride our bow almost every morning. We ease into the water at a respectful distance and let curious dolphins approach on their own terms.",
    price: 55,
    popular: false,
    cardImage: "/images/dolphins.jpg",
    cardImageAlt: "A pod of dolphins swimming just beneath the surface",
    heroImage: "/images/dolphins.jpg",
    heroImageAlt: "A pod of dolphins swimming just beneath the surface",
    features: [
      "Small group experience",
      "Professional guide",
      "Snorkeling gear",
      "Breakfast & snacks",
      "Water & refreshments",
      "GoPro photos & videos",
    ],
    transportation: TRANSPORTATION,
    startTime:
      "6:00 AM briefing at the harbour, boat departs 6:30 AM sharp (subject to tide and weather).",
    meetingPoint:
      "Mirissa Fisheries Harbour, Main Jetty — look for our blue Mirissa Whale Snorkel flag.",
    species: [
      "Spinner Dolphin",
      "Common Bottlenose Dolphin",
      "Occasional Blue Whale sighting",
    ],
    whatToBring: [
      "Swimwear & a change of clothes",
      "Reef-safe sunscreen",
      "Hat & sunglasses",
      "A towel",
      "Motion sickness tablets, if you're prone to seasickness",
    ],
    sightingGuaranteed:
      "Dolphin pods are seen on the vast majority of our morning trips, though wildlife sightings can never be 100% guaranteed. If none are spotted, you're welcome to join a future tour at no extra cost.",
    payment: PAYMENT,
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}

export const TOPIC_ANCHORS = {
  price: "price",
  included: "included",
  transportation: "transportation",
  startTime: "start-time",
  meetingPoint: "meeting-point",
  species: "species",
  whatToBring: "what-to-bring",
  sightingGuaranteed: "sighting-guaranteed",
  payment: "payment",
} as const;

export const PACKAGE_TOPICS: { label: string; anchor: string }[] = [
  { label: "Price", anchor: TOPIC_ANCHORS.price },
  { label: "What's Included", anchor: TOPIC_ANCHORS.included },
  { label: "Transportation", anchor: TOPIC_ANCHORS.transportation },
  { label: "Start Time", anchor: TOPIC_ANCHORS.startTime },
  { label: "Meeting Point", anchor: TOPIC_ANCHORS.meetingPoint },
  { label: "Whale Species You May See", anchor: TOPIC_ANCHORS.species },
  { label: "What to Bring", anchor: TOPIC_ANCHORS.whatToBring },
  {
    label: "Is Whale Sighting Guaranteed?",
    anchor: TOPIC_ANCHORS.sightingGuaranteed,
  },
  { label: "Payment", anchor: TOPIC_ANCHORS.payment },
];
