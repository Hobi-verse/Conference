import { Professional } from '@/types'

export const professionals: Professional[] = [
  {
    id: 'prof_001',
    name: 'Dr. Eleanor Vance',
    designation: 'Keynote Speaker',
    affiliation: 'MIT',
    image: {
      src: '/assets/professionals/Photo1.webp',
      alt: 'Dr. Eleanor Vance portrait'
    }
  },
  {
    id: 'prof_002',
    name: 'Prof. Jonathan Hale',
    designation: 'Conference Chair',
    affiliation: 'Georgia Tech',
    image: {
      src: '/assets/professionals/Photo2.webp',
      alt: 'Prof. Jonathan Hale portrait'
    }
  },
  {
    id: 'prof_003',
    name: 'Dr. Meera Nair',
    designation: 'Panelist',
    affiliation: 'IISc Bangalore',
    image: {
      src: '/assets/professionals/Photo3.webp',
      alt: 'Dr. Meera Nair portrait'
    }
  }
]
