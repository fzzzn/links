'use client';

import Image from 'next/image';
import {
  SiMaildotru,
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from 'react-icons/si';

const data: Data = {
  name: 'Rizky Fauzan Hanif',
  avatar: 'https://avatars.githubusercontent.com/u/80439646',
  description: 'Tech enthusiast.',
  links: [
    {
      href: 'https://fzzzn.my.id',
      title: 'Personal Website',
    },
    {
      href: 'https://status.zxn.my.id',
      title: 'Status Page',
    },
  ],
  socials: [
    {
      href: 'mailto: fauzan@zxn.my.id',
      title: 'email',
    },
    {
      href: 'https://twitter.com/nuggetgeprek_',
      title: 'twitter',
    },
    {
      href: 'https://instagram.com/eenthlh',
      title: 'instagram',
    },
    {
      href: 'https://github.com/fzzzn',
      title: 'github',
    },
    {
      href: 'https://linkedin.com/in/rizky-fauzan-hanif',
      title: 'linkedin',
    },
  ],
};


interface LinkCard {
  href: string;
  title: string;
  image?: string;
}

interface Data {
  name: string;
  avatar: string;
  description: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl'
    >
      <div className='flex text-center w-full'>
        <div className='w-10 object-fit h-10'>
          {image && (
            <Image
              className='rounded-sm'
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
      <a href={data.avatar} target='_blank'>
        <Image
          priority
          className='rounded-full hover:scale-110 transition-all'
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
      <div className='flex items-center gap-3 mt-2 text-white'>
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {social.title.includes('email') ? (
              <SiMaildotru
                size='26px'
                className='hover:scale-110 transition-all'
              />
            ) : social.title.includes('twitter') ? (
              <SiTwitter
                size='30px'
                className='hover:scale-110 transition-all'
              />
            ) : social.title.includes('instagram') ? (
              <SiInstagram
                size='26px'
                className='hover:scale-110 transition-all'
              />
            ) : social.title.includes('github') ? (
              <SiGithub
                size='26px'
                className='hover:scale-110 transition-all'
              />
            ) : social.title.includes('linkedin') ? (
              <SiLinkedin
                size='26px'
                className='hover:scale-110 transition-all'
              />
            ) : null}
          </a>
        ))}
      </div>
      <div className='flex justify-center my-8 text-white'>
        <a href='https://fzzzn.my.id/' target='_blank'>
          © 2023 Rizky Fauzan Hanif
        </a>
      </div>
    </div>
  );
}
