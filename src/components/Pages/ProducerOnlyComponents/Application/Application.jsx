// import { useState } from "react";
// import { Download } from "lucide-react";

// const Application = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const applicationsData = [
//     {
//       id:0,
//       writer: "Ali Khan",
//       role: "Story Writer",
//       novel: "Lost in Time",
//       summary:
//         "A thrilling journey across centuries where a writer finds himself trapped between timelines.",
//     },
//     {
//       id:1,
//       writer: "Sara Malik",
//       role: "Editor",
//       novel: "Moonlight Shadows",
//       summary:
//         "A dark fantasy world where secrets of the moonlight awaken ancient powers.",
//     },
//     {
//       id:2,
//       writer: "John Doe",
//       role: "Proofreader",
//       novel: "Broken Dreams",
//       summary:
//         "A heart-touching tale of love, loss, and redemption in a chaotic city.",
//     },
//     {
//       id:3,
//       writer: "Ayesha Noor",
//       role: "Dialogue Writer",
//       novel: "Desert Winds",
//       summary:
//         "A poetic story of resilience and courage under the scorching desert sun.",
//     },
//   ];

//   const filteredApplications = applicationsData.filter(
//     (app) =>
//       app.writer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       app.novel.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6">Applications</h2>

//       <div className="flex justify-between items-center mb-6">
//         <div className="flex gap-8">
//           <button className="text-gray-500 border-b-2 border-transparent hover:border-blue-500 pb-1">
//             Applied
//           </button>
//           <button className="text-blue-600 border-b-2 border-blue-600 pb-1 font-medium">
//             Saved
//           </button>
//         </div>

//         <input
//           type="text"
//           placeholder="Search"
//           className="border rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {filteredApplications.map((app, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition"
//           >
//             <div className="flex justify-between items-start mb-3">
//               <p className="text-sm text-gray-500">
//                 <span className="font-medium">{app.writer}</span> • {app.role}
//               </p>
//               <button className="border border-blue-400 text-blue-600 rounded-full px-3 py-1 text-sm flex items-center gap-1 hover:bg-blue-50 transition">
//                 <Download size={16} /> Demo Work
//               </button>
//             </div>

//             <h3 className="text-lg font-semibold">{app.novel}</h3>
//             <p className="text-sm text-gray-600 mt-2">{app.summary}</p>

//             <div className="flex gap-3 mt-5">
//               <button className="bg-yellow-400 text-white px-5 py-2 rounded-md hover:bg-yellow-500 transition">
//                 Accept
//               </button>
//               <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition">
//                 Reject
//               </button>
//             </div>
//           </div>
//         ))}

//         {filteredApplications.length === 0 && (
//           <p className="text-gray-500 text-center col-span-2">
//             No results found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Application;







import React from 'react';
import styles from './Application.module.css';
import square from '../../../../assets/square.png';
// import upload from '../../../../assets/upload.png';
import download from '../../../../assets/download.png'
import Frame1 from '../../../../assets/Frame.png';
const Application = () => {
  return (
    <div className={styles.application}>
      <div className={styles.flexible}>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={square} alt="square" />
            <h1>Application</h1>
          </div>
          <hr />
          <div className={styles.section}>
            <h1>Applicant Full Name</h1>
            <h2>Example of work:</h2>
            <img src={download}  />
            <div className={styles.buttons}>
              <button className={styles.btn1}>Save Candidate</button>
              <button className={styles.btn2}>Accept Candidate</button>
              <button className={styles.btn3}>Reject Candidate</button>
            </div>
          </div>
          <div className={styles.foot}>
            <img src={Frame1} alt="footer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Application;