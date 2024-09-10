import { useEffect, useState } from "react";
import "../styles/card.css"

let gamearr = []
export default function Card({id , handleChange})

{   
    const [heros, setHeroes] = useState([]); 
    const [img, setImg] = useState("");
    
     
    useEffect(() => {   
        (async () => {
            const data = await fetch(`https://www.superheroapi.com/api.php/282477491266100/${id}` , {mode: "cors"}).then(res => res.json());
            setHeroes(data);
            setImg(data.image.url); 
        })();

    } , []);    

    function gameLogic(e) 
    {
        gamearr.push(id);
        for (let i = 0; i < gamearr.length; i++)
        {
            for (let j = 0; j < gamearr.length; j++) 
            {
                if (i != j) {
                    if (gamearr[i] == gamearr[j]) {
                        alert("Game Ends")
                        location.reload()
                        gamearr = [];
                    }
                }
                
            }
        }
        
    }

    
    return(
        <div className="card"  >
            <div className="heroimage">
                <img src={img} onClick={() => {
                    handleChange();
                    gameLogic();
                }} alt={heros.name} />
            </div>
            <button  onClick={() => {
                handleChange();
                gameLogic();

            }} className="Name">{heros.name}</button>
        </div>
    )
}

