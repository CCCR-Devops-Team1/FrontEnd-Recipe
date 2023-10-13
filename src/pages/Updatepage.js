import React, {useEffect, useState} from "react";
import './style/update.css'
import axios from "axios";

function Update () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios ({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => setPosts(response.data))
    })
    return (

        <div className="update-body">
            
            
            <form className="update-form">

                <tr id="wra">
                    
                {posts.map(nami => (
                    
                    <td id="line">
                        
                        <td><div className="list-name"><span id="number">{ nami.id }</span></div></td>

                        <td><div><span id='title'>{ nami.title }</span></div></td>
                    </td>
                    
                ))}
                </tr>    
                 
            </form>
            
        </div>

    )
}

export default Update