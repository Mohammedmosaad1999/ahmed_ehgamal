import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Target, Workflow, Users, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

const BusinessAnalysis = () => {
  const services = [
    {
      icon: Search,
      title: 'Stakeholder Discovery',
      description: 'Identifying and engaging key stakeholders to understand business needs and objectives.'
    },
    {
      icon: FileText,
      title: 'Requirement Elicitation',
      description: 'Gathering, analyzing, and documenting detailed business and functional requirements.'
    },
    {
      icon: Target,
      title: 'Feature Prioritization',
      description: 'Strategic prioritization of features based on business value and user impact.'
    },
    {
      icon: Workflow,
      title: 'Documentation (BRD, FRD, SRS)',
      description: 'Creating comprehensive documentation to guide development and ensure clarity.'
    },
    {
      icon: Users,
      title: 'Sprint Planning & Product Ownership',
      description: 'Leading agile ceremonies and managing product backlogs for optimal delivery.'
    },
    {
      icon: Lightbulb,
      title: 'MVP Definition',
      description: 'Defining minimum viable products that deliver maximum business value.'
    },
    {
      icon: TrendingUp,
      title: 'Wireframes & Journey Mapping',
      description: 'Creating visual representations of user flows and system interactions.'
    }
  ];

  const caseHighlights = [
    {
      project: 'Fast Taxi',
      achievement: 'Reduced failed bookings by 22%',
      description: 'Optimized booking flow and implemented smart matching algorithms'
    },
    {
      project: 'Investo',
      achievement: 'Smart alerts boosted investor engagement',
      description: 'Designed personalized notification system for investment opportunities'
    },
    {
      project: 'Florida',
      achievement: 'Fully automated daily farm operations',
      description: 'Streamlined agricultural processes with predictive analytics integration'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Business <span className="text-gold-500">Analysis</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            "Transforming requirements into working systems through strategic analysis and agile product design."
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        {/* Core Services */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Core Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                  <service.icon className="text-gold-500" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Case Highlights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.project}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-6 border-2 border-gold-200 rounded-lg hover:border-gold-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-gold-500" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.project}
                </h3>
                
                <p className="text-gold-600 font-semibold mb-3">
                  {highlight.achievement}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            My Analysis Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding business context and stakeholder needs' },
              { step: '02', title: 'Analysis', description: 'Deep dive into requirements and process mapping' },
              { step: '03', title: 'Design', description: 'Creating solutions and defining user experiences' },
              { step: '04', title: 'Delivery', description: 'Agile implementation with continuous feedback' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {phase.description}
                </p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessAnalysis;