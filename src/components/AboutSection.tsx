import { motion } from "framer-motion";
import { Award, Users, Clock, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "متدرب" },
  { icon: Clock, value: "+8", label: "سنوات خبرة" },
  { icon: Award, value: "+15", label: "شهادة معتمدة" },
  { icon: Target, value: "95%", label: "نسبة نجاح" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
              عني
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              مش بس تمرين،
              <br />
              <span className="text-gradient-fire">أسلوب حياة</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              أنا مدرب لياقة بدنية معتمد، شغفي هو مساعدة الناس تحقق أهدافها الرياضية. بصمم برامج تدريبية شخصية بناءً على مستواك وأهدافك.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              سواء هدفك تخسيس، بناء عضلات، أو تحسين لياقتك العامة — أنا هنا أساعدك في كل خطوة.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
