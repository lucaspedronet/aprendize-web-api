import React, { useEffect, useRef, useState } from 'react';
import { Header, Main } from '../../components/CallPage';
import logo from '../../assets/Avatar.png';
import { LocalVideo, RemoteVideo, VideoControls } from '../../components/CallContainers';
import { createPeerConnectionContext } from '../../utils/video-call';
import { useParams } from 'react-router-dom';

const senders: any[] = [];
const videoConnection = createPeerConnectionContext();

const Room: React.FC = () => {
  const { room } = useParams<{ room: string }>();
  const [connectedUsers, setConnectedUsers] = useState<any[]>([]);
  const [userMediaStream, setUserMediaStream] = useState<any>(null);
  const [displayMediaStream, setDisplayMediaStream] = useState<any>(null);
  const [startTimer, setStartTimer] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);

  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const createMediaStream = async () => {
      if (!userMediaStream) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { min: 640, ideal: 1920 },
            height: { min: 400, ideal: 1080 },
            aspectRatio: { ideal: 1.7777777778 },
          },
          audio: true,
        });

        if (localVideo && localVideo.current) {
          // @ts-ignore: Object is possibly 'undefined'
          localVideo.current.srcObject = stream;
        }

        stream.getTracks().forEach((track) => {
          senders.push(videoConnection.peerConnection.addTrack(track, stream));
        });

        setUserMediaStream(stream);
      }
    };

    createMediaStream();
  }, [userMediaStream]);

  useEffect(() => {
    videoConnection.joinClass(room);
    videoConnection.onRemoveUser((socketId: any) =>
      setConnectedUsers((users) => users.filter((user) => user !== socketId)),
    );
    videoConnection.onUpdateUserList((users: any) => setConnectedUsers(users));
    videoConnection.onCallAccepted((socket: any) => videoConnection.callUser(socket));
    videoConnection.onCallRejected((data: any) => alert(`User: "Socket: ${data.socket}" rejected your call.`));
    videoConnection.onTrack((stream: any) => {
      // @ts-ignore: Object is possibly 'undefined'
      remoteVideo.current.srcObject = stream;
    });

    videoConnection.onConnected(() => {
      setStartTimer(true);
    });
    videoConnection.onDisconnected(() => {
      setStartTimer(false);
      // @ts-ignore: Object is possibly 'undefined'
      remoteVideo.current.srcObject = null;
    });
  }, []);

  async function shareScreen() {
    // @ts-ignore
    const stream = displayMediaStream || (await navigator.mediaDevices.getDisplayMedia());

    await senders.find((sender) => sender.track.kind === 'video').replaceTrack(stream.getTracks()[0]);

    stream.getVideoTracks()[0].addEventListener('ended', () => {
      cancelScreenSharing(stream);
    });

    // @ts-ignore: Object is possibly 'undefined'
    localVideo.current.srcObject = stream;

    setDisplayMediaStream(stream);
  }

  async function cancelScreenSharing(stream: any) {
    await senders
      .find((sender) => sender.track.kind === 'video')
      .replaceTrack(userMediaStream.getTracks().find((track: any) => track.kind === 'video'));

    // @ts-ignore: Object is possibly 'undefined'
    localVideo.current.srcObject = userMediaStream;
    stream.getTracks().forEach((track: any) => track.stop());
    setDisplayMediaStream(null);
  }

  function fullScreen() {
    setFullScreen(true);
    const elem: any = mainRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

  function cancelFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // @ts-ignore
    } else if (document.mozCancelFullScreen) {
      // @ts-ignore
      document.mozCancelFullScreen();
      // @ts-ignore
    } else if (document.webkitExitFullscreen) {
      // @ts-ignore
      document.webkitExitFullscreen();
      // @ts-ignore
    } else if (document.msExitFullscreen) {
      // @ts-ignore
      document.msExitFullscreen();
    }
  }

  function handleFullScreen(isFullScreen: boolean) {
    setFullScreen(isFullScreen);
    if (isFullScreen) {
      fullScreen();
    } else {
      cancelFullScreen();
    }
  }

  async function handleScreenSharing(isScreenShared: boolean) {
    if (isScreenShared) {
      await shareScreen();
    } else {
      await cancelScreenSharing(displayMediaStream);
    }
  }

  return (
    <div className={'container'}>
      <Header
        onNavItemSelect={(user) => videoConnection.callUser(user.id)}
        navItems={connectedUsers.map((user) => ({ id: user, title: user }))}
        title="Aprendize"
        picture={logo}
      />

      <Main ref={mainRef}>
        <RemoteVideo ref={remoteVideo} autoPlay />
        <LocalVideo ref={localVideo} autoPlay muted />
        <VideoControls
          isScreenSharing={Boolean(displayMediaStream)}
          onScreenShare={handleScreenSharing}
          isFullScreen={isFullScreen}
          onFullScreen={handleFullScreen}
          isTimerStarted={startTimer}
        />
      </Main>
    </div>
  );
};

export { Room };
