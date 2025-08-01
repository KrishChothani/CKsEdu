// ComposeMail.jsx
export default function ComposeMail() {
  return (
    <div className="p-6 flex flex-col space-y-4">
      <input className="border p-2" placeholder="To" />
      <input className="border p-2" placeholder="Subject" />
      <textarea className="border p-2 h-40" placeholder="Write your email..." />
      <button className="bg-blue-600 text-white px-4 py-2 w-fit rounded">Send</button>
    </div>
  );
}
