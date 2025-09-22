import "./PurelyRelate.css";
import { type CSSProperties } from "react";

type clueCardProps = {
	text: string;
    onClick: () => void;
    disabled: boolean;
    className?: string;
	borderColor?: string;
    style?: CSSProperties;
};

function SurfaceCard({
	text,
    onClick,
    disabled,
    className,
	borderColor,
	style,
}: clueCardProps) {
	return (
		<button
			className={`surfacecard ${className}`}
			onClick={onClick}
			style={{ ...{ border: `2px solid ${borderColor}` }, ...style}}
            disabled={disabled}
		>
			<p>{text}</p>
		</button>
	);
}

export default SurfaceCard;
