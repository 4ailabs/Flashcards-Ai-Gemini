import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-8 h-8 border-4 border-stone-200 border-t-[#8D6E63] rounded-full animate-spin"></div>
        </div>
    );
};