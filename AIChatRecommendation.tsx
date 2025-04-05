import React from 'react';
import Link from 'next/link';

type AIChatRecommendationProps = {
  title?: string;
  description?: string;
};

export default function AIChatRecommendation({
  title = "Get Personalized Course Recommendations",
  description = "Not sure where to start? Our AI assistant can help you find the perfect courses based on your background and goals."
}: AIChatRecommendationProps) {
  return (
    <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-200">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link href="/chat" className="btn-secondary inline-block">
        Chat with AI Assistant
      </Link>
    </div>
  );
}
