import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Johnson Retail Group",
    location: "Nairobi, Kenya",
    content: "Our e-commerce platform transformed our business completely. Online sales increased by 40% in just 3 months.",
    image: "/src/assets/images/testimonials/lady.jpg",
    rating: 5,
    projectType: "E-commerce Platform",
    results: "40% increase in online sales"
  },
  {
    name: "David Kimani",
    role: "Managing Director",
    company: "Kimani Consulting Ltd",
    location: "Mombasa, Kenya",
    content: "The custom CRM system streamlined our entire workflow. We've seen a 60% improvement in efficiency.",
    image: "/src/assets/images/testimonials/men1.jpg",
    rating: 5,
    projectType: "Business Management System",
    results: "60% improvement in efficiency"
  },
  {
    name: "Maria Santos",
    role: "Restaurant Owner",
    company: "Casa Maria Restaurant",
    location: "Kisumu, Kenya",
    content: "Our new website and online ordering system brought in 300% more orders!",
    image: "/src/assets/images/testimonials/men2.jpg",
    rating: 5,
    projectType: "Restaurant Website",
    results: "300% increase in orders"
  },
  {
    name: "James Ochieng",
    role: "Real Estate Broker",
    company: "Prime Properties Kenya",
    location: "Nakuru, Kenya",
    content: "The property portal made our business so much more efficient. Clients can now search properties 50% faster.",
    image: "/src/assets/images/testimonials/lady.jpg",
    rating: 5,
    projectType: "Real Estate Portal",
    results: "50% faster property search"
  },
  {
    name: "Dr. Grace Wanjiku",
    role: "Medical Director",
    company: "Wanjiku Medical Center",
    location: "Eldoret, Kenya",
    content: "The patient management system reduced our administrative work by 80%.",
    image: "/src/assets/images/testimonials/men1.jpg",
    rating: 5,
    projectType: "Healthcare Management",
    results: "80% reduction in administrative work"
  },
  {
    name: "Peter Mwangi",
    role: "Marketing Manager",
    company: "Digital Marketing Pro",
    location: "Thika, Kenya",
    content: "The analytics dashboard gives us real-time insights that help us make better decisions for our clients.",
    image: "/src/assets/images/testimonials/men2.jpg",
    rating: 5,
    projectType: "Analytics Dashboard",
    results: "Real-time insights for better decision making"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real results from satisfied clients across Kenya and beyond.
            </p>
          </div>
        </AnimatedSection>

        {/* Trust Statistics - Condensed */}
        <AnimatedSection repeat={true}>
          <div className="grid grid-cols-4 gap-4 mb-12 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">5.0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Success</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Satisfied</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <AnimatedSection repeat={true}>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <Quote className="text-blue-500 mx-auto mb-6" size={48} />
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                        <div className="text-blue-600 dark:text-blue-400 text-sm flex items-center gap-1">
                          <MapPin size={12} />
                          {testimonial.location} • {testimonial.projectType}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    {testimonial.results && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 inline-block">
                        <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                          ✨ {testimonial.results}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="text-gray-600 dark:text-gray-300" size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="text-gray-600 dark:text-gray-300" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Condensed CTA */}
        <AnimatedSection repeat={true}>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Ready to Join Our Success Stories?</h3>
              <p className="text-blue-100 mb-4 text-sm">Get a custom solution that drives real results.</p>
              <div className="flex justify-center gap-3">
                <a href="#contact" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Get Quote
                </a>
                <a href="#projects" className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all text-sm">
                  View Work
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;