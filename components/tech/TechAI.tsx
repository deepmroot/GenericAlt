
import React from 'react';
import { Smartphone, Bot, User } from 'lucide-react';
import { TechLayout } from './TechLayout';
import { TechStackCategory } from '../../types';

interface TechProps {
  data: TechStackCategory;
  index: number;
}

export const TechAI: React.FC<TechProps> = ({ data, index }) => {
  const inverted = index % 2 !== 0;

  // Bubbles
  const botBubbleBg = inverted ? 'bg-[#fdfff9]/10 border-[#fdfff9]/10' : 'bg-[#282a1e]/5 border-[#282a1e]/10';
  const userBubbleBg = inverted ? 'bg-[#fdfff9] text-[#282a1e]' : 'bg-[#282a1e] text-[#fdfff9]';
  const avatarBg = inverted ? 'bg-[#fdfff9] text-[#282a1e]' : 'bg-[#282a1e] text-[#fdfff9]';

  return (
    <TechLayout data={data} index={index} icon={Smartphone} idLabel="ARTIFICIAL INT">
        <div className="space-y-4">
            {/* Bot Message */}
            <div className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full bg-[#d3f54c] flex items-center justify-center text-[#282a1e] shrink-0">
                    <Bot size={16} />
                </div>
                <div className={`p-4 rounded-2xl rounded-bl-none border max-w-[85%] ${botBubbleBg}`}>
                    <p className="text-sm font-medium leading-snug">
                        Hi! I saw you manufacture industrial valves. Do you have CE certification for the European market?
                    </p>
                </div>
            </div>

            {/* Thinking State */}
            <div className="flex justify-center py-2">
                <div className="bg-[#d3f54c]/10 px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d3f54c] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#d3f54c] rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-[#d3f54c] rounded-full animate-bounce delay-150"></div>
                    <span className="text-[10px] font-bold uppercase text-[#d3f54c] tracking-wider">Analyzing Intent</span>
                </div>
            </div>

            {/* User Message */}
            <div className="flex gap-3 items-end flex-row-reverse">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${avatarBg}`}>
                    <User size={16} />
                </div>
                <div className={`p-4 rounded-2xl rounded-br-none max-w-[85%] ${userBubbleBg}`}>
                    <p className="text-sm font-medium leading-snug">
                        Yes, we export to Germany often. I can send the PDF.
                    </p>
                </div>
            </div>

             {/* Bot Action */}
             <div className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full bg-[#d3f54c] flex items-center justify-center text-[#282a1e] shrink-0">
                    <Bot size={16} />
                </div>
                <div className={`p-3 rounded-2xl rounded-bl-none border max-w-[85%] flex items-center gap-3 ${botBubbleBg}`}>
                    <div className="bg-red-500/10 p-2 rounded-lg text-red-500">
                        <div className="text-[10px] font-bold">ACTION</div>
                    </div>
                    <span className="text-xs font-mono font-bold opacity-70">request_document(type="CE_CERT")</span>
                </div>
            </div>
        </div>
    </TechLayout>
  );
};
