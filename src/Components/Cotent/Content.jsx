import { useState } from "react";
import Items from "../iItems/Items";

const Content = ({ dataAll,addToCard }) => {
    

    const [data, setData] = useState(dataAll);
    const [btn, setBtn] = useState("all");
    const [loading, setLoading] = useState(false);

    const allData  = dataAll

    const handleFilter = (type) => {
        setLoading(true); // start loading

        setTimeout(() => {
            let filteredData = allData;

            if (type === "eng") {
                filteredData = allData.filter(
                    (item) => item.category === "English Books",
                );
            } else if (type === "ban") {
                filteredData = allData.filter(
                    (item) => item.category === "Bangla Books",
                );
            } else if (type === "sta") {
                filteredData = allData.filter(
                    (item) => item.category === "Stationery",
                );
            } else if (type === "oth") {
                filteredData = allData.filter(
                    (item) => item.category === "Others",
                );
            }

            setData(filteredData);
            setBtn(type);
            setLoading(false);
        }, 500);
    };
    return (
        <div>
            <div className=" buttons flex flex-wrap gap-2 my-6 mt-18 pt-5">
                <button
                    onClick={() => handleFilter("all")}
                    className={`btn ${btn === "all" ? "btn-success" : "btn-outline"}`}
                >
                    All
                </button>

                <button
                    onClick={() => handleFilter("eng")}
                    className={`btn ${btn === "eng" ? "btn-success" : "btn-outline"}`}
                >
                    English
                </button>

                <button
                    onClick={() => handleFilter("ban")}
                    className={`btn ${btn === "ban" ? "btn-success" : "btn-outline"}`}
                >
                    Bangla
                </button>

                <button
                    onClick={() => handleFilter("sta")}
                    className={`btn ${btn === "sta" ? "btn-success" : "btn-outline"}`}
                >
                    Stationery
                </button>

                <button
                    onClick={() => handleFilter("oth")}
                    className={`btn ${btn === "oth" ? "btn-success" : "btn-outline"}`}
                >
                    Others
                </button>
            </div>

            <div>
                <h2 className="text-3xl font-semi-bold bangla_btn">{btn === "all" ? "সব আইটেম" :
                    btn === "eng"? "ইংলিশ বই" : btn === "ban" ? "বাংলা বই":btn=== "sta" ? "স্টেশনারি": btn === "oth" ? "অন্যান্য" :""}</h2>
            </div>
            {/* 🔥 Loading condition */}
            {loading ? (
                <h2 className="text-center font-bold text-xl">Loading...</h2>
            ) : (
                <div id="#home" className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 my-4">
                    {data.map((item) => (
                        <Items key={item.id} data={item} addToCard={addToCard}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Content;
