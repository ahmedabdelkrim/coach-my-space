import { motion } from "framer-motion";
import { Dumbbell, Salad, UserCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "تدريب شخصي",
    description: "برنامج تدريبي مصمم خصيصاً ليك مع متابعة يومية وتعديل مستمر حسب تطورك.",
  },
  {
    icon: Salad,
    title: "خطة تغذية",
    description: "نظام غذائي متكامل يناسب أهدافك سواء تخسيس أو تضخيم مع وصفات سهلة.",
  },
  {
    icon: UserCheck,
    title: "تدريب أونلاين",
    description: "تدريب عن بُعد مع فيديوهات شرح ومتابعة أسبوعية لضمان التقدم.",
  },
  {
    icon: BarChart3,
    title: "تقييم ومتابعة",
    description: "تقييم شامل لمستوى لياقتك مع تقارير دورية وتعديل الخطة حسب النتائج.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
            الخدمات
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            البرامج <span className="text-gradient-fire">التدريبية</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-fire"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
