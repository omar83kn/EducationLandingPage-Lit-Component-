import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class PopularCoursesSection extends LitElement {
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
      padding: 60px 16px 60px 16px;
    }
    .subtitle {
      color: #a78bfa;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 12px;
    }
    .title {
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 14px;
      line-height: 1.1;
      color: #fff;
    }
    .desc {
      color: #cbd5e1;
      font-size: 1.1rem;
      margin-bottom: 48px;
      max-width: 600px;
    }
    .cards-row {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .card {
      background: #fff;
      color: #222;
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(40,50,92,0.10);
      width: 240px;
      height: 602px;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      overflow: hidden;
      position: relative;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card:hover {
      box-shadow: 0 8px 32px rgba(40,50,92,0.18);
      transform: translateY(-4px) scale(1.03);
    }
    .card-img-container {
      position: relative;
      width: 100%;
      height: 220px;
      overflow: hidden;
    }
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .card-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      background: #f44336;
      color: #fff;
      font-size: 0.93rem;
      font-weight: 600;
      border-radius: 6px;
      padding: 3px 14px;
      z-index: 2;
      letter-spacing: 0.5px;
    }
    .card-actions {
      position: absolute;
      bottom: 8px;
      right: 12px;
      display: flex;
      gap: 12px;
      z-index: 2;
    }
    .card-action-btn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #f4f6fb;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(40,50,92,0.08);
      transition: background 0.18s;
      font-size: 1.1rem;
      color: #25305a;
    }
    .card-action-btn:hover {
      background: #a78bfa;
      color: #fff;
    }
    .card-body {
      padding: 26px 18px 18px 18px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .card-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .card-welcome {
      color: #7c3aed;
      font-size: 0.98rem;
      font-weight: 600;
    }
    .card-welcome[blue] {
      color: #3b82f6;
    }
    .card-rating {
      display: flex;
      align-items: center;
      font-size: 0.97rem;
      color: #fbbf24;
      font-weight: 600;
      gap: 2px;
    }
    .card-title {
      font-size: 1.13rem;
      font-weight: bold;
      margin-bottom: 6px;
      color: #222;
    }
    .card-desc {
      color: #888;
      font-size: 0.98rem;
      margin-bottom: 16px;
    }
    .card-sales {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 1rem;
      color: #25305a;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .card-sales-icon {
      font-size: 1.1rem;
    }
    .card-pricing-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
    }
    .card-old-price {
      color: #888;
      text-decoration: line-through;
      font-size: 1rem;
    }
    .card-new-price {
      color: #f44336;
      font-size: 1.07rem;
      font-weight: 700;
    }
    .card-learn-btn {
      margin-top: auto;
      background: none;
      border: 2px solid #a78bfa;
      color: #a78bfa;
      border-radius: 24px;
      padding: 13px 0;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
      outline: none;
      text-decoration: none;
      display: block;
      width: 100%;
      text-align: center;
    }
    .card-learn-btn:hover {
      background: #a78bfa;
      color: #fff;
    }
    .card-learn-btn .arrow {
      margin-left: 7px;
      font-size: 1.08em;
      vertical-align: middle;
    }

    /* Tablet */
    @media (max-width: 1100px) {
      .cards-row {
        gap: 18px;
      }
      .card {
        width: 220px;
      }
    }
    /* Small Tablet */
    @media (max-width: 900px) {
      .container {
        padding: 32px 4px 32px 4px;
      }
      .cards-row {
        gap: 14px;
      }
      .card {
        width: 90vw;
        max-width: 340px;
        height: 580px;
      }
      .title {
        font-size: 2.1rem;
      }
      .desc {
        font-size: 1rem;
      }
    }
    /* Mobile */
    @media (max-width: 600px) {
      .container {
        padding: 22px 2vw 22px 2vw;
      }
      .title {
        font-size: 1.3rem;
        margin-bottom: 10px;
      }
      .desc {
        font-size: 0.97rem;
        margin-bottom: 22px;
      }
      .cards-row {
        flex-direction: column;
        gap: 12px;
        align-items: center;
      }
      .card {
        width: 98vw;
        max-width: 400px;
        min-width: 0;
        height: auto;
      }
      .card-img-container {
        height: 180px;
      }
      .card-body {
        padding: 18px 10px 12px 10px;
      }
      .card-title {
        font-size: 1rem;
      }
      .card-desc {
        font-size: 0.93rem;
      }
      .card-learn-btn {
        padding: 11px 0;
        font-size: 0.97rem;
      }
    }
    /* Extra small devices */
    @media (max-width: 400px) {
      .card {
        max-width: 98vw;
      }
      .card-img-container {
        height: 120px;
      }
      .title {
        font-size: 1.05rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="subtitle">Courses</div>
        <div class="title">Most Popular Courses</div>
        <div class="desc">
          Problems trying to resolve the conflict between<br>
          the two major realms of Classical physics: Newtonian mechanics
        </div>
        <div class="cards-row">
          ${this.courseCard({
            img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=220&q=80",
            badge: "Sale",
            welcome: "Welcome",
            rating: "4.9",
            title: "Expert instruction",
            desc: "We focus on ergonomics and meeting you....",
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48"
          })}
          ${this.courseCard({
            img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=220&q=80",
            badge: "Sale",
            welcome: "Welcome",
            rating: "4.9",
            title: "2,769 online courses",
            desc: "We focus on ergonomics and meeting you....",
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48"
          })}
          ${this.courseCard({
            img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=facearea&w=400&h=220&q=80",
            badge: "Sale",
            welcome: "For Better Future",
            welcomeBlue: true,
            rating: "4.9",
            title: "Training Courses",
            desc: "We focus on ergonomics and meeting you....",
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48"
          })}
          ${this.courseCard({
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=220&q=80",
            badge: "Sale",
            welcome: "Welcome",
            rating: "4.9",
            title: "Lifetime access",
            desc: "We focus on ergonomics and meeting you....",
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48"
          })}
        </div>
      </div>
    `;
  }

  courseCard({ img, badge, welcome, welcomeBlue, rating, title, desc, sales, oldPrice, newPrice }) {
    return html`
      <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${img}" alt="${title}">
          <div class="card-badge">${badge}</div>
          <div class="card-actions">
            <button class="card-action-btn" title="Favorite">&#9825;</button>
            <button class="card-action-btn" title="Add to cart">&#128722;</button>
            <button class="card-action-btn" title="View">&#128065;</button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-top-row">
            <span class="card-welcome" ?blue="${welcomeBlue}">${welcome}</span>
            <span class="card-rating">&#11088; ${rating}</span>
          </div>
          <div class="card-title">${title}</div>
          <div class="card-desc">${desc}</div>
          <div class="card-sales">
            <span class="card-sales-icon">&#128190;</span>
            <span>${sales} Sales</span>
          </div>
          <div class="card-pricing-row">
            <span class="card-old-price">${oldPrice}</span>
            <span class="card-new-price">${newPrice}</span>
          </div>
          <a href="#" class="card-learn-btn">Learn More <span class="arrow">&#8594;</span></a>
        </div>
      </div>
    `;
  }
}

customElements.define('popular-courses-section', PopularCoursesSection);
