"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function Dashboard() {
  const [email, setEmail] = useState<string | null>(null);
  const [out, setOut] = useState(false);
  useEffect(() => { createClient().auth.getUser().then(({ data }) => { if (!data.user) setOut(true); else setEmail(data.user.email ?? ""); }); }, []);
  if (out) redirect("/login");
  return <main style={{ padding: 16 }}><h1>Orders</h1><p>Welcome {email}</p></main>;
}
