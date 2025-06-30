// ClientLayout.tsx
"use client";

import { UserProvider } from "../components/UserProvder";
import AuthenticatedApp from "./AuthenticatedApp";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <AuthenticatedApp>{children}</AuthenticatedApp>
    </UserProvider>
  );
}
