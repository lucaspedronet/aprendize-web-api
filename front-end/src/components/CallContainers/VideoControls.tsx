import React, { useEffect, useState } from 'react';
import { FullScreenButton, ShareScreen } from '../CallComponents';

type Props = {
  isScreenSharing: boolean;
  onScreenShare: (b: boolean) => any;
  isFullScreen: boolean;
  onFullScreen: (b: boolean) => any;
  isTimerStarted: boolean;
};

export const VideoControls = ({
  isScreenSharing,
  onScreenShare,
  isFullScreen,
  onFullScreen,
  isTimerStarted,
}: Props) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isTimerStarted) {
      interval = setInterval(() => setElapsedTime((time) => time + 1), 1000);
    } else {
      setElapsedTime(0);
    }

    return () => clearInterval(interval);
  }, [isTimerStarted]);

  function formatElapsedTime(elapsedTime: any) {
    return new Date(elapsedTime * 1000).toISOString().substr(11, 8);
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '24px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}>
      <div>
        <ShareScreen isSharing={isScreenSharing} onToggle={() => onScreenShare(!isScreenSharing)} />
        <FullScreenButton isFullScreen={isFullScreen} onToggle={() => onFullScreen(!isFullScreen)} />
      </div>
      <span style={{ color: 'white', fontWeight: 'bold', right: '40px', bottom: '12px', position: 'absolute' }}>
        {formatElapsedTime(elapsedTime)}
      </span>
    </div>
  );
};
