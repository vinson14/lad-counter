import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import CounterCard from "../component/counter-card/counter-card";
import MainContainer from "../component/stateless/layouts/main-container";
import LoadingBox from "../component/stateless/misc/loading-box";
import MainHeader from "../component/stateless/typography/main-header";
import { MainContext } from "../contexts/main-context";
import styles from "../styles/Home.module.css";
import { getRecords } from "../utils/api";
import useModal from "../utils/useModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [inviteFormState, openInviteForm, closeInviteForm] = useModal();

  useEffect(() => {
    if (loading) {
      getRecords()
        .then((records) => setRecords(records))
        .then(() => setLoading(false));
    }
  }, [loading]);

  const context = {
    setLoading,
    records,
    inviteFormState,
    openInviteForm,
    closeInviteForm,
  };

  return (
    <MainContext.Provider value={context}>
      <MainContainer>
        {loading && <LoadingBox />}
        <MainHeader>LAD 13 Christmas Counter</MainHeader>
        <CounterCard value={records.length} />
      </MainContainer>
    </MainContext.Provider>
  );
}
