import React from "react";
import { sentEmails } from "../Pages/email/Emails";
import ComposeMail from "./ComposeMail";

export default function Sent() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Sent List */}
      <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* <div className="px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-t-xl"> */}
         <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl">
          <h2 className="text-xl font-semibold tracking-wide">📤 Sent Emails</h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {sentEmails.map((email) => (
            <li
              key={email.id}
              className="px-6 py-4 hover:bg-rose-50 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-800">{email.receiver}</span>
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
        {/* <div className="px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-xl"> */}
         <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl">
          <h2 className="text-xl font-semibold tracking-wide">✉️ Compose Mail</h2>
        </div>
        <div className="px-6 py-4">
          <ComposeMail />
        </div>
      </div>
    </div>
  );
}
