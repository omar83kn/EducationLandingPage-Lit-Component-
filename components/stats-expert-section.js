import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class StatsExpertSection extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: #26335D;
        color: #fff;
        font-family: 'Montserrat', Arial, sans-serif;
        min-height: 100vh;
        padding: 0;
      }
      .stats-row {
        display: flex;
        justify-content: center;
        gap: 80px;
        padding: 64px 0 48px 0;
        flex-wrap: wrap;
      }
      .stat {
        text-align: center;
        min-width: 120px;
      }
      .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        color: #a78bfa;
        margin-bottom: 4px;
      }
      .stat-label {
        font-size: 1.1rem;
        color: #e0e7ef;
        font-weight: 500;
      }
      .expert-section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 64px;
        margin-top: 32px;
        padding: 0 24px;
      }
      .video-thumb-container {
        position: relative;
        width: 700px;
        height: 400px;
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        background: #222;
        flex-shrink: 0;
        max-width: 100%;
      }
      .video-thumb {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 56px;
        height: 56px;
        background: #a78bfa;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
        transition: background 0.2s;
        border: none;
        outline: none;
      }
      .play-button:hover {
        background: #7c3aed;
      }
      .play-icon {
        width: 24px;
        height: 24px;
        fill: #fff;
        margin-left: 4px;
      }
      .expert-content {
        max-width: 390px;
      }
      .accent-bar {
        width: 44px;
        height: 4px;
        background: #ff5757;
        border-radius: 2px;
        margin-bottom: 18px;
      }
      .expert-title {
        font-size: 2rem;
        font-weight: bold;
        margin: 0 0 16px 0;
        color: #fff;
      }
      .expert-desc {
        color: #b6c2e2;
        font-size: 1.05rem;
        margin-bottom: 24px;
        line-height: 1.6;
      }
      .learn-link {
        color: #a78bfa;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        transition: color 0.2s;
      }
      .learn-link:hover {
        color: #fff;
      }
      .learn-link .arrow {
        margin-left: 6px;
        font-size: 1.1em;
        vertical-align: middle;
      }

      /* Tablet */
      @media (max-width: 1100px) {
        .stats-row {
          gap: 40px;
          padding: 48px 0 32px 0;
        }
        .expert-section {
          gap: 36px;
        }
        .video-thumb-container {
          width: 440px;
          height: 260px;
        }
        .expert-content {
          max-width: 100vw;
        }
      }
      /* Tablet & Small Laptop */
      @media (max-width: 900px) {
        .stats-row {
          gap: 24px;
        }
        .expert-section {
          flex-direction: column;
          gap: 36px;
          padding: 0 8vw;
        }
        .video-thumb-container {
          width: 98vw;
          max-width: 400px;
          height: 200px;
        }
        .expert-content {
          align-items: center;
          text-align: center;
        }
      }
      /* Mobile */
      @media (max-width: 600px) {
        .stats-row {
          flex-direction: column;
          align-items: center;
          gap: 18px;
          padding: 32px 0 20px 0;
        }
        .stat-number {
          font-size: 2rem;
        }
        .stat-label {
          font-size: 1rem;
        }
        .expert-section {
          gap: 24px;
          padding: 0 2vw;
        }
        .video-thumb-container {
          width: 98vw;
          max-width: 320px;
          height: 140px;
        }
        .expert-title {
          font-size: 1.3rem;
        }
        .expert-desc {
          font-size: 0.98rem;
          margin-bottom: 18px;
        }
        .accent-bar {
          margin-bottom: 10px;
        }
      }
      /* Extra Small Devices */
      @media (max-width: 400px) {
        .video-thumb-container {
          max-width: 98vw;
          height: 90px;
        }
        .expert-title {
          font-size: 1.05rem;
        }
      }
    `;
  }

  static get properties() {
    return {
      stats: { type: Array }
    };
  }

  constructor() {
    super();
    this.stats = [
      { label: "Happy Customers", value: 15000, suffix: "K", display: 0 },
      { label: "Monthly Visitors", value: 150000, suffix: "K", display: 0 },
      { label: "Countries Worldwide", value: 15, suffix: "", display: 0 },
      { label: "Top Partners", value: 100, suffix: "+", display: 0 }
    ];
  }

  firstUpdated() {
    this.stats.forEach((stat, i) => {
      this.animateNumber(i, stat.value, 1200);
    });
  }

  animateNumber(index, target, duration) {
    const start = 0;
    const startTime = performance.now();
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      let current = Math.floor(progress * target);
      if (this.stats[index].suffix === "K") {
        if (target >= 1000) {
          current = Math.floor(current / 1000);
        }
      }
      if (progress < 1) {
        this.stats = [
          ...this.stats.slice(0, index),
          { ...this.stats[index], display: current },
          ...this.stats.slice(index + 1)
        ];
        requestAnimationFrame(update);
      } else {
        let display = target;
        if (this.stats[index].suffix === "K") {
          display = target >= 1000 ? Math.floor(target / 1000) : target;
        }
        this.stats = [
          ...this.stats.slice(0, index),
          { ...this.stats[index], display },
          ...this.stats.slice(index + 1)
        ];
      }
    };
    requestAnimationFrame(update);
  }

  render() {
    return html`
      <div class="stats-row">
        ${this.stats.map(
          stat => html`
            <div class="stat">
              <div class="stat-number">
                ${stat.display}${stat.suffix}
              </div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `
        )}
      </div>
      <div class="expert-section">
        <div class="video-thumb-container">
          <img 
            class="video-thumb"
            src="./images/child.jpeg"
            alt="Child Reading"
          >
          <button class="play-button" aria-label="Play video">
            <svg class="play-icon" viewBox="0 0 24 24">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          </button>
        </div>
        <div class="expert-content">
          <div class="accent-bar"></div>
          <div class="expert-title">Our Experts Teacher</div>
          <div class="expert-desc">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </div>
          <a href="#" class="learn-link">Learn More <span class="arrow">&#8594;</span></a>
        </div>
      </div>
    `;
  }
}

customElements.define('stats-expert-section', StatsExpertSection);
