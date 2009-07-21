About
====

@trs is a JavaScript 1.6+ library for setting DOM element attributes intended for server-side JavaScript use.

Requirements
------------

@trs requires support for the [ECMA-357 standard][1], ECMAScript for XML (E4X).

Supported ECMAScript engines: SpiderMonkey, TraceMonkey, ActionMonkey, and Rhino.

  [1]: http://www.ecma-international.org/publications/standards/Ecma-357.htm

Usage
-----

API documentation format (I wish MarkDown supported definition lists):

 * `some code`
   * `what it does`

---

 * `element.@some_attribute()`
   * `element.getAttribute("some_attribute")`
 * `element.@foo("bar")`
   * `element.setAttribute("foo", "bar"), element`
 * `let (str = "foo-bar") element.@[str]()`
   * `let (str = "foo-bar") element.getAttribute(str)`
 * `element.@$coords({x:1, y:2})`
   * `element.setAttribute("data-coords", JSON.stringify({x:1, y:2})), element`
 * `element.@$coords()`
   * `JSON.parse(element.getAttribute("data-coords"))`
 * `element.@foo(null)`
   * `element.removeAttribute("foo")`


Anonymous `document.createElement` examples
-------------------------------------------

    document.documentElement.appendChild(
      document.createElement("script")
        .@type ("text/javascript;version=1.8")
        .@src  ("@trs.js")
    );
    
    document.documentElement.appendChild(
      document.createElement("link")
        .@rel  ("stylesheet")
        .@type ("text/css")
        .@href ("some-stylesheet.css")
    );
