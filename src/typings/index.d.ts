export interface Link {
  href: string;
  title: string;
  image?: string;
}

export interface Social {
  href: string;
  title: string;
}

export interface Data {
  name: string;
  avatar: string;
  description: string;
  links: Link[];
  socials: Social[];
}
