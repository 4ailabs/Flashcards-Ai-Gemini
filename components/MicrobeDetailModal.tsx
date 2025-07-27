import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Microbe } from '../types';
import { AiAction } from '../types';
import { callGemini } from '../services/geminiService';
import { Loader } from './Loader';
import { AiActionButton } from './AiActionButton';

interface MicrobeDetailModalProps {
    microbe: Microbe;
    onClose: () => void;
}

const actionPrompts: Record<AiAction, (info: string) => string> = {
    [AiAction.EXPLAIN]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Explica detalladamente el patógeno usando la siguiente información: ${info}. Sigue la estructura: 1. Encabezado (Nombre y código). 2. Características (descripción biológica). 3. Código Patógeno (localización). 4. Conflicto Base (explicación detallada). 5. Sensaciones Asociadas. 6. Manifestaciones Clínicas. 7. Correlación Simbólica. 8. Aplicación Práctica (sugerencias de trabajo emocional y bioenergético).`,
    [AiAction.SUMMARIZE]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Resume en 3 a 5 oraciones concisas el patógeno y su conflicto asociado, usando la información: ${info}.`,
    [AiAction.SIMPLIFY]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Reescribe la información técnica del patógeno en un lenguaje muy sencillo y accesible para alguien sin conocimientos previos, usando la información: ${info}.`,
    [AiAction.EMOTIONAL_CONFLICT]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Profundiza en el conflicto emocional base del patógeno, explicando su origen, las sensaciones y cómo se manifiesta. Proporciona un ejemplo claro de la vida diaria. Usa la información: ${info}.`,
    [AiAction.CLINICAL_EXAMPLES]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Proporciona un caso ilustrativo donde la presencia de este patógeno podría indicar un conflicto emocional particular. Describe la situación de la persona y cómo el conflicto se manifiesta físicamente. Usa la información: ${info}.`,
    [AiAction.SYMBOLIC_METAPHOR]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Crea una metáfora o analogía que explique la relación simbólica entre el patógeno y su conflicto. Luego, explica cómo se vería una vivencia similar en el mundo animal. Usa la información: ${info}.`,
    [AiAction.HEALING_APPROACHES]: (info) => `Actúa como un asistente de BioFlashcardsMaster. Sugiere posibles estrategias para resolver el conflicto emocional asociado a este patógeno, incluyendo enfoques de bioenergética y biomagnetismo. Incluye una aclaración de que esto es complementario y no sustituye a la medicina convencional. Usa la información: ${info}.`,
};

export const MicrobeDetailModal: React.FC<MicrobeDetailModalProps> = ({ microbe, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState<string | null>(null);

    const handleAiAction = useCallback(async (action: AiAction) => {
        setIsLoading(true);
        setAiResponse(null);
        const microbeInfo = `Patógeno: ${microbe.name} (${microbe.code}, ${microbe.scientificName}). Características: ${microbe.characteristics}. Código Patógeno: ${microbe.codigoPatogeno}. Conflicto Base: ${microbe.conflictoBase}. Vivencia Asociada: ${microbe.vivenciaAsociada}. Sensaciones: ${microbe.sensaciones.join(', ')}. Manifestaciones: ${microbe.manifestacionesClinicas}. Simbología: ${microbe.simbologia}.`;
        const prompt = actionPrompts[action](microbeInfo);
        const response = await callGemini(prompt);
        setAiResponse(response);
        setIsLoading(false);
    }, [microbe]);

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="sticky top-0 bg-white p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#6D4C41]">{microbe.name} ({microbe.code})</h2>
                        <p className="text-md italic text-stone-500">{microbe.scientificName}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition text-3xl">&times;</button>
                </div>
                <div className="p-4 sm:p-6 space-y-4 overflow-y-auto">
                    <div id="ai-buttons" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {Object.values(AiAction).map(action => (
                            <AiActionButton key={action} action={action} onClick={handleAiAction} />
                        ))}
                    </div>
                    <div id="ai-output" className="p-4 bg-stone-50 rounded-lg border border-stone-200 min-h-[150px] text-gray-700 leading-relaxed">
                        {isLoading && <Loader />}
                        {!isLoading && !aiResponse && <p className="text-stone-500">Selecciona una acción para obtener información detallada de la IA.</p>}
                        {!isLoading && aiResponse && (
                            <div className="prose prose-sm max-w-none">
                                <ReactMarkdown
                                    components={{
                                        h1: ({children}) => <h1 className="text-xl font-bold text-gray-800 mb-3">{children}</h1>,
                                        h2: ({children}) => <h2 className="text-lg font-bold text-gray-800 mb-2 mt-4">{children}</h2>,
                                        h3: ({children}) => <h3 className="text-base font-bold text-gray-800 mb-2 mt-3">{children}</h3>,
                                        p: ({children}) => <p className="mb-3 text-gray-700">{children}</p>,
                                        ul: ({children}) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                                        ol: ({children}) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                                        li: ({children}) => <li className="text-gray-700">{children}</li>,
                                        strong: ({children}) => <strong className="font-bold text-gray-800">{children}</strong>,
                                        em: ({children}) => <em className="italic text-gray-700">{children}</em>,
                                        code: ({children}) => <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                                        blockquote: ({children}) => <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 mb-3">{children}</blockquote>,
                                        hr: () => <hr className="border-gray-300 my-4" />,
                                    }}
                                >
                                    {aiResponse}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};