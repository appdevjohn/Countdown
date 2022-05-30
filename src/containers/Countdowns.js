import { Link } from 'react-router-dom';

import Countdown from '../components/Countdown/Countdown';

import classes from './styles.module.css';

const Countdowns = props => {
    const confirmDeleteCountdown = id => {
        if (window.confirm('Are you sure you want to delete this?')) {
            props.onDeleteCountdown(id);
        }
    }

    const countdowns = props.countdowns.map(cd => {
        return <Countdown id={cd.id} title={cd.title} date={cd.date} key={cd.id} onDelete={confirmDeleteCountdown} />
    })

    if (countdowns.length === 0) {
        return (
            <div className={classes.Countdowns}>
                <Link to="/new-countdown" className={classes.newCountdown}>Create A Countdown</Link>
            </div>
        )
    } else {
        return (
            <div className={classes.Countdowns}>
                {countdowns}
                <Link to="/new-countdown" className={classes.button}>New Countdown</Link>
                <div className={classes.deleteText}>Tap a countdown to delete it.</div>
            </div>
        )
    }
}

export default Countdowns;