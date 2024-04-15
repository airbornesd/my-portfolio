import React, { useState } from 'react';
import { useDate } from './utils/Time';

export default function App() {
  const { date, time } = useDate();

  return (
    <div className="italic flex flex-col min-h-screen justify-center items-center bg-stone-950 text-white">
      <h1>s1dhk</h1>
      <span>
        {date} {time}
      </span>
    </div>
  );
}
