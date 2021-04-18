import { useState } from 'react';
import { connect } from 'react-redux';

import classes from './NewCountdown.module.css';

const NewCountdown = props => {
    const [countdownTitle, setCountdownTitle] = useState('');

    return (
        <div className={classes.NewCountdown}>
            <div>New Countdown</div>
            <input type="text" name="title" placeholder="Title" value={countdownTitle} onChange={event => {
                setCountdownTitle(event.target.value);
            }} />
            <button onClick={() => {
                props.addCountdown(countdownTitle, new Date());
            }}>Add Countdown</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addCountdown: (title, date) => dispatch({
            type: 'COUNTDOWN_ADD',
            title: title,
            date: date
        })
    }
}

export default connect(null, mapDispatchToProps)(NewCountdown);