import * as React from 'react';
import {css} from 'emotion';


	function fontRenderer(text: string, fontFamily: string, color: string = "#000000", fontSize: number = 16) {
	return <div style={{fontFamily, display: "inline-block", color, fontSize}}>{text}</div>
}

const poppins_bold = require('@res/fonts/Poppins-Bold.ttf');
const poppins_extrabold = require('@res/fonts/Poppins-ExtraBold.ttf');
const poppins_extralight = require('@res/fonts/Poppins-ExtraLight.ttf');
const poppins_light = require('@res/fonts/Poppins-Light.ttf');
const poppins_medium = require('@res/fonts/Poppins-Medium.ttf');
const poppins_regular = require('@res/fonts/Poppins-Regular.ttf');
const poppins_thin = require('@res/fonts/Poppins-Thin.ttf');

export const globalStyleGuide = css`

@font-face { font-family: poppins_bold; src: url(${poppins_bold}) }
@font-face { font-family: poppins_extrabold; src: url(${poppins_extrabold}) }
@font-face { font-family: poppins_extralight; src: url(${poppins_extralight}) }
@font-face { font-family: poppins_light; src: url(${poppins_light}) }
@font-face { font-family: poppins_medium; src: url(${poppins_medium}) }
@font-face { font-family: poppins_regular; src: url(${poppins_regular}) }
@font-face { font-family: poppins_thin; src: url(${poppins_thin}) }
`;

export const FONTS = {

	poppins_bold: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_bold', color, size),
	poppins_extrabold: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_extrabold', color, size),
	poppins_extralight: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_extralight', color, size),
	poppins_light: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_light', color, size),
	poppins_medium: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_medium', color, size),
	poppins_regular: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_regular', color, size),
	poppins_thin: (text: string, color?: string, size?: number) => fontRenderer(text, 'poppins_thin', color, size),
}
