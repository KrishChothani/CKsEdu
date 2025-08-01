// Inbox.jsx or Sent.jsx
// import { inboxEmails, sentEmails } from "../emails";

// export default function EmailList({ type = "inbox", onSelectEmail }) {
//   const emails = type === "inbox" ? inboxEmails : sentEmails;
//   return (
//     <div className="flex flex-col w-full">
//       {emails.map((email) => (
//         <div key={email.id} onClick={() => onSelectEmail(email)} className="border-b p-4 hover:bg-gray-100 cursor-pointer">
//           <div className="font-bold">{type === "inbox" ? email.sender : `To: ${email.to}`}</div>
//           <div className="text-sm">{email.subject}</div>
//           <div className="text-xs text-gray-500">{email.time}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
// import React from "react";
// import { inboxEmails, sentEmails } from "JSX/pages/emails";
// import { inboxEmails, sentEmails } from "../pages/emails";





// import React from "react";
// import { inboxEmails, sentEmails } from "../../../Pages/email/Emails";

// export default function Inbox({ type = "inbox" }) {
//   const emails = type === "inbox" ? inboxEmails : sentEmails;

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>{type === "inbox" ? "Inbox" : "Sent Emails"}</h2>
//       <ul>
//         {emails.map((email) => (
//           <li key={email.id} style={{ marginBottom: "1rem" }}>
//             <strong>
//               {type === "inbox" ? email.sender : email.to}
//             </strong>
//             <div>{email.subject}</div>
//             <small>{email.time}</small>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React from "react";
// import { inboxEmails, sentEmails } from "../Pages/email/Emails";

// export default function Inbox({ type = "inbox" }) {
//   const emails = type === "inbox" ? inboxEmails : sentEmails;

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>{type === "inbox" ? "Inbox" : "Sent Emails"}</h2>
//       <ul>
//         {emails.map((email) => (
//           <li key={email.id} style={{ marginBottom: "1rem" }}>
//             <strong>{type === "inbox" ? email.sender : email.to}</strong>
//             <div>{email.subject}</div>
//             <small>{email.time}</small>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React from "react";
// import { inboxEmails } from "../Pages/email/Emails";

// export default function Inbox() {
//   return (
//     <div>
//       <h2>Inbox</h2>
//       <ul>
//         {inboxEmails.map((email) => (
//           <li key={email.id}>
//             <strong>{email.sender}</strong> — {email.subject}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React from "react";
// import { inboxEmails } from "../Pages/email/Emails";

// export default function Inbox() {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">Inbox</h2>

//       <div className="bg-white rounded-md shadow overflow-hidden border border-gray-200">
//         <ul>
//           {inboxEmails.map((email) => (
//             <li
//               key={email.id}
//               className="flex items-center justify-between p-4 hover:bg-gray-100 border-b border-gray-100 cursor-pointer transition"
//             >
//               <div className="flex flex-col">
//                 <span className="font-medium text-gray-900">{email.sender}</span>
//                 <span className="text-sm text-gray-600">{email.subject}</span>
//               </div>
//               <div className="text-xs text-gray-500">{email.time}</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { inboxEmails } from "../Pages/email/Emails";
// import ComposeMail from "./ComposeMail";

// export default function Inbox() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-4 p-4">
//       {/* Left: Inbox List */}
//       <div className="lg:w-1/2 w-full bg-white rounded-md shadow border border-gray-200">
//         <h2 className="text-lg font-semibold p-4 border-b">Inbox</h2>
//         <ul>
//           {inboxEmails.map((email) => (
//             <li
//               key={email.id}
//               className="p-4 border-b hover:bg-gray-50 cursor-pointer"
//             >
//               <div className="font-medium text-gray-800">{email.sender}</div>
//               <div className="text-sm text-gray-600">{email.subject}</div>
//               <div className="text-xs text-gray-400 mt-1">{email.time}</div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right: Compose Email */}
//       <div className="lg:w-1/2 w-full bg-white rounded-md shadow border border-gray-200">
//         <h2 className="text-lg font-semibold p-4 border-b">Compose</h2>
//         <ComposeMail />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { inboxEmails } from "../Pages/email/Emails";
import ComposeMail from "./ComposeMail";

export default function Inbox() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Inbox List */}
      <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl">
          <h2 className="text-xl font-semibold tracking-wide">📥 Inbox</h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {inboxEmails.map((email) => (
            <li
              key={email.id}
              className="px-6 py-4 hover:bg-indigo-50 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-800">{email.sender}</span>
                <span className="text-xs text-gray-500">{email.time}</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 font-semibold">{email.subject}</p>
              <p className="text-sm text-gray-500 mt-1 line-clamp-1">{email.body}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Compose Section */}
      <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-xl">
          <h2 className="text-xl font-semibold tracking-wide">✉️ Compose Mail</h2>
        </div>
        <div className="px-6 py-4">
          <ComposeMail />
        </div>
      </div>
    </div>
  );
}
