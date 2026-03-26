import { GraduationCap, Award, Users, Briefcase } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "UVA McIntire",
    description: "B.S. in Commerce (Management & IT) with a Minor in Computer Science from the University of Virginia's McIntire School of Commerce. GPA: 3.9/4.0",
  },
  {
    icon: Award,
    title: "Echols Scholar",
    description: "Recognized as a top 5% incoming student at UVA — awarded the Echols Scholar distinction and consistently on the Dean's List.",
  },
  {
    icon: Users,
    title: "VITA Certified",
    description: "Volunteer Income Tax Assistance (VITA) certified through CASH (Creating Assets, Savings & Hope). Prepared taxes for 50+ low- and moderate-income community members.",
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "Strategy & M&A Analyst at Flagship Advisory Partners, former Management Consultant at Curtis & Co, with deep financial modeling and data analysis expertise.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
          About Me
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          Annan Zulfiqar
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mb-14 leading-relaxed">
          I combine a rigorous finance education with hands-on tax preparation experience to deliver accurate, affordable, and fast tax services for individuals and families.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
            >
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-5">
                <cred.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {cred.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
