
import React from 'react';
import { Search, Terminal } from 'lucide-react';
import { TechLayout } from './TechLayout';
import { TechStackCategory } from '../../types';

interface TechProps {
  data: TechStackCategory;
  index: number;
}

export const TechScraping: React.FC<TechProps> = ({ data, index }) => {
  const inverted = index % 2 !== 0;

  // Terminal style needs to be dark regardless, but on a dark card it needs separation
  const terminalBg = inverted ? 'bg-[#1a1c14] border-[#fdfff9]/20' : 'bg-[#1a1c14] border-transparent';
  const headerBg = 'bg-[#282a1e] border-white/10'; // Keeping terminal header standard dark

  return (
    <TechLayout data={data} index={index} icon={Search} idLabel="SCRAPING">
        <div className={`rounded-xl overflow-hidden text-[#fdfff9] font-mono text-xs md:text-sm shadow-lg border ${terminalBg}`}>
            <div className={`p-3 flex items-center gap-2 border-b ${headerBg}`}>
                <Terminal size={14} className="text-[#d3f54c]" />
                <span className="opacity-50">spider-v4-worker</span>
            </div>
            <div className="p-4 space-y-2 h-[200px] overflow-hidden relative">
                <div className="opacity-50">root@agent:~# ./init_discovery.sh --target="textiles"</div>
                <div className="text-[#d3f54c]"> > Initializing Railway Scraper...</div>
                <div> > Target: Guangzhou Fabric Market</div>
                <div className="text-blue-400"> > [INFO] Found 412 potential entities</div>
                <div> > Filtering by "Export License"...</div>
                <div className="text-[#d3f54c]"> > [SUCCESS] 89 High-Intent Leads identified</div>
                <div className="opacity-50"> > Enriched data:</div>
                <div className="pl-4 opacity-70">
                   {`{`} <br/>
                   &nbsp;&nbsp; "name": "TexCo Ltd", <br/>
                   &nbsp;&nbsp; "whatsapp": "+86 138...", <br/>
                   &nbsp;&nbsp; "catalog": "https://..." <br/>
                   {`}`}
                </div>
                
                {/* Fade out effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1a1c14] to-transparent`}></div>
            </div>
        </div>
    </TechLayout>
  );
};
