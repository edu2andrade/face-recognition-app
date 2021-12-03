import React from "react";

class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPasword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPasword: event.target.value})
  }
  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPasword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) { // .id
        this.props.loadUser(user);
        this.props.onRouteChange('Home');
      }
    })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="mw6 center br3 ma2 pa2 pa4-ns mv3 shadow-5">
        <main className="pa2 white-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  onChange={this.onEmailChange} 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba bn white-80 bg-red dim pointer f6 dib" 
                type="submit" 
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange("Register")} href="#0" className="f6 link dim white-80 underline pointer db">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;