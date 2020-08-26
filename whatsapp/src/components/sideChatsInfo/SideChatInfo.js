import React, {useState, useEffect} from 'react';
import {Avatar} from '@material-ui/core';
import styles from './sidechatsinfo.module.css';
import db from '../../firebase';
import {Link} from 'react-router-dom';

function SideChatInfo({addNewChat, id, name}) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db
                .collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('time', 'desc')
                .onSnapshot(snap => {
                    setMessages(snap.docs.map(doc => doc.data()))
                })
        }
    }, [id]);
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = e => {
        const chatName = prompt("What do you want to name the room");

        if (chatName) {
            db
                .collection('rooms')
                .add({name: chatName});
        }

    }
    return !addNewChat
        ? (
            <Link to={`/rooms/${id}`}>
                <div className={styles.sideBarChat}>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                    <div className={styles.user__info}>
                        <h2>{name}</h2>
                        <p>{messages[0]?.text}</p>
                    </div>
                </div>
            </Link>
        )
        : (
            <div onClick={createChat} className={styles.sideBarChat}>
                <h2>Create New Room</h2>
            </div>
        )
}

export default SideChatInfo
