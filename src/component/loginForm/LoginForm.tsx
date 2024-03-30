import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode";

function LoginForm() {
    const responseMessage = (response: CredentialResponse) => {
        console.log(jwtDecode(response.credential))
    };
    const errorMessage = (error) => {
        console.log(error);
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
        <div className="d-flex justify-content-center mt-3">
            <GoogleLogin onSuccess={responseMessage} />
        </div>
    </div>
}

export default LoginForm