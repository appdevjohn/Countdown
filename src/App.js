import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountdowns } from './indexedDB';

import Countdowns from './containers/Countdowns/Countdowns';
import NewCountdown from './containers/NewCountdown/NewCountdown';

import classes from './App.module.css';

const App = props => {
    const { onSetCountdowns } = props;
    useEffect(() => {
        getCountdowns().then(countdowns => {
            onSetCountdowns(countdowns);
        });
    }, [onSetCountdowns]);  

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

const mapDispatchToProps = dispatch => {
    return {
        onSetCountdowns: countdowns => dispatch({
            type: 'COUNTDOWNS_SET',
            countdowns: countdowns
        })
    }
}

export default connect(null, mapDispatchToProps)(App);
