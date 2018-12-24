import AUtextInput from '../../_uikit/layout/text-inputs';
import { AUradio } from '../../_uikit/layout/control-input';
import AUbutton from '../../_uikit/layout/buttons';


import React from "react";
import Path from "path";
import Fs from "fs";

/**
 * The example component
 *
 * @disable-docs
 */
const Customise = ({ _ID, _relativeURL, _parseYaml }) => {
	const templatesDir = Path.normalize(
		`${__dirname}/../../../content/templates/`
	);
	const templatesYaml = Fs.readFileSync(`${templatesDir}/_all.yml`, "utf-8");
	const templates = _parseYaml(templatesYaml);

	const templateID = _ID.split("/")[1];
	const template = templates[templateID];

	const pagetitle = `Customise ${ template.name }`;

	const iframeSrc = process.env.NODE_ENV === "production"
		? "https://designsystem.gov.au/chameleon"
		: "http://localhost:3000/chameleon";

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<link rel="apple-touch-icon" sizes="180x180" href=${ _relativeURL('/assets/favicons/apple-touch-icon.png', _ID ) }>
<link rel="icon" type="image/png" sizes="32x32" href=${ _relativeURL('/assets/favicons/favicon-32x32.png', _ID ) }>
<link rel="icon" type="image/png" sizes="16x16" href=${ _relativeURL('/assets/favicons/favicon-16x16.png', _ID ) }>
<link rel="manifest" href=${ _relativeURL('/assets/favicons/site.webmanifest', _ID ) }>
<link rel="mask-icon" href=${ _relativeURL('/assets/favicons/safari-pinned-tab.svg', _ID ) } color="#06262d">
<link rel="shortcut icon" href=${ _relativeURL('/assets/favicons/favicon.ico', _ID ) }>
<meta name="msapplication-config" content=${ _relativeURL('/assets/favicons/browserconfig.xml', _ID ) }>
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="Digital Transformation Agency">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Australian Government Design System">
<meta name="twitter:description" content="Inclusive design, open-source code and shared insights">
<meta name="twitter:name" content="Australian Government Design System">
<meta name="twitter:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="${pagetitle} - Australian Government Design System">
<meta property="og:site_name" content="Australian Government Design System">
<meta property="og:description" content="Inclusive design, open-source code and shared insights">
<meta property="og:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:url" content="https://designsystem.gov.au">

<title>${ pagetitle } - Australian Government Design System</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/example.css', _ID ) }>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->
<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	const a11yFilter = <svg
			aria-hidden="true"
			className="svg-filter sronly"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1">
			<defs>
				<filter id="deuteranopia">
					<feColorMatrix
						in="SourceGraphic"
						type="matrix"
						values="0.625, 0.375, 0,   0, 0
										0.7,   0.3,   0,   0, 0
										0,     0.3,   0.7, 0, 0
										0,     0,     0,   1, 0"/>
				</filter>
				<filter id="tritanopia">
					<feColorMatrix
						in="SourceGraphic"
						type="matrix"
						values="0.95, 0.05,  0,     0, 0
										0,    0.433, 0.567, 0, 0
										0,    0.475, 0.525, 0, 0
										0,    0,     0,     1, 0"/>
				</filter>
			</defs>
		</svg>;

	const colorOptions = {
		text: "Text",
		action: "Action",
		focus: "Focus",
		background: "Background",
		textDark: "Dark text",
		actionDark: "Dark action",
		focusDark: "Dark focus",
		backgroundDark: "Dark background"
	};

	const palette = [
		"Default",
		"Goanna green",
		"Bluetongue blue",
	];

	const colorBlindnesses = [
		"No colour blindness",
		"Grayscale",
		"Deuteranopia",
		"Tritanopia",
	];

	const CustomColorInputs = Object.entries( colorOptions )
		.map( ([ colorID, colorName ]) => (
			<div className="form-item">
				<label htmlFor={ colorID }>{ colorName }</label>
				<AUtextInput id={ colorID } block></AUtextInput>
			</div>
		 ) );

	const ColorBlindnessRadios = colorBlindnesses.map( ( colorBlindness, i ) => (
			<div className="form-item">
				<AUradio
					label={ colorBlindness }
					name="a11y"
					defaultChecked={ i === 0 }></AUradio>
			</div>
		) );

	const PaletteRadios = palette.map( ( color, i ) => (
		<div className="form-item">
			<AUradio
				label={ color }
				name="palette"
				defaultChecked={ i === 0 }></AUradio>
		</div>
	) );

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />
		<body className={`au-grid live-demo"`}>
			{ a11yFilter }
			<header className="header__example">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<a
								className="au-direction-link au-direction-link--left"
								href={`/templates/${ templateID }`}
							>Go back to { template.name }</a>
						</div>
					</div>
				</div>
			</header>
			<main>
				<iframe className="chameleon" src={ iframeSrc } />
				<div className="customise au-body">
					<h1>Customise</h1>
					<form>
						<fieldset className="custom-color">
							<legend className="au-display-4">Custom palette</legend>
							<p>Choose the colours for the template</p>
							{ CustomColorInputs }
						</fieldset>
						<fieldset className="palette-selection">
							<legend className="au-display-4">Select a palette</legend>
							<p>Choose a palette from an existing colour pairing</p>
							{ PaletteRadios }
						</fieldset>
						<fieldset className="accessibility-selection">
							<legend className="au-display-4">Colour blindness</legend>
							<p>View the template with different types of colour blindness</p>
							{ ColorBlindnessRadios }
						</fieldset>
						<AUbutton>Change colours</AUbutton>
						<AUbutton link="/" as="secondary" id="btn-reset">Reset</AUbutton>
						<AUbutton name="btn-share" as="secondary">Share</AUbutton>
					</form>

				</div>
			</main>
			<script src={_relativeURL("/assets/js/footer.js", _ID)} />
			<script src={_relativeURL("/assets/js/customise-page-code.js", _ID)} />
		</body>
		</html>
	);
};

Customise.propTypes = {};

Customise.defaultProps = {};

export default Customise;
