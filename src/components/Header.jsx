function Header() {
  return (
    <div className="header">
      <img src="./src/assets/profile.jpeg" alt="profile" className="profile" />
      <div className="infos">
        <h2>Jean Pierre Akimana</h2>
        <h4>Software Developer</h4>
        <h5>akimana.website</h5>
        <div className="contact-button">
          <button>Email</button>
          <button>LIn</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
