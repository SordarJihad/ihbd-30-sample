import { joinWaitlist } from "./actions";

export function WaitlistForm() {
  return (
    <form action={async (fd) => { "use server"; await joinWaitlist(fd); }}>
      <input type="email" name="email" placeholder="you@example.com" required />
      <button>Notify me</button>
    </form>
  );
}
