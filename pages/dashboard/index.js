import React from "react";
import { getSession } from "next-auth/react";
import Home from "./home";

function Dashboard({ user, session }) {
  // const { user } = session;
  return (
      <Home user={user} />
  );
}

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}
