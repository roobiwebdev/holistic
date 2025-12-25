export interface PricingOption {
  duration: string; // e.g., "60 minutes", "90 minutes"
  price: string; // e.g., "£70.00", "£100.00"
}

export interface SubService {
  slug: string;
  title: string;
  description: string;
  fullDescription?: string; // Extended description for detail page
  image?: string; // URL to image
  videoId?: string; // YouTube video ID for detail page
  benefits?: string[]; // Array of benefit descriptions
  pricingOptions?: PricingOption[]; // Pricing options for booking
  ctaLabel?: string; // Custom button label (defaults to "More Info")
  bookingUrl?: string; // Vagaro booking URL for this specific service
}

export interface ServiceHero {
  title: string;
  subtitle?: string;
  description?: string;
  youtubeVideoId?: string; // YouTube video ID for background video
}

export interface Service {
  slug: string;
  hero: ServiceHero;
  subservices: SubService[];
}

// Helper function to generate detail page URL for a sub-service
export function getSubServiceDetailUrl(
  serviceSlug: string,
  subserviceSlug: string
): string {
  return `/services/${serviceSlug}/${subserviceSlug}`;
}

// Helper function to generate booking URL for a sub-service
export function getBookingUrl(
  serviceSlug: string,
  subserviceSlug: string
): string {
  return `/services/${serviceSlug}/${subserviceSlug}/book`;
}

