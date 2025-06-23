import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  delay?: number;
}

const ModernCard: React.FC<ModernCardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      } : {}}
      className={`
        relative overflow-hidden rounded-2xl
        ${gradient 
          ? 'bg-gradient-to-br from-white via-gray-50 to-gold-50' 
          : 'bg-white/80 backdrop-blur-sm'
        }
        border border-gray-200/50 shadow-lg hover:shadow-2xl
        transition-all duration-500 ease-out
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/5 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-1000
        group
        ${className}
      `}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 via-transparent to-gold-400/10 blur-xl" />
      </div>
    </motion.div>
  );
};

export default ModernCard;