// create your App component here
import React, { useEffect, useState } from "react";

const API ="https://dog.ceo/api/breeds/image/random"

function App(){
    const [dogPic, setDogPic] = useState(null);

    useEffect(() => {
        fetch (API)
            .then((response) => response.json())
            .then((data) =>{setDogPic(data.message)

            });
    }, []);

    if (!dogPic) return <p>Loading ....</p>;


    return <img src={dogPic} alt = "A Random Dog" />;
}

export default App;