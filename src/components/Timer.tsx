import {Player} from "../models/Player";
import React, {useEffect, useRef, useState} from "react";
import {Colors} from "../models/Colors";

type TimerProps = {
    currentPlayer: Player | null
    restart: () => void
}

export const Timer: React.FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }
    function handleRestart() {
        setBlackTime(300)
        setWhiteTime(300)
        restart()
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }
    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }

    return (
        <div className={"timer"}>
            <h3>Белые - {whiteTime}</h3>
            <h3>Черные - {blackTime}</h3>
            <div>
                <button onClick={handleRestart}>Restart game</button>
            </div>
        </div>
    )
}