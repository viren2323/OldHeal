import React from "react";

export default function Donate() {
    return ( <
        div className = "flex flex-col w-full items-center my-10 md:my-14"
        id = "donate" >
        <
        div className = "flex flex-col md:flex-row pt-10 justify-center items-center" >
        <
        div className = "w-full sm:w-6/12 md:w-4/12 flex justify-center items-center" >
        <
        img src = "/mock_payment.jpeg"
        alt = ""
        className = "w-8/12 lg:w-6/12" / >
        <
        /div> <
        div className = "w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4" >
        <
        a href = "https://pages.razorpay.com/pl_IBBNEnjar7RNfh/view" > <
        p className = "text-4xl lg:text-5xl font-bold pt-10 md:pt-0" > Donate < /p>  < /a >
        <
        p className = "lg:text-lg 2xl:text-xl py-6 text-center" >
        Remember that the happiest people are not those getting more, but those giving more. <
        /p>  


        <
        /div> < /
        div > <
        /div>
    );
}