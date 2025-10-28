import React, { useState } from "react";
import { useNavigate } from "react-router";
import Mail from "../../../../assets/mail.png"
import Password from "../../../../assets/password.png"
import styles from "./EditorLogin.module.css";
import illustration from "../../../../assets/Frame (2).png";
const EditorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleLoginForm=()=>{
  console.log("login data function");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    alert("Please enter valid data");
    return;
  }
  const loginData={
    email,
    password,
  }
  setEmail("");
  setPassword("");
  navigate("/EditorHome")
}

  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <div className={styles.mainLandingDiv}>
      <div className={styles.landingSecondDiv}>
        <div className={styles.ladingContentDiv}>
          <div className={styles.landignContent}>
            <div className={styles.contentUpper}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  <p>STORY HOST</p>
                </div>

                <div className={styles.secondHeading}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div className={styles.dashtLine}></div>
                </div>

                {/* Email Input */}
                <div className={styles.inputGroup}>
                  <img src={Mail} alt="" />
                  {/* <Mail className={styles.icon} size={20} /> */}
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                     onChange={(e)=>setEmail(e.target.value)} 
                     value={email}
                    className={styles.input}
                  />
                </div>

                {/* Password Input */}
                <div className={styles.inputGroup}>
                  <img src={Password} alt="" />
                  {/* <Lock className={styles.icon} size={20} /> */}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                     onChange={(e)=>setPassword(e.target.value)} 
                     value={password}
                    className={styles.input}
                  />
                  {showPassword ? (

                    <button className={styles.eyeIcon} onClick={togglePassword}>
                      <i class="bi bi-eye"></i>
                    </button>

                  ) : (

                    <button className={styles.eyeIcon} onClick={togglePassword}>
                   <i class="bi bi-eye-slash"></i>
                    </button>


                  )}
                </div>

                {/* Buttons */}
                <div className={styles.butons}>
                  <div className={styles.btn}>
                    <div className={styles.signup}>
                      <button onClick={handleLoginForm}>Sign In</button>
                    </div>
                    <div className={styles.signin}>
                      <button>Forgot Password?</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className={styles.image}>
                <img src={illustration} alt="Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorLogin