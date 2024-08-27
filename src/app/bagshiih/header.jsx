import { Logo } from "./logo";
import { SearchIcon } from "./search-icon";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div>
            <Logo/>
          </div>
          <div>
            <SearchIcon/>
          </div>
        </div>
      </div>
    </header>
  );
};