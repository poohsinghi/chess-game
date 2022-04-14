import {Stack, Typography, Switch, Button} from "@mui/material";
import './App.css';
import SimpleGame from "./components/SimpleGame";
import ComplexGame from "./components/ComplexGame";
import {useRef, useState} from "react";

function App() {
  const [mode, setMode] = useState(false);

  const handleChangeMode = (event) => {
      setMode(event.target.checked);
  }

  const boardRef = useRef();
  const chessBoard = mode ? <ComplexGame ref={boardRef} /> : <SimpleGame ref={boardRef}/>;

  return (
    <div className="App">
      <header className="App-header">
          <p>Chess Game</p>
      </header>
      <div className="Mode">
          <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Simple</Typography>
              <Switch checked={mode} onChange={handleChangeMode}/>
              <Typography>Complex</Typography>
              <Button variant="contained" onClick={() => boardRef.current.play()}>Play!</Button>
          </Stack>
      </div>
      {chessBoard}
    </div>
  );
}

export default App;
