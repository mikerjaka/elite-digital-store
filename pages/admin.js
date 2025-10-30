import dynamic from "next/dynamic";
import Head from "next/head";

const AdminPanel = dynamic(() => import("../components/AdminPanel"), { ssr: false });

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Panel de Administración | Elite Digital</title>
      </Head>
      <div style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        padding: "20px"
      }}>
        <AdminPanel />
      </div>
    </>
  );
}
