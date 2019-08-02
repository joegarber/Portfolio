/*!
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);
if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

        Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
        enableClasses = true,
    /*>>cssclasses*/

        docElement = document.documentElement,

        /**
         * Create our "modernizr" element that we do most feature tests on.
         */
        mod = 'modernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,

        /**
         * Create the input element for various Web Forms feature tests.
         */
        inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
        smile = ':)',
    /*>>smile*/

        toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
        omPrefixes = 'Webkit Moz O ms',

        cssomPrefixes = omPrefixes.split(' '),

        domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
        ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

        tests = {},
        inputs = {},
        attrs = {},

        classes = [],

        slice = classes.slice,

        featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
        injectElementWithStyles = function( rule, callback, nodes, testnames ) {

            var style, ret, node, docOverflow,
                div = document.createElement('div'),
            // After page load injecting a fake body doesn't work so check if body exists
                body = document.body,
            // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
                fakeBody = body || document.createElement('body');

            if ( parseInt(nodes, 10) ) {
                // In order not to give false positives we create a node for each test
                // This also allows the method to scale for unspecified uses
                while ( nodes-- ) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
            // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
            // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
            // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
            // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
            style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
            // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if ( !body ) {
                //avoid crashing IE8, if background image is used
                fakeBody.style.background = '';
                //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);
            // If this is done after page load we don't want to remove the body so check if body exists
            if ( !body ) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;

        },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
        testMediaQuery = function( mq ) {

            var matchMedia = window.matchMedia || window.msMatchMedia;
            if ( matchMedia ) {
                return matchMedia(mq) && matchMedia(mq).matches || false;
            }

            var bool;

            injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
                bool = (window.getComputedStyle ?
                    getComputedStyle(node, null) :
                    node.currentStyle)['position'] == 'absolute';
            });

            return bool;

        },
    /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
        isEventSupported = (function() {

            var TAGNAMES = {
                'select': 'input', 'change': 'input',
                'submit': 'form', 'reset': 'form',
                'error': 'img', 'load': 'img', 'abort': 'img'
            };

            function isEventSupported( eventName, element ) {

                element = element || document.createElement(TAGNAMES[eventName] || 'div');
                eventName = 'on' + eventName;

                // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
                var isSupported = eventName in element;

                if ( !isSupported ) {
                    // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
                    if ( !element.setAttribute ) {
                        element = document.createElement('div');
                    }
                    if ( element.setAttribute && element.removeAttribute ) {
                        element.setAttribute(eventName, '');
                        isSupported = is(element[eventName], 'function');

                        // If property was created, "remove it" (by setting value to `undefined`)
                        if ( !is(element[eventName], 'undefined') ) {
                            element[eventName] = undefined;
                        }
                        element.removeAttribute(eventName);
                    }
                }

                element = null;
                return isSupported;
            }
            return isEventSupported;
        })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
        _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
        hasOwnProp = function (object, property) {
            return _hasOwnProperty.call(object, property);
        };
    }
    else {
        hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function(){};
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                    // default to autobind unless override
                    return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);

            // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

        // The *new* flexbox
        // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
        return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            bool = true;
        } else {
            injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
                bool = node.offsetTop === 9;
            });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
        return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
        return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
        return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
        return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
        return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
            // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
            (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                // standard syntax             // trailing 'background-image:'
            prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

            // Webkit allows this media query to succeed only if the feature is enabled.
            // `@media (transform-3d),(-webkit-transform-3d){ ... }`
            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
            var style = document.getElementById('smodernizr'),
                sheet = style.sheet || style.styleSheet,
                cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

            bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
            bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                // safari false positive's on datalist: webk.it/74252
                // see also github.com/Modernizr/Modernizr/issues/146
                attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                        docElement.appendChild(inputElem);
                        defaultView = document.defaultView;

                        // Safari 2-4 allows the smiley as a value, despite making a slider
                        bool =  defaultView.getComputedStyle &&
                        defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                            // Mobile android web browser has false positive, so must
                            // check the height to see if the widget is actually there.
                        (inputElem.offsetHeight !== 0);

                        docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                        // Spec doesn't define any special parsing or detectable UI
                        //   behaviors so we pass these through as true

                        // Interestingly, opera fails the earlier test, so it doesn't
                        //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                        // Real url and email support comes with prebaked validation.
                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                        // If the upgraded input compontent rejects the :) text, we got a winner
                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
    Modernizr.addTest = function ( feature, test ) {
        if ( typeof feature == 'object' ) {
            for ( var key in feature ) {
                if ( hasOwnProp( feature, key ) ) {
                    Modernizr.addTest( key, feature[ key ] );
                }
            }
        } else {

            feature = feature.toLowerCase();

            if ( Modernizr[feature] !== undefined ) {
                // we're going to quit if you're trying to overwrite an existing test
                // if we were to allow it, we'd do this:
                //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
                //   docElement.className = docElement.className.replace( re, '' );
                // but, no rly, stuff 'em.
                return Modernizr;
            }

            test = typeof test == 'function' ? test() : test;

            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            Modernizr[feature] = test;

        }

        return Modernizr; // allow chaining.
    };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
            try {
                var a = document.createElement('a');
                a.innerHTML = '<xyz></xyz>';
                //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
                supportsHtml5Styles = ('hidden' in a);

                supportsUnknownElements = a.childNodes.length == 1 || (function() {
                    // assign a false positive if unable to shiv
                    (document.createElement)('a');
                    var frag = document.createDocumentFragment();
                    return (
                    typeof frag.cloneNode == 'undefined' ||
                    typeof frag.createDocumentFragment == 'undefined' ||
                    typeof frag.createElement == 'undefined'
                    );
                }());
            } catch(e) {
                // assign a false positive if detection fails => unable to shiv
                supportsHtml5Styles = true;
                supportsUnknownElements = true;
            }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
            var p = ownerDocument.createElement('p'),
                parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

            p.innerHTML = 'x<style>' + cssText + '</style>';
            return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
            var elements = html5.elements;
            return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data;
            }
            return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if(supportsUnknownElements){
                return ownerDocument.createElement(nodeName);
            }
            if (!data) {
                data = getExpandoData(ownerDocument);
            }
            var node;

            if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode();
            } else if (saveClones.test(nodeName)) {
                node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
            } else {
                node = data.createElem(nodeName);
            }

            // Avoid adding some elements to fragments in IE < 9 because
            // * Attributes like `name` or `type` cannot be set/changed once an element
            //   is inserted into a document/fragment
            // * Link elements with `src` attributes that are inaccessible, as with
            //   a 403 response, will cause the tab/window to crash
            // * Script elements appended to fragments will execute when their `src`
            //   or `text` property is set
            return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if(supportsUnknownElements){
                return ownerDocument.createDocumentFragment();
            }
            data = data || getExpandoData(ownerDocument);
            var clone = data.frag.cloneNode(),
                i = 0,
                elems = getElements(),
                l = elems.length;
            for(;i<l;i++){
                clone.createElement(elems[i]);
            }
            return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
            if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag();
            }


            ownerDocument.createElement = function(nodeName) {
                //abort shiv
                if (!html5.shivMethods) {
                    return data.createElem(nodeName);
                }
                return createElement(nodeName, ownerDocument, data);
            };

            ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                'var n=f.cloneNode(),c=n.createElement;' +
                'h.shivMethods&&(' +
                    // unroll the `createElement` calls
                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
                    data.createElem(nodeName);
                    data.frag.createElement(nodeName);
                    return 'c("' + nodeName + '")';
                }) +
                ');return n}'
            )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            var data = getExpandoData(ownerDocument);

            if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument,
                    // corrects block display not defined in IE6/7/8/9
                    'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                        // adds styling not present in IE6/7/8/9
                    'mark{background:#FF0;color:#000}' +
                        // hides non-rendered elements
                    'template{display:none}'
                );
            }
            if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data);
            }
            return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

            /**
             * An array or space separated string of node names of the elements to shiv.
             * @memberOf html5
             * @type Array|String
             */
            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

            /**
             * current version of html5shiv
             */
            'version': version,

            /**
             * A flag to indicate that the HTML5 style sheet should be inserted.
             * @memberOf html5
             * @type Boolean
             */
            'shivCSS': (options.shivCSS !== false),

            /**
             * Is equal to true if a browser supports creating unknown/HTML5 elements
             * @memberOf html5
             * @type boolean
             */
            'supportsUnknownElements': supportsUnknownElements,

            /**
             * A flag to indicate that the document's `createElement` and `createDocumentFragment`
             * methods should be overwritten.
             * @memberOf html5
             * @type Boolean
             */
            'shivMethods': (options.shivMethods !== false),

            /**
             * A string to describe the type of `html5` object ("default" or "default print").
             * @memberOf html5
             * @type String
             */
            'type': 'default',

            // shivs the document according to the specified `html5` object options
            'shivDocument': shivDocument,

            //creates a shived element
            createElement: createElement,

            //creates a shived documentFragment
            createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
        if(!obj) {
            return testPropsAll(prop, 'pfx');
        } else {
            // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
            return testPropsAll(prop, obj, elem);
        }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

        // Add the new classes to the <html> element.
    (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);

/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
    var registeredInModuleLoader = false;
   if (typeof define === 'function' && define.amd && typeof Cookies !== 'undefined') {
        define(factory);
        registeredInModuleLoader = true;
    }
   if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
        registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = OldCookies;
            return api;
        };
    }
}(function () {
    function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init(converter) {
        function api(key, value, attributes) {
            var result;
            if (typeof document === 'undefined') {
                return;
            }

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                // We're using "expires" because "max-age" is not supported by IE
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {
                }

                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                } else {
                    value = converter.write(value, key);
                }

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                var stringifiedAttributes = '';

                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }
                    stringifiedAttributes += '=' + attributes[attributeName];
                }
                return (document.cookie = key + '=' + value + stringifiedAttributes);
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                    cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {
                        }
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {
                }
            }

            return result;
        }

        api.set = api;
        api.get = function (key) {
            return api.call(api, key);
        };
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init(function () {
    });
}));


/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is .noSwipe
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers.
 *    				- Add 'hold' gesture
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 * $Date: 2015-1-10 (Wed, 1 October 2015) $
 * $version 1.6.10    - Added PR from beatspace to fix tap events
 * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
 *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
 * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
 *
 * $Date: 2015-12-18 (Fri, 18 December 2015) $
 * $version 1.6.13    - Added PRs
 *                    - Fixed #267 allowPageScroll not working correctly
 * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
 * $version 1.6.15    - More bug fixes
 *
 * $Date: 2016-04-29 (Fri, 29 April 2016) $
 * $version 1.6.16    - Swipes with 0 distance now allow default events to trigger.  So tapping any form elements or A tags will allow default interaction, but swiping will trigger a swipe.
 Removed the a, input, select etc from the excluded Children list as the 0 distance tap solves that issue.
 * $Date: 2016-05-19  (Fri, 29 April 2016) $
 * $version 1.6.17     - Fixed context issue when calling instance methods via INTELNAV.jQuery_1_11_1("selector").swipe("method");
 * $version 1.6.18     - now honors fallbackToMouseEvents=false for MS Pointer events when a Mouse is used.

 */

/**
 * See (http://jquery.com/).
 * @name $
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */


