import LoaderSpinner from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div>
    <LoaderSpinner
      className={s.loader}
      type="Circles"
      color="#da811d"
      height={100}
      width={100}
      timeout={10000}
    />
  </div>
);

export default Loader;
