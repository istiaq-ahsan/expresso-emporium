import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const AllCoffee = ({ allExpressoData, coffees, setCoffees }) => {



    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className='text-center space-y-3'>
                <h3>---sip & savor---</h3>
                <h1 className='font-rancho font-bold text-4xl'>Our Popular Products</h1>
                <Link to="/addCoffee" className='btn bg-orange-300'>Add Coffee</Link>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-10'>
                {
                    allExpressoData.map(expresso => <CoffeeCard
                        key={expresso._id}
                        expresso={expresso}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default AllCoffee;