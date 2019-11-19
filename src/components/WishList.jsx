import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,CardDeck,
    CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
  } from 'reactstrap';
class WishList extends Component {
   
    render() {
        //var price = this.props.x[0].price * this.props.CardPrice;
        console.log(this.props.x);
        console.log(this.props.x.length);
        
        var resultarray = this.props.x.map(function(item)
        {
            
            return (  
               <React.Fragment>
                   <CardDeck className="col-md-4" style = {{display : 'inline-block'}}>
                      <Card className="p-3">
                        <CardBody id={item[0].ID}>
                            <img width="33%" src={item[0].imgurl} alt="Card image cap" />
                            <CardTitle> <h1> {item[0].productname} </h1>  </CardTitle>
                            <CardText>                             
                            Price : {item[0].price * this.props.CardPrice}
                            </CardText>
                            
                        </CardBody>
                     </Card>
                   </CardDeck> 
                </React.Fragment>
            
            
            )
        },this)
        return (
            <div className="row">{resultarray}</div>
            )
    }
}

export default WishList
