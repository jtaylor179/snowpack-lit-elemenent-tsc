import { LitElement, html, property, customElement } from 'lit-element';

@customElement('simple-greeting')
export default class SimpleGreeting extends LitElement {
    @property() name = 'World';

    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}
