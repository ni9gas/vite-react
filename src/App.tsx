"use client"

import type React from "react"

import { useState, type ReactNode } from "react"
import {
  Shield,
  Search,
  UserCheck,
  Activity,
  MapPin,
  BarChart3,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

// Feature Card Component
interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

// Pricing Card Component
interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

const PricingCard = ({ name, price, period, description, features, cta, highlighted }: PricingCardProps) => {
  return (
    <div
      className={`rounded-lg overflow-hidden ${
        highlighted ? "border-2 border-emerald-500 relative shadow-lg shadow-emerald-500/20" : "border border-gray-700"
      }`}
    >
      {highlighted && (
        <div className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
          Most Popular
        </div>
      )}

      <div className="p-6 bg-gray-800">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-400 ml-1">{period}</span>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>

        <a
          href="#contact"
          className={`block w-full py-2 px-4 rounded-md text-center font-medium ${
            highlighted ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
          } transition-colors`}
        >
          {cta}
        </a>
      </div>

      <div className="p-6 bg-gray-900">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <CheckCircle
                className={`h-5 w-5 ${highlighted ? "text-emerald-500" : "text-blue-500"} mr-3 flex-shrink-0`}
              />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// FAQ Item Component
interface FaqItemProps {
  question: string
  answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-5">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-white">{question}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>

      {isOpen && (
        <div className="mt-3">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
}

// User Form Component
const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    message: "",
    subscribe: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you shortly.")

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      message: "",
      subscribe: true,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
          Company*
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
        />
      </div>

      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-1">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white resize-none"
        ></textarea>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
          className="h-4 w-4 mt-1 text-emerald-600 focus:ring-emerald-500 border-gray-600 rounded bg-gray-700"
        />
        <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-300">
          I agree to receive updates about Etherlite products, services, and events. You can unsubscribe at any time.
        </label>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors"
      >
        Submit Request
      </button>

      <p className="text-xs text-gray-400 mt-4">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  )
}

// Main App Component
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: "AML Scan",
      description:
        "Advanced Anti-Money Laundering scanning to detect suspicious transactions and ensure compliance with global regulations.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-blue-500" />,
      title: "KYA (Know Your Address)",
      description:
        "Comprehensive address analysis to identify ownership patterns and risk profiles associated with blockchain addresses.",
    },
    {
      icon: <Activity className="h-10 w-10 text-purple-500" />,
      title: "KYT (Know Your Transaction)",
      description:
        "Deep transaction monitoring to track fund flows and identify potentially suspicious activities in real-time.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-red-500" />,
      title: "Address Tracker",
      description:
        "Powerful blockchain address tracking to monitor transactions, balances, and interactions across multiple networks.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-amber-500" />,
      title: "Real-time Reports",
      description:
        "Instant, comprehensive reporting with actionable insights for compliance teams and blockchain analysts.",
    },
    {
      icon: <Search className="h-10 w-10 text-cyan-500" />,
      title: "Advanced Analytics",
      description:
        "Sophisticated data analysis tools to uncover patterns and connections in blockchain transaction data.",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for individuals and small teams getting started with blockchain analysis.",
      features: [
        "Basic AML scanning",
        "Limited KYA checks",
        "Transaction monitoring",
        "5 address tracking slots",
        "Daily reports",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses requiring comprehensive blockchain intelligence.",
      features: [
        "Advanced AML scanning",
        "Full KYA capabilities",
        "Real-time KYT alerts",
        "25 address tracking slots",
        "Hourly reports",
        "Priority support",
      ],
      cta: "Try Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex compliance needs.",
      features: [
        "Enterprise-grade AML tools",
        "Unlimited KYA/KYT",
        "Custom risk scoring",
        "Unlimited address tracking",
        "Real-time reporting",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  const faqs = [
    {
      question: "What is Etherlite?",
      answer:
        "Etherlite is a comprehensive blockchain analysis platform that provides AML scanning, KYA/KYT services, address tracking, and real-time reporting to help organizations maintain compliance and gain insights from blockchain data.",
    },
    {
      question: "How does AML scanning work?",
      answer:
        "Our AML scanning technology analyzes blockchain transactions against known risk patterns, sanctioned addresses, and suspicious behavior models to identify potential money laundering activities and compliance risks.",
    },
    {
      question: "What blockchains do you support?",
      answer:
        "Etherlite currently supports Ethereum, Bitcoin, Binance Smart Chain, Polygon, Solana, and Avalanche. We're constantly adding support for additional blockchains based on customer demand.",
    },
    {
      question: "Can I integrate Etherlite with my existing systems?",
      answer:
        "Yes, Etherlite offers comprehensive API access that allows for seamless integration with your existing compliance, risk management, and business intelligence systems.",
    },
    {
      question: "How accurate are your risk assessments?",
      answer:
        "Our risk assessment models are continuously trained on the latest blockchain data and regulatory requirements, achieving over 95% accuracy in identifying high-risk activities while minimizing false positives.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Absolutely. Our Enterprise plan includes custom risk models, tailored reporting, and dedicated support to meet the specific needs of your organization.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
                Etherlite
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Log In</button>
              <button className="px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors">
                Sign Up
              </button>
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-b border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <button className="block w-full px-5 py-3 text-center font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  Log In
                </button>
                <button className="mt-2 block w-full px-5 py-3 text-center font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Blockchain Intelligence for the Modern World
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Etherlite provides comprehensive blockchain analysis tools for AML compliance, address tracking, and
              transaction monitoring with real-time reporting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors flex items-center justify-center"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-emerald-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-purple-600/20"></div>
              <img
                src="https://placehold.co/1200x600/1f2937/FFFFFF/png?text=Etherlite+Dashboard"
                alt="Etherlite Dashboard"
                className="w-full h-auto relative z-10 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Blockchain Analysis</h2>
            <p className="text-xl text-gray-300">
              Our suite of powerful tools provides everything you need for blockchain compliance and intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Etherlite Works</h2>
            <p className="text-xl text-gray-300">
              Our platform provides end-to-end blockchain analysis with a simple, intuitive workflow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-600"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Data Collection</h3>
                    <p className="text-gray-300">
                      Our advanced algorithms continuously scan multiple blockchains, collecting transaction data,
                      address information, and smart contract interactions.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-4 border-emerald-500 z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 md:hidden"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-4 border-blue-500 z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 pb-8 md:pb-0">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Risk Analysis</h3>
                    <p className="text-gray-300">
                      Transactions and addresses are analyzed against known risk patterns, regulatory requirements, and
                      machine learning models to identify potential compliance issues.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Visualization & Alerts</h3>
                    <p className="text-gray-300">
                      Results are presented in intuitive dashboards with visual transaction flows, risk scores, and
                      real-time alerts for suspicious activities.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-4 border-purple-500 z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 md:hidden"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-4 border-amber-500 z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">Reporting & Action</h3>
                    <p className="text-gray-300">
                      Generate comprehensive reports for compliance, investigations, or business intelligence, with
                      actionable insights and recommended next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your organization's needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Fill out the form to request a demo or learn more about how Etherlite can help your organization with
                blockchain compliance and intelligence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">No credit card required</span> for your initial demo and
                    consultation.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Dedicated support</span> from our team of blockchain
                    experts.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Flexible implementation</span> with API access and custom
                    integrations.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Our Clients Include</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-12 bg-gray-700/50 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Client Logo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Request Information</h3>
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find answers to common questions about Etherlite and our services.</p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-700">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
            >
              Contact Our Team <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Securing Your Blockchain Operations Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of organizations using Etherlite to ensure compliance and gain valuable insights from
              blockchain data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors text-lg"
              >
                Request a Demo
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors text-lg flex items-center justify-center"
              >
                View Pricing <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-emerald-500 mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
                  Etherlite
                </span>
              </div>
              <p className="text-gray-400 mb-4">Advanced blockchain intelligence for compliance and security.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    GDPR Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Etherlite. All rights reserved.
            </p>
            <div className="flex items-center">
              <span className="text-gray-400 text-sm mr-2">Made with</span>
              <span className="text-red-500">❤</span>
              <span className="text-gray-400 text-sm ml-2">for blockchain security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

