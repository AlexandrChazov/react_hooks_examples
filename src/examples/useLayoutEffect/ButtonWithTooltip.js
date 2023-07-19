import { useState, useRef } from 'react';
import Tooltip from './Tooltip.js';

const ButtonWithTooltip = ({ tooltipContent, ...rest }) => {
    const [buttonCoordinates, setButtonCoordinates] = useState(null);
    const buttonRef = useRef(null);
    return (
        <>
            <button
                {...rest}
                ref={buttonRef}
                onPointerEnter={() => {
                    const rect = buttonRef.current.getBoundingClientRect();
                    setButtonCoordinates({
                        left: rect.left,
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom,
                    });
                }}
                onPointerLeave={() => {
                    setButtonCoordinates(null);
                }}
            />
            {buttonCoordinates !== null && (
                <Tooltip buttonCoordinates={buttonCoordinates}>
                    {tooltipContent}
                </Tooltip>
            )
            }
        </>
    );
}

export default ButtonWithTooltip;
