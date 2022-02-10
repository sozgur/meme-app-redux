import "./Meme.css";

function Meme({ id, imgUrl, topText, bottomText, removeMeme }) {
    function handleRemove() {
        removeMeme(id);
    }
    return (
        <div className="meme">
            <img src={imgUrl} />
            <button className="remove-image" onClick={handleRemove}>
                &#215;
            </button>
            <div className="top-text">{topText}</div>
            <div className="bottom-text">{bottomText}</div>
        </div>
    );
}

export default Meme;
