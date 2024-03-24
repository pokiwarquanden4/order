function LoginForm() {
    return <div>
        <label htmlFor="account" className="form-label">Account</label>
        <input type="text" id="account" className="form-control" aria-describedby="accountD"></input>
        <div id="accountD" className="form-text">
            Your password must be 8-20 characters long,
        </div>

        <label htmlFor="inputPassword5" className="form-label pt-4">Password</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
        <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long
        </div>
    </div>
}

export default LoginForm