import React from 'react';

const EditorsProductsCard = () => {

    const buttonTexts = ["MEN", "WOMEN", "ACCESSORIES", "KIDS"];


    return (
        <div className='flex flex-col items-center gap-8 pt-15 bg-[#FAFAFA] md:pl-10'>
            <div className='flex flex-col items-center text-center pb-10'>
                <h1>EDITOR'S PICK</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid dicta, perspiciatis optio harum ex.</p>
            </div>
            <div className='flex flex-col items-center gap-5 md:flex md:flex-row'> 
                {[...Array(4)].map((product, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md overflow-hidden flex flex-col relative"
                    >
                        <img
                            src={`https://picsum.photos/600/400?random=1${index}`}
                            alt={`Image ${index}`}
                            className="w-full h-64 object-cover"
                        />
                        <button className='absolute bottom-4 left-4 px-4 py-2 text-xs bg-white text-black rounded font-bold'>
                            {buttonTexts[index]}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditorsProductsCard;
