const TooltipContainer = ({ children, x, y, contentRef }) => {
    return (
        <div
            style={{
                opacity: 50,
                position: 'absolute',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                transform: `translate3d(${x}px, ${y}px, 0)`
            }}
        >
            <div
                ref={contentRef}
                className="tooltip"
                style={{  opacity: 50 }}
            >
                {children}
            </div>
        </div>
    );
}

export default TooltipContainer;