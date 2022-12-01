import { useEffect, useState } from 'react';
import './styles.css';

export default function MessagesPage( props ) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setValue] = useState("");
    const [ws, setWS] = useState(null);

    useEffect(() => {
        setWS(new WebSocket("ws://localhost:8080/Assignment4Backend/ws"));
    }, []);

    useEffect(() => {
        if(ws != null){
            ws.onopen = (event) => {
                console.log("Connected");
            };
            ws.onmessage = function (event) {
                setMessages(messages => [...messages, event.data]);
            };
            //return () => ws.close();
            ws.onclose = function(event) {
                console.log(event.data);
            }
        }

    }, [ws]);

    
    
    const sendMessage = () => {
        ws.send(inputValue);
    }


    return (
        <div>
            <form name="chatform">
                <input type="text" name="message" value={inputValue} onChange={event => setValue(event.target.value)} /><br />
                <input type="button" value="Send Message" onClick={sendMessage} />
                <br />
            </form>
            <br />
            {
                messages.map(message => {
                    //style this:
                    return <h1>{message}</h1>
                })
            }

        </div>
    );
}
