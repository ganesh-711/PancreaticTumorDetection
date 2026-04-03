export default function Input({ label, error, ... props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-lg border-2 transition-colors
          focus:outline-none focus:border-blue-600
          ${error ? 'border-red-500' : 'border-gray-200'}
        `}
        {... props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}