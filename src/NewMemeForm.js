import { useState } from "react";

function NewMemeForm({ addMeme }) {
    const INITIAL_DATA = { imgUrl: "", topText: "", bottomText: "" };
    const [formData, setFormData] = useState(INITIAL_DATA);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addMeme(formData);
        setFormData(INITIAL_DATA);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label
                        htmlFor="image-url"
                        className="col-sm-2 col-form-label"
                    >
                        Image URL:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="imgUrl"
                            value={formData.imgUrl}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="top-input-text"
                        className="col-sm-2 col-form-label"
                    >
                        Text On Top:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="topText"
                            value={formData.topText}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="bottom-input-text"
                        className="col-sm-2 col-form-label"
                    >
                        Text On Bottom:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="bottomText"
                            value={formData.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-info">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NewMemeForm;
