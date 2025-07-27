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
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
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
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm md:text-base font-semibold text-secondary-800">
                                    Dr. Miguel Ojeda Ríos
                                </p>
                                <p className="text-xs md:text-sm text-secondary-600">
                                    Creador de Microbioenergética: El código emocional, energético y simbólico de los microbios
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
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                            </svg>
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
                        <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Iniciar Protocolo de Trabajo
                        <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </header>
    );
};