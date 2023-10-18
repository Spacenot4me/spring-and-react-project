import React, {useState} from "react";
import axios from "axios";

function UpdateDogForm({dog}) {
    const [name, setName] = useState(dog.name);
    const [breed, setBreed] = useState(dog.breed);
    const [age, setAge] = useState(dog.age);
    const [imagePath, setImagePath] = useState(dog.img);

    function handleUpdateClick() {
        axios.put("http://localhost:666/api/v1/dogs/" + dog.id, {
            name,
            breed,
            age,
            imagePath
        }).then((response) => {
            if (response.status === 200) {
                // Update the dog data in the state of the Animal_card component
                // ...
            } else {
                console.log(response.data);
            }
            window.location.reload();
        });
    }


    return (
        <form onSubmit={handleUpdateClick}>
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
                   placeholder="Img"
                   value={imagePath}
                   onChange={(e) => setImagePath(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UpdateDogForm;