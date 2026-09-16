export type FaqQuestion = {
  id: string;
  question: string;
  answer: string;
  relatedLink?: { label: string; href: string };
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
        id: "blue-whales",
        question: "Are blue whales the main species we might see in Mirissa?",
        answer:
          "Blue whales were actually the focus of the original research that led to our tours — our founders began by mapping their migratory routes off Sri Lanka's southern coast, long before Mirissa became a whale watching destination.",
        relatedLink: {
          label: "Read our full blue whale watching guide",
          href: "/guides/blue-whale-watching-mirissa",
        },
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
      {
        id: "dolphins-on-whale-tour",
        question: "Will I see dolphins on the Whale Watching Tour?",
        answer:
          "Dolphins are often spotted during our Whale Watching Tour, alongside whales. If you'd like to focus specifically on dolphins, our dedicated Dolphin Watching Tour follows the same route and schedule but is centered on the pods that gather off Mirissa most mornings.",
      },
      {
        id: "group-size",
        question: "How many guests are on each boat?",
        answer:
          "We keep groups small — up to a maximum of six guests per boat — so every trip stays personal and no one is left watching from the back.",
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
      {
        id: "eco-friendly",
        question: "Are your tours eco-friendly and ethical?",
        answer:
          "We offset emissions from our vessels through local mangrove reforestation projects, and a percentage of every booking funds local marine research and community education programs in Mirissa. We follow strict global guidelines for cetacean interactions so our presence never disturbs natural behaviour.",
        relatedLink: {
          label: "Read our full conservation approach",
          href: "/conservation",
        },
      },
    ],
  },
  {
    id: "choosing-your-tour",
    title: "Choosing the Right Tour",
    questions: [
      {
        id: "which-tour",
        question:
          "What's the difference between whale watching and whale snorkeling, and which should I choose?",
        answer:
          "Whale Watching keeps you on the boat deck the whole time — no swimming required. Whale Snorkeling pairs the same kind of boat cruise with a guided, in-water swim alongside the whales, always at a respectful distance, and recommends basic swimming confidence. If you'd rather stay dry, choose Whale Watching; if you want to get in the water, choose Whale Snorkeling.",
        relatedLink: {
          label: "See what to expect on a whale watching tour",
          href: "/guides/what-to-expect-whale-watching-mirissa",
        },
      },
      {
        id: "non-swimmers",
        question: "I can't swim well — can I still join a tour?",
        answer:
          "Whale Watching and Dolphin Watching don't require any swimming — you stay on the boat. Our Snorkeling with Turtles trip provides life jackets so non-swimmers can safely take part in the water. Whale Snorkeling recommends basic swimming confidence.",
        relatedLink: {
          label: "Compare snorkeling experiences in Mirissa",
          href: "/snorkeling-in-mirissa",
        },
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
        relatedLink: {
          label: "Read our full whale watching season guide",
          href: "/guides/best-time-to-see-whales-in-mirissa",
        },
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
      {
        id: "how-to-book",
        question: "How do I book a tour?",
        answer:
          "You can book directly through our website by choosing a package and completing the booking form, or reach us by phone or WhatsApp to arrange a booking.",
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer:
          "Sri Lankan Rupees (LKR), US Dollars (USD), and card payments are all accepted.",
      },
      {
        id: "hotel-pickup",
        question: "Do you offer hotel pickup?",
        answer:
          "Yes — most of our tours include free hotel pickup and drop-off from nearby areas such as Mirissa.",
      },
      {
        id: "children",
        question: "Are children allowed on the tours?",
        answer:
          "Children are welcome on our tours, and those under 5 years travel free on our Whale Watching and Dolphin Watching tours.",
      },
      {
        id: "getting-there",
        question: "How do I get to Mirissa?",
        answer:
          "Mirissa is on Sri Lanka's south coast, near Weligama and Matara. Most of our tours include free hotel pickup and drop-off from nearby areas, and our whale watching trips depart from Mirissa Fisheries Harbour.",
        relatedLink: {
          label: "See our full guide to getting to Mirissa",
          href: "/guides/getting-to-mirissa",
        },
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    questions: [
      {
        id: "how-much",
        question: "How much do tours cost?",
        answer:
          "Prices vary by tour — from $20 USD per person for Snorkeling with Turtles up to $125–$400 USD for Whale Snorkeling, depending on group size. Private boat charters are also available on request for Whale Snorkeling, with rates varying by group size and itinerary.",
        relatedLink: {
          label: "See full pricing comparison",
          href: "/pricing",
        },
      },
    ],
  },
];
