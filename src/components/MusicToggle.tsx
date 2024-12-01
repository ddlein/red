import { useEffect, useRef } from "react";
import ToggleSwitch from "./ToggleSwitch";
import useToggles from "../services/useToggles";

const musicUrl = "/music.mp3";
const switchName = "music";

const MusicToggle = () => {
  const { checkActiveToggles, toggleSwitch } = useToggles();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const isMusicActive = checkActiveToggles(switchName);
    const isInvertActive = checkActiveToggles("invert");

    const shouldPlayMusic = isInvertActive ? !isMusicActive : isMusicActive;

    if (shouldPlayMusic) {
      audioRef.current
        ?.play()
        .catch((err) => console.error("Error playing audio:", err));
    } else {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
    }
  }, [checkActiveToggles]);

  const handleClick = () => toggleSwitch(switchName);

  return (
    <ToggleSwitch
      isActive={checkActiveToggles(switchName)}
      onToggle={handleClick}
    >
      Музыка
    </ToggleSwitch>
  );
};

export default MusicToggle;
