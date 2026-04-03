export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ... props 
}) {
  const baseStyles = 'font-medium transition-smooth rounded-full'
  
  const variants = {
    primary: 'bg-grove-dark text-white hover:bg-grove-dark-light',
    secondary: 'bg-white text-grove-dark border-2 border-grove-dark hover:bg-grove-teal-light',
    outline: 'border-2 border-grove-dark text-grove-dark hover:bg-grove-teal-light',
    ghost: 'text-grove-dark hover:bg-grove-teal-light'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}