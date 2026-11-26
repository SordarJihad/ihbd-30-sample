"use server";
import { createClient } from "@supabase/supabase-js";

export async function joinWaitlist(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Please enter a valid email" };
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);
  const { error } = await supabase.from("waitlist").insert({ email });
  if (error && error.code !== "23505") return { ok: false, error: "Could not save, try again" };
  return { ok: true };
}
