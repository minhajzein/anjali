import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Zap,
  Quote,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Driving organic growth through strategic keyword research and technical optimization.",
    icon: Globe,
    badge: "Most Popular",
  },
  {
    title: "Performance Marketing",
    description:
      "Maximizing ROI with data-driven paid campaigns across Google, Meta, and LinkedIn.",
    icon: BarChart3,
    badge: "Performance Matters",
  },
  {
    title: "Content Strategy",
    description:
      "Building brand authority with compelling narratives that convert audiences.",
    icon: Zap,
    badge: "Content is King",
  },
];

const testimonials = [
  {
    quote:
      "Anjali's strategic approach to our SEO completely transformed our business. We saw a 200% increase in organic leads within 6 months.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    company: "GreenTech Solutions",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "Exceptional insight into consumer behavior. The performance campaigns she led were the most profitable in our company history.",
    author: "Michael Ross",
    role: "CEO",
    company: "UrbanEdge Retail",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "A rare talent who understands both the data and the creative side of marketing. Her brand development work exceeded all expectations.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Lumina Wellness",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
  },
];

const latestPosts = [
  {
    title: "The Shift to Privacy-First Marketing in 2026",
    excerpt:
      "How brands can thrive in a world without third-party cookies by focusing on first-party data strategies.",
    date: "Feb 12, 2026",
    category: "Insights",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
  },
  {
    title: "5 SEO Myths That Are Dragging Your Organic Traffic Down",
    excerpt:
      "Let's debunk the most common misconceptions about keyword density, backlinks, and meta tags.",
    date: "Jan 28, 2026",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=450&fit=crop",
  },
  {
    title: "Mastering Performance Marketing on a Budget",
    excerpt:
      "Strategic ways to scale your paid media without breaking the bank in highly competitive markets.",
    date: "Jan 15, 2026",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                STRATEGIC SOLUTIONS FOR{" "}
                <span className="text-secondary">DIGITAL GROWTH</span>
              </h2>
              <p className="text-lg text-foreground/70">
                I help brands navigate the complex digital landscape with a
                focus on sustainable growth and measurable impact.
              </p>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/services">
                All Services{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
            {services.map((service, i) => (
              <Card
                key={i}
                className="min-w-[85vw] md:min-w-0 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card group overflow-hidden snap-center"
              >
                <CardContent className="p-8">
                  <div className="mb-6 p-3 rounded-2xl bg-secondary/10 w-fit group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="mb-4">
                      {service.badge}
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>
                </CardContent>
                <div className="h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-secondary mb-2">20+</div>
            <div className="text-sm uppercase tracking-widest opacity-70 font-semibold">
              Brands Managed
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm uppercase tracking-widest opacity-70 font-semibold">
              Avg. ROI Increase
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-secondary mb-2">1M+</div>
            <div className="text-sm uppercase tracking-widest opacity-70 font-semibold">
              Ad Spend Optimized
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-secondary mb-2">4yr</div>
            <div className="text-sm uppercase tracking-widest opacity-70 font-semibold">
              Expertise
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              CLIENT SUCCESS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              HEAR FROM MY <span className="text-secondary">PARTNERS</span>
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="min-w-[85vw] md:min-w-0 bg-card border-none p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 snap-center"
              >
                <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-secondary/10 group-hover:text-secondary/20 transition-colors" />
                <CardContent className="p-0 relative z-10 h-full flex flex-col justify-between">
                  <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-secondary/30 flex-shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base md:text-lg">
                        {t.author}
                      </h4>
                      <p className="text-foreground/50 text-xs md:text-sm">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                THE DIALOGUE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                LATEST <span className="text-secondary">INSIGHTS</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Exploring the frontiers of digital marketing and sharing what
                works in the real world.
              </p>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/blog">
                Read All Articles{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
            {latestPosts.map((post, i) => (
              <Card
                key={i}
                className="min-w-[85vw] md:min-w-0 bg-card border-border/10 hover:border-secondary transition-all duration-300 group overflow-hidden snap-center"
              >
                {/* Blog Cover Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-bold"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-xs text-foreground/40 font-semibold mb-4">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-8 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="text-sm font-bold text-secondary flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    READ ARTICLE <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter">
            READY TO SCALE YOUR{" "}
            <span className="text-secondary">DIGITAL PRESENCE?</span>
          </h2>
          <Button size="lg" className="rounded-full px-12 h-14 text-lg" asChild>
            <Link href="/contact">Let&apos;s Talk Strategy</Link>
          </Button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full -z-10" />
      </section>
    </>
  );
}
