import React, { useState, useEffect, useRef } from 'react';
import { Check, Minus, Cloud, Shield, Activity, Code, Users, FileCode2, ChevronDown, Search, Rocket, Building2, Crown, ExternalLink, Globe2, Zap, Server, ChevronLeft, ChevronRight } from 'lucide-react';
import matter from 'gray-matter';
import featuresContent from './features.md?raw';
import plansContent from './plans.md?raw';
import testimonialsContent from './testimonials.md?raw';

const iconMap = {
  FileCode2,
  Cloud,
  Shield,
  Activity,
  Code,
  Users,
  Rocket,
  Building2,
  Crown
};

function loadFeatures() {
  const { data } = matter(featuresContent);
  return data.featureGroups;
}

function loadPlans() {
  const { data } = matter(plansContent);
  return {
    plans: data.plans,
    productVerticals: data.productVerticals.map(vertical => ({
      ...vertical,
      icon: iconMap[vertical.icon]
    })),
  };
}

function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto text-[#F3652B]">
                <path fillRule="evenodd" clipRule="evenodd" d="M68.8751 0L64.3906 23.4146H87.711L92.1955 0H68.8751ZM72.5179 4.42392H86.8522L84.0623 18.9907H69.728L72.5179 4.42392Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M60.0001 0L55.6094 23.4146H59.9992L64.3899 0H60.0001Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.3824 0L0.654522 19.9761L0 23.4146H3.41853L21.7987 7.94855L18.8361 23.4146H23.3197L27.8049 0H24.3824Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M115.516 0L113.526 10.3871L117.148 14.8895L120 0H115.516ZM96.6798 0L92.1953 23.4146H96.6815L99.755 7.36298L112.711 23.4146H115.516L116.069 20.5482L99.4841 0H96.6798Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.2893 0L31.4419 4.42401H46.9283L28.4682 19.9674L27.8047 23.4146H51.125L51.9724 18.9906H36.4861L54.9502 3.44385L55.6096 0H32.2893Z" fill="currentColor"/>
              </svg>
            </a>
            <div className="hidden md:flex md:ml-10">
              <div className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-sm font-roboto text-gray-300 hover:text-white"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-sm font-roboto text-gray-300 hover:text-white"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="/customers" className="px-3 py-2 text-sm font-roboto text-gray-300 hover:text-white">
                Customers
              </a>
              <div className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-sm font-roboto text-gray-300 hover:text-white"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="/pricing" className="px-3 py-2 text-sm font-roboto bg-[#F3652B]/10 text-[#F3652B] rounded-md">
                Pricing
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="/contact" className="text-sm font-roboto text-gray-300 hover:text-white">
              Contact
            </a>
            <a href="/signin" className="text-sm font-roboto text-gray-300 hover:text-white">
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-roboto rounded-md text-white bg-[#F3652B] hover:bg-[#d84d15]"
            >
              Free account
            </a>
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function BillingToggle({ isYearly, onChange }) {
  return (
    <div className="inline-flex items-center gap-8 bg-gray-900 p-1 rounded-lg border border-gray-800">
      <button
        className={`px-6 py-2 rounded-md text-sm font-roboto transition-all ${
          !isYearly 
            ? 'bg-[#F3652B] text-white shadow-[0_0_12px_-3px_rgba(243,101,43,0.9)]' 
            : 'text-gray-400 hover:text-white'
        }`}
        onClick={() => onChange(false)}
      >
        Monthly
      </button>
      <button
        className={`px-6 py-2 rounded-md text-sm font-roboto transition-all flex items-center gap-2 ${
          isYearly 
            ? 'bg-[#F3652B] text-white shadow-[0_0_12px_-3px_rgba(243,101,43,0.9)]' 
            : 'text-gray-400 hover:text-white'
        }`}
        onClick={() => onChange(true)}
      >
        <span>Yearly</span>
        <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">Save 20%</span>
      </button>
    </div>
  );
}

function PricingCard({ plan, isYearly }) {
  const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  
  return (
    <div className={`relative flex flex-col p-8 rounded-xl border ${
      plan.highlight 
        ? 'border-[#F3652B] bg-gradient-to-b from-[#F3652B]/10 to-transparent' 
        : 'border-gray-800 bg-gray-900'
    }`}>
      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-gray-400 text-sm font-roboto mb-6 h-12">{plan.label}</p>
      
      <div className="border-t border-gray-800 -mx-8 px-8 pt-6 pb-6">
        <div className="h-6 mb-1">
          {plan.startingAt && (
            <div className="text-sm font-roboto text-gray-400">Starting at $500</div>
          )}
        </div>
        <div className="flex items-baseline">
          <div className="text-3xl font-bold text-white">{displayPrice}</div>
          <div className="text-gray-400 font-roboto ml-1">{plan.period}</div>
        </div>
      </div>

      <div className="border-t border-gray-800 -mx-8 px-8 py-6">
        {plan.previousPlan && (
          <p className="text-sm font-roboto text-gray-400 mb-3">
            Everything in {plan.previousPlan} plus:
          </p>
        )}
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <Check className="w-5 h-5 text-[#F3652B] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-roboto">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 space-y-3">
        {plan.name === 'Enterprise' ? (
          <>
            <button className="w-full py-3 px-4 rounded-lg font-roboto bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-[#333333] transition-all">
              {plan.cta}
            </button>
            <button className="w-full py-3 px-4 rounded-lg font-roboto border border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800 transition-all">
              {plan.secondaryCta}
            </button>
          </>
        ) : (
          <button className={`w-full py-3 px-4 rounded-lg font-roboto transition-all ${
            plan.highlight
              ? 'bg-[#F3652B] hover:bg-[#d84d15] text-white'
              : 'border border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800'
          }`}>
            {plan.cta}
          </button>
        )}
      </div>
    </div>
  );
}

function ProductVertical({ name, icon: Icon, description }) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
      <div className="w-12 h-12 rounded-lg bg-[#F3652B]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#F3652B]" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm font-roboto">{description}</p>
    </div>
  );
}

function SocialProof() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;
  const containerRef = useRef(null);

  useEffect(() => {
    const { data } = matter(testimonialsContent);
    setTestimonials(data.testimonials);
  }, [testimonialsContent]);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + testimonialsPerView, testimonials.length - testimonialsPerView)
    );
  };

  const previousTestimonials = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - testimonialsPerView, 0));
  };

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-white text-center mb-4">Trusted by innovative companies worldwide</h2>
      <p className="text-gray-400 text-center mb-12 font-roboto">Join thousands of companies accelerating their applications with Azion</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center p-8 rounded-xl border border-gray-800 bg-gray-900">
          <div className="w-12 h-12 rounded-lg bg-[#F3652B]/10 flex items-center justify-center mb-4">
            <Globe2 className="w-6 h-6 text-[#F3652B]" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">180+</div>
          <p className="text-gray-400 text-sm font-roboto text-center">Edge Locations Worldwide</p>
        </div>
        
        <div className="flex flex-col items-center p-8 rounded-xl border border-gray-800 bg-gray-900">
          <div className="w-12 h-12 rounded-lg bg-[#F3652B]/10 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-[#F3652B]" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">&lt;10ms</div>
          <p className="text-gray-400 text-sm font-roboto text-center">Average Global Latency</p>
        </div>
        
        <div className="flex flex-col items-center p-8 rounded-xl border border-gray-800 bg-gray-900">
          <div className="w-12 h-12 rounded-lg bg-[#F3652B]/10 flex items-center justify-center mb-4">
            <Server className="w-6 h-6 text-[#F3652B]" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">99.99%</div>
          <p className="text-gray-400 text-sm font-roboto text-center">Platform Uptime</p>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={containerRef}>
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="p-6 rounded-xl border border-gray-800 bg-gray-900 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-medium font-roboto">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm font-roboto">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm font-roboto">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={previousTestimonials}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-opacity ${
            currentIndex === 0 ? 'opacity-0' : 'opacity-100 hover:bg-white/20'
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={nextTestimonials}
          disabled={currentIndex >= testimonials.length - testimonialsPerView}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-opacity ${
            currentIndex >= testimonials.length - testimonialsPerView ? 'opacity-0' : 'opacity-100 hover:bg-white/20'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

function FeatureGroup({ group }) {
  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-[#F3652B] mx-auto" />
      ) : (
        <span className="text-gray-600 block text-center">—</span>
      );
    }
    if (value === 'Add-on') {
      return <span className="text-xs px-2 py-1 rounded bg-[#F3652B]/20 text-[#F3652B] block text-center mx-auto w-fit font-roboto">Paid Add-on</span>;
    }
    return <span className="text-gray-300 block text-center text-sm font-roboto">{value}</span>;
  };

  return (
    <div className="mb-8">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[20%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
          </colgroup>
          <tbody>
            {group.features.map((feature, featureIndex) => (
              <React.Fragment key={feature.name}>
                {featureIndex === 0 && group.showGroupLine !== false && (
                  <tr className="border-b border-gray-800">
                    <td colSpan={5} className="py-3 px-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-azion-gray text-[15px] tracking-wider">{group.name}</span>
                          {group.pricingUrl && (
                            <a 
                              href={group.pricingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#F3652B] hover:text-[#d84d15] inline-flex items-center"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {group.preview && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">Preview</span>
                          )}
                        </div>
                        {group.description && (
                          <p className="text-gray-500 text-xs font-roboto">{group.description}</p>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
                <tr className="border-b border-gray-700/40 hover:bg-gray-900/30 transition-colors">
                  <td className="py-3 px-6 text-left">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-200 text-[14px] font-roboto">{feature.name}</span>
                        {feature.pricingUrl && (
                          <a 
                            href={feature.pricingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-200 inline-flex items-center"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {feature.preview && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">Preview</span>
                        )}
                      </div>
                      {feature.description && (
                        <p className="text-gray-500 text-xs pr-4 font-roboto">{feature.description}</p>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">{renderValue(feature.free)}</td>
                  <td className="py-3 px-6 text-center">{renderValue(feature.pro)}</td>
                  <td className="py-3 px-6 text-center">{renderValue(feature.business)}</td>
                  <td className="py-3 px-6 text-center">{renderValue(feature.enterprise)}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FeatureComparison() {
  const [featureGroups, setFeatureGroups] = useState([]);
  const [plans, setPlans] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const categoryRefs = useRef({});
  const lastScrollY = useRef(0);
  const headerHeight = 160; // Height of the header + some padding

  useEffect(() => {
    setFeatureGroups(loadFeatures());
    const { plans: loadedPlans } = loadPlans();
    setPlans(loadedPlans);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;

      // Get all categories and their positions
      const categories = Object.entries(categoryRefs.current)
        .filter(([_, ref]) => ref !== null) // Filter out null refs
        .map(([category, ref]) => {
          try {
            const rect = ref.getBoundingClientRect();
            return {
              category,
              top: rect.top,
              bottom: rect.bottom
            };
          } catch (error) {
            return null;
          }
        })
        .filter(Boolean) // Filter out any null results
        .sort((a, b) => a.top - b.top);

      if (categories.length === 0) {
        setCurrentCategory('');
        return;
      }

      // Find the current category based on scroll position
      let newCategory = '';
      
      for (const cat of categories) {
        if (scrollingDown) {
          if (cat.top <= headerHeight) {
            newCategory = cat.category;
          }
        } else {
          if (cat.top <= headerHeight && cat.bottom > headerHeight) {
            newCategory = cat.category;
            break;
          }
        }
      }

      setCurrentCategory(newCategory);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [featuresContent, plansContent]);

  return (
    <div>
      <div className="sticky top-16 z-40">
        <div className="bg-gray-900/95 backdrop-blur-sm border-y border-gray-800">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="py-3 px-6 text-left">
                  <span className="text-gray-400 font-roboto">Features</span>
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-3 px-6">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[#F3652B] font-roboto text-sm">{plan.name}</span>
                      <div className="flex items-baseline justify-center">
                        <span className="text-sm font-roboto text-white">
                          {plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice !== 'Custom' && (
                          <span className="text-xs text-gray-400 ml-1 font-roboto">/mo</span>
                        )}
                      </div>
                      <div className="px-6 w-full">
                        <button className={`w-full px-2 py-1.5 rounded-md text-[14px] font-roboto transition-all ${
                          plan.highlight
                            ? 'bg-[#F3652B] hover:bg-[#d84d15] text-white'
                            : plan.name === 'Enterprise'
                            ? 'bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-[#333333]'
                            : 'border border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800'
                        }`}>
                          {plan.cta}
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        {currentCategory && (
          <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="py-3 px-6">
              <div className="font-mono text-azion-gray text-base tracking-wider uppercase">
                {currentCategory}
              </div>
            </div>
          </div>
        )}
      </div>
      {featureGroups.map((category) => (
        <div
          key={category.category}
          ref={el => categoryRefs.current[category.category] = el}
          className="mb-12"
        >
          <div className="border-b border-gray-800 mb-2">
            <div className="py-4 px-6">
              <div className="font-mono text-azion-gray text-base tracking-wider uppercase">
                {category.category}
              </div>
            </div>
          </div>
          {category.groups.map((group) => (
            <FeatureGroup key={group.name} group={group} />
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [isYearly, setIsYearly] = useState(true);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const { plans: loadedPlans } = loadPlans();
    setPlans(loadedPlans);
  }, [plansContent]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Azion Plans</h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-roboto">
              All plans include unlimited updates and access to our global edge network.
            </p>
            <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
            ))}
          </div>

          <SocialProof />

          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-12">Detailed Feature Comparison</h2>
            <FeatureComparison />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;