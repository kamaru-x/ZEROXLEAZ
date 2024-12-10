import React, { useState } from 'react';
import ActiveReconnaissance from './topics/ActiveReconnaissance';
import PassiveReconnaissance from './topics/PassiveReconnaissance';

const Reconnaissance = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedSubtopic, setExpandedSubtopic] = useState(null);

    const onExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const onExpandSubtopic = (index) => {
        setExpandedSubtopic(expandedSubtopic === index ? null : index);
    };

    return (
        <div className={`border border-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-200 ${isExpanded ? 'bg-[#0f0f0f]' : ''}`}>
            <button onClick={onExpand} className="w-full flex items-center gap-6 p-6 hover:bg-[#1a1a1a] transition-colors text-left group relative">
                <div className="flex items-center gap-6 flex-1">
                    <span className="text-sm font-mono text-[#00ff9d] opacity-75">01</span>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-[#00ff9d] mb-1 flex items-center gap-2">Reconnaissance</h2>
                        <p className="text-white/80 text-sm">Information gathering and target identification techniques</p>
                    </div>
                </div>
                <svg className={`w-6 h-6 text-[#00ff9d] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isExpanded && (
                <div className="border-t border-[#1a1a1a] p-4">
                    <div className="space-y-4">
                        <PassiveReconnaissance isExpanded={expandedSubtopic === 0} onExpand={() => onExpandSubtopic(0)}/>
                        <ActiveReconnaissance isExpanded={expandedSubtopic === 1} onExpand={() => onExpandSubtopic(1)}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reconnaissance;