import Countdown from './components/Countdown/Countdown';

import classes from './App.module.css';

function App() {
    const earthDay = new Date();
    earthDay.setFullYear(2021, 3, 22);
    earthDay.setHours(9, 0, 0, 0);

    return (
        <div className={classes.App}>
            <Countdown title="Earth Day" date={earthDay} />
        </div>
    );
}

export default App;