(function(factory) {
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS Module
		factory(require("jquery"));
	} else {
		// Browser globals.
		factory(INTELNAV.jQuery_1_11_1);
	}
}(function () {
	"use strict";

	//Constants
	var VERSION = "1.6.18",
		LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		IN = "in",
		OUT = "out",

		NONE = "none",
		AUTO = "auto",

		SWIPE = "swipe",
		PINCH = "pinch",
		TAP = "tap",
		DOUBLE_TAP = "doubletap",
		LONG_TAP = "longtap",
		HOLD = "hold",

		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",

		ALL_FINGERS = "all",

		DOUBLE_TAP_THRESHOLD = 10,

		PHASE_START = "start",
		PHASE_MOVE = "move",
		PHASE_END = "end",
		PHASE_CANCEL = "cancel",

		SUPPORTS_TOUCH = 'ontouchstart' in window,

		SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,

		SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,

		PLUGIN_NS = 'TouchSwipe';



	/**
	 * The default configuration, and available options to configure touch swipe with.
	 * You can set the default values by updating any of the properties prior to instantiation.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe.defaults
	 * @namespace
	 * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
	 * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe.
	 * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
	 * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch.
	 * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
	 * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release.
	 * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
	 * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
	 * @property {function} [swipe=null] A handler to catch all swipes. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:swipe}
	 * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:swipeLeft}
	 * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:swipeRight}
	 * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:swipeUp}
	 * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:swipeDown}
	 * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:swipeStatus}
	 * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:pinchIn}
	 * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:pinchOut}
	 * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link INTELNAV.jQuery_1_11_1.fn.swipe#event:pinchStatus}
	 * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not.
	 * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.defaults#doubleTapThreshold}
	 * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.defaults#longTapThreshold}
	 * @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.defaults#longTapThreshold}
	 * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
	 * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
	 * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.pageScroll}.  <br/><br/>
	 <code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
	 <code>"none"</code> : the page will not scroll when user swipes. <br/>
	 <code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
	 <code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
	 * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices.
	 * @property {string} [excludedElements=".noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes elements with the class .noSwipe .
	 * @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers.

	 */
	var defaults = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null, //Deprecated since 1.6.2
		tap: null,
		doubleTap: null,
		longTap: null,
		hold: null,
		triggerOnTouchEnd: true,
		triggerOnTouchLeave: false,
		allowPageScroll: "auto",
		fallbackToMouseEvents: true,
		excludedElements: ".noSwipe",
		preventDefaultEvents: true
	};



	/**
	 * Applies TouchSwipe behaviour to one or more jQuery objects.
	 * The TouchSwipe plugin can be instantiated via this method, or methods within
	 * TouchSwipe can be executed via this method as per jQuery plugin architecture.
	 * An existing plugin can have its options changed simply by re calling .swipe(options)
	 * @see TouchSwipe
	 * @class
	 * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
	 * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
	 * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the
	 * configuration properties defined in the object. See TouchSwipe
	 *
	 */
	INTELNAV.jQuery_1_11_1.fn.swipe = function(method) {
		var $this = INTELNAV.jQuery_1_11_1(this),
			plugin = $this.data(PLUGIN_NS);

		//Check if we are already instantiated and trying to execute a method
		if (plugin && typeof method === 'string') {
			if (plugin[method]) {
				return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
			} else {
				INTELNAV.jQuery_1_11_1.error('Method ' + method + ' does not exist on jQuery.swipe');
			}
		}

		//Else update existing plugin with new options hash
		else if (plugin && typeof method === 'object') {
			plugin['option'].apply(plugin, arguments);
		}

		//Else not instantiated and trying to pass init object (or nothing)
		else if (!plugin && (typeof method === 'object' || !method)) {
			return init.apply(this, arguments);
		}

		return $this;
	};

	/**
	 * The version of the plugin
	 * @readonly
	 */
	INTELNAV.jQuery_1_11_1.fn.swipe.version = VERSION;



	//Expose our defaults so a user could override the plugin defaults
	INTELNAV.jQuery_1_11_1.fn.swipe.defaults = defaults;

	/**
	 * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers.
	 * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	 * @namespace
	 * @readonly
	 * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
	 * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
	 * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
	 * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
	 */
	INTELNAV.jQuery_1_11_1.fn.swipe.phases = {
		PHASE_START: PHASE_START,
		PHASE_MOVE: PHASE_MOVE,
		PHASE_END: PHASE_END,
		PHASE_CANCEL: PHASE_CANCEL
	};

	/**
	 * The direction constants that are passed to the event handlers.
	 * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	 * @namespace
	 * @readonly
	 * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
	 * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
	 * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
	 * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
	 * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
	 * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
	 */
	INTELNAV.jQuery_1_11_1.fn.swipe.directions = {
		LEFT: LEFT,
		RIGHT: RIGHT,
		UP: UP,
		DOWN: DOWN,
		IN: IN,
		OUT: OUT
	};

	/**
	 * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
	 * These properties are read only
	 * @namespace
	 * @readonly
	 * @see INTELNAV.jQuery_1_11_1.fn.swipe.defaults#allowPageScroll
	 * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
	 * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
	 * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
	 * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
	 */
	INTELNAV.jQuery_1_11_1.fn.swipe.pageScroll = {
		NONE: NONE,
		HORIZONTAL: HORIZONTAL,
		VERTICAL: VERTICAL,
		AUTO: AUTO
	};

	/**
	 * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the
	 * options object, as well as the value of the <code>fingers</code> event property.
	 * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	 * @namespace
	 * @readonly
	 * @see INTELNAV.jQuery_1_11_1.fn.swipe.defaults#fingers
	 * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
	 * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
	 * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
	 * @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
	 * @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
	 * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
	 */
	INTELNAV.jQuery_1_11_1.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		FOUR: 4,
		FIVE: 5,
		ALL: ALL_FINGERS
	};

	/**
	 * Initialise the plugin for each DOM element matched
	 * This creates a new instance of the main TouchSwipe class for each DOM element, and then
	 * saves a reference to that instance in the elements data property.
	 * @internal
	 */
	function init(options) {
		//Prep and extend the options
		if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
			options.allowPageScroll = NONE;
		}

		//Check for deprecated options
		//Ensure that any old click handlers are assigned to the new tap, unless we have a tap
		if (options.click !== undefined && options.tap === undefined) {
			options.tap = options.click;
		}

		if (!options) {
			options = {};
		}

		//pass empty object so we dont modify the defaults
		options = INTELNAV.jQuery_1_11_1.extend({}, INTELNAV.jQuery_1_11_1.fn.swipe.defaults, options);

		//For each element instantiate the plugin
		return this.each(function() {
			var $this = INTELNAV.jQuery_1_11_1(this);

			//Check we havent already initialised the plugin
			var plugin = $this.data(PLUGIN_NS);

			if (!plugin) {
				plugin = new TouchSwipe(this, options);
				$this.data(PLUGIN_NS, plugin);
			}
		});
	}

	/**
	 * Main TouchSwipe Plugin Class.
	 * Do not use this to construct your TouchSwipe object, use the jQuery plugin method INTELNAV.jQuery_1_11_1.fn.swipe(); {@link INTELNAV.jQuery_1_11_1.fn.swipe}
	 * @private
	 * @name TouchSwipe
	 * @param {DOMNode} element The HTML DOM object to apply to plugin to
	 * @param {Object} options The options to configure the plugin with.  @link {INTELNAV.jQuery_1_11_1.fn.swipe.defaults}
	 * @see INTELNAV.jQuery_1_11_1.fh.swipe.defaults
	 * @see INTELNAV.jQuery_1_11_1.fh.swipe
	 * @class
	 */
	function TouchSwipe(element, options) {

		//take a local/instacne level copy of the options - should make it this.options really...
		var options = INTELNAV.jQuery_1_11_1.extend({}, options);

		var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
			START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
			MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
			END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
			LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //we manually detect leave on touch devices, so null event here
			CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



		//touch properties
		var distance = 0,
			direction = null,
			currentDirection = null,
			duration = 0,
			startTouchesDistance = 0,
			endTouchesDistance = 0,
			pinchZoom = 1,
			pinchDistance = 0,
			pinchDirection = 0,
			maximumsMap = null;



		//jQuery wrapped element for this instance
		var $element = INTELNAV.jQuery_1_11_1(element);

		//Current phase of th touch cycle
		var phase = "start";

		// the current number of fingers being used.
		var fingerCount = 0;

		//track mouse points / delta
		var fingerData = {};

		//track times
		var startTime = 0,
			endTime = 0,
			previousTouchEndTime = 0,
			fingerCountAtRelease = 0,
			doubleTapStartTime = 0;

		//Timeouts
		var singleTapTimeout = null,
			holdTimeout = null;

		// Add gestures to all swipable areas if supported
		try {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
		} catch (e) {
			INTELNAV.jQuery_1_11_1.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
		}

		//
		//Public methods
		//

		/**
		 * re-enables the swipe plugin with the previous configuration
		 * @function
		 * @name INTELNAV.jQuery_1_11_1.fn.swipe#enable
		 * @return {DOMNode} The Dom element that was registered with TouchSwipe
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("enable");
		 */
		this.enable = function() {
			//Incase we are already enabled, clean up...
			this.disable();
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
			return $element;
		};

		/**
		 * disables the swipe plugin
		 * @function
		 * @name INTELNAV.jQuery_1_11_1.fn.swipe#disable
		 * @return {DOMNode} The Dom element that is now registered with TouchSwipe
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("disable");
		 */
		this.disable = function() {
			removeListeners();
			return $element;
		};

		/**
		 * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
		 * @function
		 * @name INTELNAV.jQuery_1_11_1.fn.swipe#destroy
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("destroy");
		 */
		this.destroy = function() {
			removeListeners();
			$element.data(PLUGIN_NS, null);
			$element = null;
		};


		/**
		 * Allows run time updating of the swipe configuration options.
		 * @function
		 * @name INTELNAV.jQuery_1_11_1.fn.swipe#option
		 * @param {String} property The option property to get or set, or a has of multiple options to set
		 * @param {Object} [value] The value to set the property to
		 * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("option", "threshold"); // return the threshold
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("option", "threshold", 100); // set the threshold after init
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
		 * @example INTELNAV.jQuery_1_11_1("#element").swipe("option"); // Return the current options hash
		 * @see INTELNAV.jQuery_1_11_1.fn.swipe.defaults
		 *
		 */
		this.option = function(property, value) {

			if (typeof property === 'object') {
				options = INTELNAV.jQuery_1_11_1.extend(options, property);
			} else if (options[property] !== undefined) {
				if (value === undefined) {
					return options[property];
				} else {
					options[property] = value;
				}
			} else if (!property) {
				return options;
			} else {
				INTELNAV.jQuery_1_11_1.error('Option ' + property + ' does not exist on jQuery.swipe.options');
			}

			return null;
		}



		//
		// Private methods
		//

		//
		// EVENTS
		//
		/**
		 * Event handler for a touch start event.
		 * Stops the default click event from triggering and stores where we touched
		 * @inner
		 * @param {object} jqEvent The normalised jQuery event object.
		 */
		function touchStart(jqEvent) {

			//If we already in a touch event (a finger already in use) then ignore subsequent ones..
			if (getTouchInProgress()) {
				return;
			}

			//Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
			if (INTELNAV.jQuery_1_11_1(jqEvent.target).closest(options.excludedElements, $element).length > 0) {
				return;
			}

			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;


			//If we have a pointer event, whoes type is 'mouse' and we have said NO mouse events, then dont do anything.
			if(event.pointerType && event.pointerType=="mouse" && options.fallbackToMouseEvents==false) {
				return;
			};

			var ret,
				touches = event.touches,
				evt = touches ? touches[0] : event;

			phase = PHASE_START;

			//If we support touches, get the finger count
			if (touches) {
				// get the total number of fingers touching the screen
				fingerCount = touches.length;
			}
			//Else this is the desktop, so stop the browser from dragging content
			else if (options.preventDefaultEvents !== false) {
				jqEvent.preventDefault(); //call this on jq event so we are cross browser
			}

			//clear vars..
			distance = 0;
			direction = null;
			currentDirection=null;
			pinchDirection = null;
			duration = 0;
			startTouchesDistance = 0;
			endTouchesDistance = 0;
			pinchZoom = 1;
			pinchDistance = 0;
			maximumsMap = createMaximumsData();
			cancelMultiFingerRelease();

			//Create the default finger data
			createFingerData(0, evt);

			// check the number of fingers is what we are looking for, or we are capturing pinches
			if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
				// get the coordinates of the touch
				startTime = getTimeStamp();

				if (fingerCount == 2) {
					//Keep track of the initial pinch distance, so we can calculate the diff later
					//Store second finger data as start
					createFingerData(1, touches[1]);
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				}

				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
			} else {
				//A touch with more or less than the fingers we are looking for, so cancel
				ret = false;
			}

			//If we have a return value from the users handler, then return and cancel
			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
				return ret;
			} else {
				if (options.hold) {
					holdTimeout = setTimeout(INTELNAV.jQuery_1_11_1.proxy(function() {
						//Trigger the event
						$element.trigger('hold', [event.target]);
						//Fire the callback
						if (options.hold) {
							ret = options.hold.call($element, event, event.target);
						}
					}, this), options.longTapThreshold);
				}

				setTouchInProgress(true);
			}

			return null;
		};



		/**
		 * Event handler for a touch move event.
		 * If we change fingers during move, then cancel the event
		 * @inner
		 * @param {object} jqEvent The normalised jQuery event object.
		 */
		function touchMove(jqEvent) {

			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

			//If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
			if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
				return;

			var ret,
				touches = event.touches,
				evt = touches ? touches[0] : event;


			//Update the  finger data
			var currentFinger = updateFingerData(evt);
			endTime = getTimeStamp();

			if (touches) {
				fingerCount = touches.length;
			}

			if (options.hold) {
				clearTimeout(holdTimeout);
			}

			phase = PHASE_MOVE;

			//If we have 2 fingers get Touches distance as well
			if (fingerCount == 2) {

				//Keep track of the initial pinch distance, so we can calculate the diff later
				//We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
				if (startTouchesDistance == 0) {
					//Create second finger if this is the first time...
					createFingerData(1, touches[1]);

					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				} else {
					//Else just update the second finger
					updateFingerData(touches[1]);

					endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
					pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
				}

				pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
				pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
			}

			if ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches()) {

				//The overall direction of the swipe. From start to now.
				direction = calculateDirection(currentFinger.start, currentFinger.end);

				//The immediate direction of the swipe, direction between the last movement and this one.
				currentDirection = calculateDirection(currentFinger.last, currentFinger.end);

				//Check if we need to prevent default event (page scroll / pinch zoom) or not
				validateDefaultEvent(jqEvent, currentDirection);

				//Distance and duration are all off the main finger
				distance = calculateDistance(currentFinger.start, currentFinger.end);
				duration = calculateDuration();

				//Cache the maximum distance we made in this direction
				setMaxDistance(direction, distance);

				//Trigger status handler
				ret = triggerHandler(event, phase);


				//If we trigger end events when threshold are met, or trigger events when touch leaves element
				if (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {

					var inBounds = true;

					//If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
					if (options.triggerOnTouchLeave) {
						var bounds = getbounds(this);
						inBounds = isInBounds(currentFinger.end, bounds);
					}

					//Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
					if (!options.triggerOnTouchEnd && inBounds) {
						phase = getNextPhase(PHASE_MOVE);
					}
					//We end if out of bounds here, so set current phase to END, and check if its modified
					else if (options.triggerOnTouchLeave && !inBounds) {
						phase = getNextPhase(PHASE_END);
					}

					if (phase == PHASE_CANCEL || phase == PHASE_END) {
						triggerHandler(event, phase);
					}
				}
			} else {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}
		}




		/**
		 * Event handler for a touch end event.
		 * Calculate the direction and trigger events
		 * @inner
		 * @param {object} jqEvent The normalised jQuery event object.
		 */
		function touchEnd(jqEvent) {
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
				touches = event.touches;

			//If we are still in a touch with the device wait a fraction and see if the other finger comes up
			//if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
			if (touches) {
				if (touches.length && !inMultiFingerRelease()) {
					startMultiFingerRelease(event);
					return true;
				} else if (touches.length && inMultiFingerRelease()) {
					return true;
				}
			}

			//If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
			//This is used to allow 2 fingers to release fractionally after each other, whilst maintaining the event as containing 2 fingers, not 1
			if (inMultiFingerRelease()) {
				fingerCount = fingerCountAtRelease;
			}

			//Set end of swipe
			endTime = getTimeStamp();

			//Get duration incase move was never fired
			duration = calculateDuration();

			//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
			if (didSwipeBackToCancel() || !validateSwipeDistance()) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			} else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd === false && phase === PHASE_MOVE)) {
				//call this on jq event so we are cross browser
				if (options.preventDefaultEvents !== false) {
					jqEvent.preventDefault();
				}
				phase = PHASE_END;
				triggerHandler(event, phase);
			}
			//Special cases - A tap should always fire on touch end regardless,
			//So here we manually trigger the tap end handler by itself
			//We dont run trigger handler as it will re-trigger events that may have fired already
			else if (!options.triggerOnTouchEnd && hasTap()) {
				//Trigger the pinch events...
				phase = PHASE_END;
				triggerHandlerForGesture(event, phase, TAP);
			} else if (phase === PHASE_MOVE) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			setTouchInProgress(false);

			return null;
		}



		/**
		 * Event handler for a touch cancel event.
		 * Clears current vars
		 * @inner
		 */
		function touchCancel() {
			// reset the variables back to default values
			fingerCount = 0;
			endTime = 0;
			startTime = 0;
			startTouchesDistance = 0;
			endTouchesDistance = 0;
			pinchZoom = 1;

			//If we were in progress of tracking a possible multi touch end, then re set it.
			cancelMultiFingerRelease();

			setTouchInProgress(false);
		}


		/**
		 * Event handler for a touch leave event.
		 * This is only triggered on desktops, in touch we work this out manually
		 * as the touchleave event is not supported in webkit
		 * @inner
		 */
		function touchLeave(jqEvent) {
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

			//If we have the trigger on leave property set....
			if (options.triggerOnTouchLeave) {
				phase = getNextPhase(PHASE_END);
				triggerHandler(event, phase);
			}
		}

		/**
		 * Removes all listeners that were associated with the plugin
		 * @inner
		 */
		function removeListeners() {
			$element.unbind(START_EV, touchStart);
			$element.unbind(CANCEL_EV, touchCancel);
			$element.unbind(MOVE_EV, touchMove);
			$element.unbind(END_EV, touchEnd);

			//we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
			if (LEAVE_EV) {
				$element.unbind(LEAVE_EV, touchLeave);
			}

			setTouchInProgress(false);
		}


		/**
		 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
		 */
		function getNextPhase(currentPhase) {

			var nextPhase = currentPhase;

			// Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
			var validTime = validateSwipeTime();
			var validDistance = validateSwipeDistance();
			var didCancel = didSwipeBackToCancel();

			//If we have exceeded our time, then cancel
			if (!validTime || didCancel) {
				nextPhase = PHASE_CANCEL;
			}
			//Else if we are moving, and have reached distance then end
			else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
				nextPhase = PHASE_END;
			}
			//Else if we have ended by leaving and didn't reach distance, then cancel
			else if (!validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave) {
				nextPhase = PHASE_CANCEL;
			}

			return nextPhase;
		}


		/**
		 * Trigger the relevant event handler
		 * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		 * @param {object} event the original event object
		 * @param {string} phase the phase of the swipe (start, end cancel etc) {@link INTELNAV.jQuery_1_11_1.fn.swipe.phases}
		 * @inner
		 */
		function triggerHandler(event, phase) {



			var ret,
				touches = event.touches;

			// SWIPE GESTURES
			if (didSwipe() || hasSwipes()) {
				ret = triggerHandlerForGesture(event, phase, SWIPE);
			}

			// PINCH GESTURES (if the above didn't cancel)
			if ((didPinch() || hasPinches()) && ret !== false) {
				ret = triggerHandlerForGesture(event, phase, PINCH);
			}

			// CLICK / TAP (if the above didn't cancel)
			if (didDoubleTap() && ret !== false) {
				//Trigger the tap events...
				ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
			}

			// CLICK / TAP (if the above didn't cancel)
			else if (didLongTap() && ret !== false) {
				//Trigger the tap events...
				ret = triggerHandlerForGesture(event, phase, LONG_TAP);
			}

			// CLICK / TAP (if the above didn't cancel)
			else if (didTap() && ret !== false) {
				//Trigger the tap event..
				ret = triggerHandlerForGesture(event, phase, TAP);
			}



			// If we are cancelling the gesture, then manually trigger the reset handler
			if (phase === PHASE_CANCEL) {

				touchCancel(event);
			}




			// If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
			if (phase === PHASE_END) {
				//If we support touch, then check that all fingers are off before we cancel
				if (touches) {
					if (!touches.length) {
						touchCancel(event);
					}
				} else {
					touchCancel(event);
				}
			}

			return ret;
		}



		/**
		 * Trigger the relevant event handler
		 * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		 * @param {object} event the original event object
		 * @param {string} phase the phase of the swipe (start, end cancel etc) {@link INTELNAV.jQuery_1_11_1.fn.swipe.phases}
		 * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link INTELNAV.jQuery_1_11_1.fn.swipe.gestures}
		 * @return Boolean False, to indicate that the event should stop propagation, or void.
		 * @inner
		 */
		function triggerHandlerForGesture(event, phase, gesture) {

			var ret;

			//SWIPES....
			if (gesture == SWIPE) {
				//Trigger status every time..
				$element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]);

				if (options.swipeStatus) {
					ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection);
					//If the status cancels, then dont run the subsequent event handlers..
					if (ret === false) return false;
				}

				if (phase == PHASE_END && validateSwipe()) {

					//Cancel any taps that were in progress...
					clearTimeout(singleTapTimeout);
					clearTimeout(holdTimeout);

					$element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

					if (options.swipe) {
						ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
						//If the status cancels, then dont run the subsequent event handlers..
						if (ret === false) return false;
					}

					//trigger direction specific event handlers
					switch (direction) {
						case LEFT:
							$element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

							if (options.swipeLeft) {
								ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
							}
							break;

						case RIGHT:
							$element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

							if (options.swipeRight) {
								ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
							}
							break;

						case UP:
							$element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

							if (options.swipeUp) {
								ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
							}
							break;

						case DOWN:
							$element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

							if (options.swipeDown) {
								ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
							}
							break;
					}
				}
			}


			//PINCHES....
			if (gesture == PINCH) {
				$element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

				if (options.pinchStatus) {
					ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if (ret === false) return false;
				}

				if (phase == PHASE_END && validatePinch()) {

					switch (pinchDirection) {
						case IN:
							$element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

							if (options.pinchIn) {
								ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;

						case OUT:
							$element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

							if (options.pinchOut) {
								ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;
					}
				}
			}

			if (gesture == TAP) {
				if (phase === PHASE_CANCEL || phase === PHASE_END) {

					clearTimeout(singleTapTimeout);
					clearTimeout(holdTimeout);

					//If we are also looking for doubelTaps, wait incase this is one...
					if (hasDoubleTap() && !inDoubleTap()) {
						doubleTapStartTime = getTimeStamp();

						//Now wait for the double tap timeout, and trigger this single tap
						//if its not cancelled by a double tap
						singleTapTimeout = setTimeout(INTELNAV.jQuery_1_11_1.proxy(function() {
							doubleTapStartTime = null;
							$element.trigger('tap', [event.target]);

							if (options.tap) {
								ret = options.tap.call($element, event, event.target);
							}
						}, this), options.doubleTapThreshold);

					} else {
						doubleTapStartTime = null;
						$element.trigger('tap', [event.target]);
						if (options.tap) {
							ret = options.tap.call($element, event, event.target);
						}
					}
				}
			} else if (gesture == DOUBLE_TAP) {
				if (phase === PHASE_CANCEL || phase === PHASE_END) {
					clearTimeout(singleTapTimeout);
					clearTimeout(holdTimeout);
					doubleTapStartTime = null;
					$element.trigger('doubletap', [event.target]);

					if (options.doubleTap) {
						ret = options.doubleTap.call($element, event, event.target);
					}
				}
			} else if (gesture == LONG_TAP) {
				if (phase === PHASE_CANCEL || phase === PHASE_END) {
					clearTimeout(singleTapTimeout);
					doubleTapStartTime = null;

					$element.trigger('longtap', [event.target]);
					if (options.longTap) {
						ret = options.longTap.call($element, event, event.target);
					}
				}
			}

			return ret;
		}


		//
		// GESTURE VALIDATION
		//

		/**
		 * Checks the user has swipe far enough
		 * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
		 * If no threshold was set, then we return true.
		 * @inner
		 */
		function validateSwipeDistance() {
			var valid = true;
			//If we made it past the min swipe distance..
			if (options.threshold !== null) {
				valid = distance >= options.threshold;
			}

			return valid;
		}

		/**
		 * Checks the user has swiped back to cancel.
		 * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
		 * If no cancelThreshold was set, then we return true.
		 * @inner
		 */
		function didSwipeBackToCancel() {
			var cancelled = false;
			if (options.cancelThreshold !== null && direction !== null) {
				cancelled = (getMaxDistance(direction) - distance) >= options.cancelThreshold;
			}

			return cancelled;
		}

		/**
		 * Checks the user has pinched far enough
		 * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
		 * If no threshold was set, then we return true.
		 * @inner
		 */
		function validatePinchDistance() {
			if (options.pinchThreshold !== null) {
				return pinchDistance >= options.pinchThreshold;
			}
			return true;
		}

		/**
		 * Checks that the time taken to swipe meets the minimum / maximum requirements
		 * @return Boolean
		 * @inner
		 */
		function validateSwipeTime() {
			var result;
			//If no time set, then return true
			if (options.maxTimeThreshold) {
				if (duration >= options.maxTimeThreshold) {
					result = false;
				} else {
					result = true;
				}
			} else {
				result = true;
			}

			return result;
		}


		/**
		 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
		 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
		 * @param {object} jqEvent The normalised jQuery representation of the event object.
		 * @param {string} direction The direction of the event. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
		 * @see INTELNAV.jQuery_1_11_1.fn.swipe.directions
		 * @inner
		 */
		function validateDefaultEvent(jqEvent, direction) {

			//If the option is set, allways allow the event to bubble up (let user handle weirdness)
			if (options.preventDefaultEvents === false) {
				return;
			}

			if (options.allowPageScroll === NONE) {
				jqEvent.preventDefault();
			} else {
				var auto = options.allowPageScroll === AUTO;

				switch (direction) {
					case LEFT:
						if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case RIGHT:
						if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case UP:
						if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;

					case DOWN:
						if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;

					case NONE:

						break;
				}
			}
		}


		// PINCHES
		/**
		 * Returns true of the current pinch meets the thresholds
		 * @return Boolean
		 * @inner
		 */
		function validatePinch() {
			var hasCorrectFingerCount = validateFingers();
			var hasEndPoint = validateEndPoint();
			var hasCorrectDistance = validatePinchDistance();
			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;

		}

		/**
		 * Returns true if any Pinch events have been registered
		 * @return Boolean
		 * @inner
		 */
		function hasPinches() {
			//Enure we dont return 0 or null for false values
			return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
		}

		/**
		 * Returns true if we are detecting pinches, and have one
		 * @return Boolean
		 * @inner
		 */
		function didPinch() {
			//Enure we dont return 0 or null for false values
			return !!(validatePinch() && hasPinches());
		}




		// SWIPES
		/**
		 * Returns true if the current swipe meets the thresholds
		 * @return Boolean
		 * @inner
		 */
		function validateSwipe() {
			//Check validity of swipe
			var hasValidTime = validateSwipeTime();
			var hasValidDistance = validateSwipeDistance();
			var hasCorrectFingerCount = validateFingers();
			var hasEndPoint = validateEndPoint();
			var didCancel = didSwipeBackToCancel();

			// if the user swiped more than the minimum length, perform the appropriate action
			// hasValidDistance is null when no distance is set
			var valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;

			return valid;
		}

		/**
		 * Returns true if any Swipe events have been registered
		 * @return Boolean
		 * @inner
		 */
		function hasSwipes() {
			//Enure we dont return 0 or null for false values
			return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
		}


		/**
		 * Returns true if we are detecting swipes and have one
		 * @return Boolean
		 * @inner
		 */
		function didSwipe() {
			//Enure we dont return 0 or null for false values
			return !!(validateSwipe() && hasSwipes());
		}

		/**
		 * Returns true if we have matched the number of fingers we are looking for
		 * @return Boolean
		 * @inner
		 */
		function validateFingers() {
			//The number of fingers we want were matched, or on desktop we ignore
			return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
		}

		/**
		 * Returns true if we have an end point for the swipe
		 * @return Boolean
		 * @inner
		 */
		function validateEndPoint() {
			//We have an end value for the finger
			return fingerData[0].end.x !== 0;
		}

		// TAP / CLICK
		/**
		 * Returns true if a click / tap events have been registered
		 * @return Boolean
		 * @inner
		 */
		function hasTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.tap);
		}

		/**
		 * Returns true if a double tap events have been registered
		 * @return Boolean
		 * @inner
		 */
		function hasDoubleTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.doubleTap);
		}

		/**
		 * Returns true if any long tap events have been registered
		 * @return Boolean
		 * @inner
		 */
		function hasLongTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.longTap);
		}

		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		 */
		function validateDoubleTap() {
			if (doubleTapStartTime == null) {
				return false;
			}
			var now = getTimeStamp();
			return (hasDoubleTap() && ((now - doubleTapStartTime) <= options.doubleTapThreshold));
		}

		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		 */
		function inDoubleTap() {
			return validateDoubleTap();
		}


		/**
		 * Returns true if we have a valid tap
		 * @return Boolean
		 * @inner
		 */
		function validateTap() {
			return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
		}

		/**
		 * Returns true if we have a valid long tap
		 * @return Boolean
		 * @inner
		 */
		function validateLongTap() {
			//slight threshold on moving finger
			return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD));
		}

		/**
		 * Returns true if we are detecting taps and have one
		 * @return Boolean
		 * @inner
		 */
		function didTap() {
			//Enure we dont return 0 or null for false values
			return !!(validateTap() && hasTap());
		}


		/**
		 * Returns true if we are detecting double taps and have one
		 * @return Boolean
		 * @inner
		 */
		function didDoubleTap() {
			//Enure we dont return 0 or null for false values
			return !!(validateDoubleTap() && hasDoubleTap());
		}

		/**
		 * Returns true if we are detecting long taps and have one
		 * @return Boolean
		 * @inner
		 */
		function didLongTap() {
			//Enure we dont return 0 or null for false values
			return !!(validateLongTap() && hasLongTap());
		}




		// MULTI FINGER TOUCH
		/**
		 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
		 * @inner
		 */
		function startMultiFingerRelease(event) {
			previousTouchEndTime = getTimeStamp();
			fingerCountAtRelease = event.touches.length + 1;
		}

		/**
		 * Cancels the tracking of time between 2 finger releases, and resets counters
		 * @inner
		 */
		function cancelMultiFingerRelease() {
			previousTouchEndTime = 0;
			fingerCountAtRelease = 0;
		}

		/**
		 * Checks if we are in the threshold between 2 fingers being released
		 * @return Boolean
		 * @inner
		 */
		function inMultiFingerRelease() {

			var withinThreshold = false;

			if (previousTouchEndTime) {
				var diff = getTimeStamp() - previousTouchEndTime
				if (diff <= options.fingerReleaseThreshold) {
					withinThreshold = true;
				}
			}

			return withinThreshold;
		}


		/**
		 * gets a data flag to indicate that a touch is in progress
		 * @return Boolean
		 * @inner
		 */
		function getTouchInProgress() {
			//strict equality to ensure only true and false are returned
			return !!($element.data(PLUGIN_NS + '_intouch') === true);
		}

		/**
		 * Sets a data flag to indicate that a touch is in progress
		 * @param {boolean} val The value to set the property to
		 * @inner
		 */
		function setTouchInProgress(val) {

			//If destroy is called in an event handler, we have no el, and we have already cleaned up, so return.
			if(!$element) { return; }

			//Add or remove event listeners depending on touch status
			if (val === true) {
				$element.bind(MOVE_EV, touchMove);
				$element.bind(END_EV, touchEnd);

				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if (LEAVE_EV) {
					$element.bind(LEAVE_EV, touchLeave);
				}
			} else {

				$element.unbind(MOVE_EV, touchMove, false);
				$element.unbind(END_EV, touchEnd, false);

				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if (LEAVE_EV) {
					$element.unbind(LEAVE_EV, touchLeave, false);
				}
			}


			//strict equality to ensure only true and false can update the value
			$element.data(PLUGIN_NS + '_intouch', val === true);
		}


		/**
		 * Creates the finger data for the touch/finger in the event object.
		 * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
		 * @param {object} evt The event object containing finger data
		 * @return finger data object
		 * @inner
		 */
		function createFingerData(id, evt) {
			var f = {
				start: {
					x: 0,
					y: 0
				},
				last: {
					x: 0,
					y: 0
				},
				end: {
					x: 0,
					y: 0
				}
			};
			f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX;
			f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY;
			fingerData[id] = f;
			return f;
		}

		/**
		 * Updates the finger data for a particular event object
		 * @param {object} evt The event object containing the touch/finger data to upadte
		 * @return a finger data object.
		 * @inner
		 */
		function updateFingerData(evt) {
			var id = evt.identifier !== undefined ? evt.identifier : 0;
			var f = getFingerData(id);

			if (f === null) {
				f = createFingerData(id, evt);
			}

			f.last.x = f.end.x;
			f.last.y = f.end.y;

			f.end.x = evt.pageX || evt.clientX;
			f.end.y = evt.pageY || evt.clientY;

			return f;
		}

		/**
		 * Returns a finger data object by its event ID.
		 * Each touch event has an identifier property, which is used
		 * to track repeat touches
		 * @param {int} id The unique id of the finger in the sequence of touch events.
		 * @return a finger data object.
		 * @inner
		 */
		function getFingerData(id) {
			return fingerData[id] || null;
		}


		/**
		 * Sets the maximum distance swiped in the given direction.
		 * If the new value is lower than the current value, the max value is not changed.
		 * @param {string}  direction The direction of the swipe
		 * @param {int}  distance The distance of the swipe
		 * @inner
		 */
		function setMaxDistance(direction, distance) {
			if(direction==NONE) return;
			distance = Math.max(distance, getMaxDistance(direction));
			maximumsMap[direction].distance = distance;
		}

		/**
		 * gets the maximum distance swiped in the given direction.
		 * @param {string}  direction The direction of the swipe
		 * @return int  The distance of the swipe
		 * @inner
		 */
		function getMaxDistance(direction) {
			if (maximumsMap[direction]) return maximumsMap[direction].distance;
			return undefined;
		}

		/**
		 * Creats a map of directions to maximum swiped values.
		 * @return Object A dictionary of maximum values, indexed by direction.
		 * @inner
		 */
		function createMaximumsData() {
			var maxData = {};
			maxData[LEFT] = createMaximumVO(LEFT);
			maxData[RIGHT] = createMaximumVO(RIGHT);
			maxData[UP] = createMaximumVO(UP);
			maxData[DOWN] = createMaximumVO(DOWN);

			return maxData;
		}

		/**
		 * Creates a map maximum swiped values for a given swipe direction
		 * @param {string} The direction that these values will be associated with
		 * @return Object Maximum values
		 * @inner
		 */
		function createMaximumVO(dir) {
			return {
				direction: dir,
				distance: 0
			}
		}


		//
		// MATHS / UTILS
		//

		/**
		 * Calculate the duration of the swipe
		 * @return int
		 * @inner
		 */
		function calculateDuration() {
			return endTime - startTime;
		}

		/**
		 * Calculate the distance between 2 touches (pinch)
		 * @param {point} startPoint A point object containing x and y co-ordinates
		 * @param {point} endPoint A point object containing x and y co-ordinates
		 * @return int;
		 * @inner
		 */
		function calculateTouchesDistance(startPoint, endPoint) {
			var diffX = Math.abs(startPoint.x - endPoint.x);
			var diffY = Math.abs(startPoint.y - endPoint.y);

			return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
		}

		/**
		 * Calculate the zoom factor between the start and end distances
		 * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
		 * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
		 * @return float The zoom value from 0 to 1.
		 * @inner
		 */
		function calculatePinchZoom(startDistance, endDistance) {
			var percent = (endDistance / startDistance) * 1;
			return percent.toFixed(2);
		}


		/**
		 * Returns the pinch direction, either IN or OUT for the given points
		 * @return string Either {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions.IN} or {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions.OUT}
		 * @see INTELNAV.jQuery_1_11_1.fn.swipe.directions
		 * @inner
		 */
		function calculatePinchDirection() {
			if (pinchZoom < 1) {
				return OUT;
			} else {
				return IN;
			}
		}


		/**
		 * Calculate the length / distance of the swipe
		 * @param {point} startPoint A point object containing x and y co-ordinates
		 * @param {point} endPoint A point object containing x and y co-ordinates
		 * @return int
		 * @inner
		 */
		function calculateDistance(startPoint, endPoint) {
			return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
		}

		/**
		 * Calculate the angle of the swipe
		 * @param {point} startPoint A point object containing x and y co-ordinates
		 * @param {point} endPoint A point object containing x and y co-ordinates
		 * @return int
		 * @inner
		 */
		function calculateAngle(startPoint, endPoint) {
			var x = startPoint.x - endPoint.x;
			var y = endPoint.y - startPoint.y;
			var r = Math.atan2(y, x); //radians
			var angle = Math.round(r * 180 / Math.PI); //degrees

			//ensure value is positive
			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			return angle;
		}

		/**
		 * Calculate the direction of the swipe
		 * This will also call calculateAngle to get the latest angle of swipe
		 * @param {point} startPoint A point object containing x and y co-ordinates
		 * @param {point} endPoint A point object containing x and y co-ordinates
		 * @return string Either {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions.LEFT} / {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions.RIGHT} / {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions.DOWN} / {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions.UP}
		 * @see INTELNAV.jQuery_1_11_1.fn.swipe.directions
		 * @inner
		 */
		function calculateDirection(startPoint, endPoint) {

			if( comparePoints(startPoint, endPoint) ) {
				return NONE;
			}

			var angle = calculateAngle(startPoint, endPoint);

			if ((angle <= 45) && (angle >= 0)) {
				return LEFT;
			} else if ((angle <= 360) && (angle >= 315)) {
				return LEFT;
			} else if ((angle >= 135) && (angle <= 225)) {
				return RIGHT;
			} else if ((angle > 45) && (angle < 135)) {
				return DOWN;
			} else {
				return UP;
			}
		}


		/**
		 * Returns a MS time stamp of the current time
		 * @return int
		 * @inner
		 */
		function getTimeStamp() {
			var now = new Date();
			return now.getTime();
		}



		/**
		 * Returns a bounds object with left, right, top and bottom properties for the element specified.
		 * @param {DomNode} The DOM node to get the bounds for.
		 */
		function getbounds(el) {
			el = INTELNAV.jQuery_1_11_1(el);
			var offset = el.offset();

			var bounds = {
				left: offset.left,
				right: offset.left + el.outerWidth(),
				top: offset.top,
				bottom: offset.top + el.outerHeight()
			}

			return bounds;
		}


		/**
		 * Checks if the point object is in the bounds object.
		 * @param {object} point A point object.
		 * @param {int} point.x The x value of the point.
		 * @param {int} point.y The x value of the point.
		 * @param {object} bounds The bounds object to test
		 * @param {int} bounds.left The leftmost value
		 * @param {int} bounds.right The righttmost value
		 * @param {int} bounds.top The topmost value
		 * @param {int} bounds.bottom The bottommost value
		 */
		function isInBounds(point, bounds) {
			return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
		};

		/**
		 * Checks if the two points are equal
		 * @param {object} point A point object.
		 * @param {object} point B point object.
		 * @return true of the points match
		 */
		function comparePoints(pointA, pointB) {
			return (pointA.x == pointB.x && pointA.y == pointB.y);
		}


	}




	/**
	 * A catch all handler that is triggered for all swipe directions.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#swipe
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user swiped in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user swiped
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {object} fingerData The coordinates of fingers in event
	 * @param {string} currentDirection The current direction the user is swiping.
	 */




	/**
	 * A handler that is triggered for "left" swipes.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#swipeLeft
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user swiped in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user swiped
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {object} fingerData The coordinates of fingers in event
	 * @param {string} currentDirection The current direction the user is swiping.
	 */

	/**
	 * A handler that is triggered for "right" swipes.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#swipeRight
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user swiped in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user swiped
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {object} fingerData The coordinates of fingers in event
	 * @param {string} currentDirection The current direction the user is swiping.
	 */

	/**
	 * A handler that is triggered for "up" swipes.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#swipeUp
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user swiped in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user swiped
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {object} fingerData The coordinates of fingers in event
	 * @param {string} currentDirection The current direction the user is swiping.
	 */

	/**
	 * A handler that is triggered for "down" swipes.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#swipeDown
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user swiped in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user swiped
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {object} fingerData The coordinates of fingers in event
	 * @param {string} currentDirection The current direction the user is swiping.
	 */

	/**
	 * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
	 * This is triggered regardless of swipe thresholds.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#swipeStatus
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {string} phase The phase of the swipe event. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.phases}
	 * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {object} fingerData The coordinates of fingers in event
	 * @param {string} currentDirection The current direction the user is swiping.
	 */

	/**
	 * A handler triggered for pinch in events.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#pinchIn
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user pinched in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user pinched
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
	 * @param {object} fingerData The coordinates of fingers in event
	 */

	/**
	 * A handler triggered for pinch out events.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#pinchOut
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user pinched in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user pinched
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
	 * @param {object} fingerData The coordinates of fingers in event
	 */

	/**
	 * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#pinchStatus
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {int} direction The direction the user pinched in. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.directions}
	 * @param {int} distance The distance the user pinched
	 * @param {int} duration The duration of the swipe in milliseconds
	 * @param {int} fingerCount The number of fingers used. See {@link INTELNAV.jQuery_1_11_1.fn.swipe.fingers}
	 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
	 * @param {object} fingerData The coordinates of fingers in event
	 */

	/**
	 * A click handler triggered when a user simply clicks, rather than swipes on an element.
	 * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
	 * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
	 * Use the <code>tap</code> event instead.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#click
	 * @event
	 * @deprecated since version 1.6.2, please use {@link INTELNAV.jQuery_1_11_1.fn.swipe#tap} instead
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {DomObject} target The element clicked on.
	 */

	/**
	 * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#tap
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {DomObject} target The element clicked on.
	 */

	/**
	 * A double tap handler triggered when a user double clicks or taps on an element.
	 * You can set the time delay for a double tap with the {@link INTELNAV.jQuery_1_11_1.fn.swipe.defaults#doubleTapThreshold} property.
	 * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
	 * as the script needs to check if its a double tap.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#doubleTap
	 * @see  INTELNAV.jQuery_1_11_1.fn.swipe.defaults#doubleTapThreshold
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {DomObject} target The element clicked on.
	 */

	/**
	 * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
	 * You can set the time delay for a long tap with the {@link INTELNAV.jQuery_1_11_1.fn.swipe.defaults#longTapThreshold} property.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#longTap
	 * @see  INTELNAV.jQuery_1_11_1.fn.swipe.defaults#longTapThreshold
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {DomObject} target The element clicked on.
	 */

	/**
	 * A hold tap handler triggered as soon as the longTapThreshold is reached
	 * You can set the time delay for a long tap with the {@link INTELNAV.jQuery_1_11_1.fn.swipe.defaults#longTapThreshold} property.
	 * @name INTELNAV.jQuery_1_11_1.fn.swipe#hold
	 * @see  INTELNAV.jQuery_1_11_1.fn.swipe.defaults#longTapThreshold
	 * @event
	 * @default null
	 * @param {EventObject} event The original event object
	 * @param {DomObject} target The element clicked on.
	 */

}));

/**!
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchMove = function() { return FastClick.prototype.onTouchMove.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !this.deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			
			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


/*if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else*/ if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}


// navbar.js
'use strict';

var intel = intel || {};
var wapExp = 'default',
    deviceType = null;
intel.breakpoints = (function () {

	var windowWidth,
		bpNum,
		bp,
		breakpoints = [
			['xs', 480],
			['ms', 768],
			['sm', 992],
			['md', 1200],
			['lg', 1650],
			['xl', 999999]
        ],
        tabletOrientationBreakpoint = 540;

    function init() {
        try {
            initCurrentBreakpoint();
            INTELNAV.jQuery_1_11_1(window).on('resize', updateCurrentBreakpoint);
            INTELNAV.jQuery_1_11_1(window).on('orientationchange', updateCurrentBreakpoint);
        }catch(e){
            intel.exception(e);
        }
    }

	function initCurrentBreakpoint() {
		windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        initAnalytics();
		for (var i = 0; i < breakpoints.length; i++) {
			if (windowWidth < breakpoints[i][1]) {
				bpNum = i;
				bp = breakpoints[i][0];
				return bp;
			}
		}
	}

    function updateCurrentBreakpoint() {
        try {
            windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            initAnalytics();
            for (var i = 0; i < breakpoints.length; i++) {
                if (windowWidth < breakpoints[i][1]) {
                    if (bpNum === i) { return false; }
                    var direction = i - bpNum;
                    bpNum = i;
                    bp = breakpoints[i][0];
                    INTELNAV.jQuery_1_11_1(window).trigger('changeBreakpoint', {
                        'bp': bp,
                        'direction': direction
                    });
                    return bp;
                }
            }
        }catch(e){
            intel.exception(e);
        }
    }

    function initAnalytics() {
        if (Modernizr.Detectizr != undefined) {
            deviceType = Modernizr.Detectizr.device.type;
        }
        if (deviceType == 'tablet') {
            if (windowWidth >= tabletOrientationBreakpoint) {
                wapExp = 'tablet-landscape';
            }
            else if (windowWidth < tabletOrientationBreakpoint) {
                wapExp = 'tablet-portrait';
            }
        }
        else if (deviceType == 'mobile') {
            if (windowWidth >= breakpoints[0][1]) {
                wapExp = 'mobile-landscape';
            } else if (windowWidth < breakpoints[0][1]) {
                wapExp = 'mobile-portrait';
            }
        }
        else if (windowWidth >= breakpoints[4][1]) {
            wapExp = 'extra-large-desktop';
        }
        else if (windowWidth >= breakpoints[3][1]) {
            wapExp = 'large-desktop';
        }
        else {
            wapExp = 'desktop';
        }
    }

	function getCurrentBreakpoint() {
		return bp;
	}
	function getCurrentBreakpointNumber() {
		return bpNum;
	}
	function getWindowWidth() {
		return windowWidth;
	}
    function getViewPortWidth() {
        return document.documentElement.clientWidth;
    }

	return {
		initialize: init,
		getBreakpoint: getCurrentBreakpoint,
		getBreakpointNumber: getCurrentBreakpointNumber,
		getWindowWidth: getWindowWidth,
        getViewPortWidth: getViewPortWidth
	};

})(INTELNAV.jQuery_1_11_1);


window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() { intel.breakpoints.initialize(); });


INTELNAV.jQuery_1_11_1(document).on('click', function(e) {
  e.button === 2 && e.stopImmediatePropagation()
})

