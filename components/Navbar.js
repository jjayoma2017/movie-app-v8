import React from 'react';
import requests from '../util/requests';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          key={key}
          className="m-6 cursor-pointer hover:text-white active:text-red-400"
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
