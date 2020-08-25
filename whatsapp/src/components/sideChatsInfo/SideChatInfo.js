import React, {useState, useEffect} from 'react';
import {Avatar} from '@material-ui/core';
import styles from './sidechatsinfo.module.css';
function SideChatInfo({addNewChat}) {
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = e => {
        const chatName = prompt("What do you want to name the room");

        if(chatName){
            //we are goinf to use database here 
        }

    }
    return !addNewChat ? (
        <div className={styles.sideBarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className={styles.user__info}>
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ): (
        <div onClick={createChat} className={styles.sideBarChat}>
            <h2>Create New Room</h2>
        </div>
    )
}

export default SideChatInfo
