import { getPermalink, getBlogPermalink} from './utils/permalinks';

export const headerData = {
  links: [ 
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    }, 
    {
      text: 'Services',
      href: getPermalink('/services'),
      
    },     
    {
      text: 'Projects',
      href: getPermalink('/projects'),
      
    },
    {
      text: 'Blogs',
      href: getBlogPermalink(),
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
        { text: 'HRBlues', href: 'https://hrblues.in/'},
        { text: 'MatchEase', href: 'https://matchease.in/'},
        { text: 'FamilyRiwaz', href: 'https://familyriwaz.in/'},
        { text: 'The Hungry Traveller', href: 'https://thehungrytraveller.in/'},
      ],
    },
    {
      title: 'Service',
      links: [
        { text: 'Web Development', href: getPermalink('/services/custom-web-development') },
        { text: 'Ecommerce', href: getPermalink('/services/ecommerce-solutions')},
        { text: 'IT Consulting', href: getPermalink('/services/it-consulting-virtual-cto')},
        { text: 'Digital Marketing', href: getPermalink('/services/digital-marketing-growth')},
        { text: 'Cyber Security', href: getPermalink('/services/cybersecurity-vapt')},
        { text: 'AI & Automation', href: getPermalink('/services/ai-integration-automation')},
        { text: 'Cloud & Infrastructure', href: getPermalink('/services/cloud-infrastructure')},
        { text: 'Community & Association', href: getPermalink('/services/community-association-systems')},
      ],
    },    
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about')},
        { text: 'Projects', href: getPermalink('/projects')},
        { text: 'Services', href: getPermalink('/services')},
        { text: 'Blog', href: getPermalink('/blog')},        
        { text: 'Contact', href: getPermalink('/contact')},
      ],
    },
    {
      title: 'Location',
      links: [
        {
          text: `
        <div class="mb-4">
          <p class="font-bold text-gray-800 dark:text-gray-200">6, Naresh Smruti,</p>
          <p class="font-bold text-gray-800 dark:text-gray-200">S. L. Road,</p>
          <p class="font-bold text-gray-800 dark:text-gray-200">Vithal Nagar,</p>
          <p class="font-bold text-gray-800 dark:text-gray-200">Mulund West,</p>
          <p class="font-bold text-gray-800 dark:text-gray-200">Mumbai 400080, India</p>
          <p>+91 8104664284</p>
          <p class="text-blue-600 dark:text-blue-400">info@solutionplanets.com</p>
        </div>
        `,
          href: 'https://share.google/IN0NugcP5tXRW1wok',
          target:'_blank'
        },
        /* {
          text: `
        <div>
          <p class="font-bold text-gray-800 dark:text-gray-200">Houston, USA</p>
          <p>+1 (346) 829-5870</p>
          <p class="text-blue-600 dark:text-blue-400">info@solutionplanets.com</p>
        </div>
        `,
          href: 'https://share.google/hfTQwSzcC6pxcy1GM',
          target:'_blank'
        }, */
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/918104664284?text=Hi%20Solution%20Planets!%20My%20name%20is%20..' },
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
