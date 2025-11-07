import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

export function StatsCard({ icon: Icon, value, label, description, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="theme-card p-6 text-center group hover:scale-105 transition-all duration-300"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Icon */}
      <div 
        className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
        style={{
          background: 'var(--gradient-primary)',
          color: 'white'
        }}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Value */}
      <div 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {value}
      </div>

      {/* Label */}
      <div 
        className="font-semibold mb-2"
        style={{ color: 'var(--text-secondary)' }}
      >
        {label}
      </div>

      {/* Description */}
      {description && (
        <div 
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </div>
      )}

      {/* Hover Effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          borderRadius: '12px'
        }}
      />
    </motion.div>
  );
}