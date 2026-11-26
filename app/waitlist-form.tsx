"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY!);

export function WaitlistForm() {
  const [done, setDone] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email"));
    await supabase.from("waitlist").insert({ email });
    setDone(true);
  }
  if (done) return <p>Thanks! We will email you.</p>;
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="you@example.com" required />
      <button>Notify me</button>
    </form>
  );
}
