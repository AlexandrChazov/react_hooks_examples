import { useRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer.js';

const Tooltip = ({ children, buttonCoordinates }) => {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useLayoutEffect(() => {
        // на этом моменте Реакт уже построил дом дерево и готов его нарисовать
        // мы же измеряем высоту Тултипа прежде чем Реакт отдаст страницу браузеру
        // на отрисовку
        // и меняем его положение прежде чем страница начнёт рисоваться браузером
        const { height } = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
        console.log('Measured tooltip height: ' + height);
    }, []);

    let tooltipX = 0;
    let tooltipY = 0;
    if (buttonCoordinates !== null) {
        tooltipX = buttonCoordinates.left;
        tooltipY = buttonCoordinates.top - tooltipHeight;
        if (tooltipY < 0) {
            // It doesn't fit above, so place below.
            tooltipY = buttonCoordinates.bottom;
        }
    }

    return (
        createPortal(<TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>, document.body)
    );
}

export default Tooltip;