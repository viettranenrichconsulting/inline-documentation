/**
 * ------------------------------------------------
 * Built-in Types
 * ------------------------------------------------
 */

/** @type {string} */
const str = "";

/** @type {number} */
const num = 3;

/** @type {null} */
const nul = null;

/** @type {undefined} */
const nil = undefined;

const couldBeAnything = undefined;

/** @type {string[]} */
const strArr = [];

/**
 * ------------------------------------------------
 * Definining Types
 * ------------------------------------------------
 */

/**
 * All possible tab types
 * @typedef {'bubbleTab' | 'barTab' | 'vectorTab'} Tabs
 */

/**
 * A point represented as x y coordinates in an object.
 * @typedef {Object} PointObj
 * @property {number} x
 * @property {number} y
 */

/**
 * A point represented as a pair of numbers [x, y].
 * @typedef {[number, number]} PointArr
 */


/**
 * A type alias for an array of points.
 * @typedef {PointObj[]} Points
 */

/**
 * An object to demonstrate different property declarations.
 * @typedef {Object} Obj
 * @property {string} required
 * @property {number} [optional]
 * @property {Object} nested
 * @property {number} nested.required
 */

/**
 * ------------------------------------------------
 * Type Casting
 * ------------------------------------------------
 */
 
/** @type {string} */
const notWhatItLooksLike = (3);


/**
 * ------------------------------------------------
 * Inferred Types
 * ------------------------------------------------
 */
const inferredNum = 3;
const inferredObject = {
    aNum: 3,
    aBoolean: false,
    aString: 3,
    aNestedObj: {
        aString: "wow....",
    },
};

// defining the type later via type inference operator
/**
 * @typedef {typeof inferredObject} InferredObject
 */

/** ------------- COMBINING TYPES --------------- */

/** @type {num | string} */
const aNumOrString = 3;


/**
 * ------------------------------------------------
 * Defining Functions
 * ------------------------------------------------
 */

/**
 * Computes the sum of two numbers.
 * @param {number} a The first number to include in the sum.
 * @param {number} b The second number to include in the sum.
 */
const sum = function(a, b) {
    return a + b;
};

/**
 * Computes the sum of two numbers.
 * @param {number} a The first number to include in the sum.
 * @param {number} [b] The second number to include in the sum.
 */
const sumWithOptional = function(a, b) {
    return a + b;
};


/**
 * Computes the sum with an arbitrary amount of numbers.
 * @param {number[]} nums
 */
const sumWithRest = function(...nums) {
    return nums.reduce((acc, curr) => acc + curr);
};


// with object params
/**
 * Computes the sum of two numbers.
 * @param {number} a The first number to include in the sum.
 * @param {object} nested The second number to include in the sum.
 * @param {number} nested.b The second number to include in the sum.
 */
const sumWithNested = function(a, nested) {
    return a + nested.b;
};

/**
 * @callback EventHandler
 * @param {MouseEvent} event
 * @returns {void}
 */

// alternative way to define event handler via type aliasing
// /**
//  * @typedef {(event: MouseEvent) => void} EventHandler
//  */


/**
 * ------------------------------------------------
 * Template/Generic Types
 * ------------------------------------------------
 */

/**
 * @typedef <
 */


// taking advantage of inferred typing
/**
 * @template ItemType
 * @param {ItemType} item
 * @returns {ItemType}
 */
const passThrough = (item) => item;


/**
 * ------------------------------------------------
 * Using Third Party Libraries
 * ------------------------------------------------
 */

// informal
/**
 * @type {d3.Selection<number>}
 */
const informalUsage = d3.selectAll(document.body);


// formal
/**
 * @type {import('d3').Selection<number>}
 */
const formalUsage = d3.selectAll(document.body);

/**
 * My divs.
 * @type {JQuery<HTMLElement}
 */
const $divs = ($('div'));



/**
 * ------------------------------------------------
 * Utility Types
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 * ------------------------------------------------
 */

/**
 * @typedef {Partial<PointObj>} PointConfig
 */
