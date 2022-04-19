import React, { useEffect, useState } from 'react'

const Poc = (props) => {
    const { max, min } = props;
    const [openText, setOpenText] = useState(true);
    const [counter, setCounter] = useState(min);
    const [hasEdited, setHasEdited] = useState(false);

    useEffect(() => {
        if (counter !== min && !hasEdited) {
            setHasEdited(true);
        }
    }, [counter, hasEdited, min]);

    let claimType = "Return"

    const handleClick = () => {
        if (claimType === "Return") {
            setOpenText(!openText)
        }
    }


    return (
        <div>
            <button onClick={handleClick}>
                Show Text
            </button>
            <br />
            {openText && "Text Showed"}
            <br />

            <div className="RangeCounter">
                <span className="RangeCounter__title">Functional RangeCounter</span>
                <div className="RangeCounter__controls">
                    <button
                        disabled={counter <= min}
                        onClick={() => setCounter(counter - 1)}
                    >
                        -
                    </button>
                    <span data-testid="counter-value">{counter}</span>
                    <button
                        disabled={counter >= max}
                        onClick={() => setCounter(counter + 1)}
                    >
                        +
                    </button>
                </div>
                {(counter >= max || counter <= min) && hasEdited && (
                    <span className="RangeCounter__alert">Range limit reached!</span>
                )}
            </div>
        </div>

    )
}

export default Poc