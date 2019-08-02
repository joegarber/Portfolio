/**
 * @preserve 50recode 
 * FILE_CHANGED_ON = '2019-05-06 16:35:13'
 * VERSION = '1.1.48'
 * This source code is property of Intel Corporation.
 * DO NOT duplicate, copy or modify this file or any subfiles referenced by this file.
 * Please contact the IGHF team if you have issues.
 */

/*eslint-env browser, jquery */
/*global INTELNAV:true, wap_header:true, IE11:true, isMin:true*/

// =====================================================
// Setup the environment
INTELNAV = window.INTELNAV || {};

// Set IGHF Root Path
INTELNAV.IGHFRootPath = "."// "ighf/50recode.2";

// Exception logic - error to console log
INTELNAV.exception = (function (e) {
    if(console && console.log) {
        if (e) {
            console.log(e.stack);
        } else {
            console.log("Argument required when invoking INTELNAV.exception");
        }
    }
});

// -- jQuery loadCSS and polyfill ------------------
/* https://github.com/filamentgroup/loadCSS/blob/master/README.md */
/* https://github.com/filamentgroup/loadCSS/blob/master/src/loadCSS.js */
/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
// Arguments explained:
// `href` [REQUIRED] is the URL for your CSS file.
// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
(function(w){
	"use strict";var loadCSS = function( href, before, media ){var doc = w.document;var ss = doc.createElement( "link" );var ref;if( before ){ref = before;}else {var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;ref = refs[ refs.length - 1];}var sheets = doc.styleSheets;ss.rel = "stylesheet";ss.href = href;ss.media = "only x";function ready( cb ){if( doc.body ){return cb();}setTimeout(function(){ready( cb );});}ready( function(){ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );});var onloadcssdefined = function( cb ){var resolvedHref = ss.href;var i = sheets.length;while( i-- ){if( sheets[ i ].href === resolvedHref ){return cb();}}setTimeout(function() {onloadcssdefined( cb );});};function loadCB(){if( ss.addEventListener ){ss.removeEventListener( "load", loadCB );}ss.media = media || "all";}if( ss.addEventListener ){ss.addEventListener( "load", loadCB);}ss.onloadcssdefined = onloadcssdefined;onloadcssdefined( loadCB );return ss;};/*if( typeof exports !== "undefined" ){*/if (typeof module !== 'undefined' && module.exports) {exports.loadCSS = loadCSS;}else {w.loadCSS = loadCSS;}}( typeof global !== "undefined" ? global : this ));

/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
/* https://github.com/filamentgroup/loadCSS/blob/master/src/cssrelpreload.js */
(function(w){
	if( !w.loadCSS ){return;}var rp = loadCSS.relpreload = {};rp.support = function(){try {return w.document.createElement( "link" ).relList.supports( "preload" );} catch (e) {return false;}};rp.poly = function(){var links = w.document.getElementsByTagName( "link" );for( var i=0, len=links.length; i<len; i++ ){var link = links[ i ];if( link.rel === "preload" && link.getAttribute( "as" ) === "style" ){w.loadCSS( link.href, link, link.getAttribute( "media" ) );link.rel = null;}}};if( !rp.support() ){rp.poly();var run = w.setInterval( rp.poly, 300 );if( w.addEventListener ){w.addEventListener( "load", function(){rp.poly();w.clearInterval( run );} );}if( w.attachEvent ){w.attachEvent( "onload", function(){w.clearInterval( run );} )}}}( this ));
// -------------------------------------------------

// hf_debug function
var isdebug_bundle_counter = 0;
function hf_debug(method, message, obj, debugLvl, isdebug) {
	if (debugLvl <= isdebug && typeof console !== "undefined") {
		
		function indent(counter) {
			var indents = "", i = 0;
			for (i = 0; i < counter; i++) {
				indents = indents + "\t";
			}
			return indents;
		}

		var color = ["#FF0000", "#FFBF00", "#80FF00", "#00B359", "#00BFFF", "#265CFF", "#5C26FF", "#D24CFF"];
		var isdebug_indent = "";//, isdebug_bundle_counter = 1;

		switch (method)
		{
			case "warn":				
				isdebug_indent = indent(isdebug_bundle_counter);
				console.warn("%c50recode: " + isdebug_indent + message + obj, "background-color:#cc0000;color:#fff;");
				break;

			case "info":
				isdebug_indent = indent(isdebug_bundle_counter);
				console.info("50recode: " + isdebug_indent + message + obj);
				break;

			case "error":
				isdebug_indent = indent(isdebug_bundle_counter);
				console.error("50recode: " + isdebug_indent + message + obj);
				break;

			case "properties":
				isdebug_indent = indent(isdebug_bundle_counter);
				console.dir("50recode: " + isdebug_indent + obj);
				break;

			case "timestamp":
				isdebug_indent = indent(isdebug_bundle_counter);
				if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
					console.timeStamp("50recode: " + isdebug_indent + message);
				}
				break;

			case "timestart":
				isdebug_indent = indent(isdebug_bundle_counter);
				if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
					console.time("50recode: " + isdebug_indent + message);
				}
				break;

			case "timeend":
				isdebug_indent = indent(isdebug_bundle_counter);
				console.log("50recode: " + isdebug_indent + message + obj);
				if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
					console.timeEnd("50recode: " + isdebug_indent + message);
				}
				break;

			case "bundletimestart":
				//performance.mark("start" + message);
				//if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
					isdebug_indent = indent(isdebug_bundle_counter);
					console.log("%c50recode: " + isdebug_indent + "START " + message + obj, "color:" + color[isdebug_bundle_counter] + ";");
					console.timeStamp("50recode: " + isdebug_indent + "START " + message);
					console.time("50recode: " + isdebug_indent + message);
					isdebug_bundle_counter += 1;
					//isdebug_indent = 0;
				//}
				break;

			case "bundletimeend":
				//performance.mark("end" + message);
				//if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
					isdebug_bundle_counter -= 1;
					isdebug_indent = indent(isdebug_bundle_counter);
					console.log("%c50recode: " + isdebug_indent + "END " + message + obj, "color:" + color[isdebug_bundle_counter] + ";");
					console.timeStamp("50recode: " + isdebug_indent + "END " + message);
					console.timeEnd("50recode: " + isdebug_indent + message);
					//isdebug_indent = 0;
					
				//}
				break;
			
			/*case "profile":
				isdebug_indent = indent(isdebug_bundle_counter);
				console.profile("50recode: " + isdebug_indent + obj);
				break;
			
			case "profileEnd":
				isdebug_indent = indent(isdebug_bundle_counter);
				console.profileEnd("50recode: " + isdebug_indent + obj);
				break;*/
			
			case "waitfor":
				// log method
				//isdebug_indent = isdebug_bundle_counter;
				isdebug_indent = indent(isdebug_bundle_counter);
				console.log("%c50recode: " + isdebug_indent + message + obj, "color:#FF0000;");
				break;
				
			default:
				// log method
				//isdebug_indent = isdebug_bundle_counter;
				isdebug_indent = indent(isdebug_bundle_counter);
				console.log("50recode: " + isdebug_indent + message + obj);
				break;
		}
	}

};


// get queryString value by name - OLD VERSION
INTELNAV.getParameterByName = function(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results === null) {return "";}
	else {return decodeURIComponent(results[1].replace(/\+/g, " "));}
};
// get queryString value by name - NEW VERSION
INTELNAV.query = (function() {
	var _query = (function() {
		var results = {}, q = location.search.replace(/^\?/, '').split('&'), i=0, split = {};
		for (i = 0, len = q.length; i < len; i++) {
			split = q[i].split('=');
			results[split[0]] = split[1];
		}
		return results;
	})();
	return function(name) { 
		/*console.log(_query,name,typeof _query[name]);*/
		if (typeof _query[name] === 'undefined') {
			return false;
		} else if (_query[name].toLowerCase() == "true") {
			return true;
		} else if (_query[name].toLowerCase() == "false") {
			return false;
		} else {
			return _query[name];
		}
	};
})();

