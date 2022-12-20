import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import ListPlayers from "./components/ListPlayers";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";
import PlayerStatus from "./components/PlayerStatus";
import Nav from "./components/Nav";

function App() {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] =
    useState(false);
  return (
    <div>
      <Nav
        managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />
      <Router>
        <ListPlayers
          path="/players/list"
          default
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />
        <AddPlayer
          path="/players/addplayer"
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />
        <PlayerStatus
          path="/status/game/:gameId"
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />
      </Router>
    </div>
  );
}

export default App;