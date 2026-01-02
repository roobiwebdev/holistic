export interface PricingOption {
  duration: string; // e.g., "60 minutes", "90 minutes"
  price: string; // e.g., "£70.00", "£100.00"
  bookingUrl?: string; // Vagaro booking URL for this specific duration
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
  bottomContent?: string;
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
      /* {
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
          {
            duration: "120 minutes",
            price: "£180.00",
            bookingUrl:
              "https://www.vagaro.com/cl/EB7eqG6UKZ-FfAQdwrZjTqKAF96tYMkS3CM0Ugp9AK0=",
          },
          // { duration: "90 minutes", price: "£100.00", bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=" }
        ],
      }, */
      {
        slug: "trauma-release-healing",
        title: "Trauma Release Healing",
        description:
          "A fusion of touch, energy, and awareness to restore ease and vitality. At Holistic Rising, our Trauma Release Healing service is a deeply integrative healing experience designed to support the release of the physical, energetic, and emotional imprints of trauma stored in the body.",
        fullDescription:
          "A fusion of touch, energy, and awareness to restore ease and vitality. At Holistic Rising, our Trauma Release Healing service is a deeply integrative healing experience designed to support the release of the physical, energetic, and emotional imprints of trauma stored in the body.\n\nThis treatment incorporates the flowing stretches, acupressure, and compression techniques of Thai massage, which support mobility, flexibility, and circulation, while working externally along the body’s meridian lines, as recognised in Traditional Chinese Medicine. These energy channels are understood in wellness practices to influence the flow of qi (life force). By supporting the release of tension and congestion along these pathways, the treatment encourages the body to move toward balance and systemic regulation.\n\nThe treatment also incorporates yogic healing practices applied externally to the energetic body, supporting the release of emotions often held in areas of long-term tension. Through mindful body-based assessment, the session supports identification of the “seed” of trauma—the emotional or energetic root behind persistent internal holding patterns.\n\nWe further incorporate Raynor Massage, working externally along the body’s energy lines to support systemic unblocking and flow. The treatment applies fascial release techniques to ease connective tissue surrounding and supporting the nervous system. Fascia can hold tension and fluid congestion dense with hormones, chemicals, fat, and lifestyle residue. By supporting release across these fascia pathways, the treatment encourages a feeling of internal decompression, openness, and nervous-system recalibration.\n\nTrauma release is also a full-body detoxing process. By opening the fascia lines, the treatment supports fluidity within the lymphatic system, helping the body process and release internal congestion through its natural secretion pathways.\n\nFollowing the session, clients may experience an integration period of 3 to 5 days, as the body continues processing the release. Some of the responses people may notice during this period include:\n\t•\tAn emotional detox response\n\t•\tA fluid detox response, where internal congestion may be processed and released through the body’s secretion organs\n\t•\tA gradual return of energy and vitality\n\nMany clients describe an instant rejuvenation effect after the session, particularly when long-standing patterns of tension linked to fight-or-flight responses have been held in the body over time. This treatment supports a feeling of release from chronic stress-triangle patterns, commonly referenced in wellbeing work as:\n\t•\tSaviour complex stress patterns\n\t•\tVictim-response tension imprints\n\t•\tAggressor-stress tension patterns\n\nThese references are presented here in a wellbeing and somatic context only and not as medical claims or diagnoses.\n\nThis treatment is a dedicated healing service for clients seeking deep and whole-body unblocking, detoxing, mobility support, and nervous-system recalibration, with the intention of supporting the alleviation of chronic pain symptoms commonly associated with trauma retention in the body. Clients have reported much success in their wellbeing outcomes when working with long-standing symptoms associated with autoimmune disease, and when undergoing systemic recovery following chemotherapy. Chronic pain symptoms associated with fibromyalgia are one of the key client-reported success stories of this treatment. Positive outcomes have also been reported by clients experiencing wellbeing challenges commonly associated with PTSD, ADHD, lupus, MS, and diabetes. Many clients regard this treatment as supportive for creating a grounded approach to daily life, encouraging alignment, self-connection, and a renewed sense of self-awareness and personal balance.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Trauma Release Healing",
        benefits: [
          "Deeply integrative healing experience",
          "Supports release of physical, energetic, and emotional imprints of trauma",
          "Combines Thai massage stretches and compression",
          "Works with meridian lines and TCM principles",
          "Incorporates external yogic healing and Raynor Massage",
          "Fascia release for nervous system recalibration",
          "Full-body detoxing and lymphatic support",
          "Supports chronic pain management and systemic recovery",
        ],
        pricingOptions: [
          {
            duration: "120 minutes",
            price: "£250.00",
            bookingUrl:
              "https://www.vagaro.com/cl/EB7eqG6UKZ-FfAQdwrZjTqKAF96tYMkS3CM0Ugp9AK0=",
          },
        ],
      },
      /* {
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
          {
            duration: "120 minutes",
            price: "£180.00",
            bookingUrl:
              "https://www.vagaro.com/cl/-9DfDGftu3HBQOMcfbBVjsoWVRjDhuob065Uoq8TRy4=",
          },
          // {
          //   duration: "90 minutes",
          //   price: "£100.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      }, */
      /* {
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
          {
            duration: "150 minutes",
            price: "£250.00",
            bookingUrl:
              "https://www.vagaro.com/cl/2d5F3GGhax4e~ZXqKkwwqY6Uzd5JKpaW5Z4Vg-UxZDw=",
          },
          // {
          //   duration: "120 minutes",
          //   price: "£160.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      }, */
      {
        slug: "frequency-2-trauma-energy-fusion",
        title: "Frequency 2 — Trauma Release Healing & Energy Healing Fusion",
        description:
          "The benefits of trauma healing combined with energy healing transmission, meridian clearing, and spiritual support. This stage introduces energetic coherence and emotional field restoration, weaving trauma release with subtle-body healing for deeper systemic balance.",
        fullDescription:
          "The benefits of trauma healing combined with energy healing transmission, meridian clearing, and spiritual support. This stage introduces energetic coherence and emotional field restoration, weaving trauma release with subtle-body healing for deeper systemic balance.\n\nA profound journey of liberation — from the body to the soul. At Holistic Rising, our Trauma Release & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Trauma & Energy Fusion",
        benefits: [
          "Trauma healing combined with energy transmission",
          "Meridian clearing and spiritual support",
          "Energetic coherence and emotional field restoration",
          "Releases trauma stored in the body",
          "Clears stagnation from energetic field",
          "Dissolves mental and emotional conditioning",
        ],
        pricingOptions: [
          {
            duration: "150 minutes",
            price: "£350.00",
            bookingUrl:
              "https://www.vagaro.com/cl/2d5F3GGhax4e~ZXqKkwwqY6Uzd5JKpaW5Z4Vg-UxZDw=",
          },
          // {
          //   duration: "120 minutes",
          //   price: "£160.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      },
      /* {
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
          {
            duration: "180 minutes",
            price: "£300.00",
            bookingUrl:
              "https://www.vagaro.com/cl/VyWEyjx44I0mS4H~3pgPnKsDV9AQnK3rzzW2Ytuqwq0=",
          },
          // {
          //   duration: "120 minutes",
          //   price: "£160.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      }, */
      {
        slug: "frequency-3-trauma-energy-ayurveda",
        title:
          "Frequency 3 — Trauma, Energy Healing with Ayurveda Herbal Complexity",
        description:
          "A layered fusion of trauma release bodywork, energy healing currents, and Ayurvedic herbal intelligence. This frequency incorporates the complexity of traditional hot-oil therapy, high-vibrational herbal oils, and tissue-level purification, supporting detoxification through the fascia, fluid system, and endocrine network.",
        fullDescription:
          "A layered fusion of trauma release bodywork, energy healing currents, and Ayurvedic herbal intelligence. This frequency incorporates the complexity of traditional hot-oil therapy, high-vibrational herbal oils, and tissue-level purification, supporting detoxification through the fascia, fluid system, and endocrine network. It brings ancient herbal and energetic synergy into the trauma healing space.\n\nA complete healing of three ancient wisdoms combined to decompress, release and restore. At Holistic Rising, our Trauma Release, Ayurveda & Energy Healing Fusion offers a deeply transformative experience, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Trauma, Energy & Ayurveda",
        benefits: [
          "Three ancient wisdoms combined",
          "Decompresses, releases and restores",
          "Releases trauma stored in the body",
          "Clears energetic stagnation",
          "Dissolves mental and emotional conditioning",
          "Deeply transformative healing experience",
        ],
        pricingOptions: [
          {
            duration: "180 minutes",
            price: "£450.00",
            bookingUrl:
              "https://www.vagaro.com/cl/VyWEyjx44I0mS4H~3pgPnKsDV9AQnK3rzzW2Ytuqwq0=",
          },
          // {
          //   duration: "120 minutes",
          //   price: "£160.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      },
      {
        slug: "frequency-4-trauma-energy-diamond",
        title:
          "Frequency 4 — Trauma & Energy Healing with Ayurveda Frequency and Diamond Extraction",
        description:
          "Trauma Healing with the Frequency of Four is a comprehensive, 4-hour bespoke treatment that unifies the wisdom of all previous healing frequencies, enhanced by an extraction-focused energetic current known as The Diamond.",
        fullDescription:
          "Trauma Healing with the Frequency of Four is a comprehensive, 4-hour bespoke treatment that unifies the wisdom of all previous healing frequencies, enhanced by an extraction-focused energetic current.\n\nThis healing contains the benefits of Frequency 1, Frequency 2, and Frequency 3, while introducing the core intention of extraction and purification beyond the reset.\n\nThe Added Power of Frequency 4 — Extraction (The Diamond)\n\nThis energetic signature is known as The Diamond — formed of two balanced triangles, representing the geometry of extraction, alignment, and energetic liberation. The modality is grounded in:\n\t•\tUniversal Love & Universal Energy Alignment\n\t•\tMother Earth Creation & Ayurvedic Infusions\n\t•\tExtraction Intention (13-point quartz crystal transmission, Hijama/cupping, Lymphatic unblocking, Endocrine purification, Energetic cord dissolution)\n\nSupportive Elements of the 4 Hour Immersion:\n\t•\tIntuitively guided coaching\n\t•\tCrystal balancing\n\t•\tHigh-vibrational Ayurvedic oils\n\t•\tMusical frequency harmonisation\n\t•\tMeditative integration\n\t•\tYogic & Buddhist healing transmission\n\nThe Essence:\n\nThe essence of Trauma Healing with the Frequency of Four is purification of mind, body, and soul, supporting a rise in vibration and a return to unity and cohesion within the spiritual frequencies.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Diamond Extraction",
        benefits: [
          "Nervous-system-centred trauma release",
          "Extraction and purification intention (Diamond)",
          "13-point quartz crystal transmission",
          "Hijama, Lymphatic unblocking, Endocrine purification",
          "Universal Love & Universal Energy Alignment",
          "Energetic cord dissolution",
          "4-hour bespoke immersion",
        ],
        pricingOptions: [
          {
            duration: "240 minutes",
            price: "£550.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
      /* {
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
          {
            duration: "240 minutes",
            price: "£350.00",
            bookingUrl:
              "https://www.vagaro.com/cl/TY2hylutyWBgUoOdwqxPCYvaRXUyHkmiZcD2JXpzpaM=",
          },
          // {
          //   duration: "150 minutes",
          //   price: "£220.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      }, */
      {
        slug: "frequency-5-complete-healing",
        title: "Complete Healing — Frequency of 5",
        description:
          "This healing offers a deeply transformative 5-hour immersion, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning. The treatment invites a return to the authentic self — beyond inherited patterns, societal programming, and the internal restrictions that shape behaviour and identity.",
        fullDescription:
          "This healing offers a deeply transformative 5-hour immersion, created to release trauma stored within the body, clear stagnation from the energetic field, and dissolve layers of mental and emotional conditioning.\n\nThe Complete Healing with the Frequency of Five Includes Five Core Modalities:\n\n1. Trauma Release Bodywork + Meridian Clearing\n2. Cranial Massage + Lymphatic Detoxification\n3. Hands & Feet Fascia + Micro-Meridian Unblocking\n4. Ayurveda — High-Vibrational Purification\n5. Energetic, Karmic, Ancestral + Spiritual Transmission\n\nClient-Reported Experiences:\nClients have described deeply symbolic and transpersonal healing journeys, including visions, ancestral presence, and deep release of energetic cords.\n\nThe Essence of the Work:\nThis is healing in its truest sense: comprehensive, sacred, shamanic, and transformational. A full-system decompression, multidimensional release, and a return to authentic energetic flow, clarity, alignment, and self-resonance.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Complete Healing",
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
          {
            duration: "240 minutes",
            price: "£650.00",
            bookingUrl:
              "https://www.vagaro.com/cl/TY2hylutyWBgUoOdwqxPCYvaRXUyHkmiZcD2JXpzpaM=",
          },
          // {
          //   duration: "150 minutes",
          //   price: "£220.00",
          //   bookingUrl:
          //     "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          // },
        ],
      },
    ],
  },
  {
    slug: "profound-trauma-release-men",
    hero: {
      title: "PROFOUND TRAUMA RELEASE FOR MEN",
      subtitle: "Restoring Presence, Strength & Resilience",
      description:
        "For men ready to reclaim their body, reset their system and restore what survival once cost them. Delivered by Isaac — Trauma Specialist, Master’s-Trained Physiotherapist and Body-Based Healing Practitioner — this treatment unites clinical expertise with the powerful somatic trauma-release system developed at Holistic Rising.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      {
        slug: "trauma-release-1-men",
        title: "Trauma Release 1 — Core Fascia Release",
        description:
          "For men who are outwardly coping but internally overloaded. This level supports nervous system regulation, emotional grounding, and a mental ‘exhale’ through physical release.",
        fullDescription:
          "Trauma Release 1 — Core Fascia Release (2 Hours)\n\nClient Profile\n\nMen who are outwardly coping but internally overloaded. Their body and nervous system are still responsive to strong work, yet not ready for the deepest somatic unravelling.\n\nThis may include men who:\n• Feel mentally overextended, emotionally fatigued, or psychologically pressured\n• Experience anxiety, low mood, emotional suppression, or early signs of depression\n• Carry tension through jaw, chest, shoulders, diaphragm, or breath-holding patterns\n• Live on low reserves, brain fog, irritability, or poor sleep due to stress\n• Have a history of surgical or medical trauma that is stable but still held physically\n• Are navigating mental health strain such as stress, anxiety, panic responses, or emotional burnout\n• Want to feel more present in their body but feel disconnected, heavy, or tense\n• Are managing mild to moderate mental health challenges alongside physical exhaustion\n\nThis level supports nervous system regulation, emotional grounding, and a mental ‘exhale’ through physical release.\n\nWhen fascia begins to release, the brain follows — easing internal pressure and supporting emotional regulation.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Trauma Release 1",
        bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
        benefits: [
            "Core fascia release",
            "Nervous system regulation",
            "Emotional grounding",
            "Mental exhale through physical release",
            "Targets tension in jaw, chest, shoulders",
            "Supports stress and burnout recovery"
        ],
        pricingOptions: [
          {
            duration: "120 minutes",
            price: "£250.00",
            bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw="
          }
        ]
      },
      {
        slug: "trauma-release-2-men",
        title: "Trauma Release 2 — Layered Release",
        description:
          "For men carrying both physical trauma and psychological or emotional layering. This level works into deeper fascia and stress-system holding, allowing the brain to release defence naturally through somatic work.",
        fullDescription:
            "Trauma Release 2 — Layered Release (3 hours)\n\nClient Profile\n\nMen carrying both physical trauma and psychological or emotional layering. Their pain, tension, and stress patterns live equally in body and mind.\n\nThis may include men who:\n• Experience chronic pain combined with nervous system fatigue\n• Struggle with persistent anxiety, depression, intrusive thoughts, compulsive patterns, emotional dysregulation, or dissociation linked to stress\n• Present with conditions such as: Chronic pain, Fatigue syndromes, Chronic pain with fatigue\n• Carry long-term muscular and fascial guarding\n• Are navigating an array of mental health challenges, including: Generalised anxiety disorder, Complex depression tied to trauma, PTSD or C-PTSD traits, Intrusive thoughts, Sensory overload, Compulsive behaviors, Mood instability\n\nThis level works into deeper fascia and stress-system holding, allowing the brain to release defence naturally through somatic work.\n\nBy releasing fascia, the system signals safety to the brain — reducing mental noise, easing emotional load, and calming psychological defence patterns without needing to ‘force’ cognitive release.\n\nClients often say:\n\n“My body hurts because my brain never stops.”\n“I’m tired in my bones, not just my head.”",
         image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
         ctaLabel: "Trauma Release 2",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
         benefits: [
             "Layered release for contents",
             "Works into deeper fascia and stress-system",
             "Allows brain to release defence naturally",
             "Signals safety to the brain",
             "Reduces mental noise and emotional load",
             "Addresses chronic pain and fatigue"
         ],
         pricingOptions: [
          {
            duration: "180 minutes",
            price: "£350.00",
            bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw="
          }
        ]
      },
      {
         slug: "trauma-release-3-men",
         title: "Trauma Release 3 — Profound Reclamation",
         description: 
            "For men holding complex, long-term, neuroimmune, neurological, or mobility-restricting trauma at the deepest physiological level. This level requires powerful work delivered slowly, safely, and respectfully.",
         fullDescription:
            "Trauma Release 3 — Profound Reclamation (4 Hours)\n\nClient Profile\n\nMen holding complex, long-term, neuroimmune, neurological, or mobility-restricting trauma at the deepest physiological level. This level requires powerful work delivered slowly, safely, and respectfully.\n\nThis may include men who:\n• Experience nervous system freeze, shutdown, or collapse responses\n• Live with mobility restriction, movement fear, or functional limitation\n• Carry conditions that impact systemic inflammation, immunity, neurological signalling, or fascia holding (Lupus, MS, Fibromyalgia, Diabetes, etc.)\n• Have fascial restriction, circulation issues, or numbness\n• Experience depression, neurodivergent trauma layering, or long-term mental health illness stored somatically\n\nThis level helps men rebuild trust in movement, release fascia that has been bracing for years, and restore agency over their body and system.\n\nAs fascia unravels, the brain is given permission to release survival-mode signalling — easing emotional weight, reducing neurological defence, and supporting mental health at a foundational, physiological level.\n\nClients often say:\n\n“I don’t feel safe in my body anymore.”\n“I shut down when it’s too much.”\n“I don’t know how to release without losing strength.”",
         image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
         ctaLabel: "Trauma Release 3",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
         benefits: [
             "Profound reclamation for complex trauma",
             "Addresses neuroimmune and neurological conditions",
             "Rebuilds trust in movement",
             "Releases fascia bracing for years",
             "Restores agency over body and system",
             "Supports mental health at physiological level"
         ],
         pricingOptions: [
          {
            duration: "240 minutes",
            price: "£450.00",
            bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw="
          }
        ]
      },
      {
        slug: "trauma-release-4-men",
        title: "Trauma Release 4",
        description:
          "A deeper level of profound trauma release work for men seeking extended support.",
        fullDescription:
          "Trauma Release 4\n\nThis advanced session offers extended time for deep systemic integration and trauma release. Please contact us for more details on the specifics of this level.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Trauma Release 4",
        bookingUrl:
          "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
        benefits: [
          "Extended duration",
          "Deep systemic integration",
          "Advanced trauma release",
        ],
        pricingOptions: [
          {
            duration: "300 minutes", // Assuming 5h based on pattern
            price: "£550.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
      {
        slug: "trauma-release-5-men",
        title: "Trauma Release 5",
        description:
          "The highest level of profound trauma release immersion for total systemic reset.",
        fullDescription:
          "Trauma Release 5\n\nThe pinnacle of our trauma release work for men, offering the maximum time for a complete reset and embodied restoration.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Trauma Release 5",
        bookingUrl:
          "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
        benefits: [
          "Maximum depth and duration",
          "Total systemic reset",
          "Embodied restoration",
        ],
        pricingOptions: [
          {
            duration: "360 minutes", // Assuming 6h based on pattern
            price: "£650.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
    ],
    bottomContent: `### Isaac’s Expertise

* **Fully trained Trauma-Focused Physiotherapist**
* **Holds a Master’s degree in Trauma-Based Physiotherapy**
* **Certified Trauma Specialist**
* Extensive experience working in NHS hospitals with trauma patients, supporting recuperation, rehabilitation and long-term recovery
* Worked pitch-side for elite rugby clubs and professional teams, managing chronic injuries, acute trauma and high-impact physical injury
* Completed advanced practitioner training in the Holistic Rising Method, working directly alongside founder Maria Sarmiento
* Mentored and certified by Maria Sarmiento, contributing to the evolution of trauma-release protocols tailored specifically for men
* Now pioneering Profound Trauma Release for male clients, offering this work to men for the very first time

Isaac blends clinical trauma-rehabilitation knowledge with profound somatic and energetic release work — providing a space where strength is not in conflict with healing, and where the body is finally met with understanding, not pressure.

### 1. The Burnout & Exhaustion Body

**For the warrior who kept going long after his body said stop.**

**Profile:**
Physically drained, mentally worn, emotionally muted. A body running on empty. Moving through life with low reserves. Feeling heavy, numb or disconnected.

**What This Work Delivers:**

* Profound reawakening of energy and presence
* Restored connection to physical and emotional self
* Reset of exhaustion held in breath, muscle and nervous system tone
* A return to clarity, strength and embodied vitality

> "This is not gentle recovery — this is profound restoration. The moment the body stops surviving and starts living again."

### 2. The Medical & Surgical Trauma Body

**For the body that has endured pain, procedures and clinical environments.**

**Profile:**
Surgeries, injuries or long medical histories. Scar tissue, restriction, numbness or a sense of disconnection from parts of the body. A body that still holds memory, even when the mind has tried to move forward.

**What This Work Delivers:**

* Profound reconnection to areas once shut down or guarded
* Softening of scar and fascial restrictions
* Restored circulation, sensation and internal trust
* A renewed sense of bodily ownership, flow and resilience

> "Because true healing is not about forgetting the past — it is about freeing the body from repeating it."

### 3. The Hyper-Vigilant & Fight-Mode Body

**For the protector who learned to stay alert to survive.**

**Profile:**
Deep tension in the jaw, chest, shoulders and diaphragm. Shallow breathing. Fast reactions. A nervous system locked in ‘fight’ — always prepared, never fully settled.

**What This Work Delivers:**

* Profound release of survival-based holding patterns
* Nervous system regulation at the deepest level
* Restored breath, emotional safety and internal steadiness
* A transition from fight-mode to felt strength and personal agency

> "This is the reset your system has been waiting for — the moment protection becomes a conscious choice, not a default state."

### The Result

A body that no longer carries survival like armour.
A mind no longer trapped in alert mode.
A nervous system that can finally stand down without shutting off or losing strength.

This is Profound Trauma Release for Men — delivered by a practitioner who understands trauma clinically, neurologically and somatically.

Led by Isaac. Supported alongside Maria Sarmiento. Rooted in the Holistic Rising Method.`
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
        benefits: [
          "Relieves abdominal cramping and bloating",
          "Reduces excess fat and fluid build-up",
          "Decreases inflammation throughout the core",
          "Enhances digestion and supports detoxification",
          "Eases lower back discomfort",
          "Improves hip mobility and lung capacity",
        ],
        pricingOptions: [
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
      /* {
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      }, */
      {
        slug: "full-body-gentle-balance-release-ritual",
        title: "Full Body Gentle Balance & Release Ritual",
        description:
          "Our Full-Body Gentle Balance and Release Ritual treats the body to support the release of the mind. Through slow, calming, full-body massage techniques and mindful energetic intention, the treatment guides the nervous system into a state of safety and ease—allowing the body to unwind so the mind can let go.",
        fullDescription:
          "Our Full-Body Gentle Balance and Release Ritual treats the body to support the release of the mind. Through slow, calming, full-body massage techniques and mindful energetic intention, the treatment guides the nervous system into a state of safety and ease—allowing the body to unwind so the mind can let go.\n\nThis ritual is ideal for clients experiencing signs of stress, tension, insomnia, disrupted sleep patterns, lack of rest, or difficulty switching off. While the treatment is applied to the body, its purpose is to create the conditions the mind truly needs—space, stillness, and permission to pause.\n\nIt is not designed to target muscle aches or ease physical pain. Instead, it is crafted to give clients meaningful time away from the demands of daily life, offering the opportunity to rest, breathe, and restore. Many clients naturally drift into deep relaxation, and some may even fall into light sleep during the session—an encouraged part of the experience.\n\nThe ritual supports you to:\n\t•\tFind inner calm and mental clarity\n\t•\tReset from chronic fatigue or sleeplessness\n\t•\tRest and restore your system in a supported environment\n\t•\tRecalibrate your emotional and energetic balance\n\t•\tStep away from a busy life to pause, reflect, and reset\n\t•\tReconnect to yourself and regain a sense of equilibrium\n\t•\tLeave feeling mentally lighter, centred, and renewed\n\nThis treatment creates a moment of stillness for the mind, using the body as the pathway to release. It invites rest, supports deep relaxation, and helps clients reset their internal rhythm—so they can return to life feeling grounded, restored, and recalibrated.\n\nA gentle pause. A mental reset. A return to balance",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "Full Body Gentle Balance & Release Ritual",
        benefits: [
          "Find inner calm and mental clarity",
          "Reset from chronic fatigue or sleeplessness",
          "Rest and restore your system in a supported environment",
          "Recalibrate your emotional and energetic balance",
          "Step away from a busy life to pause, reflect, and reset",
          "Reconnect to yourself and regain a sense of equilibrium",
          "Leave feeling mentally lighter, centred, and renewed",
        ],
        pricingOptions: [
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
      /* {
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      }, */
      // {
      //   slug: "ayurveda-sculpting-facelift-ritual",
      //   title: "Ayurveda Sculpting Facelift Ritual",
      //   description:
      //     "A restorative wellness treatment focused on the head, neck, jaw, and face. Designed to support the relief of TMJ symptoms, jaw tension, and stress-related clenching, using external body and fascia-based techniques to help the mind release as the body unwinds.",
      //   fullDescription:
      //     "Our Ayurveda Sculpting Facelift Ritual is a restorative wellness treatment focused on the head, neck, jaw, and face. It is designed to support the relief of TMJ symptoms, including jaw tension, discomfort, and stress-related clenching, using external body and fascia-based techniques to help the mind release as the body unwinds.\n\nThis ritual incorporates buccal (intra-oral) massage, Gua Sha, and opiate ear candle therapy as traditional cleansing elements to encourage a feeling of unblocking across the head and facial pathways. The treatment works intentionally along the fascia lines of the face, neck, and jaw to release tension and promote a sense of openness, internal balance, and recalibration.\n\nWhile not positioned as a medical cure, clients commonly seek this ritual for support with lifestyle-related symptoms, including:\n\t•\tTMJ-related tension and discomfort\n\t•\tStuttering or speech tension patterns, such as stutters or stammers\n\t•\tHearing congestion or blocked sensations in the ear and head area\n\t•\tSinus pressure, blocked sensations, or seasonal sensitivities\n\t•\tMigraines or head pressure sensations\n\t•\tEye strain, blurred focus, or tension around the eyes affecting visual clarity\n\t•\tFacial puffiness or fluid retention\n\nMany clients also choose this treatment for a mental and sensory reset, reporting a sense of:\n\t•\tFeeling lighter and depuffed in the face\n\t•\tA clearer, more open sensation across the head, sinuses, jaw, and ears\n\t•\tReduced pressure sensations in the head and eye area\n\t•\tA sense of improved visual ease or clarity after eye strain or fatigue\n\t•\tRelief from heaviness affecting focus or perception\n\nThis ritual is crafted as a profound experience—ideal for those seeking healing from daily restrictions to restore balance across the head, neck, jaw, and face.",
      //   image:
      //     "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
      //   videoId: "S_-e1AOuPug",
      //   ctaLabel: "Ayurveda Sculpting Facelift Ritual",
      //   benefits: [
      //     "Relief of TMJ symptoms and jaw tension",
      //     "Support for speech tension and stuttering patterns",
      //     "Clears hearing congestion and blocked sensations",
      //     "Eases sinus pressure and head pressure",
      //     "Reduces migraines and eye strain tension",
      //     "Depuffs face and reduces fluid retention",
      //     "Mental and sensory reset and recalibration",
      //   ],
      //   pricingOptions: [
      //     {
      //       duration: "90 minutes",
      //       price: "£120.00",
      //       bookingUrl:
      //         "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      //     },
      //     {
      //       duration: "120 minutes",
      //       price: "£160.00",
      //       bookingUrl:
      //         "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      //     },
      //   ],
      // },

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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
      {
        slug: "radiance-renewal-ritual",
        title: "RADIANCE RENEWAL DETOX RITUAL",
        description:
          "Step into a journey of renewal, where skin and spirit are gently awakened. With this ritual experience Neal's yard oils, masks and deep organic glow, focusing on deep detoxification, unclogging pores and removing impurities, while sweeping away dull and tired cells to reveal your natural luminosity beneath.",
        fullDescription:
          "Step into a journey of renewal, where skin and spirit are gently awakened. With this ritual experience Neal's yard oils, masks and deep organic glow, focusing on deep detoxification, unclogging pores and removing impurities, while sweeping away dull and tired cells to reveal your natural luminosity beneath.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        ctaLabel: "RADIANCE RENEWAL DETOX RITUAL",
        benefits: [
          "Journey of renewal",
          "Gently awakens skin and spirit",
          "Neal's Yard oils and masks",
          "Deep detoxification",
          "Unclogs pores and removes impurities",
          "Reveals natural luminosity",
        ],
        pricingOptions: [
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
    ],
  },
  /* {
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
      },
    ],
  }, */
  {
    slug: "healing-movement",
    hero: {
      title: "HEALING MOVEMENT",
      subtitle: "Integrative Mind-Body Practice",
      description:
        "Healing Movement at Holistic Rising This evolving programme includes a variety of healing modalities such as: Core and Pelvic Floor Activation Yoga Class, Hatha Flow Class, Meditation, Yin Class, Qigong Classes, Breathwork, Self-Healing, Sharing Circle, and Self-Healing Techniques. Together, these practices form a holistic movement experience that supports physical release, energetic alignment, emotional awareness, nervous system regulation and spiritual connection.",
      youtubeVideoId: "S_-e1AOuPug",
    },
    subservices: [
      /* {
        slug: "core-pelvic-floor-activation",
        title: "Core and Pelvic Floor Activation Yoga Class",
        description:
          "Focused on deep core engagement, pelvic stability, posture support and embodied strength.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
        bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      }, */
      {
        slug: "core-pelvic-floor-activation",
        title: "Healing Movement \u2014 Core & Pelvic Floor Activation Yang Yoga",
        description:
          "This healing movement class follows a five-week rotational structure, designed to work in harmony with our existing Healing Movement sequences. Each session focuses on specific meridian pathways, supporting a circular, fluid energetic journey rooted in elemental balance, embodiment, and nervous-system regulation.",
        fullDescription:
          "This healing movement class follows a five-week rotational structure, designed to work in harmony with our existing Healing Movement sequences. Each session focuses on specific meridian pathways, supporting a circular, fluid energetic journey rooted in elemental balance, embodiment, and nervous-system regulation.\n\nThis class was created in response to client demand, recognising a common gap in many modern movement and fitness routines, where the inner core and deep stabilising structures of the body are often under-activated.\n\nThe Yang yoga approach brings intentional, dynamic engagement to the internal muscular system — the muscles closest to the skeletal structure — which play a vital role in:\n\t•\tJoint protection and support\n\t•\tPostural integrity\n\t•\tInjury prevention\n\t•\tLong-term physical resilience\n\t•\tReducing stored trauma responses held in the body\n\nThese deep muscles are closely interconnected with ligaments and tendons, and are directly linked to the body’s protective reflexes, including the Golgi tendon response, which regulates sudden, reactive, or jerking movements often associated with physical strain or past injury.\n\nEach class includes focused activation and conscious release of the pelvic floor, a foundational energetic and physical centre that is frequently overlooked in conventional movement practices.\n\nA balanced and strengthened pelvic floor supports:\n\t•\tSexual health and vitality\n\t•\tHormonal balance and regulation\n\t•\tCore stability\n\t•\tEmotional grounding\n\t•\tWhole-system homeostasis\n\nRooted in the energetic intelligence of the root chakra, this class teaches how to build strength from the inside out and the ground up, supporting embodied awareness, stability, grounded manifestation, and internal energetic cohesion.\n\nThis practice is designed to support the body in feeling strong, regulated, purified, grounded, and in flow — creating balance that can ripple outward into family connection, daily life, and the home environment.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
        bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      /* {
        slug: "hatha-flow",
        title: "Hatha Flow Class",
        description:
          "A grounding, breath-led flow that balances effort and ease while supporting energetic circulation.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      }, */
      {
        slug: "hatha-flow",
        title: "Hatha Flow: Healing Movement for the Body",
        description:
          "Hatha Flow at Holistic Rising is a dynamic and grounding practice that balances strength and softness, breath and movement, and the physical and energetic bodies.",
        fullDescription:
          "Hatha Flow at Holistic Rising is a dynamic and grounding practice that balances strength and softness, breath and movement, and the physical and energetic bodies.\n\nThis class follows the same five-week cyclical rotation, rooted in the five elements — Earth, Water, Fire, Air, and Ether — with each session focusing on a specific body region and its corresponding meridian pathways. Over the course of five weeks, participants move through an intentional, breath-led sequence that supports physical release, postural strength, flexibility, and energetic activation.\n\nThe practice is steady, flowing and intentional, honouring the body’s natural rhythm while restoring energetic circulation through meridian awareness. The structure mirrors both the cycles of nature and the internal cycles of the body, creating a cohesive movement experience designed for integration, grounding and deep internal alignment.\n\nThis healing movement system incorporates a 3-stage energetic awareness cycle throughout the immersion:\n\t1.	Activation through conscious, stabilising strength\n\t2.	Release through breath-supported movement and stillness\n\t3.	Energetic recalibration through meridian focus and embodiment\n\nTogether, these stages support a return to balance, internal flow, and body-mind cohesion, helping participants feel more grounded, aligned, energetically clear and connected to the subtle body.\n\nThis is movement for healing — intentional, restorative, and held within the intelligence of the body as a whole.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      {
        slug: "meditation",
        title: "Meditation",
        description:
          "Guided practices to cultivate presence, mental clarity and nervous system calm.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      /* {
        slug: "yin-class",
        title: "Yin Class",
        description:
          "Long-held postures supported by breath to encourage deep tissue, fascia and emotional release.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      }, */
      {
        slug: "yin-class",
        title: "Healing Movement Yin: Meridian-Based Release and Recovery",
        description:
          "Healing Movement Yin is a deeply restorative practice that combines Yin yoga postures, gentle transitionary movement, free movement, self-healing techniques and guided meditation.",
        fullDescription:
          "Healing Movement Yin is a deeply restorative practice that combines Yin yoga postures, gentle transitionary movement, free movement, self-healing techniques and guided meditation.\n\nThe class follows a five-week cyclical rotation, working intentionally through the five elemental meridian pathways of the body — channels through which vital energy (qi) flows. Each session focuses on a specific body region and its corresponding meridian, gently stimulating these internal pathways to support emotional release, organ-system nourishment, nervous-system recovery and embodied stillness.\n\nThis healing movement experience is supported by a 3-stage rotation throughout the four-hour immersion:\n\t1.	Activation — gentle engagement to prepare the fascia, joints and subtle channels\n\t2.	Release — long-held postures supported by conscious breath, allowing deep tissue and energetic tension to soften\n\t3.	Recalibration — intentional meridian awareness to restore energetic circulation and internal balance\n\nPostures are held for extended periods, creating space for the connective tissues and fascia to release stored tension, supporting both physical decompression and energetic clarity.\n\nThe practice also incorporates free movement, inviting natural expression to support embodied emotional release, alongside self-healing techniques that empower personal awareness and energetic cleansing from the inside out.\n\nEach class includes a guided meditation, offering a gentle, compassionate internal reset, supporting nervous-system calm, mental clarity and deeper integration within the body-mind.\n\nThis is a sacred movement space designed to support recovery, release and internal alignment — helping you reconnect to your body, restore energetic flow, and feel more grounded and cohesive within the subtle self.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      {
        slug: "qigong-classes",
        title: "Qigong Classes",
        description:
          "Gentle, intentional energy-based movement to unblock meridians, support qi flow and harmonise internal systems.",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      {
        slug: "breathwork",
        title: "Breathwork",
        description:
          "Conscious breathing practices to regulate the nervous system, release stored emotional tension, expand prana, and support energetic clearing through the subtle body.",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      {
        slug: "self-healing",
        title: "Self-Healing",
        description:
          "Practical somatic and energetic tools for personal regulation and restoration.",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      /* {
        slug: "sharing-circle",
        title: "Sharing Circle",
        description:
          "A held space for reflection, community connection and emotional expression.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      }, */
      {
        slug: "sharing-circle",
        title: "Healing Movement Sharing Circle",
        description:
          "The Healing Movement Sharing Circle takes place every Sunday from 8:00–8:30pm, and is a gentle, open, community space for anyone who feels called to join us.",
        fullDescription:
          "The Healing Movement Sharing Circle takes place every Sunday from 8:00–8:30pm, and is a gentle, open, community space for anyone who feels called to join us.\n\nThis is a place where we hold space with love and care for those who want support, connection, grounding, or simply a moment to pause and be in the presence of like-minded people. Whether you want to share, chat, socialise, or just sit in stillness — you are welcome. There is no pressure to speak. You can also simply come in to meditate.\n\nThe circle incorporates a guided meditation aligned to the meridian themes explored in the wider Healing Movement classes, supporting energetic awareness and inner cohesion. It may also include soft community drumming or light shamanic drumming, offered in a grounding, rhythmic way to support emotional and energetic release.\n\nThis space can also include:\n\t•	Breathwork for nervous system calm and energetic regulation\n\t•	Grounding practices and body check-ins\n\t•	Somatic self-healing techniques\n\t•	Calming body scans and gentle nervous system support\n\t•	Drumming for grounding and connection\n\t•	Practical grounding tools for emotional and energetic balance\n\nThe intention of this circle is community support, shared healing time, and connection — for anyone navigating stress, fatigue, emotional overload, energetic sensitivity, or simply seeking a safe space to feel supported and understood. It is open to those who may be finding internal or external change difficult to navigate, those seeking harmony in the home or family field, or anyone who simply wants to connect, chat, or share this time in a meaningful way.\n\nThis circle is completely free for all, and is our dedicated weekly offering to the community. We hold the space for everyone with deep love, integrity, respect and healing intention.\n\nIf you’ve been feeling tender, tired, overwhelmed, energetically stretched, or simply in need of connection — come along and share this gentle half hour with us. A moment of healing, presence and community can change more than you think.\n\nYou are welcome. You are held. You are enough.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
      {
        slug: "self-healing-techniques",
        title: "Self-Healing Techniques",
        description:
          "Intuitive practices that empower self-awareness, energetic cleansing and internal balance.",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        ctaLabel: "Book Class",
         bookingUrl: "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
      },
    ],
    bottomContent: `### A Journey of Transformation

This profound healing sequence was designed by the Holistic Rising yoga specialist Georgia and Founder María. They combined their expertise to create this transformative practice that encompasses the body holistically, bringing together a wholesome healing experience.

The modalities — including core and pelvic floor activation, Hatha flow, Yin, meditation, Breathwork, Qigong, self-healing and community integration — form an intentional movement system that works through the body and energetic field systematically.

The original five-week rotational energetic foundation remains intact — now expressed through the updated class structure — working through the body physically, emotionally and energetically. Each week focuses on a specific element, paired with a corresponding meridian and a target body region, creating a layered and intentional journey through the Five Holistic Principles designed by the Holistic Rising movement team.

### This Unique Combination Allows For

1. Activation through dynamic movement — offered through the Core & Pelvic Floor and Hatha Flow classes
2. Deep release through stillness and breath — supported in the Yin Class, meditation and Breathwork practices
3. Energetic recalibration through meridian focus — integrated into yoga, Yin, Qigong and Breathwork sessions
4. Integration of body-mind awareness — supported across all classes, including community connection within the Sharing Circle

### Profound Benefits of the Four-Stage System

* Nervous system reset through activation and rest cycles
* Fluid and endocrine purification supported by breath, fascia release and lymphatic flow activation
* Energetic field purification through Qigong, meditation and conscious Breathwork integration
* Embodied integration of emotional and behavioural patterns through movement, breath and community support

> "This is movement-based healing in its truest sense: holistic, sacred, communal and transformational — a practice designed to purify, rebalance, integrate and restore flow so you can step forward feeling more aligned, aware and energetically cohesive."`,
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£70.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£100.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
        videoId: "S_-e1Full Body Gentle Balance & Release RitualAOuPug",
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "120 minutes",
            price: "£180.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "150 minutes",
            price: "£220.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "120 minutes",
            price: "£160.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
        pricingOptions: [
          {
            duration: "90 minutes",
            price: "£120.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
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
        pricingOptions: [
          {
            duration: "60 minutes",
            price: "£80.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
        ],
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
          {
            duration: "60 minutes",
            price: "£80.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£110.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£80.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£110.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£80.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£110.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
          {
            duration: "60 minutes",
            price: "£80.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
          {
            duration: "90 minutes",
            price: "£110.00",
            bookingUrl:
              "https://www.vagaro.com/cl/S3CT69cN2eG3sWgHZY7At7su2ZAafur52NoJs1KkStw=",
          },
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
