import React from 'react';
import { AiAction } from '../types';

interface AiActionButtonProps {
    action: AiAction;
    onClick: (action: AiAction) => void;
}

export const AiActionButton: React.FC<AiActionButtonProps> = ({ action, onClick }) => {
    const isWide = action === AiAction.HEALING_APPROACHES;
    return (
        <button
            onClick={() => onClick(action)}
            className={`ai-btn text-sm font-semibold py-2 px-3 rounded-lg bg-[#EFEBE9] border border-[#D7CCC8] text-[#5D4037] transition-all duration-200 ease-in-out hover:bg-[#D7CCC8] hover:scale-105 ${isWide ? 'col-span-2 sm:col-span-3 lg:col-span-4' : ''}`}
        >
            {action}
        </button>
    );
};