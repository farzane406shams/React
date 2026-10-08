import photo1 from "./assets/photo1.png";

const Header = () => {

  return (
    <header>
      <div className="online">
        <img src={photo1} style={{ width: "60px", height: "60px" }} alt="" />
        <a href=""> Watch online</a>
      </div>

      <div className="search">
        <input type="text" placeholder="search..." />
      </div>

      <div >
        <button className="download-btn">Download</button>
        <button className="log-btn">Log In</button>
      </div>
    </header>




  );
};

export default Header;
