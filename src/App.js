import { Switch, Route } from 'react-router-dom';

import Countdowns from './containers/Countdowns/Countdowns';
import NewCountdown from './containers/NewCountdown/NewCountdown';

import classes from './App.module.css';

function App() {

    return (
        <div className={classes.App}>
            <Switch>
                <Route path="/new-countdown" exact>
                    <NewCountdown />
                </Route>
                <Route path="/">
                    <Countdowns />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
