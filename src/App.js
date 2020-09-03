import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
        <div className="app_videos">
          <Video  channel="larry"
                  description="tik tokkers rock!"
                  song="99 problems but react ain't none"
                  likes={12334}
                  messages={240}
                  shares={645}
           url="https://ak.picdn.net/shutterstock/videos/7376872/preview/stock-footage-written-vintage-made-with-the-old-typewriter.webm"/>
          <Video  channel="John_Sane"
                  description="let's colonise mars"
                  song="space space baby"
                  likes={889}
                  messages={27}
                  shares={98}
          url="https://ak.picdn.net/shutterstock/videos/1020544114/preview/stock-footage-at-the-college-house-costume-party-fun-guy-wearing-space-suit-dances-off-doing-groovy-funky-robot.webm"/>
        </div>
    </div>
  );
}

export default App;
