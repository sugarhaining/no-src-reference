/**
 * @fileoverview no src reference in appx1.0
 * @author yining
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no src reference in appx1.0",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            default: '不能在appx1.0中引用src中的内容',
            time: 'tttttttttt'
        }
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            "ImportDeclaration Literal": node => {
                if (node.value.indexOf('src') >= 0) {
                    context.report({
                        node,
                        message: '官人 不行啊',
                        data: {
                            name: 'time',
                        },
                    });
                }
            }

        };
    }
};
