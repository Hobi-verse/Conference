import { FooterSection } from '@/types/navigation'

export const footerSections: FooterSection[] = [
  {
    title: 'Conference',
    links: [
      { label: 'About ICCS', href: '/about' },
      { label: 'Organizing Committee', href: '/committee' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Accessibility', href: '/accessibility' }
    ]
  }
]
