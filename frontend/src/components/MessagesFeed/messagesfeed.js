import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from '../../api/axios';
import {Message} from '../../components'

export default function MessagesPage() {
    const [messages, setMessage] = useState([])
    const [numMessages, setnumMessages] = useState(0)

    const URL = "/Assignment4Backend/GetMessages";
    useEffect (() => {
        try {
        axios.get(URL).then((response) => {
            console.log(response)
            setMessage(response.data);
            var count = response.data.length;
            setnumMessages(count);
        })
        } catch (err) {
        console.log(err)
        }
    }, []);

    const renderFeed = (
        <div>
            {
                messages.map((p, index) => {
                    return (
                        <div>
                            <Message key={index} name={p.name} date={p.date} message={p.message} />
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )

    return (
        <div>
        {numMessages >>> 0 ? renderFeed : <div>NO MESSAGES</div>}
        </div>
    );
    
};