import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main style={{ maxWidth: 640, margin: "40px auto", padding: 16 }}>
      <h1>Never lose a Messenger order again</h1>
      <p>Order Khata helps Facebook page sellers log orders in ten seconds and make tonight&apos;s courier list.</p>
      <ul>
        <li>No more scrolling back through 200 chats after a live</li>
        <li>Courier list ready in one tap</li>
        <li>See which COD parcels are still unpaid</li>
      </ul>
      <WaitlistForm />
    </main>
  );
}
