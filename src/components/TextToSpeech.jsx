import React, { useState, useEffect } from "react";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        // Check for Vietnamese language support and set the language accordingly
        const voices = synth.getVoices();
        const vietnameseVoice = voices.find((voice) => voice.lang === 'vi-VN');
        if (vietnameseVoice) {
            u.voice = vietnameseVoice;
            voiceFound = true;
        } else {
            console.warn('Vietnamese voice not found. Default voice will be used.');
            // Set a default voice
            u.lang = 'en-US'; // Default language (English - United States)
            u.voiceURI = 'native';
        }

        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        }

        synth.speak(utterance);
        setIsPlaying(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
        setIsPlaying(false);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
        setIsPlaying(false);
    };

    return (
        <div style={styles.container}>
            <button className="btn btn-outline-primary me-3" onClick={handlePlay}> <FontAwesomeIcon icon={faPlay} /></button>
            <button className="btn btn-outline-warning" style={{ display: (!isPlaying || isPaused) ? "none" : "block", margin: "0px 10px" }} onClick={handlePause}><FontAwesomeIcon icon={faPause} /></button>
            <button className="btn btn-outline-danger ms-3" onClick={handleStop}><FontAwesomeIcon icon={faStop} /></button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '7px',
        // background: '#f5f5f5',
    },
};

export default TextToSpeech;