// All services data
export const SERVICES_DATA: Service[] = [
  {
    slug: "trauma-treatment",
    hero: {
      title: "Healing / Trauma Release",
      subtitle: "Holistic Healing",
      description:
        "This treatment was designed by founder Maria Sarmiento. It facilitates a profound release of trauma throughout the body, providing a nervous system reset. Combining sports therapy, Thai massage, and Raynor massage, it works deeply through the body's physical and energetic systems.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "trauma-release-treatment",
        title: "Trauma Release Treatment",
        description:
          "A fusion of touch, energy, and awareness — designed to restore ease and vitality. At Holistic Rising, our Trauma Release Treatment is a deeply integrative healing experience designed to address the physical, energetic and emotional imprints of trauma stored in the body.",
        fullDescription:
          "A fusion of touch, energy, and awareness — designed to restore ease and vitality. At Holistic Rising, our Trauma Release Treatment is a deeply integrative healing experience designed to address the physical, energetic and emotional imprints of trauma stored in the body.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Trauma Release Treatment",
        benefits: [
          "Fusion of touch, energy, and awareness",
          "Restores ease and vitality",
          "Deeply integrative healing experience",
          "Addresses physical imprints of trauma",
          "Works with energetic and emotional aspects",
          "Releases trauma stored in the body",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "energy-healing-massage-combined",
        title: "Energy Healing & Massage combined",
        description:
          "A deeply restorative blend of therapeutic touch and energetic alignment. This offering at Holistic Rising combines the soothing power of massage therapy with the subtle yet profound effects of energy healing.",
        fullDescription:
          "A deeply restorative blend of therapeutic touch and energetic alignment. This offering at Holistic Rising combines the soothing power of massage therapy with the subtle yet profound effects of energy healing.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Energy Healing & Massage fusion",
        benefits: [
          "Deeply restorative blend of therapies",
          "Combines therapeutic touch and energetic alignment",
          "Soothing power of massage therapy",
          "Subtle yet profound energy healing effects",
          "Addresses both physical and energetic needs",
          "Promotes holistic healing and balance",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "healing-energy-of-2",
        title:
          "Healing with the energy of 2: Trauma Release, Ayurveda, Energy Healing Fusion",
        description:
          "A profound journey of liberation — from the body to the soul. At Holistic Rising, our Trauma Release & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.",
        fullDescription:
          "A profound journey of liberation — from the body to the soul. At Holistic Rising, our Trauma Release & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Complete Healing with The Energy of 2",
        benefits: [
          "Profound journey of liberation",
          "Releases trauma stored in the body",
          "Clears stagnation from energetic field",
          "Dissolves mental and emotional conditioning",
          "Deeply transformative experience",
          "Works from body to soul",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "healing-energy-of-3",
        title:
          "Healing with the energy of 3: Trauma Release, Ayurveda, Energy Healing Fusion",
        description:
          "A complete healing of three ancient wisdoms combined to decompress, release and restore. At Holistic Rising, our Trauma Release, Ayurveda & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.",
        fullDescription:
          "A complete healing of three ancient wisdoms combined to decompress, release and restore. At Holistic Rising, our Trauma Release, Ayurveda & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Complete Healing with The Energy of 3",
        benefits: [
          "Three ancient wisdoms combined",
          "Decompresses, releases and restores",
          "Releases trauma stored in the body",
          "Clears energetic stagnation",
          "Dissolves mental and emotional conditioning",
          "Deeply transformative healing experience",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "healing-energy-of-5",
        title:
          "Complete Healing with the energy of 5: Trauma Release, Ayurveda, Energy Healing Fusion",
        description:
          "A complete healing of five ancient wisdoms combined to decompress, release and restore and revive. At Holistic Rising, our Trauma Release, Ayurveda & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning. This treatment invites a return to the authentic self, free from inherited patterns, societal programming, and the internal restrictions that shape our behaviour and sense of identity.",
        fullDescription:
          "A complete healing of five ancient wisdoms combined to decompress, release and restore and revive. At Holistic Rising, our Trauma Release, Ayurveda & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning. This treatment invites a return to the authentic self, free from inherited patterns, societal programming, and the internal restrictions that shape our behaviour and sense of identity.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Complete Healing with The Energy of 5",
        benefits: [
          "Five ancient wisdoms combined",
          "Decompresses, releases, restores and revives",
          "Releases trauma stored in the body",
          "Clears energetic stagnation",
          "Dissolves mental and emotional conditioning",
          "Returns to authentic self",
          "Free from inherited patterns and programming",
        ],
        pricingOptions: [
          { duration: "120 minutes", price: "£180.00" },
          { duration: "150 minutes", price: "£220.00" },
        ],
      },
    ],
  },
  {
    slug: "holistic-therapies",
    hero: {
      title: "Holistic Treatments",
      subtitle: "Integrative Healing",
      description:
        "Unique to Holistic Rising, these sessions combine multiple modalities into one experience. Created by Maria Sarmiento, they are intuitively layered to meet each client where they are — emotionally, physically, and spiritually — helping to reset the system and bring about a deep state of mental and energetic restoration.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "abdominal-treatment",
        title: "Abdominal Treatment",
        description:
          "Our specialised Abdominal Treatment is a deeply therapeutic and restorative experience designed to relieve abdominal cramping, bloating, and the build-up of excess fat and fluid, helping to reduce inflammation throughout the core of the body.",
        fullDescription:
          "Our specialised Abdominal Treatment is a deeply therapeutic and restorative experience designed to relieve abdominal cramping, bloating, and the build-up of excess fat and fluid, helping to reduce inflammation throughout the core of the body. This treatment works holistically to release deep-seated tension, enhance digestion, support natural detoxification, ease lower back discomfort, promote scar tissue regeneration, improve hip mobility, and help expand lung capacity for easier breathing.",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Abdominal Treatment",
        bookingUrl:
          "https://www.vagaro.com/cl/2X00qk4hI2slpxTXwG8p9im9DUnVV7wKg5VoBFuC5RU=",
        benefits: [
          "Relieves abdominal cramping and bloating",
          "Reduces excess fat and fluid build-up",
          "Decreases inflammation throughout the core",
          "Enhances digestion and supports detoxification",
          "Eases lower back discomfort",
          "Improves hip mobility and lung capacity",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "combined-massage",
        title: "Combined Massage",
        description:
          "Our Combined Massage is a beautifully fluid and intuitive treatment that blends a variety of therapeutic techniques to meet your unique needs in the moment. Drawing from relaxing, deep tissue, aromatherapy, sports, and sculpting methods, this massage is tailored specifically to you — allowing your body and energy on the day to guide the perfect combination.",
        fullDescription:
          "Our Combined Massage is a beautifully fluid and intuitive treatment that blends a variety of therapeutic techniques to meet your unique needs in the moment. Drawing from relaxing, deep tissue, aromatherapy, sports, and sculpting methods, this massage is tailored specifically to you — allowing your body and energy on the day to guide the perfect combination.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Combined Massage",
        benefits: [
          "Fluid and intuitive treatment approach",
          "Blends multiple therapeutic techniques",
          "Tailored to your unique needs",
          "Combines relaxing, deep tissue, and sports methods",
          "Adapts to your body's energy on the day",
          "Creates the perfect combination for you",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "specialised-feet-ankle-therapy",
        title: "Specialised Feet and Ankle Therapy",
        description:
          "This is a specialised foot and ankle treatment that combines traditional Thai reflexology with Raynor massage to target the fascia lines in small areas such as the toes, hands, and wrists. The therapy is designed to improve mobility, ease discomfort, and restore movement, particularly in the feet and ankles.",
        fullDescription:
          "This is a specialised foot and ankle treatment that combines traditional Thai reflexology with Raynor massage to target the fascia lines in small areas such as the toes, hands, and wrists. The therapy is designed to improve mobility, ease discomfort, and restore movement, particularly in the feet and ankles.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Specialised Feet and Ankle Therapy",
        benefits: [
          "Combines Thai reflexology with Raynor massage",
          "Targets fascia lines in small areas",
          "Improves mobility and movement",
          "Eases discomfort in feet and ankles",
          "Works on toes, hands, and wrists",
          "Restores natural function and flexibility",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "specialised-hands-shoulder-therapy",
        title: "Specialised Hands & Shoulder Therapy",
        description:
          "This is a specialised treatment designed for those experiencing difficulties mobilising the small joints of the hands and feet. It combines traditional Thai reflexology with Raynor massage to target the fascia lines in these areas, helping to restore movement, ease discomfort, and improve flexibility.",
        fullDescription:
          "This is a specialised treatment designed for those experiencing difficulties mobilising the small joints of the hands and feet. It combines traditional Thai reflexology with Raynor massage to target the fascia lines in these areas, helping to restore movement, ease discomfort, and improve flexibility.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Specialised Hands & Shoulder Therapy",
        benefits: [
          "Designed for small joint mobilisation",
          "Combines Thai reflexology with Raynor massage",
          "Targets fascia lines in hands and shoulders",
          "Restores movement and flexibility",
          "Eases discomfort and tension",
          "Improves joint function",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "hip-glutes-back-neck-head-treatment",
        title: "Hip, Glutes, Back, Neck & Head Treatment",
        description:
          "This specialised treatment focuses on the entire back of the body, from the hips and glutes through to the neck and head. It is particularly effective for relieving tight hamstrings and calves, nerve pain in the glutes, lower back pain, and shoulder tension.",
        fullDescription:
          "This specialised treatment focuses on the entire back of the body, from the hips and glutes through to the neck and head. It is particularly effective for relieving tight hamstrings and calves, nerve pain in the glutes, lower back pain, and shoulder tension.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Hip, Glutes, Back, Neck & Head Treatment",
        benefits: [
          "Focuses on entire back of the body",
          "Relieves tight hamstrings and calves",
          "Addresses nerve pain in glutes",
          "Eases lower back pain",
          "Reduces shoulder tension",
          "Comprehensive treatment from hips to head",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "medicinal-aromatherapy-treatment",
        title: "Medicinal Aromatherapy Treatment",
        description:
          "At Holistic Rising, our Medicinal Aromatherapy Treatment offers a deeply personalised approach to healing through the power of essential oils. Unlike traditional aromatherapy, this treatment is therapeutically focused and tailored specifically to the individual's physical and emotional needs at the time of their session.",
        fullDescription:
          "At Holistic Rising, our Medicinal Aromatherapy Treatment offers a deeply personalised approach to healing through the power of essential oils. Unlike traditional aromatherapy, this treatment is therapeutically focused and tailored specifically to the individual's physical and emotional needs at the time of their session.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Medicinal Aromatherapy Treatment",
        benefits: [
          "Deeply personalised approach to healing",
          "Uses therapeutic essential oils",
          "Tailored to physical and emotional needs",
          "Therapeutically focused treatment",
          "Addresses individual needs at the time",
          "Promotes holistic healing and balance",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "ear-candle-head-shoulders-tension-relief",
        title: "EAR Candle with Head & Shoulders Tension Relief",
        description:
          "This deeply restorative treatment at Holistic Rising combines the ancient practice of ear candling with a soothing head and shoulders massage, creating a powerful fusion that addresses physical tension, energetic stagnation, and sensory discomfort.",
        fullDescription:
          "This deeply restorative treatment at Holistic Rising combines the ancient practice of ear candling with a soothing head and shoulders massage, creating a powerful fusion that addresses physical tension, energetic stagnation, and sensory discomfort.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "EAR Candle with Head & Shoulders Tension Relief",
        benefits: [
          "Combines ancient ear candling practice",
          "Includes soothing head and shoulders massage",
          "Addresses physical tension",
          "Clears energetic stagnation",
          "Relieves sensory discomfort",
          "Deeply restorative experience",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "therapeutic-deep-tissue-massage",
        title: "Therapeutic Deep Tissue Massage – Restore, Realign, Rebalance",
        description:
          "Our Therapeutic Deep Tissue Massage is a powerful and purposeful treatment designed to target chronic tension, muscular pain, and postural imbalances. This is not a simple relaxation massage — it is a restorative therapy tailored to those who carry tension deep within the muscles and connective tissues, whether from physical exertion, repetitive strain, stress, or long-term poor posture.",
        fullDescription:
          "Our Therapeutic Deep Tissue Massage is a powerful and purposeful treatment designed to target chronic tension, muscular pain, and postural imbalances. This is not a simple relaxation massage — it is a restorative therapy tailored to those who carry tension deep within the muscles and connective tissues, whether from physical exertion, repetitive strain, stress, or long-term poor posture.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Therapeutic Deep Tissue Massage",
        benefits: [
          "Targets chronic tension and muscular pain",
          "Addresses postural imbalances",
          "Restorative therapy approach",
          "Works deep within muscles and connective tissues",
          "Suitable for physical exertion and stress",
          "Helps with long-term poor posture",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "gua-sha-cranial-therapy",
        title: "Gua Sha Cranial (Head) Therapy Treatment",
        description:
          "Gua Sha cranial therapy is a deeply restorative treatment that uses a rose quartz crystal Gua Sha tool to gently massage the head, neck, and face. This therapy is excellent for alleviating headaches, migraines, bruising, tinnitus, and sleep difficulties by clearing and calming the mind while lifting energy.",
        fullDescription:
          "Gua Sha cranial therapy is a deeply restorative treatment that uses a rose quartz crystal Gua Sha tool to gently massage the head, neck, and face. This therapy is excellent for alleviating headaches, migraines, bruising, tinnitus, and sleep difficulties by clearing and calming the mind while lifting energy.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Gua Sha Cranial (Head) Therapy Treatment",
        benefits: [
          "Uses rose quartz crystal Gua Sha tool",
          "Gently massages head, neck, and face",
          "Alleviates headaches and migraines",
          "Helps with tinnitus and sleep difficulties",
          "Clears and calms the mind",
          "Lifts energy and promotes well-being",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
    ],
  },
  {
    slug: "energy-healing",
    hero: {
      title: "Energy Healing",
      subtitle: "Modalities of Transformation and Vibrational Alignment",
      description:
        "Subtle, intuitive work that supports energetic alignment and emotional rebalancing. This therapy can help bring clarity, calm, and connection to those seeking spiritual or emotional restoration.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "energy-healing-combined-five",
        title: "Energy Healing Combined With The Energy of Five",
        description:
          "A powerful fusion of five ancient healing modalities to restore balance, alignment, and authentic transformation. At Holistic Rising, our Integrated Energy Healing combines the profound wisdom and techniques of Japanese Reiki, Crystal Healing, Shamanic Healing, Buddhist Healing, and Yogic Healing into a seamless, intuitive experience. This unique fusion works holistically to cultivate direction, leadership, balance, transformation, and abundance in the client's life",
        fullDescription:
          "A powerful fusion of five ancient healing modalities to restore balance, alignment, and authentic transformation. At Holistic Rising, our Integrated Energy Healing combines the profound wisdom and techniques of Japanese Reiki, Crystal Healing, Shamanic Healing, Buddhist Healing, and Yogic Healing into a seamless, intuitive experience. This unique fusion works holistically to cultivate direction, leadership, balance, transformation, and abundance in the client's life",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Energy Healing Of Five",
        benefits: [
          "Five ancient healing modalities combined",
          "Restores balance, alignment, and transformation",
          "Combines Japanese Reiki, Crystal, Shamanic, Buddhist, and Yogic Healing",
          "Seamless, intuitive experience",
          "Cultivates direction, leadership, and abundance",
          "Holistic approach to transformation",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "japanese-reiki",
        title: "Japanese Reiki",
        description:
          "An ancient healing technique rooted in Japanese tradition, designed to clear energy blockages and promote deep restoration. Japanese Reiki is a gentle yet powerful energy healing method that traces its origins back to early 20th-century Japan, rooted in much older principles of ancient Chinese medicine and energy work. It forms part of a long lineage of healing arts that focus on balancing the body's subtle energy systems to support holistic wellbeing.",
        fullDescription:
          "An ancient healing technique rooted in Japanese tradition, designed to clear energy blockages and promote deep restoration. Japanese Reiki is a gentle yet powerful energy healing method that traces its origins back to early 20th-century Japan, rooted in much older principles of ancient Chinese medicine and energy work. It forms part of a long lineage of healing arts that focus on balancing the body's subtle energy systems to support holistic wellbeing.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Japanese Reiki",
        benefits: [
          "Ancient healing technique from Japan",
          "Clears energy blockages",
          "Promotes deep restoration",
          "Gentle yet powerful method",
          "Rooted in Chinese medicine principles",
          "Balances subtle energy systems",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "crystal-healing",
        title: "Crystal Healing",
        description:
          "Crystal healing utilises the natural vibrational properties of crystals to target and shift energy within the body. Each body part holds different frequencies due to the emotions stored within them. Practitioners place specific crystals on or around these areas to raise their frequency and release density. The crystals act as conduits for subtle energy, supporting clarity, emotional healing, and a lighter energetic state.",
        fullDescription:
          "Crystal healing utilises the natural vibrational properties of crystals to target and shift energy within the body. Each body part holds different frequencies due to the emotions stored within them. Practitioners place specific crystals on or around these areas to raise their frequency and release density. The crystals act as conduits for subtle energy, supporting clarity, emotional healing, and a lighter energetic state.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Crystal Healing",
        benefits: [
          "Uses natural vibrational properties of crystals",
          "Targets and shifts energy within the body",
          "Raises frequency and releases density",
          "Acts as conduits for subtle energy",
          "Supports clarity and emotional healing",
          "Creates lighter energetic state",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "shamanic-healing",
        title: "Shamanic Healing",
        description:
          "Shamanic healing is a sacred journey of reconnection—with the self, the Earth, and the greater mystery of existence. Rather than focusing solely on the retrieval of lost soul aspects, this path embraces the understanding that we are not merely people, but eternal energy beings. Healing arises through communion with the wisdom of the land and the elemental forces around us—the flowing rivers, the ever-changing wind, the rhythm of the sea, and the pulse of the earth. By aligning with these natural flows, we remember our place in creation and tap into energies that nourish the spirit. This deep connection allows us to rise above the confines of the human mind and return to a more expansive, timeless awareness.",
        fullDescription:
          "Shamanic healing is a sacred journey of reconnection—with the self, the Earth, and the greater mystery of existence. Rather than focusing solely on the retrieval of lost soul aspects, this path embraces the understanding that we are not merely people, but eternal energy beings. Healing arises through communion with the wisdom of the land and the elemental forces around us—the flowing rivers, the ever-changing wind, the rhythm of the sea, and the pulse of the earth. By aligning with these natural flows, we remember our place in creation and tap into energies that nourish the spirit. This deep connection allows us to rise above the confines of the human mind and return to a more expansive, timeless awareness.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Shamanic Healing",
        benefits: [
          "Sacred journey of reconnection",
          "Reconnects with self, Earth, and existence",
          "Communion with wisdom of the land",
          "Aligns with elemental forces",
          "Remembers place in creation",
          "Rises above human mind limitations",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "buddhist-energy-healing",
        title: "Buddhist Energy Healing",
        description:
          "This tradition focuses primarily on healing physical illness and restoring the body's vibrational harmony. Illness is often seen as a manifestation of karmic imbalance or emotional density that lowers the frequency of certain areas of the body. Healers use subtle hand movements and energetic scanning to identify and clear these dense zones, often placing hands on the head to connect with the client's consciousness. The process may involve multiple healers, especially for acute conditions, and is rooted in a deep understanding of Dharma, compassion, and the mind–body connection.",
        fullDescription:
          "This tradition focuses primarily on healing physical illness and restoring the body's vibrational harmony. Illness is often seen as a manifestation of karmic imbalance or emotional density that lowers the frequency of certain areas of the body. Healers use subtle hand movements and energetic scanning to identify and clear these dense zones, often placing hands on the head to connect with the client's consciousness. The process may involve multiple healers, especially for acute conditions, and is rooted in a deep understanding of Dharma, compassion, and the mind–body connection.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Buddhist Energy Healing",
        benefits: [
          "Focuses on healing physical illness",
          "Restores body's vibrational harmony",
          "Addresses karmic imbalance",
          "Clears emotional density",
          "Uses subtle hand movements and scanning",
          "Rooted in Dharma and compassion",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
    ],
  },
  {
    slug: "natural-glow",
    hero: {
      title: "Natural Glow",
      subtitle: "Integrative Skincare",
      description:
        "Inspired by the time-honoured practices of Ayurveda, our treatments are designed to bring you back into balance—physically, emotionally, and energetically. Each session honours your unique constitution (dosha) and supports natural healing through marma point therapy, detoxifying tools like the Kansa Wand, and grounding, intentional touch. Whether you're seeking relief from physical discomfort, emotional overwhelm, or simply craving stillness, our Ayurvedic offerings invite you to reconnect with your inner rhythm and restore harmony from within.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "therapeutic-foot-massage-kansa-wand",
        title: "Therapeutic Foot Massage with Kansa Wand",
        description:
          "An Ayurvedic-inspired grounding ritual to soothe, detoxify, and restore balance. The Therapeutic Foot Massage with Kansa Wand at Holistic Rising is a deeply restorative treatment rooted in Ayurvedic tradition, combining the therapeutic benefits of reflexology with the healing power of the Kansa Wand—a sacred metal tool known in Ayurveda for its balancing and detoxifying properties.",
        fullDescription:
          "An Ayurvedic-inspired grounding ritual to soothe, detoxify, and restore balance. The Therapeutic Foot Massage with Kansa Wand at Holistic Rising is a deeply restorative treatment rooted in Ayurvedic tradition, combining the therapeutic benefits of reflexology with the healing power of the Kansa Wand—a sacred metal tool known in Ayurveda for its balancing and detoxifying properties.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Therapeutic Foot Massage with Kansa Wand",
        benefits: [
          "Ayurvedic-inspired grounding ritual",
          "Soothes, detoxifies, and restores balance",
          "Combines reflexology with Kansa Wand",
          "Uses sacred metal tool for healing",
          "Deeply restorative treatment",
          "Rooted in Ayurvedic tradition",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "facial-rejuvenation-massage-kansa-wand",
        title: "Facial Rejuvenation Massage with Kansa Wand",
        description:
          "An Ayurvedic ritual to tone, detoxify and restore radiance to the skin and spirit. The Facial Rejuvenation Massage with Kansa Wand is a luxurious Ayurvedic treatment that works to revitalise the skin, calm the nervous system, and promote a natural glow from within. Rooted in ancient Indian healing traditions, this treatment uses the Kansa Wand — a sacred bronze tool made from a healing alloy of copper, tin, and zinc — renowned for its detoxifying and balancing properties.",
        fullDescription:
          "An Ayurvedic ritual to tone, detoxify and restore radiance to the skin and spirit. The Facial Rejuvenation Massage with Kansa Wand is a luxurious Ayurvedic treatment that works to revitalise the skin, calm the nervous system, and promote a natural glow from within. Rooted in ancient Indian healing traditions, this treatment uses the Kansa Wand — a sacred bronze tool made from a healing alloy of copper, tin, and zinc — renowned for its detoxifying and balancing properties.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Facial Rejuvenation Massage with Kansa Wand",
        benefits: [
          "Tones, detoxifies and restores radiance",
          "Revitalises the skin",
          "Calms the nervous system",
          "Promotes natural glow from within",
          "Uses sacred bronze Kansa Wand",
          "Rooted in ancient Indian traditions",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "holistic-abdominal-massage-digestive-wellness",
        title: "Holistic Abdominal Massage for digestive wellness",
        description:
          "An Ayurvedic approach to detoxification, hormonal balance, and inner harmony. The Holistic Abdominal Massage at Holistic Rising is a therapeutic treatment rooted in the ancient principles of Ayurveda, designed to bring balance to the digestive, reproductive, and nervous systems by working gently yet purposefully through the abdomen. This massage supports the natural movement of the digestive tract, aids in detoxification, and helps to release stored emotional tension held in the core of the body.",
        fullDescription:
          "An Ayurvedic approach to detoxification, hormonal balance, and inner harmony. The Holistic Abdominal Massage at Holistic Rising is a therapeutic treatment rooted in the ancient principles of Ayurveda, designed to bring balance to the digestive, reproductive, and nervous systems by working gently yet purposefully through the abdomen. This massage supports the natural movement of the digestive tract, aids in detoxification, and helps to release stored emotional tension held in the core of the body.",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Holistic Abdominal Massage for digestive wellness",
        benefits: [
          "Ayurvedic approach to detoxification",
          "Brings balance to digestive, reproductive, and nervous systems",
          "Supports natural digestive movement",
          "Aids in detoxification",
          "Releases stored emotional tension",
          "Promotes hormonal balance and inner harmony",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "revitalising-head-scalp-shoulders-face-massage",
        title:
          "Revitalising Head, Scalp, Shoulders, and Face Massage (Indian head massage)",
        description:
          "At Holistic Rising, our Revitalising Head, Scalp, Shoulders & Face Massage—traditionally known as Indian Head Massage—is a deeply calming and rebalancing therapy rooted in ancient Ayurvedic practice. This treatment focuses on the upper chakras and key marma (energy) points of the head, face, neck and shoulders, offering profound relief from tension, stress, and mental fatigue.",
        fullDescription:
          "At Holistic Rising, our Revitalising Head, Scalp, Shoulders & Face Massage—traditionally known as Indian Head Massage—is a deeply calming and rebalancing therapy rooted in ancient Ayurvedic practice. This treatment focuses on the upper chakras and key marma (energy) points of the head, face, neck and shoulders, offering profound relief from tension, stress, and mental fatigue.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel:
          "Revitalising Head, Scalp, Shoulders, and Face Massage (Indian head massage)",
        benefits: [
          "Deeply calming and rebalancing therapy",
          "Rooted in ancient Ayurvedic practice",
          "Focuses on upper chakras and marma points",
          "Offers relief from tension and stress",
          "Reduces mental fatigue",
          "Works on head, face, neck and shoulders",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "ayurvedic-facelift-massage",
        title: "Ayurvedic Facelift Massage",
        description:
          "A natural, holistic approach to facial rejuvenation, radiance, and inner harmony. The Ayurvedic Facelift Massage at Holistic Rising is a deeply restorative, non-invasive treatment that tones the facial muscles, stimulates lymphatic flow, and encourages a youthful glow—entirely through the power of therapeutic touch and herbal nourishment. Rooted in Ayurvedic wisdom, this treatment works beyond the surface of the skin, activating vital marma points and rebalancing the subtle energy systems of the face and upper body.",
        fullDescription:
          "A natural, holistic approach to facial rejuvenation, radiance, and inner harmony. The Ayurvedic Facelift Massage at Holistic Rising is a deeply restorative, non-invasive treatment that tones the facial muscles, stimulates lymphatic flow, and encourages a youthful glow—entirely through the power of therapeutic touch and herbal nourishment. Rooted in Ayurvedic wisdom, this treatment works beyond the surface of the skin, activating vital marma points and rebalancing the subtle energy systems of the face and upper body.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Ayurvedic Facelift Massage",
        benefits: [
          "Natural, holistic approach to facial rejuvenation",
          "Tones facial muscles",
          "Stimulates lymphatic flow",
          "Encourages youthful glow",
          "Non-invasive treatment",
          "Activates vital marma points",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "rose-steam-ritual",
        title: "ROSE STEAM RITUAL",
        description:
          "Immerse yourself in a sanctuary of pure indulgence with our Neal's Yard Rose Steam Ritual—a luxurious treatment designed to purify, refresh, and elevate both skin and spirit.",
        fullDescription:
          "Immerse yourself in a sanctuary of pure indulgence with our Neal's Yard Rose Steam Ritual—a luxurious treatment designed to purify, refresh, and elevate both skin and spirit.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Rose Steam Ritual",
        benefits: [
          "Luxurious Neal's Yard treatment",
          "Purifies, refreshes, and elevates",
          "Sanctuary of pure indulgence",
          "Benefits both skin and spirit",
          "Rose-infused steam therapy",
          "Deeply rejuvenating experience",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "luxury-rose-oil-quartz-radiance-ritual",
        title: "LUXURY ROSE OIL & QUARTS RADIANCE RITUAL",
        description:
          "Surrender to the ultimate experience of beauty and renewal with our Luxury Rose Radiance Ritual—a decadent fusion of steam purification, deep renewal, and crystal energy work, designed to lift vibration, restore harmony, and leave you glowing inside and out.",
        fullDescription:
          "Surrender to the ultimate experience of beauty and renewal with our Luxury Rose Radiance Ritual—a decadent fusion of steam purification, deep renewal, and crystal energy work, designed to lift vibration, restore harmony, and leave you glowing inside and out.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "LUXURY ROSE OIL & QUARTS RADIANCE RITUAL",
        benefits: [
          "Ultimate experience of beauty and renewal",
          "Decadent fusion of steam and crystal energy",
          "Lifts vibration and restores harmony",
          "Leaves you glowing inside and out",
          "Deep renewal and purification",
          "Luxury rose oil treatment",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "luxury-back-renewal-ritual",
        title: "LUXURY BACK RENEWAL RITUAL",
        description:
          "Experience the ultimate indulgence for body and spirit with our Luxury Back Renewal Ritual—a balancing Neal's Yard oil–infused steam treatment designed to deeply detoxify, rejuvenate, and restore harmony to the back, neck and shoulders.",
        fullDescription:
          "Experience the ultimate indulgence for body and spirit with our Luxury Back Renewal Ritual—a balancing Neal's Yard oil–infused steam treatment designed to deeply detoxify, rejuvenate, and restore harmony to the back, neck and shoulders.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "LUXURY BACK RENEWAL RITUAL",
        benefits: [
          "Ultimate indulgence for body and spirit",
          "Neal's Yard oil–infused steam treatment",
          "Deeply detoxifies and rejuvenates",
          "Restores harmony to back, neck and shoulders",
          "Balancing and restorative",
          "Luxury treatment experience",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "neals-yard-aromatherapy-massage",
        title: "NEALS YARD ARMOATHERAPY MASSAGE",
        description:
          "Immerse yourself in a sanctuary of pure indulgence with our Neal's Yard Rose Steam Ritual—a luxurious treatment designed to purify, refresh, and elevate both skin and spirit.",
        fullDescription:
          "Immerse yourself in a sanctuary of pure indulgence with our Neal's Yard Aromatherapy Massage—a luxurious treatment designed to purify, refresh, and elevate both skin and spirit through the therapeutic power of essential oils.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "NEALS YARD ARMOATHERAPY MASSAGE",
        benefits: [
          "Sanctuary of pure indulgence",
          "Neal's Yard aromatherapy treatment",
          "Purifies, refreshes, and elevates",
          "Therapeutic power of essential oils",
          "Benefits both skin and spirit",
          "Luxurious treatment experience",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "relax-release-ritual",
        title: "RELAX AND RELEASE RITUAL",
        description:
          "Let your body exhale and your spirit unwind with our Relaxing Ritual—a deeply calming experience that blends a range of traditional massage techniques, including effleurage, petrissage, and gentle rhythmic strokes. Each movement is carefully designed to melt away tension, soothe the nervous system, and restore harmony between mind, body, and spirit.",
        fullDescription:
          "Let your body exhale and your spirit unwind with our Relaxing Ritual—a deeply calming experience that blends a range of traditional massage techniques, including effleurage, petrissage, and gentle rhythmic strokes. Each movement is carefully designed to melt away tension, soothe the nervous system, and restore harmony between mind, body, and spirit.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "RELAX AND RELEASE RITUAL",
        benefits: [
          "Deeply calming experience",
          "Blends traditional massage techniques",
          "Melts away tension",
          "Soothes the nervous system",
          "Restores harmony between mind, body, and spirit",
          "Gentle rhythmic strokes",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "face-neck-sculpting-treatment",
        title: "FACE & NECK SCULPTING TREATMENT",
        description:
          "Our Face and Neck Sculpting Treatment is a deeply restorative and rejuvenating experience that blends therapeutic techniques with natural beauty enhancement. This unique treatment combines buccal massage, opiate ear candle therapy, gua sha, sculptural face lifting, and face yoga to create an overall sense of openness, clarity, and renewed energy.",
        fullDescription:
          "Our Face and Neck Sculpting Treatment is a deeply restorative and rejuvenating experience that blends therapeutic techniques with natural beauty enhancement. This unique treatment combines buccal massage, opiate ear candle therapy, gua sha, sculptural face lifting, and face yoga to create an overall sense of openness, clarity, and renewed energy.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "FACE & NECK SCULPTING",
        benefits: [
          "Deeply restorative and rejuvenating",
          "Blends therapeutic techniques with beauty enhancement",
          "Combines buccal massage and gua sha",
          "Includes sculptural face lifting and face yoga",
          "Creates openness, clarity, and renewed energy",
          "Natural beauty enhancement",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "dry-cupping-therapy",
        title: "DRY CUPPING THERAPY",
        description:
          "A gentle, non-invasive treatment that promotes detoxification and enhances overall wellbeing. Dry cupping therapy involves placing cups gently on various areas of the body to create suction, which helps to draw toxins to the surface of the skin and encourage the body's natural detoxification processes. Unlike other cupping methods used for deep tissue decompression, this technique is non-painful and very gentle, focusing primarily on stimulating the top layers of the skin.",
        fullDescription:
          "A gentle, non-invasive treatment that promotes detoxification and enhances overall wellbeing. Dry cupping therapy involves placing cups gently on various areas of the body to create suction, which helps to draw toxins to the surface of the skin and encourage the body's natural detoxification processes. Unlike other cupping methods used for deep tissue decompression, this technique is non-painful and very gentle, focusing primarily on stimulating the top layers of the skin.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "DRY CUPPING THERAPY",
        benefits: [
          "Gentle, non-invasive treatment",
          "Promotes detoxification",
          "Enhances overall wellbeing",
          "Draws toxins to the surface",
          "Encourages natural detoxification",
          "Non-painful and very gentle",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "sculpting-treatment",
        title: "SCULPTING TREATMENT",
        description:
          "The Sculpting Treatment at Holistic Rising is a targeted and transformative therapy designed to address stubborn fat and deeply stored fluid retention that may not respond to diet and exercise alone. This dynamic technique works through the deeper layers of the skin and fascia, encouraging the body to naturally detoxify, mobilise stored fat, and refine the silhouette.",
        fullDescription:
          "The Sculpting Treatment at Holistic Rising is a targeted and transformative therapy designed to address stubborn fat and deeply stored fluid retention that may not respond to diet and exercise alone. This dynamic technique works through the deeper layers of the skin and fascia, encouraging the body to naturally detoxify, mobilise stored fat, and refine the silhouette.",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "SCULPTING TREATMENT",
        benefits: [
          "Targeted and transformative therapy",
          "Addresses stubborn fat and fluid retention",
          "Works through deeper layers of skin and fascia",
          "Encourages natural detoxification",
          "Mobilises stored fat",
          "Refines the silhouette",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "reiki-crystal-healing-massage",
        title: "REIKI OR CRYSTAL HEALING MASSAGE",
        description:
          "Allow yourself to be gently guided into a space of pure stillness and healing with our Angelic Reiki with Soothing Aromatherapy Massage—a deeply nurturing treatment that combines the high vibrational energy of Angelic Reiki with the calming power of therapeutic touch and natural essential oils.",
        fullDescription:
          "Allow yourself to be gently guided into a space of pure stillness and healing with our Angelic Reiki with Soothing Aromatherapy Massage—a deeply nurturing treatment that combines the high vibrational energy of Angelic Reiki with the calming power of therapeutic touch and natural essential oils.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "REIKI OR CRYSTAL HEALING MASSAGE",
        benefits: [
          "Space of pure stillness and healing",
          "High vibrational energy of Angelic Reiki",
          "Combines with soothing aromatherapy massage",
          "Deeply nurturing treatment",
          "Calming power of therapeutic touch",
          "Uses natural essential oils",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "hot-stone-foot-lower-leg-massage",
        title: "RHOT STONE FOOT & LOWER LEG MASSAGE",
        description:
          "Treat your feet and lower legs to a deeply grounding and restorative experience with our Hot Stone Foot & Lower Leg Massage. This indulgent treatment combines the therapeutic warmth of smooth basalt stones with gentle, flowing massage techniques to ease tired muscles, reduce tension, and bring balance back to your body.",
        fullDescription:
          "Treat your feet and lower legs to a deeply grounding and restorative experience with our Hot Stone Foot & Lower Leg Massage. This indulgent treatment combines the therapeutic warmth of smooth basalt stones with gentle, flowing massage techniques to ease tired muscles, reduce tension, and bring balance back to your body.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "HOT STONE FOOT & LOWER LEG MASSAGE",
        benefits: [
          "Deeply grounding and restorative",
          "Therapeutic warmth of basalt stones",
          "Gentle, flowing massage techniques",
          "Eases tired muscles",
          "Reduces tension",
          "Brings balance back to your body",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "basalt-hot-stone-massage",
        title: "RBASALT HOT STONE MASSAGE",
        description:
          "Indulge in one of the most luxurious treatments we offer with our Basalt Hot Stone Full Body Massage—a deeply restorative experience that invites your body to unwind, your energy to rebalance, and your spirit to soften.",
        fullDescription:
          "Indulge in one of the most luxurious treatments we offer with our Basalt Hot Stone Full Body Massage—a deeply restorative experience that invites your body to unwind, your energy to rebalance, and your spirit to soften.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "RBASALT HOT STONE MASSAGE",
        benefits: [
          "One of the most luxurious treatments",
          "Deeply restorative experience",
          "Invites body to unwind",
          "Rebalances energy",
          "Softens the spirit",
          "Full body basalt hot stone massage",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "radiance-renewal-ritual",
        title: "RADIANCE RENEWAL RITUAL",
        description:
          "Step into a journey of renewal, where skin and spirit are gently awakened. With this ritual experience Neal's yard oils, masks and deep organic glow, focusing on deep detoxification, unclogging pores and removing impurities, while sweeping away dull and tired cells to reveal your natural luminosity beneath.",
        fullDescription:
          "Step into a journey of renewal, where skin and spirit are gently awakened. With this ritual experience Neal's yard oils, masks and deep organic glow, focusing on deep detoxification, unclogging pores and removing impurities, while sweeping away dull and tired cells to reveal your natural luminosity beneath.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "RADIANCE RENEWAL RITUAL",
        benefits: [
          "Journey of renewal",
          "Gently awakens skin and spirit",
          "Neal's Yard oils and masks",
          "Deep detoxification",
          "Unclogs pores and removes impurities",
          "Reveals natural luminosity",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
    ],
  },
  {
    slug: "healing-movement",
    hero: {
      title: "HEALING MOVEMENT YOGA",
      subtitle: "Integrative Mind-Body Practice",
      description:
        "At Holistic Rising, Healing Movement is an integrative mind-body practice that supports the deepening of your healing journey. Designed to complement our therapeutic treatments, these practices empower you to continue nurturing your well-being on a daily basis, fostering a sense of freedom, presence, and transformation. This evolving program includes a variety of healing modalities such as Mandala Yoga, Yin Flow, Free Movement inspired by Tai Chi, Breathwork & Meditation, and Self-Healing Techniques. Together, these practices form a holistic movement experience that supports physical release, energetic alignment, emotional awareness, and spiritual connection.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "mandala-yoga-elemental-flow",
        title: "Mandala Yoga: Elemental Flow for the Body",
        description:
          "Mandala Yoga at Holistic Rising is a dynamic and grounding practice that flows 360 degrees around the mat, creating a meditative and physically expressive experience. Rooted in the five elements—Earth, Water, Fire, Air, and Ether—each session focuses on a different area of the body associated with that element. Over the course of five weeks, participants move through a thoughtfully crafted sequence that targets strength, flexibility, and energetic activation. This practice is both fluid and intentional, weaving together breath and movement in a circular format that mirrors the cycles of nature and the rhythm of the body. Developed by our yoga specialist Georgia in collaboration with founder Maria, Mandala Yoga serves as a foundation for physical awareness and elemental balance.",
        fullDescription:
          "Mandala Yoga at Holistic Rising is a dynamic and grounding practice that flows 360 degrees around the mat, creating a meditative and physically expressive experience. Rooted in the five elements—Earth, Water, Fire, Air, and Ether—each session focuses on a different area of the body associated with that element. Over the course of five weeks, participants move through a thoughtfully crafted sequence that targets strength, flexibility, and energetic activation. This practice is both fluid and intentional, weaving together breath and movement in a circular format that mirrors the cycles of nature and the rhythm of the body. Developed by our yoga specialist Georgia in collaboration with founder Maria, Mandala Yoga serves as a foundation for physical awareness and elemental balance.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Healing Movement Yoga",
        benefits: [
          "Dynamic and grounding practice",
          "Flows 360 degrees around the mat",
          "Rooted in five elements",
          "Targets strength, flexibility, and energetic activation",
          "Five-week rotational sequence",
          "Developed by yoga specialist Georgia and founder Maria",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "yin-flow-meridian-release",
        title: "Yin Flow: Meridian-Based Release and Recovery",
        description:
          "Yin Flow is a deeply restorative practice that blends traditional Yin Yoga with subtle movement and breath awareness. Each session is designed to target one of the five main meridians of the body—pathways through which vital energy (Qi) flows. By gently stimulating these meridians, Yin Flow encourages emotional release, organ support, and inner stillness. This practice offers space to slow down, surrender, and access deeper layers of physical and energetic tension. Movements are held for extended periods, allowing the connective tissues to release while supporting mental clarity and nervous system regulation",
        fullDescription:
          "Yin Flow is a deeply restorative practice that blends traditional Yin Yoga with subtle movement and breath awareness. Each session is designed to target one of the five main meridians of the body—pathways through which vital energy (Qi) flows. By gently stimulating these meridians, Yin Flow encourages emotional release, organ support, and inner stillness. This practice offers space to slow down, surrender, and access deeper layers of physical and energetic tension. Movements are held for extended periods, allowing the connective tissues to release while supporting mental clarity and nervous system regulation",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Healing Movement Yoga",
        benefits: [
          "Deeply restorative practice",
          "Blends Yin Yoga with subtle movement",
          "Targets five main meridians",
          "Encourages emotional release and organ support",
          "Allows connective tissues to release",
          "Supports mental clarity and nervous system regulation",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "healing-movement-pilates",
        title: "Healing Movement Pilates at Holistic Rising with Dayoung",
        description:
          "Healing Movement Pilates follows the same five-week rotational structure as our Mandala and Yin Healing Movement classes, designed to work in harmony and synchronicity with them. Each class within the series focuses on different meridians of the body, creating a circular and fluid healing experience rooted in the elemental energies. This Pilates class has been thoughtfully introduced in response to client demand, recognising a key gap in many modern gym-based routines which often overlook the body's inner core and deep stabilising muscles. Healing Movement Pilates specifically targets the internal muscular system – the muscles closest to the skeletal structure – which are vital for joint support, postural integrity, and long-term physical resilience.",
        fullDescription:
          "Healing Movement Pilates follows the same five-week rotational structure as our Mandala and Yin Healing Movement classes, designed to work in harmony and synchronicity with them. Each class within the series focuses on different meridians of the body, creating a circular and fluid healing experience rooted in the elemental energies. This Pilates class has been thoughtfully introduced in response to client demand, recognising a key gap in many modern gym-based routines which often overlook the body's inner core and deep stabilising muscles. Healing Movement Pilates specifically targets the internal muscular system – the muscles closest to the skeletal structure – which are vital for joint support, postural integrity, and long-term physical resilience. These deep muscles are closely connected to ligaments and tendons, and play a crucial role in both high-performance movement and in the release of deep rooted trauma. By strengthening these internal systems, we reduce the risk of injury and minimise the body's trauma responses, particularly those linked to the Golgi tendon reflex – which regulates sudden, explosive movements or jerking movements often linked to injury. This inner strength is not only essential for physical transformation, but also for grounding the nervous system and cultivating overall balance. Each class includes dedicated work on the pelvic floor, designed for all bodies – both male and female – to support the strengthening and conscious release of this often-overlooked area. A balanced pelvic floor is foundational for sexual health, hormone regulation, and achieving homeostasis. Rooted in the principles of the root chakra, this class teaches how to build and release strength from the ground up – supporting manifestation, grounding, and inner harmony.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Healing Movement Yoga",
        benefits: [
          "Five-week rotational structure",
          "Works in harmony with Mandala and Yin classes",
          "Targets internal muscular system",
          "Vital for joint support and postural integrity",
          "Reduces risk of injury",
          "Includes pelvic floor work for all bodies",
          "Rooted in root chakra principles",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
    ],
  },
  {
    slug: "maternal-massage",
    hero: {
      title:
        "MATERNAL MASSAGES FOR PRENATAL, MATERNAL & POSTNATAL MASSAGE TREATMENTS",
      subtitle: "Specialised Maternity Care",
      description:
        "At Holistic Rising, we offer specialised maternity massage treatments from as early as 4 to 6 weeks of pregnancy, continuing right through to 39 to 40 weeks.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "prenatal-massage-treatment",
        title: "Prenatal Massage Treatment",
        description:
          "This deeply nurturing and integrative treatment is designed for women in the preconception phase, offering physical, emotional, and energetic preparation for pregnancy. The Prenatal Massage Treatment at Holistic Rising combines ancient wisdom and therapeutic bodywork to regulate menstrual flow, enhance fertility, and support the body in its readiness to conceive.",
        fullDescription:
          "This deeply nurturing and integrative treatment is designed for women in the preconception phase, offering physical, emotional, and energetic preparation for pregnancy. The Prenatal Massage Treatment at Holistic Rising combines ancient wisdom and therapeutic bodywork to regulate menstrual flow, enhance fertility, and support the body in its readiness to conceive.",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Prenatal Massage Treatment",
        benefits: [
          "Deeply nurturing and integrative treatment",
          "Designed for preconception phase",
          "Physical, emotional, and energetic preparation",
          "Regulates menstrual flow",
          "Enhances fertility",
          "Supports body's readiness to conceive",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "maternity-massage",
        title: "Maternity Massage",
        description:
          "Our treatments go beyond the typical gentle stroking techniques often associated with maternity massage. While we use safe and soothing strokes, we also incorporate rhythmic and supportive techniques designed to relieve tension, mobilise the hips and ankles, and drain excess fluid — all of which are essential to ease the natural heaviness of pregnancy. We draw from light Swedish massage, lymphatic drainage, and gentle myofascial work, always adapted with care to suit each stage of pregnancy. These methods help reduce swelling, support circulation, ease back and pelvic discomfort, and promote restful sleep and emotional balance.",
        fullDescription:
          "Our treatments go beyond the typical gentle stroking techniques often associated with maternity massage. While we use safe and soothing strokes, we also incorporate rhythmic and supportive techniques designed to relieve tension, mobilise the hips and ankles, and drain excess fluid — all of which are essential to ease the natural heaviness of pregnancy. We draw from light Swedish massage, lymphatic drainage, and gentle myofascial work, always adapted with care to suit each stage of pregnancy. These methods help reduce swelling, support circulation, ease back and pelvic discomfort, and promote restful sleep and emotional balance.",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Maternity Massage",
        benefits: [
          "Goes beyond typical gentle techniques",
          "Relieves tension and mobilises hips and ankles",
          "Drains excess fluid",
          "Reduces swelling and supports circulation",
          "Eases back and pelvic discomfort",
          "Promotes restful sleep and emotional balance",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "postnatal-massage",
        title: "Postnatal Massage",
        description:
          "At Holistic Rising, our postnatal treatments are thoughtfully designed to support new mothers in healing holistically from the profound experience of birth—an experience that brings both transformation and new life into the world. In this nurturing space, we focus on rebalancing hormones using therapeutic oils and hot oil compresses, helping the body and mind return to a state of harmony.",
        fullDescription:
          "At Holistic Rising, our postnatal treatments are thoughtfully designed to support new mothers in healing holistically from the profound experience of birth—an experience that brings both transformation and new life into the world. In this nurturing space, we focus on rebalancing hormones using therapeutic oils and hot oil compresses, helping the body and mind return to a state of harmony.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Book Postnatal Massage",
        benefits: [
          "Supports holistic healing from birth",
          "Thoughtfully designed for new mothers",
          "Rebalances hormones",
          "Uses therapeutic oils and hot oil compresses",
          "Helps body and mind return to harmony",
          "Nurturing space for transformation",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
    ],
  },
  {
    slug: "2by4",
    hero: {
      title: "2by4 Treatments",
      subtitle: "Dual Therapist Experience",
      description:
        "Experience the profound synergy of two therapists working fluidly with one client. This unique triad creates an energetic alchemy that allows for deep release and realignment. With skilled fascia stretching and an intuitive understanding of biomechanics and energetic balance, tension is gently eased from both agonist and antagonist muscles.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "gentle-deep-tissue-2by4",
        title: "Gentle & Deep Tissue 2by4",
        description:
          "At Holistic Rising, our Gentle & Deep Tissue 2x4 treatment is a harmonious fusion of therapies, designed to restore balance by addressing both the surface and deeper layers of the body — simultaneously. This cohesive energetic exchange not only enhances physical healing but also invites a profound sense of wholeness, clarity, and calm.",
        fullDescription:
          "At Holistic Rising, our Gentle & Deep Tissue 2x4 treatment is a harmonious fusion of therapies, designed to restore balance by addressing both the surface and deeper layers of the body — simultaneously. This cohesive energetic exchange not only enhances physical healing but also invites a profound sense of wholeness, clarity, and calm.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Gentle & Deep Tissue 2by4",
        benefits: [
          "Harmonious fusion of therapies",
          "Addresses surface and deeper layers simultaneously",
          "Cohesive energetic exchange",
          "Enhances physical healing",
          "Invites wholeness, clarity, and calm",
          "Restores balance throughout the body",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "sports-stretch-2by4",
        title: "Sports & Stretch 2by4",
        description:
          "The 2x4 method not only amplifies the therapeutic impact but also reduces the intensity often associated with traditional deep sports massage. The result? A more effective, efficient, and comfortable experience that supports recovery, performance, and long-term musculoskeletal health.",
        fullDescription:
          "The 2x4 method not only amplifies the therapeutic impact but also reduces the intensity often associated with traditional deep sports massage. The result? A more effective, efficient, and comfortable experience that supports recovery, performance, and long-term musculoskeletal health.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Sports & Stretch 2by4",
        benefits: [
          "Amplifies therapeutic impact",
          "Reduces intensity of deep sports massage",
          "More effective and efficient",
          "Comfortable experience",
          "Supports recovery and performance",
          "Promotes long-term musculoskeletal health",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "feet-hand-therapy-deep-tissue",
        title: "Feet Therapy or Hand Therapy & Therapeutic Deep Tissue Massage",
        description:
          "Indulge and restore with our deeply nourishing Feet or Hand Therapy, thoughtfully combined with a therapeutic deep tissue massage to create a full-body sense of release, balance, and renewal. This bespoke treatment begins with your choice of focused therapy for the hands or feet — areas that often work harder than any other part of the body and carry a surprising amount of tension.",
        fullDescription:
          "Indulge and restore with our deeply nourishing Feet or Hand Therapy, thoughtfully combined with a therapeutic deep tissue massage to create a full-body sense of release, balance, and renewal. This bespoke treatment begins with your choice of focused therapy for the hands or feet — areas that often work harder than any other part of the body and carry a surprising amount of tension.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel:
          "Feet Therapy or Hand Therapy & Therapeutic Deep Tissue Massage",
        benefits: [
          "Deeply nourishing therapy",
          "Choice of feet or hand therapy",
          "Combined with therapeutic deep tissue massage",
          "Full-body sense of release",
          "Creates balance and renewal",
          "Addresses areas that carry tension",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "sculpt-ayurveda-face-lift",
        title: "Sculpt & Ayurveda Face Lift",
        description:
          "Experience the body-sculpting benefits of our Sculpt treatment, paired with the refreshing lift of the Ayurvedic Face Lift. These two treatments are ideal for those wishing to enhance their silhouette, rejuvenate their appearance, and restore a radiant, youthful glow.",
        fullDescription:
          "Experience the body-sculpting benefits of our Sculpt treatment, paired with the refreshing lift of the Ayurvedic Face Lift. These two treatments are ideal for those wishing to enhance their silhouette, rejuvenate their appearance, and restore a radiant, youthful glow.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Sculpt & Ayurveda Face Lift",
        benefits: [
          "Body-sculpting benefits",
          "Refreshing Ayurvedic Face Lift",
          "Enhances silhouette",
          "Rejuvenates appearance",
          "Restores radiant, youthful glow",
          "Ideal combination treatment",
        ],
        pricingOptions: [
          { duration: "120 minutes", price: "£180.00" },
          { duration: "150 minutes", price: "£220.00" },
        ],
      },
      {
        slug: "trauma-release-ayurveda-head-massage",
        title: "Trauma Release Massage & Ayurveda Head Massage",
        description:
          "Our 2x4 Trauma Release is a powerful, holistic treatment designed to release trauma stored in the body's fascia and energetic system. Trauma is often embedded deep within physical tissues and energetic pathways, particularly when left unresolved. This treatment works with the body's natural breath rhythm, allowing for a safe and cohesive release of trapped emotional and physical tension.",
        fullDescription:
          "Our 2x4 Trauma Release is a powerful, holistic treatment designed to release trauma stored in the body's fascia and energetic system. Trauma is often embedded deep within physical tissues and energetic pathways, particularly when left unresolved. This treatment works with the body's natural breath rhythm, allowing for a safe and cohesive release of trapped emotional and physical tension.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Trauma Release Massage & Ayurveda Head Massage",
        benefits: [
          "Powerful, holistic treatment",
          "Releases trauma stored in fascia and energetic system",
          "Works with body's natural breath rhythm",
          "Safe and cohesive release",
          "Addresses trapped emotional and physical tension",
          "Combined with Ayurvedic head massage",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "gentle-massage-energy-healing",
        title: "Gentle Massage with Energy Healing",
        description:
          'Discover the most luxurious way to relax and invigorate your energy we offer relaxing, aromatherapy or hot stone massage alongside any of our energy healing treatments. If you wish to choose either aromatherapy, hot stones, crystal healing or shamanic healing. *Please note your preferences (e.g. aromatherapy, hot stones, crystal healing or shamanic healing) in the "Form" below when booking.*',
        fullDescription:
          'Discover the most luxurious way to relax and invigorate your energy we offer relaxing, aromatherapy or hot stone massage alongside any of our energy healing treatments. If you wish to choose either aromatherapy, hot stones, crystal healing or shamanic healing. *Please note your preferences (e.g. aromatherapy, hot stones, crystal healing or shamanic healing) in the "Form" below when booking.*',
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Gentle Massage with Energy Healing",
        benefits: [
          "Most luxurious way to relax",
          "Invigorates your energy",
          "Combines massage with energy healing",
          "Choose aromatherapy, hot stones, or crystal healing",
          "Shamanic healing options available",
          "Personalised treatment experience",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
    ],
  },
  {
    slug: "dr-hr-sports-london",
    hero: {
      title: "DR / HR Sports Clinic",
      subtitle: "Sports Massage and Treatments",
      description:
        "Designed by co-founder Diego Robinson, these high-performance, results-driven treatments aim to achieve measurable change in just one session. They combine elite-level sports therapy with biomechanical analysis, intuitive assessment, and functional movement expertise.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "full-body-reset",
        title: "Full Body Reset",
        description:
          "This All-Encompassing 90 min manual therapy treatment closely analyses the anatomical movement of the full body, whilst strategically selecting the most effective modalities to increase mobility & stimulate the body's natural healing mechanisms.",
        fullDescription:
          "This All-Encompassing 90 min manual therapy treatment closely analyses the anatomical movement of the full body, whilst strategically selecting the most effective modalities to increase mobility & stimulate the body's natural healing mechanisms.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Full Body Reset",
        benefits: [
          "All-encompassing 90 min treatment",
          "Closely analyses anatomical movement",
          "Strategically selects effective modalities",
          "Increases mobility",
          "Stimulates natural healing mechanisms",
          "Comprehensive full body approach",
        ],
        pricingOptions: [{ duration: "90 minutes", price: "£120.00" }],
      },
      {
        slug: "area-focused-sports-treatment",
        title: "AREA-FOCUSED SPORTS TREATMENT",
        description:
          "This 1 hr Bespoke Treatment directly tackles habitually caused postural imabalances & primary areas of discomfort in the upper body. Aimed to increase mobility & reduce discomfort.",
        fullDescription:
          "This 1 hr Bespoke Treatment directly tackles habitually caused postural imabalances & primary areas of discomfort in the upper body. Aimed to increase mobility & reduce discomfort.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "AREA-FOCUSED SPORTS TREATMENT",
        benefits: [
          "1 hr bespoke treatment",
          "Tackles postural imbalances",
          "Addresses primary areas of discomfort",
          "Focuses on upper body",
          "Increases mobility",
          "Reduces discomfort",
        ],
        pricingOptions: [{ duration: "60 minutes", price: "£80.00" }],
      },
      {
        slug: "sports-massage",
        title: "Sports Massage",
        description:
          "The Sports Massage offered at Holistic Rising is a highly effective, therapeutic treatment tailored for individuals who lead physically active lifestyles or engage in repetitive physical exertion. Whether you're a professional athlete, a dedicated gym-goer, a dancer, or someone with a physically demanding occupation, this treatment is designed to optimise muscular health, prevent injury, and aid recovery.",
        fullDescription:
          "The Sports Massage offered at Holistic Rising is a highly effective, therapeutic treatment tailored for individuals who lead physically active lifestyles or engage in repetitive physical exertion. Whether you're a professional athlete, a dedicated gym-goer, a dancer, or someone with a physically demanding occupation, this treatment is designed to optimise muscular health, prevent injury, and aid recovery.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Sports Massage",
        benefits: [
          "Highly effective therapeutic treatment",
          "Tailored for active lifestyles",
          "Optimises muscular health",
          "Prevents injury",
          "Aids recovery",
          "Suitable for athletes, gym-goers, dancers",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£80.00" },
          { duration: "90 minutes", price: "£110.00" },
        ],
      },
      {
        slug: "dynamic-sports-massage-cupping-therapy",
        title: "Dynamic Sports Massage & Cupping Therapy",
        description:
          "This advanced therapeutic treatment is tailored for those who demand more from their bodies — whether through physical work, high-intensity sport, or everyday strain. Combining the muscle-targeting techniques of sports massage with the detoxifying power of dry cupping, this therapy reaches areas that standard treatments often overlook.",
        fullDescription:
          "This advanced therapeutic treatment is tailored for those who demand more from their bodies — whether through physical work, high-intensity sport, or everyday strain. Combining the muscle-targeting techniques of sports massage with the detoxifying power of dry cupping, this therapy reaches areas that standard treatments often overlook.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Dynamic Sports Massage",
        benefits: [
          "Advanced therapeutic treatment",
          "Combines sports massage with cupping",
          "Detoxifying power of dry cupping",
          "Reaches areas standard treatments overlook",
          "Tailored for high-intensity demands",
          "Muscle-targeting techniques",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£80.00" },
          { duration: "90 minutes", price: "£110.00" },
        ],
      },
      {
        slug: "sports-stretch",
        title: "Sports & Stretch",
        description:
          "Our Sports and Stretch treatment is a focused, dynamic therapy designed to enhance the function and flexibility of one specific area of the body. This tailored session combines expert sports massage techniques with carefully guided stretching, both during the treatment and with personalised exercises for home practice.",
        fullDescription:
          "Our Sports and Stretch treatment is a focused, dynamic therapy designed to enhance the function and flexibility of one specific area of the body. This tailored session combines expert sports massage techniques with carefully guided stretching, both during the treatment and with personalised exercises for home practice.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Sports & Stretch",
        benefits: [
          "Focused, dynamic therapy",
          "Enhances function and flexibility",
          "Targets one specific area",
          "Combines sports massage with stretching",
          "Includes personalised home exercises",
          "Expert techniques",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£80.00" },
          { duration: "90 minutes", price: "£110.00" },
        ],
      },
      {
        slug: "runner-specific-massage",
        title: "Runner Specific Massage",
        description:
          "Our Runner Specific Massage is a specialised treatment designed exclusively for runners of all levels—from beginners to seasoned marathoners. This focused therapy targets the key areas that bear the brunt of running: the feet, calves, shins, thighs, and glutes. It's tailored to address common running-related issues such as gait imbalances, muscle tightness, and the often-debilitating condition of shin splints.",
        fullDescription:
          "Our Runner Specific Massage is a specialised treatment designed exclusively for runners of all levels—from beginners to seasoned marathoners. This focused therapy targets the key areas that bear the brunt of running: the feet, calves, shins, thighs, and glutes. It's tailored to address common running-related issues such as gait imbalances, muscle tightness, and the often-debilitating condition of shin splints.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Runner Specific Massage",
        benefits: [
          "Specialised for runners of all levels",
          "Targets feet, calves, shins, thighs, and glutes",
          "Addresses gait imbalances",
          "Reduces muscle tightness",
          "Helps with shin splints",
          "Focused therapy for running-specific issues",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£80.00" },
          { duration: "90 minutes", price: "£110.00" },
        ],
      },
    ],
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((service) => service.slug);
}
