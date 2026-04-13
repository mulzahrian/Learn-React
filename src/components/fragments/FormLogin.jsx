import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormLogin =() => {
    return(
       <form action="">
            <InputForm label="Email" name="email" type="email" placeholder="Enter your email" />
            <InputForm label="Password" name="password" type="password" placeholder="Enter your password" />
            <Button className="bg-purple-400 w-full" type="submit">Login</Button>
        </form>
    );

}

export default FormLogin;