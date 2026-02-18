import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Share2,
  BarChart,
  Target,
  Mail,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const allServices = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    description:
      "Boost your organic visibility and drive high-quality traffic with technical SEO, on-page optimization, and strategic authority building.",
    features: [
      "Keyword Strategy",
      "Technical Site Audits",
      "Content Optimization",
      "Link Building",
    ],
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    icon: Target,
    description:
      "Results-driven paid search and display campaigns designed to maximize ROI and convert intent into action.",
    features: [
      "Google Ads Management",
      "Search & Display Content",
      "Remarketing Campaigns",
      "Conversion Optimization",
    ],
  },
  {
    title: "Social Media Strategy",
    icon: Share2,
    description:
      "Engage your audience where they live. We build community and brand affinity through strategic social presence.",
    features: [
      "Platform Management",
      "Content Creation",
      "Influencer Partnerships",
      "Community Engagement",
    ],
  },
  {
    title: "Content Marketing",
    icon: Sparkles,
    description:
      "High-impact storytelling that positions your brand as a leader. We create content that educates, inspires, and converts.",
    features: [
      "Blog Strategy",
      "Whitepapers & Ebooks",
      "Video Scripting",
      "Case Study Production",
    ],
  },
  {
    title: "Email Marketing Automation",
    icon: Mail,
    description:
      "Nurture leads and retain customers with personalized, automated email journeys that deliver the right message at the right time.",
    features: [
      "Drip Campaigns",
      "List Segmentation",
      "Newsletter Design",
      "A/B Performance Testing",
    ],
  },
  {
    title: "Data & Performance Analytics",
    icon: BarChart,
    description:
      "Insights over noise. We provide comprehensive reporting and data analysis to continuously refine your marketing engine.",
    features: [
      "Custom Dashboard Design",
      "KPI Tracking",
      "Customer Journey Mapping",
      "Attribution Modeling",
    ],
  },
];

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "Typically, SEO is a long-term strategy. While some improvements can be seen within 2-3 months, significant organic growth usually takes 6-12 months of consistent optimization.",
  },
  {
    question: "Do you work with small businesses or enterprises?",
    answer:
      "I work with both. My strategies are scalable, focusing on the specific growth levers that match the business size and market maturity.",
  },
  {
    question: "What is your primary focus for social media?",
    answer:
      "My focus is on engagement and conversion rather than just follower counts. I believe in building a loyal community that translates into brand advocacy.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            OUR EXPERTISE
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            SERVICES TAILORED FOR <span className="text-secondary">GROWTH</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Comprehensive digital marketing solutions designed to solve complex
            business challenges and deliver measurable bottom-line impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allServices.map((service, i) => (
            <Card
              key={i}
              className="border border-border/50 hover:border-secondary transition-colors group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="text-xs font-semibold flex items-center gap-2"
                    >
                      <TrendingUp className="w-3 h-3 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            COMMON QUESTIONS
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
