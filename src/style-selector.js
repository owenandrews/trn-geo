export default class StyleSelectorControl {
    constructor(styles, callback) {
        this.styles = styles;
        this.callback = callback;
    }

    onAdd(map) {
        this._map = map;
        this._container = document.createElement('select');
        this._container.className = 'mapboxgl-ctrl';

        for (const [key, style] of Object.entries(this.styles)) {
            const option = document.createElement('option');
            option.textContent = key;

            this._container.append(option);
        }

        this._container.addEventListener('change', (e) => this.onChange(e));

        return this._container;
    }

    onChange(event) {
        this.callback(this.styles[event.target.value]);
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}