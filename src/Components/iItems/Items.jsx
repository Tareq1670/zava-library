import React from "react";

const Items = ({ data,addToCard }) => {
    const {
        author,
        title,
        description,
        image_url,
        category,
        price,
        availability,
    } = data;

    return (
        <div className="group relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-green-700 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/30">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
                    src={image_url}
                    alt={title}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Category */}
                <span className="absolute top-3 left-3 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 text-gray-200 relative z-10">
                <h2 className="text-xl font-bold mb-1 text-white group-hover:text-green-400 transition">
                    {title}
                </h2>

                {author && (
                    <p className="text-sm text-gray-400 mb-1">✍️ {author}</p>
                )}

                <p className="text-gray-400 text-sm mb-4 line-clamp-2 bangla_btn">
                    {description}
                </p>
                <p
                    className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full 
                      ${
                          availability === "In Stock"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                >
                    {availability}
                </p>
                {/* Footer */}
                <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-semibold text-green-400">
                        ৳{price}
                    </span>

                    <button onClick={() => addToCard(data)} className="relative px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-green-600 hover:scale-105">
                        <span className="relative z-10 bangla_btn cursor-pointer">
                            কিনুন
                        </span>
                        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Items;