/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if (typeof INTELNAV.jQuery_1_11_1 === "undefined") { throw new Error("Bootstrap requires INTELNAV.jQuery_1_11_1") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.3
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: alert.js v3.0.3
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: button.js v3.0.3
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')
    var changed = true

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') === 'radio') {
        // see if clicking on current one
        if ($input.prop('checked') && this.$element.hasClass('active'))
          changed = false
        else
          $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.3
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.3
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '#recode50header [data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(document).find(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('#recode50header [data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '#recode50header .dropdown-backdrop'
  var toggle   = '#recode50header [data-toggle=dropdown2]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: modal.js v3.0.3
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.3
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original INTELNAV.jQuery_1_11_1.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: popover.js v3.0.3
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.3
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: tab.js v3.0.3
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(INTELNAV.jQuery_1_11_1);

/* ========================================================================
 * Bootstrap: affix.js v3.0.3
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(INTELNAV.jQuery_1_11_1);



/*! onScreen jQuery plugin v0.2.1 (c) 2011-2013 Ben Pickles http://benpickles.github.io/onScreen Released under MIT license.*/
;(function () {
    INTELNAV.jQuery_1_11_1.expr[":"].onScreen = function (elem) {
        var $window = INTELNAV.jQuery_1_11_1(window),
            viewport_top = $window.scrollTop(),
            viewport_height = $window.height(),
            viewport_bottom = viewport_top + viewport_height,
            $elem = INTELNAV.jQuery_1_11_1(elem),
            top = $elem.offset().top,
            height = $elem.height(),
            bottom = top + height;

        function check1() {
            return top >= viewport_top && top < viewport_bottom;
        }

        function check2() {
            return bottom > viewport_top && bottom <= viewport_bottom;
        }

        function check3() {
            return height > viewport_height && top <= viewport_top && bottom >= viewport_bottom;
        }

        return check1() || check2() || check3();
    };
})(INTELNAV.jQuery_1_11_1);

/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
var gPicFill = gPicFill || {};
(function (w) {
    // Enable strict mode
    "use strict";

    var addedLoadEvent = false;

    function getMatchedMedia(sources) {
        var matches = [];
        // See which sources match
        for (var j = 0, jl = sources.length; j < jl; j++) {
            var media = INTELNAV.jQuery_1_11_1(sources[j]).attr("data-media");
            // if there's no media specified, OR w.matchMedia is supported
            if (!media || ( w.matchMedia && w.matchMedia(media).matches )) {
                matches.push(sources[j]);
            }
        }
        return matches;
    }

    function getElementsWithPicturesToLoad($elems) {
        if (document.readyState !== 'complete') {
            //Page hasn't loaded, so only fetch images that are visible on screen
            $elems = $elems.filter(':onScreen');
        }
        return $elems;
    }

    function picOnError() {
        return function () {
            this.onerror = null;
            this.src = INTELNAV.jQuery_1_11_1(this).parent("span").attr("data-onerror");
            if (this.src.indexOf('/etc/designs/intel/global/white.png') > -1) {
                this.style.display = 'none';
            }
        };
    }

    function updateRegularImages(matches, picImg, ps) {
        var matchedEl = matches.pop();
        if (!picImg) {
            picImg = w.document.createElement("img");
            picImg.alt = ps.getAttribute("data-alt");
            if (ps.hasAttribute("data-title")) {
                picImg.title = ps.getAttribute("data-title");
            }
            if (ps.hasAttribute("data-aria-hidden")) {
                picImg.setAttribute('aria-hidden', 'true');
            }
        }

        picImg.src = matchedEl.getAttribute("data-src");
        // trap onerror event to set to data-onerror
        picImg.onerror = picOnError();
        matchedEl.appendChild(picImg);
        //picImg.removeAttribute("width");
        //picImg.removeAttribute("height");
    }

    function updateVideoPosterImages(sourceSpan, videoTags) {
        var sources = INTELNAV.jQuery_1_11_1(sourceSpan[0]).children("span"),
            matches = getMatchedMedia(sources);

        var matchesLength = matches.length;
        if (matchesLength) {
            var matchedEl = matches[matchesLength - 1];
            var backgroundImage = INTELNAV.jQuery_1_11_1(matchedEl).attr("data-src");
            INTELNAV.jQuery_1_11_1(videoTags).find('div[data-video-container]').css("background-image", "url(" + backgroundImage + ")");
        }
    }

    function updateFullBleedImages(sourceSpan, section) {
        var sources = INTELNAV.jQuery_1_11_1(sourceSpan[0]).children("span"),
            matches = getMatchedMedia(sources);

        // Find any existing intrinsic elements
        var intrinsicElements = INTELNAV.jQuery_1_11_1(section).find(".intrinsic-element");

        if (matches.length) {
            var matchedEl = matches.pop();
            if (INTELNAV.jQuery_1_11_1(matchedEl).is("[data-intrinsic]")) {
                intrinsicElements.css("background-image", 'url("' + INTELNAV.jQuery_1_11_1(matchedEl).attr("data-src") + '")');
                INTELNAV.jQuery_1_11_1(section).css("background-image", "");
            } else {
                INTELNAV.jQuery_1_11_1(section).css("background-image", 'url("' + INTELNAV.jQuery_1_11_1(matchedEl).attr("data-src") + '")');
                intrinsicElements.css("background-image", "");
            }
        }
    }

    function processRegularImages(ps) {
        // Loop the pictures
        for (var i = 0, il = ps.length; i < il; i++) {
            var sources = INTELNAV.jQuery_1_11_1(ps[i]).find("span[data-src]"),
                matches = getMatchedMedia(sources);

            // Find any existing img element in the picture element
            var picImg = ps[i].getElementsByTagName("img")[0];

            if (matches.length) {
                updateRegularImages(matches, picImg, ps[i]);
            }
            else if (picImg) {
                picImg.parentNode.removeChild(picImg);
            }
        }
    }

    function processFullBleedImages(sections) {
        for (var i = 0, il = sections.length; i < il; i++) {
            var sourceSpan = INTELNAV.jQuery_1_11_1(sections[i]).children("span[data-picture-sources]");
            if (sourceSpan.length) {
                updateFullBleedImages(sourceSpan, sections[i]);
            }
        }
    }

    function processVideoPosterImages(videoTags) {
        for (var k = 0; k < videoTags.length; k++) {
            var imageSourceSpan = INTELNAV.jQuery_1_11_1(videoTags[k]).find("span[data-picture-sources]");
            if (imageSourceSpan.length) {
                updateVideoPosterImages(imageSourceSpan, videoTags[k]);
            }
        }
    }

    w.picturefill = function () {
        var ps = INTELNAV.jQuery_1_11_1("[data-picture]").not("[data-ignore]"),
            sections = INTELNAV.jQuery_1_11_1("[data-picture-full-bleed]").not("[data-ignore]"),
            videoTags = INTELNAV.jQuery_1_11_1(".overview-component"),
            picElementsInScope = ps.add(sections).add(videoTags),
            initialFetch = 4;

        if (document.readyState !== 'complete') {
            if (!addedLoadEvent) {
                w.addEventListener("load", w.picturefill, false);
                addedLoadEvent = true;
            }
            //fetch only an initial number of images from among those that are on screen initially
            picElementsInScope = getElementsWithPicturesToLoad(picElementsInScope).filter(':lt(' + initialFetch + ')');
        }

        // Part 1: regular (not full-bleed) images
        processRegularImages(ps.filter(picElementsInScope));
        // Part 2: full-bleed images
        processFullBleedImages(sections.filter(picElementsInScope));
        // Part 3: video poster images
        processVideoPosterImages(videoTags.filter(picElementsInScope));
    };

    gPicFill.p = w.picturefill;
    // Run on resize and domready (w.load as a fallback)
    if (w.addEventListener) {
        w.addEventListener("resize", w.picturefill, false);
        w.addEventListener("DOMContentLoaded", function () {
            w.picturefill();
        }, false);
    }
    else if (w.attachEvent) {
        w.attachEvent("onload", w.picturefill);
    }

}(this));


/**
 * Detect Element Resize Plugin for jQuery
 *
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * version: 0.5.3
 **/

(function () {
    var attachEvent = document.attachEvent,
        stylesCreated = false;

    var jQuery_resize = INTELNAV.jQuery_1_11_1.fn.resize;

    INTELNAV.jQuery_1_11_1.fn.resize = function(callback) {
        return this.each(function() {
            if(this == window)
                jQuery_resize.call(INTELNAV.jQuery_1_11_1(this), callback);
            else
                addResizeListener(this, callback);
        });
    }

    INTELNAV.jQuery_1_11_1.fn.removeResize = function(callback) {
        return this.each(function() {
            removeResizeListener(this, callback);
        });
    }

    if (!attachEvent) {
        var requestFrame = (function(){
            var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
                function(fn){ return window.setTimeout(fn, 20); };
            return function(fn){ return raf(fn); };
        })();

        var cancelFrame = (function(){
            var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
                window.clearTimeout;
            return function(id){ return cancel(id); };
        })();

        function resetTriggers(element){
            var triggers = element.__resizeTriggers__,
                expand = triggers.firstElementChild,
                contract = triggers.lastElementChild,
                expandChild = expand.firstElementChild;
            contract.scrollLeft = contract.scrollWidth;
            contract.scrollTop = contract.scrollHeight;
            expandChild.style.width = expand.offsetWidth + 1 + 'px';
            expandChild.style.height = expand.offsetHeight + 1 + 'px';
            expand.scrollLeft = expand.scrollWidth;
            expand.scrollTop = expand.scrollHeight;
        };

        function checkTriggers(element){
            return element.offsetWidth != element.__resizeLast__.width ||
                element.offsetHeight != element.__resizeLast__.height;
        }

        function scrollListener(e){
            var element = this;
            resetTriggers(this);
            if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
            this.__resizeRAF__ = requestFrame(function(){
                if (checkTriggers(element)) {
                    element.__resizeLast__.width = element.offsetWidth;
                    element.__resizeLast__.height = element.offsetHeight;
                    element.__resizeListeners__.forEach(function(fn){
                        fn.call(element, e);
                    });
                }
            });
        };

        /* Detect CSS Animations support to detect element display/re-attach */
        var animation = false,
            animationstring = 'animation',
            keyframeprefix = '',
            animationstartevent = 'animationstart',
            domPrefixes = 'Webkit Moz O ms'.split(' '),
            startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
            pfx  = '';
        {
            var elm = document.createElement('fakeelement');
            if( elm.style.animationName !== undefined ) { animation = true; }

            if( animation === false ) {
                for( var i = 0; i < domPrefixes.length; i++ ) {
                    if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                        pfx = domPrefixes[ i ];
                        animationstring = pfx + 'Animation';
                        keyframeprefix = '-' + pfx.toLowerCase() + '-';
                        animationstartevent = startEvents[ i ];
                        animation = true;
                        break;
                    }
                }
            }
        }

        var animationName = 'resizeanim';
        var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
        var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
    }

    function createStyles() {
        if (!stylesCreated) {
            //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
            var css = (animationKeyframes ? animationKeyframes : '') +
                    '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' +
                    '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
            stylesCreated = true;
        }
    }

    window.addResizeListener = function(element, fn){
        if (attachEvent) element.attachEvent('onresize', fn);
        else {
            if (!element.__resizeTriggers__) {
                if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
                createStyles();
                element.__resizeLast__ = {};
                element.__resizeListeners__ = [];
                (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
                element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' +
                '<div class="contract-trigger"></div>';
                element.appendChild(element.__resizeTriggers__);
                resetTriggers(element);
                element.addEventListener('scroll', scrollListener, true);

                /* Listen for a css animation to detect element display/re-attach */
                animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
                    if(e.animationName == animationName)
                        resetTriggers(element);
                });
            }
            element.__resizeListeners__.push(fn);
        }
    };

    window.removeResizeListener = function(element, fn){
        if (attachEvent) element.detachEvent('onresize', fn);
        else {
            element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
            if (!element.__resizeListeners__.length) {
                element.removeEventListener('scroll', scrollListener);
                element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
            }
        }
    }
}(INTELNAV.jQuery_1_11_1));

/*! waitForImages jQuery Plugin - v2.0.2 - 2015-06-02
 * https://github.com/alexanderdickson/waitForImages
 * Copyright (c) 2015 Alex Dickson; Licensed MIT */
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(INTELNAV.jQuery_1_11_1);
    }
}(function () {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    INTELNAV.jQuery_1_11_1.waitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find all `img` elements with a valid `src` attribute.
    INTELNAV.jQuery_1_11_1.expr[':']['has-src'] = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        return INTELNAV.jQuery_1_11_1(obj).is('img[src][src!=""]');
    };

    // Custom selector to find images which are not already cached by the
    // browser.
    INTELNAV.jQuery_1_11_1.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!INTELNAV.jQuery_1_11_1(obj).is(':has-src')) {
            return false;
        }

        return !obj.complete;
    };

    INTELNAV.jQuery_1_11_1.fn.waitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = INTELNAV.jQuery_1_11_1.Deferred();

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if (INTELNAV.jQuery_1_11_1.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && INTELNAV.jQuery_1_11_1.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || INTELNAV.jQuery_1_11_1.noop;
        eachCallback = eachCallback || INTELNAV.jQuery_1_11_1.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!INTELNAV.jQuery_1_11_1.isFunction(finishedCallback) || !INTELNAV.jQuery_1_11_1.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = INTELNAV.jQuery_1_11_1(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = INTELNAV.jQuery_1_11_1.waitForImages.hasImageProperties || [];
            // Element attributes which may contain an image.
            var hasImageAttributes = INTELNAV.jQuery_1_11_1.waitForImages.hasImageAttributes || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = INTELNAV.jQuery_1_11_1(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:has-src')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    INTELNAV.jQuery_1_11_1.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    INTELNAV.jQuery_1_11_1.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        // Check for multiple comma separated images
                        attributeValues = attributeValue.split(',');

                        INTELNAV.jQuery_1_11_1.each(attributeValues, function(i, value) {
                            // Trim value and get string before first
                            // whitespace (for use with srcset).
                            value = INTELNAV.jQuery_1_11_1.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            });
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:has-src')
                    .each(function () {
                        allImgs.push({
                            src: this.src,
                            element: this
                        });
                    });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0]);
            }

            INTELNAV.jQuery_1_11_1.each(allImgs, function (i, img) {

                var image = new Image();
                var events =
                    'load.' + eventNamespace + ' error.' + eventNamespace;

                // Handle the image loading and error with the same callback.
                INTELNAV.jQuery_1_11_1(image).one(events, function me (event) {
                    // If an error occurred with loading the image, set the
                    // third argument accordingly.
                    var eachArguments = [
                        allImgsLoaded,
                        allImgsLength,
                        event.type == 'load'
                    ];
                    allImgsLoaded++;

                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);

                    // Unbind the event listeners. I use this in addition to
                    // `one` as one of those events won't be called (either
                    // 'load' or 'error' will be called).
                    INTELNAV.jQuery_1_11_1(this).off(events, me);

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });

        return deferred.promise();

    };
}));

// navbar.js
'use strict';

var intel = intel || {};
intel.menu = (function () {
    function toggleLanguageAccordian(e) {
        try {
            e.stopPropagation();

            if (INTELNAV.jQuery_1_11_1(e.target).hasClass('accordion-toggle')) {
                var target = INTELNAV.jQuery_1_11_1(e.target).attr('data-target');
                if (INTELNAV.jQuery_1_11_1(e.target).hasClass('expanded')) {
                    INTELNAV.jQuery_1_11_1(target).collapse('hide');
                    INTELNAV.jQuery_1_11_1(e.target).removeClass('expanded');
                }
                else {
                    INTELNAV.jQuery_1_11_1(this).find('.accordion-panel.in').collapse('hide');
                    INTELNAV.jQuery_1_11_1(target).collapse('show');
                    INTELNAV.jQuery_1_11_1('.accordion-toggle').removeClass('expanded');
                    INTELNAV.jQuery_1_11_1(e.target).addClass('expanded');
                }
            }
        }catch(e){
            intel.exception(e);
        }
    }

    return {
        toggleLanguageAccordion: toggleLanguageAccordian
    };

})(INTELNAV.jQuery_1_11_1);


// navbar.js
'use strict';

var intel = intel || {};

intel.changeLinks = function(forceChange){
    if(window.location.protocol === "https:" || forceChange){
        var links = INTELNAV.jQuery_1_11_1("#header-translations").find("div").find("a");
        for (var i = 0; i < links.length; i++) {
            var href = links[i].href;
            links[i].href = href.substr(href.indexOf("/content"), href.length);
        }
    }
};

INTELNAV.jQuery_1_11_1(document).ready(function(){
    try{
        var selectorResult = INTELNAV.jQuery_1_11_1(".locale-selector").find("a.dropdown-toggle");
        if(selectorResult.length !== 0){
            selectorResult.click(intel.changeLinks(false));
        }
    }catch(e){
        intel.exception(e);
    }
});




'use strict';

var intel = intel || {};
intel.main = (function () {
    function init() {
        try {
            var $html = INTELNAV.jQuery_1_11_1('html');
            // Apply device specific classes(mobile, tablet, Desktop .. etc) in HTML tag.
            if (Modernizr.Detectizr) {
                Modernizr.Detectizr.detect();
                fixIETouchLaptopDetection();
                checkOldBrowsers(Modernizr.Detectizr.device);
                if (!$html.hasClass('desktop')) {
                    $html.addClass('no-desktop');
                }
                // To set the Navbar position at the top of the viewport in iOS devices
                setNavbarposition(Modernizr.Detectizr.device);
            }

            var inputs = INTELNAV.jQuery_1_11_1('input, textarea');
            if (inputs.placeholder != undefined) {
                INTELNAV.jQuery_1_11_1('input, textarea').placeholder();
            }




        INTELNAV.jQuery_1_11_1(document).on('focusin', 'input, textarea,select', function () {
                INTELNAV.jQuery_1_11_1("body").addClass("focusin-mode");
            });
            INTELNAV.jQuery_1_11_1(document).on('focusout', 'input, textarea,select', function () {
                INTELNAV.jQuery_1_11_1("body").removeClass("focusin-mode");
            });

            document.addEventListener('touchmove', function (e) {
                if (INTELNAV.jQuery_1_11_1("html.ios body").hasClass('focusin-mode')) {
                    e.preventDefault();
                }
            });

            if ($html.hasClass("touch") && $html.hasClass("desktop")) {
                INTELNAV.jQuery_1_11_1(".video-js").addClass("vjs-mouse");
            }


            INTELNAV.jQuery_1_11_1('[id="wechatModal"]').each(function () {
                INTELNAV.jQuery_1_11_1(document.body).append(INTELNAV.jQuery_1_11_1(this).detach());
            });

            INTELNAV.jQuery_1_11_1("body").on("click", ".weChatIconSocial", function () {
                var $modalBodySocial = INTELNAV.jQuery_1_11_1('#modal-body-social');
                if ($modalBodySocial.children().length === 0) {
                    $modalBodySocial.prepend("<img alt='QR Code' src='/libs/apps/intel/commons/qrcode?path=" + encodeURIComponent(document.URL) + "'/>");
                    INTELNAV.jQuery_1_11_1("#wechatModal").modal("show");
                }
            });

            INTELNAV.jQuery_1_11_1("#weClose").bind("click", function () {

                if (INTELNAV.jQuery_1_11_1('#modal-body-social').children().length >= 0) {
                    INTELNAV.jQuery_1_11_1('#modal-body-social').empty();
                }

            });

            //localizeDLCandArkLinks(location.pathname);
        }catch(e){
            intel.exception(e);
        }

    }

    INTELNAV.jQuery_1_11_1(window).resize(function () {
        var $html = INTELNAV.jQuery_1_11_1('html');
        // Apply device specific classes(mobile, tablet, Desktop .. etc) in HTML tag.
        if (Modernizr.Detectizr)
        {
            if(Modernizr.Detectizr.device.browser == "ie" && Modernizr.Detectizr.device.os == "windows" && Modernizr.Detectizr.device.browserVersion > 9 && window.screen.width  > 1400){
                if(INTELNAV.jQuery_1_11_1(window).width() <= 768)
                    $html.removeClass('desktop').addClass('no-desktop');
                else
                    $html.removeClass('no-desktop').addClass('desktop');
            }
        }
        // PRB000031664 - fix for tablet PC - device detected as tablet in IE (windows 8 tablet PC) - resulting in incorrect header implementation
        // PRB000041372 - Broken Header Experience at Mobile Breakpoint on HP Laptop with touch screens

    });

    function localizeDLCandArkLinks(pathname) {
        var loc           = pathname;
        var locRegexp     = /\/content\/www\/(.*?)\/(.*?)\//;
        var $_dlc         = INTELNAV.jQuery_1_11_1("a[href*='//downloadcenter.intel.com']");
        var $_ark         = INTELNAV.jQuery_1_11_1("a[href*='//ark.intel.com']");
        var match_groups  = loc.match(locRegexp);
        var dlc_geolookup = { cn:"zh-cn", jp:"ja", xl:"es", br:"pt-br", tw:"zh-tw", kr:"ko", de:"de", es:"es", fr:"fr", it:"it", ru:"ru" };
        var ark_geolookup = { cn:"zh-cn", jp:"ja", xl:"es", br:"pt-br", id:"id", tw:"zh-tw", kr:"ko", th:"th", vn:"vi", fr:"fr", de:"de", it:"it", es:"es-es", ru:"ru", nl:"nl", pl:"pl", se:"sv", tr:"tr" };
        var isContentPage = function() { return match_groups && match_groups.length === 3; };
        var remap_url     = function($_, geo_key, geolookup) {
            if (geo_key in geolookup) {
                $_.each(function(){
                    var parser        = document.createElement('a');
                    parser.href       = this.href;
                    var expected_path = "/{}".replace(/{}/, geolookup[geo_key]);
                    var current_path  = parser.pathname.replace(/(^\/?)/,"/");
                    var keylen = geolookup[geo_key].length;
                    if (current_path.substring(0, keylen + 1) !== expected_path) {
                        parser.pathname = "/{}".replace(/{}/, geolookup[geo_key]) + current_path;
                        this.href = parser.href;
                    }
                });
            }
        };
        if (isContentPage()) {
            var page_geo_key  = match_groups[1];
            remap_url($_dlc, page_geo_key, dlc_geolookup);
            remap_url($_ark, page_geo_key, ark_geolookup);
        }

        updateShopUrls(match_groups);
    }

    function updateShopUrls(match_groups) {
        var $shopUrlsMatches = INTELNAV.jQuery_1_11_1("a[href*='intel.com/buy/us/en/']");
        if ($shopUrlsMatches && $shopUrlsMatches.length > 0) {
            var shopUrlsLookup = {"/xa/en/" : "/sg/en/","/au/en/" : "/au/en/","/in/en/" : "/in/en/","/id/id/" : "/id/id/","/jp/ja/" : "/jp/ja/","/kr/ko/" : "/kr/ko/","/my/en/" : "/my/en/","/ph/en/" : "/ph/en/","/tw/zh/" : "/tw/zh/","/th/th/" : "/th/th/","/vn/vi/" : "/vn/vi/","/fr/fr/" : "/fr/fr/","/de/de/" : "/de/de/","/it/it/" : "/it/it/","/nl/nl/" : "/nl/nl/","/pl/pl/" : "/pl/pl/","/es/es/" : "/es/es/","/se/sv/" : "/se/sv/","/tr/tr/" : "/tr/tr/","/ua/uk/" : "/ua/uk/","/uk/en/" : "/uk/en/","/br/pt/" : "/br/pt/","/xl/es/" : "/mx/es/","/ca/en/" : "/ca/en/","/ru/ru/" : "/ru/ru/","/cn/zh/" : "/cn/zh/"};
            var matchedKey = "/"+match_groups[1]+"/"+match_groups[2]+"/";
            var matchedValue = (shopUrlsLookup.hasOwnProperty(matchedKey))?shopUrlsLookup[matchedKey]:"/us/en/";
            $shopUrlsMatches.each(function () {
                var shophref = INTELNAV.jQuery_1_11_1(this).attr("href");
                shophref = shophref.replace(/\/us\/en\//, matchedValue);
                INTELNAV.jQuery_1_11_1(this).attr("href", shophref);
            });
        }
    }

    function checkOldBrowsers(device) {
        var bN = device.browser;
        var sbV = device.browserVersion;

        // old browser- Fixed an issue to detect for only ie8 and ie9
        if (bN == 'ie' && sbV <= 9) {
            INTELNAV.jQuery_1_11_1('body').addClass('old_browser');
            INTELNAV.jQuery_1_11_1('#browserdetectid').removeAttr('style');
        } else {
            INTELNAV.jQuery_1_11_1('body').addClass('new_browser');
        }

    }

    // Detectizr fails to properly identify Windows-based touch-enabled laptops as such on IE
    // This function fixes said recognition by leveraging window.PointerEvent, only available on desktop
    function fixIETouchLaptopDetection(){
        if (Modernizr.Detectizr.device.browser === "ie" && Modernizr.Detectizr.device.type === "tablet" && window.PointerEvent){
            Modernizr.Detectizr.device.type = "desktop";
            INTELNAV.jQuery_1_11_1('html').removeClass('tablet').removeClass('no-touch').addClass('touch').addClass('desktop');
        }
    }

    function setNavbarposition(device){
        var documentHeight = INTELNAV.jQuery_1_11_1(document).height();
        INTELNAV.jQuery_1_11_1('.shader').height(documentHeight);

        if (device.browser === 'safari') {
            document.addEventListener('touchmove',function(e){
                if(INTELNAV.jQuery_1_11_1('.ios .navbar').hasClass('active-search')){
                    e.preventDefault();
                }
            });
        }
    }
    return {
        initialize: init//,
        //localizeSpecialLinks: localizeDLCandArkLinks
    };

})(INTELNAV.jQuery_1_11_1);

window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() {intel.main.initialize();});

var intel = intel || {};

intel.pageCustom = (function () {
    var secureAttr = window.location.protocol === "https:" ? "; secure" : "";
    document.cookie = "ref=" + escape(document.referrer) + secureAttr + "; path=/";

    function delete_cookie ( cookie_name ){
        try {
            var cookie_date = new Date();  // current date & time
            cookie_date.setTime(cookie_date.getTime() - (1 * 24 * 60 * 60 * 1000));
            document.cookie = cookie_name + "=; expires=" + cookie_date.toGMTString() + secureAttr + "; path=/; domain=.intel.com";
        }catch(e){
            intel.exception(e);
        }
    }

    function get_cookie(cname) {
        try {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = INTELNAV.jQuery_1_11_1.trim(ca[i]);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }catch(e){
            intel.exception(e);
        }
    }

    return {
        delete_cookie: delete_cookie,
        get_cookie: get_cookie
    };

})();

INTELNAV.jQuery_1_11_1(function () {
    function createCookie(name, value, days) {
        try {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else expires = "";
            document.cookie = name + "=" + value + expires + "; secure; path=/";
        }catch(e){
            intel.exception(e);
        }
    }

    var arrayCookie = document.cookie.split(';'),
        flag = 0,
        url = window.location.href,
        iipFlag = 'No';

    if (url.indexOf('iip') != -1) {
        iipFlag = 'Yes';
    }

    for (var i = 0; i < arrayCookie.length; i++) {
        var value = arrayCookie[i];

        if (value.indexOf('OldBrowsersCookie') != -1) {
            flag += 1;
        }
        else {
            flag += 0;
        }
    }

    var alertMsgHeight = INTELNAV.jQuery_1_11_1("#alertMsg").height();
    var persistentCta = INTELNAV.jQuery_1_11_1(".persistent-cta");
    var persistentPP = INTELNAV.jQuery_1_11_1(".persistent-cta.persistent-pp");
    var persistentFixed ="persistent-cta-fixed";
    persistentPP.attr('style', 'background-color: inherit');
    if (flag == 0 && iipFlag == 'No') {
        INTELNAV.jQuery_1_11_1('#browserdetectid').removeAttr('style');
        createCookie('OldBrowsersCookie', 'Cookie for old browser popup message', 0.04167);
        INTELNAV.jQuery_1_11_1(window).on("scroll", function(){
            var sTop = INTELNAV.jQuery_1_11_1(window).scrollTop();
            if(sTop > alertMsgHeight) {
                persistentCta.addClass(persistentFixed);
                persistentPP.attr('style', 'background-color: rgba(0,0,0,0.5)');
            } else {
                persistentCta.removeClass(persistentFixed);
                persistentPP.attr('style', 'background-color: inherit');
            }
        });
    }
    else {
        INTELNAV.jQuery_1_11_1('body').addClass('cookie-oldbrowser');
        persistentCta.addClass(persistentFixed);
    }
});

/*! Detectizr - v1.5.0 - 2014-02-04
* https://github.com/barisaydinoglu/Detectizr
* Copyright 2014 Baris Aydinoglu Licensed MIT */

