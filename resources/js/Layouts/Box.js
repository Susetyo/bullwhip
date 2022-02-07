export default function Box({children}){
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-cyan-500 overflow-hidden shadow-sm sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}