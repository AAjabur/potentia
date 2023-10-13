import React from 'react';

interface VerticalBarProps {
  height: number;
  style?: React.CSSProperties;
}


export default function VerticalBar({ height, style }: VerticalBarProps) : JSX.Element{
    const barStyle: React.CSSProperties = {
        width: "1px",
        height: `${height}px`,
        backgroundColor: "black",
        ...style,
    }
    return (
        <div style={barStyle}></div>
    )
}