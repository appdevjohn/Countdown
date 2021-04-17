import useCountdown from '../../hooks/useCountdown';

import Interval from '../Interval/Interval';

import classes from './Countdown.module.css';

const Countdown = props => {
    const { days, hours, minutes, seconds } = useCountdown(props.date);

    return (
        <div className={classes.Countdown}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.intervals}>
                <Interval amount={days} interval="days" />
                <Interval amount={hours} interval="hours" />
                <Interval amount={minutes} interval="minutes" />
                <Interval amount={seconds} interval="seconds" />
            </div>
        </div>
    )
}


export default Countdown;