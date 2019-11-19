import React, { Component } from 'react'
import { Alert } from 'bootstrap-4-react';
import {
    Card, CardImg, CardText, CardBody,CardDeck,
    CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
  } from 'reactstrap';
  import { Container, Row, Col } from 'reactstrap';
  import WishList from './WishList';
  import Popup from "reactjs-popup";
import { display } from '@material-ui/system';



//   const Example = (props) => {    

//     function CalculateMoney(e)
//   {     
//       var prodID = e.target.id;

//   } 

//     return (

//         <div>     
        
//       <Row >
//         <Col lg="4">

//         </Col>
//         <Col lg="4">
//           <Card body>
//           <img width="33%" src={props.x.imgurl} alt="Card image cap" />
//             <CardTitle> <h1> {props.x.productname} </h1>  </CardTitle>
//             <CardText> {props.x.productdesc}</CardText>
//             <div>Quantity (kg) : <input type = {Text}></input></div>
//             <Button id = {props.x.ID} onClick = {CalculateMoney}> Buy!! </Button>
//           </Card>
//         </Col>
//         <Col lg="4">

//         </Col>
        
//       </Row>
//       </div>
//     );
//   };

  


// export default Example;

export default class ProductComp extends Component {

  
        constructor() {
          super();
          this.state = {
            QuantityBox: null,
            price:null
          };
          
          //this.CalculateMoney = this.CalculateMoney.bind(this);
          this.handleChange = this.handleChange.bind(this);
        }
        
        handleChange({ target }) {
          this.setState({
            [target.name]: target.value
          });         
        }

        

        // CalculateMoney(id)
        // {   
        //     var totalprice = this.state.QuantityBox * this.props.x.price;
        //     //var totalprice =  this.props.x.price;
        //     //alert("hi" + totalprice);
        //     this.setState({
        //         price : totalprice
        //     });   
          
        // } 
    
     
    render(){
        const {imgurl , children} = this.props.x
        //const {price} = this.state.price
        return (  
          <React.Fragment className="column" >         
{                    
                   <CardDeck className="col-md-4" style = {{display : 'inline-block'}}>
                      <Card className="p-3">
                        <CardBody id={this.props.x.ID}>
                            <img width="33%" src={imgurl} alt="Card image cap" />
                            <CardTitle> <h1> {this.props.x.productname} </h1>  </CardTitle>
                            <CardText> {this.props.x.productdesc}</CardText>
                            <div>Quantity (kg) : 
                            <input 
                                type="text" 
                                id="QuantityBox" 
                                name = "QuantityBox"
                                placeholder="Enter Quantity here..." 
                                value={ this.state.QuantityBox }
                                onChange={ this.handleChange } 
                            />
                            </div>
                            <Button id = {this.props.x.ID} onClick = {this.props.CalculateMoney.bind(this,this.props.x.ID,this.state.QuantityBox)}> Buy!! </Button>
                        </CardBody>
                     </Card>
                   </CardDeck> }
                    
                  
        
       
      </React.Fragment>  
        
        );
     

    }


    
      
             
}
