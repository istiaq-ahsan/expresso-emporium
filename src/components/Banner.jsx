import React from 'react';

const Banner = () => {
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co.com/7Rk9SLJ/6.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scaleX(-1)',
            height: '800px',
        }}
            className="flex items-center">
            <div style={{
                transform: 'scaleX(-1)', // Revert the flip for children
            }} className="flex items-center w-4/5 mx-auto">

                <div className="w-[50%]"></div>
                <div className="text-white w-[50%] space-y-4">
                    <h1 className="font-rancho text-5xl"> Would you like a Cup of Delicious Coffee?</h1>
                    <p className="text-base">It's coffee time - Sip & Savor - Relaxation in every sip!
                        Get the nostalgia back!! Your companion of every moment!!!
                        Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-orange-300 rounded-none">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;