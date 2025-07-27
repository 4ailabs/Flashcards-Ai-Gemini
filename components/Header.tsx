import React from 'react';

interface HeaderProps {
    onOpenProtocol: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProtocol }) => {
    return (
        <header className="text-center mb-12 animate-fade-in">
            {/* Hero Section */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative glass-effect rounded-3xl p-8 md:p-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">🧬</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight">
                        BioFlashcardsMaster AI
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        Asistente de Microbioenergética basado en los principios del Dr. Miguel Ojeda Ríos
                    </p>
                </div>
            </div>

            {/* Theory Section */}
            <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-lg">⚡</span>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-800">La Teoría de los Equivalentes</h2>
                    </div>
                    <p className="text-secondary-700 leading-relaxed text-lg">
                        Esta guía se basa en el principio de que cada microbio actúa como un "adversario ontológico", 
                        un mensajero que nos confronta con un conflicto emocional o psicológico no resuelto. 
                        Comprender su mensaje es clave para la sanación.
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <button 
                    onClick={onOpenProtocol} 
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-primary-500/25 hover:from-primary-600 hover:to-primary-700"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative flex items-center text-lg">
                        <span className="mr-3 text-xl">🧠</span>
                        Iniciar Protocolo de Trabajo
                        <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                </button>
            </div>
        </header>
    );
};