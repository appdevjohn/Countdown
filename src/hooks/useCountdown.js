import { useEffect, useState } from 'react';

const useCountdown = endDate => {
    const [seconds, setSeconds] = useState(Math.floor((endDate.getTime() - Date.now()) / 1000));

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSeconds(Math.floor((endDate.getTime() - Date.now()) / 1000));
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [seconds, setSeconds, endDate]);

    let secondsLeft = seconds;
    const outputDays = Math.floor(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;
    const outputHours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    const outputMinutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
    const outputSeconds = Math.floor(secondsLeft);

    return {
        days: outputDays >= 0 ? outputDays : 0,
        hours: outputHours >= 0 ? outputHours : 0,
        minutes: outputMinutes >= 0 ? outputMinutes : 0,
        seconds: outputSeconds >= 0 ? outputSeconds : 0
    }
}

export default useCountdown;