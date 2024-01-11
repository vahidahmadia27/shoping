import { Link } from "react-router-dom";

const Groups = () => {
  const images = {};

  function importAll(r) {
    r.keys().forEach((key) => (images[key] = r(key)));
  }

  importAll(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="groups">
      <div className="d-flex justify-content-center ">
        <Link to={"./shop/bedroom"}>
          <img src={images["./bedroom.png"]} alt="" />
          <h5 className="text-center">Bedroom</h5>
        </Link>

        <Link to={"./shop/dining"}>
          <img src={images["./dining.png"]} alt="" />
          <h5 className="text-center">dining</h5>
        </Link>

        <Link to={"./shop/living"}>
          <img src={images["./living.png"]} alt="" />
          <h5 className="text-center">living</h5>
        </Link>
      </div>
    </div>
  );
};

export default Groups;
