"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function Login() {
  const [err, setErr] = useState("");
  const router = useRouter();
  async function go(e: React.FormEvent<HTMLFormElement>, mode: "in" | "up") {
    e.preventDefault();
    const fd = new FormData(e.currentTarget.form ?? e.currentTarget);
    const email = String(fd.get("email")), password = String(fd.get("password"));
    const supabase = createClient();
    const { error } = mode === "in" ? await supabase.auth.signInWithPassword({ email, password }) : await supabase.auth.signUp({ email, password });
    if (error) return setErr(error.message);
    router.push("/dashboard");
  }
  return (
    <form onSubmit={(e) => go(e, "in")} style={{ maxWidth: 360, margin: "40px auto", display: "grid", gap: 8 }}>
      <input name="email" type="email" required placeholder="Email" />
      <input name="password" type="password" required minLength={8} placeholder="Password" />
      <button>Log in</button>
      {err ? <p>{err}</p> : null}
    </form>
  );
}
