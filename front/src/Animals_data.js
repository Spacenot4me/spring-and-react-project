//Animals_data.js

import axios from "axios";

/*export  function getDogs() {

    // axios.get('https://fortnite-api.com/v2/cosmetics/br').then((response) => {
    axios.get('http://localhost:666/api/v1/dogs').then((response) => {
        console.log(response.data)
        // setData(response.data)
        return response.data
    })
        .catch((error) => {
            console.error(error)
        })
}*/

export const getDogs = async () => {
    const response = await axios.get("http://localhost:666/api/v1/dogs");
    return response.data;
};