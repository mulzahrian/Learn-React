import Card from "../elements/card";
import bgImage from "../../assets/bg-image.jpg";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-purple-700/30 to-indigo-900/40"></div>
      <div className="relative z-10 w-full flex justify-center">
        <Card className="bg-white/90">
          <h1 className="text-3xl font-bold mb-2 text-purple-500 text-center">
            {title}
          </h1>
          <p className="font-medium text-slate-600 mb-8 text-center">
            On Call Management Portal
          </p>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default AuthLayouts;