import * as React from "react";
import {css} from "emotion";

export type IconStyle = {
	color: string;
	width: number;
	height: number;
}

type Props = {
	iconStyle: IconStyle
	icon: string
}

class RenderIcon
	extends React.Component<Props> {
	render() {
		const iconStyle = css`
		 width: ${this.props.iconStyle.width}px;
		 height: ${this.props.iconStyle.height}px;
		 background: ${this.props.iconStyle.color};
		 -webkit-mask-image: url(${this.props.icon});
		 mask-image: url(${this.props.icon});
		 mask-size: cover;
		 display: inline-block;
		`;

		return <span className={iconStyle}/>;
	}
}


export type IconData = {
	ratio: number,
	value: string
}

export const iconsRenderer = (key: IconData, color?: string, width: number = 24) => {
	return <RenderIcon icon={key.value} iconStyle={{color: color || "#000000", height: width * key.ratio, width: width}}/>
};

const bell: IconData = {ratio: 24 / 24,  value: require('@res/icons/icon__bell.svg')};
const close: IconData = {ratio: 10 / 10,  value: require('@res/icons/icon__close.svg')};
const email: IconData = {ratio: 24 / 24,  value: require('@res/icons/icon__email.svg')};
const errorToast: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__errorToast.svg')};
const infoToast: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__infoToast.svg')};
const successToast: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__successToast.svg')};
const triangle_down: IconData = {ratio: 5 / 6,  value: require('@res/icons/icon__triangle_down.svg')};
const triangle_up: IconData = {ratio: 5 / 6,  value: require('@res/icons/icon__triangle_up.svg')};
const v: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__v.svg')};
const x: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__x.svg')};

export const ICONS = {

	bell: (color?: string, width?: number) => iconsRenderer(bell, color, width),
	close: (color?: string, width?: number) => iconsRenderer(close, color, width),
	email: (color?: string, width?: number) => iconsRenderer(email, color, width),
	errorToast: (color?: string, width?: number) => iconsRenderer(errorToast, color, width),
	infoToast: (color?: string, width?: number) => iconsRenderer(infoToast, color, width),
	successToast: (color?: string, width?: number) => iconsRenderer(successToast, color, width),
	triangle_down: (color?: string, width?: number) => iconsRenderer(triangle_down, color, width),
	triangle_up: (color?: string, width?: number) => iconsRenderer(triangle_up, color, width),
	v: (color?: string, width?: number) => iconsRenderer(v, color, width),
	x: (color?: string, width?: number) => iconsRenderer(x, color, width),
};
