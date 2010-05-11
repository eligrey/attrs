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

 * topic: `some code`
   * `equivalent code without @trs`

---

 * Retrieving attributes: `element.@some_attribute()`
   * `element.getAttribute("some_attribute")`
 * Setting attributes: `element.@foo("bar")`
   * `element.setAttribute("foo", "bar"), element`
 * Using strings to dynamically use @trs: `let (str = "foo-bar") element.@[str]()`
   * `let (str = "foo-bar") element.getAttribute(str)`
 * Storing JSON in data-* attributes: `element.@$coords({x:1, y:2})`
   * `element.setAttribute("data-coords", JSON.stringify({x:1, y:2})), element`
 * Retrieving JSON from data-* attributes: `element.@$coords()`
   * `JSON.parse(element.getAttribute("data-coords"))`
 * Removing attributes: `element.@foo(null)`
   * `element.removeAttribute("foo")`
 * Chaining: `element.@foo("1").@bar("2")`
   * `element.setAttribute("foo", "1"), element.setAttribute("bar", "2"), element`


Anonymous `document.createElement` examples
-------------------------------------------

    document.documentElement.appendChild(
      document.createElement("script")
        .@type   ("text/javascript;version=1.6")
        .@src    ("@trs.js")
        .@charset("utf-8")
    );
    
    document.documentElement.appendChild(
      document.createElement("link")
        .@rel    ("stylesheet")
        .@type   ("text/css")
        .@href   ("some-stylesheet.css")
        .@charset("utf-8")
        .@title  ("My Stylesheet")
    );



![Tracking image](//in.getclicky.com/212712ns.gif =1x1)
