
<style>
/*#recode50header {margin-top:-31px; border:1px dashed green;}
#recode50footer {margin-bottom:55px; border:1px dashed green;}*/
.HV {color:#0860A8; font-weight:bold; font-size:150%;}
#MAIN {height:1024px; border:1px dashed red;font-size:.75em;}
#MAIN ul {margin-left:5px;}
#MAIN ul li {margin-left:5px;padding-left:5px;list-style:disc;}
.asia {background-color:#EDC2CD;cursor:pointer;}
.europe {background-color:#C7EDC2;cursor:pointer;}
.latin {background-color:#C2DBED;cursor:pointer;}
.middleeast {background-color:#EAEDC2;cursor:pointer;}
.northamerica {background-color:#DDC2ED;cursor:pointer;}
.notactive {cursor:pointer;}
a {color:#000;}
</style>

<div ID="MAIN" >




<div style="float:left;">

<table border=1>
<tr><th>MODE SWITCH</th><th>Query String</th><th>Result</th></tr>
<tr><td><a href="?forcetest=#" id="none">Default Behavior</a><td>na</td><td>Will render Legacy or Unav based on active GEOs in Re-Imagine</td></tr>
<tr><td><a href="?forcetest=legacy" id="legacy">Legacy DEV</a></td><td>?forcetest=legacy</td><td>To force the PROTO/40recode-data header thru the glass container</td></tr>
<tr><td><a href="?forcetest=legacyprod" id="legacyprod">Legacy PRODUCTION</a></td><td>?forcetest=legacyprod</td><td>To force the WWW/40recode-data header thru the glass container</td></tr>
<tr><td><a href="?forcetest=unavprod" id="unavprod">uNav on PRODUCTION</a></td><td>?forcetest=unavprod</td><td>To force the PRODUCTION uNav header thru the glass container</td></tr>
<tr><td colspan=3>&nbsp;</td></tr>
<tr><td><a href="?forcetest=unavdev" id="unavdev">uNav on DEV</a></td><td>?forcetest=unavdev</td><td>To force the DEV uNav header thru the glass container</td></tr>
<tr><td><a href="?forcetest=unavtest" id="unavtest">uNav on TEST</a></td><td>?forcetest=unavtest</td><td>To force the TEST uNav header thru the glass container</td></tr>
<tr><td><a href="?forcetest=unavhotfix" id="unavprod">uNav on HOTFIX</a></td><td>?forcetest=unavhotfix</td><td>To force the HOTFIX uNav header thru the glass container</td></tr>
<tr><td><a href="?forcetest=unavdayone" id="unavprod">uNav on DAYONE</a></td><td>?forcetest=unavdayone</td><td>To force the DAYONE uNav header thru the glass container</td></tr>
<tr><td><a href="?forcetest=unavpreview" id="unavpreview">uNav on PREVIEW</a></td><td>?forcetest=unavpreview</td><td>To force the PREVIEW uNav header thru the glass container</td></tr>

<tr><td><a href="?forcetest=gatest3" id="unavprod">uNav on GA-TESTSERVER</a></td><td>?forcetest=gatest3</td><td>To force the GA-TESTSERVER uNav header thru the glass container</td></tr>
</table>


<form ID="OverRide" name="OverRide">
	<input ID="forcetest" type=hidden name="forcetest" value="legacy">
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
</div>

</div>

<div  style="float:left;">
<table border=1>
<tr>
	<td>
<!--#include virtual="/ighf/testharness/50recode.2/geos.inc"-->	
	</td>
</tr>
</table>	
</div>


<div style="float:left;">
<ul style="color:#cc0000;">
	<li>en_IR is replaced by en_IE for uNav.</li>
	<li>en_AP is replaced by en_XA for uNav.</li>
	<li>en_SA is replaced by en_XR for uNav.</li>
</ul>
</div>


</div>
