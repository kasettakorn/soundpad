import { useEffect, useState } from 'react';
import '../style/style.css';

type SoundPadProps = {
  name: String
  soundName: String
  icon: String
  index: number
}

export default function SoundpadBtn(props: SoundPadProps) {

  const [isPlay, setIsPlay] = useState(false);
  const [audio, setAudio] = useState(new Audio(`${process.env.PUBLIC_URL}/sounds/${props.soundName}`));


  const handleClick = () => {
    if (isPlay) {
      document.getElementsByClassName('key')[props.index].classList.remove('active');
      audio.pause();
      audio.currentTime = 0;
    }
    else {
      document.getElementsByClassName('key')[props.index].classList.add('active');
      audio.play();
    }

    setIsPlay(!isPlay);
  }

  return (
    <div key={props.index} className='key' onClick={handleClick}>
      <kbd>{props.icon}</kbd>
      <span className='sound'>{props.name}</span>
    </div>


  )
}
