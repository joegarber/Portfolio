/* Framework='50recode.2', Design='ighfuat4', Date='1/2/2019 3:15:12 PM', Version='0.1' */
var GAAT40 = GAAT40 || {};
GAAT40.DataBuildDate = '1/2/2019 3:15:12 PM'
GAAT40.HTMLContentHeader = {
'content':' <script> var isLoggedin = (location.protocol==\'https:\' && document.cookie.indexOf(\'SMSESSION\')!=-1); var loginValidateURL=\'https://www.intel.com/libs/apps/intel/myintel/profile.html/validate/loggedin\'; </script> <div class="header-simplify component" style=\'display:none;\'  data-component="header" data-component-id="1"> <header role="banner"> <span visibility="hidden"></span> <div class="site-mask" data-igm-site-mask=""></div> <nav class="global-menu-simplify navbar-fixed-top " role="navigation" aria-label="Site" data-igm=""> <div class="container main-navbar"> <div class="row"> <div class="nav-left col-xs-5 mobileFirst"> <div class="content"> <button class="hamburger icon hidden-md hidden-lg hidden-xl" data-toggle="mega-menu" data-target="#menu-products"><span class="fa-menu"></span> </button> <ul class="hidden-xs hidden-sm"> <li> <button data-toggle="mega-menu" data-target="#menu-0">Menu1</button> </li> <li> <button data-toggle="mega-menu" data-target="#menu-1">Menu2</button> </li> <li> <button data-toggle="mega-menu" data-target="#menu-2">Menu3</button> </li> </ul> </div> </div> <div class="nav-center col-xs-2"> <div class="content"> <a href="/#" alt="Intel homepage" class="navbar-logo" title="IGHF UAT"></a> </div> </div> <div class="nav-right col-xs-5"> <div class="content"> <button type="button" class="language-selector-toggle mobileFirst" aria-label=\'USA (English)\' data-igm-search-toggle=""> <span class="hidden-xs" aria-hidden="true"> USA (English) </span> <span class="icon fa-globe align-icons"></span> </button> <span class="states-login"> <span class="state-logged-in state-option"> <span class="option-links" id="myprofile-signin-menu"></span> </span> </span> <button class="login login-toggle item icon mobileFirst" aria-label=\'Sign In\' data-igm-search-toggle=""> <span class="login-label" aria-hidden="true"> Sign In </span><span class="icon-login align-icons fa-"></span></button> <span role="search"> <button type="button" title="Search" class="search-button icon mobileFirst" data-igm-search-toggle=""><span class="fa-search" id="newsearch"></span></button> </span> </div> </div> </div> </div> <div class="uheadersearch homepagesearch"> <div id="simplify-search" class="search-content brand-darkest-gray theme-dark-1 component mobileFirst" data-component="homepagesearch" data-igm-search-content="" data-component-id="1"> <div class="wrapper-sticky-footer"> <div class="slide-search-results"> <form class="search item" data-igm-search-control="" name="hpsform-new" id="hpsform-new" action="https://www.intel.com/content/data/globalelements/US/search.html" onsubmit="return INTEL_TYPE_AHEAD.onSubmitHps(\'Search\', \'/content/data/globalelements/US\', \'US_\')"> <button type="submit" class="search-button icon" aria-label="Search" data-tabindex="2"><span class="fa-search"></span></button> <label for="mobile-search"> <input id="toplevelcategory" name="toplevelcategory" type="hidden" value="none"> <input id="query" name="query" type="hidden" value=""> <input data-tabindex="1" data-search-input id="mobile-search" name="keyword" type="text" data-igm-search-input title="Search" autocomplete="off" placeholder="Search Intel.com"> </label> <button id="header-btn-clear" type="clear" class="search-clear" data-igm-search-clear=""> <span></span></button> <button type="button" id="cls-btn" class="close icon" aria-label="Close" data-igm-search-toggle="" data-tabindex="3"><span></span></button> </form> <div class="results-overlay results-recent results component" data-component="wa_skip_track" data-component-id="1"> <div class="overlay-content recent-searches-terms"> <h3>Recent Searches</h3> </div> </div> </div> <div class="slide-language-selector"> <div class="modal-intel language-selector modal-expose-menu" id="modal-language-selector"> </div> <script type="text/javascript"> var languageslectorexists = false; </script> <script type="text/javascript"> languageslectorexists = true; </script> <!-- MODAL for Language selector --> <script id="gls-template" type="text/x-handlebars-template"> <div class="language-selector-block"> <div class="modal-content flyout-panel-block force-background" role="dialog" aria-labelledby="regionselector" aria-describedby="selectregion"> <div class="modal-header flyout-panel-block-header"> <h2 class="modal-title" id="Region-Modal"> <span class="icon fa-globe align-icons"></span> Select Your Region <div id="close_button" class="modal-footer flyout-panel-block-header"> <button type="button" class="close icon" aria-label="Close" data-igm-search-toggle=""> <span></span> </button> </div> </h2> </div> <div class="modal-body lang-selector-body"> <div class="flyout-control-panel"> <ul class="list-unstyled flyout-control-listing" id="language-accordion"> {{#if alsoAvail}} <div class="col-xs-12 lang-selector"> <h4 class="accordion-toggle fa- expanded" data-toggle="collapse" data-parent="#language-accordion" data-target="#header-translations"> {{localeTitle}}</h4> </div> {{#each sections}} <div id="header-translations" class="accordion-panel in"> {{#each locale}} {{regionNames languageList @index countryName}} {{/each}} </div> {{/each}} {{/if}} <div class="col-xs-12 lang-selector"> <h4 class="accordion-toggle fa- {{#if alsoAvail}}collapsed{{else}}expanded{{/if}}" data-toggle="collapse" data-parent="#language-accordion" data-target="#home-redirects"> {{homepageTitle}}</h4> </div> {{#each sections}} <div id="home-redirects" class="accordion-panel {{#if ../alsoAvail}}collapse{{else}}in{{/if}}"> {{#each locale}} <li> <a href="#homepage-{{@index}}" data-toggle="flyout" class="flyout-control">{{{countryName}}}<span class="icon-caret fa-angle-right"></span></a> </li> {{/each}} </div> {{/each}} </ul> {{#each sections}} {{#each locale}} {{storeIndex @index}} <div class="flyout-panel flyout-panel-position-right flyout-panel-closed force-background" id="geo-{{getIndex}}"> <div class="flyout-panel-inner"> <div class="flyout-panel-header"> <a href="#" class="close-flyout back-link pull-left"><span class="icon-back fa-angle-left"></span> back</a> </div> <div class="flyout-panel-body"> <div class="igm-text-listing"> <div class="pad-btm-10"> <ul class="list-unstyled"> {{#each languageList}} {{#if localelink}} <li class="lang-option"><a data-locale="{{{language}}}_{{{locale}}}" href={{{localelink}}}>{{{label}}}</a> </li> {{/if}} {{/each}} </ul> </div> </div> </div> </div> </div> {{/each}} {{/each}} {{#each sections}} {{#each locale}} {{#if languageList}} <div class="flyout-panel flyout-panel-position-right flyout-panel-closed force-background" id="homepage-{{@index}}"> <div class="flyout-panel-inner"> <div class="flyout-panel-header"> <a href="#" class="close-flyout back-link pull-left"><span class="icon-back fa-angle-left"></span>back</a> </div> <div class="flyout-panel-body"> <div class="igm-text-listing"> <div class="pad-btm-10"> <ul class="list-unstyled"> {{#each languageList}} {{#if_ne language \'\' locale \'\' }} <li class="lang-option"><a data-locale="{{{language}}}_{{{locale}}}" href={{{homepagelink}}}>{{{label}}}</a> </li> {{/if_ne}} {{/each}} </ul> </div> </div> </div> </div> </div> {{/if}} {{/each}} {{/each}} </div> </div> </div> </div> </script> <script type="text/javascript"> var langSelectData = {"alsoAvail":false,"mobileHomepageTitle":"Find your Country\'s/Region\'s Homepage","mobileSelectTitle":"Select a Country/Region","mobileAvailableTitle":"Page Available In","sections":[{"locale":[{"countryName":"Asia Pacific","languageList":[{"homepagelink":"https://www.intel.sg/content/www/xa/en/homepage.html","localelink":"","label":"Asia Pacific (English)","locale":"xa","language":"en"},{"homepagelink":"https://www.intel.com.au/content/www/au/en/homepage.html","localelink":"","label":"Australia (English)","locale":"au","language":"en"},{"homepagelink":"http://www.intel.cn/content/www/cn/zh/homepage.html","localelink":"","label":"China (简体中文)","locale":"cn","language":"zh"},{"homepagelink":"https://www.intel.in/content/www/in/en/homepage.html","localelink":"","label":"India (English)","locale":"in","language":"en"},{"homepagelink":"https://www.intel.co.id/content/www/id/id/homepage.html","localelink":"","label":"Indonesia (Bahasa Indonesia)","locale":"id","language":"id"},{"homepagelink":"https://www.intel.co.jp/content/www/jp/ja/homepage.html","localelink":"","label":"Japan (日本語)","locale":"jp","language":"ja"},{"homepagelink":"https://www.intel.co.kr/content/www/kr/ko/homepage.html","localelink":"","label":"Korea (한국어)","locale":"kr","language":"ko"},{"homepagelink":"https://www.intel.sg/content/www/xa/en/homepage.html","localelink":"","label":"Philippines (English)","locale":"xa","language":"en"},{"homepagelink":"https://www.intel.com.tw/content/www/tw/zh/homepage.html","localelink":"","label":"Taiwan (繁體中文)","locale":"tw","language":"zh"},{"homepagelink":"https://www.thailand.intel.com/content/www/th/th/homepage.html","localelink":"","label":"Thailand (ไทย)","locale":"th","language":"th"},{"homepagelink":"https://www.intel.vn/content/www/vn/vi/homepage.html","localelink":"","label":"Vietnam (Tiếng Việt)","locale":"vn","language":"vi"}]},{"countryName":"Europe","languageList":[{"homepagelink":"https://www.intel.fr/content/www/fr/fr/homepage.html","localelink":"","label":"France (Français)","locale":"fr","language":"fr"},{"homepagelink":"https://www.intel.de/content/www/de/de/homepage.html","localelink":"","label":"Germany (Deutsch)","locale":"de","language":"de"},{"homepagelink":"https://www.intel.ie/content/www/ie/en/homepage.html","localelink":"","label":"Ireland (English)","locale":"ie","language":"en"},{"homepagelink":"https://www.intel.it/content/www/it/it/homepage.html","localelink":"","label":"Italy (Italiano)","locale":"it","language":"it"},{"homepagelink":"https://www.intel.pl/content/www/pl/pl/homepage.html","localelink":"","label":"Poland (Polski)","locale":"pl","language":"pl"},{"homepagelink":"https://www.intel.ru/content/www/ru/ru/homepage.html","localelink":"","label":"Russia (Русский)","locale":"ru","language":"ru"},{"homepagelink":"https://www.intel.es/content/www/es/es/homepage.html","localelink":"","label":"Spain (Español)","locale":"es","language":"es"},{"homepagelink":"https://www.intel.com.tr/content/www/tr/tr/homepage.html","localelink":"","label":"Turkey (Türkçe)","locale":"tr","language":"tr"},{"homepagelink":"https://www.intel.co.uk/content/www/uk/en/homepage.html","localelink":"","label":"United Kingdom (English)","locale":"uk","language":"en"}]},{"countryName":"Latin America","languageList":[{"homepagelink":"https://www.intel.la/content/www/xl/es/homepage.html","localelink":"","label":"Argentina (Español)","locale":"xl","language":"es"},{"homepagelink":"https://www.intel.com.br/content/www/br/pt/homepage.html","localelink":"","label":"Brazil (Português)","locale":"br","language":"pt"},{"homepagelink":"https://www.intel.la/content/www/xl/es/homepage.html","localelink":"","label":"Chile (Español)","locale":"xl","language":"es"},{"homepagelink":"https://www.intel.la/content/www/xl/es/homepage.html","localelink":"","label":"Colombia (Español)","locale":"xl","language":"es"},{"homepagelink":"https://www.intel.la/content/www/xl/es/homepage.html","localelink":"","label":"Latin America (Español)","locale":"xl","language":"es"},{"homepagelink":"https://www.intel.la/content/www/xl/es/homepage.html","localelink":"","label":"Mexico (Español)","locale":"xl","language":"es"},{"homepagelink":"https://www.intel.la/content/www/xl/es/homepage.html","localelink":"","label":"Peru (Español)","locale":"xl","language":"es"}]},{"countryName":"Middle East/Africa","languageList":[{"homepagelink":"https://www.intel.co.za/content/www/za/en/homepage.html","localelink":"","label":"Africa","locale":"za","language":"en"},{"homepagelink":"https://www.intel.com/content/www/xr/ar/homepage.html","localelink":"","label":"Egypt (اللغة العربية)","locale":"xr","language":"ar"},{"homepagelink":"https://www.intel.me/content/www/xr/en/homepage.html","localelink":"","label":"Egypt (English)","locale":"xr","language":"en"},{"homepagelink":"https://www.intel.co.il/content/www/il/he/homepage.html","localelink":"","label":"Israel (עברית)","locale":"il","language":"he"},{"homepagelink":"https://www.intel.me/content/www/xr/ar/homepage.html","localelink":"","label":"Middle East (اللغة العربية)","locale":"xr","language":"ar"},{"homepagelink":"https://www.intel.me/content/www/xr/en/homepage.html","localelink":"","label":"Middle East (English)","locale":"xr","language":"en"},{"homepagelink":"https://www.intel.co.za/content/www/za/en/homepage.html","localelink":"","label":"Nigeria (English)","locale":"za","language":"en"},{"homepagelink":"https://www.intel.co.za/content/www/za/en/homepage.html","localelink":"","label":"South Africa (English)","locale":"za","language":"en"}]},{"countryName":"North America","languageList":[{"homepagelink":"https://www.intel.com/content/www/us/en/homepage.html","localelink":"","label":"United States (English)","locale":"us","language":"en"},{"homepagelink":"https://www.intel.ca/content/www/ca/en/homepage.html","localelink":"","label":"Canada (English)","locale":"ca","language":"en"},{"homepagelink":"https://www.intel.ca/content/www/ca/fr/homepage.html","localelink":"","label":"Canada (Français)","locale":"ca","language":"fr"}]}]}],"homepageTitle":"Go to your Country\'s/Region\'s Homepage","localeTitle":"This page is also available in"}; </script> </div> <div class="slide-signin"> <div class="modal-intel modal-signin" id="modal-signin-form" aria-labelledby="Signin"> <div class="slide-signin-block" data-component="signincomponent" data-component-id="1"> <div class="modal-header"> <button type="button" class="close icon theme-white" data-igm-search-toggle="" aria-label="Close"> <span></span></button> <h2 class="modal-title" id="Signin"><span class="icon-login align-icons fa-"></span>Sign In</h2> </div> <div class="modal-body"> <div class="alert alert-danger" id="login-error" role="alert"></div> <form id="igm-form-signin" href="https://www.intel.com/libs/apps/intel/login.json/securitytoken" method="POST" name="igm-form-signin" class="igm-form-signin intel-form" novalidate> <div class="form-group"> <label for="username"> <input class="form-control form-input" aria-describedby="uname-error" name="userid" id="username" placeholder="Username" required> </label> <div class="error validation-messages" id="uname-error"> <div class="rule broken">Your username is missing</div> </div> </div> <div class="form-group"> <label for="password"> <input type="password" class="form-control form-input" aria-describedby="pwd-error" id="password" name="password" placeholder="Password" required autocomplete="off"> </label> <div class="error validation-messages" id="pwd-error"> <div class="rule broken">Your password is missing</div> </div> </div> <p>By signing in, you agree to our <a href="https://www.intel.com/content/www/us/en/legal/terms-of-use.html">Terms of Service</a>.</p> <div class="row"> <div class="col-xs-12"> <input type="hidden" name="callBack" id="callBackSimplify"/> <input type="hidden" name="queryParam" id="queryParam"/> <input type="submit" class="btn btn-primary" value=\'Sign In\' data-wap="{&quot;linktype&quot;:&quot;sign-in&quot;}"> <label for="cbRememberMe" class="remember-user"><input id="cbRememberMe" name="rememberme" type="checkbox" value="true"> <span>Remember me</span></label> </div> </div><input type=\'hidden\' name=\'ighf\' value=\'ighf\'></form> <p> Forgot your Intel <a href="https://www.intel.com/content/www/us/en/my-intel/forgot-userid.html">username</a> or <a href="https://www.intel.com/content/www/us/en/my-intel/forgot-password.html">password</a>? </p> <p class="mobile-intel-signin">Do you work for Intel? <a href="#" onclick="intel.signinsimplify.geturl(\'https://sifederation.intel.com/federation/bridge/sso_irp.asp?target=\')">Sign in here</a>.</p> </div> </div> </div> <!--iframe id="frameSigninSimplify" tabindex="-1" title="My Intel Sign in" aria-hidden="true" name="frameSigninSimplify" src="https://www.intel.com/etc/designs/intel/global/html/idamFormStaticSimplify.html" style="display:none;"></iframe--> <script> var intel = intel || {}; intel.signinsimplifyConfig = { locale: \'\', messages: { InvalidCredential: \'The username or password you entered was invalid.\', InvalidField: \'The username or password you entered was invalid.\', AccountDisabled: \'For security reasons, your account has been disabled. For help, <a href=\"#\" class=\"contactLink\" >contact us<\/a>.\', AccountLocked: \'Your account has been locked. For help, please read the <a href=\"#\" class=\"faqsLink\" >Sign In FAQ<\/a>.\', UserNotFound: \'The username or password you entered was invalid.\', Unknown: \'An unexpected error occurred. Try it again. For help, use the contact or support options below.\', PasswordExpired: \'Your password is expired. Please change your password.\', LoginAssistLink: \'https://signin.intel.com/ContactUs.aspx\', faqsLink: \'/content/www/us/en/my-intel/sign-in-help.html\' }, nameField: \'Username\', passField: \'Password\', signinUrl: \'/libs/apps/intel/login.json/securitytoken\', isPopup: true, responseHref: \'https://www.intel.com/content/data/globalelements/US/en/chf/ighfuat/preview.html\' + window.location.hash, sslDomainUrl: \'www.intel.com\', loginUrl: \'https://welcome.intel.com/login.aspx?appid=258&qlogin=true\', ssoUri: \'https://federatesso.intel.com\', logoutUrl: \'https://welcome.intel.com/logout.aspx\', logoutHref: \'https://signin.intel.com/Logout?RedirectURL=http://www.intel.com/content/www/us/en/homepage.html\' + \'.html\', loginErrorID: \'#login-error\', usernameID: \'#username\', remembermeId: \'#cbRememberMe\', formID: \'#igm-form-signin\', unameErrorID: \'#uname-error\', passID: \'#password\', passError: \'#pwd-error\', changePasswordUrl: \'/content/www/us/en/my-intel/change-password.html\', emailVerificationUrl: \'/content/www/us/en/my-intel/email-verification.expired.html\', aboutToExpireEmailUrl: \'/content/www/us/en/my-intel/email-verification.html\', renewalUrl: \'/content/www/us/en/secure/technology-provider/forms/renew-technology-provider-membership.html\', limitedUrl: \'/content/www/us/en/resellers/limited-status-secondary.html\', isaPRMDashBoardURL: \'/content/www/us/en/secure/partner/solutions-alliance/overview.html\', itpPRMDashBoardURL: \'/content/www/us/en/secure/partner/technology-provider/iot/overview.html\', itpisaPRMDashBoardURL: \'/content/www/us/en/secure/partner/iot-itp-isa/overview.html\', isaRenewalURL: \'/content/www/us/en/secure/partner/forms/solutions-alliance-renewal.html\' }; </script> </div> <div class="slide-myintel component" data-component="myintel-navmenu" data-component-id="1"></div> </div> <div class="search-info"> <a id="dropDownSearchSignIn" target="_self" tabindex="0" href="#" class="login-toggle pale-blue" data-target="#modal-signin-form">Sign In</a> to access restricted content. </div> <div class="signout-info"> <button type="button" class="btn btn-primary" data-sso-uri=\'https://federatesso.intel.com\' data-logout-uri="" data-wap="{&quot;linktype&quot;:&quot;logout&quot;}" onclick="intel.signinsimplify.signOut()">Sign Out </button> </div> </div> <script type="text/javascript"> var global_config = { "icsUrl": "https://supporttickets.intel.com/services/oauth2/authorize?response_type=token&client_id=3MVG9QDx8IX8nP5Rh0X3B7gohGtUh8sjFQ8Tw_U8sS9_PoVrupDFwZ_nwLcze2n64lGBbGchyUb7_9W8n8pAV&redirect_uri=https%3A%2F%2Fcqcontent.intel.com%2Fcontent%2Fwww%2Fus%2Fen%2Fsecure%2Fmy-intel%2Ftoken.html", "ipsUrl": "https://premiersupport.intel.com/IPS/services/oauth2/authorize?response_type=token&client_id=3MVG9xOCXq4ID1uEa5F2lCYAp6mmKvTMlKbMIrsMKShY2oOqs1ETvPRjwmhoPivHd9_U53EzmiyYxn3nVpA9J&redirect_uri=https%3A%2F%2Fcqcontent.intel.com%2Fcontent%2Fwww%2Fus%2Fen%2Fsecure%2Fmy-intel%2Ftoken.html" }; var globalSearch = globalSearch || {}; globalSearch = { sharePointSearchPromote:true, searchProvider: \'searchpromote\', baseSearchQuery: \'localecode:"US_" NOT generic1:"false" \', langRootPath: \'/content/data/globalelements/US\', headingTxt: \'Best Match\', locale: \'US_\', typeAheadUrl: \'http://search.intel.com/SearchLookup/DataProvider.ashx\', bestMatchUrl: \'http://search.intel.com/webhandlers/searchwebhandler.ashx\', searchRealm: \'Default\', bestMatchQ1: \'NAR\', bestMatchQ2: \'us\', bestMatchQ11: \'sptitle,description,url,thumbnailurl,reimaginerootlevel\', progId: \'\', useEMTTags: true, gtvLabels: { suggested: "Suggested", products: "Products", support: "Support", download: "Downloads/Drivers", searchesRelatedTo: "Related Searches", search: "Search Intel.com", inLabel: "in", searchSupport: "Search Support", intelcom: "Search Intel.com" }, mobileResults: "5", laptopResults: "10", EDCProgramIdentifier: "false", rdcContentDataSource: "" }; </script> </div> </nav> <!-- end global intel header --> <div class="mega-menu-content"></div> </header> </div> <script type="text/javascript"> var globalHeader = globalHeader || {}; globalHeader = { currentPath: "/content/data/globalelements/US/en/chf/ighfuat/preview", lanloc: "/us/en", lanLoc: "US/en", loclan:"en_US",helpformurl: "", intelHeaderFooterVersion: "ighfuat", megaMenuPath: "/content/data/globalelements/US/en/chf/ighfuat/menu", globalBannerPath: "/content/data/globalelements/US/en/sitewide-banner-placeholder", subMenuPath: "", isCHF:true, secureRedirectURL: "", headerSlider: "Yes" } </script> <section data-scroll-track="false"> <div class="container"> <div class="row"> <div class="col-xs-12 pull-right" id="alertMsg"> <div id="alertSupport"> <div class="browser_detect" id="browserdetectid" style="display:none;"> <p>The browser version you are using is not recommended for this site.<br/>Please consider upgrading to the latest version of your browser by clicking one of the following links.</p> <div class="browser_types"> <ul> <li><a href="https://support.apple.com/downloads/safari">Safari</a></li> <li><a href="https://support.google.com/chrome/answer/95346?hl=en">Chrome</a></li> <li><a href="https://www.microsoft.com/en-us/download/internet-explorer.aspx">IE</a></li> <li><a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a></li> </ul> </div> </div> </div> </div> </div> </div> </section> '
};
/* Framework='50recode.2', Design='ighfuat4', Date='1/2/2019 3:15:12 PM', Version='0.1' */
var GAAT40 = GAAT40 || {};
GAAT40.HTMLContentFooter = {
'content':' <footer style=\'display:none;\' class="global blade solid brand-lightest-gray theme-light-2 component" data-component-id="1" data-component="footer" role="contentinfo" data-wap_type="wa_skip_track" id="skip-footer"> <div class="component-padding clearfix"> <div class="container"> <div class="row"> <div class="col-xs-12"> <div class="logo-container hidden-xs hidden-sm"> <a href="#" class="footer-logo" aria-label="Intel homepage" title="Intel homepage"></a> </div> <div class="content clearfix"> <ul class="footer-links"> <li> <a href="https://www.intel.com/content/www/us/en/company-overview/company-overview.html">Company Information</a> </li> <li> <a href="https://www.intel.com/content/www/us/en/corporate-responsibility/corporate-responsibility.html">Our Commitment</a> </li> <li> <a href="https://www.intel.com/content/www/us/en/blogs-communities-social.html">Communities</a> </li> <li> <a href="https://www.intc.com/">Investor Relations</a> </li> <li> <a href="https://www.intel.com/content/www/us/en/company-overview/contact-us.html">Contact Us</a> </li> <li> <a href="https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html">Newsroom</a> </li> </ul> <ul class="footer-links social"> <li> <a href="https://www.facebook.com/Intel" target="" aria-label="Intel on Facebook" data-wap="{&quot;linktype&quot;:&quot;footersocial&quot;}"> <i aria-hidden="true" class="fa-facebook"></i> </a> </li> <li> <a href="https://twitter.com/intel" target="" aria-label="Intel on Twitter" data-wap="{&quot;linktype&quot;:&quot;footersocial&quot;}"> <i aria-hidden="true" class="fa-twitter"></i> </a> </li> <li> <a href="https://www.linkedin.com/company/intel-corporation" target="" aria-label="Intel on LinkedIn" data-wap="{&quot;linktype&quot;:&quot;footersocial&quot;}"> <i aria-hidden="true" class="fa-linkedin"></i> </a> </li> <li> <a href="https://www.youtube.com/user/channelintel?sub_confirmation=1" target="" aria-label="Intel on YouTube" data-wap="{&quot;linktype&quot;:&quot;footersocial&quot;}"> <i aria-hidden="true" class="fa-youtube"></i> </a> </li> <li> <a href="http://www.instagram.com/intel" target="" aria-label="Intel on Instagram" data-wap="{&quot;linktype&quot;:&quot;footersocial&quot;}"> <i aria-hidden="true" class="fa-instagram"></i> </a> </li> </ul> <ul class="footer-links secondary-links" id="footerSecondaryLinks"> <li> <a href="/#"><small>© Intel Corporation</small></a> </li> <li> <a href="https://www.intel.com/content/www/us/en/legal/terms-of-use.html"><small>Terms of Use</small></a> </li> <li> <a href="https://www.intel.com/content/www/us/en/legal/terms-of-use.html"><small>*Trademarks</small></a> </li> <li> <a href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html"><small>Privacy</small></a> </li> <li> <a href="https://www.intel.com/content/www/us/en/privacy/intel-cookie-notice.html"><small>Cookies</small></a> </li> <li> <a href="https://www.intel.com/content/www/us/en/policy/policy-human-trafficking-and-slavery.html"><small>Supply Chain Transparency</small></a> </li> <li> <a href="https://www.intel.com/content/www/us/en/siteindex.html"><small>Site Map</small></a> </li> </ul> </div> <div class="modal modal-intel language-selector modal-expose-menu fade" id="modal-language-selector" tabindex="-1" role="dialog" aria-hidden="false"> </div> <a href="#" class="footer-logo-mobile visible-xs visible-sm" aria-label="Intel homepage" title="Intel homepage"></a> </div> </div> </div> </div> </footer> '
};
/* Framework='50recode.2', Design='ighfuat4', Date='1/2/2019 3:15:12 PM', Version='0.1' */
var GAAT40 = GAAT40 || {};
GAAT40.HTMLContentMenu = {
'content':' <div class="modal modal-global-menu modal-expose-menu modal-full-height fade left" id="modal-intel-menu" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content flyout-panel-block force-background solid brand-darkest-gray theme-dark-1"> <div class="modal-header flyout-panel-block-header force-background solid brand-very-dark-gray"> <button type="button" class="icon close pull-right" data-dismiss="modal" aria-label="Close"> <span></span> </button> <ul class="nav nav-tabs component" data-component="simplify-megamenu" data-component-id="1" role="tablist"> <li role="presentation" class="active"> <a href="#menu-0" role="tab" data-toggle="tab">Menu1</a> </li> <li role="presentation" class=" "> <a href="#menu-1" role="tab" data-toggle="tab">Menu2</a> </li> <li role="presentation" class=" "> <a href="#menu-2" role="tab" data-toggle="tab">Menu3</a> </li> </ul> </div> <div class="modal-body"> <div class="tab-content"> <div role="tabpanel" class="tab-pane flyout-control-panel menu-panel fade in active" id="menu-0"> <ul class="list-unstyled flyout-control-listing"> <li><a href="#cat-0-0" data-toggle="flyout" class="flyout-control">Sub1<span class="icon-caret fa-angle-right"></span></a></li> <li><a href="#cat-0-1" data-toggle="flyout" class="flyout-control">Sub2<span class="icon-caret fa-angle-right"></span></a></li> <li>Sub Group</li> <li><a href="/#" target="_top" class="component" data-component="simplify-megamenu" data-component-id="1" data-wap="{&quot;category&quot;:&quot;menu&quot;,&quot;linktype&quot;:&quot;main&quot;}" data-wap_type="wa_skip_track">Sub Link</a></li> </ul> <div class="flyout-panel flyout-panel-position-right flyout-panel-closed force-background solid brand-darkest-gray theme-dark-1" id="cat-0-0"> <div class="flyout-panel-inner"> <div class="flyout-panel-header"> <a href="#" class="close-flyout back-link pull-left"><span class="icon-back fa-angle-left"></span>Back</a> <h4 class="text-center close-flyout">Sub1</h4> </div> <div class="flyout-panel-body"> <div class="igm-text-listing" data-secure-link=\'none\'> <div class="pad-btm-10"> <h5 class="subtitle"> <a href="/#" target="_top" class="component" data-component="simplify-megamenu" data-component-id="1" data-wap="{&quot;submenu&quot;:&quot;sub&quot;,&quot;category&quot;:&quot;menu&quot;,&quot;linktype&quot;:&quot;main&quot;}" data-wap_type="wa_skip_track">Sub1</a> </h5> <ul class="list-unstyled"> <li data-secure-link=\'none\'> <a href="/X" target="_top" class="component" data-component="simplify-megamenu" data-component-id="1" data-wap="{&quot;submenu&quot;:&quot;sub&quot;,&quot;category&quot;:&quot;menu&quot;,&quot;linktype&quot;:&quot;main&quot;}" data-wap_type="wa_skip_track">Sub1</a> </li> </ul> </div> </div> </div> </div> </div> <div class="flyout-panel flyout-panel-position-right flyout-panel-closed force-background solid brand-darkest-gray theme-dark-1" id="cat-0-1"> <div class="flyout-panel-inner"> <div class="flyout-panel-header"> <a href="#" class="close-flyout back-link pull-left"><span class="icon-back fa-angle-left"></span>Back</a> <h4 class="text-center close-flyout">Sub2</h4> </div> <div class="flyout-panel-body"> <div class="igm-text-listing" data-secure-link=\'none\'> <div class="pad-btm-10"> <h5 class="subtitle" data-secure-link=\'none\'>Sub1</h5> </div> </div> <div class="igm-image-text" data-secure-link=\'none\'> <div class="pad-btm-10"> <figure> <span data-picture data-alt="" data-ignore=""> <span data-src="https://www.intel.com/content/dam/www/global/badges/badge-7th-gen-core-i5-vpro-blue.png.rendition.intel.web.64.64.png"></span> <!--[if lte IE 9]> <span data-src="https://www.intel.com/content/dam/www/global/badges/badge-7th-gen-core-i5-vpro-blue.png.rendition.intel.web.84.84.png"></span> <![endif]--> <span data-src="https://www.intel.com/content/dam/www/global/badges/badge-7th-gen-core-i5-vpro-blue.png.rendition.intel.web.84.84.png" data-media="(min-width: 480px)"></span> </span> </figure> <div class="text-listing"> <h5 class="subtitle">Core i5</h5> </div> </div> </div> </div> </div> </div> </div> <div role="tabpanel" class="tab-pane flyout-control-panel menu-panel fade in " id="menu-1"> <ul class="list-unstyled flyout-control-listing"> <li><a href="/#" target="_top" class="component" data-component="simplify-megamenu" data-component-id="1" data-wap="{&quot;category&quot;:&quot;menu&quot;,&quot;linktype&quot;:&quot;main&quot;}" data-wap_type="wa_skip_track">Sub1</a></li> </ul> </div> <div role="tabpanel" class="tab-pane flyout-control-panel menu-panel fade in " id="menu-2"> <ul class="list-unstyled flyout-control-listing"> <li><a href="/#" target="_top" class="component" data-component="simplify-megamenu" data-component-id="1" data-wap="{&quot;category&quot;:&quot;menu&quot;,&quot;linktype&quot;:&quot;main&quot;}" data-wap_type="wa_skip_track">Sub1</a></li> </ul> </div> </div> </div> </div> </div> </div> <script id="myinteldrpdown-template" type="text/x-handlebars-template"> <section class="myintel-tools-content" role="region" aria-label="My Intel"> <div class="panel-header force-background solid brand-very-dark-gray my-intel-menu"> <button type="button" class="icon close pull-right" data-igm-search-toggle="" aria-label="Close" tabindex="0" data-wap="" data-wap_ref="myintel-navmenu-closing"> <span></span> </button> <ul class="nav nav-tabs component"> <li role="presentation" class="active" data-step=\'1\' data-title=\'My Intel Dashboard and My Tools\' data-intro=\'<p>Click here to access the My Intel Dashboard from any Intel.com page. From here you can also access your Subscriptions page, as well as your personalized list of tools.</p>\'> <a href="#my-intel" role="tab" tabindex="0">My Intel<span class="fa fa-user"></span></a> </li> </ul> </div> <div class="my-intel-panel-body tab-content"> <div role="tabpanel" class="tab-pane fade in active" id="my-intel"> <ul class="myintel-links"> {{#each myintelpagelinks}} <li data-agsrole="{{{agsrole}}}" data-blacklistedagsrole="{{{blacklistedagsgroupname}}}" data-isinternal="{{{displayOnlyInternal}}}" data-isexternal="{{{displayOnlyExternal}}}" class="{{{class}}}"> <a target="{{{target}}}" href="{{{href}}}" tabindex="0">{{{label}}}</a> </li> {{/each}} </ul> <div class="tools-pane"> <h5 class="my-intel-tools">My Tools</h5> <ul class="myintel-links"> {{#each mytoollinks}} <li class="myintellink" data-isinternal="{{{displayOnlyInternal}}}" data-isexternal="{{{displayOnlyExternal}}}"> <h3 style="display:none;">{{{agsgroupname}}}</h3> <h4 style="display:none;">{{{blacklistedagsgroupname}}}</h4> <a tabindex="0" href="{{{linkurl}}}" target="_blank" title="">{{{linktext}}}</a> {{#if tooltip}} <a class="fa fa-help-circled" id="tooltip-top" data-toggle="tooltip" data-html="true" data-title="{{tooltip}}" data-placement="bottom" data-wap_ref="tooltip:{{{linktext}}}"></a> {{/if}} </li> {{/each}} </ul> </div> </div> </div> </section> </script> <script id="myintelheader-template" type="text/x-handlebars-template"> <button type="button" title="My Intel" class="myintel-toggle my-intel" data-igm-search-toggle="" tabindex="0" data-wap="" data-wap_ref="myintel-navmenu-opening"> <span class="myintel-btns">My Intel</span> <span class="icon-login align-icons fa-"></span> </button> </script> '
};
