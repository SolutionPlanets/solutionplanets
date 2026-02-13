import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [    
    {
      text: 'Services',
      links: [
        {
          text: 'Custom Web Development',
          href: getPermalink('/services'),
        },
        {
          text: 'Strategy & Consulting',
          href: getPermalink('/services'),
        },
        {
          text: 'AI Integration',
          href: getPermalink('/services'),
        },
        {
          text: 'Digital Marketing',
          href: getBlogPermalink(),
        },
        {
          text: 'B2B Ecommerce',
          href: getPermalink('/services'),
        },
        {
          text: 'Cyber Security',
          href: getPermalink('/services'),
        },
        {
          text: 'Support/Maitenance',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'DonationReceipt',
          href: getPermalink('/products/product'),
        },
        {
          text: 'Calibrotech',
          href: getPermalink('/products/product'),
        },
        {
          text: 'Credibl5',
          href: getPermalink('/products/product'),
        },
        {
          text: 'MyCricJourney',
          href: getPermalink('/products/product'),
        },
        {
          text: 'Zonect',
          href: getPermalink('/products/product'),
        },
      ],
    },
    {
      text: 'Company',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/company/about'),
        },
        {
          text: 'Case Study',
          href: getPermalink('/company/casestudy'),
        },
        {
          text: 'Strategic Partners',
          href: getPermalink('/company/partners'),
        },
        {
          text: 'Blog',
          href: getPermalink('/blog'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get Connected', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Donation Receipt', href: 'https://donationreceipt.in/', target:'_blank' },
        { text: 'Calibrotech', href: 'https://www.calibrotech.com/', target:'_blank' },
        { text: 'Credibl5', href: 'https://www.credibl5.com/', target:'_blank' },
        { text: 'Zonect', href: 'https://www.zonect.in/', target:'_blank' },
        { text: 'CricJourney', href: 'https://www.mycricjourney.com/', target:'_blank' },
      ],
    },
    {
      title: 'Service',
      links: [
        { text: 'Web App Development', href: '#' },
        { text: 'B2B Ecommerce', href: '#' },
        { text: 'AI Integration', href: '#' },
        { text: 'Digital Marketing', href: '#' },
        { text: 'Cyber Security', href: '#' },
      ],
    },    
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Portfolio', href: '#' },
        { text: 'Parters', href: '#' },        
        { text: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Location',
      links: [
        {
          text: `
        <div class="mb-4">
          <p class="font-bold text-gray-800 dark:text-gray-200">Mumbai</p>
          <p>+91 9821155656</p>
          <p class="text-blue-600 dark:text-blue-400">info@solutionplanets.com</p>
        </div>
        `,
          href: 'https://share.google/IN0NugcP5tXRW1wok',
        },
        {
          text: `
        <div>
          <p class="font-bold text-gray-800 dark:text-gray-200">Houston</p>
          <p>+1 3468295870</p>
          <p class="text-blue-600 dark:text-blue-400">info@solutionplanets.com</p>
        </div>
        `,
          href: 'https://share.google/hfTQwSzcC6pxcy1GM',
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mumbai', href: getPermalink('/terms') },
    { text: 'Houston', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: getAsset('/rss.xml') },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://solutionplanets.com" target="blank"> Solution Planets</a> · All rights reserved.
  `,
};
