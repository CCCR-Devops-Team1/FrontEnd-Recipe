import React from "react";
/** 404 failover 페이지 는 html 로 따로 하나의 페이지로 구성해야 할 것 같음 */
function failover (){
    return(
        <div>
            
            <h1>404</h1>
        
            
            <div>원하시는 페이지를 찾을수 없습니다</div>

            <p>죄송합니다, 요청한 페이지가 현재 사용할 수 없거나 존재하지 않습니다.</p>
            <p>우리는 지속적으로 시스템을 유지하고 개선하고 있으며, 사용자들의 편의를 위해 최선을 다하고 있습니다. </p>
            <p>불편을 끼쳐드려 죄송합니다.</p>

        </div>

    )        
}

export default failover