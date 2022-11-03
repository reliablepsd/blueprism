import setTranslations from "./Coveo.Translations.js";
const [html] = document.getElementsByTagName("html");
html.lang || "en";
const bpLang = html.lang || "en";

document.addEventListener('DOMContentLoaded', function () {
	const getLanguageMapping = (lang) => {
		if (!lang) return "en";
		if (["en", "fr", "de", "ko", "pt-BR"].indexOf(lang) >= 0) {
			return lang.toLowerCase();
		} else if (lang === "es-MX") {
			return "es-es";
		} else if (lang === "ja-JP") {
			return "ja";
		} else {
			return "en";
		}
	};

	const setCulture = () => {
		const langValue = getLanguageMapping(bpLang);
		const langScript = document.createElement("script");
		// langScript.src = `https://static.cloud.coveo.com/searchui/v2.10098/js/cultures/${langValue}.js`;
		langScript.src = `https://static.cloud.coveo.com/searchui/v2.10098/js/cultures/en.js`;
		langScript.onreadystatechange = function () {
			if (langScript.readyState === "loaded" || langScript.readyState === "complete") {
			// no need to be notified again
			langScript.onreadystatechange = null;
			// notify user
			// setTranslations(Coveo);
			setUpCoveo();
			}
		};

		// other browsers
		langScript.onload = function () {
			// setTranslations(Coveo);
			setUpCoveo();
		};
		document.documentElement.firstChild.appendChild(langScript);
	};

	setCulture();
});

async function setUpCoveo() {
	const orgId = "blueprismlimitedproduction6ynjfimd";
	const apiKey = "xxe25971a5-6cf0-459c-b443-9102d47e7dc1";
	const searchURL = 'https://platform-eu.cloud.coveo.com/rest/search';
	const redirectionURL = "/search";

	const search = document.getElementById('search');
	const searchBoxRoot = document.getElementById("searchbox");

	Coveo.SearchEndpoint.configureCloudV2Endpoint(
		orgId,
		apiKey,
		searchURL
	);

	if (search) {
		let tab = null;
		Coveo.$$(search).on("newResultsDisplayed", function() {
			const pagerNextIconTitle = document.querySelector(".coveo-pager-next-icon svg title");
			const pagerPreviousIconTitle = document.querySelector(".coveo-pager-previous-icon svg title");
			if (pagerNextIconTitle) pagerNextIconTitle.innerHTML = Coveo.l("Next");
			if (pagerPreviousIconTitle) pagerPreviousIconTitle.innerHTML = Coveo.l("Previous");
		});
		// Coveo.$$(search).on("afterInitialization", function(e, args) {
	// 	var myFacetElement = document.querySelector('#bpcom-language');
	// 	var myFacetInstance = Coveo.get(myFacetElement);
	// 	if (myFacetInstance && !myFacetInstance.values.hasActiveValues) {
	// 		let val = "";
	// 		switch(bpLang) {
	// 			case "fr": val = "French"; break;
	// 			case "de": val = "German"; break;
	// 			case "ko": val = "Korean"; break;
	// 			case "pt-BR": val = "Portuguese"; break;
	// 			case "es-MX": val = "Spanish"; break;
	// 			case "ja-JP": val = "Japanese"; break;
	// 			default: val = "English";
	// 		}
	// 		myFacetInstance.selectValue(val);
	// 	}
	// });
		Coveo.$$(search).on("afterComponentsInitialization", function() {
			Coveo.TemplateHelpers
			.registerTemplateHelper("customDuration", (value, options) => {
			// ...Helper function implementation...
			const intValue = parseInt(value);

			function padZero(val) {
				return `${val}`.padStart(2, '0')
			}
			if (!isNaN(parseInt(intValue))) {
				let hours, minutes, seconds;

				if (intValue < 3600) {
				minutes = padZero(intValue/60);
				seconds = padZero(intValue%60);
				return `${minutes}m ${seconds}s`;
				} else {
				minutes = padZero(intValue%60);
				hours = parseInt(intValue/3600);
				return `${hours}h ${minutes}m`;;
				}

			}
			return value;
			});
			Coveo.TemplateHelpers
			.registerTemplateHelper("customDateFormat", (value, options) => {
				const dateFormatPerLang = () => {
				const commonOptions = { day: "2-digit", month: "short", year: "numeric" };

				switch (bpLang) {
					case "de":
					return new Intl.DateTimeFormat('de-DE', { ...commonOptions, month: '2-digit' });
					case "ko":
					return new Intl.DateTimeFormat('ko-KO');
					default:
					return new Intl.DateTimeFormat(bpLang, commonOptions);
				}
				};
				if (!value) return "";
				const date = new Date(parseInt(value));

				const formatter = dateFormatPerLang();
				return formatter.format(date);
			});
			Coveo.$$(search).on("preprocessResults", function(e, args) {
			const value = args?.queryBuilder.tab;
			if (tab !== value) {
				search.classList.remove(`tab-${tab}`);
				tab = value;
				search.classList.add(`tab-${tab}`);
			}
			});
		});
		Coveo.init(search);
		Coveo.disableAnalytics(search);
	} else {
		Coveo.initSearchbox(searchBoxRoot, redirectionURL);
		Coveo.disableAnalytics(searchBoxRoot);
	}
}
