import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../contexts/main-context";
import {
  INVITEE_NAME_KEY,
  INVITER_NAME_KEY,
  VIEW_INVITES_MODAL_TITLE,
} from "../../data/strings";
import InviteCard from "../stateless/cards/invite-card";
import ModalContainer from "../stateless/modal/modal-container";

const ViewInvites = () => {
  const { viewInvitesState, closeViewInvites, invites } =
    useContext(MainContext);
  return (
    <ModalContainer
      open={viewInvitesState}
      onClose={closeViewInvites}
      title={VIEW_INVITES_MODAL_TITLE}
    >
      <Grid container>
        {invites.map((invite) => (
          <Grid item key={invite[INVITER_NAME_KEY]} xs={12} lg={12} p={2}>
            <InviteCard
              inviter={invite[INVITER_NAME_KEY]}
              invitee={invite[INVITEE_NAME_KEY]}
            />
          </Grid>
        ))}
      </Grid>
    </ModalContainer>
  );
};

export default ViewInvites;
