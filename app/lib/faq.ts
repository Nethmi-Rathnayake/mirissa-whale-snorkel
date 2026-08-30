export type FaqQuestion = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  questions: FaqQuestion[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "the-experience",
    title: "The Experience",
    questions: [
      {
        id: "species",
        question: "What species of whales will we see?",
        answer:
          "Mirissa's waters are home to blue whales, sperm whales, fin whales and Bryde's whales, with occasional humpback sightings. Spinner, bottlenose and Risso's dolphins are also regularly spotted alongside our whale tours.",
      },
      {
        id: "distance",
        question: "How close do we get to the whales?",
        answer:
          "We follow strict marine park guidelines and never approach closer than 15–20 metres. Whales are wild animals, so any closer encounter always happens on their terms, not ours.",
      },
      {
        id: "experience-needed",
        question: "Do I need previous snorkeling experience?",
        answer:
          "No prior experience is required for our Whale Watching or Dolphin Watching tours. For the Whale Snorkeling package, basic swimming confidence is recommended, and our guides brief every guest thoroughly before entering the water.",
      },
    ],
  },
  {
    id: "safety-ethics",
    title: "Safety & Ethics",
    questions: [
      {
        id: "safe",
        question: "Are the snorkeling encounters safe?",
        answer:
          "Yes. Every trip is led by a certified guide, we maintain a strict guest-to-guide ratio, and all boats carry life jackets and first-aid equipment. We also enforce a minimum distance from whales at all times to protect both guests and animals.",
      },
      {
        id: "no-whales",
        question: "What happens if we don't see any whales?",
        answer:
          "Whales are wild animals, so sightings can never be 100% guaranteed. That said, our sighting rate is around 98% during the main season. If we don't spot any whales on your trip, you're welcome to join a future tour at no extra cost.",
      },
    ],
  },
  {
    id: "booking-logistics",
    title: "Booking & Logistics",
    questions: [
      {
        id: "best-time",
        question: "When is the best time to visit?",
        answer:
          "November to April is whale watching season in Mirissa, with calmer seas and the highest sighting rates. February to April typically offers the best underwater visibility for snorkeling.",
      },
      {
        id: "what-to-bring",
        question: "What should I bring?",
        answer:
          "Swimwear, a towel, reef-safe sunscreen, a hat and sunglasses, and motion-sickness medication if you're prone to seasickness. A waterproof phone case or GoPro is great for capturing the moment, and please bring a copy of your passport or ID.",
      },
      {
        id: "cancellation",
        question: "Cancellation Policy",
        answer:
          "Reservations can be cancelled or rescheduled free of charge up to 24 hours before departure. Trips cancelled by us due to weather or sea conditions are fully refunded or rebooked at no extra cost.",
      },
    ],
  },
];
