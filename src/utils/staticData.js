import {
  WebIcon,
  JoystickIcon,
  HomeIcon,
  TriviasIcon,
  VideoIcon,
  TermsIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
} from './svgIcons';

export const downbarNavData = [
  { name: 'Portales Test', icon: WebIcon, href: '/portales-test' },
  { name: 'Memoob Games', icon: JoystickIcon, href: '/apps-games' },
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'Memoob Trivias', icon: TriviasIcon, href: '/trivias' },
  { name: 'Memoob Reels', icon: VideoIcon, href: '/reels' },
];

export const sidebarNavData = [
  { name: 'Portales Test', icon: WebIcon, href: '/portales-test' },
  { name: 'Trivias', icon: TriviasIcon, href: '/trivias' },
  { name: 'Juegos', icon: JoystickIcon, href: '/apps-games' },
  { name: 'Reels', icon: VideoIcon, href: '/reels' },
  // { name: 'T&C', icon: TermsIcon, href: '/terms' },
];

export const rrssData = [
  {
    name: 'TikTok',
    icon: TikTokIcon,
    link: 'https://www.tiktok.com/@mediamoob',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    link: 'https://www.instagram.com/mediamoob/',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/company/media-moob/mycompany/',
  },
];
