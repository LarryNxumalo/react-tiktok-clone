import React, {useRef, useState} from 'react';
import "./Video.css";
import VideoSidebar from './components/VideoSidebar';
import VideoFooter from './components/VideoFooter';

function Video({url,likes, shares, messages,channel, description, song}) {
    const  [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        //if video is playing
        //stop video....

        if (playing) { //if the video is playing
            videoRef.current.pause(); //target video ref.get the current thing it's pointing at using refs. the stop
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }

        //otherwise if it is not playing
        //play it
    }
  return (
    <div className="video">
        <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video_player"
        src={url}>
        </video>
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        <VideoFooter channel={channel} description={description} song={song}/>
    </div>

  );
}

export default Video;