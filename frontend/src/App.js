import { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Droplets, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  CheckCircle, 
  Star,
  Shield,
  Award,
  ThumbsUp,
  Zap,
  Droplet,
  Flame,
  PipetteIcon,
  AlertTriangle,
  Bath,
  Home,
  ArrowRight,
  Send,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Toaster, toast } from 'sonner';

// Logo Component
const Logo = () => (
  <div className="flex items-center gap-2" data-testid="logo">
    <div className="relative w-10 h-10 bg-[#0A2540] flex items-center justify-center">
      <Droplets className="w-5 h-5 text-[#2EC4B6] absolute" style={{ top: '6px', left: '10px' }} />
      <Wrench className="w-4 h-4 text-white absolute" style={{ bottom: '6px', right: '8px' }} />
    </div>
    <div>
      <span className="font-bold text-xl text-[#0A2540]" style={{ fontFamily: 'Clash Display, sans-serif' }}>FlowFix</span>
      <span className="text-sm text-[#475569] block -mt-1">Plumbing</span>
    </div>
  </div>
);

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`header-sticky ${isScrolled ? 'scrolled' : ''}`} data-testid="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-[#475569] hover:text-[#0A2540] font-medium transition-colors"
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+3225551234" className="flex items-center gap-2 text-[#0A2540] font-semibold" data-testid="header-phone">
                <Phone className="w-5 h-5 text-[#2EC4B6]" />
                +32 2 555 1234
              </a>
              <a 
                href="#contact" 
                className="btn-primary"
                data-testid="header-cta"
              >
                Get Free Estimate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
              data-testid="mobile-menu-btn"
            >
              <Menu className="w-6 h-6 text-[#0A2540]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} data-testid="mobile-menu">
        <button 
          className="absolute top-6 right-6 p-2 text-white"
          onClick={() => setMobileMenuOpen(false)}
          data-testid="mobile-menu-close"
        >
          <X className="w-8 h-8" />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-white text-2xl font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="tel:+3225551234" 
            className="flex items-center gap-2 text-[#2EC4B6] text-xl font-semibold mt-4"
          >
            <Phone className="w-6 h-6" />
            +32 2 555 1234
          </a>
        </nav>
      </div>
    </>
  );
};

// Hero Section
const Hero = () => (
  <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white" data-testid="hero-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-slide-up">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
            Brussels' Trusted Plumbers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0A2540] mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            24/7 Emergency Plumbing Services You Can Trust
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            From leaks to full system repairs — we handle it all quickly and professionally. Serving Brussels and surrounding areas.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2" data-testid="hero-cta-estimate">
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+3225551234" className="btn-secondary inline-flex items-center justify-center gap-2" data-testid="hero-cta-call">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="trust-badge flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 border border-[#E2E8F0]">
              <Shield className="w-5 h-5 text-[#2EC4B6]" />
              <span className="text-sm font-medium text-[#0A2540]">Licensed</span>
            </div>
            <div className="trust-badge flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 border border-[#E2E8F0]">
              <Award className="w-5 h-5 text-[#2EC4B6]" />
              <span className="text-sm font-medium text-[#0A2540]">Insured</span>
            </div>
            <div className="trust-badge flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 border border-[#E2E8F0]">
              <Star className="w-5 h-5 text-[#2EC4B6] fill-[#2EC4B6]" />
              <span className="text-sm font-medium text-[#0A2540]">5-Star Rated</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-slide-up stagger-2">
          <div className="absolute -top-4 -left-4 w-full h-full bg-[#2EC4B6]/10 -z-10"></div>
          <img 
            src="https://images.pexels.com/photos/33388390/pexels-photo-33388390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Professional plumber at work"
            className="w-full h-[400px] md:h-[500px] object-cover hero-image"
            data-testid="hero-image"
          />
        </div>
      </div>
    </div>
  </section>
);

// Services data
const servicesData = [
  {
    icon: Droplet,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix leaks quickly, preventing water damage.",
  },
  {
    icon: PipetteIcon,
    title: "Drain Cleaning",
    description: "Professional drain cleaning to restore proper flow and prevent future blockages.",
  },
  {
    icon: Flame,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance for all types of water heaters.",
  },
  {
    icon: Wrench,
    title: "Pipe Repair & Replacement",
    description: "Expert pipe services from minor repairs to complete repiping solutions.",
  },
  {
    icon: Bath,
    title: "Bathroom & Kitchen Plumbing",
    description: "Full plumbing services for renovations, installations, and repairs.",
  },
  {
    icon: Home,
    title: "Sewer Line Services",
    description: "Comprehensive sewer inspection, cleaning, and repair services.",
  },
];

// Services Section
const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-[#F8FAFC]" data-testid="services-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A2540]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
          Complete Plumbing Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div 
            key={index}
            className="service-card bg-white border border-[#E2E8F0] p-8"
            data-testid={`service-card-${index}`}
          >
            <div className="w-14 h-14 bg-[#2EC4B6]/10 flex items-center justify-center mb-6">
              <service.icon className="w-7 h-7 text-[#2EC4B6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A2540] mb-3" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              {service.title}
            </h3>
            <p className="text-[#475569]">{service.description}</p>
          </div>
        ))}

        {/* Emergency Card - Spans full width on mobile, 1 col on larger */}
        <div 
          className="service-card emergency-card md:col-span-2 lg:col-span-3 p-8"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1709990740117-0eb9348fbd24?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          data-testid="emergency-service-card"
        >
          <div className="emergency-content flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#2EC4B6] flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-[#0A2540]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                  Emergency Plumbing (24/7)
                </h3>
                <p className="text-white/80">
                  Burst pipes, major leaks, or flooding? We're available around the clock.
                </p>
              </div>
            </div>
            <a 
              href="tel:+3225551234" 
              className="btn-primary whitespace-nowrap flex items-center gap-2"
              data-testid="emergency-call-btn"
            >
              <Phone className="w-5 h-5" />
              Call Emergency Line
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Pricing data
const pricingData = [
  {
    title: "Service Call",
    price: "€49",
    description: "Diagnostic visit to assess your plumbing issue",
    features: ["On-site inspection", "Problem diagnosis", "Written estimate", "Applied to repair cost"],
  },
  {
    title: "Drain Cleaning",
    price: "€89",
    description: "Professional drain unclogging service",
    features: ["Standard drain clearing", "Camera inspection", "Preventive tips", "90-day guarantee"],
    featured: true,
  },
  {
    title: "Leak Repairs",
    price: "€75",
    description: "Standard leak repair service",
    features: ["Leak location", "Expert repair", "Quality parts", "Workmanship warranty"],
  },
];

