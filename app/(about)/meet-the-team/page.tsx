import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star } from "lucide-react";

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Diego Robinson",
      role: "Co-Founder & Specialist",
      rating: 5,
      reviews: 178,
      bio: "Diego Robinson is a highly respected sports performance specialist, celebrated for his cutting-edge approach to physical health, mobility, and human biomechanics. Widely regarded as one of London’s leading sports specialists, Diego brings precision, deep anatomical expertise, and innovative thinking to his work with athletes and individuals seeking to optimise their physical function. As Co-Founder of Holistic Rising and son of Maria Sarmiento, Diego stands at the heart of a family legacy devoted to healing, service, and transformation. Together, Maria and Diego have united their life’s work through Holistic Rising — a practice that bridges ancestral wisdom, energy work, and holistic science. Their shared vision is one of balance and integration: where the body, mind, and spirit are understood as one system of communication and vitality. Drawing from their ancestral connection to healing, Diego infuses his practice with intuitive awareness, honouring the energetic foundations of wellbeing that underpin all physical movement. His understanding of biomechanics and human structure is complemented by a profound respect for the energetic body, creating a uniquely integrated approach to recovery and performance. Building upon his foundational work with Holistic Rising, Diego went on to establish DR Sports Clinic, a pioneering therapeutic space redefining modern sports therapy. What sets DR Sports Clinic apart is its commitment to treating the body as an interconnected system — not focusing solely on injury or pain, but exploring how posture, movement, lifestyle, and energy flow collectively shape physical health. Diego’s method goes beyond recovery; it is about elevating natural performance, enhancing function, and cultivating long-term resilience. Through DR Sports Clinic and Holistic Rising, Diego continues to shape a new paradigm in therapy, that fuses anatomical intelligence with energetic balance, rooted in a shared vision of wholeness, vitality, holistic evolution",
    },
    {
      name: "Maria Holistic Rising",
      role: "Co-Founder",
      rating: 5,
      reviews: 209,
      bio: "As Co-Founder of Holistic Rising, my life’s work is rooted in service — guiding others to release what no longer serves them, reconnect with their inner light, and restore harmony between mind, body, and spirit. My approach centres on holding sacred space for clients to release dense energies through breath-work, awareness, and detachment from limiting ideologies, helping them remember their true essence — spirit in human form. I treat the body first, while informing the mind and releasing the heaviness of the soul. My work focuses on ancestral healing and childhood wound liberation, supporting clients in dissolving inherited patterns and rediscovering truth and authenticity. Transformation arises when self-awareness and compassion meet stillness — when the mind softens, the body releases, and the spirit expands. This is the essence of my Trauma Release Treatment, guiding clients toward balance, peace, and empowerment. My path is deeply shamanic, rooted in my ancestral lineage. My grandmother was a shamanic energy healer, and I have inherited a natural ability for energy work through our bloodline. As a practising shaman, I integrate ancient traditions with a modern understanding of energetic anatomy, bridging physical and spiritual dimensions of healing. Over the past five years, I have devoted myself to advanced study in natural and holistic healing. My ongoing research explores Frequency Medicine and spiritual practice as part of my PhD in Natural Medicine, encompassing herbalism, acupuncture, Chinese medicine, energy medicine, and ancient healing methodologies reinterpreted through modern science. Through Holistic Rising, I unite science, spirit, and ancestral wisdom in a grounded, transformative practice that helps others return home — to self, to love, and to the divine light within.",
    },
    {
      name: "Rebecca Long",
      role: "Beauty Therapist",
      rating: 5,
      reviews: 6,
      bio: "I’m Becca, a dedicated beauty therapist with a passion for helping clients feel relaxed, beautiful, and confident. I take pride in delivering high-quality treatments and ensuring each client enjoys a truly rejuvenating experience. Whether it’s a soothing facial or a confidence-boosting beauty treatment, my goal is always to provide exceptional care and satisfaction. I am committed to continuous learning and growth, always refining my skills to offer the best possible experience. Building genuine connections with my clients is at the heart of my work, creating a welcoming and uplifting environment. In addition to beauty treatments, I also offer holistic treatments at Holistic Rising, embracing a well-rounded approach to wellness and self-care. Outside of work, I have a deep love for art, nature, and animals, all of which inspire me in my journey of personal and professional growth.",
    },
    {
      name: "Remell Antoine",
      role: "Sports Massage Therapist",
      rating: 5,
      reviews: 4,
      bio: "I’m Remell, a dedicated Sports Massage Therapist based in East London, passionate about helping people move freely, recover effectively, and feel their absolute best. My journey into massage therapy began after facing a series of my own injuries — including a dislocated knee and a torn hamstring. Going through the long and often challenging recovery process opened my eyes to the true power of rehabilitation, movement, and self-care. That experience became the foundation of my practice. Today, I combine my first-hand understanding of recovery with my love for fitness and human performance to help others through their own repair and renewal. My approach goes beyond treating pain — it’s about holistic wellness: helping you rebuild strength, restore balance, and regain confidence in your body. Whether you’re recovering from injury, training hard, or simply want to move better, my goal is to support you every step of the way.",
    },
    {
      name: "Tapiwanashe Isaac Shamu",
      role: "Sports Rehabilitator",
      rating: 5,
      reviews: 8,
      bio: "About Me I’m Isaac — a Graduate Sports Rehabilitator and Massage Therapist currently completing my Master’s in Physiotherapy. I’m passionate about helping people reconnect with their bodies, overcome pain, and move with greater ease and confidence. I approach my work with empathy, balance and curiosity, always striving to support each person towards feeling and living well. \n\nMy Approach Each session is a collaborative and supportive experience. I combine evidence-based practice with intuitive, mindful care — creating a calm, open space where you can feel heard, understood and at ease. My focus is not just on easing symptoms, but on helping you understand your body, restore balance and build lasting wellbeing. \n\nHow I Can Help You as a Therapist My sessions go beyond traditional massage therapy, integrating advanced sports rehabilitation techniques and detailed clinical assessment to optimise movement, performance and overall wellbeing. I utilise a combination of musculoskeletal assessments, neurological testing and functional movement screening to identify the root causes of discomfort, imbalance or restriction. This allows each treatment to be highly individualised, addressing both symptoms and their underlying patterns. Drawing on my background in manual therapy, soft tissue techniques, joint mobilisation and tailored rehabilitation exercises, I work to restore movement efficiency, enhance range of motion, and promote long-term physiological health. Whether your goal is recovery, performance enhancement or simply moving more freely, each session is designed to help you feel stronger, more balanced and confident in your body.",
    },
    {
      name: "Rumi Appadoo",
      role: "Physiotherapist",
      rating: 5,
      reviews: 3,
      bio: "Rumi is a compassionate physiotherapist with a deep-rooted passion for movement, recovery, and holistic wellbeing. With a background in Physiotherapy and a specialisation in Sports Massage, she brings both clinical expertise and an intuitive touch to her practice. Whether you’re an athlete preparing for an event, recovering from physical strain, or simply seeking a moment to unwind, Rumi’s sessions are designed to ease tension, restore balance, and rejuvenate the body. She believes that healing begins with awareness — and that a mindful massage can do far more than relieve sore muscles; it can help you reconnect with yourself. Rumi’s approach blends evidence-based techniques with a gentle, grounding presence, creating a safe space where your body can release stress and your mind can exhale. Her goal is simple: to help you move freely, feel lighter, and leave each session deeply relaxed and renewed. “Talk to me about your aches and pains — yes, the physical ones too! A massage goes a long way, especially when you need it most.” — Rumi",
    },
    {
      name: "Umer Naveed Malik",
      role: "Therapist",
      rating: 5,
      reviews: 3,
      bio: "Umer is a dedicated and highly skilled therapist joining Holistic Rising with over two years of professional experience as a physiotherapist. Before relocating to the UK, he successfully ran his own physiotherapy practice in his home country, where he built a strong reputation for his compassionate care and results-focused approach. Currently studying for his Master’s degree in Health and Social Care in the UK, Umer brings a wealth of clinical knowledge and an impressive range of therapeutic techniques to his clients. His expertise includes: • Deep tissue massage • Trigger point therapy • Swedish and sports massage • Chiropractic corrections • Dry needling • Hijama (wet cupping) • Fire cupping Driven by a genuine passion for healing, Umer is committed to helping people feel their best—relieving pain, restoring movement, and promoting deep relaxation. He prides himself on being a proactive, intuitive, and innovative therapist, always willing to think outside the box to find the most effective treatment for each individual. Known for his active listening, empathy, and exceptional communication skills, Umer builds strong, trusting relationships with his clients. His eloquent English and professional manner make every session both comfortable and deeply supportive. At the heart of Umer’s work is a sincere love for helping others improve their quality of life. With his diverse range of modalities, holistic understanding of the body, and unwavering dedication, he consistently goes the extra mile to ensure each client experiences meaningful, long-lasting results.",
    },
    {
      name: "DR Sports Clinic",
      role: "Performance & Recovery",
      rating: 5,
      reviews: 0,
      bio: "DR Sports Clinic, part of Holistic Rising, is a specialist performance and recovery space founded by Diego Robinson. The clinic focuses on achieving tangible results from the very first session, combining elite sports therapy, biomechanical analysis, intuitive assessment and functional movement expertise. Each session is designed to address imbalances, enhance performance, accelerate recovery, and restore full body alignment. Unlike traditional massage-based treatments, clients are asked to attend in activewear — such as shorts and a sports bra or similar — as the sessions involve movement-based assessment and dynamic treatment rather than remaining entirely passive. In harmony with Holistic Rising’s wider ethos — which embraces frequency medicine, fluidity, presence, and the understanding that healing is a continuous, multi-layered process — DR Sports Clinic focuses on the physical and functional systems of the body while maintaining a heart-centred and integrative approach. Whether you are an athlete aiming to optimise performance, recovering from injury, or simply seeking to move more freely and feel stronger, DR Sports Clinic provides a results-driven service that bridges structural expertise with energetic balance.",
    },
    {
      name: "Healing Movement",
      role: "Movement Therapy",
      rating: 5,
      reviews: 5,
      bio: "Healing Movement is an integral part of our holistic approach, focusing on the connection between physical movement and energetic flow. Through guided practices and somatic awareness, we help clients rediscover the joy of movement and the freedom of a body in balance.",
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container relative z-10 mx-auto max-w-4xl text-center space-y-6">
            <div className="flex justify-center mb-4">
                 <div className="text-primary opacity-80 flex justify-center items-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                 </div>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient bg-clip-text text-primary bg-gradient-to-r from-white  pb-2">
                Meet The Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-sans">
                Welcome to Holistic Rising, we are more than just a healing clinic — we are a sanctuary for the soul, mind, and body. Founded by mother and son duo Maria Sarmiento and Diego Robinson, we come from a long lineage of South American shamanic healers. Together, we created Holistic Rising with a shared vision: to offer healing that is heartfelt, intentional, and rooted in ancient wisdom — while remaining fluid, adaptable, and fully present with each individual who walks through our doors.
            </p>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
                
                {/* Overall Rating & Distribution */}
                <div className="lg:col-span-4 flex flex-col md:flex-row items-center md:items-start gap-8">
                     <div className="text-center md:text-left space-y-2">
                        <div className="text-6xl font-bold font-serif text-white">5.0</div>
                        <div className="flex justify-center md:justify-start gap-1 text-primary">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">388 Reviews</p>
                     </div>

                     <div className="flex-1 w-full max-w-[180px] space-y-1">
                        {[5,4,3,2,1].map((num, i) => (
                             <div key={num} className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="w-3">{num}</span>
                                <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className={`h-full bg-primary ${i === 0 ? 'w-full' : 'w-0'}`} />
                                </div>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Overall", val: 5 },
                        { label: "Punctuality", val: 5 },
                        { label: "Value", val: 5 },
                        { label: "Service", val: 5 }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-background/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
                             <div className="flex gap-0.5 text-primary">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Team List Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
            {teamMembers.map((member, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}
                >
                    {/* Image Column */}
                    <div className="w-full md:w-5/12 lg:w-1/3 flex-shrink-0 relative">
                        {/* Decorative background element */}
                        <div className={`absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${index % 2 === 1 ? '-right-4' : '-left-4'}`} />
                        
                        <div className="aspect-[3/4] bg-neutral-800 rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 z-10">
                           {/* Placeholder for image */}
                           <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-700 font-serif text-8xl opacity-20 select-none">
                                {member.name.charAt(0)}
                           </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                                {member.name}
                            </h2>
                            <div className={`flex items-center gap-3 ${index % 2 === 1 ? 'md:flex-row-reverse justify-center md:justify-start' : 'justify-center md:justify-start'}`}>
                                <div className="flex gap-1 text-primary">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <span className="text-sm text-muted-foreground font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                    ({member.reviews})
                                </span>
                            </div>
                        </div>

                        <div className="prose prose-lg prose-invert text-muted-foreground leading-relaxed font-sans max-w-none">
                            <p className="whitespace-pre-line">
                                {member.bio}
                            </p>
                        </div>
                        
                        <div className={`pt-4 flex ${index % 2 === 1 ? 'md:justify-end justify-center' : 'md:justify-start justify-center'}`}>
                             <button className="px-8 py-3 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm font-bold uppercase tracking-widest text-white">
                                Book Now
                             </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </main>
  );
}
