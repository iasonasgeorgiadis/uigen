'use client';

import React, { useState } from 'react';

interface FlashCardProps {
  questionNumber: string;
  question: string;
  answer: string;
  onCopyAnswer?: () => void;
  onExport?: () => void;
}

export default function FlashCard({
  questionNumber,
  question,
  answer,
  onCopyAnswer,
  onExport,
}: FlashCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCopyAnswer = () => {
    navigator.clipboard.writeText(answer);
    onCopyAnswer?.();
  };

  return (
    <div className="bg-white rounded border border-[#dee2e6] w-full" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <div className="relative">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#ebebeb] rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-[#231f20] text-sm font-bold uppercase leading-6">
                {questionNumber}
              </span>
            </div>
            <h3 className="text-[#231f20] text-base font-bold flex-1 leading-[26px]">
              {question}
            </h3>
          </div>
          
          <div className="pl-10">
            {showAnswer ? (
              <>
                <p className="text-[#231f20] text-base mb-2 leading-[26px] font-normal">{answer}</p>
                <button
                  onClick={() => setShowAnswer(false)}
                  className="text-[#123d80] text-sm underline hover:opacity-80 leading-6 font-normal"
                >
                  Hide answer
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAnswer(true)}
                className="text-[#123d80] text-sm underline hover:opacity-80 leading-6 font-normal"
              >
                Show answer
              </button>
            )}
          </div>
        </div>
        
        {showAnswer && (
          <div className="border-t border-[#dee2e6]">
            <div className="flex justify-between items-center p-4">
              <button
                onClick={handleCopyAnswer}
                className="flex items-center gap-1 px-4 h-8 border border-[#113d80] text-[#113d80] rounded bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="material-icons-outlined" style={{ fontSize: '20px', lineHeight: 1 }}>content_copy</span>
                <span className="text-xs font-bold uppercase leading-6">Copy Answer</span>
              </button>
              <button
                onClick={onExport}
                className="px-4 h-8 flex items-center bg-[#113d80] text-white text-xs font-bold uppercase rounded hover:bg-[#0f2d5c] transition-colors"
              >
                Export
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}