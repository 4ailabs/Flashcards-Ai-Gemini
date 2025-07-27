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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="container mx-auto px-4 py-6 md:py-8 lg:px-8 lg:py-12 max-w-7xl">
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
        </div>
    );
}

export default App;