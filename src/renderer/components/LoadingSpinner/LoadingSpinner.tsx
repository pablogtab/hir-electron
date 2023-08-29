import { useRef, useEffect } from 'react'
import './LoadingSpinner.css'

type LoadingSpinnerProps = {
    size?: number;
    style?: React.CSSProperties;
    color?: string
}

export const LoadingSpinner = ({ size = 20, style, color }: LoadingSpinnerProps) => {

    const circleRef = useRef<SVGCircleElement>()

    useEffect(() => {
        circleRef.current.style.setProperty('--dash-array-offset', size * 3 + '')

    }, [])

    return (
        <svg style={{ width: size, height: size, position: 'absolute', ...style, fill: 'none' }}>
            <circle ref={circleRef} className="spinner" cx={size / 2} cy={size / 2} r={(size / 2) - size / 24} style={{ stroke: color ?? 'var(--color-primary-contrast)', strokeWidth: size / 12 }}></circle>
        </svg>)
}
