import Loading from "../components/loading/";
import { useState } from "react";
import LoadContext from "components/contexts/loader";
import Layout from "components/layout";

export default function IndexPage() {
  const [loading, setLoading] = useState(true);

  return (
    <LoadContext.Provider value={[loading, setLoading]}>
      <Loading />
      <Layout />
    </LoadContext.Provider>
  );
}
