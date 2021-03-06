/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-a-6.js
 * @description Object.defineProperties - enumerable own accessor property of 'Properties' without a get function that overrides enumerable inherited accessor property of 'Properties' is defined in 'O' 
 */


function testcase() {

        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "prop", {
            get: function () {
                return 12;
            },
            enumerable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        Object.defineProperty(child, "prop", {
            get: function () {
                return {
                    set: function () { }
                };
            },
            enumerable: true
        });
        Object.defineProperties(obj, child);

        return obj.hasOwnProperty("prop") && typeof obj.prop === "undefined";
    }
runTestCase(testcase);
