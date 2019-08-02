<script type="text/javascript">


var mod = false;

var TCenvironment = "Sandbox",
	TCrecode = "50recode2";

// get queryString value by name - OLD VERSION
getParamByName = function(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results === null) {return "";}
	else {return decodeURIComponent(results[1].replace(/\+/g, " "));}
};

function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}

function buildSpeedTest(speedTest){
	
	var div = document.querySelector('#speedTest');
	
	if (speedTest !== "true") {
		div.innerHTML += "<a ID='SpeedTestOn' href='" + UpdateQueryString("speedtest","true") + "'>Enable SPEED TEST</a>";
	} else {
		div.innerHTML += "<a ID='SpeedTestOff' href='" + UpdateQueryString("speedtest","false") + "'>Disable SPEED TEST</a>";
	}
}



var processPage = function() { 
window.waitFor.add(function() { return typeof INTELNAV.recode50 !== 'undefined'}, function() {
window.waitFor.add(function() { return typeof INTELNAV.jQuery_1_11_1 !== 'undefined'}, function() {
	if (getParamByName("mod") != '') {
		mod = true;
	}
	if (getParamByName("speedtest") !== "true") {
		console.log("speedtest=false");
		
		document.querySelector("#MAIN").style.display = "block";
		document.querySelector("#SUB").style.display = "block";		
		
		if (getParamByName("ftrOutputId") != '') { INTELNAV.renderSettingsFooter.OutputId = getParamByName("ftrOutputId"); }

		document.getElementById("cq_geo").innerText  = INTELNAV.renderSettings.culture;
		document.getElementById("cq_header").innerText  = INTELNAV.renderSettings.OutputId == undefined ? 'en_US' : INTELNAV.renderSettings.OutputId;
		if (typeof INTELNAV.renderSettingsFooter != 'undefined') {
			document.getElementById("cq_footer").innerText  = (INTELNAV.renderSettingsFooter.OutputId == undefined ? 'None' : INTELNAV.renderSettingsFooter.OutputId) ;
		}

		if (typeof HeaderType == 'undefined') {HeaderType="default";}
		
		document.getElementById("hcpath").value = getParamByName("hcpath");
		document.getElementById("hc").value = getParamByName("hc");
		document.getElementById("forcetest").value = getParamByName("forcetest");
		
		buildSpeedTest(getParamByName("speedtest"));
		showDesignModes();
		showActiveGeos();
		showFrameworkGeos();
		//showXML();
		
	} else {
		console.log("speedtest=true");
		buildSpeedTest(getParamByName("speedtest"));		
	}
	
	if (mod == false) {
		//var d = document.getElementById("xmlresults");
		//d.className += "hidden";
		
		var d = document.getElementById("form");
		d.className += "hidden";
		
		var d = document.getElementById("SUB");
		d.className += "hidden";
	} else {
		
	}
});
});
}


function formatpath(culture) {
	newPath = (culture + ".html"+location.search);
	window.location = newPath;
}


