import React, { useState } from "react";
import Inbox from "./Inbox";
import EmailSidebar from "./Emailsidebar";

export default function Emails() {
  const [type, setType] = useState("inbox");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <EmailSidebar onSelect={setType} selected={type} />
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Inbox type={type} />
      </div>
    </div>
  );
}
