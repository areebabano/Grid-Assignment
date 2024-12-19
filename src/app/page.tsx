export default function Page() {
  return (
  <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
      {/* Header */}
      <div className="bg-purple-700 col-span-3 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
        Header
      </div>

      {/* Sidebar */}
      <div className="bg-green-500 row-span-2 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
        Sidebar
      </div>

      {/* Content-1 */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 col-span-2 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
        Content-1
      </div>

      {/* Content-2 */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
        Content-2
      </div>

      {/* Content-3 */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
        Content-3
      </div>

      {/* Footer */}
      <div className="bg-pink-600 col-span-3 text-[36px] font-bold text-center flex items-center justify-center border-2 border-white">
        Footer
      </div>
    </div>
  );
}
