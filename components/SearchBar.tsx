import React from 'react';
import { FILTER_CATEGORIES, CATEGORY_COLORS } from '../constants';
import { ALL_CATEGORIES } from '../types';
import type { MicrobeCategory } from '../types';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

interface FilterButtonProps {
    category: string;
    activeCategory: string;
    onClick: (category: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, activeCategory, onClick }) => {
    const isActive = activeCategory === category;
    
    // Default styles for 'Todos' or other non-category buttons
    let buttonClasses = `bg-secondary-100 text-secondary-700 hover:bg-secondary-200 border-secondary-200`;
    if (isActive) {
        buttonClasses = `bg-primary-500 text-white border-primary-500 transform -translate-y-0.5 shadow-lg shadow-primary-500/25`;
    }

    // Category-specific colors
    if (category !== ALL_CATEGORIES) {
        const colors = CATEGORY_COLORS[category as MicrobeCategory];
        if (isActive) {
            buttonClasses = `${colors.activeBg} text-white border-current transform -translate-y-0.5 shadow-lg`;
        } else {
            buttonClasses = `${colors.bg} ${colors.text} ${colors.hoverBg} border-transparent`;
        }
    }

    return (
        <button
            onClick={() => onClick(category)}
            className={`filter-btn px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 ease-out border-2 ${buttonClasses} hover:scale-105 active:scale-95`}
        >
            {category}
        </button>
    );
};

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, activeCategory, onCategoryChange }) => {
    return (
        <nav className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 sticky top-4 z-20 animate-slide-up">
            <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Search Input */}
                <div className="relative w-full lg:w-1/3">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Buscar por nombre o código (ej. A1)..."
                        value={searchTerm}
                        onChange={onSearchChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/50 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 placeholder-secondary-400 text-secondary-700 font-medium"
                    />
                </div>

                {/* Filter Buttons */}
                <div id="filterContainer" className="flex flex-wrap justify-center gap-3">
                    <FilterButton 
                        category={ALL_CATEGORIES}
                        activeCategory={activeCategory}
                        onClick={onCategoryChange}
                    />
                    {FILTER_CATEGORIES.map(cat => (
                        <FilterButton 
                            key={cat}
                            category={cat}
                            activeCategory={activeCategory}
                            onClick={onCategoryChange}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};