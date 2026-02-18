import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <Badge variant="secondary" className="mb-4">
              GET IN TOUCH
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              LET&apos;S START A{" "}
              <span className="text-secondary">CONVERSATION</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-12 max-w-lg">
              Whether you have a specific project in mind or just want to
              explore how we can grow your brand together, I&apos;m always open
              to new opportunities and collaborations.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Me</h4>
                  <p className="text-foreground/70">
                    anjalikjayaraj@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Call Me</h4>
                  <p className="text-foreground/70">+91 8113 09 2745</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Location</h4>
                  <p className="text-foreground/70">
                    Dharmasala, Kannur, Kerala (Available Globally)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <Card className="border-none shadow-2xl p-2 md:p-6 bg-card rounded-3xl">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="h-12 border-muted focus-visible:ring-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                      Email Address
                    </label>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      className="h-12 border-muted focus-visible:ring-secondary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                    Subject
                  </label>
                  <Input
                    placeholder="How can I help you?"
                    className="h-12 border-muted focus-visible:ring-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or goals..."
                    className="min-h-[150px] border-muted focus-visible:ring-secondary"
                  />
                </div>
                <Button className="w-full h-14 text-lg rounded-xl flex gap-2">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-center text-xs text-foreground/40 mt-6">
                I typically respond within 24-48 business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
