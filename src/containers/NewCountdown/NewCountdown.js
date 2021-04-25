import { useState } from 'react';
import { connect } from 'react-redux';

import Option from '../../components/Option/Option';

import classes from './NewCountdown.module.css';

const NewCountdown = props => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();

    return (
        <div className={classes.NewCountdown}>
            <div>New Countdown</div>
            <input type="text" name="title" placeholder="Title" value={title} onChange={event => {
                setTitle(event.target.value);
            }} />
            <Option title="Year" options={['2021', '2022', '2023']} onSelect={option => setYear(option)} />
            {year ? <Option title="Month" options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} onSelect={option => setMonth(option)} /> : null}
            {month ? <Option title="Day" options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']} onSelect={option => setDay(option)} /> : null}
            {day ? <button onClick={() => {
                props.addCountdown(title, new Date());
            }}>Add Countdown</button> : null}
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