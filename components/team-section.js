import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class TeamSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #2c3756;
      min-height: 100vh;
      color: #fff;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 64px 16px 0 16px;
    }
    .subtitle {
      color: #a78bfa;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    .title {
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 16px;
      color: #fff;
      line-height: 1.1;
    }
    .desc {
      color: #cbd5e1;
      font-size: 1.13rem;
      margin-bottom: 54px;
      max-width: 600px;
    }
    .cards-row {
      display: flex;
      justify-content: center;
      gap: 32px;
      margin-top: 24px;
      flex-wrap: wrap;
    }
    .card {
      background: #fff;
      color: #222;
      border-radius: 24px;
      box-shadow: 0 4px 24px rgba(40,50,92,0.10);
      width: 260px;
      min-height: 360px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      margin-bottom: 24px;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card:hover {
      box-shadow: 0 8px 32px rgba(40,50,92,0.18);
      transform: translateY(-4px) scale(1.03);
    }
    .card-img {
      width: 100%;
      height: 230px;
      object-fit: cover;
      background: #eee;
    }
    .card-info {
      padding: 28px 18px 22px 18px;
      width: 100%;
      text-align: center;
      background: #fff;
    }
    .card-name {
      font-size: 1.11rem;
      font-weight: bold;
      margin-bottom: 6px;
      color: #222;
    }
    .card-role {
      color: #b0b8c9;
      font-size: 1.01rem;
      margin-bottom: 18px;
    }
    .card-socials {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-top: 6px;
    }
    .card-socials a {
      color: #a78bfa;
      font-size: 1.28rem;
      transition: color 0.18s;
      text-decoration: none;
    }
    .card-socials a:hover {
      color: #7c3aed;
    }
    @media (max-width: 1100px) {
      .cards-row {
        gap: 18px;
      }
      .card {
        width: 220px;
      }
    }
    @media (max-width: 900px) {
      .container {
        padding: 32px 4px 0 4px;
      }
      .cards-row {
        flex-wrap: wrap;
        gap: 14px;
      }
      .card {
        width: 90vw;
        max-width: 340px;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="subtitle">Team</div>
        <div class="title">Watch our Courses</div>
        <div class="desc">
          Problems trying to resolve the conflict between<br>
          the two major realms of Classical physics: Newtonian mechanics
        </div>
        <div class="cards-row">
          ${this.memberCard({
            img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&w=400&h=400&fit=facearea",
            name: "Julian Jameson",
            role: "Profession"
          })}
          ${this.memberCard({
            img: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=400&h=400&fit=facearea",
            name: "Julian Jameson",
            role: "Profession"
          })}
          ${this.memberCard({
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=400&h=400&fit=facearea",
            name: "Julian Jameson",
            role: "Profession"
          })}
          ${this.memberCard({
            img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=400&h=400&fit=facearea",
            name: "Julian Jameson",
            role: "Profession"
          })}
        </div>
      </div>
    `;
  }

  memberCard({ img, name, role }) {
    return html`
      <div class="card">
        <img class="card-img" src="${img}" alt="${name}">
        <div class="card-info">
          <div class="card-name">${name}</div>
          <div class="card-role">${role}</div>
          <div class="card-socials">
            <a href="#" title="Facebook" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.326v21.348c0 .73.593 1.326 1.324 1.326h11.495v-9.294h-3.122v-3.622h3.122v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.596 1.324-1.326v-21.349c0-.733-.594-1.326-1.324-1.326z"/></svg>
            </a>
            <a href="#" title="Instagram" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.548.334-3.522 1.308-.974.974-1.25 2.246-1.308 3.522-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.548 1.308 3.522.974.974 2.246 1.25 3.522 1.308 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.548-.334 3.522-1.308.974-.974 1.25-2.246 1.308-3.522.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.548-1.308-3.522-.974-.974-2.246-1.25-3.522-1.308-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="#" title="Twitter" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.927 0 .386.044.763.127 1.124-4.094-.205-7.725-2.166-10.159-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 1.982 1.397 3.837 3.448 4.253a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.459-2.548z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('team-section', TeamSection);