// Pricing Section
const Pricing = () => (
  <section id="pricing" className="py-24 md:py-32 bg-white" data-testid="pricing-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
          Transparent Pricing
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A2540] mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
          No Surprises. Just Fair Prices.
        </h2>
        <p className="text-[#475569] max-w-2xl mx-auto">
          We believe in upfront, honest pricing. Here are our starting rates for common services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingData.map((item, index) => (
          <div 
            key={index}
            className={`pricing-card bg-white border border-[#E2E8F0] p-8 ${item.featured ? 'featured' : ''}`}
            data-testid={`pricing-card-${index}`}
          >
            <h3 className="text-xl font-semibold text-[#0A2540] mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              {item.title}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-sm text-[#475569]">from</span>
              <span className="text-4xl font-bold text-[#0A2540]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                {item.price}
              </span>
            </div>
            <p className="text-[#475569] mb-6">{item.description}</p>
            <ul className="space-y-3">
              {item.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3 text-[#475569]">
                  <CheckCircle className="w-5 h-5 text-[#2EC4B6] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Water Heater pricing mention */}
      <div className="text-center mt-12 p-6 bg-[#F8FAFC] border border-[#E2E8F0] max-w-3xl mx-auto">
        <p className="text-[#475569]">
          <strong className="text-[#0A2540]">Water heater services</strong> start from <strong className="text-[#2EC4B6]">€150</strong>. 
          Final pricing depends on the scope and complexity of the job. We always provide a clear quote before starting any work.
        </p>
      </div>
    </div>
  </section>
);

// Why Choose Us data
const whyChooseData = [
  {
    title: "Licensed & Experienced Technicians",
    description: "All our plumbers are certified, trained, and have years of hands-on experience.",
  },
  {
    title: "Fast Response Time",
    description: "Same-day service available. We understand plumbing emergencies can't wait.",
  },
  {
    title: "Upfront Estimates",
    description: "No hidden fees or surprise charges. We provide detailed quotes before any work begins.",
  },
  {
    title: "Clean & Respectful Service",
    description: "We treat your home like our own, leaving the work area spotless after every job.",
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "If you're not happy with our work, we'll make it right. That's our promise.",
  },
];

// Why Choose Us Section
const WhyChooseUs = () => (
  <section className="py-24 md:py-32 bg-[#F8FAFC]" data-testid="why-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Sticky Title */}
        <div className="md:sticky md:top-32 md:self-start">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
            Why FlowFix?
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A2540] mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            The FlowFix Difference
          </h2>
          <p className="text-[#475569] text-lg">
            We're not just plumbers — we're your neighbors committed to keeping Brussels homes running smoothly.
          </p>
        </div>

        {/* Right - Scrolling List */}
        <div className="space-y-8">
          {whyChooseData.map((item, index) => (
            <div key={index} className="why-item pl-12 md:pl-16" data-testid={`why-item-${index}`}>
              <span className="why-number">0{index + 1}</span>
              <div className="why-content bg-white p-6 border border-[#E2E8F0]">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-[#475569]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Testimonials data
const testimonialsData = [
  {
    name: "Sophie Dubois",
    location: "Ixelles, Brussels",
    rating: 5,
    text: "Had a burst pipe at 2 AM and FlowFix was there within 30 minutes. Professional, fast, and reasonably priced. Can't recommend them enough!",
    avatar: "https://images.unsplash.com/photo-1753161023792-d240af5e6ef7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc1MzQwMjAxfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Marc Van den Berg",
    location: "Saint-Gilles, Brussels",
    rating: 5,
    text: "Finally, a plumber who shows up on time and actually explains what they're doing. The upfront pricing was exactly what they quoted. Very satisfied.",
    avatar: "https://images.unsplash.com/photo-1703759354715-17fcbeea4b66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc1MzQwMjAxfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Emma Peeters",
    location: "Etterbeek, Brussels",
    rating: 5,
    text: "Great experience from start to finish. They fixed our water heater issue and even gave tips on maintenance. Friendly team and fair pricing.",
    avatar: "https://images.unsplash.com/photo-1616377230292-97f202692d74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhvbWVvd25lciUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NTM0MDIwN3ww&ixlib=rb-4.1.0&q=85",
  },
];

// Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-[#2EC4B6] fill-[#2EC4B6]' : 'text-[#E2E8F0]'}`}
      />
    ))}
  </div>
);

// Testimonials Section
const Testimonials = () => (
  <section className="py-24 md:py-32 bg-white" data-testid="testimonials-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
          Customer Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A2540]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
          What Brussels Residents Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index}
            className="testimonial-card bg-[#F8FAFC] border border-[#E2E8F0] p-8"
            data-testid={`testimonial-card-${index}`}
          >
            <StarRating rating={testimonial.rating} />
            <p className="text-[#475569] my-6 leading-relaxed">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#0A2540]">{testimonial.name}</p>
                <p className="text-sm text-[#475569]">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="py-24 md:py-32 bg-[#F8FAFC]" data-testid="about-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A2540] mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Your Trusted Local Plumbers
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed mb-6">
            FlowFix Plumbing has been serving Brussels and the surrounding communities for over 15 years. What started as a one-man operation has grown into a team of dedicated professionals, all committed to one thing: providing exceptional plumbing services.
          </p>
          <p className="text-[#475569] text-lg leading-relaxed mb-8">
            We understand that plumbing problems can be stressful. That's why we focus on clear communication, transparent pricing, and quality workmanship. When you call FlowFix, you're not just getting a plumber — you're getting a partner who cares about your home.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-[#2EC4B6]" style={{ fontFamily: 'Clash Display, sans-serif' }}>15+</p>
              <p className="text-sm text-[#475569]">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#2EC4B6]" style={{ fontFamily: 'Clash Display, sans-serif' }}>5000+</p>
              <p className="text-sm text-[#475569]">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#2EC4B6]" style={{ fontFamily: 'Clash Display, sans-serif' }}>24/7</p>
              <p className="text-sm text-[#475569]">Emergency Service</p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#0A2540]/10 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1726577488541-df4a070478e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxicnVzc2VscyUyMGNpdHlzY2FwZSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzUzNDAyMDF8MA&ixlib=rb-4.1.0&q=85"
            alt="Brussels cityscape"
            className="w-full h-[400px] object-cover"
            data-testid="about-image"
          />
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // DEMO: This shows a success message without actually sending data
    // To enable Formspree, uncomment the code below and add your form ID

    /*
    // FORMSPREE INTEGRATION
    // 1. Create an account at https://formspree.io
    // 2. Create a new form and get your form ID
    // 3. Replace YOUR_FORM_ID with your actual form ID
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success('Thank you! We\'ll contact you shortly.');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
    */

    // DEMO MODE: Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! We\'ll contact you shortly.', {
        description: 'This is a demo. In production, connect Formspree to receive submissions.'
      });
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2EC4B6] mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A2540]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Request Your Free Estimate
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#0A2540] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Jean Dupont"
                data-testid="contact-name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0A2540] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="+32 4XX XXX XXX"
                  data-testid="contact-phone"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0A2540] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="you@example.com"
                  data-testid="contact-email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#0A2540] mb-2">
                Service Needed
              </label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="form-input h-auto py-3" data-testid="contact-service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leak-repair">Leak Detection & Repair</SelectItem>
                  <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                  <SelectItem value="water-heater">Water Heater Services</SelectItem>
                  <SelectItem value="pipe-repair">Pipe Repair & Replacement</SelectItem>
                  <SelectItem value="bathroom-kitchen">Bathroom & Kitchen Plumbing</SelectItem>
                  <SelectItem value="sewer">Sewer Line Services</SelectItem>
                  <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#0A2540] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="form-input resize-none"
                placeholder="Describe your plumbing issue..."
                data-testid="contact-message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              data-testid="contact-submit"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Request Estimate
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Contact Info Panel */}
          <div className="contact-panel p-8" data-testid="contact-info">
            <h3 className="text-xl font-semibold text-[#0A2540] mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2EC4B6]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#2EC4B6]" />
                </div>
                <div>
                  <p className="text-sm text-[#475569] mb-1">Phone</p>
                  <a href="tel:+3225551234" className="text-lg font-semibold text-[#0A2540] hover:text-[#2EC4B6] transition-colors" data-testid="info-phone">
                    +32 2 555 1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2EC4B6]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2EC4B6]" />
                </div>
                <div>
                  <p className="text-sm text-[#475569] mb-1">Email</p>
                  <a href="mailto:info@flowfix.be" className="text-lg font-semibold text-[#0A2540] hover:text-[#2EC4B6] transition-colors" data-testid="info-email">
                    info@flowfix.be
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2EC4B6]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#2EC4B6]" />
                </div>
                <div>
                  <p className="text-sm text-[#475569] mb-1">Service Area</p>
                  <p className="text-lg font-semibold text-[#0A2540]" data-testid="info-area">
                    Brussels & Surrounding Areas
                  </p>
                  <p className="text-sm text-[#475569]">
                    Ixelles, Saint-Gilles, Etterbeek, Uccle, Anderlecht, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2EC4B6]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#2EC4B6]" />
                </div>
                <div>
                  <p className="text-sm text-[#475569] mb-1">Business Hours</p>
                  <p className="text-lg font-semibold text-[#0A2540]" data-testid="info-hours">
                    Mon - Sat: 8:00 - 18:00
                  </p>
                  <p className="text-sm text-[#2EC4B6] font-medium">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Banner Section
