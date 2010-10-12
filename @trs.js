/*
* @trs JavaScript Library v0.1.3.1
* 2009-10-01
* By Eli Grey, http://eligrey.com
*
* Licensed under the X11/MIT License
*   See LICENSE.md
*/

/* Requirements:
*   JavaScript 1.6 or higher
*   A json2.js-compatible JSON API:
*      JSON.parse and JSON.stringify
*/

/*! @source http://purl.eligrey.com/github/attrs/blob/master/@trs.js*/

(function (window) {
	// test for __noSuchMethod__ support
	try {
		({__noSuchMethod__:function () {}}).nonexistant_method();
	} catch (e) { return; }
	
	if (!("Element" in window) || !("JSON" in window) || !("parse" in JSON)|| !("stringify" in JSON))
		return;
	
	// in case __noSuchMethod__ is already defined
	var _noSuchMethod = Element.prototype.__noSuchMethod__;
	
	Element.prototype.__noSuchMethod__ = function (prop, args) {
		if (prop[0] !== "@") // not an @-property
		
			if (typeof _noSuchMethod === "function") // forward function call to original __noSuchMethod__
				return _noSuchMethod.apply(this, Array.prototype.slice.call(arguments));
			
			else
				throw new TypeError(prop + " is not a function");;
		
		var attr = prop.substr(1),
		dataAttr = (attr[0] === "$"),
		val;
		
		if (dataAttr) // prepend data- to attribute (has leading $)
			attr = "data-" + attr.substr(1);
		
		if (args.length > 0) {
			val = args[0];
			
			if (val === null) // pass null to remove attribute
				this.removeAttribute(attr);
			
			else if (dataAttr)
				this.setAttribute(attr, JSON.stringify(val));
			
			else
				this.setAttribute(attr, val);
			
			return this; // return element for chaining
		} else {
			val = this.getAttribute(attr);
			
			if (typeof val === null)
				return val;
			
			if (dataAttr && val !== "")
				val = JSON.parse(val);
			
			return val;
		}
	};
}(this));
