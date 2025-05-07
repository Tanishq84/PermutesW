// app/loading.tsx
'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#030014] text-white">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
