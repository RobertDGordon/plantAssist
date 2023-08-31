import React from "react";
import "../styles/PlantCard.css";
import { Link } from 'react-router-dom'

function FolderCard(props) {
  const { folder } = props;

  const styles = {
    // backgroundImage: `url(${plant.image})`,
    backgroundSize: "cover",
    justifyContent: "center",
    width: "50vh",
    height: "50vh"
  };

  return (
    <>
    <div className="body">
      <div style={styles}>
        <div className="name-desc">
        <div className="plant-name">
        <Link to={`/folders/${folder.id}`}>Name: <b>{folder.title}</b> </Link>
        </div>
        </div> 
        {/* <div className="buttons"> */}
        <button className="card-button" >
        💗
        </button>
        <button className="folder-button" >
          ➕
        </button>
      {/* </div> */}
    </div>
    </div>
    </>
  );
}
export default FolderCard;
