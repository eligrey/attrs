/*
* @trs JavaScript Library v0.1.2
* 2009-07-10
* By Elijah Grey, http://eligrey.com
*
* Licenses: GNU GPL v3 and the X11/MIT license
*           http://eligrey.com/blog/about/license
*/

(function(){
	// test for __noSuchMethod__ support
	try { ({__noSuchMethod__:function(){}}).nonexistant_method(); }
	catch (e) { return; }
	
	if (!("Element" in this) || !("JSON" in this))
		return;
	
	var _noSuchMethod = Element.prototype.__noSuchMethod__; // in case __noSuchMethod__ is already defined
	
	Element.prototype.__noSuchMethod__ = function (prop, args) {
		if (prop[0] !== "@") // not an @-property
		
			if (typeof _noSuchMethod != "function")
				throw new TypeError(prop + " is not a function");
			
			else // forward function call to original __noSuchMethod__
				return _noSuchMethod.apply(this, Array.prototype.slice.call(arguments));
		
		var attr = prop.substr(1),
		dataAttr = (attr[0] === "$"),
		val;
		
		
		if (dataAttr) // prepend data- to attribute (has leading $)
			attr = "data-" + attr.substr(1);
		
		if (args.length) {
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
}).call(this);
