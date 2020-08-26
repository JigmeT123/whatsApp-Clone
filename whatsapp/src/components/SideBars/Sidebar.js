import React, {useState, useEffect} from 'react'
import styles from './sidebar.module.css';
import {Avatar, IconButton} from "@material-ui/core";
import {DonutLarge, Chat, MoreVert, SearchOutlined} from '@material-ui/icons'
import SideChatInfo from '../sideChatsInfo/SideChatInfo';
import db from '../../firebase';
import { useStateValue } from '../../ReduxStuffs/StateProvider';
function Sidebar() {

    const [rooms, setRooms] = useState([])
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db
            .collection('rooms')
            .onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc => {
                return ({id: doc.id, data: doc.data()})
            }))));
            return () => {
                unsubscribe();
            }
    }, [])
    return (
        <div className={styles.sideBar}>
            {/* sideBar Header */}
            <div className={styles.sidebar__header}>
                <Avatar src={user?.photoURL}/>
                <div className={styles.header__logoContainer}>
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>
            {/* sideBar Search */}
            <div className={styles.sidebar__search}>
                <div className={styles.sideBar__searchContainer}>
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>
            {/* side bar people sections */}
            <div className={styles.sidebar__sections}>
                <SideChatInfo addNewChat="addNewChat"/>
                {rooms.map(room => (
                    <SideChatInfo key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
