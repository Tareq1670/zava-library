import React, { useState } from "react";

const AdminPanel = ({ dataAll, setData }) => {
    const [ctg, setCtg] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");

    const categoryOptions = ["Others", "Bangla Books", "Stationery", "English Books"];

    const addData = () => {
        const urlPattern = /^(http|https):\/\/[^ "]+$/;

        if (!ctg || !url || !title || !des || !price) {
            alert("All fields are required!");
            return;
        }
        if (!urlPattern.test(url)) {
            alert("Please enter a valid URL (starting with http or https)!");
            return;
        }
        if (isNaN(price) || Number(price) <= 0) {
            alert("Price must be a valid number greater than 0!");
            return;
        }

        const newData = {
            id : dataAll.length + 1,
            title : title,
            author : author,
            category : ctg,
            price : price,
            availability : "In Stock",
            description : des,
            image_url : url
        }
        
        setData([newData, ...dataAll])

        setCtg("");
        setUrl("");
        setTitle("");
        setDes("");
        setAuthor("");
        setPrice("");

    };

    return (
        <div className="mt-16 pt-8 flex justify-center">
            <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Input Your New Data
                </h2>

                <form className="space-y-4">
                    {/* Category Select */}
                    <div>
                        <label
                            className="block text-gray-300 mb-1"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            value={ctg}
                            onChange={(e) => setCtg(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="">Select Category</option>
                            {categoryOptions.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* ID (Auto) */}
                    <div>
                        <label className="block text-gray-300 mb-1" htmlFor="id">
                            ID (Auto)
                        </label>
                        <input
                            value={dataAll.length + 1}
                            id="id"
                            type="text"
                            disabled
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 cursor-not-allowed"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label
                            className="block text-gray-300 mb-1"
                            htmlFor="imageUrl"
                        >
                            Image URL
                        </label>
                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            id="imageUrl"
                            type="text"
                            placeholder="Input Your Valid Image URL"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Title */}
                    <div>
                        <label
                            className="block text-gray-300 mb-1"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                            type="text"
                            placeholder="Input Your Valid Title"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            className="block text-gray-300 mb-1"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            id="description"
                            placeholder="Input Your Valid Description"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none h-24"
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label
                            className="block text-gray-300 mb-1"
                            htmlFor="author"
                        >
                            Author
                        </label>
                        <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            id="author"
                            type="text"
                            placeholder="Author Name (Optional)"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label
                            className="block text-gray-300 mb-1"
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            id="price"
                            type="number"
                            placeholder="Price"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addData();
                        }}
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
                    >
                        Submit Data
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminPanel;