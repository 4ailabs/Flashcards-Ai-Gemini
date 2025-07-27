import React from 'react';

interface ProtocolModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SensationTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="sensation-tag px-3 py-1 rounded-full text-sm font-medium bg-[#EFEBE9] border border-[#D7CCC8] text-[#5D4037]">
        {children}
    </span>
);

const ProtocolStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <li className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-[#A1887F] text-white flex items-center justify-center rounded-full font-bold text-xl">{number}</div>
        <div>
            <h3 className="font-bold text-xl text-stone-800 mb-2">{title}</h3>
            {children}
        </div>
    </li>
);

export const ProtocolModal: React.FC<ProtocolModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const sensations = [
        "Abandono", "Agresión", "Vacío", "Soledad", "Frustración", "Impotencia",
        "Insatisfacción", "Vulnerabilidad", "Hambre", "Persecución", "Amor difícil",
        "Angustia", "Ira", "Infelicidad", "Desvalorización", "Traición", "Suicidio",
        "Casi muerte", "Humillación e ignominia", "Desvalorización estética"
    ];

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh]">
                <div className="sticky top-0 bg-white p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#6D4C41]">Protocolo de Trabajo de los Microbios</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition text-3xl">&times;</button>
                </div>
                <div className="p-4 sm:p-6 space-y-6 overflow-y-auto">
                    <p className="text-gray-600">Este protocolo es una guía para explorar y procesar los conflictos biológicos asociados a los microbios. Sigue estos pasos para una introspección profunda.</p>
                    <ol className="space-y-6">
                        <ProtocolStep number={1} title="Buscar la Sensación Primordial">
                            <p className="text-gray-600 mb-4">Todo conflicto biológico nace de una sensación física y visceral. Es el lenguaje primario del cuerpo. Identifica cuál de estas sensaciones resuena más contigo en relación a tu malestar:</p>
                            <div className="flex flex-wrap gap-2">
                                {sensations.map(s => <SensationTag key={s}>{s}</SensationTag>)}
                            </div>
                        </ProtocolStep>
                        <ProtocolStep number={2} title="Profundizar en la Emoción">
                             <p className="text-gray-600">Una vez identificada la sensación, explora la emoción que la acompaña. ¿Es miedo, tristeza, rabia, asco? Nómbrala sin juicio. La emoción es la energía que moviliza el conflicto.</p>
                        </ProtocolStep>
                        <ProtocolStep number={3} title="Buscar el Conflicto y el Instante">
                            <p className="text-gray-600">Con la sensación y la emoción como guía, viaja en tu memoria para encontrar la <strong>vivencia</strong> o el <strong>conflicto</strong> original que las programó. Busca el <strong>"instante"</strong> preciso, el momento exacto en que se grabó esa herida. Puede ser un evento de la infancia, una situación traumática o incluso una historia transgeneracional.</p>
                        </ProtocolStep>
                         <ProtocolStep number={4} title="Descomprimir y Reprocesar">
                            <p className="text-gray-600">El objetivo final es liberar la carga emocional atrapada. Esto implica <strong>descomprimir</strong> la emoción, permitiéndote sentirla plenamente en un entorno seguro, sin reprimirla. Una vez sentida, se puede <strong>reprocesar</strong> la vivencia, dándole un nuevo significado, comprendiendo su propósito y liberando las creencias limitantes que se formaron en aquel instante.</p>
                        </ProtocolStep>
                    </ol>
                </div>
            </div>
        </div>
    );
};