import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export const MainNavigation = () => (
  <header className={classes.header}>
    <div className={classes.logo}>Great Quotes</div>
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/quotes" activeClassName={classes.active}>
            All Quotes
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-quote" activeClassName={classes.active}>
            Add a Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);