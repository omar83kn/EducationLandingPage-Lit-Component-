import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class NewsletterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #26335D;
      font-family: 'Montserrat', Arial, sans-serif;
      color: #fff;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      width: 100vw;
    }
    .newsletter-label {
      color: #a78bfa;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 12px;
      text-align: center;
    }
    .newsletter-title {
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 14px;
      color: #fff;
      text-align: center;
      line-height: 1.1;
    }
    .newsletter-desc {
      color: #cbd5e1;
      font-size: 1.08rem;
      margin-bottom: 48px;
      text-align: center;
      max-width: 680px;
    }
    .newsletter-form {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 700px;
      margin-top: 10px;
    }
    .newsletter-input {
      flex: 1;
      padding: 18px 20px;
      border: none;
      border-radius: 6px 0 0 6px;
      font-size: 1.1rem;
      outline: none;
      background: #f5f6fa;
      color: #222;
      transition: box-shadow 0.18s;
    }
    .newsletter-input:focus {
      box-shadow: 0 0 0 2px #a78bfa44;
    }
    .newsletter-button {
      padding: 0 38px;
      font-size: 1.13rem;
      font-weight: 600;
      background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
      color: #fff;
      border: none;
      border-radius: 0 6px 6px 0;
      cursor: pointer;
      transition: background 0.18s;
      outline: none;
      box-shadow: 0 1px 2px rgba(40,50,92,0.06);
    }
    .newsletter-button:hover {
      background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
    }
    @media (max-width: 800px) {
      .newsletter-title {
        font-size: 2rem;
      }
      .newsletter-form {
        flex-direction: column;
        max-width: 98vw;
      }
      .newsletter-input,
      .newsletter-button {
        border-radius: 6px;
        width: 100%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
      }
      .newsletter-button {
        padding: 14px 0;
        font-size: 1.1rem;
      }
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <div>
          <div class="newsletter-label">Newsletter</div>
          <div class="newsletter-title">Our Popular Courses</div>
          <div class="newsletter-desc">
            Problems trying to resolve the conflict between<br>
            the two major realms of Classical physics: Newtonian mechanics
          </div>
          <form class="newsletter-form" @submit="${this._onSubmit}">
            <input
              class="newsletter-input"
              type="email"
              placeholder="Your Email"
              required
              autocomplete="email"
            />
            <button class="newsletter-button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    `;
  }

  _onSubmit(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector('.newsletter-input');
    alert(`Subscribed with: ${input.value}`);
    input.value = '';
  }
}

customElements.define('newsletter-section', NewsletterSection);
