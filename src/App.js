import  React,{Component} from 'react';
import { Badge } from 'bootstrap-4-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Compo3 from './components/Compo3';
import Compo2 from './components/Compo2';
import Frontpage from './components/Frontpage';
import Functioncall from './components/Functioncall';
import ProductComp from './components/ProductComp';
import CartComp from './components/CartComp';
import { Alert } from 'reactstrap';
import Eventbind from './components/EventBind';
import MtdaspropsParent from './components/MtdaspropsParent';
import Compo1 from './components/Compo1';
import ListSample from './components/ListSample';
import FormSample from './components/FormSample';
import MaterialUISample from './components/MaterialUISample';
import WishList from './components/WishList';
import transitions from '@material-ui/core/styles/transitions';

class App extends Component
{

  

  constructor() {
    super();
    this.state = {
      prodDetails : [
        {
          ID : 1,
          productname : 'Apple',
          productdesc : 'Kashmir Apple - Good for Skin - Rs 200 per KG',
          imgurl : "/Apple.jpg",
          price : "200"
        },
        {          
          ID : 2,
          productname : 'Mango',
          productdesc : 'Alphanso - Tasty .. Yummy - Rs 50 per KG!!! -',
          imgurl : "/Mango.jpg",
          price : "50"
        },  
        {
          ID : 3,
          productname : 'Guava',
          productdesc : 'green Guava - Good for Skin - Rs 100 per KG',
          imgurl : "/Guava.jpg",
          price : "100"
        },
        {          
          ID : 4,
          productname : 'Chikku',
          productdesc : 'Small .. Yummy !!! RS 20 KG -',
          imgurl : "/Chikku.jpg",
          price : "20"
        },  
      ],
      CardID : '',
      CardPrice : '',
      Counter : 0,
      Prod : []
    };
    this.CalculateMoney = this.CalculateMoney.bind(this);
    
  }

  CalculateMoney = (id , q) => {
   var ctr = this.state.Counter + 1;
   
   const Prods = this.state.prodDetails.filter( num => {
      return (num.ID === id)
   });

    //console.log(Prod);

    this.setState({ 
      Counter: ctr,     
      CardID: id,
      CardPrice : q,
      Prod : [...this.state.Prod , Prods] 
    }); 
    
  }

  

  render()
  {

    return(
      <div className= "App"> 

<Router>
      <div>   
      <h2>MY FIRST REACT APP</h2>
          <nav className="navbar navbar-expand-lg navbar-light navbarbgcolor">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/About'} className="nav-link">Products</Link></li>
            <li><Link to={'/contact'} className="nav-link">Cart<Badge color="secondary">{this.state.Counter}</Badge></Link></li>            
            <li><Link to={'/Frontpage'} className="nav-link">Back to Home</Link></li>
            <li><Link to={'/Login'} className="nav-link">Login</Link></li>
          </ul>
          </nav>
          <hr />     
        
            <Switch>
              <Route exact path="/" component={Frontpage} />
              <Route path="/About" component={() => <CartComp name = {this.state.prodDetails}
               CalculateMoney = {this.CalculateMoney}/>}/>
              <Route path="/Frontpage" component={Frontpage} />
              <Route path="/Login" component={FormSample} />
              <Route path="/contact" component={() => <WishList name = {this.state.CardID} 
              CardPrice = {this.state.CardPrice} x = {this.state.Prod} />}>
                
              </Route>
            </Switch>
      </div>
    </Router>
              {/* <FormSample/> */}

              {/* <MaterialUISample/> */}

              {/* <ListSample/> */}

              {/* <Compo1/> */}

              {/* <MtdaspropsParent/> */}


                {/* <Eventbind/> */}

              {/* <Alert color= "primary">MY FIRST REACT APP</Alert>
              <CartComp  name = {this.state.prodDetails}/> */}

              {/* <Functioncall/> */}

              {/* <h1> "hi"{this.state.ID}</h1> */}

              {/* Functional components : no need of 'this' , export has 'function name' */}
                  {/* <Compo2  color = 'pink'>
                      <h5> this is pink child </h5>
                  </Compo2>
                  <Compo2  color = 'red'>
                      <h5> this is red child </h5>
                      <button> ACtion </button>
                  </Compo2>  */}

             {/* Class components  : this, render is necessary , return resturns single div
                 props : immutable (cannt change)
                 state : can change using setstate
              */}

                {/* <Compo3 name = "priya">
                      <h5> this is priya 1123</h5>
                  </Compo3>
                  <Compo3 name = "surya">
                      <h5> this is surya </h5>
                      <button onClick = {() => this.buttonclick()}> buttonclick !!! </button>
                  </Compo3>               */}


      </div>
     
    );
  }
}

export default App;
