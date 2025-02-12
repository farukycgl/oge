import React from 'react'

const EditorsProductsCard = () => {
    return (
        <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center'>
            <h1>EDITOR'S PICK</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid dicta, perspiciatis optio harum ex.</p>
        </div>
        {[...Array(4)].map((product, index) => (
            <div 
                key={index}
                className="w-[200px] h-[300px] relative bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/200/300?random=${index})` }}
            >
                <button className='absolute bottom-2 left-2 px-2 py-1 text-xs bg-white text-black rounded'>
                    MEN
                </button>
            </div>
        ))}
    </div>
    )
}

export default EditorsProductsCard;