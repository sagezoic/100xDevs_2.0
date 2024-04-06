import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setScoket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  useEffect(() => {
    // It is a implicit type of WebSocket
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = () => {
      console.log("connected");
      setScoket(ws);
    };
    ws.onmessage = (event) => {
      console.log("Received Message", event.data);
      setMessage(event.data);
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
    setScoket(ws);

    return () => {
      ws.close();
    };
  }, []);

  if (!socket) {
    return <div>Connecting to socket server...</div>;
  }
  return (
    <>
      <input type="text" onChange={(e) => setSendMessage(e.target.value)} />
      <button onClick={() => socket.send(sendMessage)}>Send</button>
      <br />
      {message}
    </>
  );
}

export default App;
