
// components/JournalStats.tsx
import React from 'react';

const JournalStats = () => {
  const stats = [
    { value: '45%', label: 'Acceptance Rate' },
    { value: '10 days', label: 'Time to first decision' },
    { value: '20-45 days', label: 'Review time' },
    { value: '60 days', label: 'Acceptance to publication' }
  ];

  return (
    <div className="bg-[#a52a2a] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
        <a 
          href="#" 
          className="bg-white text-red-700 px-4 py-2 rounded hover:bg-gray-100"
        >
          View all insights
        </a>
      </div>
    </div>
  );
};

export default JournalStats;