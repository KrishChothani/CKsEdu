// EmailPreview.jsx
export default function EmailPreview({ email }) {
  if (!email) return <div className="p-6">Select an email to read</div>;
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{email.subject}</h3>
      <p className="text-sm text-gray-600 mb-4">{email.time}</p>
      <p>{email.content}</p>
    </div>
  );
}
