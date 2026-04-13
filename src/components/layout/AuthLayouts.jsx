import Card from "../elements/card";

const AuthLayouts = (props) => {
  const { children, title } = props;

  return (
    <Card colors="bg-white">
      <h1 className="text-3xl font-bold mb-2 text-purple-400 text-center">
        {title}
      </h1>
      <p className="font-medium text-slate-500 mb-8 text-center">
        On Call Management Portal
      </p>
      {children}
    </Card>
  );
};

export default AuthLayouts;