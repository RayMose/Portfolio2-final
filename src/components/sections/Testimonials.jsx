import React from 'react';
import AnimatedSection from '../AnimatedSection';

const testimonials = [
  {
    name: "Martin Shweppess",
    role: "Senior Developer at TechCorp",
    content: "One of the most dedicated and skilled developers I've worked with. Their attention to detail is outstanding.",
    image: "/src/assets/images/testimonials/men2.jpg"
  },
  {
    name: "Mike Muller",
    role: "Project Manager at StartupX",
    content: "Delivered complex features ahead of schedule while maintaining excellent code quality.",
    image: "/src/assets/images/testimonials/men1.jpg"
  },
  {
    name: "Emma Williams",
    role: "CTO at InnovateHub",
    content: "A true problem-solver who brings both technical expertise and creative solutions to the table.",
    image: "/src/assets/images/testimonials/lady.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection repeat={true}>
          <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
        </AnimatedSection>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 200} repeat={true}>
              <div className="text-center space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;