!function(a,b){var c=a.Modernizr,d={addAllFeaturesAsClass:!1,detectDevice:!0,detectDeviceModel:!0,detectScreen:!0,detectOS:!0,detectBrowser:!0,detectPlugins:!0};function e(e){var f=function(a,b){var c,d,e;if(arguments.length>2)for(c=1,d=arguments.length;d>c;c+=1)f(a,arguments[c]);else for(e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},g=this,h=c.Detectizr.device,i=document.documentElement,j=["tv","tablet","mobile","desktop"],k=/[\t\r\n]/g,l={acrobat:{substrs:["Adobe","Acrobat"],progIds:["AcroPDF.PDF","PDF.PDFCtrl.5"]},flash:{substrs:["Shockwave","Flash"],progIds:["ShockwaveFlash.ShockwaveFlash.1"]},mediaplayer:{substrs:["Windows Media"],progIds:["wmplayer.ocx"]},silverlight:{substrs:["Silverlight"],progIds:["AgControl.AgControl"]}},m,n,o,p,q,r,s,t;if(d=f({},d,e||{}),g.is=function(a){return h.userAgent.indexOf(a)>-1},g.test=function(a){return a.test(h.userAgent)},g.exec=function(a){return a.exec(h.userAgent)},g.trim=function(a){return a.replace(/^\s+|\s+$/g,"")},g.toCamel=function(a){return null===a||void 0===a?"":String(a).replace(/((\s|\-|\.)+[a-z0-9])/g,function(a){return a.toUpperCase().replace(/(\s|\-|\.)/g,"")})},g.removeClass=function(a,b){var c=b||"",d=1===a.nodeType&&(a.className?(" "+a.className+" ").replace(k," "):"");if(d){while(d.indexOf(" "+c+" ")>=0)d=d.replace(" "+c+" "," ");a.className=b?g.trim(d):""}},g.addVersionTest=function(a,b,c){null!==b&&void 0!==b&&""!==b&&(b=g.toCamel(b),""!==b&&(void 0!==c&&c>0&&(b=b.substr(0,c)),g.addConditionalTest(a+b,!0)))},g.checkOrientation=function(){a.clearTimeout(s),s=a.setTimeout(function(){t=h.orientation,h.orientation=a.innerHeight>a.innerWidth?"portrait":"landscape",g.addConditionalTest(h.orientation,!0),t!==h.orientation&&g.addConditionalTest(t,!1)},10)},g.addConditionalTest=function(a,b){null!==a&&void 0!==a&&""!==a&&(d.addAllFeaturesAsClass?c.addTest(a,b):(b="function"==typeof b?b():b,b?c.addTest(a,!0):(delete c[a],g.removeClass(i,a))))},d.detectDevice){for(g.test(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)?(h.type=j[0],h.model="smartTv"):g.test(/Xbox|PLAYSTATION.3|Wii/i)?(h.type=j[0],h.model="gameConsole"):g.test(/iP(a|ro)d/i)?(h.type=j[1],h.model="ipad"):g.test(/tablet/i)&&!g.test(/RX-34/i)||g.test(/FOLIO/i)?(h.type=j[1],h.model=String(g.exec(/playbook/)||"")):g.test(/Linux/i)&&g.test(/Android/i)&&!g.test(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)?(h.type=j[1],h.model="android"):g.test(/Kindle/i)||g.test(/Mac.OS/i)&&g.test(/Silk/i)?(h.type=j[1],h.model="kindle"):g.test(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||g.test(/MB511/i)&&g.test(/RUTEM/i)?(h.type=j[1],h.model="android"):g.test(/BB10/i)?(h.type=j[1],h.model="blackberry"):(h.model=g.exec(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/i),null!==h.model?(h.type=j[2],h.model=String(h.model)):(h.model="",g.test(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)?h.type=j[2]:g.test(/Opera/i)&&g.test(/Windows.NT.5/i)&&g.test(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)?h.type=j[2]:g.test(/Windows.(NT|XP|ME|9)/i)&&!g.test(/Phone/i)||g.test(/Win(9|.9|NT)/i)||g.test(/\(Windows 8\)/i)?h.type=j[3]:g.test(/Macintosh|PowerPC/i)&&!g.test(/Silk/i)?h.type=j[3]:g.test(/Linux/i)&&g.test(/X11/i)?h.type=j[3]:g.test(/Solaris|SunOS|BSD/i)?h.type=j[3]:g.test(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i)&&!g.test(/Mobile/i)?(h.type=j[3],h.model="crawler"):h.type=j[2])),m=0,n=j.length;n>m;m+=1)g.addConditionalTest(j[m],h.type===j[m]);d.detectDeviceModel&&g.addConditionalTest(g.toCamel(h.model),!0),(h.type===j[1]||h.type===j[2])&&(a.onresize=function(a){g.checkOrientation(a)},g.checkOrientation())}if(d.detectScreen&&c.mq&&(g.addConditionalTest("smallScreen",c.mq("only screen and (max-width: 480px)")),g.addConditionalTest("verySmallScreen",c.mq("only screen and (max-width: 320px)")),g.addConditionalTest("veryVerySmallScreen",c.mq("only screen and (max-width: 240px)"))),d.detectOS&&(""!==h.model&&("ipad"===h.model||"iphone"===h.model||"ipod"===h.model?(h.osVersion=g.test(/os\s(\d+)_/)?RegExp.$1:"",h.os="ios",h.osVersionFull=g.test(/os ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""):"android"===h.model?(h.osVersion=(g.test(/os\s(\d+)_/)?RegExp.$1:"").substr(0,2),h.osVersion||(h.osVersion=g.test(/android\s(\d+)\./)?RegExp.$1:"",h.osVersionFull=g.test(/android ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""),h.os="android"):"blackberry"===h.model?(h.osVersion=g.test(/version\/([^\s]+)/)?RegExp.$1:"",h.os="blackberry"):"playbook"===h.model&&(h.osVersion=g.test(/os ([^\s]+)/)?RegExp.$1.replace(";",""):"",h.os="blackberry")),""===h.os&&(g.is("win")||g.is("16bit")?(h.os="windows",g.is("windows nt 6.3")?(h.osVersion="8",h.osVersionFull="8.1"):g.is("windows nt 6.2")||g.test(/\(windows 8\)/)?h.osVersion="8":g.is("windows nt 6.1")?h.osVersion="7":g.is("windows nt 6.0")?h.osVersion="vista":g.is("windows nt 5.2")||g.is("windows nt 5.1")||g.is("windows xp")?h.osVersion="xp":g.is("windows nt 5.0")||g.is("windows 2000")?h.osVersion="2k":g.is("winnt")||g.is("windows nt")?h.osVersion="nt":g.is("win98")||g.is("windows 98")?h.osVersion="98":(g.is("win95")||g.is("windows 95"))&&(h.osVersion="95")):g.is("mac")||g.is("darwin")?(h.os="mac",g.is("68k")||g.is("68000")?h.osVersion="68k":g.is("ppc")||g.is("powerpc")?h.osVersion="ppc":g.is("os x")&&(h.osVersion="os x")):g.is("webtv")?h.os="webtv":g.is("x11")||g.is("inux")?h.os="linux":g.is("sunos")?h.os="sun":g.is("irix")?h.os="irix":g.is("freebsd")?h.os="freebsd":g.is("bsd")&&(h.os="bsd")),""!==h.os&&(!h.osVersionFull&&h.osVersion&&(h.osVersionFull=h.osVersion),g.addConditionalTest(h.os,!0),g.addVersionTest(h.os,h.osVersionFull.replace(/\./g,"_")),g.addVersionTest(h.os,h.osVersion))),d.detectBrowser&&(g.test(/opera|webtv/i)||!g.test(/msie\s([0-9]{1,})/)&&!g.is("trident")?g.is("firefox")?(h.browserEngine="gecko",h.browser="firefox",h.browserVersion=(g.test(/firefox\/(\d+(\.?\d+)*)/)?RegExp.$1:"").substr(0,2)):g.is("gecko/")?h.browserEngine="gecko":g.is("opera")?(h.browser="opera",h.browserEngine="presto",h.browserVersion=g.test(/version\/(\d+)/)?RegExp.$1:g.test(/opera(\s|\/)(\d+)/)?RegExp.$2:""):g.is("konqueror")?h.browser="konqueror":g.is("chrome")?(h.browserEngine="webkit",h.browser="chrome",h.browserVersion=g.test(/chrome\/(\d+)/)?RegExp.$1:""):g.is("iron")?(h.browserEngine="webkit",h.browser="iron"):g.is("crios")?(h.browser="chrome",h.browserEngine="webkit",h.browserVersion=g.test(/crios\/(\d+)/)?RegExp.$1:""):g.is("applewebkit/")?(h.browser="safari",h.browserEngine="webkit",h.browserVersion=g.test(/version\/(\d+)/)?RegExp.$1:""):g.is("mozilla/")&&(h.browserEngine="gecko"):(h.browserEngine="trident",h.browser="ie",h.browserVersion=!a.addEventListener&&document.documentMode&&7===document.documentMode?"8compat":g.test(/trident.*rv[ :](\d+)\./)?RegExp.$1:g.test(/trident\/4\.0/)?"8":RegExp.$1),""!==h.browser&&(g.addConditionalTest(h.browser,!0),""!==h.browserVersion&&g.addVersionTest(h.browser,h.browserVersion)),g.addConditionalTest(h.browserEngine,!0)),d.detectPlugins){if(g.detectPlugin=function(a){for(m=0,n=b.plugins.length;n>m;m++){var c=b.plugins[m],d=c.name+c.description,e=0;for(o=0,p=a.length;p>o;o+=1)-1!==d.indexOf(a[o])&&(e+=1);if(e===a.length)return!0}return!1},g.detectObject=function(a,b){for(m=0,n=a.length;n>m;m++)try{var c=new ActiveXObject(a[m]);if(c)return b&&b[m]?b[m].call(c):!0}catch(d){}return!1},a.ActiveXObject)for(q in l)l.hasOwnProperty(q)&&(r=l[q],g.detectObject(r.progIds,r.fns)&&(h.browserPlugins.push(q),g.addConditionalTest(q,!0)));else if(b.plugins)for(q in l)l.hasOwnProperty(q)&&(r=l[q],g.detectPlugin(r.substrs)&&(h.browserPlugins.push(q),g.addConditionalTest(q,!0)));b.javaEnabled()&&(h.browserPlugins.push("java"),g.addConditionalTest("java",!0))}}function f(){void 0!==c&&(c.Detectizr=c.Detectizr||{},c.Detectizr.device={type:"",model:"",orientation:"",browser:"",browserEngine:"",browserPlugins:[],browserVersion:"",os:"",osVersion:"",osVersionFull:"",userAgent:(b.userAgent||b.vendor||a.opera).toLowerCase()},c.Detectizr.detect=function(a){return new e(a)})}f()}(this,navigator);


INTEL = window.INTEL || {}; INTEL.I18n = window.INTEL.I18n ||{};
// intel.search-dropdown.js
'use strict';

var intel = intel || {};
intel.searchDropdown = (function () {
    var bestMatchParams,
        suggestedParams,
        bestMatchUrl,
        searchInputs,
        keypressBuffer,
        activeInput,
        activeDropdown,
        searchText,
        previousSearchText,
        searchResultsBaseUrl,
        isTimeout = false,
        isResultMatch,
        predictiveResults = [],
        typeAheadResults = [],
        categoryLabels = [],
        searchResultsRWD,
        searchResultsRWD2,
        searchRwdObj,
        searchPredictiveObj,
        xhr,
        xhr2,
        categoryProduct = 'Intel Product',  //Results matching this reimaginerootlevel value returned by search engine go into this category
        categorySupport = 'Support',    //Results matching this reimaginerootlevel value returned by search engine go into this category
        categoryDownloads = 'Download Center',  //Results matching this reimaginerootlevel value returned by search engine go into this category
        categoryPredictive = 'Predictive',
        inputObj,
        programIdentifier,
        edcProgramIdentifier,
        updateUrlsForHttps = window.location.protocol == 'https:',
        SUPPORT_FILTER = "Target Audience/Support",
        DEFAULT_RANK = "reimaginerankprofile",
        SUPPORT_RANK = "supportrankprofile",
        isSupportSearchBox = false,
        contextualizedPrograms = ["ics", "isa", "itp"];


    var _classes = {
        searchComponent: "#simplify-search",
        hidden: "hidden",
        resultsRecent: ".results-recent",
        overlayContent: ".overlay-content",
        signin: ".search-info",
        searchedItem: ".searched-item",
        searchModalSignIn: "#dropDownSearchSignIn",
        searchedPage: "searched-page"
    };

    var searchPlaceholder;
    var lastPlaceholder;
    var isIE = false;

    INTELNAV.jQuery_1_11_1( document ).ready(function() {
        var mobileSearchField = INTELNAV.jQuery_1_11_1("#mobile-search");
        searchPlaceholder = mobileSearchField.attr('placeholder');
        lastPlaceholder = searchPlaceholder;

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        // If Internet Explorer, return version number
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            isIE = true;
            INTELNAV.jQuery_1_11_1("#mobile-search").on('paste', function() {

                var pastedText = console.log(window.clipboardData.getData('text'));
                if(lastPlaceholder === searchPlaceholder){
                    mobileSearchField.val("");
                    mobileSearchField.val(pastedText);
                    lastPlaceholder =  mobileSearchField.val();
                }
            });
        }
    });


    typeAheadResults[categoryProduct] = [];
    typeAheadResults[categorySupport] = [];
    typeAheadResults[categoryDownloads] = [];

    function init(searchParamObj) {
        try {
            setSearchResultsBaseUrl();
            setSearchParams(searchParamObj);
            searchResultsRWD = '{"categories": ['
                + '{ "title": "' + categoryLabels[categoryProduct] + '",'
                + '"results": []' + ','
                + '"categoryName": "' + categoryLabels[categoryProduct] + '"},'
                + '{ "title": "' + categoryLabels[categoryProduct] + '",'
                + '"suggested": true,'
                + '"results": []}'
                + ']}';
            programIdentifier = globalSearch.progId;
            searchRwdObj = JSON.parse(searchResultsRWD);
            searchInputs = INTELNAV.jQuery_1_11_1("[data-search-input]");
            edcProgramIdentifier = globalSearch.EDCProgramIdentifier;
            var searchSupportInputs = INTELNAV.jQuery_1_11_1("[data-searchSupport-input]");
            if (((programIdentifier !== 'cdisearch') && (programIdentifier !== 'mysmgsearch') && (programIdentifier !== 'edc')) || ((programIdentifier === 'edc') && (edcProgramIdentifier === 'false'))) {
                searchInputs.on('keyup', onKeypressSearchInput);
                INTELNAV.jQuery_1_11_1(document).not(searchInputs).on('click', closeDropdown);
                INTELNAV.jQuery_1_11_1(window).on("resize", function () {
                    INTELNAV.jQuery_1_11_1(".styled-options").width(INTELNAV.jQuery_1_11_1(".filter-container").width());
                });
            }
            searchInputs.attr('placeholder', searchParamObj.gtvLabels.search);
            searchSupportInputs.attr('placeholder', searchParamObj.gtvLabels.searchSupport);

            INTELNAV.jQuery_1_11_1(".productsearch").attr("placeholder", INTEL.I18n["category_support.supportProductSearchBlade.searchSupport"]);
        }catch(e){
            intel.exception(e);
        }
    }

    function customCharacterReplacement(p){
        return p.replace(/</g,'\u02C2').replace(/>/g,'\u02C3');
    }

    function setProtocol(txt) {
        return txt.replace('http:', location.protocol);
    }

    function setSearchParams(searchParamObj) {
        bestMatchUrl = setProtocol(searchParamObj.bestMatchUrl);

        bestMatchParams = searchParamObj.bestMatchDefaults;
        suggestedParams = searchParamObj.typeAheadDefaults;

        if(searchParamObj.isSharePointSearchPromote === true){
            var q10 = bestMatchParams.q10;
            bestMatchParams.q10 = "";
            bestMatchParams.q2 = "";
            bestMatchParams.q4 = q10;

            if (globalSearch.searchProvider === "searchpromote") {
                bestMatchParams.q41 = "ADOBE";
            } else {
                bestMatchParams.q41 = "SP";
            }

            bestMatchParams.q23 = ":";
            delete bestMatchParams.q28;
        }
        bestMatchParams.q3 = '20';
        if(bestMatchParams.q14.indexOf(SUPPORT_FILTER) >=0){
            bestMatchParams.q42 = SUPPORT_RANK;
        } else{
            bestMatchParams.q42 = DEFAULT_RANK;
        }

        categoryLabels[categoryProduct] = searchParamObj.gtvLabels.products;
        categoryLabels[categorySupport] = searchParamObj.gtvLabels.support;
        categoryLabels[categoryDownloads] = searchParamObj.gtvLabels.download;

        inputObj = searchParamObj;
    }

    function setSearchResultsBaseUrl() {
        var langAry = INTELNAV.renderSettings.culture.toLowerCase().split("_");  var loc = window.location,
            pathParts = loc.pathname.split('/'),
            urlParams = {},
            topCat = 'toplevelcategory',
            curCtxt = INTELNAV.jQuery_1_11_1('#curCtxt').val(),  //This and curTab are only to support the tabbed search page type ahead.  Once that page is EOL'd this code can be removed
            curTab = INTELNAV.jQuery_1_11_1('#curTab').val(),
            match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) {
                return decodeURIComponent(s.replace(pl, " "));
            },
            query = loc.search.substring(1);

        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
        searchResultsBaseUrl = INTELNAV.cqHost; //  + '//' + loc.host;
        if (INTELNAV.jQuery_1_11_1('#search-app').attr('ng-app') === 'searchApp') {
            searchResultsBaseUrl += loc.pathname + '?';
        }
        else {
            searchResultsBaseUrl += 'content/www/' + langAry[1] + '/' + langAry[0] + '/' + 'search.html?';
        }
        if(curCtxt){
            searchResultsBaseUrl += 'context=' + curCtxt + '&tab=' + curTab + '&';
        }
        else if (topCat in urlParams) {
            searchResultsBaseUrl += topCat + '=' + urlParams[topCat] + '&';
        }
        searchResultsBaseUrl += 'keyword=';
    }

    function onKeypressSearchInput(event) {
        predictiveResults = [];
        typeAheadResults[categoryProduct] = [];
        typeAheadResults[categorySupport] = [];
        typeAheadResults[categoryDownloads] = [];
        var code = (event.keyCode ? event.keyCode : event.which);
        isSupportSearchBox = INTELNAV.jQuery_1_11_1(this).hasClass('search-box-ics');
        activeInput = INTELNAV.jQuery_1_11_1(event.currentTarget);
        searchText = activeInput.val();
        var regp = /[^\x00-\x7F]+/;

        if (code === 13) {
            cancelSearchCall(xhr2);
            cancelSearchCall(xhr);
            //suppress analytics errors
            try{
                waTrackSearch(searchText); //analytic tracking - do not remove
            }
            catch(e){}
            activeInput.val(customCharacterReplacement(searchText));
            activeInput.closest('form').submit();
            clearResults(true);
            closeDropdown();
            event.preventDefault();
            return false;
        }

        else{ /* Supporting IE11 */
            if(isIE){
                if(searchPlaceholder === lastPlaceholder){
                    processTypedCharInSearchHeaderBox();
                }

                lastPlaceholder = searchText;
            }

        }

        function processTypedCharInSearchHeaderBox() {
            var str = "";
            for (var i = 0; i < searchText.length; i++) {
                if (regp.test(searchText.charAt(i))) {
                    str += searchText.charAt(i);
                }
            }
            if (str.length > 0) {
                activeInput.val(str);
            }
        }


        searchText = searchText.trim();

        if (searchText.length < 3) {
            populateRecentContent(true);
        } else {
            populateRecentContent(false);
        }

        if (searchText.length < 3) {
            clearResults(true);
            closeDropdown();
            INTELNAV.jQuery_1_11_1('.predictive-search-dropdown-new').remove();
        } else {
            if (searchText !== previousSearchText){
                isTimeout = false;
                clearTimeout(keypressBuffer);
                keypressBuffer = setTimeout(function () {
                    isTimeout = true;
                    if (searchText.length < 3  || isEmptySearchInput()){
                        INTELNAV.jQuery_1_11_1('.predictive-search-dropdown-new').remove();
                    } else {
                        isSuggestedMatch(searchText);
                    }
                }, 500);
            }
        }
        previousSearchText = searchText;
    }

    function  isEmptySearchInput() {
        if(isSupportSearchBox) {
            return INTELNAV.jQuery_1_11_1('#search-query-input').val().length === 0;
        } else {
            return INTELNAV.jQuery_1_11_1('#mobile-search').val().length === 0;
        }
    }

    function clearResults(clearRelatedResults) {
        var len = searchRwdObj.categories.length;
        if (clearRelatedResults === false) {
            len = len - 1;
        }
        for (var i = 0; i < len; i++) {
            searchRwdObj.categories[i].results = [];
        }
        searchPredictiveObj = [];
    }

    function cancelSearchCall(ajaxRequest) {
        if (ajaxRequest !== undefined && ajaxRequest.readyState !== 4) {
            ajaxRequest.abort();
        }
    }

    function searchArray(array, object) {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            if (array[i].toLowerCase() === object || array[i].toLowerCase().indexOf(object)> -1) {
                return i;
            }
        }
        return -1; // Return -1 per the "Array.indexOf()" method.
    }

    function isSuggestedMatch(searchText) {
        var isPreviousResultMatch = isResultMatch;
        if (isTimeout === true) {
            requestSearchResults(searchText);
        } else {
            cancelSearchCall(xhr);
        }
        if (isPreviousResultMatch !== -1 && isResultMatch === -1) {
            clearResults(false);
            renderSearchResults(searchRwdObj);
        }
    }

    function requestSearchResults(searchQuery) {
        if(bestMatchParams.q41 !== undefined && (bestMatchParams.q41 === "SP" || bestMatchParams.q41 === "ADOBE")) {
            bestMatchParams.q4 = searchQuery;
        }
        else{
            bestMatchParams.q10 = "corporatecompositefield^" + searchQuery + "^none";
        }
        xhr = INTELNAV.jQuery_1_11_1.ajax({
            dataType: 'jsonp',
            url: bestMatchUrl,
            data: bestMatchParams,
            success: function (data) {
                if(!isEmptySearchInput()) {
                    convertJSON(data);
                }
            },
            error: function (data, status, xhr) {
            }
        });
    }

    function convertJSON(resultQuery) {
        var resultArray = resultQuery.ResultSet,
            key,
            fielList,
            isBestMatch,
            keyFieldList,
            fieldElement,
            newResult,
            newObjectResult,
            keyFieldElement,
            element,
            url;
        predictiveResults = [];
        typeAheadResults[categoryProduct] = [];
        typeAheadResults[categorySupport] = [];
        typeAheadResults[categoryDownloads] = [];

        for (key in resultArray) {
            fielList = resultArray[key];
            isBestMatch = resultArray[key].IsFeaturedResult;

            for (keyFieldList in fielList) {
                fieldElement = fielList[keyFieldList];
                if (typeof fieldElement === 'object') {
                    newResult = "";

                    for (keyFieldElement in fieldElement) {
                        element = fieldElement[keyFieldElement];

                        if (element.FieldName === 'title' || element.FieldName === 'sptitle') {
                            newResult += '{"title":"' + element.FieldValue.replace(/(\r\n|\n|\r)/gm," ").replace(/"/gm,"\\\"") + '",';
                        }
                        if (element.FieldName === 'url') {
                            url = element.FieldValue;
                            if(updateUrlsForHttps && url.indexOf('https://www.intel.com/content') === 0){
                                url = url.replace('http://www', 'https://www-ssl');
                            }
                            newResult += '"url":"' + url + '"';
                            newResult += '}';
                            newObjectResult = JSON.parse(newResult);
                        }
                        if (element.FieldName === 'reimaginerootlevel' && element.FieldValue != null) {
                            addToCategory(element.FieldValue, newObjectResult);
                        }
                    }
                }
            }
        }

        searchRwdObj = createTypeAheadJSON();
        searchPredictiveObj = createPredictiveJSON();
        renderSearchResults(searchPredictiveObj, searchRwdObj);
    }

    // endsWith prototype
    var endsWith = function(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    function createTypeAheadJSON() { String.prototype.endsWith = String.prototype.endsWith || function(suffix) { return this.indexOf(suffix, this.length - suffix.length) !== -1; };
        searchResultsRWD2 = '{"categories": [';

        for (var keyJSON in categoryLabels) {
            if (typeAheadResults[keyJSON].length > 0 && typeof categoryLabels[keyJSON] === 'string' && ( programIdentifier !== 'ics' || (programIdentifier === 'ics' && (!isSupportSearchBox || (keyJSON === categorySupport && isSupportSearchBox))))) {
                searchResultsRWD2 += '{ "title":"' + categoryLabels[keyJSON] + '",' + '"results":' + JSON.stringify(typeAheadResults[keyJSON]) + ',' + '"categoryName":"' + getCategoryFilter(keyJSON) + '"},';
            }
        }

        if (!endsWith(searchResultsRWD2, "[")) {
            searchResultsRWD2 = searchResultsRWD2.slice(0, -1);
        }
        return JSON.parse(searchResultsRWD2+ ']}');
    }

    function createPredictiveJSON(){
        var predictiveString  = '{"categories": [';

        if (predictiveResults.length > 0){
            predictiveString += '{ "title":"' + categoryPredictive + '",' + '"results":' + JSON.stringify(predictiveResults) + ',' + '"categoryName":"' + categoryPredictive + '"},';
        }

        if (!endsWith(predictiveString, "[")) {
            predictiveString = predictiveString.slice(0, -1);
        }
        return JSON.parse(predictiveString+ ']}');
    }

    function addToCategory(elementValue, objectResult) {
        // Predictive Search
        if (predictiveResults.length < 5) {
            predictiveResults.push(objectResult);
        }
        // Filter Option
        for (var keyTA in typeAheadResults) {
            if (elementValue.indexOf(keyTA) >= 0 && typeAheadResults[keyTA].length < 3) {
                typeAheadResults[keyTA].push(objectResult);
            }
        }
    }

    function renderSearchResults(predictiveJson, filterJson) {
        if (activeDropdown) {
            closeDropdown();
        }
        activeDropdown = createDropdownMarkup(predictiveJson, filterJson);
        activeInput.after(activeDropdown);
        manageDropdownSize();
    }

    function createDropdownMarkup(predictiveJson, json) {
        var dropdown, categories = "", catLength, indexCategory, j, categoryContainer, results, resultsLength, wapMethod;

        function setCategoryData() {
            if(json){
                categories = json.categories;
            }
            catLength = categories.length;
        }

        function assignValuesToProcessCategory() {
            results = categories[indexCategory].results;
            resultsLength = results.length;
            wapMethod = categories[indexCategory].title === inputObj.gtvLabels.searchesRelatedTo ? 'typeahead' : 'featured';
        }

        function assignUlStructure(ul) {
            categoryContainer.append(ul);
            dropdown.append(categoryContainer);
            INTELNAV.jQuery_1_11_1('#hpsform-new').after(dropdown);
        }

        function populateIntelComFilter(ul) {
            if ( contextualizedPrograms.indexOf(globalSearch.progId) > -1) {
                ul.append(INTELNAV.jQuery_1_11_1('<li>')
                    .append(INTELNAV.jQuery_1_11_1('<a>', {
                            'class': 'search-category',
                            'tabindex': '1',
                            'href': searchResultsBaseUrl + searchText + "&query=" + searchText,
                            'data-wap': '{\"method\":\"' + wapMethod + '\",\"keyword\":\"' + searchText + '\"}'
                        })
                            .append("<span class='keyword'>" + searchText + "</span> " + inputObj.gtvLabels.inLabel + " " + inputObj.gtvLabels.intelcom)
                    )
                );
            }
        }

        if (INTELNAV.jQuery_1_11_1('#simplify-search').size() === 0 || (isSupportSearchBox && INTELNAV.jQuery_1_11_1('.search-box-ics').closest('#simplify-search').length === 0)) {
            dropdown = INTELNAV.jQuery_1_11_1('<div>', {'class': 'predictive-search-dropdown'});
            categoryContainer = INTELNAV.jQuery_1_11_1('<div>', {'class': 'category'});
            // iterate categories
            if (predictiveJson){
                results = predictiveJson.categories[0].results;
                resultsLength = results.length;
                for (j = 0; j < resultsLength; j++) {
                    categoryContainer.append(INTELNAV.jQuery_1_11_1('<a>', {
                        'class': 'result',
                        'tabindex': '1',
                        'href': results[j].url,
                        'text': results[j].title.replace(/<\/?[^>]+>/gi, ''),
                        'data-wap': '{\"method\":\"' + wapMethod + '\",\"keyword\":\"' + results[j].title + '\"}'})
                    );
                }
                dropdown.append(categoryContainer);
            }
            return dropdown;
        } else {
            INTELNAV.jQuery_1_11_1('.predictive-search-dropdown-new').remove();
            dropdown = INTELNAV.jQuery_1_11_1('<div>', {'class': 'predictive-search-dropdown-new component', 'data-component' : 'wa_skip_track', 'data-component-id' : '1'});
            categoryContainer = INTELNAV.jQuery_1_11_1('<div>', {'class': 'results'});
            var resultsAvailable = false;
            // predictive results
            if (predictiveJson && predictiveJson.categories[0]){
                var ulPredictive = INTELNAV.jQuery_1_11_1('<ul>');
                results = predictiveJson.categories[0].results;
                resultsLength = results.length;
                resultsAvailable = true;
                for (j = 0; j < resultsLength; j++) {
                    ulPredictive.append(INTELNAV.jQuery_1_11_1('<li>')
                        .append(INTELNAV.jQuery_1_11_1('<a>', {
                            'class': 'result',
                            'tabindex': '1',
                            'href': results[j].url,
                            'text': results[j].title.replace(/<\/?[^>]+>/gi, '')})
                        )
                    );
                }
                assignUlStructure(ulPredictive);
            } else {
                resultsAvailable = false;
            }
            // filter options
            setCategoryData();
            // iterate categories
            var ul = INTELNAV.jQuery_1_11_1('<ul>', {'class': 'search-line'});
            populateIntelComFilter(ul);
            for (indexCategory = 0; indexCategory < catLength; indexCategory++) {
                assignValuesToProcessCategory();
                var isSupportContextualSearch =  globalSearch.progId === "ics" && categories[indexCategory].categoryName === SUPPORT_FILTER;
                if (resultsLength > 0 && !isSupportContextualSearch) {
                    ul.append(INTELNAV.jQuery_1_11_1('<li>')
                        .append(INTELNAV.jQuery_1_11_1('<a>', {
                            'class': 'search-category',
                            'tabindex': '1',
                            'href': searchResultsBaseUrl + searchText + "&query=" + searchText + "&filters=" + categories[indexCategory].categoryName + "#filters=" + categories[indexCategory].categoryName})
                            .append("<span class='keyword'>" + searchText + "</span> " + inputObj.gtvLabels.inLabel + " <span>" + categories[indexCategory].title + "</span>")

                        )
                    );
                }
            }

            if (catLength > 0 || (contextualizedPrograms.indexOf(globalSearch.progId) > -1 && resultsAvailable)){
                assignUlStructure(ul);
            }

            var predictiveResults = INTELNAV.jQuery_1_11_1('.predictive-search-dropdown-new li a.result');
            if (predictiveResults.length > 0) {
                predictiveResults.each(function (index, result) {
                    INTELNAV.jQuery_1_11_1(result).click(function() {
                        trackPhraseClick(this);
                    });
                });
            }

            var filterOptionResults = INTELNAV.jQuery_1_11_1('.predictive-search-dropdown-new li a.search-category');
            if (filterOptionResults.length > 0) {
                filterOptionResults.each(function (index, result) {
                    INTELNAV.jQuery_1_11_1(result).click(function() {
                        trackFilterOptionClick(this);
                    });
                });
            }
            return "";
        }
    }

    function trackPhraseClick(result) {
        var phrase = INTELNAV.jQuery_1_11_1(result).html();
        try {
            wapPredectiveSearches(phrase);
        } catch (e) {
            console.info('wapPredectiveSearches access issue');
        }
    }

    function trackFilterOptionClick(result) {
        var keyword = INTELNAV.jQuery_1_11_1(INTELNAV.jQuery_1_11_1(result).find('span.keyword')).html();
        var filter = INTELNAV.jQuery_1_11_1(INTELNAV.jQuery_1_11_1(result).find('span')).html();
        try {
            wapFilterSearches(keyword, filter);
        } catch (e) {
            console.info('wapFilterSearches access issue');
        }
    }

    function isUndefined(value) {
        return typeof value === 'undefined';
    }

    function checkSearchText(){
        if(isUndefined(searchText) && isUndefined(previousSearchText)){
            return true;
        }
        if(searchText !== previousSearchText){
            return true;
        }
    }

    function manageDropdownSize() {
        if (!activeDropdown) {
            return false;
        }
        var viewportHeight = INTELNAV.jQuery_1_11_1(window).height(),
            dropdownOffset = activeDropdown.offset().top,
            dropdownHeight = activeDropdown.height(),
            windowScrollTop = INTELNAV.jQuery_1_11_1(window).scrollTop(),
            dropdownBottomMargin = viewportHeight - (dropdownOffset - windowScrollTop + dropdownHeight);
        if (dropdownBottomMargin < 15) {
            activeDropdown.height(dropdownHeight + dropdownBottomMargin - 15);
        }
    }

    function closeDropdown() {
        try {
            if (activeDropdown) {
                activeDropdown.remove();
            }
        }catch(e){
            intel.exception(e);
        }
    }

    function getXhrs(){
        return [xhr, xhr2];
    }

    function getSearchParams() {
        return {'bestMatchUrl': bestMatchUrl, 'bestMatchParams': bestMatchParams, 'suggestedParams': suggestedParams};
    }


    function getTerms() {
        Cookies.json = true;
        var _searchCookie = 'intel_searchTerms';
        var searchedTerms = Cookies.get(_searchCookie);
        if (isUndefined(searchedTerms)) {
            searchedTerms = [];
        }
        else {
            encodingSearchTerms(searchedTerms);
        }
        return searchedTerms;
    }

    function encodingSearchTerms(searchedTerms)
    {
        var len = searchedTerms.length;
        for (var i = 0; i < len; i++) {
            var term = searchedTerms[i].term;
            var decodedterm = decodeURIComponent(term);
            var encodedterm = encodeURIComponent(decodedterm);
            searchedTerms[i].term = encodedterm;
            encodingPage(searchedTerms,i);
        }
    }

    function encodingPage(searchedTerms,i)
    {
        if (searchedTerms[i].pages !== undefined) {
            var pagelen = searchedTerms[i].pages.length;
            for (var j = 0; j < pagelen; j++) {
                var page = searchedTerms[i].pages[j];
                var decodedtitle = decodeURIComponent(page.title);
                var decodedurl = decodeURIComponent(page.url);
                var encodedtitle = encodeURIComponent(decodedtitle);
                var encodedurl = encodeURIComponent(decodedurl);
                searchedTerms[i].pages[j].title = encodedtitle;
                searchedTerms[i].pages[j].url = encodedurl;
            }
        }
    }

    function populateRecentContent(displayedContent) {
        try {
            var $signIn = INTELNAV.jQuery_1_11_1(_classes.signin);
            var isLoggedinDefined = typeof isLoggedin !== 'undefined';
            if (isLoggedinDefined && isLoggedin) {
                $signIn.addClass(_classes.hidden);
            }
            var $searchComponent = INTELNAV.jQuery_1_11_1(_classes.searchComponent);
            var $recentOverlays = $searchComponent.find(_classes.resultsRecent);
            if ($recentOverlays.length < 1) {
                return;
            }
            var $overlayContent = $recentOverlays.find(_classes.overlayContent);
            if (displayedContent) {
                if (isLoggedinDefined && !isLoggedin) {
                    $signIn.removeClass(_classes.hidden);
                }
                $recentOverlays.removeClass(_classes.hidden);
                // remove existing terms on the dom
                $overlayContent.find(_classes.searchedItem).remove();
                var terms = {};
                terms.searchTerms = getTerms();
                if (terms.searchTerms.length) {
                    var $markup = INTELNAV.jQuery_1_11_1(generateSearchTermMockup(terms));

                    setEventHandlersForSearchTerms(terms, $markup);

                    $overlayContent.append($markup);
                    $overlayContent.removeClass(_classes.hidden);
                } else {
                    $overlayContent.addClass(_classes.hidden);
                }
            } else {
                $overlayContent.find(_classes.searchedItem).remove();
                $recentOverlays.addClass(_classes.hidden);
                $signIn.addClass(_classes.hidden);
            }

            var searchedPagesResults = INTELNAV.jQuery_1_11_1('.recent-searches-terms ul.searched-item li a.searched-page');
            if (searchedPagesResults.length > 0) {
                searchedPagesResults.each(function (index, result) {
                    INTELNAV.jQuery_1_11_1(result).click(function () {
                        trackPhraseClick(this);
                    });
                });
            }
        }catch(e){
            intel.exception(e);
        }
    }

    function doClickForTerm() {
        searchRecentTerms(INTELNAV.jQuery_1_11_1(this).text());
    }

    function setEventHandlersForSearchTerms(terms, $markup) {
        // set event handler on elements rather than onclick
        for (var i in terms.searchTerms) {
            if (terms.searchTerms[i] !== undefined) {
                $markup.find("#termId" + i).click(doClickForTerm);
            }
        }
    }

    function generateSearchTermMockup(terms) {
        var mockUp = "";
        for (var i in terms.searchTerms) {
            if (isNaN(i)) {
                continue;
            }
            if (terms.searchTerms[i] !== undefined) {
                mockUp += "\n<ul class=\"" + "searched-item" + "\">\n";
                mockUp += "\n<li><a href=\"#\" class=\"" + "search-link search-link-term" + "\" id=\"termId"+i+"\">";
                mockUp += decodeURIComponent(terms.searchTerms[i].term);
                mockUp += "</a></li>\n";
                var pageIndex = 0;
                var len = terms.searchTerms[i].pages.length;
                while (pageIndex < len) {
                    var pageObj = terms.searchTerms[i].pages[pageIndex];
                    mockUp += "\n<li><a href=\""+ decodeURIComponent(pageObj.url) +"\" class=\"" + _classes.searchedPage + "\" >" + decodeURIComponent(pageObj.title) + "</li>\n";
                    pageIndex++;
                }
                mockUp += "\n</ul>\n";
            }
        }
        return mockUp;
    }


    function getCategoryFilter(categoryName){
        if (categoryName === categorySupport){
            return SUPPORT_FILTER;
        } else {
            return categoryName;
        }
    }

    return {
        initialize: init,
        getSearchParams: getSearchParams,
        setRecentValues : populateRecentContent,
        xHrs: getXhrs
    };

})(INTELNAV.jQuery_1_11_1);

INTELNAV.jQuery_1_11_1(function() {
    INTELNAV.jQuery_1_11_1('#header-btn-clear').attr('type', 'reset');

    // Added for Search - Make Ghost Text of HomePage search box on IE Visible
    var placeholderText = INTELNAV.jQuery_1_11_1("[data-igm-search-input]"),
        placeHolder = "placeholder",
        searchButton = INTELNAV.jQuery_1_11_1('.search-button'),
        searchInput = INTELNAV.jQuery_1_11_1("[data-search-input]");

    INTELNAV.jQuery_1_11_1('.uheadersearch,.nav-right').find('.mobileFirst').removeClass('mobileFirst');

    if (isIE()) {
        placeholderText.keyup(function() {
            if (INTELNAV.jQuery_1_11_1(this).val().length === 0) {
                addPlaceholder();
            }
        });
        placeholderText.keypress(function() {
            appendPlaceholderText("");
        });
        clickSearchField();
    }

    function isIE() {
        var ua = navigator.userAgent,
            is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }

    function addPlaceholder() {
        placeholderText.val(placeholderText.attr(placeHolder)).prop('selectionStart', 0)
            .prop('selectionEnd', 0).css("color", "#bbb");
    }

    function appendPlaceholderText(placeholderValue) {
        if (placeholderText.val() === placeholderText.attr(placeHolder)) {
            placeholderText.val(placeholderValue);
        }
    }

    function clickSearchField() {
        searchButton.click(function() {
            if (searchInput.val().length === 0) {
                setTimeout(function() {
                    addPlaceholder();
                    placeholderText.blur(function() {
                        appendPlaceholderText(INTELNAV.jQuery_1_11_1(this).attr(placeHolder));
                    });
                }, 500);
            }
        });
    }
    intel.searchDropdown.setRecentValues(true);
});

function searchRecentTerms(term) {
    INTELNAV.jQuery_1_11_1("#query, #mobile-search").attr("value", term);
    INTELNAV.jQuery_1_11_1("#toplevelcategory").attr("value", "none");

    try {
        wapRecentSearches(term);
    }catch (e) {
        console.info('wapRecentSearches access issue');
    }


    INTELNAV.jQuery_1_11_1("#hpsform-new").submit();
}

var INTEL_TYPE_AHEAD = INTEL_TYPE_AHEAD || {};
INTELNAV.jQuery_1_11_1(function (){
    INTELNAV.jQuery_1_11_1('#bestMatch, #otherMatch').hide();
    var custEnc=function($sel){
            $sel.val(custCharRplHps($sel.val()));
        },
        $boxes = INTELNAV.jQuery_1_11_1('.typeAheadSearchBox'),
        searchBoxUserVal;

    INTELNAV.jQuery_1_11_1('#hpsform').delegate('input','keypress',function(e){
        var code=(e.keyCode?e.keyCode:e.which);if(code==13){custEnc(INTELNAV.jQuery_1_11_1('#mobile-search'));}
    });

    INTELNAV.jQuery_1_11_1(document).bind('click', function (event) {
        if (INTELNAV.jQuery_1_11_1(event.target).parents("#hpsform, #predictive-search, #hpsform-new").length == 0 && !(INTELNAV.jQuery_1_11_1(event.target).attr('id')=='predictive-search')) {
            INTELNAV.jQuery_1_11_1('#hpsform #predictive-search, #hpsform-new #predictive-search').parent().removeClass('active-search-results');
            INTELNAV.jQuery_1_11_1("#hpsform-new").removeClass("active");
            INTELNAV.jQuery_1_11_1('#hpsform .predictive-search,#predictive-search, #hpsform-new .predictive-search').addClass('hideme');
        }
    });

    $boxes.each(function(){
        var $searchBox = INTELNAV.jQuery_1_11_1(this),
            bestResultsSel = '#bestResults' + " li",
            $bestResults = INTELNAV.jQuery_1_11_1(bestResultsSel),
            otherResultsSel = '#otherResults',
            $otherResults = INTELNAV.jQuery_1_11_1(otherResultsSel),
            $pred = INTELNAV.jQuery_1_11_1('#predictive-search' + ' ul li'),
            $doc = INTELNAV.jQuery_1_11_1(document);


        /* start keyboard navigation */
        $searchBox.focusin(function (e) {
            INTELNAV.jQuery_1_11_1("#hpsform-new").addClass("active");
            $pred.find('a').removeClass('result_hover');
        })
            .keydown(function (e) {
                searchBoxUserVal = $searchBox.val();
                if (e.keyCode == 40) {
                    e.preventDefault();
                    if ($bestResults.children().length) {
                        $bestResults.find('a').focus().addClass('result_hover');
                    } else {
                        $otherResults.find('li:first-child a').focus().addClass('result_hover');
                    }
                } else if (e.keyCode == 38) {
                    $otherResults.find('li:last-child').children('a').focus().addClass('result_hover');
                }
            });
        $doc.delegate(bestResultsSel + ' a.result_hover', 'keydown', function (e) {
            if (e.keyCode == 40) {
                e.preventDefault();
                INTELNAV.jQuery_1_11_1(this).removeClass('result_hover');
                $otherResults.find('li:first-child a').focus().addClass('result_hover');
            } else if (e.keyCode == 38) {
                INTELNAV.jQuery_1_11_1(this).removeClass('result_hover');
                $searchBox.focus();
            }
        });
        $doc.delegate(otherResultsSel + ' li a.result_hover', 'keydown', function (e) {
            if (e.keyCode == 40) {
                e.preventDefault();
                INTELNAV.jQuery_1_11_1(this).removeClass('result_hover');
                INTELNAV.jQuery_1_11_1(this).parent('li').next('li').children('a').focus().addClass('result_hover');
                if (INTELNAV.jQuery_1_11_1(this).parent('li').next('li').html() == null) {
                    $searchBox.focus();
                }
            } else if (e.keyCode == 38) {
                INTELNAV.jQuery_1_11_1(this).parent('li').prev('li').children('a').focus().addClass('result_hover');
                INTELNAV.jQuery_1_11_1(this).removeClass('result_hover');
                if (INTELNAV.jQuery_1_11_1(this).parent('li').prev('li').html() == null) {
                    if ($bestResults.children().length) {
                        $bestResults.find('a').focus().addClass('result_hover');
                    } else {
                        $searchBox.focus();
                    }
                }
            }
        });
        $doc.delegate(bestResultsSel, 'mouseover', function (e) {
            searchBoxUserVal = $searchBox.val();
            $pred.find('a').removeClass('result_hover');
            INTELNAV.jQuery_1_11_1(this).children('a').focus().addClass('result_hover');
            if (searchBoxUserVal !== null) {
                $searchBox.val(searchBoxUserVal);
            }
        });
        $doc.delegate(otherResultsSel + ' li', 'mouseover', function (e) {
            searchBoxUserVal = $searchBox.val();
            $pred.find('a').removeClass('result_hover');
            INTELNAV.jQuery_1_11_1(this).children('a').focus().addClass('result_hover');
            if (searchBoxUserVal !== null) {
                $searchBox.val(searchBoxUserVal);
            }
        }); /* end keyboard navigation */
    });
});
INTEL_TYPE_AHEAD.replaceVal = function(){
    INTELNAV.jQuery_1_11_1('#predictive-search' + ' ul li a').each(function (index) {
        INTELNAV.jQuery_1_11_1(this).focusin(function () {
            var myNewVal = intel.header.isDataValid(INTELNAV.jQuery_1_11_1(this).text());
            INTELNAV.jQuery_1_11_1('#searchBox').val(myNewVal);
        });
    });
};
INTEL_TYPE_AHEAD.processJsonpHPResult = function(respJson, inputObj){
    var isBestMatch,
        searchResults = respJson[0],
        counter,
        $ps = INTELNAV.jQuery_1_11_1("#predictive-search").parent(),
        $ps2 = INTELNAV.jQuery_1_11_1(".predictive-search"),
        href,
        context,
        tab;
    if(searchResults instanceof Array){
        isBestMatch = respJson[1];
    }
    else{
        isBestMatch = false;
        searchResults = respJson;
    }

    counter = searchResults.length > inputObj.count ? inputObj.count : searchResults.length;

    INTELNAV.jQuery_1_11_1("#otherResults, #bestResults li").html('');
    if(searchResults.length == 'undefined' || searchResults.length == 0) {
        $ps.removeClass('active-search-results');
        $ps2.addClass('hideme');
        INTELNAV.jQuery_1_11_1("#hpsform-new").removeClass("active");
    } else {
        $ps2.removeClass('hideme');
        if(isBestMatch== true) {
            INTEL_TYPE_AHEAD.getBestMatch(inputObj);
            if(searchResults.length > 0) {
                INTELNAV.jQuery_1_11_1(".other-match").show();
            }
            else {
                INTELNAV.jQuery_1_11_1(".other-match").hide();
            }
        }
        else {
            INTELNAV.jQuery_1_11_1(".best-match").hide();
            if(searchResults.length > 0) {
                INTELNAV.jQuery_1_11_1(".other-match").show();
            }
        }
        context = INTEL_TYPE_AHEAD.getContextTab('context', inputObj.curCtxt);
        tab = INTEL_TYPE_AHEAD.getContextTab('tab', inputObj.curTab);
        for(k = 0; k < counter; k++) {
            href = INTEL_TYPE_AHEAD.addContextTabs(INTEL_TYPE_AHEAD.langRootPath+"/search.html?keyword=" + encodeURIComponent(searchResults[k].replace(/'/g,'\u02B9').replace(/</g,'\u02C2').replace(/>/g,'\u02C3')), context, tab, inputObj);
            document.getElementById("otherResults").innerHTML += "<li><a  data-wap='{\"method\":\"typeahead\",\"keyword\":\""+ searchResults[k]+ "\"}' href="+ href + ">" + searchResults[k] + "</a></li>";
        }
        INTELNAV.jQuery_1_11_1("#hpsform-new").addClass("active");
        $ps.addClass('active-search-results');
    }
    INTEL_TYPE_AHEAD.replaceVal(); //for keyboard accessibility
};
INTEL_TYPE_AHEAD.getContextTab = function(param, fallback){
    var getQsParam = function(name) {
            name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                results = regex.exec(location.search);
            return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        },
        result = getQsParam(param);
    if(!result.length){
        result = fallback;
    }
    var dropDownContext =INTELNAV.jQuery_1_11_1('#search-menu-select').val();
    if(dropDownContext != null && result!= dropDownContext){
        result = dropDownContext;
    }
    return result;
};
INTEL_TYPE_AHEAD.addContextTabs = function(href, context, tab, inputObj){
    var itc = 'itcblueribbon';
    if(context != null){
        href += ('&context=' + context);
    }
    else if (inputObj.progId === 'edc') {
        href += '&toplevelcategory=Embedded';
    } else if (inputObj.progId === 'itp') {
        href += '&toplevelcategory=ITP';
    } else if (inputObj.progId === itc) {
        href += '&toplevelcategory=' + itc;
    }else if (inputObj.progId === 'ics') {
        href += '&toplevelcategory=Support';
    }else if (inputObj.progId === 'isa') {
        href += '&toplevelcategory=ISA';
    }else if (inputObj.progId === 'iad') {
        href += '&toplevelcategory=Distributors';
    }else if (inputObj.progId === 'lustre') {
        href += '&toplevelcategory=Lustre';
    }else if (inputObj.progId === 'products') {
        href += '&toplevelcategory=Products';
    }else if (inputObj.progId === 'irdc') {
        href += '&toplevelcategory=RDC';
    } else if (inputObj.progId === 'psg') {
        href += '&toplevelcategory=programmable';
    } else if (inputObj.progId === 'supplier') {
        href += '&toplevelcategory=supplier';
    }

    if(tab != null){
        href += ('&tab=' + tab);
    }
    return href;
};
INTEL_TYPE_AHEAD.getBestMatch = function(inputObj) {
    var cb = function(data, xhr){
            if( xhr.status == 200 ) {
                INTEL_TYPE_AHEAD.processBestMatchResults(data, INTEL_TYPE_AHEAD.headingTxt, inputObj);
            }
        },
        params = inputObj.bestMatchParams,
        noInput = inputObj.isSharePointSearchPromote ? params.q4.length<1 : params.q10.length<30;
    if (noInput) {
        INTELNAV.jQuery_1_11_1("#predictive-search").parent().removeClass('active-search-results');
        INTELNAV.jQuery_1_11_1("#hpsform-new").removeClass("active");
        INTELNAV.jQuery_1_11_1(".predictive-search").addClass('hideme');
        return;
    }
    if(INTEL_TYPE_AHEAD.xhr && INTEL_TYPE_AHEAD.xhr.readystate != 4){
        INTEL_TYPE_AHEAD.xhr.abort();
    }
    if(INTEL_TYPE_AHEAD.xhr2){
        INTEL_TYPE_AHEAD.xhr2.abort();
    }
    INTEL_TYPE_AHEAD.xhr = INTELNAV.jQuery_1_11_1.ajax({
        dataType: 'jsonp',
        url: INTEL_TYPE_AHEAD.bestMatchUrl,
        data: params,
        success: function (data, status, xhr) {
            cb(data, xhr);
        },
        error: function (data, status, xhr) {
            cb(data, xhr);
        }
    });
};
INTEL_TYPE_AHEAD.processBestMatchResults = function(respJson, headingText, inputObj){
    var bestResultsDiv = INTELNAV.jQuery_1_11_1("#bestResults"),
        leftColDiv = document.getElementById("leftCol"),
        resultSetArray = respJson.ResultSet,
        fieldsList = resultSetArray ? resultSetArray[0] : {};
    bestResultsDiv.innerHTML = "";
    leftColDiv.innerHTML = "";
    if(fieldsList.IsFeaturedResult){
        if (resultSetArray != null && resultSetArray.length > 0) {
            if (fieldsList != null && fieldsList != 'undefined') {
                //leftColDiv.innerHTML += "<h4>"+headingText+"</h4>";
                var fields = fieldsList.FieldList;
                var title = "",
                    description = "",
                    link = "",
                    thumbnailURL = "",
                    box = document.getElementById("mobile-search") || document.getElementById("searchBox");
                for(var i = 0; i < fields.length; i++) {
                    if(fields[i].FieldName == "title" || fields[i].FieldName == "sptitle") {
                        title = fields[i].FieldValue;
                    }
                    else if(fields[i].FieldName == "description") {
                        description = fields[i].FieldValue;
                    }
                    else if(fields[i].FieldName == "url"){
                        link = INTELNAV.cqHost+ fields[i].FieldValue;
                    }
                    else if(fields[i].FieldName == "thumbnailurl") {
                        thumbnailURL = fields[i].FieldValue;
                    }
                }
                if(description != null && description.length > 160) {
                    description = description.substring(0, 160);
                }
                //bestResultsDiv.innerHTML += "<a data-wap='{\"method\":\"featured\",\"keyword\":\""+box.value+"\"}' >" + title + "</a>";
                bestResultsDiv.html("<a data-wap='{\"method\":\"featured\",\"keyword\":\""+box.value+"\"}' >" + title + "</a>");
                link = (link.indexOf("?") > -1) ? link + "&wapkw="+ box.value : link + "?wapkw="+ box.value,
                    INTELNAV.jQuery_1_11_1('#bestResults a').attr('href',link );
                if (description != null) {
                    //bestResultsDiv.innerHTML +="<p>" + description + "</p>";
                    bestResultsDiv.html(bestResultsDiv.html() + "<p>" + description + "</p>");
                }
                if (thumbnailURL != null) {
                    if(thumbnailURL.indexOf("/content/dam/") > -1) {
                        leftColDiv.innerHTML += "<img src='" + INTELNAV.cqHost+ thumbnailURL +".rendition.cq5dam.thumbnail.64.64.png'></img>";
                    }
                    else {
                        leftColDiv.innerHTML += "<img src='" + INTELNAV.cqHost+ thumbnailURL +  "'></img>";
                    }
                }
                INTELNAV.jQuery_1_11_1(".best-match").show();
            }
        }
    }
};
INTEL_TYPE_AHEAD.getTypeAhead = function(inputObj) {
    var cb = function(data, xhr){
            if( xhr.status == 200 ) {
                INTEL_TYPE_AHEAD.processJsonpHPResult(data, inputObj);
            }
        },
        params = inputObj.params;
    if (params.searchPhrase.length==0) {
        INTELNAV.jQuery_1_11_1("#predictive-search").parent().removeClass('active-search-results');
        INTELNAV.jQuery_1_11_1("#hpsform-new").removeClass("active");
        INTELNAV.jQuery_1_11_1(".predictive-search").addClass('hideme');
        return;
    }
    if(INTEL_TYPE_AHEAD.xhr && INTEL_TYPE_AHEAD.xhr.readystate != 4){
        INTEL_TYPE_AHEAD.xhr.abort();
    }
    if(INTEL_TYPE_AHEAD.xhr2){
        INTEL_TYPE_AHEAD.xhr2.abort();
    }
    INTEL_TYPE_AHEAD.xhr = INTELNAV.jQuery_1_11_1.ajax({
        dataType: 'jsonp',
        url: INTEL_TYPE_AHEAD.typeAheadUrl,
        data: params,
        success: function (data, status, xhr) {
            cb(data, xhr);
        },
        error: function (data, status, xhr) {
            cb(data, xhr);
        }
    });
};
INTEL_TYPE_AHEAD.onSubmitHps = function(searchText, languageRootPath, locale) {

    INTEL_TYPE_AHEAD.searchParamObj = (typeof(globalSearch) === 'undefined' ? INTEL_TYPE_AHEAD.searchParamObj : globalSearch);

    var $sb = INTELNAV.jQuery_1_11_1('#mobile-search');
    $sb.val(custCharRplHps($sb.val()));
    var boxVal = document.getElementById("mobile-search").value,
        hpsForm = document.getElementById("hpsform-new"),
        context = INTEL_TYPE_AHEAD.getContextTab('context', INTEL_TYPE_AHEAD.searchParamObj.curCtxt),
        tab = INTEL_TYPE_AHEAD.getContextTab('tab', INTEL_TYPE_AHEAD.searchParamObj.curTab),
        href = languageRootPath+'/search.html?keyword=' + encodeURIComponent(boxVal) + '&locale=' + encodeURIComponent('+locale+');
    //suppress analytics errors
    try{
        waTrackSearch(document.getElementById(boxVal, 'text', '')); //analytic tracking - do not remove
    }
    catch(e){}
    if(boxVal==searchText){
        var action = languageRootPath+'/search.html';
        hpsForm.action = action;
    }
    href = INTEL_TYPE_AHEAD.addContextTabs(href, context, tab, INTEL_TYPE_AHEAD.searchParamObj);
    var index = href, indexAux;
    index = href.indexOf("context");
    indexAux = href.indexOf("&tab") == -1 ? href.length : href.indexOf("&tab");
    if(index != -1){

        context = href.substr(index+8, indexAux-index);
    }else
    {
        index = href.indexOf("toplevelcategory");
        if(index != -1){
            context = href.substr(index+17, href.length-index);
        }
    }
    if(context!=null){
        INTELNAV.jQuery_1_11_1("#toplevelcategory").attr("value", context);
    }
    INTELNAV.jQuery_1_11_1("#query").attr("value", boxVal);
    return intel.getSearchState();
};
function custCharRplHps(p){
    return p.replace(/</g,'\u02C2').replace(/>/g,'\u02C3');
}
'use strict';

var intel = intel || {};
intel.featureTest = (function () {

    function init() {
        try {
            Modernizr.addTest('ipad', function () {
                return !!navigator.userAgent.match(/iPad/i);
            });

            Modernizr.addTest('iphone', function () {
                return !!navigator.userAgent.match(/iPhone/i);
            });

            Modernizr.addTest('ipod', function () {
                return !!navigator.userAgent.match(/iPod/i);
            });

            Modernizr.addTest('appleios', function () {
                return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
            });
        }catch(e){
            intel.exception(e);
        }
    }


	return {
		initialize: init
	};

})(INTELNAV.jQuery_1_11_1);

INTELNAV.jQuery_1_11_1(document).ready(intel.featureTest.initialize);



INTELNAV.jQuery_1_11_1(window).on("load", function(){
    //Code for Language Selector written under load function
    try {
        var lanselectorContent = INTELNAV.jQuery_1_11_1('#language-accordion');
        if(INTELNAV.jQuery_1_11_1('.dropdown.locale-selector').find('#language-accordion').length <= 0){
            INTELNAV.jQuery_1_11_1('.dropdown.locale-selector').append(lanselectorContent);
        }
    }catch(e){
        intel.exception(e);
    }
});
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();

/**
 * ezMark (Minified) - A Simple Checkbox and Radio button Styling plugin. This plugin allows you to use a custom Image for 
 * Checkbox or Radio button. Its very simple, small and easy to use.
 * 
 * Copyright (c) Abdullah Rubiyath <http://www.itsalif.info/>.
 * Released under MIT License
 * 
 * @author Abdullah Rubiyath
 * @version 1.0
 * @date June 27, 2010
 */
(function(){INTELNAV.jQuery_1_11_1.fn.ezMark=function(options){options=options||{};var defaultOpt={checkboxCls:options.checkboxCls||'ez-checkbox',radioCls:options.radioCls||'ez-radio',checkedCls:options.checkedCls||'ez-checked',selectedCls:options.selectedCls||'ez-selected',hideCls:'ez-hide'};return this.each(function(){var $this=INTELNAV.jQuery_1_11_1(this);var wrapTag=$this.attr('type')=='checkbox'?'<div class="'+defaultOpt.checkboxCls+'">':'<div class="'+defaultOpt.radioCls+'">';if($this.attr('type')=='checkbox'){$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function(){if(INTELNAV.jQuery_1_11_1(this).is(':checked')){INTELNAV.jQuery_1_11_1(this).parent().addClass(defaultOpt.checkedCls);}
else{INTELNAV.jQuery_1_11_1(this).parent().removeClass(defaultOpt.checkedCls);}});if($this.is(':checked')){$this.parent().addClass(defaultOpt.checkedCls);}}
else if($this.attr('type')=='radio'){$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function(){INTELNAV.jQuery_1_11_1('input[name="'+INTELNAV.jQuery_1_11_1(this).attr('name')+'"]').each(function(){if(INTELNAV.jQuery_1_11_1(this).is(':checked')){INTELNAV.jQuery_1_11_1(this).parent().addClass(defaultOpt.selectedCls);}else{INTELNAV.jQuery_1_11_1(this).parent().removeClass(defaultOpt.selectedCls);}});});if($this.is(':checked')){$this.parent().addClass(defaultOpt.selectedCls);}}});}})(INTELNAV.jQuery_1_11_1);

var intel = intel || {};


intel.changePassword = (function () {

    var HOMEPAGE_PATH = "homepage.html";

    function getParameterByName(name)
    {
        try {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)",
                regex = new RegExp(regexS),
                results = regex.exec(window.location.search);
            if(results== null)
                return null ;
            else
                return results;
        }catch(e){
            intel.exception(e);
        }
    }

    function getRedirectParam()
    {
        try {
            var result='',
                params = getParameterByName('redirect');
            if(params != null)
            {
                result = params[0].substr(1);
            }
            return result
        }catch(e){
            intel.exception(e);
        }
    }

    function getRedirectValue()
    {
        try {
            var result='',
                params = getParameterByName('redirect');
            if(params == null)
            {
                params = getParameterByName('target');
            }
            if(params != null)
            {
                result = params[1];
            }
            return result
        }catch(e){
            intel.exception(e);
        }
    }

    function getRedirectHomepageURL(basePath)
    {
        try {
            var currentURL = window.location.href;
            currentURL = 'redirect='+currentURL.split('.html')[0];
            return currentURL.replace(basePath,HOMEPAGE_PATH);
        }catch(e){
            intel.exception(e);
        }
    }

    function redirect()
    {
        try {
            var parameters = getParameterByName('redirect'),
                changePswdPath ='my-intel/change-password.success',
                currentURL = window.location.href,
                url;
            currentURL = currentURL.split('.html')[0];

            if(parameters != null)
            {
                url = decodeURIComponent(parameters[1]);
            }
            else
            {
                url = currentURL.replace(changePswdPath,HOMEPAGE_PATH);
            }
            window.location.href = url;
        }catch(e){
            intel.exception(e);
        }
    }

    return {
        getParameterByName: getParameterByName,
        getRedirectParam: getRedirectParam,
        getRedirectValue: getRedirectValue,
        getRedirectHomepageURL: getRedirectHomepageURL,
        redirect : redirect
        };

})();

var intel = intel || {};

intel.header = (function () {
    function init() {
        try {
            targetDataCookie();

            if (typeof globalHeader !== 'undefined') {
                loadMenuAsync();

                if (location.search.indexOf("?expired=") >= 0 || !isLoggedin && (document.cookie.indexOf('INTEL-REMEMBER-ME') == -1)) {
                    INTELNAV.jQuery_1_11_1(".sign-in-link-new .link").html(globalHeader.signInText);
                }
                else {
                    INTELNAV.jQuery_1_11_1(".sign-in-link-new .link").html(globalHeader.myProfileText + "<span class='down-arrow'></span>");
                }
            }
            INTELNAV.jQuery_1_11_1(".login-register form > input:first").focus();

            //set searchType query parameter for https://cdiext.intel.com/cdi/Edesign-infodesk/SearchResults.aspx for cdisearch program identifier
            if (typeof globalSearch !== 'undefined' && (globalSearch.progId == 'cdisearch' || globalSearch.progId === 'mysmgsearch')) {
                INTELNAV.jQuery_1_11_1("#hpsform-new").submit(function () {
                    var searchText = INTELNAV.jQuery_1_11_1("#mobile-search").val(),
                        searchType = INTELNAV.jQuery_1_11_1("#searchType");
                    if (INTELNAV.jQuery_1_11_1.isNumeric(searchText)) {
                        searchType.val("docid");
                    } else {
                        searchType.val("terms");
                    }
                });
            }

            if (typeof globalHeader !== 'undefined') {
                var signinURL = globalHeader.currentPath + ".signin.html?redirect=" + globalHeader.currentPath + ".html&locale=" + globalHeader.lanloc;
                var forgotRedirect = intel.changePassword.getRedirectValue();
                if (forgotRedirect.length > 0) {
                    signinURL += "&forgotPwdRedirect=" + forgotRedirect;
                }
                if (location.search.indexOf("?expired=") >= 0) {
                    signinURL += "&expired=false";
                }

                INTELNAV.jQuery_1_11_1(".sign-in-link-new .link").bind("click", function () {

                    var parentObj = INTELNAV.jQuery_1_11_1(".sign-in-link-new .link").parent();
                    if (parentObj.hasClass("open")) {  //** Exit right away if pop-up is already open
                        return true;
                    }

                    INTELNAV.jQuery_1_11_1.ajaxSetup({
                        cache: false
                    });

                    var showUserMenuOptions = function () {
                        INTELNAV.jQuery_1_11_1.ajax(signinURL)
                            .done(function (data) {
                                var desktopSigninMenu = INTELNAV.jQuery_1_11_1("#desktop-sign-in-menu");
                                desktopSigninMenu.html(data);
                                INTELNAV.jQuery_1_11_1("#uname-error, #pwd-error").hide();
                                intel.emulateIE8.emulatePlaceHolderIE8();
                                desktopSigninMenu.find("#desktop-sign-in #mobile-sign-in-username").focus();})
                            .fail(function (xhr, response) {
                                console.log(xhr);
                                console.log(response);
                            });
                    };

                    showUserMenuOptions();
                });
                var pageUrl = window.location.pathname;
                var queryString = window.location.search;
                var EDC_NEWREG_COOKIE = "edc_newreg";

                if ((isLoggedin) && (pageUrl.toLowerCase().indexOf("/intelligent-systems") > -1 || (queryString != null && queryString.toLowerCase

                    ().indexOf("lstsites=embedded") > -1)) && readCookie(EDC_NEWREG_COOKIE) != null && readCookie(EDC_NEWREG_COOKIE) != "") {


                    eraseCookie(EDC_NEWREG_COOKIE);
                    window.location.href = globalHeader.helpformurl;
                }
            }
        }catch(e){
            intel.exception(e);
        }
    }

    function textEncoder(textVal) {
        try {
            return INTELNAV.jQuery_1_11_1.trim(textVal).replace(/[a-zA-Z]/g, function (character) {
                return String.fromCharCode(
                    (character <= "Z" ? 90 : 122) >= (character = character.charCodeAt(0) + 13) ? character : character - 26
                );
            });
        }catch(e){
            intel.exception(e);
        }
    }

    function isDataValid(val) {
        try {
            var pattMatch = val.search(/<script[\d\D]*?>[\d\D]*?/i);
            if (pattMatch == -1)
                return val;
            else
                return "";
        }catch(e){
            intel.exception(e);
        }
    }

    function initMobileSignin() {

        try {
            var signinMobileURL = globalHeader.currentPath+".signin.html?redirect=" + globalHeader.currentPath + ".html&locale=" + globalHeader.lanloc;
            var forgotRedirect = intel.changePassword.getRedirectValue();
            if (forgotRedirect.length > 0) {
                signinMobileURL += "&forgotPwdRedirect="+forgotRedirect;
            }
            if (location.search.indexOf("?expired=") >= 0) {
                signinMobileURL += "&expired=false";
            }
            INTELNAV.jQuery_1_11_1("#drawer-1-login").bind("click", function () {
                INTELNAV.jQuery_1_11_1.ajax(signinMobileURL)
                    .done(function (data) {
                        var mobileSigninContent = INTELNAV.jQuery_1_11_1("#mobile-signin-content");
                        mobileSigninContent.html(data);
                        INTELNAV.jQuery_1_11_1("#mobile-uname-error, #mobile-pwd-error").hide();
                        mobileSigninContent.find("#mobile-sign-in-username").focus();
                    }).fail(function(xhr, response) {
                    console.log(xhr);
                    console.log(response);
                });
            });
            var pageUrl = window.location.pathname;
            var queryString = window.location.search;
            var EDC_NEWREG_COOKIE = "edc_newreg";

            if ((isLoggedin) && (pageUrl.toLowerCase().indexOf("/intelligent-systems") > -1 || (queryString != null && queryString.toLowerCase

                ().indexOf("lstsites=embedded") > -1)) && readCookie(EDC_NEWREG_COOKIE) != null && readCookie(EDC_NEWREG_COOKIE) != "") {


                eraseCookie(EDC_NEWREG_COOKIE);
                window.location.href = globalHeader.helpformurl;
            }
        }catch(e){
            intel.exception(e);
        }

    }

    /**
     * @desc For SM authenticated users missing target, make one attempt to get it
     */
    function targetDataCookie()  {
        INTELNAV.jQuery_1_11_1(function(){
            var isSecure    = (location.protocol === "https:");
            var needsTarget = (document.cookie.indexOf("SMSESSION") !== -1 && document.cookie.indexOf("targetData") === -1);
            var onceOnly    = (document.cookie.indexOf("targetloaded") === -1);
            var pathName = window.location.pathname.replace(".html","");
            if ( isSecure && needsTarget && onceOnly) {
                INTELNAV.jQuery_1_11_1.ajax({
                    url: "/libs/apps/intel/login.json/targetdata"
                    ,cache: false
                    ,data: {path : pathName}
                    ,type: "GET"
                    ,async: true
                }).complete( function() {
                    document.cookie = "targetloaded=1; expires=0; domain=.intel.com; path=/";
                });
            }
        });
    }

    function loadMenuAsync2()  {
        var pageUrl = window.location.pathname;
        var queryString = window.location.search;
        var EDC_NEWREG_COOKIE = "edc_newreg";
        var hasSubMenu = globalHeader.subMenuPath && globalHeader.subMenuPath !== "";
        if ((isLoggedin) && (pageUrl.toLowerCase().indexOf("/intelligent-systems") > -1 || (queryString != null && queryString.toLowerCase().indexOf("lstsites=embedded") > -1)) && readCookie(EDC_NEWREG_COOKIE) != null && readCookie(EDC_NEWREG_COOKIE) != "") {
            eraseCookie(EDC_NEWREG_COOKIE);
            window.location.href = globalHeader.helpformurl;
        }

        INTELNAV.jQuery_1_11_1.get(globalHeader.megaMenuPath + ".out.html", function(data) {
            INTELNAV.jQuery_1_11_1('.mega-menu-content').append(data);
            var linksSecure = INTELNAV.jQuery_1_11_1('[data-secure-link=true]');
            var linksAnonymous = INTELNAV.jQuery_1_11_1('[data-secure-link=false]');
            if (isLoggedin) {
                linksAnonymous.each(function (item) {
                    INTELNAV.jQuery_1_11_1(linksAnonymous[item]).hide();
                });
            } else {
                linksSecure.each(function (item) {
                    INTELNAV.jQuery_1_11_1(linksSecure[item]).hide();
                });
            }
        }).success(function(){
            if (hasSubMenu) {
                loadSubnavigationMenu();
            }
        }).always(function(){
            if (!hasSubMenu) {
                INTELNAV.jQuery_1_11_1(document).trigger(intel.events.megaMenu.load);
                INTELNAV.jQuery_1_11_1('.rwd .header-simplify div.nav-left.mobileFirst').removeClass('mobileFirst');
            }
        });
    }

    function loadSubnavigationMenu() {
        INTELNAV.jQuery_1_11_1.get(globalHeader.subMenuPath + ".out.html", function(data){

            var newTabElement = INTELNAV.jQuery_1_11_1(data).find(".nav-tabs.component li.active");

            var newTabText = INTELNAV.jQuery_1_11_1(newTabElement).find("a").html();
            var secondaryButton = INTELNAV.jQuery_1_11_1('<button class="sel-menu" data-text="' + newTabText + '" data-sec-nav-target="#menu-secondary">' + newTabText + '</button>');
            var hamburgerIcon = INTELNAV.jQuery_1_11_1(".hamburger.icon");
            hamburgerIcon.wrap('<div class="hamburger" data-toggle="mega-menu" data-target="#menu-secondary" tabindex="0"></div>');
            hamburgerIcon.removeClass("hidden-md hidden-lg hidden-xl");
            INTELNAV.jQuery_1_11_1(secondaryButton).insertAfter(".hamburger.icon");
            INTELNAV.jQuery_1_11_1('.main-navbar .content ul').removeClass("hidden-xs hidden-sm");
            INTELNAV.jQuery_1_11_1('.main-navbar .content ul').addClass("spreadmenu hidden");

            INTELNAV.jQuery_1_11_1(newTabElement).find("a").attr("href", "#menu-secondary");
            INTELNAV.jQuery_1_11_1('.nav-tabs.component li').removeClass("active");
            INTELNAV.jQuery_1_11_1('.nav-tabs.component').prepend(newTabElement);

            var newTabElementContent = INTELNAV.jQuery_1_11_1(data).find(".modal-body .tab-content .tab-pane.active");
            INTELNAV.jQuery_1_11_1('.modal-body .tab-content .tab-pane').removeClass("active");
            INTELNAV.jQuery_1_11_1(newTabElementContent).attr("id", "menu-secondary");

            var newTabElementLinks = INTELNAV.jQuery_1_11_1(newTabElementContent).find("ul li a.flyout-control");
            INTELNAV.jQuery_1_11_1(newTabElementLinks).each(function (item) {
                modifyAttribute(newTabElementLinks[item], "href");
            });
            var newTabElementPanels = INTELNAV.jQuery_1_11_1(newTabElementContent).find("div.flyout-panel");
            INTELNAV.jQuery_1_11_1(newTabElementPanels).each(function (item) {
                modifyAttribute(newTabElementPanels[item], "id");
            });

            INTELNAV.jQuery_1_11_1('.modal-body .tab-content').prepend(newTabElementContent);

            function modifyAttribute(element, attr) {
                INTELNAV.jQuery_1_11_1(element).attr(attr, INTELNAV.jQuery_1_11_1(element).attr(attr)+"-secondary");
            }

        }).always(function(){
            INTELNAV.jQuery_1_11_1(document).trigger(intel.events.megaMenu.load);
            manageSubNavigationSeparation();
            INTELNAV.jQuery_1_11_1('.rwd .header-simplify div.nav-left.mobileFirst').removeClass('mobileFirst');
        });
    }

    function manageSubNavigationSeparation() {
        var element = INTELNAV.jQuery_1_11_1(document).find("div.modal-header.flyout-panel-block-header.force-background");
        var ul = INTELNAV.jQuery_1_11_1(element).find("ul.nav-tabs");
        var tabs = INTELNAV.jQuery_1_11_1(ul).find("li");
        //Margins to create space for the separation of subNav
        var margin = 35;
        //Padding for separate the sub nav tab from the others
        var paddingFirstTab = 30;
        if(tabs !== undefined){
            INTELNAV.jQuery_1_11_1(ul).css("margin-left", "" + - margin + "px");
            INTELNAV.jQuery_1_11_1.each(tabs, function(index, value){
                //Main tab of subnavigation
                if(index === 0){
                    INTELNAV.jQuery_1_11_1(value).css("padding-left", "" + margin + "px");
                    INTELNAV.jQuery_1_11_1(value).css("padding-right", "" + paddingFirstTab + "px");
                    INTELNAV.jQuery_1_11_1(value).click( function() {
                        INTELNAV.jQuery_1_11_1(element).removeClass("subNavigationHeader");
                        INTELNAV.jQuery_1_11_1(element).addClass("subNavigationSecondary");
                        INTELNAV.jQuery_1_11_1(value).removeClass("subNavigationSecondary");
                        INTELNAV.jQuery_1_11_1(value).addClass("subNavigationHeader");
                    });
                }
                //Other tabs in the menu
                else {
                    INTELNAV.jQuery_1_11_1(value).click( function() {
                        INTELNAV.jQuery_1_11_1(element).removeClass("subNavigationSecondary");
                        INTELNAV.jQuery_1_11_1(element).addClass("subNavigationHeader");
                        INTELNAV.jQuery_1_11_1(tabs[0]).removeClass("subNavigationHeader");
                        INTELNAV.jQuery_1_11_1(tabs[0]).addClass("subNavigationSecondary");
                    });
                }
            });
        }
    }

    INTELNAV.jQuery_1_11_1(window).on('hashchange',function(){
        if(INTELNAV.jQuery_1_11_1('.intro-text-component, .chat, .blade-list, .responsive-table-component, .blade-videos, .blade-content-list, .storytelling-component, .blade-category-lineup, .blade-featured-content, .blade-itemized').length){
            var hashId = window.location.hash;
            if(hashId && hashId.length>1){
                hashId = hashId.substring(1);
                var index = hashId.search(/^[\w-]*$/);
                if(index!=-1){
                    var target = INTELNAV.jQuery_1_11_1('#'+hashId);
                    if (target.length) {
                        INTELNAV.jQuery_1_11_1('html,body').animate({
                            scrollTop: target.offset().top - 60
                        }, 500);
                    }
                }
            }
        }
    });

    window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() {
        if(INTELNAV.jQuery_1_11_1('.intro-text-component, .chat, .blade-list, .responsive-table-component, .blade-videos, .blade-content-list, .storytelling-component, .blade-category-lineup, .blade-featured-content, .blade-itemized').length){
            INTELNAV.jQuery_1_11_1(window).trigger('hashchange');
        }
    });

    var bCoveArray = [];
    INTELNAV.jQuery_1_11_1(window).on('orientationchange',function(){
        INTELNAV.jQuery_1_11_1.each(bCoveArray, function(index, value){
            var valueExperience = INTELNAV.jQuery_1_11_1('#'+value.experience.id),
                resizeWidth = valueExperience.parents(".video-player-max-width").width(),
                resizeHeight = valueExperience.parents(".video-player-max-width").height();
            if (value.experience.type == "html") {
                value.setSize(resizeWidth, resizeHeight);
            }

        });
    });

    return {
        initialize: init,
        initMobileSignin: initMobileSignin,
        textEncoder: textEncoder,
        isDataValid: isDataValid
    };

})(INTELNAV.jQuery_1_11_1);

window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() { intel.header.initialize(); });

