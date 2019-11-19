import React from 'react'
import ListtSample1 from './ListSample1'
function ListSample() {

//simple list

    const names = ['priya', 'surya', 'sri' , 'priya'];
    const nameList = names.map((x , index) =>  <h2> {index} {x}</h2>)
    return (
        <div>{nameList}
        </div>
    )

//complex

// const names = [
//     {
//         id : 1,
//         name : 'priya',
//         age : 20
//     },
//     {
//         id : 2,
//         name : 'sri',
//         age : 22
//     }
// ]
// // const nameList = names.map(nam =>  <h2> {nam.id} {nam.name} </h2>)
// // return(<div>{nameList}</div>)

// return names.map( x => 
//     <ListtSample1 List={x}/>

//     )



}

export default ListSample
