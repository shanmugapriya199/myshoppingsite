import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


 class FormSample extends Component {  
    

    constructor(props) {
        super(props)    
        this.state = {
             Username : '',
             Usernameerror : '',
             Password : '',
             emailid : '',
             Country : '',
             Comments : ''
        }
        this.LoginFormClickHandler = this.LoginFormClickHandler.bind(this);
    }   

    handleValidation(){
        
        let formIsValid = true;
    
        //Name
        if(!this.state.Username){
          formIsValid = false;
          this.setState({Usernameerror : 'Cannot be empty'})
        }  
        
       
        return formIsValid;
      }
    
    
    UsernameHandler = (event) =>{this.setState({Username : event.target.value})}
    PasswordHandler = (event) =>{this.setState({Password : event.target.value})}
    emailidHandler = (event) =>{this.setState({emailid : event.target.value})}
    CountryHandler = (event) =>{this.setState({Country : event.target.value})}
    CommentsHandler = (event) =>{this.setState({Comments : event.target.value})}
    LoginFormClickHandler = (e) =>
    {
        e.preventDefault();
        if(this.handleValidation()){
          alert("Form submitted");
        }else{
        }
    }


    render() {        
        return (
           <form name='CartLoginForm' onSubmit = {this.LoginFormClickHandler}>
               
               <table style={{display:'inline-table'}}>
                   <thead><tr><td></td>
                      <td><th>LOGIN FORM</th></td> </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td><th>Username</th></td>
                           <td><th><input type= "text"  placeholder="Enter username"
                            value={this.state.Username} onChange= {this.UsernameHandler}/></th></td>
                            <td><th><span className="error">{this.state.Usernameerror}</span></th></td>
                       </tr>
                       <tr>
                           <td><th>Password</th></td>
                           <td><th> <input type= "password"  placeholder="Enter Password"
                            value={this.state.Password} onChange= {this.PasswordHandler}/></th></td>
                       </tr>
                       <tr>
                           <td><th>email id</th></td>
                           <td><th> <input type= "text"  placeholder="Enter email"
                            value={this.state.emailid} onChange= {this.emailidHandler}/></th></td>
                       </tr>
                       <tr>
                           <td><th>Country</th></td>
                           <td><th> <select
                            value={this.state.Country} onChange= {this.CountryHandler}>
                                    <option value= "India">India</option>
                                    <option value= "Africa">Africa</option>
                                    <option value = "America">America</option>
                                </select></th></td>
                       </tr>
                       <tr>
                           <td><th>Comments</th></td>
                           <td><th><textarea
                            value={this.state.Comments} onChange= {this.CommentsHandler}/></th></td>
                       </tr>                       
                       <tr>
                           <td><th></th></td>
                           <td><th><input id="submit" type="submit"/></th></td>
                       </tr>   
                       
                   </tbody>
               </table>             
              
           </form>
        )
        
    }
}

export default FormSample;
