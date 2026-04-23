import { useEffect, useState } from "react";

const Alert = ({
    variant = "success", // success | error
    size = "md", // sm | md | lg
    message = "",
    onClose,
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true); // reset visibility tiap message berubah

        const timer = setTimeout(() => {
            setVisible(false);
            onClose && onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!visible) return null;

    const variantStyle = {
        success: "bg-green-100 text-green-700 border-green-300",
        error: "bg-red-100 text-red-700 border-red-300",
    };

    const sizeStyle = {
        sm: "max-w-xs text-sm",
        md: "max-w-md text-base",
        lg: "max-w-lg text-lg",
    };

    return (
        <div className="w-full flex justify-center fixed top-5 left-0 z-50 px-4">
            <div
                className={`w-full ${sizeStyle[size]} border rounded-xl shadow-md p-4 ${variantStyle[variant]} bg-white`}
            >
                <div className="flex justify-between items-start">
                    <p>{message}</p>
                    <button
                        onClick={() => setVisible(false)}
                        className="ml-3 text-gray-400 hover:text-gray-600"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
