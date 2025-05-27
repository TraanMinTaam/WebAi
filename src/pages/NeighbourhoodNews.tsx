import { Link } from 'react-router-dom';

interface NewsItem {
  id: string;
  brand: string;
  title: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: "story-1",
    brand: "PIXEL BOSS",
    title: "Pixel Boss launch their new software SWiiFT!",
    image: "https://3143.pixelboss.io/uploads/images/pixelboss.png"
  },
  {
    id: "story-2",
    brand: "LUCI DI BELLA",
    title: "AW25 designs now in store!",
    image: "https://3143.pixelboss.io/uploads/images/luci.png"
  },
  {
    id: "story-3",
    brand: "ARMADALE CELLARS",
    title: "Armadale Cellars top wine picks for 2025!",
    image: "https://3143.pixelboss.io/uploads/images/cellars.png"
  }
];

interface Props {
  showViewAll?: boolean;
}

const NeighbourhoodNews = ({ showViewAll = true }: Props) => {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <div className="container mx-auto px-4">
        {/* Header with View All */}
        <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-4">
          <div className="flex items-center">
            <div className="w-2 bg-[rgb(185,255,108)] h-8 mr-4"></div>
            <h1 className="text-3xl font-serif tracking-wide text-[#080d1e]">
              Neighbourhood News
            </h1>
          </div>
          {showViewAll && (
            <Link 
              to="/stories" 
              className="text-[#080d1e] hover:text-gray-600 transition-colors uppercase text-sm tracking-wider"
            >
              View All
            </Link>
          )}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[45px]">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col h-full group mb-10">
              {/* Brand Header */}
              <div className="flex w-full">
                <div className="w-[15px] bg-[rgb(185,255,108)]"></div>
                <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                  <span className="text-sm uppercase font-bold">{item.brand}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <Link to={`/stories/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>

              {/* Title and Read More */}
              <div className="py-4 flex flex-col justify-between h-[120px]">
                <h3 className="text-base font-medium leading-tight line-clamp-2 mb-4">
                  {item.title}
                </h3>
                <Link 
                  to={`/stories/${item.id}`}
                  className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeighbourhoodNews; 