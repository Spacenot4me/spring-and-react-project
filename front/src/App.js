//App.js

import React, {useEffect, useState} from "react";
import {getDogs} from "./Animals_data";
import axios from "axios";
import UpdateDogForm from "./UpdateDogForm";
import Header from "./Header";


export default function App() {


    const [dogs, setDogs] = useState([])

    useEffect(() => {
        getDogs().then((dogs) => setDogs(dogs))
    }, []);

    function deleteDog(id) {
        axios.delete("http://localhost:666/api/v1/dogs/" + id).then((response) => {
            if (response.status === 200) {
                setDogs(dogs.filter((dog) => dog.id !== id));
            } else {
                console.log(response.data);
            }
        })
    }

    function Animal_card(props) {
        const [isFormVisible, setIsFormVisible] = useState(false);

        function handleUpdateClick() {
            setIsFormVisible(true);
        }



        return (
            <div className="column">
                <img src={require(`./img/${props.img}`)} className="card-img" alt="dog"/>
                <h3 className="card-charactericstics-light">ID: {props.id}</h3>
                <h3 className="card-charactericstics-dark">Name: {props.name}</h3>
                <h3 className="card-charactericstics-light">Breed: {props.breed}</h3>
                <h3 className="card-charactericstics-dark">Age: {props.age}</h3>
                <button className="card-change-button" onClick={handleUpdateClick}>Update</button>
                {isFormVisible && <UpdateDogForm dog={props}/>}
                <button className="card-delete-button" onClick={() => deleteDog(props.id)}>Delete</button>
            </div>
        )
    }

    function addDog() {
        const name = prompt("Enter the dog's name");
        const breed = prompt("Enter the dog's breed");
        const age = prompt("Enter the dog's age");
        const image_path = prompt("Enter file name")

        axios.post("http://localhost:666/api/v1/dogs", {
            name,
            breed,
            age,
            image_path
        }).then((response) => {
            if (response.status === 201) {
                setDogs([...dogs, response.data]);
            } else {
                console.log(response.data);
            }
            window.location.reload();
        })
    }


    return (
        <div className="super_main_div">
            <Header/>
            <main>
                <div className="main--create-button">
                    <button className="addDog" onClick={() => addDog()}>Add Dog</button>
                </div>
                <div className="main--cards">
                    {dogs.map((dog) => (
                        <Animal_card id={dog.id} name={dog.name} breed={dog.breed} img={dog.imagePath} age={dog.age} />
                    ))}
                </div>
            </main>
        </div>
    );
}

