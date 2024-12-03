import store from "../store/store";
import { setLocalStream } from "../store/actions/roomActions";
import Peer from 'simple-peer';
import * as socketConnction from './socketConnection';


const getConfiguration =() =>{
    const turnIceServers = null;

    if(turnIceServers){
        //TODO use TURN server credentials
    } else{
        console.warn('Using only STUN server');
        return {
            iceServers: [
                {
                    urls: 'stun:stun.1.google.com:19302'
                }

            ]
        }
    }
}

const onlyAudioConstraints = {
    audio: true,
    video: false
}

const defaultConstraints = {
    video: true,
    audio: true
}

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
    const constraints =  onlyAudio ? onlyAudioConstraints : defaultConstraints;

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream));
        callbackFunc();
    }).catch(err => {
        console.log(err);
        console.log("Cannot get an access to local stream");
    });

}

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) =>{
    const localStream = store.getState().room.localStream;

    if(isInitiator){
        console.log('preparing new peer connection as initiator');
    } else{
        console.log('preparing new peer connection as not initiatoe');
    }

    peers[connUserSocketId] = new Peer({
        initiator: isInitiator,
        config: getConfiguration(),
        stream: localStream
    });

    peers[connUserSocketId].on('signal', data =>{
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId
        };

        socketConnction.signalPeerData(signalData);
        });
    
    peers[connUserSocketId].on('stream', (remoteStream) =>{
        //TODO
        //add new remote stream to our server store
        console.log('remote stream came from the user');
        console.log('direct connection has been established');
        
    });
}

export const handleSignalingData = (data) =>{
    const{ connUserSocketId, signal } = data;

    if(peers[connUserSocketId]){
        peers[connUserSocketId].signal(signal);
    }
};