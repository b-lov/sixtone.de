import Home from './Home/_Home.svelte';
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
    background: 'home_bg'
  },
  {
    name: 'Sounds',
    component: Sounds
  },
  {
    name: 'Events',
    component: Events
  },
  {
    name: 'Gallerie',
    component: Gallerie
  },
  {
    name: 'News',
    component: News
  },
  {
    name: 'Feedback',
    component: Feedback,
    background: 'feedback_bg'
  },
  {
    name: 'Partner',
    component: Partner
  },
  {
    name: 'Kontakt',
    component: Kontakt,
    background: 'contact_bg'
  }
];
