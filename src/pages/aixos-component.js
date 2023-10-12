import React, {useState,useEffect} from "react";
import axios from "axios";


function Study (){

    const [num, setnum] = useState(0);

    const [numlist, setnumlist] = useState([]);

    return(
        <div>
            <div> 현재 숫자 : { num }</div>
            <button onClick={() => {setnum(num + 1)}}>숫자 증가</button>
            <button onClick={() => {setnum(num - 1)}}>숫자 감소</button>
        </div>
    );
}

export default Study

