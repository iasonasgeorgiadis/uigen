'use client';

import FlashCard from '@/components/FlashCard';

export default function FlashCardDemo() {
  const handleCopyAnswer = () => {
    // Show success notification
    console.log('Answer copied to clipboard!');
  };

  const handleExport = () => {
    // Handle export functionality
    console.log('Exporting flashcard...');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">FlashCard Component Demo</h1>
        
        <div className="space-y-6">
          <FlashCard
            questionNumber="Q1"
            question="What was the sample size?"
            answer="320 participants across 5 clinical sites"
            onCopyAnswer={handleCopyAnswer}
            onExport={handleExport}
          />
          
          <FlashCard
            questionNumber="Q2"
            question="What method was used?"
            answer="Double-blind randomized controlled trial with placebo control group"
            onCopyAnswer={handleCopyAnswer}
            onExport={handleExport}
          />
          
          <FlashCard
            questionNumber="Q3"
            question="What were the primary outcomes?"
            answer="The primary outcomes included symptom reduction measured by validated scales, quality of life assessments, and adverse event monitoring over a 12-week period"
            onCopyAnswer={handleCopyAnswer}
            onExport={handleExport}
          />
        </div>
      </div>
    </div>
  );
}