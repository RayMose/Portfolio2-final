import React from 'react';
import { 
  Clock, 
  Shield, 
  Users, 
  Award, 
  Zap, 
  HeadphonesIcon,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "We deliver projects on time, every time. Our streamlined process ensures quick turnaround without compromising quality.",
    stat: "98% on-time delivery"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and modern technologies to ensure your website is safe and performs optimally.",
    stat: "100% secure hosting"
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "Our clients love working with us. We maintain long-term relationships and provide exceptional service.",
    stat: "95% client retention"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous testing and quality checks to ensure it meets our high standards.",
    stat: "Zero critical bugs"
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast websites that load quickly and provide excellent user experience across all devices.",
    stat: "<3s load time"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get help when you need it. Our support team is available to assist you with any questions or issues.",
    stat: "24hr response time"
  }
];

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: CheckCircle
  },
  {
    number: "3+",
    label: "Years Experience",
    icon: TrendingUp
  },
  {
    number: "15+",
    label: "Technologies Mastered",
    icon: Award
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    icon: Users
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with business understanding to deliver 
              exceptional web solutions that drive real results for your business.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} repeat={true} delay={index * 0.1}>
              <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} repeat={true} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    ✨ {feature.stat}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection repeat={true}>
          <div className="text-center mt-16">
            <div className="bg-blue-500 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our satisfied clients and get a professional website that grows your business. 
                Let's discuss your project today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#pricing"
                  className="px-8 py-3 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  View Packages
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-all duration-200"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;
