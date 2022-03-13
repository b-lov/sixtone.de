import Home from './Home/_Home.svelte';
import Band from './Band/_Band.svelte';
import Sounds from './Sounds/_Sounds.svelte';
import Events from './Events/_Events.svelte';
import Gallerie from './Gallerie/_Gallerie.svelte';
import News from './News/_News.svelte';
import Feedback from './Feedback/_Feedback.svelte';
import Partner from './Partner/_Partner.svelte';
import Kontakt from './Kontakt/_Kontakt.svelte';

export default [
  {
    name: 'Home',
    component: Home,
    backgroundImage: 'home_bg'
  },
  {
    name: 'Band',
    subtitle: 'Wer wir sind',
    component: Band
  },
  {
    name: 'Sounds',
    subtitle: 'So klingt Sixtone',
    component: Sounds
  },
  {
    name: 'Events',
    subtitle: 'Bevorstehende Auftritte',
    component: Events,
    backgroundImage: 'events_bg'
  },
  {
    name: 'Gallerie',
    subtitle: 'Fotos & Videos',
    component: Gallerie
  },
  {
    name: 'News',
    subtitle: 'Aus der Welt von Sixtone',
    component: News
  },
  {
    name: 'Feedback',
    subtitle: 'Das denken unsere Kunden',
    component: Feedback,
    backgroundImage: 'feedback_bg'
  },
  {
    name: 'Partner',
    subtitle: 'Zusammen sind wir stark',
    component: Partner
  },
  {
    name: 'Kontakt',
    subtitle: 'Wir freuen uns auf Deine Nachricht',
    component: Kontakt,
    backgroundImage: 'contact_bg'
  }
];
