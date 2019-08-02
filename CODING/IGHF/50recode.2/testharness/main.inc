
<style>
#MAIN, #SUB {display:none; clear:both;}
#MAIN tr a {display:block;}
#MAIN tr.HV {background-color:#FFD900;}
#MAIN thead tr {background-color:#000000; color:#ffffff;}
#MAIN #modes tbody tr:hover {background-color:#FFEF81;}
#MAIN {height:1024px; border:1px dashed red;font-size:.75em;}
#MAIN ul li {margin-left:0px;padding-left:0px;list-style:none;}

#MAIN .asia {background-color:#EDC2CD;cursor:pointer;}
#MAIN .europe {background-color:#C7EDC2;cursor:pointer;}
#MAIN .latin {background-color:#C2DBED;cursor:pointer;}
#MAIN .middleeast {background-color:#EAEDC2;cursor:pointer;}
#MAIN .northamerica {background-color:#DDC2ED;cursor:pointer;}

#MAIN #GEOS DIV {width:60px;float:left;text-align:center;}
#MAIN #GEOS h3 {height:30px; font-size:14px;margin: 5px 0 5px 0;}
#MAIN #GEOS a {color:#aaa;cursor:pointer;display:block;margin:1px;border:1px dashed #aaa; }
#MAIN #GEOS table td {border:1px solid #ccc; background-color:#f8f8ff;}
#MAIN .current {background-color:#FFDC73}
#MAIN .activated {background-color:#C2DBED;cursor:pointer;}
#MAIN .swapped {background-color:#EDC2CD;cursor:pointer;}
#MAIN .hasrecode {color:#000!important; border:1px solid #000!important;}
#MAIN .norecode {border:1px dashed #aaa!important; }

#MAIN .notactive {cursor:pointer;}

#MAIN #KEY {float:left;}
#MAIN #KEY UL LI {margin:1px; list-style:none;padding:2px;list-style-position:inside;}
#MAIN #KEY UL {margin:1px; padding:0px; list-style:none; list-style-type: none;}
#MAIN #KEY LI {margin:1px; padding:0px; list-style:none;}

#MAIN #forcetest {width:80px;}

#MAIN #xmlresults .results {padding:15px;}
#MAIN #xmlresults span {padding:5px;}
#MAIN #xmlresults .failure {background-color:#fcf8e3;}
#MAIN #xmlresults .error {background-color:#fcf8e3;}
#MAIN #xmlresults .error.failure {background-color:#f2dede;}
#MAIN #xmlresults .success {background-color:#dff0d8;}

.speedtest {display:none;}

.hidden {display:none;}

