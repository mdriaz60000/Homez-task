import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState("All");

  const [minPrice, setMinPrice] = useState("$0");
  const [maxPrice, setMaxPrice] = useState("$5,000");

  const tabs = ["All", "For Sale", "For Rent"];
  const priceOptions = [
    "$0",
    "$500",
    "$1,000",
    "$2,000",
    "$5,000",
    "$10,000",
    "$20,000",
  ];

  return (
    <div className="">
      {/* Search Interface */}
      <div className="relative md:-mt-24 ">
        <div className="">
          {/* Navigation Tabs */}
          <div className="  ">
            <div className="flex space-x-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` py-4 px-4  font-medium text-sm transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-secondary underline  underline-offset-2 text-secondary-foreground"
                      : "text-muted-foreground bg-accent "
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-b-xl shadow-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">
              {/* Search Input */}
              <div className="">
                <label className="block font-medium text-secondary-foreground mb-2">
                  Search
                </label>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter keywords"
                    className=" pr-4 py-3 rounded-lg  transition-all "
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-secondary-foreground mb-2">
                  Looking For
                </label>
                <input
                  type="text"
                  placeholder="Type"
                  className="  py-3   rounded-lg  transition-all "
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Location"
                    className="  py-3   rounded-lg  transition-all "
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <div className="flex space-x-2">
                  <select
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="flex-1 px-3 py-3 transition-all duration-200 appearance-none bg-white text-sm"
                  >
                    {priceOptions.map((price) => (
                      <option key={price} value={price}>
                        {price}
                      </option>
                    ))}
                  </select>
                  <select
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="flex-1 px-3 py-3 transition-all duration-200 appearance-none bg-white text-sm"
                  >
                    {priceOptions.map((price) => (
                      <option key={price} value={price}>
                        {price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Advanced & Search Button */}
              <div className="flex space-x-2">
                <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <span className="ml-2 text-sm text-gray-600">Advanced</span>
                </button>
                <button className="flex items-center justify-center px-6 py-3 bg-primary text-secondary  transform hover:scale-105 transition-all duration-200 shadow-lg">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