String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function showDesignModes() {
	var isHidden="", isModHidden="";

	// *****************************************************
	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	// Necessary for IE support of the KEYS object
	if (!Object.keys) {Object.keys = (function() {'use strict';var hasOwnProperty = Object.prototype.hasOwnProperty,hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),dontEnums = ['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength = dontEnums.length;return function(obj) {if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {throw new TypeError('Object.keys called on non-object');}var result = [], prop, i;for (prop in obj) {if (hasOwnProperty.call(obj, prop)) {result.push(prop);}}if (hasDontEnumBug) {for (i = 0; i < dontEnumsLength; i++) {if (hasOwnProperty.call(obj, dontEnums[i])) {result.push(dontEnums[i]);}}}return result;};}());}
	// *****************************************************
	
	
	// selects the div with an id of placeholder
	var div = document.getElementById('DesignModes');
	
	var menuObj = INTELNAV.recode50;
	
	for (var i=0, menukeys=Object.keys(menuObj); i<menukeys.length; i++) {

		
		var designObj = INTELNAV.recode50[menukeys[i]];
		for (var j=0, designkeys=Object.keys(designObj); j<designkeys.length; j++) {
			if (!isNaN(designkeys[j]) ) {
				
				var isCurrent="";
				
				var ul = document.createElement('ul'); // create an arbitrary ul element

				if (mod == false) {
					
					if (menukeys[i] != INTELNAV.forceTestObj[0]) {
						isHidden = "hidden";
						isModHidden = "";
					} else {
						isHidden = "";
						isModHidden = "hidden";
					}
				} else {
					isHidden = "";
					isModHidden = "";
				}
				
				
				
				ul.setAttribute('class','design '+menukeys[i]+designkeys[j]+' '+isHidden);
				
				if (menukeys[i] == INTELNAV.forceTestObj[0] && INTELNAV.forceTestObj[2]=="dev") {isCurrent = "current";} else {isCurrent = "";}
				var tmpParm = menukeys[i]+"-"+designkeys[j]+"-dev";
				ul.innerHTML += "<li class='"+isModHidden+" "+isCurrent+"'><a href='" + UpdateQueryString("forcetest",tmpParm) + "'>" + tmpParm + " on LOCALHOST</a></li>";
				
				if (menukeys[i] == INTELNAV.forceTestObj[0] && INTELNAV.forceTestObj[2]=="staging") {isCurrent = "current";} else {isCurrent = "";}
				var tmpParm = menukeys[i]+"-"+designkeys[j]+"-staging";
				ul.innerHTML += "<li class='"+isModHidden+" "+isCurrent+"'><a href='" + UpdateQueryString("forcetest",tmpParm) + "'>" + tmpParm + " on IGHF-STAGING</a></li>";
				
				if (menukeys[i] == INTELNAV.forceTestObj[0] && INTELNAV.forceTestObj[2]=="preprod") {isCurrent = "current";} else {isCurrent = "";}
				var tmpParm = menukeys[i]+"-"+designkeys[j]+"-preprod";
				ul.innerHTML += "<li class='"+isModHidden+" "+isCurrent+"'><a href='" + UpdateQueryString("forcetest",tmpParm) + "'>" + tmpParm + " on IGHF-PRODUCTION</a></li>";
				
				if (menukeys[i] == INTELNAV.forceTestObj[0] && INTELNAV.forceTestObj[2]=="test") {isCurrent = "current";} else {isCurrent = "";}
				var tmpParm = menukeys[i]+"-"+designkeys[j]+"-test";
				ul.innerHTML += "<li class='"+isModHidden+" "+isCurrent+"'><a href='" + UpdateQueryString("forcetest",tmpParm) + "'>" + tmpParm + " on TEST-WWW</a></li>";
				
				if (menukeys[i] == INTELNAV.forceTestObj[0] && INTELNAV.forceTestObj[2]=="prod") {isCurrent = "current";} else {isCurrent = "";}
				var tmpParm = menukeys[i]+"-"+designkeys[j]+"-prod";
				ul.innerHTML += "<li class='"+isCurrent+"'><a href='" + UpdateQueryString("forcetest",tmpParm) + "'>" + tmpParm + " on PRODUCTION</a></li>";
				
				ul.innerHTML += "<li></li>";

				
				div.appendChild(ul); // finally the ul element to the div with an id of placeholder
				
				//Get status for inital page load
				getTCstatus(menukeys[i].capitalizeFirstLetter(),designkeys[j]);
				
				//Reset status on interval
				/*setDeceleratingTimeout(
					function(buildID){
						getTCstatus(buildID);
					}, 2000, 20, menukeys[i].capitalizeFirstLetter()+designkeys[j]
				);*/
				
				
				console.log('i='+i);
				console.log('menukeys[i]='+menukeys[i].capitalizeFirstLetter());
				console.log('j='+j);
				console.log('designkeys[j]='+designkeys[j]);
				
				
			}
		}
		
		
	}	
	
}


function setDeceleratingTimeout(callback, factor, times, buildID) {
    var internalCallback = function(tick, counter) {
        return function() {
            if (--tick >= 0) {
                window.setTimeout(internalCallback, ++counter * factor);
				console.log("counter="+counter);
				if (counter >= 10) {
					counter=0;					
					//return;
				}
				callback(buildID);
            }
        }
    }(times, 0);

    window.setTimeout(internalCallback, factor);
};


function delayLink (URL) {
    setTimeout( function() { window.location = URL }, 5000 );
}


function getTCstatus(menuKey, designKey){
	BuildID = menuKey+designKey;
	var tmpString = "<a href='http://ubit-teamcity-iag.intel.com/viewType.html?buildTypeId=IntelComService_"+TCenvironment+"_Ighf_"+TCrecode+"_Design"+designKey+"_"+BuildID+"&guest=1' target='_blank' style='float:left;'><img src='http://ubit-teamcity-iag.intel.com/app/rest/builds/buildType:(id:IntelComService_"+TCenvironment+"_Ighf_"+TCrecode+"_Design"+designKey+"_"+BuildID+")/statusIcon'/></a>";
	var tmpString2 = "";
	
	/*
	INTELNAV.jQuery_1_11_1.ajax({
		url: 'results/'+BuildID+'/autoPush.dat?_=' + new Date().getTime(),
		success: function (data){
			//alert(data.replace(/(\r\n|\n|\r)/gm,"")+":"+BuildID);
			data = data.replace(/(\r\n|\n|\r)/gm,"");
			console.log("BuildID="+BuildID+":data="+data);
			
			if (data == 'true') {
				tmpString += "<span class='base-status glyphicon glyphicon-play' alt='AUTO PUSH 2 PRODUCTION = TRUE' title='AUTO PUSH 2 PRODUCTION = TRUE' style='float:left; padding-top:4px;'></span>";
				//				tmpString += "<span style='float:left;'><div class='progress'><div class='progress-bar progress-bar-danger progress-bar-striped active' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 20%'><span class='glyphicon glyphicon-refresh glyphicon-refresh-animate'></span> Processing...</div></div></span>";
			} else {
				tmpString += "<span class='base-status glyphicon glyphicon-pause' alt='AUTO PUSH 2 PRODUCTION = FALSE' title='AUTO PUSH 2 PRODUCTION = FALSE' style='float:left; padding-top:4px;'></span>";
				//				tmpString += "<span style='float:left;'><div class='progress'><div class='progress-bar progress-bar-danger progress-bar-striped active' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 20%'><span class='glyphicon glyphicon-refresh glyphicon-refresh-animate'></span> Processing...</div></div></span>";
			}
		},
		async:false
	});
	
	INTELNAV.jQuery_1_11_1.ajax({
		url: 'results/'+BuildID+'/pausePush.dat?_=' + new Date().getTime(),
		success: function (data){
			//alert(data.replace(/(\r\n|\n|\r)/gm,"")+":"+BuildID);
			data = data.replace(/(\r\n|\n|\r)/gm,"");
			console.log("BuildID="+BuildID+":data="+data);
			
			if (data == 'true') {
				tmpString += "<span class='status glyphicon glyphicon-pause' alt='PAUSED' title='PAUSED' style='float:left; padding-top:4px;'></span>";
				//				tmpString += "<span style='float:left;'><div class='progress'><div class='progress-bar progress-bar-danger progress-bar-striped active' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 20%'><span class='glyphicon glyphicon-refresh glyphicon-refresh-animate'></span> Processing...</div></div></span>";
			}
		},
		async:false
	});

	
	INTELNAV.jQuery_1_11_1.ajax({
		url: 'results/'+BuildID+'/processing.dat?_=' + new Date().getTime(),
		success: function (data){
			//alert(data.replace(/(\r\n|\n|\r)/gm,"")+":"+BuildID);
			data = data.replace(/(\r\n|\n|\r)/gm,"");
			console.log("BuildID="+BuildID+":data="+data);
			
			if (data == 'true') {
				//tmpString = tmpString + "<span class='status glyphicon glyphicon-flash' alt='PROCESSING' title='PROCESSING'></span>";
				//tmpString += "<span style='float:left;'><div class='progress'><div class='progress-bar progress-bar-danger progress-bar-striped active' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 60%'><span class='sr-only'>45% Complete</span></div></div></span>";
				tmpString += "<span style='float:left; padding-top:2px;'><div class='progress'><div class='progress-bar progress-bar-danger progress-bar-striped active' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 20%'><span class='glyphicon glyphicon-refresh glyphicon-refresh-animate'></span> Processing...</div></div></span>";
			}
		},
		async:false
	});
	*/
	
	document.getElementById(BuildID).innerHTML = tmpString;
	
	INTELNAV.jQuery_1_11_1(".progress-bar").each(function(){
    each_bar_width = INTELNAV.jQuery_1_11_1(this).attr('aria-valuenow');
    INTELNAV.jQuery_1_11_1(this).width(each_bar_width + '%');
  });

}


function showActiveGeos() {
	var getAltGeo = function(thisGeo, listOfGeos) {
		var curGEO = thisGeo;
		var altGEO = "";
		var newGEO = "";
		
		for (j = 0; j < listOfGeos.length; j++) {
			
			thisSplitGEO = listOfGeos[j].split(":");
			thisGEO = thisSplitGEO[0];
			newGEO = thisSplitGEO[1];
			
			//INTELNAV.jQuery_1_11_1('#GEOS a.'+thisGEO).addClass('activated'); 				
			var testarray = document.getElementsByClassName(thisGEO);
			for(var i = 0; i < testarray.length; i++){testarray[i].className += " activated";}

			
			if (newGEO != undefined && newGEO != '') {
				INTELNAV.jQuery_1_11_1('#replaceGEOs').append('<li>'+thisGEO+' replaced by '+newGEO+'</li>');
				var testarray = document.getElementsByClassName(thisGEO);
				for(var i = 0; i < testarray.length; i++){testarray[i].className += " swapped";}
			}
			
		}
		return altGEO;
	}
	
	var listOfGeos = INTELNAV.activeCultures.split("|");
	retGEO = getAltGeo(INTELNAV.renderSettings.culture, listOfGeos);
	
}

function showFrameworkGeos() {
	var getAltGeo = function(thisGeo, listOfGeos) {
		var curGEO = thisGeo;
		var altGEO = "";
		var newGEO = "";
		
		for (j = 0; j < listOfGeos.length; j++) {
			thisSplitGEO = listOfGeos[j].split(":");
			thisGEO = thisSplitGEO[0];
			newGEO = thisSplitGEO[1];
			
			var testarray = document.getElementsByClassName(thisGEO);
			for(var i = 0; i < testarray.length; i++){testarray[i].className += " hasrecode";}
			
		}
		return altGEO;
	}
	
	var listOfGeos = INTELNAV.Cultures.unav.ActiveCulturesFramework.split("|");
	retGEO = getAltGeo(INTELNAV.renderSettings.culture, listOfGeos);
	
}


function showXML() {
	INTELNAV.jQuery_1_11_1.get('results/'+INTELNAV.forceTestObj[0]+'-'+INTELNAV.forceTestObj[1]+'/log-phantomjs.xml', function(d){
 
        INTELNAV.jQuery_1_11_1(d).find('testsuite').each(function(){
 
            var $testsuite = INTELNAV.jQuery_1_11_1(this); 
            var tt_tests = $testsuite.attr("tests");
            var tt_failures = $testsuite.attr('failures');
            var tt_errors = $testsuite.attr('errors');
			var tt_time = $testsuite.attr('time');
			var tt_timestamp = $testsuite.attr('timestamp');
 
			var tt_status = "";
			
			if (tt_failures > 0) {tt_status+=' error';}
			if (tt_errors > 0) {tt_status+=' failure';}
			if (tt_errors == 0 && tt_failures == 0) {tt_status+=' success';}
 
            var html = "<div class='results "+tt_status+"'>";
			html += '<span>Tests=' + tt_tests + '</span>';
            html += '<span>Failures=' + tt_failures + '</span>';
            html += '<span>Errors=' + tt_errors + '</span>';
            html += '<span>Time=' + tt_time + '</span>';
            html += '<span>Timestamp=' + tt_timestamp + '</span>';
			
			//if (tt_failures>0 || tt_errors>0) {
				html += '<span><a href="results/unav-4/log-phantomjs.xml" target="_blank">View PhantomJS Log</a></span>';
				html += '<span><a href="results/unav-4/done.log" target="_blank">View Batch Log</a></span>';
				html += '<span><a href="results/unav-4/failures" target="_blank">View Failed Screen Shots</a></span>';
				//html += '<span><a href="results/unav-4" target="_blank">View Test Results</a></span>';
			//}
			
			html += '</div>';
			INTELNAV.xml = html;
            INTELNAV.jQuery_1_11_1('#xmlresults').append(INTELNAV.jQuery_1_11_1(html));
			
			console.log("XML test file found");
		});
	})
	.success (function(){
	})
	.error (function(){
		console.log("ERROR: XML test file no found");
	})
	.complete (function(){
	});
}


</script>

<!-- WAP SCRIPTS -->
<!-- script type="text/javascript" src="/scripts-include/wa/wa_setup.js"></script>
<script type="text/javascript" src="/scripts-include/wa/wa_process.js"></script -->

<!-- script type="text/javascript" src="http://www.intel.com/content/dam/www/global/wap/wa_setup.js"></script>
<script type="text/javascript" src="http://www.intel.com/content/dam/www/global/wap/wa_process.js"></script -->


</body>
</html>