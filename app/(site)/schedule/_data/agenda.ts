import { AgendaItem } from '../_types'


export const speakerSessions: AgendaItem[] = [
  {
    id: 'sp_001',
    day: 'Day 1',
    time: '09:30 – 10:30',
    title: 'Keynote Address',
    speaker: 'Dr. Eleanor Vance',
    location: 'Main Auditorium'
  },
  {
    id: 'sp_002',
    day: 'Day 1',
    time: '14:00 – 15:00',
    title: 'Industry Talk: Applied AI at Scale',
    speaker: 'Dr. Samuel Park',
    location: 'Main Auditorium'
  },
  {
    id: 'sp_003',
    day: 'Day 2',
    time: '09:00 – 10:00',
    title: 'Invited Talk: Sustainable Computing',
    speaker: 'Prof. Aisha Rahman',
    location: 'Main Auditorium'
  },
  {
    id: 'sp_004',
    day: 'Day 2',
    time: '11:15 – 12:00',
    title: 'Panel: Future of Intelligent Systems',
    speaker: 'Panel Session',
    location: 'Main Auditorium'
  }
]

export const paperPresentations: AgendaItem[] = [
  {
    id: 'pp_001',
    day: 'Day 1',
    time: '11:00 – 12:30',
    title: 'Technical Paper Presentations',
    location: 'Hall A'
  },
  {
    id: 'pp_002',
    day: 'Day 1',
    time: '15:30 – 17:00',
    title: 'Short Paper Presentations',
    location: 'Hall A'
  },
  {
    id: 'pp_003',
    day: 'Day 2',
    time: '10:15 – 11:15',
    title: 'Research Paper Presentations',
    location: 'Hall B'
  },
  {
    id: 'pp_004',
    day: 'Day 2',
    time: '14:00 – 15:30',
    title: 'Poster & Demo Presentations',
    location: 'Exhibit Hall'
  }
]
