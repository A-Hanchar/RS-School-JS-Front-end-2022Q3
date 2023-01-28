/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function getArea() {
  return this.width * this.height;
};

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);

  Object.setPrototypeOf(obj, proto);

  return obj;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  cssSelector: '',
  countIds: 0,
  countElements: 0,
  countPseudoElements: 0,
  order: [
    'element',
    'id',
    'class',
    'attr',
    'pseudoClass',
    'pseudoElement',
  ],
  lastAddedSelectorType: '',

  /**
   *
   * @param {*} value
   * @param {'id' | 'element' | 'class' | 'attr' | 'pseudoClass' | 'pseudoElement'} selectorType
   * @returns
   */
  copy(value, selectorType) {
    const copiedcssSelectorBuilder = Object.create(this);

    switch (selectorType) {
      case 'id':
        copiedcssSelectorBuilder.countIds += 1;
        break;
      case 'element':
        copiedcssSelectorBuilder.countElements += 1;
        break;
      case 'class':
        break;
      case 'attr':
        break;
      case 'pseudoClass':
        break;
      case 'pseudoElement':
        copiedcssSelectorBuilder.countPseudoElements += 1;
        break;
      default:
        break;
    }

    if (
      copiedcssSelectorBuilder.countIds > 1
      || copiedcssSelectorBuilder.countElements > 1
      || copiedcssSelectorBuilder.countPseudoElements > 1
    ) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }

    const lastAddedSelectorTypeId = this.order.indexOf(
      copiedcssSelectorBuilder.lastAddedSelectorType,
    );
    const selectorTypeId = this.order.indexOf(selectorType);

    if (lastAddedSelectorTypeId > selectorTypeId) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }

    copiedcssSelectorBuilder.cssSelector = this.cssSelector + value;
    copiedcssSelectorBuilder.lastAddedSelectorType = selectorType;

    return copiedcssSelectorBuilder;
  },

  element(value) {
    return this.copy(value, 'element');
  },

  id(value) {
    return this.copy(`#${value}`, 'id');
  },

  class(value) {
    return this.copy(`.${value}`, 'class');
  },

  attr(value) {
    return this.copy(`[${value}]`, 'attr');
  },

  pseudoClass(value) {
    return this.copy(`:${value}`, 'pseudoClass');
  },

  pseudoElement(value) {
    return this.copy(`::${value}`, 'pseudoElement');
  },

  combine(selector1, combinator, selector2) {
    const cssSelector1 = selector1.stringify();
    const cssSelector2 = selector2.stringify();

    return this.copy(`${cssSelector1} ${combinator} ${cssSelector2}`);
  },

  stringify() {
    return this.cssSelector;
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
