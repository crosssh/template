
import * as React from 'react';

export class SignInComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public updateUsername = (e: any) => {
    const username = e.target.value;
    this.props.updateUsername(username);
  }

  public updatePassword = (e: any) => {
    const password = e.target.value;
    this.props.updatePassword(password);
  }

  public submit = (e: any) => {
    e.preventDefault();
    const { username, password } = this.props; // destructuring
    fetch('http://localhost:3001/users/login', {
      body: JSON.stringify({username, password}),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
      .then(resp => {
        console.log(resp.status)
        if (resp.status === 401) {
          this.props.updateError('Invalid Credentials, try again.')
          return;
        }
        if (resp.status === 200) {
          return resp.json();
        }
        return;
      })
      .then(data => {
        console.log(data);
        this.props.history.push('/clicker');
      })
      .catch(err => {
        this.props.updateError('Unable to log in at this time, please try again later');
      })
  }

  public render() {
    return (
      <form className="form-signin" onSubmit={this.submit}>
        <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input value={this.props.username}
          onChange={this.updateUsername}
          type="text" id="inputUsername"
          className="form-control"
          placeholder="Username"
          required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input value={this.props.password}
          onChange={this.updatePassword}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required />
        { this.props.errorMessage !== '' &&
          <div id="error-message">
            {this.props.errorMessage}
          </div>
        }
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    );
  }
}