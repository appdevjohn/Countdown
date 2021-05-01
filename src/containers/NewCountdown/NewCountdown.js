import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Option from '../../components/Option/Option';

import classes from './NewCountdown.module.css';

const NewCountdown = props => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);
    const [hour, setHour] = useState(null);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const hours = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    let dayOffset = 0;
    if (year !== null && month !== null) {
        const firstOfMonth = new Date(year, month, 1);
        dayOffset = firstOfMonth.getDay();

        const lastOfMonth = new Date(year, month + 1, 0);
        days = [];
        for (let i = 1; i <= lastOfMonth.getDate(); i++) {
            days.push(`${i}`);
        }
    }

    return (
        <div className={classes.NewCountdown}>
            <div className={classes.title}>New Countdown</div>
            <input className={classes.titleInput} type="text" name="title" placeholder="Title" value={title} onChange={event => {
                setTitle(event.target.value);
            }} />
            <Option title="Year" columns={3} options={['2021', '2022', '2023']} selected={year} onSelect={option => {
                setYear(option);

            }} />
            {year !== null ? <Option title="Month" columns={3} options={months} selected={months[month]} onSelect={option => {
                setMonth(months.indexOf(option))
            }} /> : null}
            {month !== null ? <Option title="Day" columns={7} offset={dayOffset} options={days} selected={day} onSelect={option => {
                setDay(option)
            }} /> : null}
            {day !== null ? <Option title="Hour" columns={4} options={hours} selected={hours[hour]} onSelect={option => {
                setHour(hours.indexOf(option))
            }} /> : null}
            {day ? <button className={classes.button} onClick={() => {
                props.addCountdown(title, new Date(year, month, day, hour + 1, 0, 0));
                props.history.push('/countdown');
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

export default withRouter(connect(null, mapDispatchToProps)(NewCountdown));