import "./App.css";
import NewMemeForm from "./NewMemeForm";
import Meme from "./Meme";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function App() {
  //pull in the memes from the store
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();

  //add meme function on store
  // memeData = {src, topText, bottomText}
  function addMeme(memeData) {
    // add unique id to meme Data
    memeData["id"] = uuid();
    dispatch({ type: "ADD", meme: memeData });
  }

  function removeMeme(id) {
    dispatch({ type: "REMOVE", id: id });
  }

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <NewMemeForm addMeme={addMeme} />
      <div className="meme-container">
        {memes.map((meme) => (
          <Meme
            key={meme.id}
            id={meme.id}
            imgUrl={meme.imgUrl}
            topText={meme.topText}
            bottomText={meme.bottomText}
            removeMeme={removeMeme}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
