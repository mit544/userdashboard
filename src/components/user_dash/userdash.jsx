import React from "react";
import './style/userdash.css'
import Header from "../header";
import Footer from "../footer";


const UserDash = () => {
    return (
        <>
            <Header />
            <div className=" mt-12 flex-row align-middle justify-center">
                <h1 className=" text-black text-3xl ">$name, Welcome to <b>Play2earn</b>.</h1>
                <h4 className="text-black text-center mt-2 text">Are you ready to earn cryptocurrency tokens by completing task?</h4>
            </div>

            <div className="main_body_usd mt-7">
                <div className="w-5/5  px-16 flex flex-row justify-center align-top">
                    <div className="w-1/5 mr-5">

                        <div className="border-solid border-2 border-#C6C6C6 mb-2 h-40">
                            this is the profile section
                        </div>
                        <div className="border-solid border-2 border-#C6C6C6 mb-2">
                            this is the earning
                        </div>
                        <div className="border-solid border-2 border-#C6C6C6 mb-2">
                            this is the ai contribution section
                        </div>

                    </div>

                    <div className="border-solid border-2 border-red-950 w-4/5">
                        
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default UserDash;