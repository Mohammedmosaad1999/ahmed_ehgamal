import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Users, Lightbulb, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ModernCard from '../components/ModernCard';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: t('about.education'),
      description: t('about.education.desc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: t('about.specialization'),
      description: t('about.specialization.desc'),
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: Users,
      title: t('about.collaboration'),
      description: t('about.collaboration.desc'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lightbulb,
      title: t('about.innovation'),
      description: t('about.innovation.desc'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const skills = [
    'Strategic Planning',
    'Product Management', 
    'Agile Methodology',
    'Business Analysis',
    'Stakeholder Management',
    'Digital Transformation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gold-50/20 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            {t('about.title').split(' ').map((word, index) => (
              <span key={index} className={index === 1 ? 'text-gold-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <AnimatedSection direction="left" delay={0.2}>
            <ModernCard className="p-0 overflow-hidden">
              <div className="relative">
                <img
                  src="/hero.jpg"
                  alt="Ahmed El-Gamal"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Overlay Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl opacity-80 blur-sm" />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-gold-300 to-gold-500 rounded-2xl opacity-60 blur-sm" />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award className="text-gold-500" size={24} />
                </motion.div>
              </div>
            </ModernCard>
          </AnimatedSection>

          {/* Content Section */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                {t('about.subtitle')}
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                whileHover={{ scale: 1.01 }}
              >
                {t('about.description1')}
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                whileHover={{ scale: 1.01 }}
              >
                {t('about.description2')}
              </motion.p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-gold-100 to-gold-200 text-gold-800 rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="pt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Briefcase className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  View My Work
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Highlights Grid */}
        <AnimatedSection delay={0.8}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <ModernCard key={highlight.title} delay={1 + index * 0.1} gradient>
                <div className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="text-white" size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {highlight.description}
                  </p>
                </div>
              </ModernCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection delay={1.4} className="mt-20 text-center">
          <ModernCard gradient className="p-12">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Ready to Transform Your Business?
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              whileHover={{ scale: 1.01 }}
            >
              Let's collaborate to turn your vision into reality with strategic analysis and innovative solutions.
            </motion.p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </ModernCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;