const CTABanner = () => (
  <section 
    className="cta-section py-20 md:py-24"
    style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1709990740117-0eb9348fbd24?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    data-testid="cta-section"
  >
    <div className="cta-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>
        Need a Plumber Right Now?
      </h2>
      <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
        Don't let plumbing problems ruin your day. Our team is ready to help 24/7.
      </p>
      <a 
        href="tel:+3225551234" 
        className="btn-primary inline-flex items-center gap-2 text-lg"
        data-testid="cta-call-btn"
      >
        <Phone className="w-6 h-6" />
        Call Now for Immediate Service
      </a>
    </div>
  </section>
);

// Footer Component
const Footer = () => {
  const services = [
    "Leak Detection & Repair",
    "Drain Cleaning",
    "Water Heater Services",
    "Pipe Repair",
    "Emergency Plumbing",
    "Sewer Services",
  ];

  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0A2540] py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 bg-[#2EC4B6] flex items-center justify-center">
                <Droplets className="w-5 h-5 text-[#0A2540] absolute" style={{ top: '6px', left: '10px' }} />
                <Wrench className="w-4 h-4 text-white absolute" style={{ bottom: '6px', right: '8px' }} />
              </div>
              <div>
                <span className="font-bold text-xl text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>FlowFix</span>
                <span className="text-sm text-white/60 block -mt-1">Plumbing</span>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Fast. Reliable. Done Right the First Time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#2EC4B6] transition-colors" data-testid="social-facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#2EC4B6] transition-colors" data-testid="social-instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#2EC4B6] transition-colors" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: 'Clash Display, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2EC4B6]" />
                <a href="tel:+3225551234" className="footer-link">+32 2 555 1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2EC4B6]" />
                <a href="mailto:info@flowfix.be" className="footer-link">info@flowfix.be</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#2EC4B6]" />
                <span className="footer-link">Brussels, Belgium</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#2EC4B6]" />
                <span className="footer-link">24/7 Emergency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} FlowFix Plumbing. All rights reserved. Licensed & Insured in Belgium.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Floating Call Button
const FloatingCallButton = () => (
  <a 
    href="tel:+3225551234"
    className="floating-call w-16 h-16 bg-[#2EC4B6] flex items-center justify-center shadow-lg hover:bg-[#20A89C] transition-colors"
    data-testid="floating-call-btn"
    aria-label="Call FlowFix"
  >
    <Phone className="w-7 h-7 text-[#0A2540]" />
  </a>
);

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
