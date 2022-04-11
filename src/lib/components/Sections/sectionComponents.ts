import Home from './Home/_Home.svelte';
import Band from './Band/_Band.svelte';
import Sounds from './Sounds/_Sounds.svelte';
// // import Events from './Events/_Events.svelte';
import Gallerie from './Gallerie/_Gallerie.svelte';
import News from './News/_News.svelte';
import Feedback from './Feedback/_Feedback.svelte';
import Partner from './Partner/_Partner.svelte';
import Kontakt from './Kontakt/_Kontakt.svelte';

export default [
  {
    component: Home,
    id: 'Home',
    name: 'Home',
    subtitle: '',
    bgImage: 'home_bg'
  },
  {
    component: Band,
    id: 'Band',
    name: 'Band',
    subtitle: 'Wer wir sind',
    bgImage: 'home_bg'
  },
  {
    component: Sounds,
    id: 'Sounds',
    name: 'Sounds',
    subtitle: 'So klingt Sixtone',
    bgImage: ''
  },
  // // {
  // //   name: 'Events',
  // //   subtitle: 'Bevorstehende Auftritte',
  // //   component: Events,
  // //   backgroundImage: 'events_bg'
  // // },
  {
    component: Gallerie,
    id: 'Gallerie',
    name: 'Gallerie',
    subtitle: 'Fotos & Videos',
    bgImage: ''
  },
  {
    component: News,
    id: 'News',
    name: 'News',
    subtitle: 'Aus der Welt von Sixtone',
    bgImage: ''
  },
  {
    component: Feedback,
    id: 'Feedback',
    name: 'Feedback',
    subtitle: 'Das denken unsere Kunden',
    bgImage: 'feedback_bg'
  },
  {
    component: Partner,
    id: 'Partner',
    name: 'Partner',
    subtitle: 'Zusammen sind wir stark'
  },
  {
    component: Kontakt,
    id: 'Kontakt',
    name: 'Kontakt',
    subtitle: 'Wir freuen uns auf Deine Nachricht',
    bgImage: 'contact_bg'
  }
];
