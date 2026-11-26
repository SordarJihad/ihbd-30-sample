import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "./actions";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return (
    <main style={{ padding: 16 }}>
      <h1>Orders</h1>
      <p>Welcome {user.email}</p>
      <form action={signOut}><button>Log out</button></form>
    </main>
  );
}
