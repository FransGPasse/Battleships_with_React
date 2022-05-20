import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRoomContext } from "../contexts/RoomContextProvider";

//Joinpage-sidan
export default function JoinPage() {
  const { socket } = useRoomContext();
  const navigate = useNavigate();

  //Sätter state för ifall man väntar på en motståndare
  const [waiting, setWaiting] = useState(false);

  //Sätter state för ifall båda spelarna är redo
  const [connected, setConnected] = useState(false);

  //Tar hand om när knappen (formuläret) klickas på och säger till servern att en spelare vill joina
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User with id '${socket.id}' connected`);

    socket.emit("user_connected", socket.id);
  };

  //Skickar waiting till servern och
  useEffect(() => {
    socket.on("waiting", () => setWaiting(true));
  }, [socket]);

  useEffect(() => {
    socket.on("start_game", () => {
      setWaiting(false);
      setConnected(true);
    });
  }, [socket]);

  if (waiting) {
    return (
      <div>
        {" "}
        <h1>Waiting...</h1>
      </div>
    );
  }

  if (connected) {
    return (
      <div>
        {" "}
        <h1>Connected!</h1>
      </div>
    );
  }

  return (
    <div id="container">
      <h2>Let's play battleships!</h2>
      <p>Click below to play</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Join the game</button>
      </form>
    </div>
  );
}
