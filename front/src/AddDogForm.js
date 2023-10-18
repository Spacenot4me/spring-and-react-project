// AddDogForm.js

import React, {useState} from "react";
import axios from "axios";

function AddDogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [image_path, setImage_path] = useState("");

    function handleSubmitClick() {
        axios.post("http://localhost:666/api/v1/dogs", {
            name,
            breed,
            age,
            image_path,
        }).then((response) => {
            if (response.status === 201) {
                // Notify the user that the dog was added successfully
            } else {
                console.log(response.data);
            }
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmitClick}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="text"
                       placeholder="img"
                       value={image_path}
                       onChange={(e) => setImage_path(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddDogForm;
