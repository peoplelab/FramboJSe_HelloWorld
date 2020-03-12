//----------------------------------------------------------------------------------------
// File: config.pvt.js
//
// Desc: Configuration file for SystemJS module - Private settings
// Path: /private/
//----------------------------------------------------------------------------------------

	// ** Loads cookie and converts data in JSON format **
	cookieRaw = Cookies.get('FramboJSe_HelloWorldWAPars');
	var __WACookie = (cookieRaw == undefined || cookieRaw == '')? '' : $.parseJSON(cookieRaw);


	// ** Declare main paths **
	var _pvtRoot  = '/private/';

	var _pvtPaths = {
		framework: _pvtRoot + 'framboJSe.ext/',
		modules  : _pvtRoot + 'modules/',
		resources: _pvtRoot + 'resources/',
		templates: _pvtRoot + 'templates/',
		node_modules: _pvtRoot + 'resources/js/node_modules/',
	}

	var __homepage = {
		modules  : _pvtPaths.modules   + 'home/',
		templates: _pvtPaths.templates + 'home/'
	}

	// ** Builds system data configuration **
	var __PVT_config = {
		map: {

			// ** Framework extensions **
			// Snippets:
			snippetsList_pvt   : _pvtPaths.framework + 'snippets/snippetsList.pvt.js',
			widgetsList_pvt    : _pvtPaths.framework + 'widgets/widgetsList.pvt.js',
			// Templates:
			templatesList_pvt  : _pvtPaths.templates + 'templatesList.pvt.js',
			// Router:
			routerList_pvt     : _pvtPaths.framework + 'routerList.pvt.js',
			// Sitemap
			customizeSitemap   : _pvtPaths.framework + 'sitemapCustomization.pvt.js',


			// 3rd parties libraries
			react: _pvtPaths.resources + 'js/React/react.development.js',
			'react-dom': _pvtPaths.resources + 'js/React/react-dom.development.js',
			retargetEvents: _pvtPaths.node_modules + 'react-shadow-dom-retarget-events/index.js',
			webcomponents: _pvtPaths.node_modules + '@webcomponents/webcomponentsjs/webcomponents-loader.js',
			CEadapter: _pvtPaths.node_modules + '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
		}
	};

	var __Preloads = {};							// Struttura per il precaricamento dei dati da chiamate SaaS
