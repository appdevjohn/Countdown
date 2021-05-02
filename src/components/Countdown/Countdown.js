import useCountdown from '../../hooks/useCountdown';

import Interval from '../Interval/Interval';

import classes from './Countdown.module.css';

const Countdown = props => {
    const { days, hours, minutes, seconds } = useCountdown(props.date);

    return (
        <div className={classes.Countdown} onDoubleClick={() => {
            props.onDelete(props.id);
        }}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.date}>{props.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</div>
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