var intel = intel || {};

intel.buttonClear = (function() {
    function init(searchBox, buttonClear){
        searchBox.on("keyup", function(){
            try {
                var searchField = INTELNAV.jQuery_1_11_1(this);
                if (searchField.val().length !== 0)
                    buttonClear.show();
                else
                    buttonClear.hide();
            }catch(e){
                intel.exception(e);
            }
        });
        buttonClear.on("click", function(){
            try {
                searchBox.val('').keyup();
                INTELNAV.jQuery_1_11_1(this).hide();
                return false;
            }catch(e){
                intel.exception(e);
            }
        });
    }

    return {
        initialize: init
    };

})(INTELNAV.jQuery_1_11_1);

intel.searchSettings = (function (){
    if (typeof globalSearch !== 'undefined') {
        var globalHomePageSearch = globalSearch,
            itcContext = 'itcblueribbon',
            itpContext = 'itp',
            edcContext = 'edc',
            irdcContext = 'irdc',
            icsContext = 'ics',
            isaContext = 'isa',
            distiContext = 'iad',
            lustreContext = 'lustre',
            productContext = 'products',
            embed = 'Target Audience/Embedded Developers & Engineers',
            embedEMT = 'Audience/Business/IoT Channel Hardware Engineer',
            itp = 'Program Level/Intel\u00AE Technology Provider',
            itpEMT = 'Partner Program/ITP (Intel\u00AE Technology Provider Program)',
            itc = 'Target Audience/IT Managers',
            itcEMT = 'Audience/Business/IT Manager',
            ics = 'Support',
            icsFilter = 'Target Audience/Support',
            isaFilter = 'Program Level/Intel\u00AE Internet of Things Solutions Alliance',
            isaFilterEMT = 'Partner Program/ISA (Intel\u00AE Internet of Things Solutions Alliance)',
            distiFilter = 'Target Audience/Distributors',
            distiFilterEMT = 'Partner Type/Distributor',
            lustreFilter = 'Program Level/Lustre* Reseller Portal',
            lustreFilterEMT = 'Partner Program/Lustre* Reseller Program',
            productsFilter = 'Intel Product',
            ctxtIndicator = INTELNAV.jQuery_1_11_1('#ctxtIndicator').val(),
            toplevelcategory = INTELNAV.jQuery_1_11_1('#toplevelcategory').val(),
            hasEmbedFlag = INTELNAV.jQuery_1_11_1.trim(toplevelcategory) === embed || INTELNAV.jQuery_1_11_1.trim(toplevelcategory) === embedEMT,
            isEmbed = (hasEmbedFlag || globalHomePageSearch.progId === edcContext || ctxtIndicator === embed || ctxtIndicator === embedEMT),
            isITP = (globalHomePageSearch.progId === itpContext || ctxtIndicator === itp || ctxtIndicator === itpEMT),
            isITC = (globalHomePageSearch.progId === itcContext),
            isIRDC = (globalHomePageSearch.progId === irdcContext),
            isSharePointSearchPromote = globalHomePageSearch.sharePointSearchPromote,
            isICS = (globalHomePageSearch.progId === icsContext),
            isISA = (globalHomePageSearch.progId === isaContext),
            isDisti = (globalHomePageSearch.progId === distiContext),
            isLustre = (globalHomePageSearch.progId === lustreContext),
            isProducts = (globalHomePageSearch.progId === productContext),
            useCustomRdcAssetsDataSource = typeof globalHomePageSearch.rdcContentDataSource === "string" && globalHomePageSearch.rdcContentDataSource.length > 0,
            curCtxt = INTELNAV.jQuery_1_11_1('#search-menu-select').val(),
            curTab = INTELNAV.jQuery_1_11_1('#curTab').val(),
            qry,
            context,
            baseQuery = globalHomePageSearch.baseSearchQuery,
            queryPart1 = 'reimaginetoplevelcategory:"',
            queryPart2 = '" AND ',
            queryPart3 = 'AND (reimaginetoplevelcategory:"',
            queryPart4 = '"))',
            setNotProgramFilter = function(programFilter) {
                return 'NOT ' + queryPart1 + programFilter + '"';
            },
            notISA = setNotProgramFilter(isaFilter),
            notDisti = setNotProgramFilter(distiFilter),
            notLustre = setNotProgramFilter(lustreFilter),
            notISAEMT = setNotProgramFilter(isaFilterEMT),
            notDistiEMT = setNotProgramFilter(distiFilterEMT),
            notLustreEMT = setNotProgramFilter(lustreFilterEMT),
            rdcAssetsDataSource = useCustomRdcAssetsDataSource ? ' AND env:"any|' +  globalHomePageSearch.rdcContentDataSource + '"' : '',
            rdcQuery = rdcAssetsDataSource;
        var setBasicProgramFilter = function(programFilter) {
            return queryPart1 + programFilter + queryPart2 + baseQuery + notISA + notDisti + notLustre + rdcQuery;
        };

        var setBasicProgramFilterEMT = function(programFilter) {
            return queryPart1 + programFilter + queryPart2 + baseQuery + notISAEMT + notDistiEMT + notLustreEMT + rdcQuery;
        };

        var setSecureProgramFilter = function(programFilter, notFilters) {
            return queryPart1 + programFilter + queryPart2 + baseQuery + notFilters + rdcQuery;
        };
        if(isIRDC){
            context = irdcContext;
        }
        else if(isEmbed){
            context = edcContext;
        }
        else if(isITP){
            context = itpContext;
        }
        else if (isITC) {
            context = itcContext;
        }
        else if (isICS){
            context = icsContext;
        }
        else if (isISA){
            context = isaContext;
        }
        else if (isDisti){
            context = distiContext;
        }
        else if (isLustre){
            context = lustreContext;
        }else if(isProducts){
            context = productContext;
        }
        if (isSharePointSearchPromote) {
            if (!globalHomePageSearch.useEMTTags) {
                notISA = ' ' + notISA;
                notDisti = ' ' + notDisti;
                notLustre = ' ' + notLustre;
                if (isEmbed) {
                    qry = setBasicProgramFilter(embed);
                }
                else if (isITP) {
                    qry = setBasicProgramFilter(itp);
                }
                else if (isITC) {
                    qry = setBasicProgramFilter(itc);
                }
                else if (isICS) {
                    qry = setBasicProgramFilter(icsFilter);
                }
                else if (isISA) {
                    qry = setSecureProgramFilter(isaFilter, notDisti + notLustre);
                }
                else if (isDisti) {
                    qry = setSecureProgramFilter(distiFilter, notISA + notLustre);
                }
                else if (isLustre) {
                    qry = setSecureProgramFilter(lustreFilter, notISA + notDisti);
                }
                else if (isProducts) {
                    qry = setSecureProgramFilter(productsFilter, notISA + notDisti);
                }
                else {
                    qry = baseQuery + notISA + notDisti + notLustre + rdcQuery;
                }
            } else {
                notISAEMT = ' ' + notISAEMT;
                notDistiEMT = ' ' + notDistiEMT;
                notLustreEMT = ' ' + notLustreEMT;
                if (isEmbed) {
                    qry = setBasicProgramFilterEMT(embedEMT);
                }
                else if (isITP) {
                    qry = setBasicProgramFilterEMT(itpEMT);
                }
                else if (isITC) {
                    qry = setBasicProgramFilterEMT(itcEMT);
                }
                else if (isICS) {
                    qry = setBasicProgramFilterEMT(icsFilter);
                }
                else if (isISA) {
                    qry = setSecureProgramFilter(isaFilterEMT, notDistiEMT + notLustreEMT);
                }
                else if (isDisti) {
                    qry = setSecureProgramFilter(distiFilterEMT, notISAEMT + notLustreEMT);
                }
                else if (isLustre) {
                    qry = setSecureProgramFilter(lustreFilterEMT, notISAEMT + notDistiEMT);
                }
                else if (isProducts) {
                    qry = setSecureProgramFilter(productsFilter, notISAEMT + notDistiEMT);
                }
                else {
                    qry = baseQuery + notISAEMT + notDistiEMT + notLustreEMT + rdcQuery;
                }
            }
        }
        else {
            notISA = 'AND' + notISA + ' ';
            notDisti = 'AND' + notDisti + ' ';
            notLustre = 'AND' + notLustre + ' ';
            if (isEmbed) {
                qry = baseQuery + notISA + notDisti + notLustre + queryPart3 + embed + queryPart4;
            }
            else if (isITP) {
                qry = baseQuery + notISA + notDisti + notLustre + queryPart3 + itp + queryPart4;
            }
            else if (isITC) {
                qry = baseQuery + notISA + notDisti + notLustre + queryPart3 + itc + queryPart4;
            }
            else if (isICS) {
                qry = baseQuery + notISA + notDisti + notLustre + queryPart3 + icsFilter + queryPart4;
            }
            else if (isISA) {
                qry = baseQuery + notDisti + notLustre + queryPart3 + isaFilter + queryPart4;
            }
            else if (isDisti) {
                qry = baseQuery + notISA + notLustre + queryPart3 + distiFilter + queryPart4;
            }
            else if (isLustre) {
                qry = baseQuery + notISA + notDisti + queryPart3 + lustreFilter + queryPart4;
            }else if (isProducts) {
                qry = baseQuery + notISA + notDisti + queryPart3 + productsFilter + queryPart4;
            }
            else {
                qry = baseQuery + notISA + notDisti + notLustre + ')';
            }
        }
        var configSearch = {
            langRootPath: globalHomePageSearch.langRootPath,
            headingTxt: globalHomePageSearch.headingTxt,
            locale: globalHomePageSearch.locale,
            typeAheadUrl: globalHomePageSearch.typeAheadUrl,
            bestMatchUrl: globalHomePageSearch.bestMatchUrl,
            isSharePointSearchPromote: globalHomePageSearch.sharePointSearchPromote,
            curCtxt: curCtxt,
            curTab: curTab,
            progId: context,
            typeAheadDefaults: {
                m: 'GetTypeAheadSuggestions',
                languageCode: globalHomePageSearch.locale,
                includeBestMatch: true,
                searchRealm: globalHomePageSearch.searchRealm
            },
            bestMatchDefaults: {
                q1: globalHomePageSearch.bestMatchQ1,
                q2: globalHomePageSearch.bestMatchQ2,
                q3: '1',
                q11: globalHomePageSearch.bestMatchQ11,
                q14: qry,
                q23: '^',
                q28: 'true',
                q30: 'yes'
            },
            gtvLabels: globalHomePageSearch.gtvLabels,
            mobileResults: globalHomePageSearch.mobileResults,
            laptopResults: globalHomePageSearch.laptopResults
        };
        intel.searchDropdown.initialize(configSearch);
    }

});
window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() { intel.searchSettings(); });
'use strict';

