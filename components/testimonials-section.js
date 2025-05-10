import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class TestimonialsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #26335D;
      min-height: 100vh;
      color: #fff;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 64px 16px 0 16px;
      text-align: center;
    }
    .subtitle {
      color: #a78bfa;
      font-weight: 600;
      font-size: 1.08rem;
      margin-bottom: 10px;
      text-align: left;
    }
    .title {
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 16px;
      color: #fff;
      text-align: left;
      line-height: 1.1;
    }
    .desc {
      color: #cbd5e1;
      font-size: 1.09rem;
      margin-bottom: 54px;
      text-align: left;
      max-width: 600px;
    }
    .cards-row {
      display: flex;
      justify-content: center;
      gap: 48px;
      margin-top: 48px;
      flex-wrap: wrap;
    }
    .card {
      background: #fff;
      color: #222;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(40,50,92,0.08);
      width: 420px;
      min-height: 320px;
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
    .card-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 22px;
    }
    .card-text {
      color: #888;
      font-size: 1.03rem;
      margin-bottom: 24px;
    }
    .stars {
      color: #ffd600;
      font-size: 1.4rem;
      margin-bottom: 18px;
    }
    .card-name {
      font-weight: bold;
      color: #222;
      font-size: 1.08rem;
      margin-bottom: 3px;
    }
    .card-role {
      color: #888;
      font-size: 1.01rem;
      font-weight: 600;
    }
    /* Tablet */
    @media (max-width: 950px) {
      .cards-row {
        flex-direction: column;
        gap: 28px;
        align-items: center;
      }
      .card {
        width: 98vw;
        max-width: 420px;
      }
      .title {
        font-size: 2rem;
        text-align: center;
      }
      .desc, .subtitle {
        text-align: center;
      }
    }
    /* Mobile */
    @media (max-width: 600px) {
      .section {
        padding: 32px 4px 0 4px;
      }
      .title {
        font-size: 1.3rem;
        margin-bottom: 10px;
      }
      .desc {
        font-size: 0.97rem;
        margin-bottom: 22px;
      }
      .card {
        padding: 22px 8px 18px 8px;
        min-height: 0;
      }
      .card-avatar {
        width: 60px;
        height: 60px;
        margin-bottom: 16px;
      }
      .card-text {
        font-size: 0.96rem;
        margin-bottom: 16px;
      }
      .stars {
        font-size: 1.1rem;
        margin-bottom: 12px;
      }
      .card-name {
        font-size: 1rem;
      }
      .card-role {
        font-size: 0.95rem;
      }
    }
    /* Extra Small Devices */
    @media (max-width: 400px) {
      .card {
        max-width: 98vw;
      }
      .title {
        font-size: 1.05rem;
      }
    }
  `;

  render() {
    return html`
      <div class="section">
        <div class="subtitle">Testimonials</div>
        <div class="title">Get Quality Education</div>
        <div class="desc">
          Problems trying to resolve the conflict between<br>
          the two major realms of Classical physics: Newtonian mechanics
        </div>
        <div class="cards-row">
          ${this.testimonialCard({
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            name: "Regina Miles",
            role: "Designer",
            stars: 4
          })}
          ${this.testimonialCard({
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            name: "Regina Miles",
            role: "Designer",
            stars: 4
          })}
        </div>
      </div>
    `;
  }

  testimonialCard({ img, text, name, role, stars }) {
    return html`
      <div class="card">
        <img class="card-avatar" src="${img}" alt="${name}">
        <div class="card-text">${text}</div>
        <div class="stars">
          ${[1,2,3,4,5].map(i => i <= stars ? '★' : '☆').join('')}
        </div>
        <div class="card-name">${name}</div>
        <div class="card-role">${role}</div>
      </div>
    `;
  }
}

customElements.define('testimonials-section', TestimonialsSection);
