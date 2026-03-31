import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [ 
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      
    },
    {
      text: 'Company',
      href: getPermalink('/company'),
    },    
    {
      text: 'Projects',
      href: getPermalink('/projects'),
      
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
        { text: 'Donation Receipt', href:'https://donationreceipt.in/' },        
        { text: 'Zonect', href: 'https://www.zonect.in/'},
        { text: 'Calibrotech', href: 'https://www.calibrotech.com/'},
        { text: 'Credibl5', href: 'https://www.credibl5.com/'},
        { text: 'CricJourney', href: 'https://www.mycricjourney.com/'},
      ],
    },
    {
      title: 'Service',
      links: [
        { text: 'Web Development', href: getPermalink('/services') },
        { text: 'B2B Ecommerce', href: getPermalink('/services')},
        { text: 'AI Integration', href: getPermalink('/services')},
        { text: 'Digital Marketing', href: getPermalink('/services')},
        { text: 'Cyber Security', href: getPermalink('/services')},
      ],
    },    
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/company')},
        { text: 'Features', href: getPermalink('company')},
        { text: 'Portfolio', href: getPermalink('/products')},
        { text: 'Blog', href: getPermalink('/blog')},        
        { text: 'Contact', href: getPermalink('/company')},
      ],
    },
    {
      title: 'Location',
      links: [
        {
          text: `
        <div class="mb-4">
          <p class="font-bold text-gray-800 dark:text-gray-200">Mumbai, India</p>
          <p>+91 8104664284</p>
          <p class="text-blue-600 dark:text-blue-400">info@solutionplanets.com</p>
        </div>
        `,
          href: 'https://share.google/IN0NugcP5tXRW1wok',
          target:'_blank'
        },
        {
          text: `
        <div>
          <p class="font-bold text-gray-800 dark:text-gray-200">Houston, USA</p>
          <p>+1 (346) 829-5870</p>
          <p class="text-blue-600 dark:text-blue-400">info@solutionplanets.com</p>
        </div>
        `,
          href: 'https://share.google/hfTQwSzcC6pxcy1GM',
          target:'_blank'
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mumbai',  },
    { text: 'Houston', },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/13468295870?text=Hi%20Solution%20Planets!%20My%20name%20is%20..' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/solutionplanets' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/solutionplanets' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@solutionplanets9122'},
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/solution_planets/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/SolutionPlanets' },
    
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://solutionplanets.com" target="blank"> Solution Planets</a> · All rights reserved.
  `,
};
