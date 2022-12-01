import { MessagesFeed, Message } from '../../components';
import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from '../../api/axios';


export default function MessagesPage( ) {


    return (
        <div className="messages">

            <Message id="message-feed"/>

        </div>
    );
}

