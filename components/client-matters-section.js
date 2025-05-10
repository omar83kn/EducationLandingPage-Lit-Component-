import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class ClientMattersSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #26335D;
      color: #fff;
      font-family: 'Montserrat', Arial, sans-serif;
      padding: 0;
      min-height: 100vh;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .subtitle {
      color: #a78bfa;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 16px;
    }
    .title {
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 18px;
      line-height: 1.1;
      color: #fff;
    }
    .desc {
      color: #cbd5e1;
      font-size: 1.1rem;
      margin-bottom: 40px;
      max-width: 600px;
    }
    .cards-row {
      display: flex;
      justify-content: center;
      gap: 36px;
      margin-top: 32px; 
    }
    .card {
      background: #fff;
      color: #222;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(40,50,92,0.08);
      width: 260px;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 38px 22px 30px 22px;
      text-align: center;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card:hover {
      box-shadow: 0 8px 32px rgba(40,50,92,0.16);
      transform: translateY(-4px) scale(1.03);
    }
    .card-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
    }
    .card-title {
      font-size: 1.15rem;
      font-weight: bold;
      margin-bottom: 8px;
      color: #222;
    }
    .card-title b {
      font-weight: bold;
    }
    .card-underline {
      width: 38px;
      height: 3px;
      background: #c63b3b;
      border-radius: 2px;
      margin: 0 auto 14px auto;
    }
    .card-desc {
      color: #888;
      font-size: 1rem;
    }
    @media (max-width: 1100px) {
      .cards-row {
        gap: 20px;
      }
      .card {
        width: 220px;
        padding: 28px 12px 24px 12px;
      }
    }
    @media (max-width: 900px) {
      .container {
        padding: 32px 8px 32px 8px;
      }
      .cards-row {
        flex-wrap: wrap;
        gap: 16px;
      }
      .card {
        width: 90vw;
        max-width: 320px;
      }
    }
    /* --- Enhanced Mobile Responsiveness --- */
    @media (max-width: 600px) {
      .container {
        padding: 16px 4px 16px 4px;
      }
      .title {
        font-size: 1.6rem;
        margin-bottom: 12px;
      }
      .desc {
        font-size: 0.98rem;
        margin-bottom: 24px;
        max-width: 95vw;
      }
      .cards-row {
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-top: 18px;
      }
      .card {
        width: 98vw;
        max-width: 360px;
        padding: 18px 8px 16px 8px;
        min-height: unset;
      }
      .card-title {
        font-size: 1rem;
      }
      .card-icon {
        width: 48px;
        height: 48px;
        margin-bottom: 14px;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="subtitle">Practice Advice</div>
        <div class="title">Every Client Matters</div>
        <div class="desc">
          Problems trying to resolve the conflict between<br>
          the two major realms of Classical physics: Newtonian mechanics
        </div>
        <div class="cards-row">
          <div class="card">
            <img class="card-icon" src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Training Courses" />
            <div class="card-title">training Courses</div>
            <div class="card-underline"></div>
            <div class="card-desc">
              The gradual accumulation of information about
            </div>
          </div>
          <div class="card">
            <img class="card-icon" src="https://cdn-icons-png.flaticon.com/512/2721/2721295.png" alt="Online Courses" />
            <div class="card-title"><b>2,769 online courses</b></div>
            <div class="card-underline"></div>
            <div class="card-desc">
              The gradual accumulation of information about
            </div>
          </div>
          <div class="card">
            <img class="card-icon" src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png" alt="Books Library" />
            <div class="card-title">Books Liberary</div>
            <div class="card-underline"></div>
            <div class="card-desc">
              The gradual accumulation of information about
            </div>
          </div>
          <div class="card">
            <img class="card-icon" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="Online Courses" />
            <div class="card-title"><b>2,769 online courses</b></div>
            <div class="card-underline"></div>
            <div class="card-desc">
              The gradual accumulation of information about
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('client-matters-section', ClientMattersSection);
