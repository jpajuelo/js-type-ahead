/**
 *  Copyright 2015 Jaime Pajuelo
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


var TypeAhead = (function () {

    "use strict";

    // ==================================================================================
    // CLASS DEFINITION
    // ==================================================================================

    /**
     * Create a new instance of class TypeAhead.
     *
     * @constructor
     * @param {String} controlId [description]
     * @param {String[]|Function} source [description]
     * @param {Object.<String, *>} [options] [description]
     */
    var TypeAhead = function TypeAhead(controlId, source, options) {

    };

    // ==================================================================================
    // STATIC MEMBERS
    // ==================================================================================

    TypeAhead.DEFAULTS = {

    };

    // ==================================================================================
    // PUBLIC MEMBERS
    // ==================================================================================

    TypeAhead.prototype = {

        hide: function hide() {
            return this;
        },

        lookUp: function lookUp() {
            return this;
        },

        moveDown: function moveDown() {
            return this;
        },

        moveUp: function moveUp() {
            return this;
        },

        select: function select() {
            return this;
        },

        show: function show() {
            return this;
        }

    };

    // ==================================================================================
    // PRIVATE MEMBERS
    // ==================================================================================

    return TypeAhead;

})();
