import React, { useState } from 'react';
import { useDate } from './utils/Time';
import Navigation from './utils/Navigation';

export default function App() {
  const { date, time } = useDate();

  return (
    <div className="italic flex flex-col min-h-screen justify-center items-center bg-stone-950 text-white">
      <span><Navigation /></span>
      <span>
        {date} {time}
      </span>
    </div>
  );
}
