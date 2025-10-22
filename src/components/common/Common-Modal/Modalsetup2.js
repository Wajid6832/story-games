import { ImCross } from "react-icons/im";
import styles from "../Common-Modal/Modal2.module.css";
function Modalsetup2({ onHide, setcomponentIndex }) {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}>
      <div className={`bg-white rounded-4 p-4 position-relative text-center ${styles.main}`}>
        
        <button
          onClick={onHide}
          className="btn btn-light position-absolute top-0 end-0 m-2 p-2 rounded-circle"
        >
          <ImCross size={12} />
        </button>

        <div className="text-center mb-3">
          {/* <img src={image} alt="apply" className={styles.img} /> */}
        </div>

        <h5 className="fw-semibold mb-3">Apply for Position</h5>

        <form>
          <input
            type="text"
            placeholder="Enter full name"
            className="form-control mb-3"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="form-control mb-3"
          />
        
          <button type="submit" className="btn btn-primary w-100 rounded-3" onClick={() => setcomponentIndex(2)}>
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modalsetup2;
