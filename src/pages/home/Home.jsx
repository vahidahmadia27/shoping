import { Header } from "../../components";
import Groups from "../../components/Groups";

const Home = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <div className="row mt-2">
        <h5 className="text-center">Browes The Range</h5>
        <Groups />
      </div>
    </div>
  );
};
export default Home;
