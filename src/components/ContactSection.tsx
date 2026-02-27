import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "اتصل بيا",
    value: "01xxxxxxxxx",
    href: "tel:+201xxxxxxxxx",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "ابعت رسالة",
    href: "https://wa.me/201xxxxxxxxx",
  },
  {
    icon: Instagram,
    label: "انستجرام",
    value: "@your_handle",
    href: "https://instagram.com/your_handle",
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "القاهرة، مصر",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
            تواصل معايا
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            جاهز <span className="text-gradient-fire">تبدأ؟</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            تواصل معايا دلوقتي واحجز أول جلسة تقييم مجانية
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-fire group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <method.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{method.label}</p>
                <p className="text-lg font-bold text-foreground">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/201xxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-fire text-primary-foreground font-bold text-xl px-12 py-5 rounded-xl shadow-fire animate-pulse-glow hover:scale-105 transition-transform duration-300"
          >
            احجز جلستك المجانية الآن 🔥
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
