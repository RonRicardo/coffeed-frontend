import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class App extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };

    googleResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/auth/request', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
              console.log(r.headers)
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
    };

    onFailure = (error) => {
      console.log(error)
      alert(error);
    }
    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                        <GoogleLogin
                        clientId="22187800451-lm9orojj7heb4dkf84o3d1qdm4ao4pe6.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />
                </div>
            );

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
