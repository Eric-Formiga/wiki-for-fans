import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="loader h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
