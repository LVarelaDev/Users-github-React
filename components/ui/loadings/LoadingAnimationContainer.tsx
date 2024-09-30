import React from "react";

type TLoadingAnumationProps = {
  count: number;
};

const LoadingAnimationContainer = ({ count }: TLoadingAnumationProps) => {
  const clasNameResolver = `grid grid-cols-${count} gap-1`;
  return (
    <div className={clasNameResolver}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-4 p-4">
          <div className="flex items-start space-x-4 p-4 border rounded-lg shadow bg-white">
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="flex-1 space-y-3">
              <div className="h-4 rounded bg-gray-200 animate-pulse w-3/4"></div>
              <div className="space-y-2">
                <div className="h-3 rounded bg-gray-200 animate-pulse"></div>
                <div className="h-3 rounded bg-gray-200 animate-pulse w-5/6"></div>
                <div className="h-3 rounded bg-gray-200 animate-pulse w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingAnimationContainer;
