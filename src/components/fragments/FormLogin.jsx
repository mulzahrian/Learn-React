import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormLogin =() => {
    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        console.log('email', e.target.email.value, 'password', e.target.password.value);
        window.location.href = "/dashboard";
    };
    return(
       <form onSubmit={handleLogin}>
            <InputForm label="Email" name="email" type="email" placeholder="Enter your email" />
            <InputForm label="Password" name="password" type="password" placeholder="Enter your password" />
            <Button className="bg-purple-400 w-full" type="submit">Login</Button>
        </form>
    );

}

export default FormLogin;