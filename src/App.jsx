import { useState } from 'react'
import ReconnaissanceContent from './components/getstart/reconnaissance/Reconnaissance'

export default function Home() {
    const [expandedTopic, setExpandedTopic] = useState(null)
    const [expandedSubtopic, setExpandedSubtopic] = useState(null)

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-3xl font-bold text-[#00ff9d]">ZEROX LEAZ</h1>
                    </div>
                </header>

                <div className="space-y-4">
                    <ReconnaissanceContent isExpanded={expandedTopic === 'reconnaissance'} onExpand={setExpandedTopic} expandedSubtopic={expandedSubtopic} onExpandSubtopic={setExpandedSubtopic}/>
                </div>
            </div>
        </main>
    )
}