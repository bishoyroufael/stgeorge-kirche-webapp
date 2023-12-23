import React, { useState, useContext, useEffect } from "react"
import * as API from '../../generated/api';
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@components/AuthContext";
import { LOCAL_API_SERVER, PROD_API_SERVER } from "../../consts";

export const LogIn = () => {
    const authContext = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (authContext && authContext.authenticated) {
            navigate('/bibliothek');
        }
    }, [authContext])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const auth = new API.AuthRoutesApi(undefined, process.env.REACT_ENV == 'DEV' ? LOCAL_API_SERVER : PROD_API_SERVER)
            const response = await auth.apiV1AuthLogInPost(formData.email, formData.password, { withCredentials: true })

            // console.log('Server Response:', response.data);
            if (response.status == 200) {
                authContext.setAuthenticated(true);
            }
            // You can handle success or navigate to another page here
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message)
            // Handle error, e.g., show an error message to the user
        }
        setIsLoading(false);
    };

    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="pt-20"></div>
            <h2 className="text-4xl font-bold mb-4">Log In</h2>

            <div className="flex justify-center items-center max-w-screen-xl min-h-[100vh]">
                <div className="shadow-xl w-full md:w-1/2 p-14 rounded-xl space-y-4 border-c-background border-2" data-aos="fade-up">

                    <div className="flex justify-center items-center">
                        <img src={require("@images/churchlogo-header.png")} alt="St. George Logo Header" className="h-auto object-contain w-[120px] md:w-[160px]"></img>
                    </div>

                    <form className="w-full" onSubmit={handleSubmit}>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-c-green text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Please enter your email"
                                className="w-full p-2 border-2 border-c-main rounded-lg"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-c-green text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Please enter your password"
                                className="w-full p-2 border-2 border-c-main rounded-lg"
                            />
                        </div>

                        {/* Login Button */}
                        {isLoading ? <ThreeDots width={30} color="black" wrapperClass="justify-center" /> :
                            <button
                                type="submit"
                                className="w-full bg-c-main text-white p-2 rounded hover:bg-opacity-80 focus:outline-none focus:ring focus:border-blue-300"
                                disabled={isLoading}
                            >
                                Log In

                            </button>
                        }

                        {error && <p>Error: {error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}