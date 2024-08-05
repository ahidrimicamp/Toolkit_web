import React from "react";
import AdminNavbar from "./adminNavbar";
import AdminBody from "./AdminBody";

const Admin = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded border bg-background shadow">
      <section className="hidden w-3/4 flex-col rounded-md border shadow-md md:flex">
        <div>
          <div className="flex h-16 w-full items-center px-4">
            <AdminNavbar />
          </div>
          <AdminBody />
        </div>
      </section>
    </main>
  );
};

export default Admin;
