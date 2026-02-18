import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, BarChart4 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "EcoSpark Growth Strategy",
    category: "Full-Funnel Marketing",
    image: "ECO",
    results: "+145% Revenue in 6 Months",
    description:
      "A comprehensive digital transformation for a sustainable consumer brand, combining SEO, Content, and Paid Social.",
    tags: ["SEO", "Paid Social", "Brand Refresh"],
  },
  {
    title: "TechFlow SaaS Launch",
    category: "Performance Marketing",
    image: "SAAS",
    results: "3.2x Return on Ad Spend",
    description:
      "Executing the global go-to-market strategy for a fintech startup, focusing on user acquisition and retention.",
    tags: ["Google Ads", "LinkedIn Ads", "CRO"],
  },
  {
    title: "UrbanEdge Brand Authority",
    category: "Organic Search",
    image: "BRAND",
    results: "Top 3 Ranking for 50+ Keywords",
    description:
      "Technical SEO overhaul and content pillar strategy that established UrbanEdge as a market authority.",
    tags: ["Technical SEO", "Content Pillars", "Analytics"],
  },
  {
    title: "HealthPulse Lead Gen",
    category: "Conversion Excellence",
    image: "HEALTH",
    results: "42% Decrease in Cost-per-Lead",
    description:
      "Streamlining the lead generation funnel for a healthcare provider through A/B testing and automation.",
    tags: ["Automation", "LPO", "Email"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              CASE STUDIES
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              SELECTED <span className="text-secondary">WORKS</span>
            </h1>
            <p className="text-lg text-foreground/70">
              A collection of marketing triumphs where data met creativity.
              These projects reflect my commitment to delivering tangible
              business value.
            </p>
          </div>
          <div className="flex gap-4 mb-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              SEO
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              PPC
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Brand
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] bg-muted rounded-3xl mb-6 overflow-hidden flex items-center justify-center border-2 border-primary/5">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                <span className="text-primary/10 font-black text-6xl tracking-tighter opacity-50">
                  {project.image}
                </span>

                <div className="absolute bottom-6 left-6 right-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-card/80 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center shadow-xl">
                    <span className="font-bold text-primary flex items-center gap-2">
                      <BarChart4 className="w-4 h-4 text-secondary" />{" "}
                      {project.results}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  {project.category}
                </span>
                <div className="h-[1px] w-8 bg-border" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground/70 mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-bold tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-8">
            Have a similar project in mind?
          </p>
          <Button size="lg" className="rounded-full px-12 h-14" asChild>
            <Link href="/contact">
              Work with me <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
