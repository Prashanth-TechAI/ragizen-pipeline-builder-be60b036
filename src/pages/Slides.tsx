
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { MoveLeft, MoveRight, Sun, Moon, LogOut } from "lucide-react";

// Slide content from the user's message
const slides = [
  {
    title: "RAGiZEN Front-end Overview",
    subtitle: "Design. Build. Chat.",
    content: "RAGiZEN.ai visual pipeline builder for AI agents"
  },
  {
    title: "Project Vision & Goals",
    content: [
      "Mission: Empower non-technical users to build RAG & analytical chatbots in minutes.",
      "Front-end Role: Intuitive drag-and-drop pipeline builder + embedded live preview.",
      "Success Metrics: Time-to-first-build < 5 min; user satisfaction NPS > 40."
    ]
  },
  {
    title: "Technical Architecture",
    content: [
      "Framework: Next.js (React)",
      "Canvas: React Flow for node-based pipeline design",
      "Styling: Tailwind CSS + shadcn/ui components",
      "State Management: React Query for data fetching; Context for global state",
      "Build & Preview: iframe embedding via Nginx reverse proxy"
    ]
  },
  {
    title: "UX & Design Principles",
    content: [
      "Simplicity: One-page wizard with clear step indicators",
      "Consistency: Shared component library (buttons, inputs, modals)",
      "Feedback: Real-time validation, toasts for errors/success",
      "Onboarding: Contextual tooltips and \"?\" help icons"
    ]
  },
  {
    title: "Page 1 – Landing & Auth",
    content: [
      "Features:",
      "- Marketing highlights",
      "- Sign Up / Login forms (OAuth + email)",
      "Design Notes:",
      "- Full-screen hero with \"Get Started\" CTA",
      "- Lightweight animated background"
    ]
  },
  {
    title: "Page 2 – Project Type Selection",
    content: [
      "UI: Two large cards:",
      "- \"Semantic RAG Chatbot\"",
      "- \"Analytical SQL Agent\"",
      "Interaction: Hover animations, clear \"Start\" buttons"
    ]
  },
  {
    title: "Page 3 – Pipeline Canvas",
    content: [
      "Canvas Layout:",
      "- Sidebar with node palette (Source, Chunk, Embed, Index, LLM, UI)",
      "- Main canvas area: drag-drop nodes and draw edges",
      "Features:",
      "- Zoom/pan, multi-select, undo/redo",
      "- Node config panel slides in on select"
    ]
  },
  {
    title: "Page 4 – Node Configuration Panels",
    content: [
      "Source Node: Upload or connection string + \"Test Connection\" button",
      "Chunk Node: Chunk size & overlap sliders + preview pane",
      "Embed Node: Dropdown of embedding models + batch size input",
      "Index Node: Vector store selector + creds inputs",
      "LLM Node: Provider dropdown + API key vault integration",
      "UI Node: Gradio vs. Streamlit toggle"
    ]
  },
  {
    title: "Page 5 – Build & Preview",
    content: [
      "Build Button: Disabled until all nodes valid",
      "Progress Modal:",
      "- Live logs stream from /builds/{id}/logs",
      "- \"Cancel Build\" control",
      "Preview Panel:",
      "- Embedded <iframe src=\"/preview/{id}\" />",
      "- \"Stop Preview\" & \"Download Project\" buttons"
    ]
  },
  {
    title: "Component Library",
    content: [
      "Atoms: Buttons, Inputs, Selects, Modals",
      "Molecules: NodeCard, Sidebar, Toast",
      "Organisms: Navbar, CanvasLayout, PreviewFrame",
      "Theming: Light/dark mode support"
    ]
  },
  {
    title: "Data & API Integration",
    content: [
      "React Query Hooks:",
      "- useMeta(), usePipelines(), useBuildStatus()",
      "Error Handling:",
      "- Global error boundary + retry policies",
      "Security:",
      "- Auth headers via JWT stored in httpOnly cookie"
    ]
  },
  {
    title: "Preview Embedding Strategy",
    content: [
      "Reverse Proxy: Nginx routes /preview/* → preview container",
      "Iframe Wrapper: React component handles sizing, reloads",
      "Auth Sync: Same-site cookies passed to embedded app"
    ]
  },
  {
    title: "Responsiveness & Accessibility",
    content: [
      "Mobile & Tablet:",
      "- Collapsible sidebar; touch-friendly node dragging",
      "WCAG 2.1 Compliance:",
      "- Keyboard navigation, ARIA labels, color-contrast checks"
    ]
  },
  {
    title: "Development Roadmap",
    content: [
      "Sprint 1 (Weeks 1–2):",
      "- Auth, metadata & pipeline CRUD UI, connector tests",
      "Sprint 2 (Weeks 3–4):",
      "- Canvas & node config, build orchestration UI, preview embed",
      "Buffer & QA (Week 5):",
      "- E2E tests, performance tuning, accessibility audit"
    ]
  },
  {
    title: "Next Steps & Q&A",
    content: [
      "Next Steps: UI mockup reviews, API contract sign-off, kickoff sprint 1",
      "Questions: Open floor for client feedback."
    ]
  }
];

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const renderContent = (content: string | string[]) => {
    if (typeof content === "string") {
      return <p className="text-lg">{content}</p>;
    }

    return (
      <ul className="list-disc pl-6 space-y-2">
        {content.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            RagiZen.ai
          </h1>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4 flex flex-col">
        <div className="text-sm mb-4 text-muted-foreground">
          Slide {currentSlide + 1} of {slides.length}
        </div>

        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col bg-card border border-border rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
          {slides[currentSlide].subtitle && (
            <h3 className="text-xl text-muted-foreground mb-6">{slides[currentSlide].subtitle}</h3>
          )}
          <div className="mt-8">
            {renderContent(slides[currentSlide].content)}
          </div>
        </motion.div>

        <div className="mt-8 flex justify-between">
          <Button 
            onClick={handlePrev} 
            disabled={currentSlide === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <MoveLeft className="w-4 h-4" /> Previous
          </Button>
          
          <Button 
            onClick={handleNext} 
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Next <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
