import Card from "../elements/card";
import bgImage from "../../assets/bg-image.jpg";
import { Link} from "react-router-dom";


const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-purple-700/30 to-indigo-900/40"></div>
      <div className="relative z-10 w-full flex justify-center">
        <Card className="bg-white/90" size="sm">
          <h1 className="text-3xl font-bold mb-2 text-purple-500 text-center">
            {title}
          </h1>
          <p className="font-medium text-slate-600 mb-8 text-center">
            On Call Management Portal
          </p>
          {children}
            {navigation({type})}
        </Card>
      </div>
    </div>
    </div>
  );
};
const navigation =({type}) => {
    if(type === "login"){
        return(
            <p className="text-sm text-slate-500 text-center mt-6">
            Don't have an account?{" "}
          <Link to="/register" className="text-purple-500 font-semibold hover:text-purple-600 hover:underline transition duration-200">
            Create one
          </Link>
         </p>
        );
    } else if(type === "register"){
        return(
            <p className="text-sm text-slate-500 text-center mt-6">
            Already have an account?{" "}
          <Link to="/login" className="text-purple-500 font-semibold hover:text-purple-600 hover:underline transition duration-200">
            Login here
          </Link>
         </p>
        );
    }
}

export default AuthLayouts;