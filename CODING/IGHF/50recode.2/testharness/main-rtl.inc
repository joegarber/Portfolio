
<style>
/*#recode50header {margin-top:-31px; border:1px dashed green;}
#recode50footer {margin-bottom:55px; border:1px dashed green;}*/
#MAIN tr a {display:block;}
#MAIN tr.HV {/*color:#0860A8; font-weight:bold; font-size:150%;*/ background-color:#FFD900;}
#MAIN thead tr {background-color:#000000; color:#ffffff;}
#MAIN #modes tbody tr:hover {background-color:#FFEF81;}
#MAIN {height:1024px; border:1px dashed red;font-size:.75em;}
#MAIN ul {margin-left:5px;}
#MAIN ul li {margin-left:5px;padding-left:5px;list-style:disc;}

/*a {color:#000;cursor:pointer;}*/


#MAIN .asia {background-color:#EDC2CD;cursor:pointer;}
#MAIN .europe {background-color:#C7EDC2;cursor:pointer;}
#MAIN .latin {background-color:#C2DBED;cursor:pointer;}
#MAIN .middleeast {background-color:#EAEDC2;cursor:pointer;}
#MAIN .northamerica {background-color:#DDC2ED;cursor:pointer;}

#MAIN #GEOS DIV {width:70px;float:left;text-align:center;}
#MAIN #GEOS h3 {height:30px;}
#MAIN #GEOS a {color:#aaa;cursor:pointer;display:block;margin:1px;border:1px dashed #aaa; }
/*#MAIN #GEOS a:active {outline-offset: 2px;outline-style: solid;outline-color: #ffd900;outline-width: 3px;}*/
#MAIN .current {background-color:#FFDC73}
#MAIN .active {background-color:#C2DBED;cursor:pointer;}
#MAIN .swapped {background-color:#EDC2CD;cursor:pointer;}
#MAIN .hasrecode {color:#000!important; border:1px solid #000!important;}
#MAIN .norecode {border:1px dashed #aaa!important; }


#MAIN .notactive {cursor:pointer;}

#MAIN #KEY {float:left;}
#MAIN #KEY UL LI {margin:1px; list-style:none;padding:2px;list-style-position:inside;}
#MAIN #KEY UL {margin:1px; padding:0px; list-style:none; list-style-type: none;}
#MAIN #KEY LI {margin:1px; padding:0px; list-style:none;}

/*#MAIN #isMin {width:50px;}
#MAIN #RWD {width:50px;}*/
#MAIN #forcetest {width:80px;}

</style>

<div ID="MAIN" >




<div style="float:left;">

<table border=1 id="modes">
<thead><tr><th>MODE SWITCH</th><th>Query String</th><th>Result</th></tr></thead>
<tbody>
<tr id="none"><td><a href="?forcetest=#">Default Behavior</a><td>na</td><td>Will render Newest Design based on active GEOs in Intel.com</td></tr>
<tr id="legacy"><td><a href="?forcetest=legacy">Legacy DEV</a></td><td>?forcetest=legacy</td><td>To force the PROTO/40recode-data header thru the glass container</td></tr>
<tr id="legacyprod"><td><a href="?forcetest=legacyprod">Legacy PRODUCTION</a></td><td>?forcetest=legacyprod</td><td>To force the WWW/40recode-data header thru the glass container</td></tr>

<tr><td colspan=3>&nbsp;</td></tr>
<tr id="unav2dev"><td><a href="?forcetest=unav2dev">uNav 2.0 on LOCALHOST</a></td><td>?forcetest=unav2dev</td><td>To force the uNav MENU 2.0 header thru the glass container</td></tr>
<tr id="unav2qa"><td><a href="?forcetest=unav2qa">uNav 2.0 on PROTO-CPS</a></td><td>?forcetest=unav2qa</td><td>To force the uNav MENU 2.0 header thru the glass container</td></tr>
<tr id="unav2prod"><td><a href="?forcetest=unav2prod">uNav 2.0 on PRODCUTION</a></td><td>?forcetest=unav2prod</td><td>To force the uNav MENU 2.0 header thru the glass container</td></tr>

<tr><td colspan=3>&nbsp;</td></tr>
<tr id="unav3dev"><td><a href="?forcetest=unav3dev">uNav 3.0 on LOCALHOST</a></td><td>?forcetest=unav3dev</td><td>To force the uNav MENU 3.0 header thru the glass container</td></tr>
<tr id="unav3qa"><td><a href="?forcetest=unav3qa">uNav 3.0 on PROTO-CPS</a></td><td>?forcetest=unav3qa</td><td>To force the uNav MENU 3.0 header thru the glass container</td></tr>
<tr id="unav3prev"><td><a href="?forcetest=unav3prev">uNav 3.0 on PREVIEW/STAGING</a></td><td>?forcetest=unav3prev</td><td>To force the uNav MENU 3.0 header thru the glass container</td></tr>
<tr id="unav3prod"><td><a href="?forcetest=unav3prod">uNav 3.0 on PRODCUTION</a></td><td>?forcetest=unav3prod</td><td>To force the uNav MENU 3.0 header thru the glass container</td></tr>

