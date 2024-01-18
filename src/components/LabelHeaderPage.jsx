import React from 'react';

export default function LabelHeaderPage({ title, lang, setLang }) {
  return (
    <div className=' w-full h-20 mt-0 px-6 pb-2 flex items-end justify-between bg-moobMint rounded-bl-3xl md:rounded-br-3xl'>
      <h3 className=' pl-0 uppercase text-sm md:text-base lg:text-lg font-poppinsMedium text-white'>{title}</h3>
      <div className='w-1/6 min-w-14 flex items-center justify-end gap-2'>
        <span className=' font-poppinsMedium'>{lang}</span>
        <div className='w-6'>
          <img
            src={`https://flagsapi.com/${lang}/flat/32.png`}
            alt={`${lang} Flat Flag Image`}
          ></img>
        </div>
      </div>
    </div>
  );
}
