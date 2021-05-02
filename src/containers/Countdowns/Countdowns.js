import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Countdown from '../../components/Countdown/Countdown';

import classes from './Countdowns.module.css';

const Countdowns = props => {
    const confirmDeleteCountdown = id => {
        if (window.confirm('Are you sure you want to delete this?')) {
            props.onDeleteCountdown(id);
        }
    }

    const countdowns = props.countdowns.map(cd => {
        return <Countdown id={cd.id} title={cd.title} date={cd.date} key={cd.title + cd.date.toString()} onDelete={confirmDeleteCountdown} />
    })

    return (
        <div className={classes.Countdowns}>
            {countdowns}
            <Link to="/new-countdown" className={classes.newCountdown}>New Countdown</Link>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        countdowns: state.countdowns
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteCountdown: id => dispatch({
            type: 'COUNTDOWN_DELETE',
            id: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdowns);