import { BookmarkNavIcon, GridIcon, LogoIcon, MovieIcon, TvIcon } from './Icons.jsx';
import avatar from '../assets/avatar.svg';

function NavButton({ children, label, active = false }) {
  return (
    <button className={`nav-button ${active ? 'active' : ''}`} aria-label={label} type="button">
      {children}
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <a className="logo" href="#" aria-label="Entertainment app home">
        <LogoIcon />
      </a>

      <nav className="nav-links" aria-label="Static navigation">
        <NavButton label="Home">
          <GridIcon />
        </NavButton>

        <NavButton label="Movies">
          <MovieIcon />
        </NavButton>

        <NavButton label="TV Series" active>
          <TvIcon />
        </NavButton>

        <NavButton label="Bookmarked">
          <BookmarkNavIcon />
        </NavButton>
      </nav>

      <img className="sidebar__avatar" src={avatar} alt="User avatar" />
    </aside>
  );
}