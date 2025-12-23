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
export function getSubServiceDetailUrl(serviceSlug: string, subserviceSlug: string): string {
  return `/services/${serviceSlug}/${subserviceSlug}`;
}

// Helper function to generate booking URL for a sub-service
export function getBookingUrl(serviceSlug: string, subserviceSlug: string): string {
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
        "This treatment, designed by founder Maria Sarmiento, creates a profound release of trauma throughout the body. It combines sports therapy, Thai massage, and Raynor massage to work deeply through the body's physical and energetic systems.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "myofascial-release",
        title: "Myofascial Release",
        description:
          "Deep tissue work targeting the fascia to release chronic tension and restore mobility.",
        fullDescription:
          "Our specialized Myofascial Release treatment is a deeply therapeutic and restorative experience designed to relieve chronic tension, improve mobility, and restore balance throughout the body's fascial network. This technique works directly with the connective tissue that surrounds and supports every muscle, organ, and structure in your body.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug", // Example - replace with actual video IDs
        benefits: [
          "Releases deep-seated tension and restrictions in the fascia",
          "Enhances flexibility and range of motion",
          "Reduces chronic pain and discomfort",
          "Improves posture and alignment",
          "Supports natural healing and recovery",
          "Promotes relaxation and stress relief",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "sports-therapy",
        title: "Sports Therapy Integration",
        description:
          "Elite-level sports therapy techniques to increase joint mobility and range of motion.",
        fullDescription:
          "Our Sports Therapy Integration treatment combines elite-level sports therapy techniques with holistic healing principles. This specialized approach targets joint mobility, range of motion, and athletic performance while addressing the underlying patterns that contribute to injury and limitation.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Increases joint mobility and range of motion",
          "Enhances athletic performance and recovery",
          "Prevents and addresses sports-related injuries",
          "Improves biomechanical efficiency",
          "Reduces muscle tension and stiffness",
          "Supports optimal movement patterns",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "thai-massage",
        title: "Thai Massage",
        description:
          "Traditional Thai massage improving flexibility and working directly on the meridian system to clear energetic stagnation.",
        fullDescription:
          "Experience the ancient art of Thai massage, a deeply therapeutic practice that combines acupressure, yoga-like stretching, and energy work. This treatment works directly on the meridian system to clear energetic stagnation, improve flexibility, and restore balance to both body and mind.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Improves flexibility and range of motion",
          "Clears energetic stagnation in meridians",
          "Reduces muscle tension and stiffness",
          "Enhances circulation and energy flow",
          "Promotes deep relaxation and stress relief",
          "Supports overall physical and energetic balance",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "raynor-massage",
        title: "Raynor Massage",
        description:
          "Specialized massage technique working deeply through the body's physical and energetic systems.",
        fullDescription:
          "Raynor Massage is a specialized technique that works deeply through the body's physical and energetic systems. This unique approach combines deep tissue work with energetic awareness, helping to release stored tension, trauma, and energetic blockages while supporting the body's natural healing processes.",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Works deeply through physical and energetic systems",
          "Releases stored tension and trauma",
          "Clears energetic blockages",
          "Supports natural healing processes",
          "Promotes deep relaxation and restoration",
          "Enhances overall well-being and vitality",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
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
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "full-body-restoration",
        title: "Full Body Restoration",
        description:
          "Comprehensive treatment addressing physical, emotional, and energetic aspects of healing.",
        fullDescription:
          "Our Full Body Restoration treatment offers a comprehensive approach to healing that addresses physical, emotional, and energetic aspects simultaneously. This integrative session combines multiple modalities to create a deeply restorative experience that supports your body's natural ability to heal and restore balance.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Addresses physical, emotional, and energetic aspects",
          "Comprehensive approach to healing and restoration",
          "Supports the body's natural healing processes",
          "Promotes deep relaxation and stress relief",
          "Enhances overall well-being and vitality",
          "Creates lasting positive change",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£100.00" },
          { duration: "120 minutes", price: "£140.00" },
        ],
      },
      {
        slug: "nervous-system-reset",
        title: "Nervous System Reset",
        description:
          "Deep work to reset and regulate the nervous system, promoting profound relaxation and restoration.",
        fullDescription:
          "The Nervous System Reset treatment offers deep work to reset and regulate your nervous system, promoting profound relaxation and restoration. This specialized approach helps to shift your body from a state of stress and activation to one of calm, safety, and restoration, supporting both physical and emotional healing.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Resets and regulates the nervous system",
          "Promotes profound relaxation and restoration",
          "Shifts from stress to calm and safety",
          "Supports physical and emotional healing",
          "Reduces anxiety and tension",
          "Enhances overall sense of well-being",
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
      subtitle: "Energetic Alignment",
      description:
        "Subtle, intuitive work that supports energetic alignment and emotional rebalancing. This therapy can help bring clarity, calm, and connection to those seeking spiritual or emotional restoration.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "chakra-balancing",
        title: "Chakra Balancing",
        description:
          "Restore harmony to your energy centers through intuitive chakra work and energetic alignment.",
        fullDescription:
          "Chakra Balancing treatment restores harmony to your energy centers through intuitive chakra work and energetic alignment. This gentle yet powerful approach works with your body's seven main energy centers to clear blockages, restore flow, and support optimal physical, emotional, and spiritual well-being.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Restores harmony to energy centers",
          "Clears energetic blockages and stagnation",
          "Supports physical, emotional, and spiritual well-being",
          "Enhances energy flow and vitality",
          "Promotes emotional balance and clarity",
          "Deepens connection to self and spirit",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "reiki-healing",
        title: "Reiki Healing",
        description:
          "Gentle energy healing technique to promote relaxation, reduce stress, and support emotional well-being.",
        fullDescription:
          "Reiki Healing is a gentle energy healing technique that promotes deep relaxation, reduces stress, and supports emotional well-being. This non-invasive treatment channels universal life force energy to support your body's natural healing abilities, promoting balance and harmony on all levels.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Promotes deep relaxation and stress reduction",
          "Supports emotional well-being and balance",
          "Channels universal life force energy",
          "Non-invasive and gentle approach",
          "Supports natural healing abilities",
          "Promotes overall harmony and well-being",
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
        "An integrative approach to skincare that nourishes both skin and spirit. Using all-natural products and conscious touch, these treatments aim to enhance your inner glow by supporting your body's natural beauty rhythms.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "facial-treatment",
        title: "Facial Treatment",
        description:
          "Nourishing facial using all-natural products to enhance your skin's natural radiance.",
        fullDescription:
          "Our Facial Treatment uses all-natural products and conscious touch to nourish your skin and enhance your natural radiance. This integrative approach to skincare supports your body's natural beauty rhythms while providing deep hydration, gentle exfoliation, and relaxation for both skin and spirit.",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Uses all-natural, nourishing products",
          "Enhances skin's natural radiance",
          "Provides deep hydration and gentle exfoliation",
          "Supports natural beauty rhythms",
          "Promotes relaxation for skin and spirit",
          "Integrative approach to skincare",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "body-treatment",
        title: "Body Treatment",
        description:
          "Full-body treatment combining skincare with conscious touch to support your natural beauty rhythms.",
        fullDescription:
          "Our Body Treatment combines skincare with conscious touch to support your natural beauty rhythms. This full-body experience uses all-natural products to nourish, hydrate, and restore your skin while promoting deep relaxation and connection to your body's innate wisdom.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Full-body treatment with all-natural products",
          "Combines skincare with conscious touch",
          "Nourishes, hydrates, and restores skin",
          "Supports natural beauty rhythms",
          "Promotes deep relaxation and connection",
          "Honors your body's innate wisdom",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£100.00" },
          { duration: "120 minutes", price: "£140.00" },
        ],
      },
    ],
  },
  {
    slug: "healing-movement",
    hero: {
      title: "Healing Movement",
      subtitle: "Mindful Practice",
      description:
        "A mindful practice combining breath, intuitive motion, and energy awareness. Designed to support nervous system regulation, emotional flow, and reconnection to the self through movement.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "breathwork-session",
        title: "Breathwork Session",
        description:
          "Guided breathwork practices to regulate the nervous system and promote deep relaxation.",
        fullDescription:
          "Our Breathwork Session offers guided breathwork practices designed to regulate your nervous system and promote deep relaxation. Through conscious breathing techniques, you'll learn to shift your state, release stored tension, and access deeper levels of peace and clarity.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Regulates the nervous system",
          "Promotes deep relaxation and peace",
          "Releases stored tension and stress",
          "Enhances clarity and mental focus",
          "Supports emotional release and healing",
          "Teaches powerful self-regulation tools",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£70.00" },
          { duration: "90 minutes", price: "£100.00" },
        ],
      },
      {
        slug: "movement-therapy",
        title: "Movement Therapy",
        description:
          "Intuitive movement practices designed to support emotional flow and reconnection to self.",
        fullDescription:
          "Movement Therapy offers intuitive movement practices designed to support emotional flow and reconnection to self. Through mindful motion, breath, and energy awareness, this practice helps regulate your nervous system, release emotional stagnation, and deepen your connection to your body's wisdom.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Supports emotional flow and release",
          "Deepens reconnection to self",
          "Regulates nervous system through movement",
          "Releases emotional stagnation",
          "Enhances body awareness and wisdom",
          "Promotes holistic well-being",
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
      title: "Maternity Massage",
      subtitle: "Prenatal & Postnatal Care",
      description:
        "Tailored care for mothers before and after birth, focusing on the mental and emotional needs of this sacred transition while offering physical comfort and support.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "prenatal-massage",
        title: "Prenatal Massage",
        description:
          "Gentle, supportive massage designed specifically for expectant mothers to provide comfort and relief.",
        fullDescription:
          "Prenatal Massage is a gentle, supportive treatment designed specifically for expectant mothers. This specialized approach provides comfort and relief during pregnancy, addressing the unique physical and emotional needs of this sacred transition while supporting both mother and baby's well-being.",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Designed specifically for expectant mothers",
          "Provides comfort and relief during pregnancy",
          "Addresses physical and emotional needs",
          "Supports mother and baby's well-being",
          "Reduces pregnancy-related discomfort",
          "Promotes relaxation and stress relief",
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
          "Restorative massage to support new mothers during the postpartum period, addressing physical and emotional needs.",
        fullDescription:
          "Postnatal Massage offers restorative support for new mothers during the postpartum period. This gentle treatment addresses both physical and emotional needs, helping to restore balance, reduce tension, and support the body's recovery while honoring the profound transition into motherhood.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Supports new mothers during postpartum",
          "Addresses physical and emotional needs",
          "Helps restore balance and recovery",
          "Reduces tension and discomfort",
          "Honors the transition into motherhood",
          "Promotes healing and well-being",
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
      title: "2by4",
      subtitle: "Dual Therapist Experience",
      description:
        "Experience the profound synergy of two therapists working fluidly with one client. This unique triad creates an energetic alchemy that allows for deep release and realignment. With skilled fascia stretching and an intuitive understanding of biomechanics and energetic balance, tension is gently eased from both agonist and antagonist muscles.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "full-body-session",
        title: "Full Body Session",
        description:
          "Complete treatment with two therapists working in harmony to create deep release and realignment.",
        fullDescription:
          "The Full Body Session is a complete treatment experience with two therapists working in perfect harmony. This unique dual-therapist approach creates an energetic alchemy that allows for deep release and realignment, addressing both agonist and antagonist muscles simultaneously for profound results.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Two therapists working in harmony",
          "Creates deep release and realignment",
          "Addresses agonist and antagonist muscles",
          "Energetic alchemy and synergy",
          "Profound and lasting results",
          "Comprehensive full-body treatment",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "targeted-release",
        title: "Targeted Release",
        description:
          "Focused work on specific areas with dual therapist attention for maximum effectiveness.",
        fullDescription:
          "Targeted Release offers focused work on specific areas with dual therapist attention for maximum effectiveness. This concentrated approach allows both therapists to work together on particular regions of concern, creating deeper release and more precise realignment than traditional single-therapist treatments.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Focused work on specific areas",
          "Dual therapist attention for maximum effectiveness",
          "Deeper release and precise realignment",
          "More effective than single-therapist treatments",
          "Addresses specific concerns and patterns",
          "Creates lasting change in targeted areas",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£90.00" },
          { duration: "90 minutes", price: "£120.00" },
        ],
      },
    ],
  },
  {
    slug: "dr-hr-sports-london",
    hero: {
      title: "DR / HR Sports Clinic",
      subtitle: "High-Performance Treatment",
      description:
        "Designed by co-founder Diego Robinson, these high-performance, results-driven treatments aim to achieve measurable change in just one session. They combine elite-level sports therapy with biomechanical analysis, intuitive assessment, and functional movement expertise.",
      youtubeVideoId: "S_-e1AOuPug", // Example - replace with actual video IDs
    },
    subservices: [
      {
        slug: "sports-massage",
        title: "Sports Massage",
        description:
          "Elite-level sports therapy targeting performance enhancement and injury prevention.",
        fullDescription:
          "Sports Massage offers elite-level sports therapy targeting performance enhancement and injury prevention. Designed by co-founder Diego Robinson, this high-performance treatment combines advanced techniques with biomechanical understanding to help athletes and active individuals achieve optimal performance and prevent injury.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Elite-level sports therapy techniques",
          "Targets performance enhancement",
          "Prevents and addresses injuries",
          "Combines advanced techniques with biomechanics",
          "Supports optimal athletic performance",
          "Results-driven approach",
        ],
        pricingOptions: [
          { duration: "60 minutes", price: "£80.00" },
          { duration: "90 minutes", price: "£110.00" },
        ],
      },
      {
        slug: "biomechanical-analysis",
        title: "Biomechanical Analysis",
        description:
          "Comprehensive movement assessment to identify imbalances and optimize performance.",
        fullDescription:
          "Biomechanical Analysis provides a comprehensive movement assessment to identify imbalances and optimize performance. This detailed evaluation examines your movement patterns, identifies areas of restriction or compensation, and creates a targeted treatment plan to restore optimal function and prevent injury.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Comprehensive movement assessment",
          "Identifies imbalances and compensations",
          "Creates targeted treatment plans",
          "Optimizes performance and function",
          "Prevents injury through understanding",
          "Supports long-term athletic health",
        ],
        pricingOptions: [
          { duration: "90 minutes", price: "£120.00" },
          { duration: "120 minutes", price: "£160.00" },
        ],
      },
      {
        slug: "functional-movement",
        title: "Functional Movement Therapy",
        description:
          "Targeted treatment to restore optimal movement patterns and functional capacity.",
        fullDescription:
          "Functional Movement Therapy offers targeted treatment to restore optimal movement patterns and functional capacity. This approach combines hands-on therapy with movement education to help you move more efficiently, reduce pain, and improve your ability to perform daily activities and athletic pursuits with ease.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        videoId: "S_-e1AOuPug",
        benefits: [
          "Restores optimal movement patterns",
          "Improves functional capacity",
          "Combines hands-on therapy with movement education",
          "Reduces pain and improves efficiency",
          "Enhances daily and athletic performance",
          "Creates lasting movement improvements",
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

