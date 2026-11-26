"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Dashboard() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => { createClient().auth.getUser().then(({ data }) => { if (!data.user) window.location.href = "/login"; else setEmail(data.user.email ?? ""); }); }, []);
  return <main style={{ padding: 16 }}><h1>Orders</h1><p>Welcome {email}</p></main>;
}
