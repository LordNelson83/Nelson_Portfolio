import {Link} from "react-router-dom";
import { bilderId } from "../data/bilderId";
import { useEffect,useState } from "react";

const Bilder=()=>{
    const[bilder,setBilder]=useState([]);

    useEffect(()=>{
        setBilder(bilderId);
    },[]);

    return(
        <>
        {bilder.map(bilder => (
            <div key={bilder.id}>
                <Link to={`/Profil/${bilder.id}`}>{bilder.name}<img
                src={bilder.image}
                alt={bilder.name}
                /></Link>
            </div>
        ))}
        </>
        );
    };
    
    export default Bilder;