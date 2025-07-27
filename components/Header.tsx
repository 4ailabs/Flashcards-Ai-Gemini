import React from 'react';

interface HeaderProps {
    onOpenProtocol: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProtocol }) => {
    return (
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
            {/* Hero Section */}
            <div className="relative mb-6 md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl"></div>
                <div className="relative glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
                    <div className="flex items-center justify-center mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-xl md:text-2xl">🧬</span>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3 md:mb-4 tracking-tight leading-tight">
                        BioFlashcardsMaster AI
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed font-medium px-2 mb-4">
                        Asistente de Microbioenergética basado en los principios del Dr. Miguel Ojeda Ríos
                    </p>
                    
                    {/* Author Credits */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/30">
                        <div className="flex items-center justify-center space-x-2 md:space-x-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm md:text-base">👨‍⚕️</span>
                            </div>
                            <div className="text-left">
                                <p className="text-sm md:text-base font-semibold text-secondary-800">
                                    Dr. Miguel Ojeda Ríos
                                </p>
                                <p className="text-xs md:text-sm text-secondary-600">
                                    Especialista en Microbioenergética y Biomagnetismo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Theory Section */}
            <div className="max-w-4xl mx-auto mb-6 md:mb-8 px-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20">
                    <div className="flex items-center mb-3 md:mb-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
                            <span className="text-white font-bold text-sm md:text-lg">⚡</span>
                        </div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800">La Teoría de los Equivalentes</h2>
                    </div>
                    <p className="text-secondary-700 leading-relaxed text-sm sm:text-base md:text-lg">
                        Esta guía se basa en el principio de que cada microbio actúa como un "adversario ontológico", 
                        un mensajero que nos confronta con un conflicto emocional o psicológico no resuelto. 
                        Comprender su mensaje es clave para la sanación.
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center px-4">
                <button 
                    onClick={onOpenProtocol} 
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-primary-500/25 hover:from-primary-600 hover:to-primary-700 w-full sm:w-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center text-base md:text-lg">
                        <span className="mr-2 md:mr-3 text-lg md:text-xl">🧠</span>
                        Iniciar Protocolo de Trabajo
                        <span className="ml-2 md:ml-3 text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                </button>
            </div>
        </header>
    );
};