import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Workflow, Settings, Palette, Brain, Users, MessageSquare, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Business Documentation',
      icon: FileText,
      skills: ['BRD', 'SRS', 'FRD', 'User Stories']
    },
    {
      category: 'Modeling & Visualization',
      icon: Workflow,
      skills: ['UML Diagrams', 'Flowcharts', 'Wireframes']
    },
    {
      category: 'Product Tools',
      icon: Settings,
      skills: ['Jira', 'Trello', 'TFS', 'ClickUp']
    },
    {
      category: 'Design Tools',
      icon: Palette,
      skills: ['Figma', 'Visily']
    }
  ];

  const softSkills = [
    { name: 'Strategic Planning', icon: Target },
    { name: 'Analytical Thinking', icon: Brain },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Agile Product Ownership', icon: Settings }
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
            Technical & Strategic <span className="text-gold-500">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Technical Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-200 transition-colors duration-300">
                  <category.icon className="text-gold-500" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-center text-gray-700 font-medium hover:bg-gold-50 hover:text-gold-700 transition-colors duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Core Competencies
          </motion.h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-200 transition-colors duration-300">
                  <skill.icon className="text-gold-500" size={28} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Progress Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Proficiency Overview
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'Business Analysis', level: 95 },
              { skill: 'Product Management', level: 90 },
              { skill: 'Agile Methodology', level: 88 },
              { skill: 'Stakeholder Management', level: 92 },
              { skill: 'Documentation', level: 96 },
              { skill: 'Strategic Planning', level: 89 }
            ].map((item, index) => (
              <div key={item.skill} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{item.skill}</span>
                  <span className="text-gold-600 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                    className="bg-gradient-to-r from-gold-400 to-gold-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;