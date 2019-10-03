import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
import 'firebase/auth';
// import { Firebase } from '../../firebase/index';

//Compounds
import InputMail from '../../components/Login/compounds/InputMail';
import InputPassword from '../../components/Login/compounds/InputPassword';
import BtnLogin from '../../components/Login/compounds/BtnLogin';
import Logo from '../../assets/img/logo.png';

//assets
import './style.css';

class Login extends React.Component{
     constructor(){
        super();
        this.state = {
          email: "", 
          password: ""
        };
        // this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bin(this);
     }

     handleChange = (e) => {
        const value  = e.target.value;
       if (e.target.id === "email") {
          this.setState({ email: value });
       } else if (e.target.id === "password") {
           this.setState({ password: value });
       } else {
         return;
       }
     }

     
 
  render(){
     const {
      //  user,
       signInWithEmailAndPassword,
      //  error
     } = this.props;

     const {email, password} = this.state;

    return(
      <Fragment >
        <div className='content'>
          <img alt='logo-pandmonium' src={Logo} className='logo-logo'/>
          <InputMail className='input' value={email} onChange={this.handleChange}/>
          <InputPassword className='input' value={password} onChange={this.handleChange} />
          {/* {
            user ? <Redirect to='./tables' /> :   
            <BtnLogin onClick = {(e) => { signInWithEmailAndPassword(email, password)}} /> 
            } 
          {
            error
          }  */}
          <Link to={{pathname: './tables'}}>
          <BtnLogin onClick = {(e) => { signInWithEmailAndPassword(email, password)}} /> 

          </Link>
         
        </div>
      </Fragment>
    )
  }
}

// const Firebase = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider()
// }

// export default withFirebaseAuth ({
//   providers,
//   Firebase,
// })(Login);

export default Login;