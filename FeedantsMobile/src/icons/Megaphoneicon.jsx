import React from 'react';
import Svg, { G, Rect, Path, Ellipse } from 'react-native-svg';

/**
 * <MegaphoneIcon size={54} color="#5CCBA8" faceColor="#fff" strokeWidth={3} />
 * size: width & height in px | strokeWidth: outline thickness (viewBox units)
 */
export default function MegaphoneIcon({
    size = 54,
    color = '#5CCBA8',
    faceColor = '#FFFFFF',
    strokeWidth = 3,
    handleWidth = 5,
}) {
    const s = { stroke: color, strokeLinejoin: 'round', strokeLinecap: 'round' };
    return (
        <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <G rotation={-14} origin="32, 32">
                <Rect x="6" y="24" width="12" height="16" rx="4" fill={color} strokeWidth={strokeWidth} {...s} />
                <Path d="M17 25 L44 13 L44 51 L17 39 Z" fill={color} strokeWidth={strokeWidth} {...s} />
                <Path d="M32 19 L44 13 L44 51 L32 45 Z" fill={faceColor} />
                <Ellipse cx="45" cy="32" rx="4.5" ry="19.5" fill={color} strokeWidth={strokeWidth} {...s} />
                <Ellipse cx="45" cy="32" rx="2" ry="15.5" fill={faceColor} />
                <Path d="M21 40 L25 54 Q26 57 29 56.5 L33 55.5" strokeWidth={handleWidth} {...s} />
                <Path d="M53 15 Q59 13 59 19" strokeWidth={strokeWidth * 0.85} {...s} />
            </G>
        </Svg>
    );
}