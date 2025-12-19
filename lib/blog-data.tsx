import { ReactNode } from "react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorImage?: string; // Placeholder for now
  date: string;
  readTime: string;
  image: string; // Placeholder URL
  excerpt: string;
  content: ReactNode;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "seasonal-frequencies-wolf-moon",
    title: "Seasonal Frequencies & the Wolf Moon Pathway to Authentic Frequency",
    author: "Maria Holistic Rising",
    date: "Dec 18, 2025",
    readTime: "21 minute read",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop",
    excerpt: "At Holistic Rising Healing Clinic, we understand healing as a frequency journey — a gradual remembering of your authentic vibration beneath layers of conditioning.",
    content: (
      <>
        <p>
          At Holistic Rising Healing Clinic, we understand healing as a frequency journey — a gradual remembering of your authentic vibration beneath layers of conditioning, trauma, fatigue and protection. Drawing on a lineage of South American shamanic wisdom, sports therapy, holistic treatments and frequency medicine, we help clients return to their natural state of inner coherence, clarity and self-trust.
        </p>
        <p>
          The following piece maps a powerful seasonal arc — from the New Moon in Sagittarius through the Winter Solstice, into the Christmas bridge, culminating in the Wolf Full Moon and Wolf Spirit medicine and a 7-day integration. It offers a living blueprint for how consciousness, body and energy move through this portal.
        </p>
        <p>
          This is the energetic landscape into which Holistic Rising steps beside you:
          holding space, regulating the nervous system, working with the body’s wisdom and subtle energy, and helping you align with your authentic frequency so these cosmic frequencies don’t just stay as ideas — they land in your tissues, breath and daily choices.
        </p>
        <hr className="my-8 border-white/10" />
        <h3 className="text-2xl font-bold mb-4">🌑 Frequency of the New Moon in Sagittarius – December 20</h3>
        <p>
          When we speak of frequency, we’re referring to the subtle energetic “tone” or oscillation this lunation emits — the inner rhythm it activates in consciousness.
        </p>
        <p className="mb-4">The Sagittarius new moon resonates at a frequency of:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>⬆️ Expansion + upward movement</strong>: like widening horizons, lifting beyond limitation, access to higher mind + spiritual perspective.</li>
          <li><strong>🔥 Fire of initiation</strong>: inspiration, ignition, possibility, an electric impulse toward the future.</li>
          <li><strong>🎯 Alignment to Truth + Purpose</strong>: frequency of honesty + authenticity, cutting through illusions, aligning with inner knowing.</li>
          <li><strong>🌌 Quantum faith + “leap energy”</strong>: willingness to step into the unknown, trusting the unseen trajectory.</li>
          <li><strong>🌀 Alchemical transmutation of belief</strong>: subconscious belief systems shifting, releasing restrictive narratives, upgrading inner programming.</li>
        </ul>
        <p>
          The frequency is a high-vibration fire, but occurring in darkness. It’s like a pulse inside the void inviting expansion without yet revealing form. You could imagine it sounding like a low, building hum beneath the surface — a resonance preparing to ignite the next cycle of growth.
        </p>
        <h3 className="text-2xl font-bold mb-4 mt-8">❄️ Frequency of the Winter Solstice – December 21</h3>
        <p>
           The Winter Solstice carries a frequency that is ancient, cyclical, and initiatory. Energetically, it marks the precise moment when darkness reaches its peak and the light is reborn. Rather than a burst of light, the Solstice frequency is subtle — a whisper at first — but foundational to the next cycle of growth.
        </p>
        <h4 className="text-xl font-bold mt-6 mb-2">The qualities of this frequency</h4>
        <div className="space-y-6">
            <div>
                <strong className="block text-lg mb-1">🌑 1. Stillness frequency</strong>
                <p>The solstice lands in a moment of pause between breaths: suspended time, quiet potential, deep internal reflection, awareness held inward. This frequency slows the nervous system so deeper insights can surface.</p>
            </div>
            <div>
                <strong className="block text-lg mb-1">🌋 2. Seed-in-the-dark frequency</strong>
                <p>Before anything sprouts, it rests below the soil. This frequency invites: gestation, dreaming, preparation beneath consciousness, trust in unseen cycles. It’s a reminder that growth begins in shadows, not sunlight.</p>
            </div>
             <div>
                <strong className="block text-lg mb-1">🔄 3. Threshold / Portal frequency</strong>
                <p>The solstice vibrates as a doorway between cycles: ending and beginning simultaneously, death + rebirth in one breath, shifting from descent to ascent. The frequency is liminal — between world, between year, between selves.</p>
            </div>
             <div>
                <strong className="block text-lg mb-1">🕯 4. Return-of-Light frequency</strong>
                <p>Though imperceptible at first, a new current begins moving upward— renewal, reanimation, gradual expansion, hope emerging softly. It carries the inner tone of light awakening inside the dark.</p>
            </div>
             <div>
                <strong className="block text-lg mb-1">🌌 5. Ancient memory frequency</strong>
                <p>The solstice connects to ancestral rhythmic wisdom: earth time vs. mechanical time, cyclical wisdom over linear productivity, cellular memory of seasonal rhythms. This can bring a sense of grounding + belonging within nature’s order.</p>
            </div>
        </div>
        
        <h4 className="text-xl font-bold mt-8 mb-2">How this frequency feels in the body</h4>
        <p>People often experience the solstice as: slowness, introspection, increased intuitive sensitivity, emotional release or melancholy, longing for warmth, connection, simplicity, inner clarity emerging gradually. This is not stagnation — it is a deep reset.</p>

        <h3 className="text-2xl font-bold mb-4 mt-8">🌬️ Monday December 22 → entering the Christmas week</h3>
        <p><strong>Vision + energetic guidance:</strong> This day mediates between new moon intentions + slow returning light. A supportive vision for the week: move gently into organization + preparation, hold your intentions like seedlings—not demanding outcomes, practice gratitude + presence, slow-paced planning, not rushed productivity, keep inner rest + softness while engaging outer festivities, balance spiritual/new lunar cycle with social/Gregorian realities.</p>
        <p className="mt-4"><strong>Integrating lunar + Gregorian awareness:</strong> Though the lunar year continues until spring (April), Gregorian collective consciousness shifts at New Year’s. Rather than ignoring it: treat this week as a liminal bridge, let intentions from the new moon flow into end-of-year reflections, allow inner renewal to begin now rather than on January 1. Imagine the new moon energy cascading like an energetic waterfall through solstice → holidays → year-end → into early January.</p>

         <h3 className="text-2xl font-bold mb-4 mt-8">🌕 Frequency of the January Full Moon (Wolf Moon) — 2026</h3>
         <p>This Full Moon’s frequency is amplified, clarifying, and instinctual. Full moons in general are moments when lunar light fully illuminates what was previously hidden, subtle, or unconscious. The Wolf Moon specifically brings a vibration that is:</p>
         
          <div className="space-y-6 mt-4">
             <div>
                <strong className="text-lg">🔊 1. Highly Charged Emotional Resonance</strong>
                <p>Full moons heighten sensitivity — emotionally, energetically, intuitively. The frequency feels like a tuning fork struck within the nervous system, making inner material reverberate outward.</p>
             </div>
             <div>
                <strong className="text-lg">🐺 2. Instinctual & Primal Awareness</strong>
                <p>The “Wolf Moon” archetype resonates with deep instinct, survival intelligence, tribal/community connection, and inner howl. This frequency reconnects you with the primal self. It’s a vibration that says: “Hear your inner voice. Let what is ready be expressed.”</p>
             </div>
             <div>
                <strong className="text-lg">🌌 3. Amplification + Illumination</strong>
                <p>Full moons are like spiritual spotlights. This is a critical frequency for completion, release, and acknowledgment before new cycles begin.</p>
             </div>
             <div>
                <strong className="text-lg">🧠 4. Integration of Head + Heart</strong>
                <p>It invites emotional honesty, alignment between intention and nervous system, listening to the body’s wisdom, dialogue between heart and mind. This is NOT merely conceptual awareness — it moves energy into felt experience.</p>
             </div>
         </div>

         <div className="bg-white/5 p-6 rounded-xl my-8">
            <h4 className="text-xl font-bold mb-4">✨ Frequential Keywords for the Wolf Moon</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>• Amplification</li>
                <li>• Emotional clarity</li>
                <li>• Instinct & intuition</li>
                <li>• Embodied truth</li>
                <li>• Community resonance</li>
                <li>• Release + expression</li>
                <li>• Alignment of heart + purpose</li>
            </ul>
         </div>

         <p className="italic text-muted-foreground mt-8">
            (The full ritual, meditation, and 7-day integration guide continues below in our clinic resources...)
         </p>
      </>
    ),
  },
  {
    id: "2",
    slug: "why-feet-matter",
    title: "Why Feet Matter for Brain, Balance & Whole-Body Health",
    author: "Maria Holistic Rising",
    date: "Dec 18, 2025",
    readTime: "11 minute read",
    image: "https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?q=80&w=2694&auto=format&fit=crop",
    excerpt: "One of the most potent neurological systems in your body begins at your feet. They are not just for walking—they house thousands of nerve endings.",
    content: (
        <>
            <p>
                When many imagine brain or neurological rehabilitation, they think of cognitive work, vestibular therapy, or postural training. Yet at Holistic Rising — where we blend frequency medicine, ancient healing wisdom, modern bodywork and energetic awareness — we recognise something deeper: one of the most potent neurological systems in your body begins at your feet.
            </p>
            <p>
                Feet are not just for walking. They house thousands of nerve endings, mechanoreceptors, intrinsic muscles, fascia, ligaments, and joints — all continuously sending sensory information to your brain, spinal cord, cerebellum, vestibular system, and posture-control networks. Every step, every shift in weight, every micro-sway underpins a powerful feedback loop.
            </p>
            <p>
                At Holistic Rising, we view the feet as the foundational platform not only of physical posture and balance but of energetic, neurological, visceral, and whole-body health.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">🧠 The Feet–Brain Connection: What Research Reveals</h3>
            <p>
                Neurological rehabilitation research increasingly confirms what holistic systems have known for centuries: foot mobilisation and intrinsic muscle activation directly improve brain-based balance. A recent study (Life, 2025) demonstrated that patients recovering from brain-tumour surgery showed significant improvements in dynamic postural stability, coordination, spatial awareness, and gait quality when their rehabilitation included sensorimotor foot mobilisation.
            </p>
            <p className="font-medium mt-2">In essence, the feet stabilise the brain.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">🌸 Holistic Rising’s Ground-Up Approach</h3>
            
            <div className="space-y-6">
                <div>
                     <strong className="text-lg block mb-2">🌎 Grounding: Earth, Frequency & the Body’s Electrical Harmony</strong>
                     <p>At Holistic Rising, grounding isn’t just a metaphor — it’s foundational. By reconnecting your body (through your feet) to the Earth, we restore a natural electrical and energetic connection. This helps to reduce inflammation, stabilise electrical signalling, lower neural noise, enhance circadian regulation, and calm the nervous system.</p>
                </div>
                 <div>
                     <strong className="text-lg block mb-2">💪🏽 From Feet to Hormones</strong>
                     <p>Healing from the ground up affects hormonal balance, pelvic health, and vitality. For women, restoring grounding and foot mechanics can regulate hormonal rhythms and support menopausal transition. For men, it can influence pelvic-floor health and vitality.</p>
                </div>
                 <div>
                     <strong className="text-lg block mb-2">🫁🫀 Feet, Inflammation & Organ Vitality</strong>
                     <p>Feet are often the first point of contact between our bodies and the ground. Through specialised foot-and-ankle therapy, Ayurvedic foot massage, and energetic bodywork, we help restore circulation, open fascia lines, and support lymphatic flow.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">🌟 Why This Matters</h3>
            <p>
                At Holistic Rising, we hold a simple but profound belief: your body is a living energetic ecosystem. When the foundation — your feet, your contact with Earth, your nervous system — is ground-connected, responsive and balanced, the rest of the body naturally aligns, regenerates and thrives.
            </p>
            <p>
                If you are ready to rebuild from the ground up — physically, energetically and emotionally — we are here to walk beside you.
            </p>
        </>
    )
  },
  {
    id: "3",
    slug: "healer-journey-self-love",
    title: "A Healer’s Journey to Self-Love",
    author: "Maria Holistic Rising",
    date: "Sep 17, 2025",
    readTime: "3 minute read",
    image: "https://images.unsplash.com/photo-1499209974431-2761e2017722?q=80&w=2694&auto=format&fit=crop",
    excerpt: "The first time I met Self-Love, my heart was broken, and I asked, 'Why did you betray me?' And Self-Love replied...",
    content: (
        <div className="space-y-8 italic text-lg leading-relaxed">
            <div>
                <p>The first time I met Self-Love</p>
                <p>My heart was broken, and I asked, “Why did you betray me?”</p>
                <p>And Self-Love replied, “It was not I who betrayed you, but your own forgotten worth. I am incapable of betrayal.”</p>
            </div>
             <div>
                <p>The second time I met Self-Love</p>
                <p>My spirit felt crushed, and I asked, “Why did you hurt me?”</p>
                <p>And Self-Love replied, “It was not I who hurt you, but the weight of lessons unlearned. I am incapable of causing pain— I only reveal the places still in need of healing.”</p>
            </div>
             <div>
                <p>The third time I met Self-Love</p>
                <p>My energy was drained, and I asked, “Why did you leave me empty?”</p>
                <p>And Self-Love replied, “It was your giving without boundaries, your forgetting to receive. I am the well that never dries when you drink first of your own waters.”</p>
            </div>
            <div>
                <p>The fourth time I met Self-Love</p>
                <p>My being felt alone, and I asked “Why did you abandon me?”</p>
                <p>And Self-Love replied, “I have always lived within you. It was your eyes turned outward that forgot to gaze inward.”</p>
            </div>
            <div>
                <p>The ninth time I met Self-Love</p>
                <p>I felt a profound release, a surrender into wholeness.</p>
                <p>And I asked, “What is left for me now?”</p>
                <p>And Self-Love replied, “Now you live within the beauty of service, rooted in Mother Nature, woven with all living beings. You are no longer searching for me. You are my expression, my eternal flame, my rainbow bridge between heaven and earth.”</p>
            </div>
        </div>
    )
  },
  {
    id: "4",
    slug: "dance-of-energies-within",
    title: "The Dance of Energies Within: Weaving Consciousness",
    author: "Maria Holistic Rising",
    date: "Sep 04, 2025",
    readTime: "4 minute read",
    image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=2576&auto=format&fit=crop",
    excerpt: "When we speak here of feminine and masculine, we are not referring to gender. These are timeless, complementary energies that flow within every one of us.",
    content: (
        <>
             <p>Let us begin with clarity: when we speak here of feminine and masculine, we are not referring to gender. These are not labels bound by biology, but the timeless, complementary energies that flow within every one of us.</p>
             <p>The concepts of male and female are tied to physical form — shaped by hormones, nutrition, genetics, cultural norms, upbringing, financial circumstances. It is here that energy comes into play — in the form of intention, nurtured through integrity — and from this place our uniqueness is born.</p>
             <p>True equilibrium — a state of inner homeostasis — is found when these inner energies are balanced. When we cultivate harmony within, our perception shifts naturally. Bias softens. Bigotry loses its grip. Inequality is challenged by compassion.</p>
             <p>Our physical form is not merely flesh and bone; it is an electrical symphony. The human body generates electricity that flows through it, with its own magnetic fields. The heart itself is a powerful conductor. This living current generates an electromagnetic field, and because we are made of charged particles, we are subject to the same laws of electromagnetism that govern all life.</p>
             <p>By attuning to the natural flow of energy within, and restoring balance to our way of being, life becomes simpler. Peace is no longer something to be sought, but something that arises naturally. Joy takes root.</p>
             <p>This is not a utopian dream. It is the weaving of the great spider’s web — a conscious network of awareness carrying us towards a new reality. One where the human soul is no longer manipulated by ego, and the divine spark of the Creator is recognised in every living being of Mother Nature.</p>
             <p>From this tapestry of consciousness, rainbows are born — each a unique kaleidoscope of freedom and possibility. May we rise.</p>
        </>
    )
  },
  {
    id: "5",
    slug: "consciousness-beyond-death",
    title: "Consciousness Beyond Death: Science, Spirit, and the Interconnectedness",
    author: "Maria Holistic Rising",
    date: "Sep 04, 2025",
    readTime: "7 minute read",
    image: "https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?q=80&w=2670&auto=format&fit=crop",
    excerpt: "Quantum physics and the theory of biocentrism invite us to see death not as an ending but as an unfolding doorway into deeper truths about consciousness.",
    content: (
        <>
            <p>In the vast expanse of human history, few questions have stirred the heart more deeply than: What happens when we die? Across traditions, philosophies, and scientific inquiry, people have searched for answers. Today, quantum physics and the theory of biocentrism, introduced by Dr Robert Lanza, invite us to see death not as an ending but as an unfolding doorway into deeper truths about consciousness and existence.</p>
            <p>Lanza proposes that death may be an illusion, that consciousness is not extinguished but continues—flowing seamlessly beyond physical form.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Consciousness as the Living Thread 🕸</h3>
            <p>Biocentrism suggests that consciousness is not confined to the body, but instead is the very fabric of reality itself. Our thoughts, perceptions, and beliefs shape the world we experience.</p>
            <ul className="list-disc pl-6 space-y-4 my-4">
                <li><strong>Christianity</strong> reminds us that eternal life is not bound by earthly form.</li>
                <li><strong>Buddhism</strong> teaches of impermanence and rebirth, where consciousness continues its journey beyond physical form.</li>
                <li><strong>Hinduism</strong> speaks of Atman, the eternal soul, which is one with Brahman.</li>
                <li><strong>Islam</strong> emphasises that the soul belongs to God and returns to Him.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">The Interconnectedness of All Being 🌈</h3>
            <p>If consciousness is energy, and energy cannot be destroyed, then we are eternally connected—to one another, to Mother Nature, and to the universe itself. This interconnectedness is reflected in both physics and faith.</p>
            <p>Quantum theory tells us that particles remain entangled across vast distances. In the same way, our actions, thoughts, and love ripple through the web of existence.</p>
            <p>African spirituality affirms this beautifully. Time is not seen as linear, but as cyclical. Native American Indigenous traditions speak of Mitákuye Oyás’iŋ—“all my relations”—a recognition that every tree, stone, river, and creature is kin.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Living the Quantum-Spiritual Perspective 💟</h3>
            <p>If death is not the end, how might we live differently?</p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
                <li><strong>Live Mindfully</strong> – Embrace each moment fully.</li>
                <li><strong>Embrace Change</strong> – See change not as loss, but as transformation.</li>
                <li><strong>Cultivate Compassion</strong> – Recognise our shared essence.</li>
                <li><strong>Shape Reality with Intention</strong> – Our beliefs create the world.</li>
                <li><strong>Seek Purpose</strong> – Align with the soul’s calling.</li>
                <li><strong>Honour Interconnectedness</strong> – Protect Mother Earth.</li>
                <li><strong>Transcend Fear of Death</strong> – See death not as an ending, but as a sacred passage.</li>
            </ol>
            
            <p className="mt-8 font-serif italic text-lg text-center">
                “Consciousness is not something we have—it is what we are. And in that knowing, we find freedom, peace, and the eternal embrace of the One Life that holds us all.”
            </p>
        </>
    )
  },
  {
    id: "6",
    slug: "plants-as-healers",
    title: "Plants as Healers: Energy, Fungi, and the Power of Nature 💜🪴🌿",
    author: "Maria Holistic Rising",
    date: "Jul 17, 2025",
    readTime: "4 minute read",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2690&auto=format&fit=crop",
    excerpt: "Plants are more than just decorative—they are powerful allies in clearing dense or stagnant energy from a room. They breathe life into a space—literally and spiritually.",
    content: (
        <>
            <p>Plants are more than just decorative—they are powerful allies in clearing dense or stagnant energy from a room. If a space feels heavy, stuffy, or energetically off, one of the most effective ways to reset it is by introducing plants. They breathe life into a space—literally and spiritually.</p>
            <p>Flies are often a subtle sign of energetic stagnation. If you notice flies, especially around your plants, it’s a message that the energy in the room needs to be cleared. Lavender, Rosemary, Sage, and Yerba Buena are excellent for this.</p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Soil as a Mirror of Energy</h3>
            <p>Plants act as transmuters, absorbing heavy energies directing it through their roots to the soil. But when the burden is too great, plants may develop fungus in the soil—a clear sign that the energy in the space is too stagnant. Renew the soil regularly by removing the bottom layer, and replace it with fresh, nutrient-rich soil.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Natural Antifungals for Soil and Plant Care</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Neem oil</strong> – a powerful natural antifungal and pest repellent</li>
                <li><strong>Apple cider vinegar</strong> – balances pH and combats fungal overgrowth</li>
                <li><strong>Green tea leaves</strong> – nourish the soil while acting as a mild antifungal</li>
                <li><strong>Cinnamon</strong> – both antifungal and a natural pH balancer</li>
                <li><strong>Banana peel tea</strong> – packed with potassium, great for plant vitality</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">The Detox Journey: From Stagnation to Vitality</h3>
            <p>Just like plants, our bodies reflect the energy we hold and the environment we live in. Fungal infections in the body are often signs of internal stagnation. Detoxing from sugar and animal protein helps starve fungal overgrowth in the body.</p> 
            <p>The path of healing isn’t always easy—but it is sacred. Just as we care for our plants, refreshing their soil and tending to their leaves, we must also tend to our own roots—our bodies, our energy, and our environment.</p>
        </>
    )
  },
  {
    id: "7",
    slug: "wholeness-through-water",
    title: "Wholeness Through Water, Spirit, and the Mind",
    author: "Maria Holistic Rising",
    date: "Jul 17, 2025",
    readTime: "6 minute read",
    image: "https://images.unsplash.com/photo-1544468641-c11dd4f43339?q=80&w=2670&auto=format&fit=crop",
    excerpt: "The body renews itself every 40 days. Consider that — every 40 days, we are offered a new beginning. Water is our life-giving force.",
    content: (
        <>
            <p>In Reflection, the body renews itself every 40 days. Consider that — every 40 days, we are offered a new beginning. A new rhythm. A new way of being. A new opportunity to align with wholeness through the choices we make — particularly in our nourishment, our movement, our breath, and the very composition of our being. Water is our life-giving force.</p>
            <p>Without fluidity, there is no restoration. No current. No connection to the moon. No pulse through the pores. Water is not merely cleansing — it is our original conduit. It hydrates, heals, and reminds us of who we are.</p>
            <p>Approximately 75% of the brain, and around 60% of the human body, is made up of water. It is our largest single component — and yet we often treat it as secondary.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">We are surrounded by energy.</h3>
            <p>The human energy field — our aura — extends on average around eight feet in every direction. This field can uplift us or drain us. Speed and vibration are not the same. Often, the faster we move, the denser our vibration becomes. True vibration flows — like water. It moves with the breath.</p>

            <div className="bg-white/5 p-6 rounded-xl my-8 italic">
                <p>Let your water flow.</p>
                <p>Let your light shine.</p>
                <p>Let your vibration guide you.</p>
                <p>Let your body be your temple.</p>
                <p>Let your soul speak.</p>
                <p>Let your mind serve.</p>
                <p>Let peace be a practice, not a pursuit.</p>
                <p>Let discipline be an act of devotion, not deprivation.</p>
                <p>Let freedom be something you claim, not something you wait for.</p>
            </div>
            
            <p className="font-bold text-center mt-8">May this message be your mirror. May this moment be your return. Aho. 🥁💜</p>
        </>
    )
  },
  {
    id: "8",
    slug: "energy-boundaries-nature-mirror",
    title: "🌹 Energy, Boundaries & Nature’s Mirror 🌿",
    author: "Maria Holistic Rising",
    date: "Jul 17, 2025",
    readTime: "2 minute read",
    image: "https://images.unsplash.com/photo-1468392170889-cb14757c91c3?q=80&w=2675&auto=format&fit=crop",
    excerpt: "I planted roses with complementing herbs to create a thriving, balanced environment. Recently, a weed from a neighbouring tree sensed the roses’ vitality.",
    content: (
        <>
            <p>I planted roses with complementing herbs—lavender, rosemary, and light flowers—to create a thriving, balanced environment. They’ve flourished for two years, blooming beautifully through all seasons.</p>
            <p>Recently, a weed from a neighbouring tree sensed the roses’ vitality. It climbed over a tall, barbed wall—up, over, and down—just to reach them. That one tendril, driven by instinct, began to drain the rose’s energy. Roses are the highest vibrational flower known 🌹 therefore can positively impact a garden and home. I cut the weed back, but it reminded me of something deeper.</p>
            <p>The nature of weeds is a dense vibration. They run across floors or climb trees they don’t own root and are drawn to the beauty of the glow the roses flow. Not out of malice, but by nature—they spread. Flowers, on the other hand, bloom. They don’t need numbers to make an impact—just presence, beauty, and stillness.</p>
            <p>This experience reminded me that dense energy isn’t personal. It’s vibrational. Those carrying heaviness will naturally reach for light—but they can’t be lifted by it unless they choose to release. We don’t need to resist or fight it—we need create clear boundaries to preserve stillness and self love.</p>
            <p>It’s in maintaining a personal space that we remain rooted, time alone, long baths, quiet afternoon walks alone, journaling, maintaining uniqueness and individuality. Stillness allows us to bloom without being shaped by others’ movement. When we cultivate self above all, our energy becomes a reflection, not a reaction.</p>
        </>
    )
  },
  {
    id: "9",
    slug: "effects-of-stress",
    title: "Effects of Stress",
    author: "Anonymous",
    date: "May 16, 2025",
    readTime: "5 minute read",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2668&auto=format&fit=crop",
    excerpt: "Stress has a very detrimental effect on the body both physiologically and emotionally. Here are the most prominent ways that stress manifests within the body.",
    content: (
        <>
            <p>At Holistic Rising we care about the well-being and health of our clients. Stress has a very detrimental effect on the body both physiologically and emotionally. Whilst in today's society stress can seldom be avoided in order to remain a competitive edge across the market and competitors, it can be balanced and maintained with awareness to manage long term effect.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Musculoskeletal system</h3>
            <p>When the body is stressed, muscles tense up. Muscle tension is almost a reflex reaction to stress—the body’s way of guarding against injury and pain. With sudden onset stress, the muscles tense up all at once, and then release their tension when the stress passes. Chronic stress causes the muscles in the body to be in a more or less constant state of guardedness.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cardiovascular system</h3>
            <p>The heart and blood vessels comprise the two elements of the cardiovascular system. Acute stress causes an increase in heart rate and stronger contractions of the heart muscle. Chronic stress, or a constant stress experienced over a prolonged period of time, can contribute to long-term problems for heart and blood vessels, increasing the risk for hypertension, heart attack, or stroke.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Digestive System</h3>
            <p>Stress is associated with changes in gut bacteria which in turn can influence mood. Early life stress can change the development of the nervous system as well as how the body reacts to stress.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Esophagus:</strong> Stress or exhaustion can increase the severity of heartburn pain.</li>
                <li><strong>Stomach:</strong> Stress may make pain, bloating, nausea, and other stomach discomfort felt more easily.</li>
                <li><strong>Bowel:</strong> Stress can affect how quickly food moves through the body, causing diarrhea or constipation.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Stress and health</h3>
            <p>Glucocorticoids, including cortisol, are important for regulating the immune system. Chronic stress can result in impaired communication between the immune system and the HPA axis. This impaired communication has been linked to the future development of numerous physical and mental health conditions, including chronic fatigue, metabolic disorders, depression, and immune disorders.</p>
        </>
    )
  }
];
