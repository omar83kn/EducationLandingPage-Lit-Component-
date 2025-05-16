import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class LitHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 1439px;
        max-width: 100vw;
        min-height: 682px;
        height: auto;
        background: #26335D;
        color: #fff;
        font-family: 'Montserrat', Arial, sans-serif;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
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
        gap: 40px;
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
        width: 600px;
        height: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .hero-img {
        position: relative;
        z-index: 2;
        width: 704px;
        max-width: 90vw;
      }
      /* Abstract shapes */
      .shape {
        position: absolute;
        z-index: 1;
        opacity: 0.95;
      }
      /* Decorative lines */
      .line {
        position: absolute;
        z-index: 3;
        width: 140px;
        height: 70px;
        border: 2px solid #fff;
        border-radius: 60px 60px 60px 60px/60px 60px 60px 60px;
        opacity: 0.7;
      }
      .line.one { top: 100px; left: 260px; transform: rotate(10deg);}
      .line.two { top: 420px; left: 120px; width: 110px; height: 50px;}
      .line.three { bottom: 80px; right: 40px; width: 100px; height: 80px;}
      /* Responsive styles (optional, you may want to adjust or remove for fixed width) */
      @media (max-width: 1439px) {
        :host {
          width: 100vw;
        }
      }
      @media (max-width: 900px) {
        .nav, .header-main {
          padding: 20px 18px 0 18px;
        }
        .header-main {
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
        }
        .header-visual {
          width: 100%;
          max-width: 370px;
          height: 440px;
        }
        .hero-img {
          width: 340px;
        }
        .header-content {
          max-width: 100vw;
        }
      }
      @media (max-width: 600px) {
        .nav, .header-main {
          flex-direction: column;
          align-items: flex-start;
          padding: 16px 4vw 0 4vw;
        }
        .nav-links {
          gap: 18px;
          margin: 18px 0 0 0;
          font-size: 0.98rem;
        }
        .nav-actions {
          gap: 12px;
          margin: 16px 0 0 0;
        }
        .brand {
          font-size: 1.5rem;
        }
        .header-main {
          gap: 24px;
        }
        .header-visual {
          max-width: 98vw;
          width: 100%;
          height: 260px;
        }
        .hero-img {
          width: 98vw;
          max-width: 300px;
        }
        .title {
          font-size: 2rem;
        }
        .subtitle {
          font-size: 1rem;
        }
        .cta {
          padding: 10px 16px;
          font-size: 0.95rem;
        }
      }
      @media (max-width: 400px) {
        .hero-img {
          max-width: 90vw;
        }
        .header-visual {
          height: 180px;
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
          <div class="shape blue"></div>
          <div class="shape orange"></div>
          <div class="shape yellow"></div>
          <div class="line one"></div>
          <div class="line two"></div>
          <div class="line three"></div>
          <img class="hero-img" src="./Images/Happy Student.png" alt="Happy Student">
        </div>
      </section>
    `;
  }
}

customElements.define('lit-header', LitHeader);
