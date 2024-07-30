import React ,{ useEffect, useState }from 'react';
import Icon from '@mdi/react';
import { mdiFullscreen } from '@mdi/js';
import { mdiFullscreenExit } from '@mdi/js';
import { mdiPlay } from '@mdi/js';
import { mdiStop } from '@mdi/js';
import { mdiRewind } from '@mdi/js';
import { mdiFastForward } from '@mdi/js';
import { mdiListBoxOutline } from '@mdi/js';

const VideoControls = ({ isPlaying, onPlayPause, onRewind, onForward, size=1, season, episode, onFullscreen, fullscreen, onPause, durationMillis, positionMillis, setPosition}) => {
  const iconColor='white'
  const [ active, setActive ]= useState(true)
  const playActive = ()=>{
    onPlayPause()
    setTimeout(()=>{setActive(false)},2000)
  }
  const activeOn = ()=>{
    setActive(true)
    setTimeout(()=>{setActive(false)},9000)
  }
  return (
    <>
    {active?<>
    <div className='flex flex-col justify-center items-center w-full bg-slate-600'>
        <div className='flex flex-col justify-center items-left w-full'>
           <p className='text-white '>{(positionMillis? (positionMillis / 1000 )/60:0).toFixed(2)}/{(durationMillis? (durationMillis / 1000 )/60:0).toFixed(2)}</p>
           {/* <Slider
             style={styles.slider}
             minimumValue={0}
             maximumValue={durationMillis || 0}
             value={positionMillis || 0}
             onSlidingComplete={async value => {
               await setPosition(value);
             }}
             minimumTrackTintColor="#1EB1FC"
             maximumTrackTintColor="#8B9CB6"
             thumbTintColor="#1EB1FC"
           /> */}
        </div>
        <div className='flex flex-row justify-around items-center w-full'>
            <button onClick={() => onRewind(-10)}>
                <Icon path={mdiRewind} size={size} color={iconColor}/>
            </button>
            <button onClick={isPlaying?onPause:playActive}>
                <Icon path={isPlaying ?mdiStop :mdiPlay} size={size} color={iconColor}/>
            </button>
            <button onClick={() => onForward(10)}>
                <Icon path={mdiFastForward} size={size} color={iconColor}/>
            </button>
            {/* {episode&&season?
            <>
                <Season array={season.array}/>
                <Episode array={episode.array}/>
            </>:null} */}
            <button onClick={onFullscreen}>
                <Icon path={fullscreen?mdiFullscreenExit:mdiFullscreen} size={size} color={iconColor} />
            </button>
        </div>
    </div>
    <button 
        className='absolute left-1/2 top-1/2'
        onClick={isPlaying?onPause:playActive}>
        <Icon path={isPlaying ?mdiStop :mdiPlay} size={size+0.5} color={iconColor} />
    </button>
    </>
    :<button 
        onClick={()=>activeOn()}>
    </button>}
    </>
  );
};

export default VideoControls;