// load the JS
INTELNAV.loadJS = function(filename) {
	hf_debug("log", "INTELNAV.loadJS = ", filename, 2, isdebug);
	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.setAttribute("src", filename);
	fileref.setAttribute("async", "");
	//fileref.setAttribute("defer", "");
	if (typeof fileref !== "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
};


INTELNAV.hc = INTELNAV.query('hc');
INTELNAV.hcPath = INTELNAV.query('hcpath');
if (INTELNAV.hc && !INTELNAV.hasrun) {
	// Override the headerchooser.js for testing new changes
	INTELNAV.hasrun = true;
	hf_debug("log", "Switch headerchooser.js", "", 1, isdebug);
	
	if (typeof INTELNAV.hc == "boolean") {
		INTELNAV.loadJS("https://localhost/"+INTELNAV.IGHFRootPath+"/js/headerchooser-master.js");
	} else {
		switch (INTELNAV.hc)
		{
			case "https://localhost":
				INTELNAV.loadJS(INTELNAV.hc+INTELNAV.hcPath);
				break;
			default:
				//do nothing
				hf_debug("info", "HC: This path is not approved! ("+INTELNAV.hc+INTELNAV.hcPath+")", "", 1, isdebug);
				break;
		}
	}
} else {
	if (INTELNAV.hasrun) {
		hf_debug("log", "2nd headerchooser.js", "", 1, isdebug);
	}
	
	// waitFor library
	//	waitFor.add(test,success)
	//		Add waitFor entry. test() is polled periodically called. When test() 
	//		returns true, success() is called and this entry is removed. Returns 
	//		the entry's unique id or, if waitFor.finalize() has been called, 
	//		undefined.
	//	waitFor.remove(id)
	//		Accepts a waitFor id and removes that entry, if it exists.
	//	waitFor.finalize()
	//		Prevents futher waitFor entries from being added to the list. When 
	//		all remaining waitFor entries have succeeded, further polling will 
	//		no longer be done.
	(function(home) {
		hf_debug("bundletimestart", "assetLoader-master.js: waitFor()", "", 2, isdebug);
		var w = {
			delay: 10,
			_queue: {},
			_count: 0,
			_lastId: -1,
			_finalized: false,
			/* _log:function(){}, */
			/*_log: function(s) {
				if (typeof console !== "undefined" && typeof console.log !== "undefined") {
					console.log(s);
				}
			},*/
			_timeout: function() {
				if (w._count > 0) {
					var q = w._queue;
					for (var key in q) {
					//for (var key=0, len=q.length; key<len; key++) {
						if (q.hasOwnProperty(key)) {
							if (q[key].t()) {
								hf_debug("log", "waitFor: success triggered on entry " + key, "", 2, isdebug);
								q[key].s();
								w.remove(key);
							}
						}
					}
				} else if (w._finalized) {
					hf_debug("log", "waitFor: _timeout() terminating", "", 2, isdebug);
					return;
				}
				w._timeoutId = setTimeout(w._timeout, w.delay);
			},
			_init: function(home) {
				hf_debug("log", "waitFor: _init() entered (delay:" + w.delay + "ms)", "", 2, isdebug);
				if (typeof home === 'undefined') {
					home = window;
				}
				home.waitFor = w;
				w._timeout();
			},
			add: function(test, success) {
				hf_debug("log", "waitFor: add("+test+") entered (id:" + (w._lastId + 1) + ")", "", 2, isdebug);
				if (w._finalized) {
					hf_debug("waitfor", "waitFor: add("+test+") attempted after finalize", "", 2, isdebug);
					return;
				}
				w._count += 1;
				w._lastId += 1;
				w._queue[w._lastId] = {
					t: test,
					s: success
				};
				return w._lastId;
			},
			remove: function(id) {
				hf_debug("log", "waitFor: remove() entered (id:" + id + ")", "", 2, isdebug);
				if (w._queue.hasOwnProperty(id)) {
					delete w._queue[id];
					w._count -= 1;
				}
			},
			finalize: function() {
				hf_debug("log", "waitFor: finalize() entered", "", 2, isdebug);
				w._finalized = true;
			}
		};
		w._init(home);
		hf_debug("bundletimeend", "assetLoader-master.js: waitFor()", "", 2, isdebug);
	})(window);

	//Setup WAP environment
	var wap_header={};
	wap_header.HeaderVersion="";
	wap_header.HeaderChosen="";
	wap_header.HeaderSubNav="";
	wap_header.HeaderGEO="";
	wap_header.FooterChosen="";
	wap_header.Locale="";//us-en

	INTELNAV.browserParameters = {str: null,bN: null,bM: null,bV: null,OS: null,dT: null,wk: null,bvClass: null};

	
	// =====================================================
	// SEGMENTED HEADER/FOOTER BEHAVIORS
	var segment = "", searchFilter = "", isRWD = "false";

	var isdebug = INTELNAV.getParameterByName("isdebug") || false;
	hf_debug("info", "START HEADERCHOOSER", "", 2, isdebug);

	var IE11 = INTELNAV.getParameterByName("IE11") || false;
	
	var forcetest = INTELNAV.getParameterByName("forcetest");
	
	var menu=0, design=1, env=2; // INTELNAV.forceTestObj array positions
	
	var isMin = ""; //".min";
	
	
	hf_debug("log", "TEST1", "", 1, isdebug);
	window.waitFor.add(function() { return typeof INTELNAV.renderSettings !== 'undefined'}, function() {
		window.waitFor.add(function() { return INTELNAV.renderSettings.culture !== '--'}, function() {
			hf_debug("log", "WAIT FOR INTELNAV.renderSettings.culture="+INTELNAV.renderSettings.culture, "", 1, isdebug);
			
			if (typeof INTELNAV.renderSettings !== "undefined") {
				if (typeof INTELNAV.renderSettings.version !== "undefined") {
					INTELNAV.renderSettings.version = "2.1 - 05/29/2018 08:00:00";
					hf_debug("log", "SETTING DEFAULT INTELNAV.renderSettings.version="+INTELNAV.renderSettings.version, "", 1, isdebug);
				}
			}

			
			if (forcetest != '' && forcetest.indexOf("-") >= 0) {
				INTELNAV.forceTestObj = forcetest.split("-");
			} else {
				
				//====================================================
				//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
				//****************************************************
				// SET DEFAULT DESIGN TO RENDER HERE
				if (typeof INTELNAV.dashboard !== 'undefined' && typeof INTELNAV.dashboard.environment !== 'undefined') {
					var tmpForceTest = "unav-6-"+INTELNAV.dashboard.environment;	// << set the number value to the design to render by default
				} else {
					var tmpForceTest = "unav-6-prod";	// << set the number value to the design to render by default
				}
				hf_debug("log", "tmpForceTest=" + tmpForceTest, "", 1, isdebug);
				INTELNAV.forceTestObj = tmpForceTest.split("-");
				//****************************************************
				//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
				//====================================================
				
			}
			
			hf_debug("log", "INTELNAV.forceTestObj[]="+INTELNAV.forceTestObj[menu]+"-"+INTELNAV.forceTestObj[design]+"-"+INTELNAV.forceTestObj[env], "", 1, isdebug);

			var RWD = INTELNAV.getParameterByName("RWD") || "";
			if (RWD !== "") {isRWD = RWD;}
			hf_debug("log", "RWD=" + RWD, "", 2, isdebug);

			
			if (INTELNAV.getParameterByName("isMin")) {isMin = "";}


			//Disablers for testing
			var disableGA = INTELNAV.getParameterByName("disableGA") || false;
			var disableWAP = INTELNAV.getParameterByName("disableWAP") || false;

			// assign the render setting to GAAT40 to support widgets already using this object
			var GAAT40 = GAAT40 || {};
			GAAT40.renderSettings = {};
			GAAT40.renderSettings = INTELNAV.renderSettings;

			// If you set this to "true" it will force the header to render the Legacy Design.
			var RollBack = false;
			
			// Chinese ICP codes for the footer
			INTELNAV.ICP = {
				com: "äº¬ ICP å¤‡ 14036123 å·-1",
				cn:  "æ²ª ICP å¤‡ 18006294 å·-1"
			}

			INTELNAV.Cultures = {
				unav: {
					// These are the LOCALES that framework supports. These can be more than a specific design supports
					// Need to create INCLUDE files for these de_CH|en_NG|es_CL|es_CO|ar_DZ|fr_DZ|en_EG|en_KE|ar_MA|fr_MA|en_NG|en_AE|ar_JO|en_CA|fr_CA for ZIP
					ActiveCulturesFramework: "ar_AE|ar_DZ|ar_EG|ar_MA|ar_SA|ar_XR|cs_CZ|de_CH|de_DE|en_AE|en_AP|en_AU|en_CA|en_EG|en_EU|en_KE|en_HK|en_IE|en_IN|en_IR|en_MY|en_NG|en_NZ|en_PH|en_PK|en_SA|en_SG|en_UK|en_US|en_XA|en_XE|en_XR|en_ZA|es_CL|es_CO|es_ES|es_LA|es_MX|es_XL|fr_CA|fr_DZ|fr_FR|fr_MA|he_IL|hi_IN|hu_HU|id_ID|it_IT|ja_JP|ko_KR|nl_NL|pl_PL|pt_BR|ro_RO|ru_RU|sv_SE|th_TH|tr_TR|uk_UA|vi_VN|zh_CN|zh_TW|fw_FW"
				}
			}

			// Paths to the entrypoint JavaScript to start the loading of the respective header
			INTELNAV.recode50 = {
				ighfuat: {
					design: "ighfuat",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				unav: {
					design: "unav",
					firstDesign: 6,
					currentDesign: 6,
					/*5: {
						//isIE8compatible: false,
						// These are the LOCALES the Menu4 (uNav4) design supports
						ActiveCultures: "ar_AE:ar_XR|ar_DZ:en_ZA|ar_EG:ar_XR|ar_MA:en_ZA|ar_SA:ar_XR|ar_XR:|cs_CZ:en_US|de_CH:de_DE|de_DE:|en_AE:en_XR|en_AP:en_XA|en_AU:|en_CA:|en_EG:en_XR|en_EU:en_US|en_HK:en_XA|en_IE:|en_IN:|en_IR:en_IE|en_KE:en_ZA|en_MY:en_XA|en_NG:en_ZA|en_NZ:en_AU|en_PH:en_XA|en_PK:en_XA|en_SA:en_XR|en_SG:en_XA|en_UK:|en_US:|en_XA:|en_XE:en_UK|en_XR:|en_ZA:|es_AR:es_XL|es_CL:es_XL|es_CO:es_XL|es_ES:|es_LA:es_XL|es_MX:es_XL|es_XL:|fr_CA:|fr_DZ:en_ZA|fr_FR:|fr_MA:en_ZA|he_IL:|hi_IN:en_IN|hu_HU:en_US|id_ID:|it_IT:|ja_JP:|ko_KR:|nl_NL:en_US|pl_PL:|pt_BR:|ro_RO:en_UK|ru_RU:|sv_SE:en_US|th_TH:|tr_TR:|uk_UA:ru_RU|vi_VN:|zh_CN:|zh_TW:|fw_3R:",

						// Only These GEOS can render RWD, else fall back to base desktop mode.
						ActiveCultures_RWD:"ar_AE:ar_XR|ar_DZ:en_ZA|ar_EG:ar_XR|ar_MA:en_ZA|ar_SA:ar_XR|ar_XR:|cs_CZ:en_US|de_CH:de_DE|de_DE:|en_AE:en_XR|en_AP:en_XA|en_AU:|en_CA:|en_EG:en_XR|en_EU:en_US|en_HK:en_XA|en_IE:|en_IN:|en_IR:en_IE|en_KE:en_ZA|en_MY:en_XA|en_NG:en_ZA|en_NZ:en_AU|en_PH:en_XA|en_PK:en_XA|en_SA:en_XR|en_SG:en_XA|en_UK:|en_US:|en_XA:|en_XE:en_UK|en_XR:|en_ZA:|es_AR:es_XL|es_CL:es_XL|es_CO:es_XL|es_ES:|es_LA:es_XL|es_MX:es_XL|es_XL:|fr_CA:|fr_DZ:en_ZA|fr_FR:|fr_MA:en_ZA|he_IL:|hi_IN:en_IN|hu_HU:en_US|id_ID:|it_IT:|ja_JP:|ko_KR:|nl_NL:en_US|pl_PL:|pt_BR:|ro_RO:en_UK|ru_RU:|sv_SE:en_US|th_TH:|tr_TR:|uk_UA:ru_RU|vi_VN:|zh_CN:|zh_TW:|fw_3R:",
						//rem de_CH fr_MA fr_DZ ar_AE en_AE ar_EG ar_DZ fr_CA en_KE en_NG en_EG ar_MA ar_SA en_SA
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav5/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav5/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav5/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav5/assets/js/assetLoader" + isMin + ".js",
						prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav5/assets/js/assetLoader" + isMin + ".js"
					},*/
					6: {
						//isIE8compatible: false,
						// These are the LOCALES the Menu4 (uNav4) design supports
						ActiveCultures: "ar_AE:ar_XR|ar_DZ:en_ZA|ar_EG:ar_XR|ar_MA:en_ZA|ar_SA:ar_XR|ar_XR:|cs_CZ:en_US|de_CH:de_DE|de_DE:|en_AE:en_XR|en_AP:en_XA|en_AU:|en_CA:|en_EG:en_XR|en_EU:en_US|en_HK:en_XA|en_IE:|en_IN:|en_IR:en_IE|en_KE:en_ZA|en_MY:en_XA|en_NG:en_ZA|en_NZ:en_AU|en_PH:en_XA|en_PK:en_XA|en_SA:en_XR|en_SG:en_XA|en_UK:|en_US:|en_XA:|en_XE:en_UK|en_XR:|en_ZA:|es_AR:es_XL|es_CL:es_XL|es_CO:es_XL|es_ES:|es_LA:es_XL|es_MX:es_XL|es_XL:|fr_CA:|fr_DZ:en_ZA|fr_FR:|fr_MA:en_ZA|he_IL:|hi_IN:en_IN|hu_HU:en_US|id_ID:|it_IT:|ja_JP:|ko_KR:|nl_NL:en_US|pl_PL:|pt_BR:|ro_RO:en_UK|ru_RU:|sv_SE:en_US|th_TH:|tr_TR:|uk_UA:ru_RU|vi_VN:|zh_CN:|zh_TW:|fw_3R:",

						// Only These GEOS can render RWD, else fall back to base desktop mode.
						ActiveCultures_RWD:"ar_AE:ar_XR|ar_DZ:en_ZA|ar_EG:ar_XR|ar_MA:en_ZA|ar_SA:ar_XR|ar_XR:|cs_CZ:en_US|de_CH:de_DE|de_DE:|en_AE:en_XR|en_AP:en_XA|en_AU:|en_CA:|en_EG:en_XR|en_EU:en_US|en_HK:en_XA|en_IE:|en_IN:|en_IR:en_IE|en_KE:en_ZA|en_MY:en_XA|en_NG:en_ZA|en_NZ:en_AU|en_PH:en_XA|en_PK:en_XA|en_SA:en_XR|en_SG:en_XA|en_UK:|en_US:|en_XA:|en_XE:en_UK|en_XR:|en_ZA:|es_AR:es_XL|es_CL:es_XL|es_CO:es_XL|es_ES:|es_LA:es_XL|es_MX:es_XL|es_XL:|fr_CA:|fr_DZ:en_ZA|fr_FR:|fr_MA:en_ZA|he_IL:|hi_IN:en_IN|hu_HU:en_US|id_ID:|it_IT:|ja_JP:|ko_KR:|nl_NL:en_US|pl_PL:|pt_BR:|ro_RO:en_UK|ru_RU:|sv_SE:en_US|th_TH:|tr_TR:|uk_UA:ru_RU|vi_VN:|zh_CN:|zh_TW:|fw_3R:",
						//rem de_CH fr_MA fr_DZ ar_AE en_AE ar_EG ar_DZ fr_CA en_KE en_NG en_EG ar_MA ar_SA en_SA
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}	
				},
				drc: {
					design: "drc",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				intc: {
					design: "intc",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				inteldroneracing: {
					design: "inteldroneracing",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|es_XL:|pt_BR:|nu_LL:",
						ActiveCultures_RWD: "en_US:|es_XL:|pt_BR:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				realsense: {
					design: "realsense",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|zh_CN:|nu_LL:",
						ActiveCultures_RWD: "en_US:|zh_CN:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				clusterready: {
					design: "clusterready",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				tryoptane: {
					design: "tryoptane",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				chinacampusjobs: {
					design: "chinacampusjobs",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "zh_CN:|nu_LL:",
						ActiveCultures_RWD: "zh_CN:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				marketingadvisorypanel: {
					design: "marketingadvisorypanel",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						//isIE8compatible: false,
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				},
				transportation: {
					design: "transportation",
					firstDesign: 6,
					currentDesign: 6,
					6: {
						ActiveCultures: "en_US:|nu_LL:",
						ActiveCultures_RWD: "en_US:|nu_LL:",
						devPathHttp: "https://localhost/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						stagingPathHttp: "https://staging.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						testPathHttp: "https://test.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						preprodPathHttp: "https://pre-prod.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js",
						//prodPathHttp: "https://www.site.com/"+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
						prodPathHttp: ""+INTELNAV.IGHFRootPath+"/designs/unav6/assets/js/assetLoader" + isMin + ".js"
					}
				}
			};
			

			INTELNAV.assetPathHttp = "https://www.intel.com";
			INTELNAV.assetServer = "https://www.intel.com";


			//FOR TestHarness

			// Look Up Table of URLs to take the 50recode (uNav)
			// site = a regular expression to define path. includes the domain/folder/file?querystring
			// (optional) menu: drc = used to override the default menu with a different menu
			// (optional) design: # = used to override the default design version number
			// (optional) env: environment (dev,staging,preprod,prod)
			// (optional) hide: "menu|languageselector|search|myintel" = used to hide header elements
			// (optional) searchFilter:[{sf_var:"topicarea", sf_val:"Support"},{sf_var:"topicarea2", sf_val:"Support2"} = add the hidden field to the search form for filtered search results
			// (optional) isVisible:"footeronly" = show footer only and hide the header
			// (optional) myIntelSignIn: use the default SignIn/MyIntel
			INTELNAV.UrlLookUpTable = {
				urls: [
					// ====================================
					// ALTERA/PSG/FPGA integration on intel.com
					{
						//DEV Site
						site:"(cms-|)int-(dev|qa).(altera|intel).com/content/www/[^/]+/[^/]+/programmable/(?!products/reference-designs|products/.*/support.html|products/*/support.html|products\.)(products|buy)|www(dev|qa).altera.com/content/www/[^/]+/[^/]+/programmable/(?!products/reference-designs|products/.*/support.html|products/*/support.html|products\.)(products|buy)|(qamysupport|mysupport).(altera|intel).com/content/www/[^/]+/[^/]+/programmable/(?!products/reference-designs|products/.*/support.html|products/*/support.html|products\.)(products|buy)",
						//design: "6",
						myIntelSignIn: true,
						searchFilter: [{
							sf_var: "toplevelcategory",
							sf_val: "programmable"
						}]
					},			
					{
						//PROD Site
						site:"(cms-|)int-(dev|qa).(altera|intel).com|www(dev|qa).altera.com|(qamysupport|mysupport|qafpgasupport).(altera|intel).com",
						//design: "6",
						myIntelSignIn: true,
						searchFilter: [{
							sf_var: "toplevelcategory",
							sf_val: "PSGSupport"
						}]
					},					
					{
						site:"(www(|.thailand)|fpgasupport).intel.(com|sg|com.au|cn|in|co.id|co.jp|co.kr|com.tw|vn|fr|de|ie|it|pl|ru|es|tr|co.uk|la|com.br|co.za|me|co.il|ca)/content/www/[^/]+/[^/]+/programmable/(?!products/reference-designs|products/.*/support.html|products/*/support.html|products\.)(products|buy)",
						//design: "6",
						myIntelSignIn: true,
						searchFilter: [{
							sf_var: "toplevelcategory",
							sf_val: "programmable"
						}]
					},
					{
						site:"(www(|.thailand)|fpgasupport).intel.(com|sg|com.au|cn|in|co.id|co.jp|co.kr|com.tw|vn|fr|de|ie|it|pl|ru|es|tr|co.uk|la|com.br|co.za|me|co.il|ca)",
						//design: "6",
						myIntelSignIn: true,
						searchFilter: [{
							sf_var: "toplevelcategory",
							sf_val: "PSGSupport"
						}]
					},
					// ALTERA/PSG/FPGA - fpgasoftware.intel.com
					{
						site:"fpgasoftware-test.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					{
						site:"fpgasoftware.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					// ALTERA/PSG/FPGA - fpgacloud.intel.com
					{
						site:"fpgacloud-test.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					{
						site:"fpgacloud.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					// ALTERA/PSG/FPGA - buyfpga.intel.com
					{
						site:"test.buyfpga.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					{
						site:"buyfpga.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					// ALTERA/PSG/FPGA - SALESFORCE - Community Forums
					{
						site: "isvcqa4-intelcustomersupport.cs95.force.com/forums/",
						//design: "6",
						myIntelSignIn: true
					},
					{
						site: "forums.intel.com",
						//design: "6",
						myIntelSignIn: true
					},
					
					
					
					// ====================================
					// CUSTOM HEADER SITES - BEGIN
					{
						site: "simplecore-dev.intel.com/drc",
						menu: "drc",
						//design: "4",
						hide: "languageselector"//"menu|languageselector|search"
					},
					{
						site: "drc.intel.com|simplecore(|-dev).intel.com/drc|marketingcentral-dev.intel.com|marketingcentral.intel.com",
						menu: "drc",
						//design: "4",
						hide: "languageselector"
						//myIntelSignIn: false,
						//hide: "menu|languageselector|search|myintel"
					},
					{
						site: "intel2016ir.q4web.com|www.intc.com",
						menu: "intc",
						//design: "4",
						hide: "languageselector"//"menu|languageselector|search"
					},
					{
						site: "simplecore-dev.intel.com/inteldroneracing(|-lar|-pt)",
						menu: "inteldroneracing",
						env: "staging",
						//design: "4",
						hide: "search"
					},
					{
						site: "droneracing.intel(.com|.la|.com.br)",
						menu: "inteldroneracing",
						//design: "4",
						hide: "search"//"menu|languageselector|search"
					},
					{
						site:"modernstandbypartnerportal-dev.apps1-fm-int.icloud.intel.com|modernstandbypartnerportal-preprod.intel.com",
						//menu: "modernstandbypartnerportal",
						//design: "6",
						myIntelSignIn: true,
						hide: "menu"//"menu|languageselector|search"
					},
					{
						site:"modernstandbypartnerportal.intel.com",
						//menu: "modernstandbypartnerportal",
						//design: "6",
						myIntelSignIn: true,
						hide: "menu"//"menu|languageselector|search"
					},
					{
						site: "simplecore(-dev(|-gar)|-prc).intel.(com|cn)/realsensehub(|-cn)/",
						menu: "realsense"//,
						//design: "4",
						//,hide: "menu|languageselector|search"//"menu|languageselector|search"
					},					
					{
					site: "realsense.intel.(com|cn)",
						menu: "realsense"//,
						//design: "4"
					},
					{
						site: "simplecore-dev.intel.com/clusterready/",
						menu: "clusterready",
						//design: "4",
						hide: "search" //"menu|languageselector|search"
					},
					{
						site: "clusterready.intel.com",
						menu: "clusterready",
						//design: "4",
						hide: "search" //"menu|languageselector|search"
					},
					{
						site: "tryoptane.intel.com",
						menu: "tryoptane"//,
						//design: "4",
						//hide: "search" //"menu|languageselector|search"
					},
					{
						site: "chinacampus.jobs.intel.com",
						menu: "chinacampusjobs",
						//design: "4",
						hide: "languageselector/myintel/search" //"menu|languageselector|search"
					},
					{
						site: "swachhmap.com",
						menu: "swachhmap"//,    
						//design: "4",
						//hide: "languageselector/myintel/search" //"menu|languageselector|search"
					},
					{
						site: "transportation.com|transportationdev.intel.com|transportationcons.intel.com",
						menu: "transportation",    
						//design: "4",
						hide: "languageselector|search" //"menu|languageselector|search"
					},
					// CUSTOM HEADER SITES - END
					// ------------------------------------
					//
					
					
					
					// ====================================
					// AMAZON CLOUD - BEGIN
					// Simple Core AWS Wordpress sites
					// cloudinsider - Simple Core
					/*
					{
						site: "simplecore.intel.com/cloudinsider",
						design: "4"
					},
					{
						site: "cloudinsider.intel.com",
						design: "4"
					},
					//ITPEERNETWORK.INTEL.COM - footer only
					{
						site: "itpeernetwork.intel.com|simplecore-dev.intel.com/itpeernetwork/wp-admin/",
						design: "4"
					},
					// newsroom.intel.cn - Simple Core
					{
						site: "newsroom.intel.cn|simplecore-dev-gar.intel.com/intel-china-newsroom",
						design: "4"
					},
					// newsroom.intel.com - Simple Core - soon to migrate
					{
						site: "simplecore-dev.intel.com/newsroom",
						design: "4"
					},
					{
						site: "newsroom.intel.(com|co.uk|eu|es|la|ch|com.br|co.za|co.id|co.jp|de|fr|it|ru|com.tw|ie|com.tr|sa|sg|in|co.kr)|newsroom.thailand.intel.com",
						design: "4"
					},
					// SHOP sites on AWS
					{
						site: "shop-amr-798211079.us-west-2.elb.amazonaws.com",
						design: "4"
					},
					// Shopper Campaigns Website (SCW) on AWS - {Non Simple Core AWS Base}
					{
						site: "shoppercampaigns.intel.com|pre-shoppercampaigns.intel.com|staging-shoppercampaigns.intel.com",
						design: "4"
					},
					// (*.amazonaws.com) Simple Core AWS Base
					{
						site: "*.amazonaws.com|simplecore(|*).intel.(com|cn)",
						design: "4"
					},
					
					
					
					
					// **********************************************************
					// **********************************************************
					// ARK.INTEL.COM
					// (ark.intel.com|tst1ark.sym.cps.intel.com|mark.intel.com|tst1mark.sym.cps.intel.com|odata.intel.com|odata-dev.intel.com|odata-tst.intel.com)
					{
						site: "(ark(|-dev|-tst|-care)|mark(|-dev|-tst)|care-tst|spark(|-qa|-dev2)|odata(|-dev|-tst|-pspnew|-origin)).intel.com",
						design: "4"
					},
					// BLOGS
					// (staging-blogs.intel.com|blogs.intel.com)
					//          site: "(staging-blogs.intel.com|blogs.intel.com(?!/embedded))",
					{
						site: "blogs.intel.com|scoop.intel.com|staging-blogs.intel.com|staging-scoop.intel.com",
						design: "4"
					},
					*/
					// CCECHINA.INTEL.COM
					{
						site: "ccechina.intel.com|ccetest.apicloud-system.com",
						//design: "4",
						hide: "menu|languageselector|search|myintel"//"menu|languageselector|search"
					},
					/*
					// CORPREDIRECT
					{
						site: "corpredirect.intel.com",
						design: "4"
					},
					// C2A.INTEL.COM
					// (c2a.intel.com|c2a-dev.intel.com|c2a-tst.intel.com)
					{
						site: "(c2a-dev|c2a-psp).intel.com",
						design: "4"
					},
					{
						site: "(c2a|c2a-tst).intel.com",
						design: "4"
					},
					*/
					// CVENT.INTEL.COM
					{
						site: "www.cvent.com",
						//design: "4",
						hide: "menu|languageselector|search|myintel"//"menu|languageselector|search"
					},					
					// DOWNLOADCENTER.INTEL.COM (de_DE|en_US|es_MX|fr_FR|it_IT|ja_JP|ko_KR|pt_BR|ru_RU|zh_CN|zh_TW)
					// (downloadcenter-dev|downloadcenter-tst|downloadcenter|downloadcenter-prd|Downloadcenter01-prd|Downloadcenter02-prd).intel.com
					{
						site: "downloadcenter(01|02|)-(dev|tst|prd|dr).intel.com",
						//design: "4",
						searchFilter: [{
							sf_var: "topicarea",
							sf_val: "Downloads"
						}]
					},
					{
						site: "downloadcenter(|-origin).intel.com",
						//design: "4",
						searchFilter: [{
							sf_var: "topicarea",
							sf_val: "Downloads"
						}]
					},
					// EDC.INTEL.COM (en_us, zh_cn, ja_jp, zh_tw, ru_ru, ko_kr, es_xl, pt_br)
					// Menu2 for preview-edc.intel.com and edc.intel.com
					{
						site: "(edc.intel.com|preview-edc.intel.com|inteledcpreviewapp.azurewebsites.net)",
						//design: "4",
						searchFilter: [{
							sf_var: "progId",
							sf_val: "irdc"
						}, {
							sf_var: "EDCProgramIdentifier",
							sf_val: "true"
						}]
					},
					/*			
					// IGGE site (no known production domain yet)			
					{
						site: "dev-gameplay.intel.com/m|tst-gameplay.intel.com/m|dev-gameplay.intel.com/GSWSApp-mobile/m",
						design: "4"
					},
					{
						site: "gameplay.intel.com/m",
						design: "4"
					},
					{
						site: "dev-gameplay.intel.com|tst-gameplay.intel.com|lbauto-198-175-66-194.odce.intel.net/GSWSApp",
						design: "4"
					},
					{
						site: "gameplay.intel.com",
						design: "4"
					},
					// INTELSTUDIOS.EDGESUITE.NET (en_us)
					// Menu2 for intelstudios.edgesuite.net
					{
						site: "intelstudios.edgesuite.net",
						design: "4"
					},
					// INTC.INTEL.COM (en_US)
					// (www.intc.com|www.intc.com/?mode=7-14-11-RML-495550-25089112-9DC40AC04F3739D33C903C23FFF8C5A48F6BC0BF0DA612B2D2A3D00A29CA545E)
					{
					site: "(www.|)intc.com/?mode=7-14-11-RML-495550-25089112-9DC40AC04F3739D33C903C23FFF8C5A48F6BC0BF0DA612B2D2A3D00A29CA545E",
					//goodCulture: INTELNAV.Cultures.unav.ActiveCultures4,
					design: "4"
					},
					{
						site: "(www.|)intc.com|intc.client.shareholder.com",
						design: "4"
					},
					// ITP - Intel Training Portal - My Crowd Wisdom
					{
						site: "intel(rco|oem).(pre|)mycrowdwisdom.(com|net)",
						design: 4
					},
					*/
					/*	{
						site: "prechanneltraining.intel.com|channeltraining.intel.(com|cn)",
						//design: 4,
						myIntelSignIn: true
					},
					*/					
					/*
					// PARTNERADVANTAGE.INTEL.COM
					//(partneradvantage.intel.com|intiotpa-web02.tngdev.com)
					{
						site: "(partneradvantage.intel.com|intiotpa-web(02|03).tngdev.com)",
						design: "4"
					},
					*/
					// PARTNERCENTER.INTEL.COM
					//(crmdevmktg-intelcloudcrm.cs70.force.com|crmdevint2-intelcloudcrm.cs93).force.com)
					{
						site: "(crmdevint2|crmdevmktg|crmqa2)-intelcloudcrm.(cs70|cs93).force.com/partnercenter",
						//design: "4"
						hide: "languageselector"	//"menu|languageselector|search"
					},
					{
						site: "partnercenter.intel.com",
						//design: "4"
						hide: "languageselector"	//"menu|languageselector|search"
					},
					// PROCESSORMATCH.INTEL.COM
					//(stg1compdbw01.cps.intel.com|stg1compdbvenw01.cps.intel.com|tst1compdb2w.cps.intel.com|tst1compdb2w01.cps.intel.com|tst1compdb2w02.cps.intel.com|tst1cdbmbv2w.cps.intel.com)
					//(processormatch.intel.com|prd1compdb2w.cps.intel.com|prd1compdb2w01.cps.intel.com|prd1compdb2w02.cps.intel.com)
					{
						site: "processormatch.intel.com|tst1compdb2w01.cps.intel.com|tst1cdb2w.cps.intel.com|tst1cdbmbv2w.cps.intel.com|tst1compdb2w02.cps.intel.com|prd1cdb2w.cps.intel.com|prd1compdb2w01.cps.intel.com|prd1compdb2w02.cps.intel.com"//,
					//	design: "4"
					},
					//COMPDBMBVendor.intel.com
					//(CompDBMBVendor.intel.com|prd1cdbmbv2w.cps.intel.com|prd1cdbmbv2w02.cps.intel.com)
					{
						site: "(CompDBMBVendor.intel.com|prd1cdbmbv2w.cps.intel.com|prd1cdbmbv2w02.cps.intel.com)"//,
					//	design: "4"
					},
					{
						site: "(stg1compdbw01.cps.intel.com|stg1compdbvenw01.cps.intel.com)"//,
					//	design: "4"
					},
					// REGISTRATIONCENTER.INTEL.COM (zh_CN)
					//(registrationcenter.intel.com|qs2-registrationcenter.cps.intel.com|dev-registrationcenter04.cps.intel.com|nnvappsea02.ccr.corp.intel.com)
					{
						site: "registrationcenter.intel.com|prd1ircw.cps.intel.com|prd1ircw01.cps.intel.com|prd1ircw02.cps.intel.com|ircutils.cps.intel.com|prd1irciw01.cps.intel.com, prd1irciw02.cps.intel.com|tst1ircw01.cps.intel.com|tst1ircw02.cps.intel.com|ircutils-tst.cps.intel.com|ircutils.intel.com|ircutils-tst.intel.com|tst1irciw01.cps.intel.com|tst1irciw02.cps.intel.com|stg1regcenw01.cps.intel.com|stg1regcenw02.cps.intel.com|stg1regcenw03.cps.intel.com|stg1regcenw04.cps.intel.com|stg1regcenw05.cps.intel.com|stg1regcenw06.cps.intel.com|stg1regcenw07.cps.intel.com|stg1regcenw08.cps.intel.com|stg1regcenw09.cps.intel.com|stg1regcenw10.cps.intel.com|stg1regcenin.cps.intel.com|stg1regcenps.cps.intel.com|nnsapudov001.ccr.corp.intel.com|nnsstrofimo001.ccr.corp.intel.com|inthmemsw01.ccr.corp.intel.com|qs2-registrationcenter.cps.intel.com|registrationcenter.cps.intel.com|registrationcenter-download.intel.com"//,
					//	design: "4"
					},
					//SALESFORCE - Intel Customer Support in Salesforce
					{
						site: "(isvcqa4-intelcustomersupport.cs95.force.com/onlinecasemgmt|aquiladev4-intelcustomersupport.cs19.force.com/onlinecasemgmt|leodev4-intelcustomersupport.cs19.force.com/onlinecasemgmt|devint4-intelcustomersupport.cs96.force.com/onlinecasemgmt|isvcstage4-intelcustomersupport.cs68.force.com/onlinecasemgmt)",
						myIntelSignIn: true
					},
					{
						site: "(intelcustomersupport.force.com|customercare.intel.com|supporttickets.intel.com)",
						myIntelSignIn: true
					},
					//SALESFORCE - Intel Partners
					{
						site: "nppdevpmp-intelcloudcrm.cs67.force.com",
						myIntelSignIn: true						
					},
					{
						site: "marketplace.intel.com",
						myIntelSignIn: true						
					},
					// source.intel.com
					{
						site: "(www.|)source.intel.com|sme-intel-preprod.herokuapp.com",
						//design: "4",
						hide: "languageselector"//"menu|languageselector|search"
					},
					{
						site: "jgarber-mobl.amr.corp.intel.com/sites/sitewide/HAT/testharness/50recode.2/*forcetest=drc-4-dev",
						menu: "drc"
					},			
					{
						site: "jgarber-mobl.amr.corp.intel.com/sites/sitewide/HAT/testharness/50recode|ighf-staging.intel.com",
						design: "6"

					}
				]
			};


			INTELNAV.oldBrowserDetect = function() {
				var BrowserMode = ((document.compatMode == 'CSS1Compat') ? 'Standards' : 'Quirks');
				
				// OS detector
				
				var str = navigator.appVersion.toLowerCase().replace(/[^a-zA-Z 0-9 . / _]+/g, "").split(" ");
				deviceType = str[1].substr(0, 3);
				
				// IE Version detector
				if (/MSIE\s([\d.]+)/.test(navigator.userAgent)) {
					//Get the IE version.  This will be 6 for IE6, 7 for IE7, etc...
					var version = new Number(RegExp.$1);
					
					INTELNAV.browser = {Name:"ie", Version:version, Mode: BrowserMode};
					
					switch (parseInt(version))
					{
					case 9: 
						document.documentElement.className += ' lt-ie10';
						document.body.className += deviceType+' ie ie9_0';
						break;
						
					case 8:
						document.documentElement.className += ' lt-ie10 lt-ie9';
						document.body.className += deviceType+' ie ie8_0';
						break;
						
					case 7:
						document.documentElement.className += ' lt-ie10 lt-ie9 lt-ie8';
						document.body.className += deviceType+' ie ie7_0';
						break;
						
					case 6:
						document.documentElement.className += ' lt-ie10 lt-ie9 lt-ie8 lt-ie7';
						document.body.className += deviceType+' ie ie6_0';
						break;
						
					default:
						break;
					}
					
				} else {
					INTELNAV.browser = {Name:"", Version:0, Mode: BrowserMode};
				}

			};

			INTELNAV.oldBrowserDetect();

			//----------------------------------- end of browser check -----------------------------------------





			(function() {
				hf_debug("timestart", "TOTALLOADTIME", "", 1, isdebug);
				hf_debug("bundletimestart", "headerchooser.js: (function(){})", "", 2, isdebug);

				// TESTHARNESS parameter overrides
				if (INTELNAV.getParameterByName("pageWidth") !== '') {INTELNAV.renderSettings.pageWidth = INTELNAV.getParameterByName("pageWidth");}
				if (INTELNAV.getParameterByName("textDirection") !== '') {INTELNAV.renderSettings.textDirection = INTELNAV.getParameterByName("textDirection");}
				if (INTELNAV.getParameterByName("protocol") !== '') {INTELNAV.renderSettings.protocol = INTELNAV.getParameterByName("protocol");}
				if (INTELNAV.getParameterByName("culture") !== '') {INTELNAV.renderSettings.culture = INTELNAV.getParameterByName("culture");}
				if (INTELNAV.getParameterByName("buildType") !== '') {INTELNAV.renderSettings.buildType = INTELNAV.getParameterByName("buildType");}
				if (INTELNAV.getParameterByName("OutputId") !== '') {INTELNAV.renderSettings.OutputId = INTELNAV.getParameterByName("OutputId");}

				// initialize variables
				INTELNAV.culture = INTELNAV.renderSettings.culture;
				INTELNAV.baseCulture = INTELNAV.culture;
				
				switch (INTELNAV.culture.toUpperCase())
				{
					case "EN_XR": 
					case "AR_DZ": 
					case "AR_MA":
						INTELNAV.renderSettings.textDirection = "ltr"; //this is to sync the direction with CQ 
						break;
					case "AR_EG":
						INTELNAV.renderSettings.textDirection = "rtl"; //this is to sync the direction with CQ 
						break;
					
					default:
						//do nothing
						break;
				}
				
				
				var outputid = INTELNAV.renderSettings.OutputId;

				hf_debug("log", "CULTURE=" + INTELNAV.culture, "", 1, isdebug);
				hf_debug("log", "OUTPUTID=" + outputid, "", 1, isdebug);
				hf_debug("log", "boxmodel=" + document.compatMode, "", 1, isdebug);


				INTELNAV.processUNAVgeos = function() {
					hf_debug("profile", "processUNAVgeos()", "", 2, isdebug);
					var getAltGeo = function(thisGeo, listOfGeos) {
						var curGEO = thisGeo;
						var altGEO = "";
						
						for (j = 0, len = listOfGeos.length; j < len; j++) {
							thisSplitGEO = listOfGeos[j].split(":");
							if (curGEO == thisSplitGEO[0]) {
								if (thisSplitGEO[1] != null && thisSplitGEO[1] != 'undefined' && thisSplitGEO[1] != '') {
									altGEO = thisSplitGEO[1];
									hf_debug("log", "ALT CULTURE=" + altGEO, "", 1, isdebug);
									break;
								} 
							}
						}
						return altGEO;
					}
					
					INTELNAV.renderSettings.origCulture = INTELNAV.culture;
					var listOfGeos = INTELNAV.activeCultures.split("|");
					retGEO = getAltGeo(INTELNAV.renderSettings.culture, listOfGeos);
					if (retGEO != '') {
						INTELNAV.culture = retGEO; //"es_XL";
						hf_debug("log", "NEW CULTURE=" + INTELNAV.culture, "", 1, isdebug);
					}
					hf_debug("profileEnd", "processUNAVgeos()", "", 2, isdebug);
				};
				

				// Initialize the build of the header
				INTELNAV.initBuild = function() {
					hf_debug("bundletimestart", "headerchooser.js: INTELNAV.initBuild()", "", 2, isdebug);


					var currentPageUrl = document.location.href;
					var targetEnvironmentForUrl = {}; // to hold the target environment

					var detectIE8 = false;
					
					// FIND DOMAIN/PATH IN LOOKUP TABLE
					INTELNAV.domainLookUp = function() {
						hf_debug("profile", "domainLookUp()", "", 2, isdebug);
						// go to the LUT
						var LUT = INTELNAV.UrlLookUpTable.urls;
						hf_debug("log", "forcetest-notempty[1]=" + forcetest, "", 2, isdebug);
						
						var lutlength = LUT.length;
						
						if ((lutlength > 0) && (RollBack == false)) {
							hf_debug("log", "LUT.length=" + lutlength, "", 2, isdebug);

							for (var i = 0; i < lutlength; i++) {

								var myregexp = new RegExp("^https?:\\/\\/" + LUT[i].site.replace(/\./g, "\\.").replace(/\?(?!!)/g, "\\?").replace(/\*/g, ".+") + ".*", "i");
								hf_debug("log", "i=" + i + "   regex=" + myregexp, "", 2, isdebug);
								
								if (myregexp.test(currentPageUrl)) {
									hf_debug("log", "LUT Match Found", "", 1, isdebug);
									hf_debug("log", "LUT Match Found("+myregexp+")", "", 2, isdebug);
									
									if (!forcetest) {
										// GET MENU
										if (typeof LUT[i].menu !== 'undefined') {
											INTELNAV.forceTestObj[menu] = LUT[i].menu;
										}
										hf_debug("log", "MENU(MAPPED)=" + INTELNAV.forceTestObj[menu], "", 1, isdebug);
										
										// GET ENVIRONMENT
										if (typeof LUT[i].env !== 'undefined') {
											INTELNAV.forceTestObj[env] = LUT[i].env;
										}
										hf_debug("log", "ENVIRONMENT(MAPPED)=" + INTELNAV.forceTestObj[env], "", 1, isdebug); 
										
										// GET DESIGN
										if (typeof LUT[i].design !== 'undefined') {
											INTELNAV.forceTestObj[design] = parseInt(LUT[i].design);
										}
										hf_debug("log", "DESIGN(MAPPED)=" + INTELNAV.forceTestObj[design], "", 1, isdebug);
										
										hf_debug("log", "CULTURE(MAPPED)=" + INTELNAV.culture, "", 1, isdebug);
										
										// GET MATCH DETAILS
										targetEnvironmentForUrl = LUT[i];
									}
									
									INTELNAV.LUT = LUT[i];
									
									window.waitFor.add(function() { return typeof INTELNAV.renderSettingsHeader !== 'undefined'}, function() {
										document.getElementById('recode50header').className = 'recode50unav';
									});
									
									break;
								}
							} // For Loop
						}
						hf_debug("profileEnd", "domainLookUp()", "", 2, isdebug);
					};
					
					if (forcetest == '' || forcetest == "empty" || forcetest == null) {
						INTELNAV.domainLookUp();
					}

					hf_debug("log", "INTELNAV.forceTestObj[]="+INTELNAV.forceTestObj[menu]+"-"+INTELNAV.forceTestObj[design]+"-"+INTELNAV.forceTestObj[env], "", 2, isdebug);

					// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
					// Necessary for IE support of the KEYS object
					if (!Object.keys) {
						Object.keys = (function() {
							'use strict';
							var hasOwnProperty = Object.prototype.hasOwnProperty,
								hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
								dontEnums = [
									'toString',
									'toLocaleString',
									'valueOf',
									'hasOwnProperty',
									'isPrototypeOf',
									'propertyIsEnumerable',
									'constructor'
								],
								dontEnumsLength = dontEnums.length;

							return function(obj) {
								if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
									throw new TypeError('Object.keys called on non-object');
								}

								var result = [], prop, i;

								for (prop in obj) {
								//for (prop = 0, len = obj.length; prop < len; prop++) {
									if (hasOwnProperty.call(obj, prop)) {
										result.push(prop);
									}
								}

								if (hasDontEnumBug) {
									for (i = 0; i < dontEnumsLength; i++) {
										if (hasOwnProperty.call(obj, dontEnums[i])) {
											result.push(dontEnums[i]);
										}
									}
								}
								return result;
							};
						}());
					}

					// LETS PROCESS THE MENU AND DESIGN
					INTELNAV.validateMenu = function() {
						hf_debug("profile", "validateMenu()", "", 2, isdebug);
						var menuObj = INTELNAV.recode50;
						var tmpMenu = INTELNAV.forceTestObj[menu];
						var keys = Object.keys(menuObj);
						var keysLength = keys.length;
						for (var i=0, keys; i<keysLength; i++) {
							hf_debug("log", "validateMenu(): i("+i+") = FOUND ", "", 2, isdebug);
							if (keys[i] == INTELNAV.forceTestObj[menu]) {
								// Match
								hf_debug("log", "validateMenu(): iMenu("+keys[i]+") = FOUND " + INTELNAV.recode50[keys[i]], "", 2, isdebug);
								tmpMenu = keys[i];
								break;
							} else {
								tmpMenu = "";
							}
						}
						hf_debug("profileEnd", "validateMenu()", "", 2, isdebug);
						return tmpMenu;
					};

					INTELNAV.validateDesign = function() {
						hf_debug("profile", "validateDesign()", "", 2, isdebug);
						var designObj = INTELNAV.recode50[INTELNAV.forceTestObj[menu]];
						var tmpDesign = -1; //INTELNAV.forceTestObj[design];
						var keys = Object.keys(designObj);
						var keysLength = keys.length;
						hf_debug("log", "validateDesign(): keysLength("+keysLength+");", "", 2, isdebug);
						for (var i=0, keys; i<keysLength; i++) {
							hf_debug("log", "validateDesign(): i("+INTELNAV.forceTestObj[menu]+");", "", 2, isdebug);
							if (keys[i] == INTELNAV.forceTestObj[design]) {
								// Match
								hf_debug("log", "validateDesign(): INTELNAV.forceTestObj[menu]("+INTELNAV.forceTestObj[menu]+"); iDesign("+keys[i]+") = FOUND " + designObj[keys[i]], "", 2, isdebug);
								tmpDesign = keys[i];
								break;
							} else {
								tmpDesign = -1;
							}
						}
						hf_debug("profileEnd", "validateDesign()", "", 2, isdebug);
						return tmpDesign;
					};
					
					INTELNAV.getDesignData = function() {
						targetEnvironmentForUrl.defaultPathHttp = INTELNAV.recode50[INTELNAV.forceTestObj[menu]][INTELNAV.forceTestObj[design]][INTELNAV.forceTestObj[env]+"PathHttp"];
						
						hf_debug("log", "getDesignData(): targetEnvironmentForUrl(2).defaultPathHttp=" + targetEnvironmentForUrl.defaultPathHttp, "", 2, isdebug);
					};
					
					// PROCESS FALLBACK LOGIC
					INTELNAV.designFallbackByGeoMatch = function() {
						hf_debug("profile", "designFallbackByGeoMatch()", "", 2, isdebug);
						//LOOP
						//if geo in cultures(designs) then geoMatch=true
						//else if design = 0 then geo="en_US", geoMatch=true
						//else design-1
						//DO NOT PUT ANY DESIGN SPECIFIC RULES HERE OTHER THAN ROLLBACK RULES
						var count = 0;
						//var flip = 0;
						var geoMatch = false;
						var tmpDesign = INTELNAV.forceTestObj[design];// designMatch;//design;
						
						if (INTELNAV.browser.Name == "ie" && (INTELNAV.browser.Version == "8.0" || INTELNAV.browser.Version == "7.0" || INTELNAV.browser.Version == "6.0") ) {
							detectIE8 = true;
							hf_debug("log", "detectIE8", detectIE8, 1, isdebug);
						} 

						while (!geoMatch) {

							hf_debug("log", "menu="+INTELNAV.forceTestObj[menu], "", 2, isdebug);
							hf_debug("log", "tmpDesign="+tmpDesign, "", 2, isdebug);
							hf_debug("log", "INTELNAV.Cultures="+INTELNAV.recode50[INTELNAV.forceTestObj[menu]][tmpDesign], "", 2, isdebug);
							hf_debug("log", "firstDesign="+parseInt(INTELNAV.recode50[INTELNAV.forceTestObj[menu]]["firstDesign"]), "", 2, isdebug);

							if (typeof INTELNAV.recode50[INTELNAV.forceTestObj[menu]][tmpDesign] !== 'undefined') {
								
								if (typeof INTELNAV.recode50[INTELNAV.forceTestObj[menu]][tmpDesign]["ActiveCultures"] !== 'undefined') {
									INTELNAV.activeCultures = INTELNAV.recode50[INTELNAV.forceTestObj[menu]][tmpDesign]["ActiveCultures"];
									INTELNAV.processUNAVgeos(); //switch to alternate if needed
									hf_debug("log", "parseInt(INTELNAV.recode50[INTELNAV.forceTestObj[menu]][tmpDesign]['ActiveCultures']['firstDesign'])", INTELNAV.recode50[INTELNAV.forceTestObj[menu]]["firstDesign"], 2, isdebug);
									
									if (INTELNAV.recode50[INTELNAV.forceTestObj[menu]][tmpDesign]["ActiveCultures"].search(INTELNAV.culture) !== -1) {
										geoMatch = true;
										hf_debug("log", "designFallbackByGeoMatch(A)="+tmpDesign, "", 2, isdebug);
										hf_debug("log", "DESIGN("+tmpDesign+")=GEO("+INTELNAV.culture+") Match Found!", "", 1, isdebug);

									} else if (tmpDesign == parseInt(INTELNAV.recode50[INTELNAV.forceTestObj[menu]]["firstDesign"])) {
										//REACHED BOTTOM WITHOUT MATCH - RESET TO MAPPED DESIGN AND EN_US
										INTELNAV.culture = "en_US";
										tmpDesign = INTELNAV.forceTestObj[design];
										geoMatch = true; 
										hf_debug("log", "designFallbackByGeoMatch(B)="+tmpDesign, "", 2, isdebug);
										hf_debug("log", "##teamcity[message text='GEO("+INTELNAV.baseCulture+") not found in DESIGN("+tmpDesign+")' errorDetails='GEO("+INTELNAV.baseCulture+") not found in DESIGN("+tmpDesign+")' status='FAILURE'] ", "", 1, isdebug);
										hf_debug("log", "Resetting to DESIGN("+tmpDesign+"), GEO("+INTELNAV.culture+") ", "", 1, isdebug);
										
									} else {
										//FALLBACK ONE DESIGN LEVEL
										tmpDesign--;
										hf_debug("log", "designFallbackByGeoMatch(C)="+tmpDesign, "", 1, isdebug);
										hf_debug("log", "##teamcity[message text='GEO("+INTELNAV.baseCulture+") not found in DESIGN("+tmpDesign+"), falling back' errorDetails='GEO("+INTELNAV.baseCculture+") not found in DESIGN("+tmpDesign+"), falling back' status='FAILURE'] ", "", 1, isdebug);
										hf_debug("log", "DESIGN("+tmpDesign+")=GEO("+INTELNAV.culture+") Not Found, falling back", "", 1, isdebug);
									}
								} else {
									tmpDesign--;
								}
							} else {
								tmpDesign--;
							}
							
							//SAFTY BREAK FOR LOOP
							count++;
							if (count>20) {		//? what defines 20
								geoMatch = true;
								hf_debug("log", "designFallbackByGeoMatch(>10)="+tmpDesign, "", 2, isdebug);
							}
						}
						INTELNAV.forceTestObj[design] = tmpDesign;
						hf_debug("profileEnd", "designFallbackByGeoMatch()", "", 2, isdebug);
					};						
					hf_debug("log", "MENU(MAPPED2)=" + INTELNAV.forceTestObj[menu], "", 1, isdebug);
					hf_debug("log", "DESIGN(MAPPED2)=" + INTELNAV.forceTestObj[design], "", 1, isdebug);
					hf_debug("log", "CULTURE(MAPPED2)=" + INTELNAV.culture, "", 1, isdebug);

					if (typeof INTELNAV.recode50[INTELNAV.forceTestObj[menu]] !== 'undefined') {
						// MENU CHOSEN IS VALID
						hf_debug("log", "INTELNAV.forceTestObj[menu]("+INTELNAV.forceTestObj[menu]+") = VALID", "", 1, isdebug);
						
						if ( (INTELNAV.forceTestObj[design] = INTELNAV.validateDesign()) >= 0 ) {
							// DESIGN CHOSEN IS VALID
							hf_debug("log", "INTELNAV.forceTestObj[design]("+INTELNAV.forceTestObj[design]+") = VALID", "", 2, isdebug);
							INTELNAV.designFallbackByGeoMatch();
							hf_debug("log", "MENU(MAPPED3)=" + INTELNAV.forceTestObj[menu], "", 1, isdebug);
							hf_debug("log", "DESIGN(MAPPED3)=" + INTELNAV.forceTestObj[design], "", 1, isdebug);
							hf_debug("log", "CULTURE(MAPPED3)=" + INTELNAV.culture, "", 1, isdebug);
							
							//Get Design Paths
							INTELNAV.getDesignData();

							
							// ============================================================================			
							// MENU SPECIFIC NEEDS

							switch (INTELNAV.forceTestObj[menu]) 
							{
								case "drc":
								case "intc":
								case "unav":
								default:
								// -------------------------------------------------------
									hf_debug("log", "forcetest-design[3+4]=" + forcetest, "", 2, isdebug);
									
									if (INTELNAV.browser.Name == "ie" && INTELNAV.browser.Version == "7.0") {
										detectIE8 = true;
										hf_debug("log", "detectIE8", detectIE8, 1, isdebug);
										hf_debug("log", "enable HTML5 objects for IE8", "", 1, isdebug);
										//enable HTML5 objects
										document.createElement('header');
										document.createElement('section');
										document.createElement('article');
										document.createElement('aside');
										document.createElement('nav');
										document.createElement('footer');
									}
									if (INTELNAV.recode50[INTELNAV.forceTestObj[menu]][INTELNAV.forceTestObj[design]]["ActiveCultures"].toUpperCase().search(INTELNAV.culture) !== -1 && detectIE8 == false) {
										hf_debug("log", "DESIGN(INIT)="+INTELNAV.forceTestObj[design], "", 2, isdebug);

										//What is the visibility state for this site?
										if (typeof INTELNAV.dashboard !== 'undefined' && typeof INTELNAV.dashboard.isVisible !== 'undefined') { segment = INTELNAV.dashboard.isVisible;}
										if (typeof targetEnvironmentForUrl.isVisible !== 'undefined') { segment = "-" + targetEnvironmentForUrl.isVisible;}
										if (segment == "-footeronly") {
											document.getElementById('recode50header').className += ' u-nav-hidden ';
											document.getElementById('recode50header').style.display = 'none';
											window.waitFor.add(function() { return typeof INTELNAV.renderSettingsFooter !== 'undefined'}, function() {
												document.getElementById('recode50footer').className += ' small ';
											});
										} else {
											segment = "-both";
										}
										hf_debug("log", "SEGMENT=" + segment, "", 1, isdebug);
										
										INTELNAV.activeCultures = INTELNAV.recode50[INTELNAV.forceTestObj[menu]][INTELNAV.forceTestObj[design]]["ActiveCultures_RWD"];
										
									}
									
									if (!forcetest) {
									//Do we have a search filter?
										if (typeof INTELNAV.LUT !== 'undefined') {
											if (typeof INTELNAV.LUT.searchFilter !== 'undefined') {
												searchFilter = INTELNAV.LUT.searchFilter;
											}
										}
										if (typeof targetEnvironmentForUrl.searchFilter !== 'undefined') {
											searchFilter = targetEnvironmentForUrl.searchFilter;
										}
										hf_debug("log", "searchFilter=" + searchFilter, "", 2, isdebug);
									}
								

								//====================================================
								//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
								//****************************************************
								// FORCING RWD on all sites							
								isRWD = "true";
								// REMOVE this line if going back to site specific mapping for RWD
								//****************************************************
								//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
								//====================================================
								break;
								// -------------------------------------------------------
								
							}
							// Close SWITCH
								
							// ============================================================================

							//only necessary to support older designs
							INTELNAV.renderSettings.culture = INTELNAV.culture;
							
							//load assets
							INTELNAV.assetPathHttp=targetEnvironmentForUrl.defaultPathHttp;

							hf_debug("log", "INTELNAV.assetPathHttp=" + INTELNAV.assetPathHttp, "", 2, isdebug);
					
							assetPath = INTELNAV.assetPathHttp;
							
							var rx;
							rx = /(https?:\/\/[-\w.]+)+(:\d+)?(\/)?/;
							matches = assetPath.match(rx);
							if (matches !== null) {
								host = matches[0]; // http://www.intel.com
								if (host.charAt(host.length - 1) == "/") {
									host = host.slice(0, -1);
								}
							}
							
							if (typeof(host) != "undefined") {
								INTELNAV.assetServer = host;
							} else {
								INTELNAV.assetServer = "";
							}

							hf_debug("log", "INTELNAV.assetServer=" + INTELNAV.assetServer, "", 2, isdebug);
							
							hf_debug("log", "INTELNAV.loadJS(assetPath)", "", 2, isdebug);
							INTELNAV.loadJS(assetPath);
							

							hf_debug("bundletimeend", "headerchooser.js: INTELNAV.initBuild()", "", 2, isdebug);

						} else {
							hf_debug("log", "INTELNAV.forceTestObj[design]("+INTELNAV.forceTestObj[design]+") = NOT FOUND ", "", 2, isdebug);
						}

					} else {
						hf_debug("log", "INTELNAV.forceTestObj[menu]("+INTELNAV.forceTestObj[menu]+") = NOT FOUND ", "", 2, isdebug);
					}
					hf_debug("log", "======================================", "", 2, isdebug);

				};

				// Initialize the Header/Footer Build
				INTELNAV.initBuild();

				hf_debug("bundletimeend", "headerchooser.js: (function(){})", "", 2, isdebug);
			})();
		

		});

	});
	
	// Empty functions to support very old legacy pages. Code nested in the pages calls to these functions, which now do nothing.
	function sectionOn() { } function hideAllMenus() { } function writeMenus() { }

} // close main anonymous function