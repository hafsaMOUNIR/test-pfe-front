import React, { useState } from "react";
import "./Count.css";

const Count = () => {
    const [counter, setCounter] = useState(0);
    const increment = (e) => {
        setCounter(counter + 1);
    };
    const decrement = (e) => {
        setCounter(counter - 1);
    };

    return (
        <div className="container">
            <div>
                <h1
                    id="num"
                    style={{
                        color:
                            counter == 0
                                ? "black"
                                : counter > 0
                                ? "#008CBA"
                                : "#f44336",
                    }}
                >
                    {counter}
                </h1>
            </div>
            <div>
                <button className="red" onClick={(e) => decrement(e)}>
                    -
                </button>
                <button className="bleu" onClick={(e) => increment(e)}>
                    +
                </button>
            </div>
        </div>
    );
};
export default Count;
