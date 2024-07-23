'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FontSizeContextType {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<number>(16);

  const increaseFontSize = () => {
    setFontSize(prevSize => Math.min(prevSize + 2, 24)); // Max font size limit
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(prevSize - 2, 12)); // Min font size limit
  };

  const resetFontSize = () => {
    setFontSize(16); // Default font size
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}>
      <div style={{ fontSize: `${fontSize}px` }}>
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
