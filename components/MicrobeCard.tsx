import React from 'react';
import type { Microbe } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface MicrobeCardProps {
    microbe: Microbe;
    onSelect: (microbe: Microbe) => void;
}

export const MicrobeCard: React.FC<MicrobeCardProps> = ({ microbe, onSelect }) => {
    const colors = CATEGORY_COLORS[microbe.category];

    return (
        <div
            onClick={() => onSelect(microbe)}
            className="group relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover border border-white/20 animate-slide-up h-64 md:h-72"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative p-4 md:p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-3 md:mb-4 flex-shrink-0">
                    <span className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} shadow-sm`}>
                        {microbe.category}
                    </span>
                    <span className="font-mono font-semibold text-xs md:text-sm text-secondary-500 bg-secondary-100 px-2 py-1 rounded-lg">
                        {microbe.code}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-secondary-800 mb-2 group-hover:text-primary-700 transition-colors duration-300 flex-shrink-0">
                    {microbe.name}
                </h3>
                
                {/* Scientific name */}
                <p className="text-xs md:text-sm italic text-secondary-600 mb-3 md:mb-4 font-medium flex-shrink-0">
                    {microbe.scientificName}
                </p>

                {/* Conflict */}
                <div className="flex-grow min-h-0">
                    <p className="text-secondary-700 text-xs md:text-sm leading-relaxed line-clamp-4">
                        <span className="font-semibold text-secondary-800">Conflicto Base:</span> {microbe.conflictoBase}
                    </p>
                </div>

                {/* Action button */}
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-secondary-100 flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                            Explorar detalles
                        </span>
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xs md:text-sm font-bold">→</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl"></div>
        </div>
    );
};