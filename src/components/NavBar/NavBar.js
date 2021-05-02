import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';
import close from '../../assets/close.png';

const NavBar = props => {
    return (
        <Fragment>
            <div className={classes.NavBar}>
                {props.back ? <Link to={props.back} className={classes.back}>
                    <img src={close} alt="Back" />
                </Link> : <div className={classes.back}></div>}
                <div className={classes.title}>{props.title}</div>
                {props.add ? <Link to={props.add} className={classes.add}>
                    <img src="" alt="Add" />
                </Link> : <div className={classes.add}></div>}
            </div>
            <div className={classes.spacer}></div>
        </Fragment>
    )
}

export default NavBar;