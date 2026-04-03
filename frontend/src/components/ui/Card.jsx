export default function Card({ children, className = '', hoverEffect = true }) {
  return (
    <div 
      className={`
        bg-white rounded-xl border border-gray-200 p-8
        ${hoverEffect ? 'hover:shadow-lg hover:border-grove-teal transition-smooth' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}