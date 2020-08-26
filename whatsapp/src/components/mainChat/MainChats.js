import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styles from './mainchat.module.css';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from '@material-ui/icons'
import db from '../../firebase';
import {useStateValue} from '../../ReduxStuffs/StateProvider';

import firebase from 'firebase';
function MainChats() {

    const [seed, setSeed] = useState('')
    const [message, setMessage] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messageFromDb, setMessageFromDb] = useState([]);

    const [
        {
            user
        }, dispatch] = useStateValue();
    useEffect(() => {
        if (roomId) {
            db
                .collection('rooms')
                .doc(roomId)
                .onSnapshot(snap => {
                    setRoomName(snap.data().name)
                });

            db
                .collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('time', 'asc')
                .onSnapshot(snap => (setMessageFromDb(snap.docs.map(doc => doc.data()))))
        }
    }, [roomId]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = e => {
        e.preventDefault();
        console.log("You typed >>> " + message);
        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                text: message, name: user.displayName, time: firebase
                    .firestore
                    .FieldValue
                    .serverTimestamp()
            })
        setMessage("");
    }
    return (
        <div className={styles.mainChats}>
            {/* Main Chats Header */}
            <div className={styles.mainChats__header}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className={styles.mainChats__headerInfo}>
                    <h3>{roomName}</h3>
                    <p>{'Last Seen '+
                            new Date(
                                messageFromDb[messageFromDb.length - 1]
                                    ?.time
                                        ?.toDate()
                            ).toUTCString()
                        }</p>
                </div>
                <div className={styles.mainchats__headerIcons}>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            {/* Main chats Body */}
            <div className={styles.mainChats__body}>
                {
                    messageFromDb.map(msg => (
                        <p
                            className={`${styles.chat__messages} ${user.displayName === msg.name && styles.chat__reciever}`}>
                            <span className={styles.chatName}>{msg.name}</span>
                            {msg.text}
                            <span className={styles.timeStamp}>{
                                    new Date(
                                        msg.time
                                            ?.toDate()
                                    ).toUTCString()
                                }</span>
                        </p>
                    ))
                }

            </div>
            {/* Main chats footer */}
            <div className={styles.mainChats__footer}>
                <InsertEmoticon/>
                <form>
                    <input
                        value={message}
                        type="text"
                        onChange={e => {
                            setMessage(e.target.value);
                        }}
                        placeholder="Type a Message"></input>
                    <button type="submit" onClick={sendMessage}></button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default MainChats
