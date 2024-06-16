'use client';

import {
  SiMaildotru,
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from 'react-icons/si';
import { Social } from '@/typings';

const LinkSocial: React.FC<Social> = ({ href, title }) => {
  const getIcon = () => {
    if (title.includes('email')) return <SiMaildotru size='26px' />;
    if (title.includes('twitter')) return <SiTwitter size='30px' />;
    if (title.includes('instagram')) return <SiInstagram size='26px' />;
    if (title.includes('github')) return <SiGithub size='26px' />;
    if (title.includes('linkedin')) return <SiLinkedin size='26px' />;
    return null;
  };

  return (
    <a
      aria-label={`${title} link`}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:scale-110 transition-all'
    >
      {getIcon()}
    </a>
  );
};

export default LinkSocial;
