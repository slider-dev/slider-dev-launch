import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Brain, Gamepad2, Image, Search, Wrench, ArrowRight, Terminal } from "lucide-react";

const categories = [
  {
    name: "Downloader",
    icon: Download,
    apis: [
      { title: "YouTube Downloader", endpoint: "/v1/download/youtube", method: "GET", description: "Download videos & audio from YouTube in multiple formats and qualities." },
      { title: "Instagram Saver", endpoint: "/v1/download/instagram", method: "GET", description: "Save reels, stories, and posts from Instagram profiles." },
      { title: "TikTok Downloader", endpoint: "/v1/download/tiktok", method: "GET", description: "Download TikTok videos without watermark in HD quality." },
    ],
  },
  {
    name: "AI",
    icon: Brain,
    apis: [
      { title: "Text Generation", endpoint: "/v1/ai/generate", method: "POST", description: "Generate human-like text using state-of-the-art language models." },
      { title: "Image Recognition", endpoint: "/v1/ai/vision", method: "POST", description: "Classify and detect objects in images with high accuracy." },
      { title: "Sentiment Analysis", endpoint: "/v1/ai/sentiment", method: "POST", description: "Analyze text sentiment and emotion detection in 50+ languages." },
    ],
  },
  {
    name: "Games",
    icon: Gamepad2,
    apis: [
      { title: "Trivia Questions", endpoint: "/v1/games/trivia", method: "GET", description: "Access thousands of trivia questions across multiple categories." },
      { title: "Random Facts", endpoint: "/v1/games/facts", method: "GET", description: "Get interesting random facts for apps, bots, and games." },
      { title: "Word Games", endpoint: "/v1/games/words", method: "GET", description: "Word scrambles, anagrams, and vocabulary challenge endpoints." },
    ],
  },
  {
    name: "Images",
    icon: Image,
    apis: [
      { title: "Image Resize", endpoint: "/v1/images/resize", method: "POST", description: "Resize, crop, and transform images on the fly via API." },
      { title: "Background Removal", endpoint: "/v1/images/removebg", method: "POST", description: "Remove backgrounds from images with AI-powered precision." },
      { title: "Meme Generator", endpoint: "/v1/images/meme", method: "POST", description: "Generate memes with custom text overlays and templates." },
    ],
  },
  {
    name: "Search",
    icon: Search,
    apis: [
      { title: "Web Search", endpoint: "/v1/search/web", method: "GET", description: "Search the web programmatically and get structured results." },
      { title: "Image Search", endpoint: "/v1/search/images", method: "GET", description: "Find images across the web with filtering and safe-search." },
      { title: "Lyrics Search", endpoint: "/v1/search/lyrics", method: "GET", description: "Search and retrieve song lyrics by title or artist name." },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    apis: [
      { title: "URL Shortener", endpoint: "/v1/tools/shorten", method: "POST", description: "Create short URLs with analytics and custom aliases." },
      { title: "QR Code Generator", endpoint: "/v1/tools/qrcode", method: "GET", description: "Generate QR codes in various formats with custom styling." },
      { title: "JSON Formatter", endpoint: "/v1/tools/json", method: "POST", description: "Validate, format, and minify JSON data via API." },
    ],
  },
];

const methodColor = (method: string) =>
  method === "GET" ? "text-green-400" : "text-yellow-400";

const Apis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden circuit-bg scanlines pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Terminal className="h-3.5 w-3.5" />
            Developer API Hub
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Welcome to <span className="text-primary">Slider's APIs</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Production-ready endpoints organized by category. Copy, paste, and ship.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 circuit-bg">
        <div className="container mx-auto px-6">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-20 last:mb-0">
              {/* Category header */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-2xl font-bold md:text-3xl">{cat.name}</h2>
              </div>

              {/* API cards – terminal style */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.apis.map((api) => (
                  <div
                    key={api.title}
                    className="glass group relative rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(25_95%_53%/0.08)]"
                  >
                    {/* Terminal title bar */}
                    <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                      <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                      <span className="ml-2 font-mono text-xs text-muted-foreground">{api.title.toLowerCase().replace(/\s+/g, "-")}</span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold">{api.title}</h3>

                      {/* Endpoint code block */}
                      <div className="mt-3 rounded-md bg-background/80 border border-border px-3 py-2 font-mono text-xs">
                        <span className={methodColor(api.method)}>{api.method}</span>{" "}
                        <span className="text-muted-foreground">https://api.slider.dev</span>
                        <span className="text-primary">{api.endpoint}</span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {api.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        View docs <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apis;
