import { ImCross } from "react-icons/im";
import { FaUser, FaEnvelope, FaCloudUploadAlt } from "react-icons/fa";
import styles from "../Common-Modal/Modal2.module.css";
import image from "../../../assets/Frame1.png"

function Modalsetup2({ onHide, setcomponentIndex }) {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}>
      <div className={`bg-white rounded-4 p-4 position-relative text-center ${styles.main}`}>
        
        <button
          onClick={onHide}
          className={`${styles.closeBtn}`}
        >
          <ImCross size={12} />
        </button>

        <div className={styles.img}>
          <img src={image} alt="apply" />
        </div>
        
        <h5 className={`${styles.heading}`}>Apply for Position</h5>
        
        <form>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              placeholder="Enter Full Name"
              className={styles.input}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              placeholder="Enter Email Address"
              className={styles.input}
            />
          </div>
          
          <div className={styles.uploadBox}>
            <FaCloudUploadAlt className={styles.uploadIcon} />
            <p className={styles.uploadText}>Upload Sample Work</p>
          </div>
        
          <button 
            type="submit" 
            className={styles.applyBtn}
            onClick={() => setcomponentIndex(2)}
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modalsetup2;