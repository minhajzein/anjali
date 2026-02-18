import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowUpRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const posts = [
  {
    title: "The Shift to Privacy-First Marketing in 2026",
    excerpt:
      "How brands can thrive in a world without third-party cookies by focusing on first-party data strategies.",
    date: "Feb 12, 2026",
    category: "Insights",
    readTime: "6 min read",
    author: "Anjali",
  },
  {
    title: "5 SEO Myths That Are Dragging Your Organic Traffic Down",
    excerpt:
      "Let's debunk the most common misconceptions about keyword density, backlinks, and meta tags.",
    date: "Jan 28, 2026",
    category: "SEO",
    readTime: "8 min read",
    author: "Anjali",
  },
  {
    title: "Mastering TikTok for B2B: Is It Actually Possible?",
    excerpt:
      "Exploring the unexpected success of professional services brands on the world's fastest-growing platform.",
    date: "Jan 15, 2026",
    category: "Social Media",
    readTime: "5 min read",
    author: "Anjali",
  },
  {
    title: "Why Retention is the New Acquisition",
    excerpt:
      "Shifting focus from top-of-funnel noise to bottom-of-funnel relationship building for sustainable growth.",
    date: "Dec 10, 2025",
    category: "Strategy",
    readTime: "10 min read",
    author: "Anjali",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="max-w-xl">
            <Badge variant="secondary" className="mb-4">
              MARKETING INSIGHTS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
              THE <span className="text-secondary">DIALOGUE</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Sharing my perspective on the evolving digital landscape, data
              trends, and marketing strategies that work.
            </p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10 rounded-full w-full md:w-80"
            />
          </div>
        </div>

        {/* Featured Post Area */}
        <div className="mb-16">
          <Card className="border-none bg-muted/40 overflow-hidden relative group cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto bg-primary/5 flex items-center justify-center border-r">
                <span className="text-secondary/20 font-black text-8xl">
                  LATEST
                </span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary" className="rounded-full">
                    FEATURED
                  </Badge>
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    Feb 18, 2026
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors leading-tight underline decoration-secondary/30 decoration-4 underline-offset-8">
                  The Future of Predictive Analytics in Consumer Behavior
                </h2>
                <p className="text-lg text-foreground/70 mb-8 max-w-lg">
                  How AI-driven forecasting is changing the way we plan
                  marketing budgets and audience segmentations.
                </p>
                <div className="flex items-center gap-6 text-sm text-foreground/60 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" /> Anjali
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 12 min read
                  </span>
                </div>
                <Button size="lg" className="w-fit rounded-full px-8">
                  Read Article <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card
              key={i}
              className="flex flex-col h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-4">
                  <Badge
                    variant="outline"
                    className="text-[10px] font-bold tracking-widest uppercase"
                  >
                    {post.category}
                  </Badge>
                  <span className="text-[10px] uppercase font-bold text-foreground/40">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/50">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </div>
                <span className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ MORE <ArrowUpRight className="w-3 h-3" />
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-secondary/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">STAY IN THE LOOP</h2>
          <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
            Get monthly digital marketing insights, strategies, and case studies
            delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="rounded-full bg-muted h-12"
            />
            <Button className="rounded-full px-8 h-12">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
