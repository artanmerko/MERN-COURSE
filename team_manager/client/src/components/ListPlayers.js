import axios from "axios";
import { useEffect, useState } from "react";
import SubNav1 from "./SubNav1";
import  "../App.css";

const ListPlayers = (props) => {
  const [playerData, setPlayerData] = useState([]);
  const {
    listPageIsActive,
    setListPageIsActive,
    setManagePlayerStatusTabIsActive,
  } = props;
  useEffect(() => {
    setListPageIsActive(true);
    setManagePlayerStatusTabIsActive(false);
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/player")
      .then((response) => {
        console.log(response);
        setPlayerData(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const handleDeletePlayer = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/player/${idFromBelow}`)
      .then((response) => {
        const newList = playerData.filter(
          (player, index) => player._id !== idFromBelow
        );
        setPlayerData(newList);
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <div>
      <SubNav1
        listPageIsActive={listPageIsActive}
        setListPageIsActive={setListPageIsActive}
      />
      <h2>List Players Component</h2>
      <table className="App">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((player, index) => {
            return (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.preferredPosition}</td>
                <td>
                  <button
                    onClick={() => handleDeletePlayer(player._id)}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListPlayers;