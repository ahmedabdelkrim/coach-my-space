import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Transformation {
  name: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
}

const transformations: Transformation[] = [
  {
    name: "أحمد",
    duration: "3 شهور",
    beforeImg: "/placeholder.svg",
    afterImg: "/placeholder.svg",
  },
  {
    name: "محمد",
    duration: "6 شهور",
    beforeImg: "/placeholder.svg",
    afterImg: "/placeholder.svg",
  },
  {
    name: "كريم",
    duration: "4 شهور",
    beforeImg: "/placeholder.svg",
    afterImg: "/placeholder.svg",
  },
];

const BeforeAfterSlider = ({ beforeImg, afterImg }: { beforeImg: string; afterImg: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // RTL: flip the direction
    const x = rect.right - clientX;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] rounded-xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => handleMove(e.clientX)}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After image (full) */}
      <img
        src={afterImg}
        alt="بعد"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt="قبل"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
        style={{ right: `${sliderPos}%`, transform: "translateX(50%)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-fire">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary-foreground">
            <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-20">
        قبل
      </span>
      <span className="absolute top-3 left-3 bg-foreground/90 text-background text-xs font-bold px-3 py-1 rounded-full z-20">
        بعد
      </span>
    </div>
  );
};

const TransformationsSection = () => {
  return (
    <section id="transformations" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
            نتائج حقيقية
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            تحولات <span className="text-gradient-fire">المتدربين</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            شوف الفرق اللي عملناه مع متدربينا — نتائج حقيقية بمجهود حقيقي
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:border-primary/30 transition-colors duration-300"
            >
              <BeforeAfterSlider beforeImg={t.beforeImg} afterImg={t.afterImg} />
              <div className="p-5 text-center">
                <p className="text-foreground font-bold text-lg">{t.name}</p>
                <p className="text-primary text-sm font-semibold">{t.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
