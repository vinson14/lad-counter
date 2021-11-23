import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import CounterCard from "../component/counter-card/counter-card";
import NewInviteForm from "../component/new-invite-form/new-invite-form";
import MainContainer from "../component/stateless/layouts/main-container";
import LoadingBox from "../component/stateless/misc/loading-box";
import MainHeader from "../component/stateless/typography/main-header";
import ViewInvites from "../component/view-invites/view-invites";
import { MainContext } from "../contexts/main-context";
import { MAIN_HEADER } from "../data/strings";
import styles from "../styles/Home.module.css";
import { getInvites } from "../utils/api";
import useModal from "../utils/useModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [invites, setInvites] = useState([]);
  const [viewInvitesState, openViewInvites, closeViewInvites] = useModal();
  const [newInviteFormState, openNewInviteForm, closeNewInviteForm] =
    useModal();

  useEffect(() => {
    if (loading) {
      console.log("getInvites useEffect ran");
      getInvites()
        .then((invites) => setInvites(invites))
        .then(() => setLoading(false));
    }
  }, [loading]);

  const context = {
    setLoading,
    invites,
    newInviteFormState,
    openNewInviteForm,
    closeNewInviteForm,
    viewInvitesState,
    openViewInvites,
    closeViewInvites,
  };

  return (
    <MainContext.Provider value={context}>
      <MainContainer>
        {loading && <LoadingBox />}
        {!loading && (
          <>
            <MainHeader>{MAIN_HEADER}</MainHeader>
            <CounterCard value={invites.length} />
            <NewInviteForm />
            <ViewInvites />
          </>
        )}
      </MainContainer>
    </MainContext.Provider>
  );
}