var intel = intel || {};
intel.generateGLS = (function () {
    var data,
        source,
        template;

    function init(dataGls) {
        try {
            data = dataGls;
            generateDesktopGLS();
        }catch(e) {
            intel.exception(e);
        }
    }

    function generateDesktopGLS(){
        source = INTELNAV.jQuery_1_11_1("#entry-template").html();
        template = Handlebars.compile(source);
        INTELNAV.jQuery_1_11_1('.dropdown.locale-selector').append(template(data));
    }

    function createMobileGLS(){
        try {
            var list_drawer2 = {},
                list_drawer3 = {};

            list_drawer2['mobileHomepageTitle'] = data['mobileHomepageTitle'];
            list_drawer2['mobileSelectTitle'] = data['mobileSelectTitle'];

            if (data['alsoAvail']) {

                var temp = data['sections'][0]['locale'];
                var sortedList = [];

                for (var i = 0; i < temp.length; i++) {
                    for (var j = 0; j < temp[i]['languageList'].length; j++) {
                        sortedList.push(temp[i]['languageList'][j]);
                    }
                }

                sortedList.sort(function (a, b) {
                    if (a.label > b.label) {
                        return 1;
                    }
                    if (a.label < b.label) {
                        return -1;
                    }
                    return 0;
                });

                list_drawer2['mobileAvailableTitle'] = data['mobileAvailableTitle'];
                list_drawer2['list'] = sortedList;

                list_drawer3 = data['sections'][1]['locale'];
            }
            else {
                list_drawer3 = data['sections'][0]['locale'];
            }

            source = INTELNAV.jQuery_1_11_1("#drawer-2-generate").html();
            template = Handlebars.compile(source);
            INTELNAV.jQuery_1_11_1('.drawer.drawer-level-2').append(template(list_drawer2));

            source = INTELNAV.jQuery_1_11_1("#drawer-3-generate").html();
            template = Handlebars.compile(source);
            INTELNAV.jQuery_1_11_1('.drawer.drawer-level-3').append(template(list_drawer3));
        }catch(e){
            intel.exception(e);
        }
    }

    return {
        initialize : init,
		createMobileGLS : createMobileGLS,
		createDesktopGLS : generateDesktopGLS
    };
})(INTELNAV.jQuery_1_11_1);



if (typeof window.console === "undefined"){
    window.console = {};
    window.console.log = function(){return;};
}

var intel = intel || {};
intel.appCore = (function() {
    var resizeTimeout = null;
    var resizeHandlers = [];

    var scrollTimeout = null;
    var scrollHandlers = [];

    var browserInfo = {
        isIE: false,
        version: -1
    };

    var _checkBrowserInfo = function() {
        if (Modernizr.isie) {
            browserInfo.isIE = true;
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            browserInfo.version = -1;
            if (re.exec(ua) != null) {
                browserInfo.version = parseFloat( RegExp.$1 );
            }
        }
    };

    var init = function() {
        window.picturefill();

        _checkBrowserInfo();

        if(INTELNAV.jQuery_1_11_1("body.pattern-library").length) {
            INTELNAV.jQuery_1_11_1("body").on("rf.patternLib.variantShown", function () {
                try {
                    //Masonry fix for pageload
                    INTELNAV.jQuery_1_11_1(".blade-conversations:visible .js-masonry").masonry();
                    //SlidingGallery fix for hidden galleries
                    intel.slidingGallery.refresh();
                    //multiImageBlade fix for hidden galleries
                    intel.multiImageBlade.refresh();
                    intel.toggleBlade.reset();
                    //Scrolltracker needs to update its list of targets
                    intel.scrollTracker && intel.scrollTracker.setTargets();
                    intel.tabBlade.refresh();
                }catch (e){
                    intel.exception(e);
                }
            });
        }


        resizeEventHandling();

        scrollEventHandling();
    };
    function resizeEventHandling(){
        //Performant resize handling
        INTELNAV.jQuery_1_11_1(window).on("resize", function (e) {
            if (resizeTimeout) {
                window.clearTimeout(resizeTimeout);
            }

            resizeTimeout = window.setTimeout(function () {
                    var len = resizeHandlers.length;
                    for (var i = 0; i < len; i++) {
                        (resizeHandlers[i])();
                    }
                },
                150);
        });
    }
    function scrollEventHandling(){
        //Performant scroll handling
        INTELNAV.jQuery_1_11_1(window).on("scroll", function () {
            if (scrollTimeout) {
                window.clearTimeout(scrollTimeout);
            }

            scrollTimeout = window.setTimeout(function () {
                    var len = scrollHandlers.length;
                    for (var i = 0; i < len; i++) {
                        (scrollHandlers[i])();
                    }
                },
                150);
        });
    }


    var registerResizeHandler = function(fn){
        if(typeof fn === "function"){
            resizeHandlers.push(fn);
        }
        else{
            throw new Error("Cannot register new resize handler. Argument fn must be a function.");
        }
    };

    var registerScrollHandler = function(fn){
        if(typeof fn === "function"){
            scrollHandlers.push(fn);
        }
        else{
            throw new Error("Cannot register new Scroll handler. Argument fn must be a function.");
        }
    };

    var getBrowserInfo = function() {
        return browserInfo;
    };


    return {
        init: init,
        registerResizeHandler: registerResizeHandler,
        registerScrollHandler: registerScrollHandler,
        getBrowserInfo: getBrowserInfo
    }
})(INTELNAV.jQuery_1_11_1);


window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() {
    try {
        intel.appCore.init();
    }catch(e){
        intel.exception(e);
    }
});


/**
 * Intel.elementToggler
 *
 * Searches for elements with the data-intel-element-toggler attribute. Uses the value of that attribute to specify
 * a target. The attribute can be any valid jQuery selector. This will work for more than one target element.
 *
 * For browsers that don't support CSS3 transitions, this merely toggles a toggler-active class on both the toggl"er"
 * and the toggl"ee". Default styles may or may not be applied to the given elements, but should be overidable so keep
 * them as simple/non-specific as possible.
 *
 * For browsers supporting CSS3 transitions, transitions are used. This is done by animating the height of the added
 * wrapper element on each target.
 *
 * data-intel-element-toggler-state is an optional attribute to start with the elements in the "active" state. Otherwise they will
 * start in the "inactive" state. "active" is equivalent to "open".
 */
'use strict';

var intel = intel || {};
intel.elementToggler = (function () {

	var instances;
	var togglerClass = "intel-element-toggler";
	var targetClass = "intel-element-toggler-target";
	var activeClass = "intel-element-toggler-active";
	var inactiveClass = "intel-element-toggler-inactive";
	var animToActiveClass = "intel-element-toggler-anim-to-active";
	var animToInactiveClass = "intel-element-toggler-anim-to-inactive";
	var hasTransitions = false;



    function init() {
        try {
            hasTransitions = INTELNAV.jQuery_1_11_1("html.csstransitions").length > 0;

            instances = INTELNAV.jQuery_1_11_1("[data-intel-element-toggler]");

            instances.each(function () {
                var e = INTELNAV.jQuery_1_11_1(this);
                var targetEl = getInstanceTarget(this);
                var target;
                var elements;
                var c;

                //Require there to actually be a target element
                if (targetEl.length > 0) {
                    targetEl.wrap("<div class='" + targetClass + "'></div>");
                    target = targetEl.closest("." + targetClass);
                    elements = e.add(target);
                    c = e.data("intel-element-toggler-state") === "active" ? activeClass : inactiveClass;

                    //Adds classes to represent current state
                    elements.addClass(c);
                    e.addClass(togglerClass);
                    target.addClass(targetClass);
                    e.on("click", clickHandler);
                    //Listen for enable/disable requests. This will make the component act as if there is not toggler,
                    //which allows for things like certain breakpoints to "shut off" the toggler, etc.
                    e.on("intel.elementToggler.disableRequest", disableRequestHandler);
                    e.on("intel.elementToggler.enableRequest", enableRequestHandler);

                    if (hasTransitions) {
                        target.on("transitionend", transitionEndHandler);
                    }
                }
            });

            INTELNAV.jQuery_1_11_1(".toggler-cloak").removeClass("toggler-cloak");
        }catch(e){
            intel.exception(e);
        }
    }



	/**
	 * Retrieves the target for this toggler instance
	 * @param instance
	 * @returns {*}
	 */
	function getInstanceTarget(instance){
		var target = INTELNAV.jQuery_1_11_1(INTELNAV.jQuery_1_11_1(instance).data("intel-element-toggler"));
		return target.length ? target : INTELNAV.jQuery_1_11_1(instance).closest(".expand-collapse-component").find(".expand-collapse-target");
	}



	/**
	 * Sets the height for the div being animated
	 * @param t     target  (animation target)
	 * @param p     Parent of target (outer element)
	 */
	function setHeight(t, p){
		var target = t;
		//Expand if active
		if (p.hasClass(activeClass)) {
			var h = 0;
			target.addClass(animToActiveClass);
			target.children("*").each(function () {
				h += INTELNAV.jQuery_1_11_1(this).outerHeight();
			});
			target.css("height", h + "px");
		}
		//Contract if inactive
		else {
			target.addClass(animToInactiveClass);
			var currentH = target.outerHeight();
			//Need to explicitly set height to current container height otherwise the height will be set before
			//a recalc is finished, eliminating the transition.
			callbackWithoutTransition(target, function(){
				target.css("height", currentH);
			});
			target.css("height", 0);
		}
	}



    /**
     * Requests to enable the element are handled ehre
     */
    function enableRequestHandler(){
        try {
            var e = INTELNAV.jQuery_1_11_1(this);
            var target = INTELNAV.jQuery_1_11_1(e.data("intel-element-toggler")).closest("." + targetClass);
            target.removeClass("disabled");
        }catch(e){
            intel.exception(e);
        }
    }



    /**
     * Requests to disable the element are handled ehre
     */
    function disableRequestHandler(){
        try {
            var e = INTELNAV.jQuery_1_11_1(this);
            var target = INTELNAV.jQuery_1_11_1(e.data("intel-element-toggler")).closest("." + targetClass);
            target.addClass("disabled");
        }catch(e){
            intel.exception(e);
        }
    }



    /**
     * Toggle active class/inactive class for both elements
     */
    function clickHandler() {
        try{
            var e = INTELNAV.jQuery_1_11_1(this);
            var target = getInstanceTarget(this).closest("." + targetClass);

            //Old browsers won't support transitions, so just toggle the targets.
            if (!hasTransitions) {
                target.add(e).toggleClass(activeClass + " " + inactiveClass);
            }
            else {
                e.toggleClass(activeClass + " " + inactiveClass);
                target.each(function () {
                    if (INTELNAV.jQuery_1_11_1(this).hasClass(animToActiveClass) || INTELNAV.jQuery_1_11_1(this).hasClass(animToInactiveClass)) {
                        INTELNAV.jQuery_1_11_1(this).toggleClass(activeClass + " " + inactiveClass).removeClass(animToActiveClass + " " + animToInactiveClass);
                    }
                    -setHeight(INTELNAV.jQuery_1_11_1(this), e);
                });
            }
        }catch(e){
            intel.exception(e);
        }
    }



	function callbackWithoutTransition(e, callback){
		var cachedTransition = e.css("transition-property");
		e.css("transition-property", "none");
		(callback)();
		e.outerHeight();
		e.css("transition-property", cachedTransition);
	}



    /**
     * If transitions are enabled, we need to handle "resetting" the element from "transition mode".
     */
    function transitionEndHandler(event) {
        //Transition needs to pertain to the expand/collapse element itself.
        try {
            if (event.originalEvent.target !== this) {
                return;
            }
            var e = INTELNAV.jQuery_1_11_1(this);
            callbackWithoutTransition(e, function () {
                e.toggleClass(activeClass + " " + inactiveClass).removeClass(animToActiveClass + " " + animToInactiveClass);
                //Eliminate the currently set height, leaving the css rules to be inherited back onto the element. This is
                //critical since we need "auto" to be the height when the element is not in transition.
                e.css("height", "");
            });
        }catch(e){
            intel.exception(e);
        }
    }



	return {
		initialize: init
	};

})(INTELNAV.jQuery_1_11_1);

window.waitFor.add(function() {return typeof GAAT40.HTMLContentMenu !== 'undefined'}, function() {intel.elementToggler.initialize;});



// events.js
'use strict';

var intel = intel || {};

