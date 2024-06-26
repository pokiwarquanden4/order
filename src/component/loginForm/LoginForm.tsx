import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginForm() {
    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

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
        <div className="d-flex justify-content-center">
            <button type="button" className="mt-3 btn btn-outline-success d-flex align-items-center" onClick={googleLogin}>
                <FontAwesomeIcon className="pe-2" icon={faGoogle}></FontAwesomeIcon>
                Login with google
            </button>
        </div>
    </div>
}

export default LoginForm