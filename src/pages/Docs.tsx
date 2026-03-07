import { useState } from "react";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Terminal, Menu, X } from "lucide-react";

const sidebarSections = [
  {
    title: "Getting Started",
    items: ["Introduction", "Authentication", "Quick Start"],
  },
  {
    title: "API Reference",
    items: ["Downloader", "AI", "Games", "Images", "Search", "Tools"],
  },
  {
    title: "Guides",
    items: ["Rate Limits", "Error Handling", "Webhooks", "SDKs"],
  },
];

const docsContent: Record<string, { title: string; body: string; code?: string }> = {
  Introduction: {
    title: "Introduction",
    body: "Welcome to the Slider API documentation. Our APIs are designed for developers who need fast, reliable, and well-documented endpoints. Every API follows RESTful conventions and returns JSON responses.",
    code: `// Base URL\nconst BASE_URL = "https://api.slider.dev/v1";\n\n// Example request\nconst res = await fetch(\`\${BASE_URL}/ai/generate\`, {\n  method: "POST",\n  headers: {\n    "Authorization": "Bearer YOUR_API_KEY",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({ prompt: "Hello world" })\n});`,
  },
  Authentication: {
    title: "Authentication",
    body: "All API requests require a valid API key passed via the Authorization header. You can generate keys from your dashboard. Keys are scoped to your plan's rate limits.",
    code: `// Include in every request\nfetch(url, {\n  headers: {\n    "Authorization": "Bearer sk_live_..."\n  }\n});`,
  },
  "Quick Start": {
    title: "Quick Start",
    body: "Get up and running in under 2 minutes. Install our SDK or make direct HTTP requests to any endpoint. All responses use standard HTTP status codes.",
    code: `npm install @slider/sdk\n\nimport Slider from "@slider/sdk";\nconst client = new Slider("YOUR_API_KEY");\n\nconst result = await client.ai.generate({\n  prompt: "Explain quantum computing"\n});`,
  },
  "Rate Limits": {
    title: "Rate Limits",
    body: "Rate limits depend on your plan tier. Free plans allow 1,000 requests/month. Pro plans allow 100,000 requests/month. Enterprise plans have custom limits. Rate limit headers are included in every response.",
    code: `// Response headers\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 847\nX-RateLimit-Reset: 1672531200`,
  },
};

const Docs = () => {
  const [activeItem, setActiveItem] = useState("Introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const content = docsContent[activeItem] || docsContent["Introduction"];

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-visible circuit-bg scanlines pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] -z-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-3.5 w-3.5" />
            Documentation
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-primary">Slider</span> Docs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Everything you need to integrate and ship with Slider APIs.
          </p>
        </div>
      </section>

      {/* Docs layout */}
      <section className="relative circuit-bg min-h-[60vh] overflow-visible">
        <div className="pointer-events-none absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-[120px] -z-10" />
        <div className="pointer-events-none absolute bottom-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[110px] -z-10" />

        <div className="container relative z-10 mx-auto px-6 py-12">
          <div className="flex gap-8">
            {/* Mobile sidebar toggle (FAB) */}
            <button
              className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg glow-accent md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle docs menu"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Mobile overlay */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Sidebar */}
            <aside
              className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-border bg-background/95 backdrop-blur-xl p-6 pt-24 transition-transform duration-300 md:static md:translate-x-0 md:w-56 md:shrink-0 md:border-0 md:bg-transparent md:p-0 md:pt-0 md:backdrop-blur-none ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Mobile header inside drawer */}
              <div className="mb-6 flex items-center justify-between md:hidden">
                <span className="font-display text-sm font-bold text-primary">Navigation</span>
                <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-6">
                {sidebarSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setActiveItem(item);
                              setSidebarOpen(false);
                            }}
                            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                              activeItem === item
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                          >
                            <ChevronRight className={`h-3 w-3 transition-transform ${activeItem === item ? "rotate-90 text-primary" : ""}`} />
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <main className="min-w-0 flex-1">
              <div className="glass rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">docs/{content.title.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold md:text-3xl">{content.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{content.body}</p>

                  {content.code && (
                    <div className="mt-6 rounded-md border border-border bg-background/80 p-4 overflow-x-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal className="h-3.5 w-3.5 text-primary" />
                        <span className="font-mono text-xs text-muted-foreground">example</span>
                      </div>
                      <pre className="font-mono text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                        <code>{content.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Docs;
