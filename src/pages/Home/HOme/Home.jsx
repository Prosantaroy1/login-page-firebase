import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-5 gap-4 bg-slate-600 p-10'>
            <div className='bg-red-600 grid col-span-1 h-96 overscroll-contain '>
                    <h3>This is left side</h3>
                    <h3>This is left side</h3>
                    <h3>This is left side</h3>
            </div>
            <div className='bg-red-600 grid col-span-3 h-full'>
                <h3>This is left side</h3>
            </div>
            <div className='bg-red-600 grid col-span-1 h-80 overscroll-y-contain '>
                <h3>This is left side</h3>
            </div>
        </div>
    );
};

export default Home;