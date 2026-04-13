
const AuthLayouts =(props) => {
    const {children, title} = props;
    return(
       <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-6">
         <h1 className="text-3xl font-bold mb-2 text-purple-400 text-center">{title}</h1>
            <p className="font-medium text-slate-500 mb-8 text-center">
                On Call Management Portal
            </p>
            {children}
        </div>
    );

}

export default AuthLayouts;