ul.design {border:1px solid #ccc; padding:5px; margin-top:0; background-color:#f5f5dc; float:left; margin:5px;}
ul.design.ighfuat4 {clear:both;}

.status {font-weight:bold; color:#ed143d;}

.rwd .recode50 {padding-top:0px;}

.rwd .recode50 .progress {width:115px; margin-bottom:0; height:20px;}

.rwd .recode50 .progress-bar {font-size:10px;}

.progress-bar.active, .progress.active .progress-bar {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-striped, .progress-striped .progress-bar {
    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(0, 0, 0, 0) 25%,rgba(0, 0, 0, 0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(0, 0, 0, 0) 75%,rgba(0, 0, 0, 0));
    background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(0, 0, 0, 0) 25%,rgba(0, 0, 0, 0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(0, 0, 0, 0) 75%,rgba(0, 0, 0, 0));
    -webkit-background-size: 40px 40px;
    background-size: 40px 40px;
}

.glyphicon-refresh-animate {
    -animation: spin .7s infinite linear;
    -webkit-animation: spin2 .7s infinite linear;
}

@-webkit-keyframes spin2 {
    from { -webkit-transform: rotate(0deg);}
    to { -webkit-transform: rotate(360deg);}
}

@keyframes spin {
    from { transform: scale(1) rotate(0deg);}
    to { transform: scale(1) rotate(360deg);}
}

[class^="ighfuat"], [class*=" ighfuat"] {
    background-color: #F5F5BA!important
}

</style>

First to render
<div ID="speedTest"> 
	<!--a ID="SpeedTestOn" href="?speedtest=true" class="speedtest">Enable SPEED TEST</a>
	<a ID="SpeedTestOff" href="?speedtest=false">Disable SPEED TEST</a-->
</div>

<div ID="MAIN"  class="recode50" style="height:auto; overflow:hidden;padding-top:10px;">
	<div id="xmlresults"></div>


	<div id="form">
		<form ID="OverRide" name="OverRide" style="float:left;margin:10px;">
			forcetest=<input ID="forcetest" type=text name="forcetest" value="">
			isMin=<select ID="isMin" name="isMin">
				<option id="isMin_true" value="true">true</option>
				<option id="isMin_false" value="false" selected>false</option>
			</select>
			mod=<select ID="mod" name="mod">
				<option id="mod_true" value="true">true</option>
				<option id="mod_false" value="false" selected>false</option>
			</select><br>
			hc=<input ID="hc" type=text name="hc" value="" style="width:100px">
			hcpath=<input ID="hcpath" type=text name="hcpath" value="" style="width:400px"><br>
			<!--select ID="pageWidth" name="pageWidth">
				<option id="w1024" value="w1024" selected>w1024</option>
				<option id="w800" value="w800">w800</option>
			</select-->
			<!--select ID="textDirection" name="textDirection">
				<option id="ltr" value="ltr" selected>LTR</option>
				<option id="rtl" value="rtl">RTL</option>
			</select-->
			<!--select ID="protocol" name="protocol">
				<option id="http" value="http" selected>HTTP</option>
				<option id="https" value="https">HTTPS</option>
			</select-->
			

			<!--select ID="buildType" name="buildType">
				<option id="communities" value="communities">communities</option>
				<option id="embedded" value="embedded">embedded</option>
				<option id="html" value="html" selected>html</option>
				<option id="portal" value="portal">portal</option>
				<option id="searchpages" value="searchpages">searchpages</option>
				<option id="socialmedia" value="socialmedia">socialmedia</option>
				<option id="xslt" value="xslt">xslt</option>
			</select-->

			<!--select ID="OutputId" name="OutputId">
				<option id="gh_home" value="gh_home">gh_home</option>
				<option id="gh_business" value="gh_business">gh_business</option>
				<option id="gh_support" value="gh_support">gh_support</option>
				<option id="gh_products" value="gh_products">gh_products</option>
				<option id="gh_about" value="gh_about">gh_about</option>
				<option value="">----</option>
				<option id="gh_blank" value="gh_blank">gh_blank</option>
				<option id="gh_blanksub" value="gh_blanksub">gh_blanksub</option>
				<option id="gh_gateway" value="gh_gateway">gh_gateway</option>
				<option id="gh_logo-only" value="gh_logo-only">gh_logo-only</option>
				<option value="">----</option>
				<option id="gh_embedded" value="gh_embedded">gh_embedded</option>
				<option id="gh_channel" value="gh_channel">gh_channel</option>
				<option value="">----</option>
				<option id="gh_default" value="gh_default">* gh_default</option>
			</select-->

			<!--select ID="ftrOutputId" name="ftrOutputId">
				<option id="gf_default" value="gf_default" select>gf_default</option>
				<option id="gf_legal" value="gf_legal">gf_legal</option>
				<option id="gf_social" value="gf_social">gf_social</option>
			</select-->
			<input type="submit" name="action">
		</form>

		<span style="float:left;margin:10px;">
			<!--span ID="cq_IsGeoActive"></span>
			assetPath: <span ID="cq_data"></span><br / -->
			GEO: <span ID="cq_geo"></span><br />
			Header: <span ID="cq_header"></span><br />
			Footer: <span ID="cq_footer"></span><!--br />
			headerType:<span ID="headerType"></span><br /-->
		</span>

	</div>

	<div style="clear:both"></div>

	

	<div  id="GEOS" style="float:left; width:310px; margin:10px; ">
		<table border=0 cellspacing=0>
		<tr>
			<td>
			<div id="replaceGEO" style="display:none; color:#cc0000; font-width:bold; font-size:2em; width:100%; float:none;">

					<span id="origGEO">origGEO</span> replaced by <span id="newGEO">newGEO</span>

			</div>
		
		
		
		<div>
<h3>ASIA</h3>
<a onclick="formatpath('en_AU')" class="en_AU">en_AU</a>
<a onclick="formatpath('en_IN')" class="en_IN">en_IN</a>
<a onclick="formatpath('en_XA')" class="en_XA">en_XA</a>
<a onclick="formatpath('id_ID')" class="id_ID">id_ID</a>
<a onclick="formatpath('ja_JP')" class="ja_JP">ja_JP</a>
<a onclick="formatpath('ko_KR')" class="ko_KR">ko_KR</a>
<a onclick="formatpath('th_TH')" class="th_TH">th_TH</a>
<a onclick="formatpath('vi_VN')" class="vi_VN">vi_VN</a>
<a onclick="formatpath('zh_CN')" class="zh_CN">zh_CN</a>
<a onclick="formatpath('zh_TW')" class="zh_TW">zh_TW</a>
</div>

<div>
<h3>EUROPE</h3>
<a onclick="formatpath('de_DE')" class="de_DE">de_DE</a>
<a onclick="formatpath('en_IE')" class="en_IE">en_IE</a>
<a onclick="formatpath('en_UK')" class="en_UK">en_UK</a>
<a onclick="formatpath('es_ES')" class="es_ES">es_ES</a>
<a onclick="formatpath('fr_FR')" class="fr_FR">fr_FR</a>
<a onclick="formatpath('it_IT')" class="it_IT">it_IT</a>
<a onclick="formatpath('pl_PL')" class="pl_PL">pl_PL</a>
<a onclick="formatpath('ru_RU')" class="ru_RU">ru_RU</a>
<a onclick="formatpath('tr_TR')" class="tr_TR">tr_TR</a>
</div>

<div>
<h3>LATIN AMERICA</h3>
<a onclick="formatpath('es_XL')" class="es_XL">es_XL</a>
<a onclick="formatpath('pt_BR')" class="pt_BR">pt_BR</a>
</div>

<div>
<h3>MIDDLE EAST</h3>
<a onclick="formatpath('ar_XR')" class="ar_XR">ar_XR</a>
<a onclick="formatpath('en_XR')" class="en_XR">en_XR</a>
<a onclick="formatpath('he_IL')" class="he_IL">he_IL</a>
</div>

<div>	
<h3>NORTH AMERICA</h3>	
<a onclick="formatpath('en_CA')" class="en_CA">en_CA</a>
<a onclick="formatpath('en_US')" class="en_US">en_US</a>
<a onclick="formatpath('fr_CA')" class="fr_CA">fr_CA</a>
</div>	
		
		
		
			</td>
		</tr>
		<tr>
			<td>
				<div><a href="blank.html">Blank</a></div>
				<div><a href="hacked.html">False GEO</a></div>
			</td>
		</tr>
		</table>
		
	<!--/div>


	<div id="KEY" style="float:left; margin:10px;"-->
		<h3>KEY</h3>
		<ul>
			<li style="color:#aaa;"><span class="norecode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Not Supported in Framework - yet</li>
			<li><span class="hasrecode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Supported in Framework</li>
			<li style="color:#aaa;">Not Supported in Menu</li>
			<li class="active">Supported in Menu</li>
			<li class="swapped">Swapped in Menu</li>
			<li></li>
			<li><span class="norecode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span class="norecode active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span class="norecode swapped">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Need to add this GEO to the Framework</li>
		</ul>
		<ul id="replaceGEOs" style="color:#cc0000;">
		</ul>
	</div>

	<div style="float:none; width:auto; overflow:hidden;" id="DesignModes" class="recode50">

		<!--table border=1 id="modes">
		<thead><tr><th>MODE SWITCH</th><th>Query String</th></tr></thead>
		<tbody>
		<tr id="none"><td><a href="?forcetest=#">Default Behavior</a><td>na</td></tr>

		<tr><td colspan=2>&nbsp;</td></tr>
		<tr id="unav-0-dev"><td><a href="?forcetest=unav-0-dev">Legacy LOCALHOST</a></td><td>?forcetest=unav-0-dev</td></tr>
		<tr id="unav-0-qa"><td><a href="?forcetest=unav-0-qa">Legacy QA PROTO-CPS</a></td><td>?forcetest=unav-0-qa</td></tr>
		<tr id="unav-0-prev"><td><a href="?forcetest=unav4prev">Legacy on PREVIEW/STAGING</a></td><td>?forcetest=unav-0-prev</td></tr>
		<tr id="unav-0-prod"><td><a href="?forcetest=unav-0-prod">Legacy PRODUCTION</a></td><td>?forcetest=unav-0-prod</td></tr>

		<tr><td colspan=2>&nbsp;</td></tr>
		<tr id="unav-2-dev"><td><a href="?forcetest=unav2dev">uNav 2.0 on LOCALHOST</a></td><td>?forcetest=unav-2-dev</td></tr>
		<tr id="unav-2-qa"><td><a href="?forcetest=unav2qa">uNav 2.0 on PROTO-CPS</a></td><td>?forcetest=unav-2-qa</td></tr>
		<tr id="unav-2-prev"><td><a href="?forcetest=unav4prev">uNav 2.0 on PREVIEW/STAGING</a></td><td>?forcetest=unav-2-prev</td></tr>
		<tr id="unav-2-prod"><td><a href="?forcetest=unav2prod">uNav 2.0 on PRODCUTION</a></td><td>?forcetest=unav-2-prod</td></tr>

		<tr><td colspan=2>&nbsp;</td></tr>
		<tr id="unav-3-dev"><td><a href="?forcetest=unav3dev">uNav 3.0 on LOCALHOST</a></td><td>?forcetest=unav-3-dev</td></tr>
		<tr id="unav-3-qa"><td><a href="?forcetest=unav3qa">uNav 3.0 on PROTO-CPS</a></td><td>?forcetest=unav-3-qa</td></tr>
		<tr id="unav-3-prev"><td><a href="?forcetest=unav3prev">uNav 3.0 on PREVIEW/STAGING</a></td><td>?forcetest=unav-3-prev</td></tr>
		<tr id="unav-3-prod"><td><a href="?forcetest=unav3prod">uNav 3.0 on PRODCUTION</a></td><td>?forcetest=unav-3-prod</td></tr>

		<tr><td colspan=2>&nbsp;</td></tr>
		<tr id="unav-4-dev"><td><a href="?forcetest=unav4dev">uNav 4.0 on LOCALHOST</a></td><td>?forcetest=unav-4-dev</td></tr>
		<tr id="unav-4-qa"><td><a href="?forcetest=unav4qa">uNav 4.0 on PROTO-CPS</a></td><td>?forcetest=unav-4-qa</td></tr>
		<tr id="unav-4-prev"><td><a href="?forcetest=unav4prev">uNav 4.0 on PREVIEW/STAGING</a></td><td>?forcetest=unav-4-prev</td></tr>
		<tr id="unav-4-prod"><td><a href="?forcetest=unav4prod">uNav 4.0 on PRODCUTION</a></td><td>?forcetest=unav-4-prod</td></tr>

		</tbody>
		</table-->

	</div>
	
	
</div>


<div id="SUB">
	<ul>
		<li><a href="#first">First Anchor</a>
		<li><a href="#second">Second Anchor</a>
		<li><a href="#third">Third Anchor</a>
	</ul>

	<a name="first" class="anchor">&nbsp;</a>
	<div style="height:600px;">First text here</div>
	<a name="second" class="anchor">&nbsp;</a>
	<div style="height:600px;">Second text here</div>
	<a name="third" class="anchor">&nbsp;</a>
	<div style="height:600px;">Third text here</div>

</div>