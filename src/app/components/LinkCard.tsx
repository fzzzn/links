'use client';

import Image from 'next/image';
import { Link } from '@/typings';

const LinkCard: React.FC<Link> = ({ href, title, image }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-lg'
    >
      <div className='flex w-full'>
        <div className='flex ml-2 m-1 items-center w-9 object-fit'>
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
        <h2 className='flex justify-center items-center font-semibold w-full text-black -ml-11'>
          {title}
        </h2>
      </div>
    </a>
  );
};

export default LinkCard;