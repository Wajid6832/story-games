import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
        import "./StoryHost.css";
import HeroImage from "../../../assets/LandingAssets/HeroImage1.png";

const WriterLanding = () => {
  return (
    <div>
      <div className="heroSection ">
        <div className="heroText">
          <Col md={6} sm={12} className="text-section">
            <h1 className="title">Story Host</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="button-group">
              <Button variant="primary" className="me-2 px-4">
                Sign Up
              </Button>
              <Button variant="outline-primary" className="px-4">
                Sign In
              </Button>
            </div>
            <p className="guest-link mt-3">Browse as Guest</p>
          </Col>
        </div>
        <Col md={6} sm={12} className="image-section text-center">
            <div className="image-box">
              <img
              src={HeroImage}
                // src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7eddb9c6187a8cb3a1d6bff1e77f21b0.png"
                alt="Story Illustration"
                className="illustration"
              />
            </div>
          </Col>
          {/* <div className="d-flex justify-content-around align-items-center flex-wrap"></div> */}
      </div>
          <div className="bottom-section mt-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="list-card m-2">
                <div className="placeholder-icon">:blue_book:
                    <img src={HeroImage} alt="" />
                </div>
                <p className="top-list-text text-end mt-3">Top lists</p>
              </Card>
            ))}
          </div>
    </div>
  );
};

export default WriterLanding;

        // import React from "react";
//         import HeroImage from "../../../assets/LandingAssets/HeroImage1.png"
//         import { Container, Row, Col, Button, Card } from "react-bootstrap";
//         export default function StoryHost() {
//             return (
//                 <div className="story-host-container d-flex align-items-center justify-content-center">
//       <Container>
//         <Row className="align-items-center">
//           {/* Left Section */}
//           <Col md={6} sm={12} className="text-section">
//             <h1 className="title">Story Host</h1>
//             <p className="description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <div className="button-group">
//               <Button variant="primary" className="me-2 px-4">
//                 Sign Up
//               </Button>
//               <Button variant="outline-primary" className="px-4">
//                 Sign In
//               </Button>
//             </div>
//             <p className="guest-link mt-3">Browse as Guest</p>
//           </Col>
//           {/* Right Section */}
//           <Col md={6} sm={12} className="image-section text-center">
//             <div className="image-box">
//               <img
//               src={HeroImage}
//                 // src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7eddb9c6187a8cb3a1d6bff1e77f21b0.png"
//                 alt="Story Illustration"
//                 className="illustration"
//               />
//             </div>
//           </Col>
//         </Row>
//         {/* Bottom Cards */}
//         <div className="bottom-section mt-5">
//           <div className="d-flex justify-content-around align-items-center flex-wrap">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <Card key={i} className="list-card m-2">
//                 <div className="placeholder-icon">:blue_book:
//                     <img src={hero} alt="" />
//                 </div>
//               </Card>
//             ))}
//           </div>
//           <p className="top-list-text text-end mt-3">Top lists</p>
//         </div>
//       </Container>
//     </div>
//   );
// }
