import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ModernCard from '../components/ModernCard';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '120+', label: t('home.stats.projects'), icon: TrendingUp },
    { number: '80+', label: t('home.stats.clients'), icon: Star },
    { number: '30', label: t('home.stats.industries'), icon: Sparkles },
    { number: '40+', label: t('home.stats.products'), icon: ArrowRight },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gold-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gold-400/5 to-transparent rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Profile Image with Enhanced Golden Ring */}
            <AnimatedSection delay={0.2}>
              <div className="mb-12 flex justify-center">
                <div className="relative">
                  <motion.div
                    className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 animate-glow"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-2">
                      <img
                        src="/hero.jpg"
                        alt="Ahmed El-Gamal"
                        className="w-full h-full rounded-full object-cover shadow-2xl"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity }
                    }}
                    className="absolute -top-4 -right-4"
                  >
                    <Star className="text-gold-500 drop-shadow-lg" size={32} />
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-2 -left-4"
                  >
                    <Sparkles className="text-gold-400" size={24} />
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            {/* Name and Title */}
            <AnimatedSection delay={0.4} direction="left">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gold-600 to-gray-900 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {t('home.title')}
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6} direction="right">
              <motion.h2
                className="text-2xl md:text-4xl text-gray-600 mb-8 font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {t('home.subtitle')}
              </motion.h2>
            </AnimatedSection>

            {/* Enhanced Description */}
            <AnimatedSection delay={0.8}>
              <motion.p
                className="text-lg md:text-xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {t('home.description')}
              </motion.p>
            </AnimatedSection>

            {/* Enhanced CTA Button */}
            <AnimatedSection delay={1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {t('home.cta')}
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ModernCard key={stat.label} delay={1.2 + index * 0.1} gradient>
                <div className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-white" size={24} />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 1.4 + index * 0.1, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 z-40">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 2, duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className="text-white rotate-[-90deg]" size={20} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;