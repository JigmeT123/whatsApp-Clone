import React, {useEffect, useState} from 'react'
import styles from './mainchat.module.css';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from '@material-ui/icons'
function MainChats() {

    const [seed, setSeed] = useState('')
    const [message , setMessage] = useState("")
    useEffect(()=> {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const sendMessage = e => {
        e.preventDefault();
        console.log("You typed >>> " + message);
        setMessage('');
    }
    return (
        <div className={styles.mainChats}>
            {/* Main Chats Header */}
            <div className={styles.mainChats__header}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className={styles.mainChats__headerInfo}>
                    <h3>Room Name</h3>
                    <p>Last Seen ...</p>
                </div>
                <div className={styles.mainchats__headerIcons}>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                </div>
            </div>
            {/* Main chats Body */}
            <div className={styles.mainChats__body}>
                <p className={`${styles.chat__messages} ${true && styles.chat__reciever}`}>
                    <span className={styles.chatName}>Jigme</span>
                    Hey Guys
                    <span className={styles.timeStamp}>3:45 pm</span>
                    </p>
            </div>
            {/* Main chats footer */}
            <div className={styles.mainChats__footer}>
                <InsertEmoticon />
                <form>
                    <input value={message} type="text" onChange={e => {
                        setMessage(e.target.value);
                    }} placeholder="Type a Message"></input>
                    <button type="submit" onClick={sendMessage}>SendMessage</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default MainChats
