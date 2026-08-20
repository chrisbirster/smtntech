import { render } from "@solidjs/web";
import { Route, Router } from "@solidjs/router";
import AppShell from "./components/AppShell";
import HomePage from "./pages/HomePage";
import PodcastPage from "./pages/PodcastPage";
import ArticlesPage from "./pages/ArticlesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ShowcasePage from "./pages/ShowcasePage";
import EventsPage from "./pages/EventsPage";
import CommunityPage from "./pages/CommunityPage";
import NotesPage from "./pages/NotesPage";
import ClientWorkPage from "./pages/ClientWorkPage";
import AboutPage from "./pages/AboutPage";
import JoinPage from "./pages/JoinPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/index.css";

const root = document.getElementById("app");

if (!root) throw new Error("Missing #app root element");

render(
  () => (
    <Router root={AppShell}>
      <Route path="/" component={HomePage} />
      <Route path="/podcast" component={PodcastPage} />
      <Route path="/podcast/:slug" component={DetailPage} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/articles/:slug" component={DetailPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projects/:slug" component={DetailPage} />
      <Route path="/showcase" component={ShowcasePage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/events/:slug" component={DetailPage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/notes" component={NotesPage} />
      <Route path="/client-work" component={ClientWorkPage} />
      <Route path="/client-work/:slug" component={DetailPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="*404" component={NotFoundPage} />
    </Router>
  ),
  root,
);
