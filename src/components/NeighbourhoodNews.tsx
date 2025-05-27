const news = [
  {
    id: 1,
    business: "Pixel Boss",
    title: "Pixel Boss launch their new software SWiiFT!",
    image: "https://3143.pixelboss.io/uploads/images/pixelboss.png"
  },
  {
    id: 2,
    business: "LUCI DI BELLA",
    title: "AW25 designs now in store!",
    image: "https://3143.pixelboss.io/uploads/images/luci.png"
  },
  {
    id: 3,
    business: "Armadale Cellars",
    title: "Armadale Cellars top wine picks for 2025!",
    image: "https://3143.pixelboss.io/uploads/images/cellars.png"
  }
]

const NeighbourhoodNews = () => {
  return (
    <div className="container mx-auto px-4 pt-0 pb-0">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-8">
        <h2 className="text-2xl font-bold uppercase">Neighbourhood News</h2>
        <a className="text-sm uppercase" href="/stories">VIEW ALL</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[45px]">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col h-full group">
            <div className="flex w-full">
              <div className="w-[15px] bg-[rgb(185,255,108)]"></div>
              <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                <span className="text-sm uppercase font-bold">{item.business}</span>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <a href={`/stories/story-${item.id}`}>
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                />
              </a>
            </div>
            <div className="py-4 h-[120px] flex flex-col justify-between">
              <h3 className="text-base font-medium leading-tight self-start line-clamp-2 h-[40px]">
                {item.title}
              </h3>
              <a href={`/stories/story-${item.id}`}>
                <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer">
                  READ MORE
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NeighbourhoodNews
