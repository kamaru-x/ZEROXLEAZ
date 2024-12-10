import React from 'react';

const PassiveReconnaissance = ({ isExpanded, onExpand }) => {
    return (
        <div className="border border-[#1a1a1a] rounded-lg overflow-hidden bg-[#0f0f0f] hover:border-[#00ff9d] transition-colors">
            <button onClick={onExpand} className="w-full p-4 text-left">
                <h3 className="text-[#00ff9d] text-lg mb-2">Passive Reconnaissance</h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  Passive reconnaissance involves gathering information about a target without direct interaction. This method is stealthy and leaves no traces on the target system.
                </p>
            </button>

            {isExpanded && (
                <div className="border-t border-[#1a1a1a]">
                    <div className="relative w-full">
                        <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" alt="Passive Reconnaissance" className="w-full h-full" />
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-white/90 text-base leading-relaxed">
                            Passive reconnaissance involves collecting information without alerting the target, such as DNS enumeration and social media research.
                        </p>

                        <h4 className="text-[#00ff9d] text-lg mb-4">Key techniques include:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                OSINT (Open Source Intelligence)
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                DNS enumeration
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                WHOIS lookups
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Social media research
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Public records analysis
                            </li>
                        </ul>

                      <h4 className="text-[#00ff9d] text-lg mb-4">Command Reference</h4>
                        <div className="space-y-3">
                            <div className="bg-[#1a1a1a] p-4 rounded-lg font-mono text-white">
                                $ whois domain.com
                            </div>
                            <div className="bg-[#1a1a1a] p-4 rounded-lg font-mono text-white">
                                $ nslookup domain.com
                            </div>
                            <div className="bg-[#1a1a1a] p-4 rounded-lg font-mono text-white">
                                $ dig domain.com
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PassiveReconnaissance;