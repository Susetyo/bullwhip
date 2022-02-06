import React from 'react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-900">
            <h1 className='text-2xl text-white'>Bullwhip Effect</h1>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-cyan-500 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
