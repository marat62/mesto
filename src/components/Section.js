export class Section {
    constructor({ items, renderer }, popupSelector) {
      this._items = items;
      this._renderer = renderer;
      this._selector = popupSelector;
    }
  
    renderItems() {
      this._items.forEach((item) => this.addItem(this._renderer(item)))
    }
  
    addItem(element) {
      this._selector.prepend(element);
    }
  };
  