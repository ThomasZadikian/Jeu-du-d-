const template = document.createElement("template");
template.innerHTML = `
<div>
    <h2><slot name='title'></slot></h2>
    <h3 id='count'></h3>
    <p>Current : </p>
    <span id='totalCount'></span>

</div>
`;

class Player extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("player-game", Player);
