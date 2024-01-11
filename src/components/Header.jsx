import { BACKGROUNDCOLOR, BTNTITLE, TITLETEXT } from "../helpers/colors";

const Header = () => {
  return (
    <div className=" d-flex justify-content-center p-0 m-0">
      <header className="  header">
        <div
          style={{ backgroundColor: BACKGROUNDCOLOR }}
          className="header-title"
        >
          <div className=" d-flex header-background">
            <div className="row align-items-start justify-content-between">
              <small>New arival</small>

              <h2 style={{ color: TITLETEXT }}>Discover Our New Collection</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat obcaecati qui ipsum aperiam nostrum?
              </p>

              <button
                style={{ backgroundColor: BTNTITLE }}
                className=" btn-title"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
