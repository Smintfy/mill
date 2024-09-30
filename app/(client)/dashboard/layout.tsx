import NavTab from "@/components/dashboard/nav-tab";
import { getUser } from "@/lib/actions/get-user";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <main className="max-w-[640px] mx-auto px-4 md:px-0">
      <NavTab user={user} />
      {children}
    </main>
  );
}