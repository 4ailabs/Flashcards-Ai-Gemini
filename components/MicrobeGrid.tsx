import React from 'react';
import type { Microbe } from '../types';
import { MicrobeCard } from './MicrobeCard';

interface MicrobeGridProps {
    microbes: Microbe[];
    onSelectMicrobe: (microbe: Microbe) => void;
}

export const MicrobeGrid: React.FC<MicrobeGridProps> = ({ microbes, onSelectMicrobe }) => {
    if (microbes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 md:py-16 px-4">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <svg className="w-8 h-8 md:w-12 md:h-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-secondary-700 mb-2 text-center">No se encontraron resultados</h3>
                <p className="text-secondary-500 text-center max-w-md text-sm md:text-base">
                    No se encontraron microbios que coincidan con tu búsqueda. 
                    Intenta con otros términos o cambia los filtros.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6 md:space-y-8 px-4 md:px-0">
            {/* Results count */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                    <span className="text-secondary-600 font-medium text-sm md:text-base">
                        {microbes.length} {microbes.length === 1 ? 'microbio encontrado' : 'microbios encontrados'}
                    </span>
                </div>
            </div>

            {/* Grid */}
            <div id="microbeGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {microbes.map((microbe, index) => (
                    <div 
                        key={microbe.code}
                        className="animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <MicrobeCard
                            microbe={microbe}
                            onSelect={onSelectMicrobe}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};