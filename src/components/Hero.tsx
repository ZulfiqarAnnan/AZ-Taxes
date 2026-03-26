import heroBg from "@/assets/hero-bg.jpg";
import annanPhoto from "@/assets/annan-photo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Shield, Users, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 w-full section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="text-gold font-body font-semibold tracking-widest uppercase text-sm mb-4">
              VITA Certified Tax Professional
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gold-light leading-tight mb-6">
              Your Taxes,
              <br />
              <span className="text-gold">Done Right.</span>
            </h1>
            <p className="text-gold-light/80 font-body text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Fast, affordable, and accurate tax preparation by a UVA McIntire graduate with VITA certification and real-world experience.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#booking">
                <Button variant="hero" size="lg" className="text-base">
                  Book an Appointment <ArrowRight className="ml-1" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="heroOutline" size="lg" className="text-base">
                  View Services
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-gold-light/70 text-sm font-body">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gold" />
                <span>Affordable Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                <span>VITA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                <span>50+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-gold" />
                <span>3.9 GPA — UVA McIntire</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl">
              <img
                src={annanPhoto}
                alt="Annan Zulfiqar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
