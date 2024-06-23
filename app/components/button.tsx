'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Button = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const animals = ['Macan', 'Singa', 'Harimau', 'Serigala', 'Gajah', 'Monyet', 'Ular', 'Ayam', 'Babi', 'Tidak ada'];

  const handleCheck = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setResult(`Khodam anda adalah ${animals[randomIndex]}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  const handleClear = () => {
    setName('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl mb-4 text-white font-bold shadow-lg p-4  rounded-lg transform transition duration-500 hover:scale-105">
        CEK KHODAM ANDA
      </h1>
      <div className="relative mb-4 w-full max-w-md bg-white p-6 shadow-md rounded-lg">
        <Image src="/cek kodam.jpeg" alt="gambar" layout="responsive" width={500} height={300} />
        <div className="relative mb-4 w-full">
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onKeyDown={handleKeyPress}
            placeholder="Masukkan Nama Anda" 
            className="border p-2 w-full rounded pr-10"
          />
          {name && (
            <button 
              onClick={handleClear} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-1"
            >
              X
            </button>
          )}
        </div>
        <button 
          onClick={handleCheck} 
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-300"
        >
          Cek Khodam
        </button>
        {result && <p className="mt-4 text-2xl text-center">{result}</p>}
      </div>
    </div>
  );
}

export default Button;