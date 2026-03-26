import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays, Mail, Phone } from "lucide-react";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const isPastDate = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
          Book Now
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          Schedule Your Appointment
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mb-14 leading-relaxed">
          Pick a date and time that works for you. I'll get back to you within 24 hours to confirm.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="w-6 h-6 text-accent" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Select a Date
              </h3>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => isPastDate(d) || isWeekend(d)}
              className={cn("p-3 pointer-events-auto mx-auto")}
            />

            {date && (
              <div className="mt-8">
                <h4 className="font-body font-semibold text-foreground mb-4">
                  Available times for {format(date, "MMMM d, yyyy")}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-2 px-3 rounded-lg border text-sm font-body font-medium transition-all",
                        selectedTime === time
                          ? "gold-gradient text-secondary-foreground border-transparent"
                          : "border-border text-foreground hover:border-accent"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {date && selectedTime && (
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="font-body text-foreground font-medium mb-3">
                  📅 {format(date, "EEEE, MMMM d, yyyy")} at {selectedTime}
                </p>
                <a
                  href={`mailto:annanzulfiqar@gmail.com?subject=Tax Appointment Request&body=Hi Annan,%0D%0A%0D%0AI'd like to book a tax preparation appointment on ${format(date, "MMMM d, yyyy")} at ${selectedTime}.%0D%0A%0D%0AThank you!`}
                >
                  <Button variant="hero" size="lg" className="w-full">
                    Confirm & Send Request
                  </Button>
                </a>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Get in Touch Directly
              </h3>
              <div className="space-y-5">
                <a href="mailto:annanzulfiqar@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Email</p>
                    <p className="text-foreground font-body font-medium group-hover:text-accent transition-colors">
                      annanzulfiqar@gmail.com
                    </p>
                  </div>
                </a>
                <a href="tel:7034381204" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Phone</p>
                    <p className="text-foreground font-body font-medium group-hover:text-accent transition-colors">
                      (703) 438-1204
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/annan-zulfiqar-a1934b229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">LinkedIn</p>
                    <p className="text-foreground font-body font-medium group-hover:text-accent transition-colors">
                      Connect with me
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                What to Bring
              </h3>
              <ul className="space-y-2 text-muted-foreground font-body text-sm">
                <li>• W-2s from all employers</li>
                <li>• 1099 forms (freelance, interest, etc.)</li>
                <li>• Social Security number</li>
                <li>• Previous year's tax return</li>
                <li>• Receipts for deductions</li>
                <li>• Bank account info for direct deposit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
