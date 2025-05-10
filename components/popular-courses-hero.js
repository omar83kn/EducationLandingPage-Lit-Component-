import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class PopularCoursesHero extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #26335D;
      min-height: 100vh;
      color: #fff;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .hero-section {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 0 5vw;
      box-sizing: border-box;
      gap: 40px;
    }
    .hero-image-col {
      position: relative;
      width: 420px;
      min-width: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-img-bg {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 40px;
      width: 350px;
      height: 370px;
      pointer-events: none;
      max-width: 100%;
    }
    .hero-img {
      position: relative;
      z-index: 2;
      width: 340px;
      max-width: 90vw;
      border-radius: 18px;
      background: transparent;
      height: auto;
      object-fit: cover;
    }
    .hero-content-col {
      max-width: 420px;
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .hero-bar {
      width: 54px;
      height: 5px;
      background: #ff5757;
      border-radius: 2px;
      margin-bottom: 18px;
    }
    .hero-title {
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 18px;
      color: #fff;
      line-height: 1.1;
    }
    .hero-desc {
      color: #bfc8e2;
      font-size: 1.08rem;
      margin-bottom: 32px;
      line-height: 1.5;
    }
    .hero-link {
      color: #a78bfa;
      font-weight: 600;
      font-size: 1.08rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      transition: color 0.18s;
    }
    .hero-link:hover {
      color: #fff;
    }
    .hero-link .arrow {
      margin-left: 8px;
      font-size: 1.2em;
      vertical-align: middle;
      transition: margin-left 0.18s;
    }
    .hero-link:hover .arrow {
      margin-left: 14px;
    }
    /* Tablet */
    @media (max-width: 1100px) {
      .hero-section {
        gap: 24px;
      }
      .hero-image-col {
        width: 340px;
        min-width: 0;
      }
      .hero-img-bg {
        width: 260px;
        height: 270px;
      }
      .hero-img {
        width: 240px;
      }
      .hero-content-col {
        max-width: 100vw;
        margin-left: 0;
      }
    }
    /* Tablet portrait and small laptops */
    @media (max-width: 900px) {
      .hero-section {
        flex-direction: column;
        gap: 32px;
        padding: 36px 4vw;
        min-height: unset;
      }
      .hero-image-col {
        width: 100%;
        justify-content: center;
        margin-bottom: 0;
      }
      .hero-content-col {
        align-items: center;
        text-align: center;
        margin-left: 0;
      }
      .hero-title {
        font-size: 2.2rem;
      }
      .hero-desc {
        font-size: 1rem;
      }
    }
    /* Mobile */
    @media (max-width: 600px) {
      .hero-section {
        padding: 24px 2vw;
        gap: 20px;
      }
      .hero-image-col {
        width: 100%;
        min-width: 0;
      }
      .hero-img-bg,
      .hero-img {
        width: 98vw;
        max-width: 320px;
        min-width: 0;
      }
      .hero-img {
        border-radius: 12px;
      }
      .hero-title {
        font-size: 1.4rem;
      }
      .hero-desc {
        font-size: 0.97rem;
        margin-bottom: 22px;
      }
      .hero-bar {
        margin-bottom: 12px;
      }
      .hero-link {
        font-size: 1rem;
      }
    }
    /* Extra small devices */
    @media (max-width: 400px) {
      .hero-title {
        font-size: 1.1rem;
      }
      .hero-img-bg,
      .hero-img {
        max-width: 96vw;
      }
    }
  `;

  render() {
    return html`
      <section class="hero-section">
        <div class="hero-image-col">
          <!-- Abstract SVG background shapes -->
          <svg class="hero-img-bg" viewBox="0 0 350 370" fill="none">
            <path d="M80 60 Q40 180 160 170 Q280 160 260 90 Q240 20 120 30 Z" fill="#a78bfa" opacity="0.7"/>
            <ellipse cx="250" cy="220" rx="60" ry="50" fill="#23b2fc" opacity="0.5"/>
            <ellipse cx="90" cy="320" rx="60" ry="30" fill="#ff6d00" opacity="0.3"/>
            <path d="M60 250 Q120 210 180 260" stroke="#b388ff" stroke-width="4" fill="none"/>
          </svg>
          <!-- Main image -->
          <img class="hero-img"
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400&h=500&fit=facearea"
            alt="Popular Courses Student"
          />
        </div>
        <div class="hero-content-col">
          <div class="hero-bar"></div>
          <div class="hero-title">Our Popular<br>Courses</div>
          <div class="hero-desc">
            Problems trying to resolve the conflict between<br>
            the two major realms of Classical physics: Newtonian mechanics
          </div>
          <a href="#" class="hero-link">Learn More <span class="arrow">&#8594;</span></a>
        </div>
      </section>
    `;
  }
}

customElements.define('popular-courses-hero', PopularCoursesHero);
