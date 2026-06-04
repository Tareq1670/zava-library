import Navbar from "../Navbar/Navbar";
import Content from "../Cotent/Content";
import { Suspense, use, useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";
import Card from "../Card/Card";

const fetchData = fetch("allData.json").then((res) => res.json());

const MainContainer = ({ adminLogin }) => {
    const dataFetch = use(fetchData);
    const [dataAll, setData] = useState(dataFetch.items);
    const [admin, setAdmin] = useState(false);
    const [card, setCard] = useState([]);

    const adminButton = (isAdmin) => {
        setAdmin(isAdmin);
    };
    const cardShow = () =>{
        console.log("card button click");
    }
    const addToCard = (data) => {
        setCard((prev) => {
            const isExist = prev.find((item) => item.id === data.id);

            if (isExist) {
                return prev.map((item) =>
                    item.id === data.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [{ ...data, quantity: 1 }, ...prev];
            }
        });
    };


    console.log(card);
    return (
        <div className="container mx-auto px-1 sm:px-0 flex-none">
            <Navbar
                adminButton={adminButton}
                card={card}
                adminLogin={adminLogin}
                cardShow={cardShow}
            />
            {isCard ? (
                <Card />
            ) : (
                <Suspense fallback={<h2>Loading...</h2>}>
                    {admin ? (
                        <AdminPanel dataAll={dataAll} setData={setData} />
                    ) : (
                        <Content dataAll={dataAll} addToCard={addToCard} />
                    )}
                </Suspense>
            )}
        </div>
    );
};

export default MainContainer;
