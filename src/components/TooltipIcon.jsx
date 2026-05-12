import { motion } from 'framer-motion';

const TooltipIcon = ({ href, icon: Icon, label, color = "#4EC6F1" }) => {
  return (
    <div className="relative group inline-block">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{ scale: 1.2, y: -3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="text-accentLight hover:text-white hover:shadow-md hover:shadow-accentLight/30 transition-colors duration-300 text-2xl block"
      >
        <Icon />
      </motion.a>
      
      <span
        className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10"
        style={{
          backgroundColor: '#1A1A1A',
          color: color,
          boxShadow: `0 0 10px ${color}40`
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default TooltipIcon;