<tr><td colspan=3>&nbsp;</td></tr>
<tr id="unav4dev"><td><a href="?forcetest=unav4dev">uNav 4.0 on LOCALHOST</a></td><td>?forcetest=unav4dev</td><td>To force the uNav MENU 4.0 header thru the glass container</td></tr>
<tr id="unav4qa"><td><a href="?forcetest=unav4qa">uNav 4.0 on PROTO-CPS</a></td><td>?forcetest=unav4qa</td><td>To force the uNav MENU 4.0 header thru the glass container</td></tr>
<tr id="unav4prev"><td><a href="?forcetest=unav4prev">uNav 4.0 on PREVIEW/STAGING</a></td><td>?forcetest=unav4prev</td><td>To force the uNav MENU 4.0 header thru the glass container</td></tr>
<tr id="unav4prod"><td><a href="?forcetest=unav4prod">uNav 4.0 on PRODCUTION</a></td><td>?forcetest=unav4prod</td><td>To force the uNav MENU 4.0 header thru the glass container</td></tr>

</tbody>
</table>


<form ID="OverRide" name="OverRide">
	forcetest=<input ID="forcetest" type=text name="forcetest" value="">
	isMin=<select ID="isMin" name="isMin">
		<option id="isMin_true" value="true">true</option>
		<option id="isMin_false" value="false" selected>false</option>
	</select>
	RWD=<select ID="RWD" name="RWD">
		<option id="RWD_true" value="true">true</option>
		<option id="RWD_false" value="false" selected>false</option>
	</select><br>
	hc=<input ID="hc" type=text name="hc" value="" style="width:550px"><br>
	<select ID="pageWidth" name="pageWidth">
		<option id="w1024" value="w1024" selected>w1024</option>
		<option id="w800" value="w800">w800</option>
	</select>
	<select ID="textDirection" name="textDirection">
		<option id="ltr" value="ltr" selected>LTR</option>
		<option id="rtl" value="rtl">RTL</option>
	</select>
	<select ID="protocol" name="protocol">
		<option id="http" value="http" selected>HTTP</option>
		<option id="https" value="https">HTTPS</option>
	</select>
	

	<select ID="buildType" name="buildType">
		<option id="communities" value="communities">communities</option>
		<option id="embedded" value="embedded">embedded</option>
		<option id="html" value="html" selected>html</option>
		<option id="portal" value="portal">portal</option>
		<option id="searchpages" value="searchpages">searchpages</option>
		<option id="socialmedia" value="socialmedia">socialmedia</option>
		<option id="xslt" value="xslt">xslt</option>
	</select>

	<select ID="OutputId" name="OutputId">
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
	</select>

	<select ID="ftrOutputId" name="ftrOutputId">
		<option id="gf_default" value="gf_default" select>gf_default</option>
		<option id="gf_legal" value="gf_legal">gf_legal</option>
		<option id="gf_social" value="gf_social">gf_social</option>
	</select>
	<input type="submit" name="action">
</form>
<div>
<span ID="cq_IsGeoActive"></span>
assetPath: <span ID="cq_data"></span><br />
GEO: <span ID="cq_geo"></span><br />
Header: <span ID="cq_header"></span><br />
Footer: <span ID="cq_footer"></span><br />
headerType:<span ID="headerType"></span><br />
</div>

<div>
<p>GEOs still actively being used by 40RECODE:<br>
ar_AE, cs_CZ, de_DE, en_UK, en_US, es_ES, es_MX, fr_FR, he_IL, hu_HU, it_IT, ja_JP, ko_KR, pl_PL, pt_BR, ru_RU,<br>
th_TH, tr_TR, uk_UA, zh_CN, zh_TW</p>

<p>GEOs still actively being used by 50RECODE/Legacy:<br>
ar_AE, ar_SA, cs_CZ, de_DE, en_AP, en_SA, en_UK, en_US, en_XA, es_ES, es_LA, es_MX, es_XL, fr_FR, he_IL, hu_HU,<br>
id_ID, it_IT, ja_JP,ko_KR, nl_NL, pl_PL, pr_BR, ro_RO, ru_RU, th_TH, tr_TR, uk_UA, vi_VN, zh_CN, zh_TW</p>
</div>

</div>

<div  id="GEOS" style="float:left;">
	<table border=1>

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
<a onclick="formatpath('fr_CH')" class="fr_CH">fr_CH</a>
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
	</table>	
</div>




<div id="KEY" style="float:left;">
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


</div>







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