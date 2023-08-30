function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function () {
  console.log('focused');
};
const h = new HtmlElement();

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = () => {
    return `<select>${this.items
      .map((item) => `<option>${item}</option>`)
      .join('')}</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImgElement(src) {
  this.src = src;
  this.render = () => {
    return `<img src = "${this.src}" />`;
  };
}
HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlSelectElement;

const hl = new HtmlSelectElement([1, 2, 3, 4]);