intel.events = {
  form: {
    valid: "form:validation.valid",
    invalid: "form:validation.invalid"
  },
  flyoutControlPanel: {
    panelCloseAll: "flyoutControlPanel:close.all"
  },
  megaMenu: {
    signInMenu: "signInMenu",
    signInOpen: "megaMenu:signin.open",
    searchOpen: "megaMenu:search.open",
    menuOpen: "megaMenu:menu.open",
    closeAll: "megaMenu:close.all",
    load: "megaMenu:load"
  }
};

'use strict';

var intel = intel || {};
intel.flyoutPanel = (function () {

  var _elements = {
    flyoutControlPanel: null,
    flyoutContent: null
  };

  var _classes = {
    panelClosed: "flyout-panel-closed",
    panelOpen: "flyout-panel-open",
    flyoutContent: "flyout-panel-block",  // root
    flyoutHeader: "flyout-panel-block-header",
    panelControl: "flyout-control-panel",
    flyoutPanel: "flyout-panel",
    controlListing: "flyout-control-listing"
  };

  function init() {
    _elements.flyoutContent = INTELNAV.jQuery_1_11_1("." + _classes.flyoutContent);
    _elements.flyoutControlPanel = INTELNAV.jQuery_1_11_1("." + _classes.panelControl);

    // loop throught the root element of flyout-content-block
    _elements.flyoutContent.each(function(index, flyoutContent) {
      flyoutContent = INTELNAV.jQuery_1_11_1(flyoutContent);
      var flyoutControlPanels = flyoutContent.find("." + _classes.panelControl);
      _initControlPanel(flyoutControlPanels, flyoutContent);
    });

    intel.appCore.registerResizeHandler(_resizeHandler);
  }

  function _initControlPanel(flyoutControlPanels, flyoutContent) {
    flyoutControlPanels.each(function(panelIndex, panelControl) {
      var $panelControl = INTELNAV.jQuery_1_11_1(panelControl);
      var allPanels = $panelControl.find("." + _classes.flyoutPanel);
      _addFlyoutControl($panelControl, allPanels, flyoutContent);
    });
  }

  function closeAllFlyoutPalnels (controlPanel, flyoutContent) {
    controlPanel = INTELNAV.jQuery_1_11_1(controlPanel);
    flyoutContent = INTELNAV.jQuery_1_11_1(flyoutContent);
    if (controlPanel.length) {
      controlPanel.find("." + _classes.flyoutPanel).removeClass(_classes.panelOpen).addClass(_classes.panelClosed);
    }

    if(flyoutContent.length) {
      flyoutContent.css("height", "");
    }
  }

  function _addFlyoutControl (thisPanel, allPanels, flyoutContent) {
    // add click event on each flyout-control-panel
    thisPanel.on("click", "[data-toggle='flyout']", function(evt) {
      INTELNAV.jQuery_1_11_1(".modal-expose-menu").scrollTop(0);
      INTELNAV.jQuery_1_11_1('.lang-selector').hide();
      allPanels.addClass(_classes.panelClosed).removeClass(_classes.panelOpen);
       INTELNAV.jQuery_1_11_1(this.hash).removeClass(_classes.panelClosed).addClass(_classes.panelOpen);
       _setHeight(INTELNAV.jQuery_1_11_1(this.hash), flyoutContent);
       evt.preventDefault();
       return false;
    });

    INTELNAV.jQuery_1_11_1(thisPanel).find(".flyout-panel").on("click", ".close-flyout", function(evt) {
      INTELNAV.jQuery_1_11_1(evt.delegateTarget).removeClass(_classes.panelOpen).addClass(_classes.panelClosed);
      INTELNAV.jQuery_1_11_1(flyoutContent).css("height", "");
      INTELNAV.jQuery_1_11_1('.lang-selector').show();
      evt.preventDefault();
      return false;
    });

    _elements.flyoutControlPanel.on(intel.events.flyoutControlPanel.panelCloseAll, function(evt, data) {
      closeAllFlyoutPalnels(this, data.flyoutContent);
    });
  }

  function _setHeight(flyoutPanel, flyoutContent) {
    INTELNAV.jQuery_1_11_1(flyoutContent).css("height", ""); // remove any existing inline style set ht
    var flyoutHeader = INTELNAV.jQuery_1_11_1(flyoutContent).find("." + _classes.flyoutHeader);
    var headerHt = (flyoutHeader) ? flyoutHeader.outerHeight(true) : 0;
    var panelHt = INTELNAV.jQuery_1_11_1(flyoutPanel).outerHeight(true) + headerHt;
    var contentHt = INTELNAV.jQuery_1_11_1(flyoutContent).outerHeight(true);
    if(contentHt < panelHt) {
      INTELNAV.jQuery_1_11_1(flyoutContent).height(panelHt);
    }
  }

  function _resizeHandler() {
    _elements.flyoutContent.filter(":visible").each(function(index, flyoutContent) {
      var openPanel = INTELNAV.jQuery_1_11_1(flyoutContent).find("." + _classes.panelOpen);
      if(openPanel.length) {
        _setHeight(openPanel, flyoutContent);
      }
    });
  }

  return {
    initialize: init,
    closeAllFlyoutPalnels: closeAllFlyoutPalnels
  };
})(INTELNAV.jQuery_1_11_1);

INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.load, intel.flyoutPanel.initialize);

'use strict';

var intel = intel || {};
var currenthandlerBarIndex = 0;
intel.generateSimplifyGLS = (function () {
    var data,
        source,
        template;

    function init(dataGls) {
        data = dataGls;
        generateGLS();
        checkCnGeo();
    }

    function generateGLS() {
        source = INTELNAV.jQuery_1_11_1("#gls-template").html();
        template = Handlebars.compile(source);
        INTELNAV.jQuery_1_11_1('#modal-language-selector').append(template(data));
    }

    function checkCnGeo() {
        var url = INTELNAV.jQuery_1_11_1(location).attr('href');
        var arraySecondaryLinks = INTELNAV.jQuery_1_11_1("#footerSecondaryLinks");

        if (url.indexOf("www.intel.com/content/www/cn/zh/") > 0) {
            arraySecondaryLinks.find("li").each(function () {
                var text = INTELNAV.jQuery_1_11_1(this).find("a").text();
                text = text.trim();

                if ((text.indexOf("ICP") >= 0) && (text.indexOf("14036123") >= 0) && (text.substr(text.length - 2) === "-2")) {
                    var a = text.replace(/.$/, "1");
                    INTELNAV.jQuery_1_11_1(this).find("a").text(a);
                }
            });
        }
        if (url.indexOf("www.intel.cn/content/www/cn/zh/") > 0) {
            arraySecondaryLinks.find("li").each(function () {
                var text = INTELNAV.jQuery_1_11_1(this).find("a").text();
                text = text.trim();
                if ((text.indexOf("ICP") >= 0) && (text.indexOf("14036123") >= 0) && ((text.substr(text.length - 2) === "-2")||(text.substr(text.length - 2) === "-1"))) {
                    var a = text.replace("14036123", "18006294");
                    a = a.replace(/.$/, "1");
                    INTELNAV.jQuery_1_11_1(this).find("a").text(a);
                }
            });
        }
    }

    function setPreLangIETFCookie() {
        var $modalLanguageSelector = INTELNAV.jQuery_1_11_1('#modal-language-selector');
        updateLatinAmericaUrls($modalLanguageSelector);
        $modalLanguageSelector.find('li.lang-option a').click(function () {
            var $this = INTELNAV.jQuery_1_11_1(this);
            var dataLocale = $this.attr('data-locale');
            var splitTokens = dataLocale.split('_');
            var preLangCookieValue = splitTokens[0].toLowerCase() + '-' + splitTokens[1].toUpperCase();
            createSecureCookie(90, 'PrefLangIETF', preLangCookieValue);
            createGeoLocationCookie(dataLocale, $this);
        });
    }

    function updateLatinAmericaUrls($modalLanguageSelector) {
        //for updating href's with countrylabel params for ex_xl locale countries.
        $modalLanguageSelector.find('a[data-locale="es_xl"], a[data-locale="en_xa"]').each(function () {
            var $this = INTELNAV.jQuery_1_11_1(this),
                currentString = getCountryNameFromString($this.text());
            var updatedHref = updateQueryStringParameter($this.attr('href'), 'countrylabel', currentString);
            $this.attr('href', updatedHref);
        });
    }

    function getCountryNameFromString(currentString) {
        currentString = currentString.split('(');
        if (currentString && currentString.length > 0) {
            currentString = INTELNAV.jQuery_1_11_1.trim(currentString[0]);
        }
        return currentString;
    }

    function createGeoLocationCookie(dataLocale, $this) {
        //this cookie is for Latin America specific locales
        if (dataLocale === "es_xl") {
            var currentString = getCountryNameFromString($this.text());
            if (currentString) {
                setGeoLocaleCookie(currentString);
            }
        }
    }

    function setGeoLocaleCookie(value) {
        document.cookie = "geolocale=" + value + '; secure; path=/';
    }

    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }

    function getUrlParameter(urlParam) {
        var currentPagePath = location.search.split('?');
        if (currentPagePath.length > 1) {
            var urlVariables = currentPagePath[1].split('&');
            for (var i = 0; i < urlVariables.length; i++) {
                var sParameterName = urlVariables[i].split('=');
                if (sParameterName[0] === urlParam) {
                    return sParameterName[1];
                }
            }
        }
        return '';
    }

    function setGeoLocaleCookieFromUrl() {
        var selectedCountryLabel = getUrlParameter('countrylabel');
        if (selectedCountryLabel && selectedCountryLabel.length > 0) {
            setGeoLocaleCookie(selectedCountryLabel);
        }
    }

    function createSecureCookie(expires, cookieName, cookieValue) {
        var domain = '.intel.com';
        var today = new Date();
        today.setTime(today.getTime());

        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(today.getTime() + (expires));
        var secureAttr = window.location.protocol === "https:" ? "; secure" : "";
        document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) +
            '; expires=' + expires_date.toUTCString() + '; path=/' +
            '; domain=' + domain + secureAttr;
    }

    return {
        initialize: init,
        createGLS: generateGLS,
        setPreLangIETFCookie: setPreLangIETFCookie,
        setGeoLocaleCookie: setGeoLocaleCookieFromUrl
    };
})(INTELNAV.jQuery_1_11_1);
Handlebars.registerHelper("regionNames", function (languageList, index_count, text) {
    for (var index = 0; index < languageList.length; index++) {
        if (languageList[index].localelink) {
            return new Handlebars.SafeString('<li><a href="#geo-' + index_count + '" data-toggle="flyout" class="flyout-control">' + text + '<span class="icon-caret fa-angle-right"></span></a></li>');
        }
    }
});
Handlebars.registerHelper("storeIndex", function (index_count) {
    currenthandlerBarIndex = index_count;
});
Handlebars.registerHelper("getIndex", function () {
    return currenthandlerBarIndex;
});

Handlebars.registerHelper('if_ne', function (a, b, c, d, opts) {
    if (a !== b || c !== d) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

INTELNAV.jQuery_1_11_1(document).ready(function () {
    if (typeof langSelectData !== 'undefined') {
        intel.generateSimplifyGLS.initialize(langSelectData);
    }
    if (INTELNAV.jQuery_1_11_1('#modal-language-selector').length) {
        intel.generateSimplifyGLS.setPreLangIETFCookie();
    }
    intel.generateSimplifyGLS.setGeoLocaleCookie();
});


'use strict';

var intel = intel || {};

intel.GlobalMenuController = (function () {


    var $tabObjs,
        width = getScreenWidth(),
        landscapevalidation = window.innerHeight < window.innerWidth,
        marginLeft = "margin-left",
        introToolTipArrowSelector = '.introjs-tooltip .introjs-arrow.top',
        introToolTipSelector = '.introjs-tooltip';

    //Track state for given control components.
    var _state = {
        login: false,
        search: false,
        menuActive: false,
        loginActive: false,
        menuInteractedWith: false,
        allowSubmit: false
    };

    var _elements = {
        body: null,
        searchControl: null,
        searchContent: null,
        openTarget: null
    };

    var _classes = {
        active: "active",
        loggedIn: "logged-in",
        open: "open",
        noTransition: "no-transition",
        fade: "fade",
        searchActive: "global-menu-search-active",
        statesLogin: "states-login",
        flyoutContent: "flyout-panel-block",
        transparent: "transparent",
        transparentScrolled: "transparent-scrolled",
        megaMenuOpen: "mega-menu-open",
        megaMenuContent: "modal-content",
        searchContent: "search-content"
    };

    var introjsVariable = {
        helperLayer: '.introjs-helperLayer',
        overLay: '.introjs-overlay',
        datasearch: '[data-igm-search-content]',
        prevButton: '.introjs-prevbuttonhint',
        nextButton: '.introjs-nextbuttonhint',
        tooltipReferenceLayer: '.introjs-tooltipReferenceLayer',
        tooltip: introToolTipSelector


    };

    var hintPositionVariable = {
        dataPosition: "data-position",
        positionLeft: "left",
        positonBottom: "bottom",
        background: "background-color",
        myintel: 'a[href="#my-intel"]'
    };

    var stepNumber = '1';
    var previousStepNumber = '1';
    var bulletClicked = false;
    var introToolTipPreference = ".introjs-tooltipReferenceLayer .introjs-tooltip";
    function clearSearchResults() {
        INTELNAV.jQuery_1_11_1("#header-btn-clear").bind("click", function () {
            INTELNAV.jQuery_1_11_1('.predictive-search-dropdown-new').remove();
        });
    }

    function setTimeOutFunction() {
        setTimeout(function () {
            INTELNAV.jQuery_1_11_1('#mobile-search').focus();
        }, 10);
    }

    function setBackgroundWhite() {
        INTELNAV.jQuery_1_11_1(introjsVariable.helperLayer).css(hintPositionVariable.background, "white");
    }

    function setBackgroundTransparent() {
        INTELNAV.jQuery_1_11_1(introjsVariable.helperLayer).css(hintPositionVariable.background, _classes.transparent);
    }

    function setToolTipPosition() {
        INTELNAV.jQuery_1_11_1(introToolTipPreference).width(width - 75);
    }
    function ipadToolTipPosition(){
        var $toolTipPref = INTELNAV.jQuery_1_11_1(introToolTipPreference);
        $toolTipPref.width(width - 460);
        $toolTipPref.css(marginLeft, "-319px");
    }
    function step3ToolTipPosition(){
        var $toolTipPref = INTELNAV.jQuery_1_11_1(introToolTipPreference);
        if ((landscapevalidation) && (width === 740)) {
            $toolTipPref.css(marginLeft, "-11px");
            INTELNAV.jQuery_1_11_1(window).scrollTop("550");

        }

        else if ((landscapevalidation) && ((width > 732) && (width < 740))) {
            $toolTipPref.css(marginLeft, "8px");
            INTELNAV.jQuery_1_11_1(window).scrollTop("350");
        }
        else if ((landscapevalidation) && ((width > 541) && (width < 700))) {
            INTELNAV.jQuery_1_11_1(window).scrollTop("350");
        }
    }

    function iphoneXresize() {
        var $toolTipPref = INTELNAV.jQuery_1_11_1(introToolTipPreference);
        if (width < 375 && width > 300) {
            $toolTipPref.css(marginLeft, "7px");

        }
    }

    function iphoneXstep4landscape() {
        setTimeout(function () {
            var $toolTipPrefLandscape = INTELNAV.jQuery_1_11_1(introToolTipPreference);
            if ((landscapevalidation) && ((width > 500) && (width < 620))) {
                INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(marginLeft, "117px");
                $toolTipPrefLandscape.css(marginLeft, "-113px");
            }
        }, 260);

    }

    function step5LandscapeScrolling() {

        if (window.innerHeight < window.innerWidth) {

            INTELNAV.jQuery_1_11_1('html,body').animate({scrollTop: INTELNAV.jQuery_1_11_1("#my-support .ags-buttons-section").offset().top - 100});
        }
    }
    function landscapeOrientation(){

        if (window.innerHeight < window.innerWidth){
            var $toolTipPref = INTELNAV.jQuery_1_11_1(introToolTipPreference);
            $toolTipPref.css({"position":"fixed",marginLeft:"16px"});
        }
    }

    function landscapeVisual() {
        if (window.innerHeight < window.innerWidth) {
            INTELNAV.jQuery_1_11_1(window).scrollTop("10");
        }
    }

    function step4LanscapeOrientation(){
        var $toolTipPref = INTELNAV.jQuery_1_11_1(introToolTipPreference);
        if ((landscapevalidation) && ((width < 700))) {
            $toolTipPref.css(marginLeft,"-235px");
        }
        else if ((landscapevalidation) && ((width > 700) && (width < 739))) {
            INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(marginLeft, "296px");
            $toolTipPref.css(marginLeft, "-289px");
        }
        else if ((landscapevalidation) && ((width > 740) && (width < 768))) {
            $toolTipPref.css(marginLeft, "-302px");
            INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(marginLeft, "301px");
        }
    }

    function landscapeStep4Resize() {
        if ((landscapevalidation) && (width === 740)) {
            INTELNAV.jQuery_1_11_1(introToolTipPreference).css(marginLeft, "-295px");
            INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(marginLeft,"310px");

        }
        else if ((landscapevalidation) && ((width > 650) && (width < 729))) {
            INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(marginLeft, "246px");
        }
    }

    function crossButtonPosition(){
        INTELNAV.jQuery_1_11_1(".introjs-skipbutton").css({"position": "absolute", "right": "6px"});

    }

    function setHintBackGround(number) {
        setTimeout(function () {
            if (getScreenWidth() < 768) {
                if (number === 2) {
                    setBackgroundWhite();
                } else {
                    setBackgroundTransparent();
                }
            }
            else {
                if (number >= 2) {
                    setBackgroundWhite();
                    if (number === 4) {
                        INTELNAV.jQuery_1_11_1(introjsVariable.helperLayer).css("height", getAgsButtonHeight());
                    }
                }
                else {
                    setBackgroundTransparent();
                }
            }
        }, 100);
    }

    function checkHintingClass(targetElem, myhintingClass, backbutton) {
        return (targetElem.hasClass(myhintingClass) || backbutton === 2);
    }

    function setPositionToHint(position) {
        if (INTELNAV.jQuery_1_11_1(hintPositionVariable.myintel).length > 0) {
            INTELNAV.jQuery_1_11_1(hintPositionVariable.myintel).parent().attr(hintPositionVariable.dataPosition, position);
        }
        INTELNAV.jQuery_1_11_1('span[data-step="3"]').attr(hintPositionVariable.dataPosition, position);
        INTELNAV.jQuery_1_11_1('span[data-step="4"]').attr(hintPositionVariable.dataPosition, position);
    }

    function stepOneSizeFormatter() {
        if (getScreenWidth() < 768) {
            setToolTipPosition();
            landscapeOrientation();
            crossButtonPosition();
            INTELNAV.jQuery_1_11_1(introToolTipSelector).css(hintPositionVariable.positionLeft, "-3px");
        }
        if(width >= 768  && width < 981){
            ipadToolTipPosition();
            crossButtonPosition();

        }
    }

    function setOffScreen(numberBack) {
        if (numberBack === 4 && getScreenWidth() < 768) {
            INTELNAV.jQuery_1_11_1('#my-support').addClass('off-screen');
        }
    }

    function addPositionToHint() {
        if (getScreenWidth() >= 768) {
            setPositionToHint(hintPositionVariable.positionLeft);
        }
        if (getScreenWidth() < 768) {
            setPositionToHint(hintPositionVariable.positonBottom);
        }
    }

    function setZindex() {
        INTELNAV.jQuery_1_11_1(".introjs-overlay, .introjs-skipbutton").on("click", function () {
            INTELNAV.jQuery_1_11_1('.global-menu-simplify').css("z-index", "1030");
        });
    }

    function startIntrojs(targetElem, backbutton) {
        if (targetElem.attr('id')=== 'myintelHinting' || backbutton === 2) {
            executeInitialInto();
        }
    }

    function executeInitialInto(){
        addPositionToHint();
        if (introJs()) {
            introJs().exit(true);
            introJs().start();
            setZindex();
        }
        var disabledjs = '.introjs-disabled';
        if (INTELNAV.jQuery_1_11_1(disabledjs).length > 0) {
            INTELNAV.jQuery_1_11_1(disabledjs).hide();
        }
        setHintBackGround();

        INTELNAV.jQuery_1_11_1('.dashboardNav').resize(function () {
            setResize();
        });
    }

    function getScreenWidth() {
        return INTELNAV.jQuery_1_11_1(window).width();
    }

    function getIntroJsStepNumber() {
        return parseInt(INTELNAV.jQuery_1_11_1('.introjs-helperNumberLayer').text());
    }

    function getAgsButtonHeight() {
        return INTELNAV.jQuery_1_11_1('.ags-buttons-section').height();
    }

    function goToStepNumber(step) {
        if (introJs()) {
            introJs().goToStepNumber(step).start();
            setZindex();
        }
    }

    function toolTipAndPosition() {
        INTELNAV.jQuery_1_11_1(introToolTipSelector).css(hintPositionVariable.positionLeft, "-348px");
        INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(hintPositionVariable.positionLeft, "360px");
    }


    function nextButtonFunction() {
        INTELNAV.jQuery_1_11_1(document).on('click', introjsVariable.nextButton, function () {
            var number;
            number = bulletClicked ? stepNumber : getIntroJsStepNumber();
            bulletClicked = false;
            setHintBackGround(number);
            handleStep1and2(number);
            if (number === 3) {
                INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
                INTELNAV.jQuery_1_11_1('#my-support').removeClass('off-screen');
                introJs().exit(true);
                openSupportTab();
                goToStepNumber(4);
                INTELNAV.jQuery_1_11_1('my-support').find('.fa-ellipsis').trigger('click');
                INTELNAV.jQuery_1_11_1(window).scrollTop("230");
                iphoneXresize();
                iphoneXstep4landscape();
                if (width < 768) {
                    step4LanscapeOrientation();
                    landscapeStep4Resize();
                    setToolTipPosition();
                    toolTipAndPosition();
                    INTELNAV.jQuery_1_11_1(window).scrollTop("10");
                    INTELNAV.jQuery_1_11_1(".popover.dark.bottom.in").css("display", "none");
                }
                if(width < 400){
                    setToolTipAndArrowPosition();
                }
                if(width >= 768  && width < 981){
                    ipadToolTipPosition();
                }
            }
            if(number === 4){
                landscapeVisual();
                openSupportTab();
                goToStepNumber(5);
                INTELNAV.jQuery_1_11_1(introjsVariable.overLay).show();
                INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
                INTELNAV.jQuery_1_11_1('my-support').find('.fa-ellipsis').trigger('click');
                INTELNAV.jQuery_1_11_1('html,body').animate({scrollTop: INTELNAV.jQuery_1_11_1("#my-support .ags-buttons-section").offset().top - 300});
                iphoneXresize();
                if (width < 768) {
                    setArrowPosition();
                    step5LandscapeScrolling();
                    step3ToolTipPosition();
                    INTELNAV.jQuery_1_11_1(".popover.dark.bottom.in").css("display","none");
                }
            }
        });
    }

    function setToolTipAndArrowPosition() {
        INTELNAV.jQuery_1_11_1(introToolTipSelector).css(hintPositionVariable.positionLeft, "-300px");
        INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css(hintPositionVariable.positionLeft, "313px");
    }

    function setArrowPosition() {
        INTELNAV.jQuery_1_11_1(introToolTipArrowSelector).css({"position": "absolute", "left": "50vw"});
    }

    function handleStep1and2(number){
        if (number === 1) {
            INTELNAV.jQuery_1_11_1(".myintel-toggle").trigger('click');
            goToStepNumber(2);
            if (INTELNAV.jQuery_1_11_1(introjsVariable.prevButton).length >= 0) {
                INTELNAV.jQuery_1_11_1(introjsVariable.prevButton).show();
            }
            if (width < 768) {
                landscapeVisual();
                setToolTipPosition();
                INTELNAV.jQuery_1_11_1(introToolTipSelector).css(hintPositionVariable.positionLeft, "3px");
                if(landscapevalidation){
                    INTELNAV.jQuery_1_11_1(window).scrollTop("350");
                }
            }
            INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');

        }
        if(number === 2){
            INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
            openSupportTab();
            goToStepNumber(3);
            INTELNAV.jQuery_1_11_1(window).scrollTop("200");
            iphoneXresize();
            if (width < 768) {
                step3ToolTipPosition();
            }
            if(width >= 768  && width < 981){
                resetDimension();
            }
        }
    }

    function resetDimension() {
        setTimeout(function () {
            INTELNAV.jQuery_1_11_1(".introjs-tooltipReferenceLayer").css({"left": "215px", "width": "453px", "top": "450px"});
        }, 260);
    }

    function openSupportTab(){
        if (getScreenWidth() >= 768) {
            var supportId = INTELNAV.jQuery_1_11_1('#Support');
            supportId.find('div.dashboard-block.hidden-xs').addClass('dashboard-block-heading');
            supportId.find('h2.h2MarginBottom').removeClass('h2MarginBottom');
            supportId.find('span.message-col-two.message-settings.text-right[hidden]').removeAttr('hidden');
            supportId.find('span.icon-size.fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            supportId.find('div.dashboard-block[hidden]').removeAttr('hidden');
        }else{
            INTELNAV.jQuery_1_11_1('.global-menu-simplify').css("z-index", "0");
        }
    }

    function prevButtonFunction() {
        INTELNAV.jQuery_1_11_1(document).on('click', introjsVariable.prevButton, function () {
            var numberBack;
            numberBack = bulletClicked ? stepNumber : getIntroJsStepNumber();
            bulletClicked = false;
            if (numberBack === 2) {
                INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
                INTELNAV.jQuery_1_11_1(window).scrollTop("0");
                introJs().exit(true);
                INTELNAV.jQuery_1_11_1(".myintel-toggle").trigger('click');
                goToStepNumber(1);
                if(width >= 768  && width < 981){
                    ipadToolTipPosition();
                }
                if (width < 768) {
                    setToolTipPosition();
                }
            }
            if (numberBack === 3) {
                introJs().exit(true);
                var navElement = INTELNAV.jQuery_1_11_1('.mainDashboardNav').find('.nav-affixer');
                var dashboardNav = navElement.closest('.dashboardNav');
                if (navElement.hasClass('affix')) {
                    dashboardNav.hasClass('full-width') && INTELNAV.jQuery_1_11_1(window).trigger("resize");
                    dashboardNav.removeClass('full-width').addClass('static-position');
                    navElement.closest('.nav-overflower').css('height', 67);
                    navElement.removeClass('affix').addClass('affix-top');
                }
                goToStepNumber(2);
                INTELNAV.jQuery_1_11_1(window).scrollTop("0");
                if (width < 768) {
                    setToolTipPosition();
                    INTELNAV.jQuery_1_11_1(introToolTipSelector).css(hintPositionVariable.positionLeft, "4px");
                    if (window.innerHeight < window.innerWidth) {
                        INTELNAV.jQuery_1_11_1(window).scrollTop("300");
                    }
                }

                setBackgroundTransparent();
                INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
            }
            setOffScreen(numberBack);
            if(numberBack === 4){
                INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
                goToStepNumber(3);
                INTELNAV.jQuery_1_11_1('my-support').find('.fa-ellipsis').trigger('click');
                INTELNAV.jQuery_1_11_1(".popover.dark.bottom.in").css("display", "none");
                INTELNAV.jQuery_1_11_1(window).scrollTop("200");
                iphoneXresize();
                if (width < 768) {
                    step3ToolTipPosition();
                }
                else if (width >= 768 && width < 981) {
                    resetDimension();
                }
            }
            if (numberBack === 5) {
                INTELNAV.jQuery_1_11_1("[data-igm-site-mask]").trigger('click');
                goToStepNumber(4);
                INTELNAV.jQuery_1_11_1('my-support').find('.fa-ellipsis').trigger('click');
                INTELNAV.jQuery_1_11_1(window).scrollTop("200");
                iphoneXresize();
                iphoneXstep4landscape();
                if (width < 768) {
                    INTELNAV.jQuery_1_11_1('.global-menu-simplify').css("z-index", "0");
                    setBackgroundTransparent();
                    setToolTipPosition();
                    toolTipAndPosition();
                    landscapeStep4Resize();
                    step4LanscapeOrientation();
                    INTELNAV.jQuery_1_11_1(window).scrollTop("10");
                }
                if(width < 400){
                    setToolTipAndArrowPosition();
                }
                if(width >= 768  && width < 981){
                    ipadToolTipPosition();
                }
            }
        });
    }

    function myintelHide() {
        var nextButtonTitle = getIntroJsStepNumber();
        if (nextButtonTitle === 1) {
            INTELNAV.jQuery_1_11_1(introjsVariable.datasearch).hide();
            INTELNAV.jQuery_1_11_1(introjsVariable.overLay).css("right", "0");
        }
        if (nextButtonTitle === 2) {
            INTELNAV.jQuery_1_11_1(introjsVariable.datasearch).show();
        }
    }

    function callToggleSlider(event) {
        if (event && event.target) {
            var targetElem = INTELNAV.jQuery_1_11_1(event.target);
            toggleSliderInnerContent(targetElem);
        }
    }

    function setResize() {
        if (getIntroJsStepNumber() >= 3) {
            var stepnumber = getIntroJsStepNumber();
            goToStepNumber(stepnumber);
            if (stepnumber === 5) {
                INTELNAV.jQuery_1_11_1(introjsVariable.helperLayer).css("height", getAgsButtonHeight());
            }
        }
    }

    /**
     * Init
     */
    function init() {
        _elements.body = INTELNAV.jQuery_1_11_1("body");
        var _root = INTELNAV.jQuery_1_11_1("[data-igm]");
        if (!_root.length) {
            return;
        }

        //Clears search results
        clearSearchResults();

        //Toggles the language accordion
        INTELNAV.jQuery_1_11_1(document).on('click', '#language-accordion', intel.menu.toggleLanguageAccordion);

        //Require a root nav element.
        if (!_root.length) {
            console && console.warn("Couldn't initialize GlobalMenuController - no global menu found on page.");
        }

        //Cache elements
        _elements.root = _root;

        //Search
        _elements.searchControl = _root.find("[data-igm-search-control]");
        _elements.searchContent = _root.find(introjsVariable.datasearch);
        _elements.searchToggle = _root.find("[data-igm-search-toggle]");
        _elements.searchResults = _elements.searchContent.find("[data-igm-search-results]");
        _elements.searchRelated = _elements.searchContent.find("[data-igm-search-related]");
        _elements.searchInput = _elements.searchControl.find("[data-igm-search-input]");
        _elements.searchClear = _elements.searchControl.find("[data-igm-search-clear]");
        _elements.signInFromSearch = _root.find("#dropDownSearchSignIn");
        _elements.siteMask = INTELNAV.jQuery_1_11_1("[data-igm-site-mask]");

        //Global Menu Bar
        _elements.hamburgerControl = _root.find(".hamburger");
        _elements.megaMenuControl = _root.find("[data-toggle='mega-menu']");
        _elements.megaMenuModal = INTELNAV.jQuery_1_11_1(".modal-global-menu");
        _elements.megaMenuModalFlyoutContent = _elements.megaMenuModal.find("." + _classes.flyoutContent);
        _elements.megaMenuFlyoutContent = INTELNAV.jQuery_1_11_1("." + _classes.flyoutContent);
        _elements.megaMenuFlyoutControlPanels = _elements.megaMenuModal.find(".flyout-control-panel");
        _elements.megaMenuTabControls = _elements.megaMenuModal.find("[data-toggle='tab']");
        _elements.megaMenuContent = _elements.megaMenuModal.find("." + _classes.megaMenuContent);
        _initMegaMenu();

        //Handle header toggle events
        var $headerToggleFields = '.search-button, .language-selector-toggle, .login-toggle';
        INTELNAV.jQuery_1_11_1(document).on('click', $headerToggleFields, function () {
            INTELNAV.jQuery_1_11_1(".modal").filter(":visible").modal("hide");
        });

        //Set up listeners
        if (_elements.searchControl.length) {
            _elements.root.on("click", "[data-igm-search-toggle]", _searchToggle);
            INTELNAV.jQuery_1_11_1(document).on("click", ".myintelHinting", _searchToggle);
            nextButtonFunction();
            prevButtonFunction();
            _elements.root.on("click", "[data-igm-search-clear]", _searchClearClickHandler);
        }

        _elements.siteMask.on("click", _siteMaskClickHandler);
        _elements.signInFromSearch.on("click", function (event) {
            callToggleSlider(event);
        });

        //Handle all resize events using the single global performant resize handler.
        intel.appCore.registerResizeHandler(_resizeHandler);
        _elements.searchInput.val("");
        _updateView();
        _handleMegaMenuOpenState();
        _preventSafariIOSScrolling();

        intel.getSearchState = function () {
            return _state.allowSubmit;
        };


        setMyToolsScrollHeight();

        INTELNAV.jQuery_1_11_1(window).resize(function () {
            setMyToolsScrollHeight();
        });
        INTELNAV.jQuery_1_11_1(window).on('orientationchange', setMyToolsScrollHeight());

        INTELNAV.jQuery_1_11_1(document).on('click', '.introjs-bullets ul li', function () {
            var currentStep = INTELNAV.jQuery_1_11_1(this).find('a').attr("data-stepnumber");
            bulletClicked = true;
            if(parseInt(currentStep) === 1 && parseInt(previousStepNumber) === 1){
                stepNumber = 2;
                INTELNAV.jQuery_1_11_1(introjsVariable.prevButton).trigger('click');
            }else if (parseInt(currentStep) > parseInt(previousStepNumber)) {
                stepNumber = --currentStep;
                INTELNAV.jQuery_1_11_1(introjsVariable.nextButton).trigger('click');
            } else if (parseInt(currentStep) < parseInt(previousStepNumber)) {
                stepNumber = ++currentStep;
                INTELNAV.jQuery_1_11_1(introjsVariable.prevButton).trigger('click');
            } else{
                return;
            }

            previousStepNumber = INTELNAV.jQuery_1_11_1(this).find('a').attr("data-stepnumber");

        });

        INTELNAV.jQuery_1_11_1(document).on('click', introjsVariable.overLay, function () {
            stepNumber = previousStepNumber = "1";
        });

        INTELNAV.jQuery_1_11_1(document).on('click', ".introjs-overlay, .introjs-helperLayer, .message-collapse, .fa-ellipsis, .section-btn", function (event) {
            if (event.hasOwnProperty('originalEvent')) {
                introJs().exit(true);
            }
        });

        INTELNAV.jQuery_1_11_1(document).keydown(function(e) {
            if(INTELNAV.jQuery_1_11_1('.introjs-overlay').length > 0){
                switch(e.which) {
                    case 37: // left
                        INTELNAV.jQuery_1_11_1(introjsVariable.prevButton).trigger('click');
                        break;

                    case 39: // right
                        INTELNAV.jQuery_1_11_1(introjsVariable.nextButton).trigger('click');
                        break;

                    default: return;
                }
            }
        });
    }

    function setMyToolsScrollHeight() {
        var myToolsScrollHeight = INTELNAV.jQuery_1_11_1(window).height() - 145;

        INTELNAV.jQuery_1_11_1('.my-intel-panel-body').css({"max-height": myToolsScrollHeight + 'px'});
    }

    function _handleMegaMenuOpenState() {
        // when sign in open, close search / menu
        INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.signInOpen, function () {
            _closeMegaMenu();
            _searchClose();
        });

        INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.searchOpen, function () {
            _closeMegaMenu();
            _closeSignIn();
        });

        INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.menuOpen, function () {
            _searchClose();
            _closeSignIn();
        });

        INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.closeAll, function () {
            _searchClose();
            _closeSignIn();
            _closeMegaMenu();
        });
    }


    /**
     * All resize events should be handled by this handler. Init sets up the global call so
     * setting up your own resize event listeners is not necessary (read: illegal).
     *
     * @private
     */
    function _resizeHandler() {
    }


    /**
     * Clears the search input box
     *
     * @private
     */
    function _searchClear() {
        _elements.searchInput.val("").focus();
    }


    /**
     * Handles a "clear" button click in the search input box
     *
     * @private
     */
    function _searchClearClickHandler() {
        _searchClear();
        _updateView();
    }


    /**
     * Close the search menu
     *
     * @private
     */
    function _searchClose() {
        if (_state.search) {
            _searchToggle();
        }
    }


    /**
     * Handles events as the user types in the search box
     *
     * @param e
     *
     * @private
     */
    function _searchKeyupHandler(e) {
        if (e.which === 27) {
            if (_elements.searchInput.val()) {
                _searchClear();
            }
            else {
                _searchToggle();
            }
        }

        _updateView();
    }

    /**
     * Toggles the state of the search bar and triggers an update
     *
     * @private
     */
    function _searchToggle(event) {
        _state.search = !_state.search;
        if (_state.search) {
            // set accessibility options
            $tabObjs = INTELNAV.jQuery_1_11_1("button,a,input :not(#simplify-search)");
            _elements.openTarget = INTELNAV.jQuery_1_11_1(event.target);
            window.setTimeout(function () {
                $tabObjs.each(function (i, e) {
                    var val = INTELNAV.jQuery_1_11_1(e).attr("tabindex");
                    val = val ? val : "0";
                    INTELNAV.jQuery_1_11_1(e).data("tabindex", val);
                });
                $tabObjs.attr("tabindex", "-1");
                var searchTabIndexItems = INTELNAV.jQuery_1_11_1("#simplify-search").find("button,a,input");
                searchTabIndexItems.attr("tabindex", "0");
                searchTabIndexItems.each(function () {
                    var $this = INTELNAV.jQuery_1_11_1(this);
                    var tabIndex = $this.attr("data-tabindex");
                    if (tabIndex) {
                        $this.attr("tabindex", tabIndex);
                    }
                });
            }, 50);

            INTELNAV.jQuery_1_11_1(document).trigger(intel.events.megaMenu.searchOpen);
            _elements.body.on("keyup", _searchKeyupHandler);
            setTimeOutFunction();
            INTELNAV.jQuery_1_11_1('.ios #mobile-search').focus();

        } else {

            // set accessibility options back
            $tabObjs.each(function (i, e) {
                var val = INTELNAV.jQuery_1_11_1(e).data("tabindex");
                val = val ? val : null;
                INTELNAV.jQuery_1_11_1(e).attr("tabindex", val);
            });
            INTELNAV.jQuery_1_11_1("#simplify-search").find("button,a,input").attr("tabindex", null); // clear
            // have the search link back to the active item
            handleFocus(_elements.openTarget);

            _elements.body.off("keyup", _searchKeyupHandler); setTimeout(function () {INTELNAV.jQuery_1_11_1('#mobile-search').focus();}, 10);


        }
        _updateView();

        myintelHide();

        callToggleSlider(event);

        window.setTimeout(function () {
            _state.allowSubmit = _state.search;
        }, 500);

    }

    function handleFocus(el) {
        if (el && (el.hasClass('language-selector-toggle') || el.parents().hasClass('language-selector-toggle'))) {
            INTELNAV.jQuery_1_11_1(".language-selector-toggle:first").attr("tabindex", "0").focus();
        } else if (el && (el.hasClass('search-button') || el.parents().hasClass('search-button'))) {
            INTELNAV.jQuery_1_11_1(".search-button:first").attr("tabindex", "0").focus();
        } else if (el && (el.hasClass('login-toggle') || el.parents().hasClass('login-toggle'))) {
            INTELNAV.jQuery_1_11_1(".login-toggle:first").attr("tabindex", "0").focus();
        }
    }

    function toggleSliderInnerContent(targetElem) {
        var langContent = INTELNAV.jQuery_1_11_1('.slide-language-selector');
        var searchContent = INTELNAV.jQuery_1_11_1('.slide-search-results');
        var searchIfoContent = INTELNAV.jQuery_1_11_1('.search-info');
        var signoutInfo = INTELNAV.jQuery_1_11_1('.signout-info');
        var slideSigninContent = INTELNAV.jQuery_1_11_1('.slide-signin');
        var slideIntelContent = INTELNAV.jQuery_1_11_1('.slide-myintel');
        var languageSelectToggle = 'language-selector-toggle';
        var searchButton = 'search-button';
        var loginToggle = 'login-toggle';
        var myintelToggle = 'myintel-toggle';
        var myhintingClass = 'myintelHinting';
        var backbutton = getIntroJsStepNumber();
        if (targetElem.hasClass(languageSelectToggle) || targetElem.parents().hasClass(languageSelectToggle)) {
            slideSigninContent.hide();
            searchContent.hide();
            searchIfoContent.hide();
            slideIntelContent.hide();
            langContent.show();
            signoutInfo.hide();
        } else if (targetElem.hasClass(searchButton) || targetElem.parents().hasClass(searchButton)) {
            slideSigninContent.hide();
            searchContent.show();
            searchIfoContent.show();
            slideIntelContent.hide();
            langContent.hide();
            switchSliderFooter(targetElem);
        } else if (targetElem.hasClass(loginToggle) || targetElem.parents().hasClass(loginToggle)) {
            slideSigninContent.show();
            searchContent.hide();
            searchIfoContent.hide();
            slideIntelContent.hide();
            langContent.hide();
            signoutInfo.hide();
        } else if (targetElem.hasClass(myintelToggle) || targetElem.parents().hasClass(myintelToggle) || checkHintingClass(targetElem, myhintingClass, backbutton)) {
            INTELNAV.jQuery_1_11_1(introjsVariable.datasearch).show();
            slideSigninContent.hide();
            searchContent.hide();
            searchIfoContent.show();
            slideIntelContent.show();
            langContent.hide();
            switchSliderFooter(targetElem);
            startIntrojs(targetElem, backbutton);
            stepOneSizeFormatter();
        } else {
            slideSigninContent.hide();
            searchContent.hide();
            searchIfoContent.hide();
            langContent.hide();
            slideIntelContent.hide();
            signoutInfo.hide();
        }
        INTELNAV.jQuery_1_11_1('.my-intel-panel-body').scrollTop(0);
    }

    function switchSliderFooter(targetElem) {
        var signoutInfo = INTELNAV.jQuery_1_11_1('.signout-info');
        var stickyFooter = INTELNAV.jQuery_1_11_1('.wrapper-sticky-footer');
        intel.mytools.initialize();
        setMyToolsScrollHeight();
        if (targetElem.hasClass('search-button') || targetElem.parents().hasClass('search-button')) {
            signoutInfo.hide();
            stickyFooter.removeClass('extra-margin');
        } else {
            signoutInfo.show();
            stickyFooter.addClass('extra-margin');
        }
    }


    /**
     * initialize mega menu
     *
     * @private
     */
    function _initMegaMenu() {
        _elements.megaMenuControl.on("click", _handleMegaControlClick);
        _elements.megaMenuModal.on("click", "[data-toggle='tab']", _handleMegaMenuTabChange);

        _elements.megaMenuModal.on("hidden.bs.modal", function () {
            _elements.hamburgerControl.removeClass(_classes.open);
            _elements.body.removeClass(_classes.megaMenuOpen);
            _state.menuActive = false;
        });

        _elements.megaMenuModal.on("show.bs.modal", function () {
            _elements.body.addClass(_classes.megaMenuOpen);
        });
    }


    function _handleMegaControlClick() {
        // Trigger picturefill for mega menu items
        if (!_state.menuInteractedWith) {
            _state.menuInteractedWith = true;
            _elements.megaMenuModal.find("span[data-picture][data-ignore]").removeAttr("data-ignore");
            if (typeof gPicFill !== "undefined") {
                gPicFill.p();
            }
        }

        // close any existing
        var btnControl = INTELNAV.jQuery_1_11_1(this);
        INTELNAV.jQuery_1_11_1(".modal").filter(":visible").modal("hide");
        _elements.megaMenuTabControls.filter("[href='" + btnControl.data('target') + "']").click();
        // if hamburger
        if (btnControl.is(_elements.hamburgerControl)) {
            _toggleMegaMenu();
        }
        else {
            _state.menuActive = true;
            INTELNAV.jQuery_1_11_1(document).trigger(intel.events.megaMenu.menuOpen);
            _elements.hamburgerControl.addClass(_classes.open);
            _elements.megaMenuFlyoutControlPanels.trigger(intel.events.flyoutControlPanel.panelCloseAll, [{flyoutContent: _elements.flyoutContent}]);
            _elements.megaMenuModal.modal("show");
        }
    }


    function _closeMegaMenu() {
        if (_state.menuActive) {
            _elements.megaMenuModal.removeClass("fade");
            _elements.megaMenuModal.modal("hide");
            _elements.megaMenuModal.addClass("fade");
        }
    }


    /**
     * initialize sign in funciton
     *
     * @private
     */
    function _toggleMegaMenu() {
        if (_elements.hamburgerControl.hasClass(_classes.open)) {
            _elements.megaMenuModal.modal("hide");
            _elements.hamburgerControl.removeClass(_classes.open);
            _elements.megaMenuFlyoutControlPanels.trigger(intel.events.flyoutControlPanel.panelCloseAll, [{flyoutContent: _elements.flyoutContent}]);
            _elements.megaMenuModalFlyoutContent.css("height", "");
        }
        else {
            _elements.megaMenuFlyoutControlPanels.trigger(intel.events.flyoutControlPanel.panelCloseAll, [{flyoutContent: _elements.flyoutContent}]);
            _state.menuActive = true;
            INTELNAV.jQuery_1_11_1(document).trigger(intel.events.megaMenu.menuOpen);
            _elements.megaMenuModal.modal("show");
            _elements.hamburgerControl.addClass(_classes.open);
            _elements.root.css({'position': 'fixed'});
        }
    }


    function _handleMegaMenuTabChange() {
        _elements.megaMenuFlyoutControlPanels.trigger(intel.events.flyoutControlPanel.panelCloseAll, [{flyoutContent: _elements.flyoutContent}]);
        _elements.megaMenuModalFlyoutContent.css("height", "");
    }

    function _closeSignIn() {
        if (_state.loginActive) {
            _elements.loginContent.removeClass("fade");
            _elements.loginContent.modal('hide');
            _elements.loginContent.removeClass("fade");
        }
    }


    /**
     * Handles a click of the black background behind search and main menu contexts
     */
    function _siteMaskClickHandler() {
        _state.search && _searchToggle();
    }


    /**
     * Perform a view update based off model and state properties
     *
     * @private
     */
    function _updateView() {
        !_state.search && _elements.searchInput.is(":focus") && _elements.searchInput.blur();
        _elements.body.toggleClass(_classes.searchActive, _state.search);

        _elements.siteMask.toggleClass(_classes.active, _state.search);

        _elements.searchControl
            .add(_elements.searchContent)
            .add(_elements.searchToggle)
            .toggleClass(_classes.active, _state.search);

        _elements.searchClear
            .add(_elements.searchRelated);

        if (_elements.searchInput.val().length === 0) {
            INTELNAV.jQuery_1_11_1('#header-btn-clear').hide();
        }
    }

    function _preventSafariIOSScrolling() {
        if (typeof Modernizr !== "undefined" && typeof Modernizr.Detectizr !== "undefined" && Modernizr.Detectizr.device.browser === "safari" && Modernizr.Detectizr.device.os === "ios") {
            _elements.body.on("touchmove", function (event) {
                if (_elements.body.hasClass(_classes.megaMenuOpen) || _elements.body.hasClass(_classes.searchActive)) {
                    var isTouchMoveAllowed = false,
                        target = INTELNAV.jQuery_1_11_1(event.target);

                    while (target.length > 0 && !isTouchMoveAllowed) {
                        if (target.hasClass(_classes.megaMenuContent) || target.hasClass(_classes.searchContent)) {
                            isTouchMoveAllowed = true;
                            break;
                        }
                        target = target.parent();
                    }
                    if (!isTouchMoveAllowed) {
                        event.preventDefault();
                    }
                }
            });
            _elements.searchContent.each(function () {
                preventOverscrolling(this);
            });
            _elements.megaMenuContent.each(function () {
                preventOverscrolling(this);
            });
        }
    }

    function preventOverscrolling(el) {
        // Work around iOS overscrolling for elements that are large enough
        el.addEventListener('touchstart', function () {
            var top = el.scrollTop,
                totalScroll = el.scrollHeight,
                currentScroll = top + el.offsetHeight;
            if (top === 0) {
                el.scrollTop = 1;
            } else if (currentScroll === totalScroll) {
                el.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function (evt) {
            var top = el.scrollTop,
                totalScroll = el.scrollHeight,
                currentScroll = top + el.offsetHeight;
            if (top === 0 && currentScroll === totalScroll) {
                evt.stopPropagation();
                evt.preventDefault();
            }
        });
    }

    return {
        initialize: init
    };

})(INTELNAV.jQuery_1_11_1);

INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.load, intel.GlobalMenuController.initialize);

