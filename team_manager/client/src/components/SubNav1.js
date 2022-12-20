import { Link } from "@reach/router";
import { useEffect, useState } from "react";

// This component is the subnav for ListPlayers and AddPlayer - left side of wireframe

const SubNav1 = (props) => {
  const { listPageIsActive, setListPageIsActive } = props;
  const [listTabStyle, setListTabStyle] = useState({});
  const [addPlayerTabStyle, setAddPlayerTabStyle] = useState({});
  const styleObjBold = {
    fontWeight: "800",
  };

  useEffect(() => {
    if (listPageIsActive) {
      setListTabStyle(styleObjBold);
      setAddPlayerTabStyle({});
    } else {
      setListTabStyle({});
      setAddPlayerTabStyle(styleObjBold);
    }
  }, [listPageIsActive]);
  return (
    <div>
      <span style={{ ...listTabStyle }} className="sub-nav-text">
        <Link to="/players/list">List | </Link>
      </span>
      <span style={{ ...addPlayerTabStyle }} className="sub-nav-text">
        <Link to="/players/addplayer">Add Player</Link>
      </span>
    </div>
  );
};

export default SubNav1;