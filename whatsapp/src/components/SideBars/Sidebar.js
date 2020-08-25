import React from 'react'
import styles from './sidebar.module.css';
import {Avatar, IconButton} from "@material-ui/core";
import {DonutLarge, Chat, MoreVert, SearchOutlined} from '@material-ui/icons'
import SideChatInfo from '../sideChatsInfo/SideChatInfo';
function Sidebar() {
    return (
        <div className={styles.sideBar}>
            {/* sideBar Header */}
            <div className={styles.sidebar__header}>
                <Avatar/>
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
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>
            {/* side bar people sections */}
            <div className={styles.sidebar__sections}>
                <SideChatInfo addNewChat/>
                <SideChatInfo />
                <SideChatInfo />
                <SideChatInfo />
            </div>
        </div>
    )
}

export default Sidebar