'use strict';

var intel = intel || {};
intel.modal = (function () {

    var _elements = {
        exposeMenuModal: null,
        body: INTELNAV.jQuery_1_11_1('body')
    };

    var _classes = {
        exposeMenuModal: "modal-expose-menu",
        exposeMenuModalOpen: "modal-expose-menu-open"
    };

    function init() {
        _elements.exposeMenuModal = INTELNAV.jQuery_1_11_1("." + _classes.exposeMenuModal);
        _elements.exposeMenuModal.on("show.bs.modal", function () {
            _elements.body.addClass(_classes.exposeMenuModalOpen);
        });

        _elements.exposeMenuModal.on("hidden.bs.modal", function () {
           _elements.body.removeClass(_classes.exposeMenuModalOpen);
            INTELNAV.jQuery_1_11_1("[data-modal-caller]").focus();
        });
    }

    return {
        initialize: init
    };
})(INTELNAV.jQuery_1_11_1);
INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.load, intel.modal.initialize);


'use strict';

var intel = intel || {};
var agsResolveInst;
var recallFn;
intel.mytools = (function () {
    function init() {
        INTELNAV.jQuery_1_11_1('[data-toggle="tooltip"]').tooltip();
        var myAppsElements = INTELNAV.jQuery_1_11_1(".myintellink");
        var ctaElements = INTELNAV.jQuery_1_11_1(".myagsbuttons-jq");
        getElementsByAGSRole(myAppsElements, intel.agsRolesOfUser, false, intel.isInternalUser);
        getElementsByAGSRole(ctaElements, intel.agsRolesOfUser, true, intel.isInternalUser);
        hideMyContentAndLearning(intel.agsRolesOfUser, intel.isInternalUser);
        intel.isIGHFCall && checkDomainLinks();
    }

    function getAgsRoles(cb) {
        var businessAppAndTools = businessAppAndTools || {};
        if (!businessAppAndTools.wcmMode && typeof(isLoggedin) !== "undefined" && isLoggedin) {
            if (typeof(cb) === 'function') {
                recallFn = cb;
            } else {
                var url = intel.isIGHFCall ? "https://www.intel.com/libs/apps/intel/myintel/agsroles.json?jsonp=myToolsCallBack&ighf=ighf" : "/libs/apps/intel/myintel/agsroles.json?jsonp=myToolsCallBack";

                INTELNAV.jQuery_1_11_1.ajax({
                    type: "GET",
                    url: url,
                    dataType: 'jsonp'
                });
            }
            //code was moved from above as further code was not being executed on homepage on IE browser
            window.myAgsPromise = new Promise(function (resolve) {
                agsResolveInst = resolve;
            }, function (reject) {
                reject();
            });
        }
    }

    function checkDomainLinks(){
        INTELNAV.jQuery_1_11_1(".myintel-links").find('li').each(function(){
            var links = INTELNAV.jQuery_1_11_1(this).find('a');
            var url = links.attr('href');
            if(url.indexOf('https://www.intel.com')<0 && url.startsWith('/')){
                url = 'https://www.intel.com' + url;
            }
            links.attr('href',url);
        });
    }

    function getCheckedItem(isInternalOnly, isExternalOnly, isInternalUser) {
        if (isInternalOnly !== isExternalOnly) {
            var internalUserCheck = isInternalOnly === 'true' && !isInternalUser;
            var externalUserCheck = isExternalOnly === 'true' && isInternalUser;
            if (internalUserCheck || externalUserCheck) {
                return false;
            }
        }
        return true;
    }

    function identifyBlackListedAgsRole(agsRolesOfUser, blacklistedAgsGroupName) {
        var flag = false;
        var returnFlag = false;
        if (agsRolesOfUser && blacklistedAgsGroupName) {
            var blacklistedAGSGroups = blacklistedAgsGroupName.split(",");
            for (var j = 0; j < agsRolesOfUser.length; j++) {
                flag = checkBlackListedFlag(returnFlag, blacklistedAGSGroups, agsRolesOfUser[j]);
                if (flag) {
                    break;
                }
            }
        }
        return flag;
    }

    function checkBlackListedFlag(returnFlag, blacklistedAGSGroups, userAgsRole) {
        var agsRole = userAgsRole.display;
        for (var k = 0; k < blacklistedAGSGroups.length; k++) {
            var blacklistedAGSGroupName1 = blacklistedAGSGroups[k].trim();
            if (blacklistedAGSGroupName1.toLowerCase() === agsRole.toLowerCase()) {
                returnFlag = true;
                break;
            }
        }
        return returnFlag;
    }

    function hideMyContentAndLearning(agsRolesOfUser, isInternalUser) {
        var $myIntelPanel = INTELNAV.jQuery_1_11_1("#my-intel");
        var $myContent = $myIntelPanel.find(".my-content");
        var $myLearning = $myIntelPanel.find(".my-learning");
        $myContent.hide();
        $myLearning.hide();
        if (agsRolesOfUser && agsRolesOfUser.length) {
            for (var i = 0; i < agsRolesOfUser.length; i++) {
                var currentDisplay = agsRolesOfUser[i].display;
                if (currentDisplay === "RDC Privileged Full") {
                    $myContent.show();
                }
                if ((['IPD-NBS-CQ', 'IPP-CQ', 'IPD-BS-CQ', 'RDC Privileged Full', 'PSG External Basic B2B Bundle', 'SFDC IPS External Contact', 'Salesforce-Intel-Partner-External-IPS', 'Salesforce-Intel-Partner-FAE', 'IPS community portal access'].indexOf(currentDisplay) >= 0) || isInternalUser) {
                    $myLearning.show();
                }
            }
        }
    }

    function hideProfileAndSubscriptions(isInternalUser) {
        var $nonInternalContent = INTELNAV.jQuery_1_11_1("#my-intel").find(".non-internal");
        var loc = window.location.href;
        var profilePage = "/secure/my-intel/profile";
        var subPage = "/secure/my-intel/subscriptions";
        var dashboardPage = "/secure/my-intel/dashboard";
        var redirectPage = loc.replace(subPage, dashboardPage).replace(profilePage, dashboardPage);
        if (isInternalUser) {
            $nonInternalContent.remove();
            (loc.indexOf(profilePage) > 0 || loc.indexOf(subPage) > 0) && window.location.replace(redirectPage);
        }
    }

    function getElementsByAGSRole(myAppsElements, agsRolesOfUser, isCta, isInternalUser) {
        myAppsElements.each(function (i) {
            var currentElement = INTELNAV.jQuery_1_11_1(myAppsElements[i]);
            var currentAGSGroupName;
            var blacklistedAgsGroupName;
            var isInternalOnly = currentElement.attr('data-isinternal');
            var isExternalOnly = currentElement.attr('data-isexternal');
            if (isCta) {
                currentAGSGroupName = currentElement.attr('data-agsrole');
                blacklistedAgsGroupName = currentElement.attr('data-blacklistedagsrole');
            } else {
                currentAGSGroupName = currentElement.children('h3').text().trim();
                blacklistedAgsGroupName = currentElement.children('h4').text().trim();
            }

            var isblackListUser = identifyBlackListedAgsRole(agsRolesOfUser, blacklistedAgsGroupName);
            var flag = getCheckedItem(isInternalOnly, isExternalOnly, isInternalUser);
            if (flag) {
                agsRole(agsRolesOfUser, currentAGSGroupName, currentElement, isCta, isblackListUser, isInternalUser);
            }

        });
    }

    function agsRole(agsRolesOfUser, currentAGSGroupName, currentElement, isCta, isblackListUser, isInternalUser) {
        var currentAGSGroups = currentAGSGroupName.split(",");
        if (agsRolesOfUser && agsRolesOfUser.length && currentAGSGroupName && !isblackListUser) {
            for (var j = 0; j < agsRolesOfUser.length; j++) {
                showElementByAGSRole(currentAGSGroups, currentElement, agsRolesOfUser[j].display, isCta, isInternalUser);
            }
        } else {
            showElementByAGSRole(currentAGSGroups, currentElement, '', isCta, isInternalUser);
        }
    }

    function showElementByAGSRole(currentAGSGroups, currentElement, agsRolesOfUser, isCta, isInternalUser) {
        for (var k = 0; k < currentAGSGroups.length; k++) {
            var currentAGSGroupName1 = currentAGSGroups[k].trim();
            var showToInternalUser = (currentAGSGroups.indexOf("Contingent Worker") > -1 || currentAGSGroups.indexOf("Employee") > -1) && isInternalUser;
            if (currentAGSGroupName1.toLowerCase() === agsRolesOfUser.toLowerCase() || currentAGSGroupName1 === "Everyone" || showToInternalUser) {
                if (isCta) {
                    currentElement.removeClass('hide');
                } else {
                    currentElement.show();
                    INTELNAV.jQuery_1_11_1('.my-intel-tools').show();
                }
                break;
            }
        }
    }

    function responseHandler(data) {
        intel.agsRolesOfUser = data.groups;
        intel.isInternalUser = data.isInternal;
        intel.userName = data.email;
        hideProfileAndSubscriptions(intel.isInternalUser);
        intel.myAgsLinks.initialize();
    }

    return {
        initialize: init,
        getAgsRoles: getAgsRoles,
        responseHandler: responseHandler
    };
})(INTELNAV.jQuery_1_11_1);

var myToolsCallBack = function (data) {
    intel.mytools.responseHandler(data);
    window.agsUserGroupNames = data;
    agsResolveInst(data);
    typeof(recallFn) === 'function' && recallFn();
};

INTELNAV.jQuery_1_11_1(document).on(intel.events.megaMenu.signInMenu, intel.mytools.getAgsRoles);


var intel = intel || {};
intel.myAgsLinks = (function () {

    var agsRolesOfUser, isInternalUser, userName;

    function init() {
        agsRolesOfUser = intel.agsRolesOfUser;
        isInternalUser = intel.isInternalUser;
        userName = intel.userName;

        INTELNAV.jQuery_1_11_1(document).on('click', '.validate-email-ags', function () {
            var url = "/libs/apps/intel/myintel/emailvalidation?emailId=" + userName;
            var redirect = INTELNAV.jQuery_1_11_1(this).attr('data-href');
            INTELNAV.jQuery_1_11_1.get(url).then(function (res) {
                if (!res.isValidEmail) {
                    INTELNAV.jQuery_1_11_1('#agsModal').modal('show');
                } else {
                    window.open(redirect, '_blank');
                }
            });
        });
    }

    function getElementsByAGSRole(myAppsElements) {
        //myAppsElements consists of CTA buttons of a particular component
        INTELNAV.jQuery_1_11_1(myAppsElements).each(function () {
            var currentElement = INTELNAV.jQuery_1_11_1(this);
            var currentAGSGroupName = currentElement.attr('data-agsrole');
            var isInternalOnly = currentElement.attr('data-isinternal');
            var isExternalOnly = currentElement.attr('data-isexternal');
            var blacklistedAgsGroupName = currentElement.attr('data-blacklistedagsrole');
            var isblackListUser = identifyBlackListedAgsRole(blacklistedAgsGroupName);
            var flag = getCheckedItem(isInternalOnly, isExternalOnly);
            var currentAGSGroups = currentAGSGroupName.split(",");
            var agsGroupsPresent = agsRolesOfUser && agsRolesOfUser.length;
            if (!isblackListUser) {
                if (flag && agsGroupsPresent && currentAGSGroupName) {
                    populateAGSRoles(agsRolesOfUser, currentAGSGroups, currentElement);
                } else {
                    showElementByAGSRole(currentAGSGroups, currentElement, '');
                }
            }
        });

        INTELNAV.jQuery_1_11_1('[data-toggle="tooltip"]').tooltip();
    }

    function populateAGSRoles(agsRolesOfUser, currentAGSGroups, currentElement) {
        for (var i = 0, l = agsRolesOfUser.length; i < l; i++) {
            var shown = showElementByAGSRole(currentAGSGroups, currentElement, agsRolesOfUser[i].display);
            if (shown) {
                break;
            }
        }
    }

    function showElementByAGSRole(currentAGSGroups, currentElement, agsRole) {
        var showToInternalUser = (currentAGSGroups.indexOf("Contingent Worker") > -1 || currentAGSGroups.indexOf("Employee") > -1) && isInternalUser;
        for (var k = 0; k < currentAGSGroups.length; k++) {
            var currentAGSGroupName1 = currentAGSGroups[k].trim();
            if (currentAGSGroupName1.toLowerCase() === agsRole.toLowerCase() || currentAGSGroupName1 === "Everyone" || showToInternalUser) {
                currentElement.removeClass('hide');
                currentElement.closest('.dot-dropdown').parent('span').removeClass('hide-ellipsis');
                return true;
            }
        }
        return false;
    }

    function getCheckedItem(isInternalOnly, isExternalOnly) {
        if (isInternalOnly !== isExternalOnly) {
            var internalUserCheck = isInternalOnly === 'true' && !isInternalUser;
            var externalUserCheck = isExternalOnly === 'true' && isInternalUser;
            if (internalUserCheck || externalUserCheck) {
                return false;
            }
        }
        return true;
    }


    function identifyBlackListedAgsRole(blacklistedAgsGroupName) {
        if (!(agsRolesOfUser && agsRolesOfUser.length) || !blacklistedAgsGroupName) {
            return false;
        }
        var blacklistedAGSGroups = blacklistedAgsGroupName.split(",");
        for (var j = 0; j < agsRolesOfUser.length; j++) {
            for (var k = 0; k < blacklistedAGSGroups.length; k++) {
                var blacklistedAGSGroupName1 = blacklistedAGSGroups[k].trim();
                if (blacklistedAGSGroupName1.toLowerCase() === agsRolesOfUser[j].display.toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    }

    function showAgsButtonsSection(component) {
        setTimeout(function () {
            if (INTELNAV.jQuery_1_11_1('#' + component + ' .ags-buttons-section').find('.section-btn').children().length === INTELNAV.jQuery_1_11_1('#' + component + ' .ags-buttons-section').find('.section-btn').children('.hide').length) {
                INTELNAV.jQuery_1_11_1('#' + component + ' .ags-buttons-section').hide();
            } else {
                INTELNAV.jQuery_1_11_1('#' + component + ' .ags-buttons-section').show();
            }
        });
    };

    return {
        initialize: init,
        getElementsByAGSRole: getElementsByAGSRole,
        showAgsButtonsSection: showAgsButtonsSection
    };
})(INTELNAV.jQuery_1_11_1);
