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
            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover border border-white/20 animate-slide-up"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} shadow-sm`}>
                        {microbe.category}
                    </span>
                    <span className="font-mono font-semibold text-sm text-secondary-500 bg-secondary-100 px-2 py-1 rounded-lg">
                        {microbe.code}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {microbe.name}
                </h3>
                
                {/* Scientific name */}
                <p className="text-sm italic text-secondary-600 mb-4 font-medium">
                    {microbe.scientificName}
                </p>

                {/* Conflict */}
                <div className="flex-grow">
                    <p className="text-secondary-700 text-sm leading-relaxed">
                        <span className="font-semibold text-secondary-800">Conflicto Base:</span> {microbe.conflictoBase}
                    </p>
                </div>

                {/* Action button */}
                <div className="mt-6 pt-4 border-t border-secondary-100">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                            Explorar detalles
                        </span>
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-sm font-bold">→</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </div>
    );
};