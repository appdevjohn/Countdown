import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';

const NavBar = props => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.title}>{props.title}</div>
            <Link to={props.back} className={classes.back}>Cancel</Link>
        </div>
    )
}

export default NavBar;