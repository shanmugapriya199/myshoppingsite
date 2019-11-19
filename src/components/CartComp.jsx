import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import ProductComp from './ProductComp';
import { GridList } from 'material-ui/GridList';

export default class CartComp extends Component {

    

    render() {
        //console.log(this.props.name.ID);
        //alert(this.props.name.map(x => x.ID));
        // return (
        //     <div>
        //        <p>
        //             {this.props.name.map(x => x.ID)}
        //         </p> 
        //     </div>
        // )
        
       
        
        return this.props.name.map((xv) => (        
             <React.Fragment>  
                <ProductComp key= {xv.ID} x = {xv} CalculateMoney = {this.props.CalculateMoney}/> 
               </React.Fragment>           
        ))
    };
        
}

