'use client';

import Image from 'next/image';
import data from '@/data';
import LinkCard from '@/app/components/LinkCard';
import LinkSocial from '@/app/components/LinkSocial';

export default function Home() {
  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
      <a href={data.avatar} target='_blank'>
        <Image
          priority
          className='rounded-full'
          alt={data.name}
          src={data.avatar}
          width={100}
          height={100}
        />
      </a>
      <h1 className='font-bold mt-2 text-2xl text-white'>{data.name}</h1>
      <p className='mt-1 mb-8 text-white'>{data.description}</p>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className='flex items-center gap-3 mt-4 text-white'>
        {data.socials.map((social) => (
          <LinkSocial key={social.href} {...social} />
        ))}
      </div>
      <div className='flex justify-center my-8 text-white'>
        <a href='https://fzzzn.my.id/' target='_blank'>
          © 2024 Rizky Fauzan Hanif
        </a>
      </div>
    </div>
  );
}
