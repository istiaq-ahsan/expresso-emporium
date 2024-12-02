import { useLoaderData } from "react-router-dom";
import AllCoffee from "../components/AllCoffee";
import Banner from "../components/Banner";
import { useState } from "react";

const HomePage = () => {
    const allExpressoData = useLoaderData();
    const [coffees, setCoffees] = useState(allExpressoData);

    return (
        <div>
            <Banner></Banner>
            <AllCoffee allExpressoData={allExpressoData}
                coffees={coffees}
                setCoffees={setCoffees}
            ></AllCoffee>
        </div>
    );
};

export default HomePage;