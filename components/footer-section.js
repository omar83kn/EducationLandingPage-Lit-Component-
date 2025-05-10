import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #fff;
      font-family: 'Montserrat', Arial, sans-serif;
      color: #222;
    }
    .footer-main {
      display: flex;
      justify-content: center;
      gap: 60px;
      padding: 54px 16px 36px 16px;
      max-width: 1300px;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    .footer-col {
      min-width: 150px;
      margin-bottom: 18px;
    }
    .footer-col-title {
      font-weight: bold;
      font-size: 1.08rem;
      margin-bottom: 20px;
      color: #222;
    }
    .footer-link {
      display: block;
      color: #555;
      text-decoration: none;
      font-size: 1rem;
      margin-bottom: 12px;
      font-weight: 500;
      transition: color 0.18s;
    }
    .footer-link:hover {
      color: #a78bfa;
    }
    .footer-contact {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 14px;
      color: #555;
      font-size: 1rem;
      font-weight: 500;
    }
    .footer-contact svg {
      color: #a78bfa;
      min-width: 20px;
      min-height: 20px;
      margin-top: 2px;
    }
    .footer-bottom {
      background: #f9f9f9;
      padding: 22px 16px 18px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      border-top: 1px solid #eee;
    }
    .footer-copy {
      color: #555;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      margin-bottom: 8px;
    }
    .footer-socials {
      display: flex;
      gap: 28px;
    }
    .footer-socials a {
      color: #a78bfa;
      font-size: 1.6rem;
      transition: color 0.18s;
      text-decoration: none;
    }
    .footer-socials a:hover {
      color: #7c3aed;
    }

    /* Tablet */
    @media (max-width: 950px) {
      .footer-main {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .footer-col {
        min-width: 180px;
      }
    }

    /* Mobile */
    @media (max-width: 700px) {
      .footer-main {
        flex-direction: column;
        gap: 0;
        padding: 34px 6vw 20px 6vw;
        align-items: stretch;
      }
      .footer-col {
        min-width: 0;
        width: 100%;
        margin-bottom: 28px;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        padding: 16px 6vw 14px 6vw;
      }
      .footer-socials {
        gap: 18px;
        margin-top: 8px;
      }
      .footer-copy {
        font-size: 0.95rem;
      }
    }

    /* Extra Small Devices */
    @media (max-width: 430px) {
      .footer-main {
        padding: 22px 2vw 10px 2vw;
      }
      .footer-col-title {
        font-size: 1rem;
        margin-bottom: 14px;
      }
      .footer-link, .footer-contact {
        font-size: 0.98rem;
      }
      .footer-bottom {
        padding: 10px 2vw 10px 2vw;
      }
      .footer-socials a {
        font-size: 1.3rem;
      }
    }
  `;

  render() {
    return html`
      <footer>
        <div class="footer-main">
          <div class="footer-col">
            <div class="footer-col-title">Company Info</div>
            <a class="footer-link" href="#">About Us</a>
            <a class="footer-link" href="#">Carrier</a>
            <a class="footer-link" href="#">We are hiring</a>
            <a class="footer-link" href="#">Blog</a>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Legal</div>
            <a class="footer-link" href="#">About Us</a>
            <a class="footer-link" href="#">Carrier</a>
            <a class="footer-link" href="#">We are hiring</a>
            <a class="footer-link" href="#">Blog</a>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Features</div>
            <a class="footer-link" href="#">Business Marketing</a>
            <a class="footer-link" href="#">User Analytic</a>
            <a class="footer-link" href="#">Live Chat</a>
            <a class="footer-link" href="#">Unlimited Support</a>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Resources</div>
            <a class="footer-link" href="#">IOS & Android</a>
            <a class="footer-link" href="#">Watch a Demo</a>
            <a class="footer-link" href="#">Customers</a>
            <a class="footer-link" href="#">API</a>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Get In Touch</div>
            <div class="footer-contact">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.54 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.6 6.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.54.57A2 2 0 0 1 22 16.92z"/></svg>
              (480) 555-0103
            </div>
            <div class="footer-contact">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              4517 Washington Ave. Manchester,<br />Kentucky 39495
            </div>
            <div class="footer-contact">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8l8 5 8-5v12H4z"/></svg>
              debra.holt@example.com
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">
            Made With Love By Figmaland All Right Reserved
          </div>
          <div class="footer-socials">
            <a href="#" title="Facebook" aria-label="Facebook">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.326v21.348c0 .73.593 1.326 1.324 1.326h11.495v-9.294h-3.122v-3.622h3.122v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.596 1.324-1.326v-21.349c0-.733-.594-1.326-1.324-1.326z"/></svg>
            </a>
            <a href="#" title="Instagram" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.548.334-3.522 1.308-.974.974-1.25 2.246-1.308 3.522-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.548 1.308 3.522.974.974 2.246 1.25 3.522 1.308 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.548-.334 3.522-1.308.974-.974 1.25-2.246 1.308-3.522.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.548-1.308-3.522-.974-.974-2.246-1.25-3.522-1.308-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="#" title="Twitter" aria-label="Twitter">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.927 0 .386.044.763.127 1.124-4.094-.205-7.725-2.166-10.159-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 1.982 1.397 3.837 3.448 4.253a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.459-2.548z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-section', FooterSection);
