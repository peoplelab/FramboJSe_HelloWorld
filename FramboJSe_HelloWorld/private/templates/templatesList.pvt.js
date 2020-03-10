//----------------------------------------------------------------------------------------
// File: templatesList.pvt.js
//
// Desc: List of PRIVATE templates
// Path: /Private/templates
//----------------------------------------------------------------------------------------

define (function () {

	return {

		List: buildList
	}

	function buildList() {

		var templatesPath = _pvtPaths.templates;                                // Main path of the templates is defined in "config.pvt"
		var templatesList = {  
			301: __homepage.templates + 'home.html',
			302: __homepage.templates + 'pippo.html'
		};
		return templatesList;
	}

});