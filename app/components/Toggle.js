"use client";
import { useState } from "react";
import Link from "next/link";

// This is a function to display a message after clicking a button. //
export default function Toggle(){
    const [showMessage, setShowMessage] = useState (false);

    return (
        <div>
            <nav>
            </nav>
            <h1>Toggle Message</h1>
{/* button OnClick is used to show the message whenever the user clicks the button */}
         <button onClick={() => setShowMessage(!showMessage)}>
            {showMessage ? "Hide" : "Show"} Message
         </button>
{/* This is the message that will appear when the user clicks the button. */}
         {showMessage && <p> This message was toggled.</p>} 
        </div>
    );
}
