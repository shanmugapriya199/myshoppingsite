import React from 'react'

export default function MtdAspropsChild(props) {
    return (
        <div>
            {/* Should not pass argument direclt in handler mtd like
            below(when browser loads function will call auto w/o click method).
            make it as arrow function */}
              {/* <button onClick= {props.Greethandler('child')}>click</button> */}
            {/* below is correct approach */}
                <button onClick= {() => {props.Greethandler('child')}}>click</button>
        </div>
    )
}
