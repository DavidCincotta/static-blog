/**@type {import('tailwindcss').Config} */
module.exports= {
	darkMode: 'class',
	corePlugins:{
		preflight:true,
	},
	content: ["./app/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			lightBackground:		'#ffffff', //
			darkBackground:			'#222222', //
			lightPrimary:			'#ffc107', //
			lightPrimaryDark:		'#b28704', //
			lightPrimaryLight:		'#fff350', //
			darkPrimary:			'#ffffff', //
			darkPrimaryDark:		'#b3b3b3', //
			darkPrimaryLight:		'#f5f5f5', //
			lightSecondary:			'#1e88e5', //
			lightSecondaryDark:		'#0d47a1', //
			lightSecondaryLight:	'#42a5f5', //
			darkSecondary:			'#8F3BA8', //
			darkSecondaryDark:		'#e53935', //
			darkSecondaryLight:		'#ffcdd2', //
			lightError:				'#b71c1c', //
			lightErrorDark:			'#7f0000', //
			lightErrorLight:		'#f05545', //
			darkError:				'#ffc107', //
			darkErrorDark:			'#c79100', //
			darkErrorLight:			'#ffe082', //
			lightWarning:			'#ff9800', //
			lightWarningDark:		'#c66900', //
			lightWarningLight:		'#ffb74d', //
			darkWarning:			'#1e88e5', //
			darkWarningDark:		'#0d47a1', //
			darkWarningLight:		'#42a5f5', //
			lightInfo:				'#33b5e5', //
			lightInfoDark:			'#0083b0', //
			lightInfoLight:			'#81d4fa', //
			darkInfo:				'#81d4fa', //
			darkInfoDark:			'#4fc3f7', //
			darkInfoLight:			'#b3e5fc', //
			lightSuccess:			'#43a047', //
			lightSuccessDark:		'#2e7d32', //
			lightSuccessLight:		'#81c784', //
			darkSuccess:			'#4caf50', //
			darkSuccessDark:		'#1b5e20', //
			darkSuccessLight:		'#81c784', //
			lightTextPrimary:		'#000000', //
			darkTextPrimary:		'#ffffff', //
			lightTextSecondary:		'#444444', //
			darkTextSecondary:		'#dddddd', //
			lightTextDisabled:		'#666666', //
			darkTextDisabled:		'#aaaaaa', //
			purpleBright:			'#ff00ff', //
			purpleLight:			'#aa00aa', //
			purpleDark:				'#440044', //
			blueBright:				'#0000ff', //
			blueDark:				'#0000aa', //
		},
		extend: {
		},
	},
	plugins: [],
}
