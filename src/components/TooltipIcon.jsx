const TooltipIcon = ({ href, icon: Icon, label, color = "#4EC6F1" }) => {
  return (
    <div className="relative group inline-block">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-accentLight hover:text-white hover:scale-110 hover:shadow-md hover:shadow-accentLight/30 transition duration-300 text-2xl"
      >
        <Icon />
      </a>
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap"
        style={{
          backgroundColor: '#1A1A1A',
          color: color,
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default TooltipIcon;
