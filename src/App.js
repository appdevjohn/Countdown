import { useState, useEffect } from 'react';
import { getCountdowns, addCountdown, deleteCountdown } from './indexedDB';

import Countdowns from './containers/Countdowns';
import NewCountdown from './containers/NewCountdown';

const App = () => {
    const [countdowns, setCountdowns] = useState([]);

    useEffect(() => {
        getCountdowns().then(countdowns => {
            setCountdowns(countdowns);
        });
    }, []);

    const addCountdownHandler = (title, date) => {
        const newCountdown = {
            title: title.trim(),
            date: date,
            id: new Date()
        }

        addCountdown(newCountdown).then(() => {
            setCountdowns(prevCountdowns => {
                return [...prevCountdowns.map(cd => ({ ...cd })), newCountdown];
            });
        })
    }

    const deleteCountdownHandler = countdownId => {
        deleteCountdown(countdownId).then(() => {
            setCountdowns(prevCountdowns => {
                return prevCountdowns.filter(cd => cd.id !== countdownId).map(cd => ({ ...cd }));
            });
        })
    }

    return (
        <div style={{ position: 'relative' }}>
            <Countdowns countdowns={countdowns} onDeleteCountdown={deleteCountdownHandler} />
            <NewCountdown onAddCountdown={addCountdownHandler} />
        </div>
    );
}

export default App;