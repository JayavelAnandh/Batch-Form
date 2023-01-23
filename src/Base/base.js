import React from "react";

function Base(props){
    return(
        <div className="main-component">
            <header>
                <h1>{props.title}</h1>
            </header>

            <main className="main-segment">
                <h2>{props.description}</h2>
                <div className="children-segment">{props.children}</div>
            </main>
        </div>
    )
}
export default Base;