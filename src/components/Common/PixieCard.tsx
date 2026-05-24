import React from 'react';
import { motion } from 'framer-motion';
import styles from './PixieCard.module.css';

export const PixieCard = ({ 
  children, 
  isVisible, 
  className = "" 
}: { 
  children: React.ReactNode, 
  isVisible: boolean,
  className?: string
}) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
    animate={isVisible ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
    transition={{ duration: 1, ease: "circOut" }}
    className={`${styles.card} ${className}`}
  >
    {children}
  </motion.div>
);
