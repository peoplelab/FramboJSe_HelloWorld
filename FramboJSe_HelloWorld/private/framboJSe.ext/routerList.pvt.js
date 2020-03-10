//----------------------------------------------------------------------------------------
// File: routerList.pvt.js
//
// Desc: List of routing definitions for the current web application- Private area
// Path: /private/FramboJSe_HelloWorld.ext/router
//----------------------------------------------------------------------------------------

define (function(){

	var _routeList = [];														// Routes list

	return {
		List: buildsRouteList
	}


	// FUNCTION: buildsRouteList
	//  Builds the list of defined routes
	// PARAMS:
	//  none
	// RETURN:
	//  routeList : list of the routes
	function buildsRouteList() {

		var newModule;															// Used for new module settings
		var pageDefinitions;													// Used for page definitions


		// ---
		// Step 1: Declaration of modules with their main data
		// ---
		// Note:
		// Each new module will be first defined and added to the route list,
		// then it will be possible adding the specific routes
		// ---

		
		

		newModule = {
			module: 'home',														// Nome modulo (come usato nell'URL virtuale)
			sectors: [{
				sectorName: 'homePage',											// Subset del modulo (come specificato dal parametro "Sector" della pagina .aspx chiamante)
				modulePath: __homepage.modules,								// Path dei file dei moduli (files .js)
								// Eventuale dashbord comune a tutte le pag. del modulo
				sectorPages: []													// Array delle definizioni delle pagine del modulo

			}]
		};
		_routeList.push(newModule);	

		// ---
		// Step 2: routes setup (adds pages definitions to the modules)
		// ---
		// Note: 
		// Useful for logical grouping of pages: it's possible add several pageDefinitions 
		// to the same module/sector, by defining a logical group or functionality 
		// (e.g. Configuration > timesheet)
		// ---




		pageDefinitions = {
			title: 'home',													// Not used (reference only)
			owner: { module: 'home', sector: 'homePage' },
			pages: [
				{
					alias: ['home'],
					data: {
						pageID: 'homepage',
						controller: 'home.controller.js'+__SYS_version,
						model: 'home.model.js'+__SYS_version,
						presenter: 'home.presenter.js'+__SYS_version,
						templateID: [301]
					}
				},{
					alias: ['helloworld'],
					data: {
						pageID: 'homepage',
						controller: 'home.controller.js'+__SYS_version,
						model: 'home.model.js'+__SYS_version,
						presenter: 'home.presenter.js'+__SYS_version,
						templateID: [302]
					}
				}
			]
		}
		addRoutes(pageDefinitions);
		// ** Returns the updated list **
		return _routeList;

	}


	// FUNCTION: addRoutes
	//	Adds the new page definitions (routes) to the router list, 
	// PARAMS:
	//	params.owner : defines the module and the sector to which the pageDefinitions are to be added
	//	params.pages : pages definitions
	// OUTPUT:
	//	none
	function addRoutes(params) {

		var module = params.owner.module;										// Module name
		var sector = params.owner.sector;										// Sector name
		var pages  = params.pages;												// Pages definitions

		var tmpModule;
		var tmpSector;

		// Searches for the corresponding module/sector
		for (var i = 0; i < _routeList.length; i++) {							// Level 1: scans the modules
			tmpModule = _routeList[i];											// Temporary var: current module
			if (tmpModule.module == module) {									// Compare module name:

				// Module found: now scans for sectors
				tmpSector = tmpModule.sectors;									// Temporary var: current sector
				for (var j = 0; j < tmpSector.length; j++) {					// Level 2: scans the sector
					if (tmpSector[j].sectorName == sector) {

						// Module/sector found: adds new pages definitions
						_routeList[i].sectors[j].sectorPages = _routeList[i].sectors[j].sectorPages.concat(pages);

					}
				}

			}
		}

	}


});
