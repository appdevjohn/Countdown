import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
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

    useEffect(() => {
        if (year !== null && month === null) {
            document.getElementById('month-option').scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (month !== null && day === null) {
            document.getElementById('day-option').scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (day !== null && hour === null) {
            document.getElementById('hour-option').scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (hour !== null) {
            document.getElementById('create-button').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [year, month, day, hour])

    return (
        <div className={classes.NewCountdown}>
            <NavBar title="New Countdown" back="/" />
            <input
                className={classes.titleInput}
                type="text" name="title"
                placeholder="Title"
                value={title}
                onChange={event => {
                    setTitle(event.target.value);
                }} />
            <Option
                id="year-option"
                title="Year"
                display={true}
                columns={3}
                options={['2021', '2022', '2023']}
                selected={year}
                onSelect={option => {
                    setYear(option);
                }} />
            <Option
                id="month-option"
                title="Month"
                display={year !== null}
                columns={3}
                options={months}
                selected={months[month]}
                onSelect={option => {
                    setMonth(months.indexOf(option));
                }} />
            <Option
                id="day-option"
                title="Day"
                display={month !== null}
                columns={7}
                offset={dayOffset}
                options={days}
                selected={day}
                onSelect={option => {
                    setDay(option);
                }} />
            <Option
                id="hour-option"
                title="Hour"
                display={day !== null}
                columns={4}
                options={hours}
                selected={hours[hour]}
                onSelect={option => {
                    setHour(hours.indexOf(option));
                }} />
            <button
                id="create-button"
                className={classes.button}
                style={{ display: hour !== null ? 'block' : 'none' }}
                onClick={() => {
                    props.addCountdown(title, new Date(year, month, day, hour, 0, 0));
                    props.history.push('/');
                }}>Add Countdown</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addCountdown: (title, date) => dispatch({
            type: 'COUNTDOWN_ADD',
            title: title,
            date: date,
            id: title + date.toString()
        })
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NewCountdown));