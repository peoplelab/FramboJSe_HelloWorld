//----------------------------------------------------------------------------------------
// File: home.controller.js
//
// Desc: Controller della pagina "home"
// Path: /Private/modules/home/controller
//----------------------------------------------------------------------------------------

define([
	'base_controller',
	'base_presenter',
	'currentModel',
	'currentPresenter'
], function (cBase, pBase, model, presenter) {

	var _onInit = true;																				// Monitoring first time executing code...
	var _pageID = '';																				// Page ID (for presenter)
	var _templateID = '';																				// ID of the page template
	var _initPars = '';																				// Set dei parametri iniziali della Setup (usati per il re-setup dopo il save)

	return {
		init: setup
	}


	function setup(params) {

		_initPars = params;																			// Set di parametri (pageParams) definito in "routerList"
		_pageID = (params == undefined) ? _pageID : params.pageID;
		_templateID = (params == undefined) ? _templateID : params.templateID;

		presenter.Init({
			pageID: _pageID,
			templateID: _templateID
		});
		presenter.RenderPage({ });
	}


});
