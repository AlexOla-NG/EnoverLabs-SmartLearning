import React, { useEffect, useState } from "react"

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000)

    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let totalSeconds  = parseInt(Math.floor(milliseconds / 1000));
        let totalMinutes  = parseInt(Math.floor(totalSeconds / 60));
        let totalHours  = parseInt(Math.floor(totalMinutes / 60));

        let seconds = parseInt(totalSeconds % 60);
        let minutes = parseInt(totalMinutes % 60);
        let hours = parseInt(totalHours % 24);

        return `${hours}: ${minutes}: ${seconds}`;
    }

    return <div>{getFormattedTime(time)}</div>;
}

export default Timer;
