
import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class LitHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: #26335D;
        color: #fff;
        font-family: 'Montserrat', Arial, sans-serif;
        min-height: 80vh;
        min-width:50vh;
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32px 64px 0 64px;
      }
      .brand {
        font-weight: bold;
        font-size: 2rem;
        letter-spacing: 1px;
      }
      .nav-links {
        display: flex;
        gap: 32px;
        font-size: 1rem;
      }
      .nav-links a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
      }
      .nav-links a:hover {
        color: #a78bfa;
      }
      .nav-actions {
        display: flex;
        align-items: center;
        gap: 24px;
      }
      .login {
        color: #fff;
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;
      }
      .join {
        background: linear-gradient(90deg, #a78bfa 0%, #6366f1 100%);
        color: #fff;
        border: none;
        padding: 10px 28px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s;
      }
      .join:hover {
        background: linear-gradient(90deg, #6366f1 0%, #a78bfa 100%);
      }
      .header-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 48px 64px 0 64px;
      }
      .header-content {
        max-width: 480px;
      }
      .welcome {
        color: #a78bfa;
        font-size: 1rem;
        margin-bottom: 8px;
      }
      .title {
        font-size: 3rem;
        font-weight: bold;
        margin: 0 0 16px 0;
        line-height: 1.1;
      }
      .subtitle {
        font-size: 1.15rem;
        color: #cbd5e1;
        margin-bottom: 32px;
      }
      .cta-buttons {
        display: flex;
        gap: 16px;
      }
      .cta {
        padding: 14px 28px;
        border-radius: 8px;
        border: none;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }
      .cta.primary {
        background: #a78bfa;
        color: #fff;
      }
      .cta.secondary {
        background: transparent;
        color: #a78bfa;
        border: 2px solid #a78bfa;
      }
      .cta.secondary:hover {
        background: #a78bfa;
        color: #fff;
      }
      .header-visual {
        position: relative;
        width: 420px;
        height: 520px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .hero-img {
        position: relative;
        z-index: 2;
        width:700px;
        border-radius: 24px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.18);
      }
      /* Abstract shapes */
      .shape {
        position: absolute;
        z-index: 1;
        opacity: 0.95;
      }
      .shape.blue {
        background: #23b2fc;
        width: 220px;
        height: 140px;
        border-radius: 60% 40% 60% 40%/60% 40% 60% 40%;
        top: 40px;
        left: 60px;
      }
      .shape.orange {
        background: linear-gradient(90deg, #ff9800 60%, #ff6d00 100%);
        width: 160px;
        height: 100px;
        border-radius: 50% 50% 40% 60%/60% 40% 60% 40%;
        top: 160px;
        left: 0px;
      }
      .shape.yellow {
        background: linear-gradient(90deg, #ffe066 60%, #ffb300 100%);
        width: 80px;
        height: 60px;
        border-radius: 50% 50% 40% 60%/60% 40% 60% 40%;
        bottom: 40px;
        right: 0px;
      }
      /* Decorative lines */
      .line {
        position: absolute;
        z-index: 3;
        width: 120px;
        height: 60px;
        border: 2px solid #fff;
        border-radius: 60px 60px 60px 60px/60px 60px 60px 60px;
        opacity: 0.7;
      }
      .line.one { top: 80px; left: 200px; transform: rotate(10deg);}
      .line.two { top: 320px; left: 100px; width: 90px; height: 40px;}
      .line.three { bottom: 60px; right: 40px; width: 80px; height: 60px;}
      /* Responsive */
      @media (max-width: 1024px) {
        .header-main {
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
        }
        .header-visual {
          width: 100%;
          max-width: 340px;
          height: 420px;
        }
      }
      @media (max-width: 700px) {
        .nav, .header-main {
          flex-direction: column;
          align-items: flex-start;
          padding: 24px 16px 0 16px;
        }
        .header-main {
          gap: 20px;
        }
      }
    `;
  }

  render() {
    return html`
      <nav class="nav">
        <div class="brand">BrandName</div>
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div class="nav-actions">
          <button class="login">Login</button>
          <button class="join">JOIN US</button>
        </div>
      </nav>
      <section class="header-main">
        <div class="header-content">
          <div class="welcome">Welcome</div>
          <div class="title">Best Learning<br>Opportunities</div>
          <div class="subtitle">Every day brings with it a fresh set of learning possibilities.</div>
          <div class="cta-buttons">
            <button class="cta primary">Get Quote Now</button>
            <button class="cta secondary">Learn More</button>
          </div>
        </div>
        <div class="header-visual">
          <!-- Abstract shapes behind the image -->
          <div class="shape blue"></div>
          <div class="shape orange"></div>
          <div class="shape yellow"></div>
          <div class="line one"></div>
          <div class="line two"></div>
          <div class="line three"></div>
          <!-- Replace the src below with your own image if desired -->
          <img class="hero-img" src="./images/happy student.png" alt="Happy Student">
        </div>
      </section>
    `;
  }
}

customElements.define('lit-header', LitHeader);
