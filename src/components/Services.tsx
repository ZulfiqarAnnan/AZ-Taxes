import { FileText, Calculator, TrendingUp, CheckCircle } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Individual Tax Returns",
    price: "From $75",
    features: [
      "Federal & State filing",
      "W-2, 1099, and freelance income",
      "Standard & itemized deductions",
      "E-file with direct deposit",
    ],
  },
  {
    icon: Calculator,
    title: "Student Tax Returns",
    price: "From $50",
    features: [
      "Education credits (1098-T)",
      "Scholarship & grant income",
      "Part-time & gig income",
      "Quick turnaround",
    ],
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    price: "Free Consultation",
    features: [
      "Year-round tax strategy",
      "Deduction optimization",
      "Estimated tax guidance",
      "Financial planning tips",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding navy-gradient">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-body font-semibold tracking-widest uppercase text-sm mb-3">
          Services
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-light mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gold-light/70 font-body text-lg max-w-2xl mb-14 leading-relaxed">
          No hidden fees. No surprises. Just quality tax preparation at prices that won't break the bank.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl p-8 transition-all duration-300 ${
                service.featured
                  ? "bg-gold/10 border-2 border-gold shadow-xl scale-105"
                  : "bg-navy-light/50 border border-gold/20 hover:border-gold/40"
              }`}
            >
              <service.icon className="w-10 h-10 text-gold mb-5" />
              <h3 className="font-display text-2xl font-semibold text-gold-light mb-2">
                {service.title}
              </h3>
              <p className="text-gold font-display text-3xl font-bold mb-6">
                {service.price}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gold-light/80 font-body">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
