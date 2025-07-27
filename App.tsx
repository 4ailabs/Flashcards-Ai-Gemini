import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { MicrobeGrid } from './components/MicrobeGrid';
import { MicrobeDetailModal } from './components/MicrobeDetailModal';
import { ProtocolModal } from './components/ProtocolModal';
import type { Microbe } from './types';
import { ALL_CATEGORIES } from './types';
import { MICROBES_DATA } from './constants';

function App(): React.ReactNode {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);
    const [filteredMicrobes, setFilteredMicrobes] = useState<Microbe[]>(MICROBES_DATA);
    const [selectedMicrobe, setSelectedMicrobe] = useState<Microbe | null>(null);
    const [isProtocolModalOpen, setIsProtocolModalOpen] = useState(false);

    const filterMicrobes = useCallback(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const newFilteredMicrobes = MICROBES_DATA.filter(microbe => {
            const matchesCategory = activeCategory === ALL_CATEGORIES || microbe.category === activeCategory;
            const matchesSearch = microbe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                                  microbe.code.toLowerCase().includes(lowerCaseSearchTerm);
            return matchesCategory && matchesSearch;
        });
        setFilteredMicrobes(newFilteredMicrobes);
    }, [searchTerm, activeCategory]);

    useEffect(() => {
        filterMicrobes();
    }, [searchTerm, activeCategory, filterMicrobes]);

    const handleSelectMicrobe = (microbe: Microbe) => {
        setSelectedMicrobe(microbe);
    };

    const handleCloseModal = () => {
        setSelectedMicrobe(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
            <div className="container mx-auto px-4 py-6 md:py-8 lg:px-8 lg:py-12 max-w-7xl flex-grow">
                <Header onOpenProtocol={() => setIsProtocolModalOpen(true)} />

                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={(e) => setSearchTerm(e.target.value)}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <main className="mt-8 md:mt-12">
                    <MicrobeGrid
                        microbes={filteredMicrobes}
                        onSelectMicrobe={handleSelectMicrobe}
                    />
                </main>

                {selectedMicrobe && (
                    <MicrobeDetailModal
                        microbe={selectedMicrobe}
                        onClose={handleCloseModal}
                    />
                )}

                <ProtocolModal
                    isOpen={isProtocolModalOpen}
                    onClose={() => setIsProtocolModalOpen(false)}
                />
            </div>

            {/* Footer with Author Credits */}
            <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-12">
                <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    BioFlashcardsMaster AI
                                </p>
                                <p className="text-xs text-gray-600">
                                    Asistente de Microbioenergética
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-800">
                                    Dr. Miguel Ojeda Ríos
                                </p>
                                <p className="text-xs text-gray-600">
                                    Creador de Microbioenergética: El código emocional, energético y simbólico de los microbios
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-center text-gray-500">
                            © 2024 BioFlashcardsMaster AI. Basado en la investigación y metodología del Dr. Miguel Ojeda Ríos.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;