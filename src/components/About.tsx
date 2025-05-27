
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled designers and developers bring years of experience to every project."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in design and development across multiple industries."
    },
    {
      icon: Target,
      title: "Goal Focused",
      description: "We align every decision with your business objectives to maximize ROI."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PixelBoss</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a creative digital agency passionate about crafting exceptional digital experiences 
            that drive results and inspire action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Creating Digital Excellence Since 2018
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between creativity and technology, 
              PixelBoss has grown from a small startup to a leading digital agency. 
              We specialize in creating stunning websites, mobile apps, and digital 
              experiences that not only look amazing but also deliver measurable results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach combines strategic thinking with creative excellence, 
              ensuring every project we deliver exceeds expectations and drives 
              real business value for our clients.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
