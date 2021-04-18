import { connect } from 'react-redux';

import Countdown from '../../components/Countdown/Countdown';

import classes from './Countdowns.module.css';

const Countdowns = props => {
    const countdowns = props.countdowns.map(cd => {
        return <Countdown title={cd.title} date={cd.date} key={cd.title + cd.date.toString()} />
    })

    return (
        <div className={classes.Countdowns}>
            {countdowns}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        countdowns: state.countdowns
    }
}

export default connect(mapStateToProps)(Countdowns);