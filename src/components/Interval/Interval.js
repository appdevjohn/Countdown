import classes from './Interval.module.css';

const Interval = props => {
    return (
        <div className={classes.Interval}>
            <div className={classes.amount}>{props.amount}</div>
            <div className={classes.interval}>{props.interval}</div>
        </div>
    )
}

export default Interval;