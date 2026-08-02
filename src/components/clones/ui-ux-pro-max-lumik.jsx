import React, { useState } from 'react';
import { Search, ChevronDown, BookOpen, Zap, Palette, Type, Grid, Code2, ExternalLink, ChevronRight } from 'lucide-react';

// LUMIK Customization: Kraft #8B7355, Tan #D4A574, Cream #FAF7F2
// Typo: Newsreader (heading) + Courier Prime (body)
export default function UIUXProMax() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { value: '67', label: 'UI Styles' },
    { value: '161', label: 'Color Palettes' },
    { value: '57', label: 'Font Pairings' },
    { value: '16', label: 'Tech Stacks' },
    { value: '25', label: 'Chart Types' },
    { value: '161', label: 'Reasoning Rules' },
  ];

  const features = [
    { title: 'Design Styles', desc: 'Glassmorphism, Neumorphism, Minimalism, Brutalism, Aurora UI, AI-Native UI, and 60+ more styles', icon: '✨' },
    { title: 'Color Palettes', desc: '161 product-specific color systems for SaaS, E-commerce, Healthcare, Fintech, and more', icon: '🎨' },
    { title: 'Typography', desc: '57 font pairings with Google Fonts integration, Tailwind configs, and mood-based recommendations', icon: '📝' },
    { title: 'Chart Types', desc: '25 data visualization recommendations with library suggestions and accessibility notes', icon: '📊' },
    { title: 'Landing Patterns', desc: '34 conversion-optimized page structures with CTA placement strategies', icon: '🎯' },
    { title: 'UX Guidelines', desc: 'Best practices and anti-patterns for animation, accessibility, z-index, and loading states', icon: '✅' },
  ];

  const stacks = [
    'React', 'Next.js', 'Astro', 'Vue', 'Nuxt.js', 'Nuxt UI',
    'Svelte', 'SwiftUI', 'React Native', 'Flutter', 'HTML + Tailwind', 'shadcn/ui',
  ];

  const demos = [
    { id: 1, name: 'SaaS Analytics Dashboard', category: 'SaaS', style: 'Glassmorphism + Flat Design', color: '#8B7355' },
    { id: 2, name: 'Educational Platform', category: 'Education', style: 'Claymorphism + Vibrant', color: '#D4A574' },
    { id: 3, name: 'Pet Grooming & Spa', category: 'Pet Services', style: 'Claymorphism + Block-based', color: '#8B7355' },
    { id: 4, name: 'AI Chatbot Platform', category: 'AI/Chatbot', style: 'AI-Native UI + Minimalism', color: '#D4A574' },
    { id: 5, name: 'Luxury E-commerce', category: 'E-commerce', style: 'Liquid Glass + Glassmorphism', color: '#2C2C2C' },
    { id: 6, name: 'Fintech Crypto Dashboard', category: 'Fintech/Crypto', style: 'Glassmorphism + Dark Mode', color: '#8B7355' },
  ];

  const blogPosts = [
    { title: 'Tokens before components: the only way AI-generated Tailwind stays maintainable', tag: 'design-tokens', date: '2026-06-11' },
    { title: 'Section order is a trust argument: how to sequence a landing page', tag: 'landing-page', date: '2026-06-08' },
    { title: 'Glassmorphism, neumorphism, flat: a decision guide, not a mood board', tag: 'styles', date: '2026-06-04' },
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: "'Courier Prime', monospace" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600;800&family=Courier+Prime:wght@400;700&display=swap');`}</style>

      {/* Header */}
      <header className="border-b border-dashed border-gray-200 sticky top-0 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl" style={{ fontFamily: "'Newsreader', serif" }}>
            <div className="w-8 h-8 bg-gradient-to-br rounded" style={{ backgroundImage: 'linear-gradient(to bottom right, #D4A574, #8B7355)' }}></div>
            UI UX Pro Max
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Docs</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Tutorials</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Examples</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg border border-dashed border-gray-300">
              <Search className="w-4 h-4 text-gray-500" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-32" style={{ fontFamily: "'Courier Prime', monospace" }} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Newsreader', serif" }}>
            UI UX Pro Max Skill <span className="text-gray-500">Design Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Courier Prime', monospace" }}>
            UI UX Pro Max Skill - Agent Skills for Claude Code, Cursor, Windsurf & more AI assistants. Includes 67 UI styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types, and 161 reasoning rules.
          </p>
          <button className="text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90" style={{ backgroundColor: '#8B7355', fontFamily: "'Newsreader', serif" }}>
            Quick Start <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#8B7355', fontFamily: "'Newsreader', serif" }}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-24 border-t border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Newsreader', serif" }}>Everything You Need for Beautiful UI</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">UI UX Pro Max Skill provides comprehensive design intelligence at your fingertips. Search, discover, and implement stunning interfaces with AI-powered recommendations.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-dashed border-gray-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Newsreader', serif" }}>{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-16" style={{ fontFamily: "'Newsreader', serif" }}>How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { num: '1', title: 'Your Prompt', desc: 'Build a landing page for a pet grooming service. Playful and friendly style.' },
            { num: '2', title: 'AI Reasoning', desc: 'Analyzes product type, style preferences, typography, colors, and UX rules.' },
            { num: '3', title: 'Generate Code', desc: 'Produces production-ready HTML, React, or framework-specific components.' },
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-bold mb-4" style={{ color: '#D4A57433', fontFamily: "'Newsreader', serif" }}>{step.num}</div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Newsreader', serif" }}>{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
              {idx < 2 && <div className="absolute -right-4 top-8 text-2xl" style={{ color: '#D4A574' }}>→</div>}
            </div>
          ))}
        </div>

        <div className="p-8 rounded-lg border border-dashed" style={{ backgroundColor: '#FAF7F2', borderColor: '#D4A574' }}>
          <div className="font-mono text-sm text-gray-700 space-y-2" style={{ fontFamily: "'Courier Prime', monospace" }}>
            <div>$ python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --design-system</div>
            <div className="text-gray-500">→ Searching: product, style, typography, color, landing, ux domains...</div>
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="bg-gray-50 py-24 border-t border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Newsreader', serif" }}>Supports 16 Tech Stacks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {stacks.map((stack, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-dashed border-gray-200 text-center transition-colors cursor-pointer">
                <div className="font-medium text-gray-900">{stack}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Newsreader', serif" }}>Latest from the blog</h2>
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="border-l-4 pl-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer" style={{ borderColor: '#8B7355' }}>
              <div className="text-sm font-medium mb-2" style={{ color: '#8B7355' }}>{post.tag}</div>
              <h3 className="font-bold text-lg mb-2 hover:transition-colors" style={{ fontFamily: "'Newsreader', serif" }}>{post.title}</h3>
              <div className="text-sm text-gray-500">{post.date} • 3 min read</div>
            </div>
          ))}
        </div>
        <button className="mt-8 font-medium flex items-center gap-2 hover:gap-3 transition-all" style={{ color: '#8B7355', fontFamily: "'Newsreader', serif" }}>
          See all posts <ChevronRight className="w-4 h-4" />
        </button>
      </section>

      {/* Demos Gallery */}
      <section className="bg-gray-50 py-24 border-t border-dashed border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Newsreader', serif" }}>39 Website Demos Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <div key={demo.id} className="bg-white rounded-lg border border-dashed border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-40 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${demo.color}20, ${demo.color}40)` }}>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700 mb-2">📱</div>
                      <div className="text-sm font-medium text-gray-600">{demo.category}</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Newsreader', serif" }}>{demo.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{demo.style}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono text-gray-500" style={{ fontFamily: "'Courier Prime', monospace" }}>Primary: {demo.color}</div>
                    <button className="text-sm font-medium flex items-center gap-1 hover:opacity-80" style={{ color: '#8B7355' }}>
                      View <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 mx-auto block font-medium flex items-center gap-2 hover:gap-3 transition-all" style={{ color: '#8B7355', fontFamily: "'Newsreader', serif" }}>
            Browse all examples <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-300 py-16 border-t border-dashed border-gray-800" style={{ backgroundColor: '#2C2C2C' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 font-bold text-white mb-4" style={{ fontFamily: "'Newsreader', serif" }}>
                <div className="w-6 h-6 bg-gradient-to-br rounded" style={{ backgroundImage: 'linear-gradient(to bottom right, #D4A574, #8B7355)' }}></div>
                UI UX Pro Max
              </div>
              <p className="text-sm text-gray-400">Design intelligence for AI coding assistants</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: "'Newsreader', serif" }}>Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Docs</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: "'Newsreader', serif" }}>Database</h3>
              <ul className="space-y-2 text-sm">
                <li>67 UI Styles</li>
                <li>161 Color Palettes</li>
                <li>57 Font Pairings</li>
                <li>25 Chart Types</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: "'Newsreader', serif" }}>Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dashed border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>Built with React + Tailwind CSS by UI UX Pro Max</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
