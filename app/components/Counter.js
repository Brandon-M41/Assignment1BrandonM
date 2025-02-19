
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Counter(){
    const [count, setCount] = useState (0);

    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li><Link href="/">Counter</Link></li>
                    <li><Link href="/">Message</Link></li>
                </ul>
            </nav>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>

{/* This is a click command that increases or decreases depending on the users input. */}
            <button onClick={() => setCount (count + 1)}>Increase</button>
            <button onClick={() => setCount (count - 1)}>Decrease</button>
        </div>
    );
}
