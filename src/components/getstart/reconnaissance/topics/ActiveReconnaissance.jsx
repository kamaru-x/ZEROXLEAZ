import React from 'react';

const ActiveReconnaissance = ({ isExpanded, onExpand }) => {
    return (
        <div className="border border-[#1a1a1a] rounded-lg overflow-hidden bg-[#0f0f0f] hover:border-[#00ff9d] transition-colors">
            <button onClick={onExpand} className="w-full p-4 text-left">
                <h3 className="text-[#00ff9d] text-lg mb-2">Active Reconnaissance</h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  Active reconnaissance involves direct interaction with the target to gather information. This method is more detectable but provides more detailed information.
                </p>
            </button>

            {isExpanded && (
                <div className="border-t border-[#1a1a1a]">
                    <div className="relative h-64 w-full">
                        <img src="https://i.sstatic.net/y9DpT.jpg" alt="Active Reconnaissance" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-white/90 text-base leading-relaxed">
                            Active reconnaissance involves various methods like port scanning, network mapping, and vulnerability scanning.
                        </p>

                        <h4 className="text-[#00ff9d] text-lg mb-4">Key techniques include:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Port scanning
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Network mapping
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Service enumeration
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Banner grabbing
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
                                Vulnerability scanning
                            </li>
                        </ul>

                        <h4 className="text-[#00ff9d] text-lg mb-4">Command Reference</h4>
                        <div className="space-y-3">
                            <div className="bg-[#1a1a1a] p-4 rounded-lg font-mono text-white">
                                $ nmap -p 80,443 target.com
                            </div>
                            <div className="bg-[#1a1a1a] p-4 rounded-lg font-mono text-white">
                                $ netcat -zv target.com 80-443
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActiveReconnaissance;
