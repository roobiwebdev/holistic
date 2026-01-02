import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export default function HealingMovementPage() {
  return (
    <ServicePageTemplate
      title="Healing Movement"
      subtitle="Embodied Flow"
      description="A holistic movement experience for healing."
      cards={[
        {
          title: "Core and Pelvic Floor Activation Yoga",
          description: "Focused on deep core engagement, pelvic stability, posture support and embodied strength.",
          image: "/images/services/holistic-treatments.png",
        },
        {
          title: "Hatha Flow",
          description: "A grounding, breath‑led flow that balances effort and ease while supporting energetic circulation.",
          image: "/images/services/2by4.png",
        },
        {
          title: "Meditation",
          description: "Guided practices to cultivate presence, mental clarity and nervous system calm.",
          image: "/images/services/sports-clinic.png",
        },
        {
          title: "Yin Class",
          description: "Long‑held postures supported by breath to encourage deep tissue, fascia and emotional release.",
          image: "/images/services/healing-logo.png",
        },
        {
          title: "Qigong",
          description: "Gentle, intentional energy‑based movement to unblock meridians, support qi flow and harmonise internal systems.",
          image: "/images/services/dr-sports.png",
        },
        {
          title: "Breathwork",
          description: "Conscious breathing practices to regulate the nervous system, release stored emotional tension and expand prana.",
          image: "/images/services/holistic-logo.png",
        },
        {
          title: "Self‑Healing",
          description: "Practical somatic and energetic tools for personal regulation and restoration.",
          image: "/images/services/holistic-treatments.png",
        },
        {
          title: "Sharing Circle",
          description: "A held space for reflection, community connection and emotional expression.",
          image: "/images/services/2by4.png",
        },
        {
          title: "Self‑Healing Techniques",
          description: "Intuitive practices that empower self‑awareness, energetic cleansing and internal balance.",
          image: "/images/services/sports-clinic.png",
        },
      ]}
      bottomContent={`
**Together, these practices form a holistic movement experience that supports physical release, energetic alignment, emotional awareness, nervous system regulation and spiritual connection.**

---

*Designed by Georgia and Founder María, this profound healing sequence integrates core activation, Hatha flow, Yin, meditation, Breathwork, Qigong, self‑healing and community integration.*

---

**Unique Combination Allows For**
1. Activation through dynamic movement — Core & Pelvic Floor and Hatha Flow classes  
2. Deep release through stillness and breath — Yin, meditation and Breathwork  
3. Energetic recalibration through meridian focus — yoga, Yin, Qigong, Breathwork  
4. Integration of body‑mind awareness — all classes plus the Sharing Circle  

---

**Profound Benefits**
- Nervous system reset through activation and rest cycles  
- Fluid and endocrine purification via breath, fascia release and lymphatic flow  
- Energetic field purification through Qigong, meditation and Breathwork  
- Embodied integration of emotional and behavioural patterns  

---

*Movement‑based healing in its truest sense: holistic, sacred, communal and transformational.*`}
    />
  );
}
