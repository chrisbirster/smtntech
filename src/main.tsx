import { render } from '@solidjs/web';
import { createRouter } from '@solidjs/router';
import AppShell from './components/AppShell';
import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import ArticlesPage from './pages/ArticlesPage';
import ProjectsPage from './pages/ProjectsPage';
import ShowcasePage from './pages/ShowcasePage';
import EventsPage from './pages/EventsPage';
import CommunityPage from './pages/CommunityPage';
import NotesPage from './pages/NotesPage';
import ClientWorkPage from './pages/ClientWorkPage';
import AboutPage from './pages/AboutPage';
import JoinPage from './pages/JoinPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/index.css';

const AppRouter = createRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/podcast', component: PodcastPage },
    { path: '/podcast/:slug', component: DetailPage },
    { path: '/articles', component: ArticlesPage },
    { path: '/articles/:slug', component: DetailPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/projects/:slug', component: DetailPage },
    { path: '/showcase', component: ShowcasePage },
    { path: '/events', component: EventsPage },
    { path: '/events/:slug', component: DetailPage },
    { path: '/community', component: CommunityPage },
    { path: '/notes', component: NotesPage },
    { path: '/client-work', component: ClientWorkPage },
    { path: '/client-work/:slug', component: DetailPage },
    { path: '/about', component: AboutPage },
    { path: '/join', component: JoinPage },
    { path: '*404', component: NotFoundPage },
  ],
});

const root = document.getElementById('app');
if (!root) throw new Error('Missing #app root element');

render(() => <AppRouter>{(props) => <AppShell>{props.children}</AppShell>}</AppRouter>, root);
