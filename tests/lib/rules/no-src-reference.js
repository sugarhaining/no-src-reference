/**
 * @fileoverview no src reference in appx1.0
 * @author yining
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-src-reference"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7, // 默认支持语法为es5 
        sourceType: "module",
    },
});
ruleTester.run("no-src-reference", rule, {

    valid: [
        "import { getIn } from '@ali/multiple/build';",
        "import { getIna } from '@ali/multiple/build';"
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "import {getIn} from '@bb/manipulate/src'",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
