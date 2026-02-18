import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  "SEO Strategy",
  "Google Ads (PPC)",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Brand Development",
  "Marketing Automation",
  "Market Research",
];

const experience = [
  {
    role: "Senior Marketing Executive",
    company: "Global Tech Solutions",
    period: "2021 - Present",
    description:
      "Led digital strategy for enterprise clients, achieving a 40% increase in lead generation across key accounts.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "Creative Pulse Agency",
    period: "2018 - 2021",
    description:
      "Managed multi-channel campaigns for luxury retail brands, focusing on high-ROI social media advertising.",
  },
  {
    role: "Marketing Coordinator",
    company: "StartUp Hub",
    period: "2016 - 2018",
    description:
      "Developed and executed initial growth strategies for 10+ tech startups in the seed funding stage.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            {/* Decorative background layers */}
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl -rotate-6 transform transition-transform hover:rotate-0 duration-500" />
            <div className="absolute inset-0 bg-primary/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            {/* Actual photo */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative border-2 border-primary/10 shadow-2xl">
              <Image
                src="/prof-anjoo.JPG"
                alt="Anjali - Digital Marketing Specialist"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div>
            <Badge variant="secondary" className="mb-4">
              ABOUT ME
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              I&apos;M ANJALI, A STRATEGIC{" "}
              <span className="text-secondary">MARKETING INNOVATOR</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Download CV</Link>
            </Button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-secondary" /> PROFESSIONAL JOURNEY
          </h2>
          <div className="space-y-8">
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative pl-8 border-l-2 border-secondary/30 pb-8 last:pb-0"
              >
                <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">
                    {item.role}
                  </h3>
                  <span className="text-sm font-semibold bg-muted px-3 py-1 rounded-full text-foreground/60">
                    {item.period}
                  </span>
                </div>
                <p className="text-secondary font-semibold mb-3">
                  {item.company}
                </p>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision/Method Section */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              MY CORE PHILOSOPHY
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-0">
              &quot;Digital marketing isn&apos;t about gaming algorithms;
              it&apos;s about understanding human behavior in digital spaces. I
              build bridges between brand intent and consumer needs, ensuring
              that every click is a step towards a meaningful
              relationship.&quot;
            </p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
