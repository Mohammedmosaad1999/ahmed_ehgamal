import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Clock, DollarSign, Zap, Target, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ModernCard from '../components/ModernCard';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Business Cloud Infinity',
      description: 'ERP system used by 15 companies. Reduced reporting time by 50%.',
      impact: 'Streamlined operations for 15+ companies',
      metrics: '50% faster reporting',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      category: 'Enterprise'
    },
    {
      title: 'Fast Taxi',
      description: 'Transport app with 50K+ rides/month. Increased ad revenue by 30%.',
      impact: '50K+ monthly rides',
      metrics: '30% revenue increase',
      icon: Users,
      color: 'from-green-500 to-green-600',
      category: 'Transportation'
    },
    {
      title: 'Hello Shawarma',
      description: 'Self-service restaurant system deployed in 10 branches. Order time cut from 5 to 2 minutes.',
      impact: '10 restaurant branches',
      metrics: '60% faster ordering',
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      category: 'Food & Beverage'
    },
    {
      title: 'Florida System',
      description: 'Agri-tech platform managing over 100,000 animals with predictive analytics.',
      impact: '100K+ animals managed',
      metrics: 'Predictive analytics',
      icon: BarChart,
      color: 'from-emerald-500 to-emerald-600',
      category: 'Agriculture'
    },
    {
      title: 'Investo',
      description: 'Investment platform managing $10M+ in assets with personalized alerts.',
      impact: '$10M+ assets managed',
      metrics: 'Personalized alerts',
      icon: DollarSign,
      color: 'from-gold-500 to-gold-600',
      category: 'Finance'
    },
    {
      title: 'Change Me',
      description: 'Clinic app with 1,200+ monthly bookings. Reduced cancellations to 8%.',
      impact: '1,200+ monthly bookings',
      metrics: '8% cancellation rate',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      category: 'Healthcare'
    },
    {
      title: 'Dar Al Ajooz',
      description: 'Quran memorization app with 5,000+ users and progress tracking.',
      impact: '5,000+ active users',
      metrics: 'Progress tracking',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600',
      category: 'Education'
    },
    {
      title: 'YesCap',
      description: 'Taxi booking app with 100K+ monthly rides. Dynamic pricing improved profits by 20%.',
      impact: '100K+ monthly rides',
      metrics: '20% profit increase',
      icon: Zap,
      color: 'from-red-500 to-red-600',
      category: 'Transportation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gold-50/20 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            {t('projects.title').split(' ').map((word, index) => (
              <span key={index} className={index === 1 ? 'text-gold-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
            whileHover={{ scale: 1.01 }}
          >
            {t('projects.subtitle')}
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ModernCard key={project.title} delay={0.2 + index * 0.1} gradient>
              <div className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon className="text-white" size={28} />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 cursor-pointer"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>

                {/* Category Badge */}
                <motion.span
                  className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full mb-4 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.category}
                </motion.span>

                {/* Content */}
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-6 leading-relaxed flex-grow"
                  whileHover={{ scale: 1.01 }}
                >
                  {project.description}
                </motion.p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Impact:</span>
                    <span className="font-semibold text-gray-700">{project.impact}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Key Metric:</span>
                    <span className="font-semibold text-gold-600">{project.metrics}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-auto">
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      className={`bg-gradient-to-r ${project.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center font-medium">Project Completed</p>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={1.5} className="mt-20 text-center">
          <ModernCard gradient className="p-12">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Have a Project in Mind?
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              whileHover={{ scale: 1.01 }}
            >
              Let's discuss how I can help transform your business challenges into successful digital solutions.
            </motion.p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                Start Your Project
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </motion.button>
          </ModernCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;