import "bootstrap/dist/css/bootstrap.min.css";
import "./EditorLanding.css";
import Frame from "../../../assets/Frame.png"

const EditorLanding = () => {
  return (
    <div className="main-landing-div">
      <div className="landing-second-div">
        <div className="lading-content-div">

          <div className="landign-content">

            <div className="content-upper">

              <div className="content">
                <div className="heading">
                  <p>STORY HOST</p>
                </div>
                <div className="second-heading">
                  <p>Lorem ipsum dolor it amet</p>
                  <div className="dasht-line"></div>
                </div>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                </div>
                <div className="butons">
                  <div className="btn">
                    <div className="signup">
                      <button>Signup</button>
                    </div>
                    <div className="signin">
                      <button>SignIN</button>
                    </div>
                  </div>
                </div>
                <div className="browse">
                  <p>Browse as guest</p>
                </div>
              </div>

              <div className="image">
                <img src={Frame} alt="" />
              </div>

            </div>



          </div>

          <div className="top-list-container">
            <div className="card-list">
              {Array(6).fill(0).map((_, index) => (
                <div className="card" key={index}>
                  <img src="placeholder.png" alt="Placeholder" />
                </div>
              ))}
              <div className="top-list-label">
                <p>Top lists</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default EditorLanding