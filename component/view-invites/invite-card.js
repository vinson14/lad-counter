import { Box } from "@mui/material";
import {
  INVITE_CARD_INVITER_LABEL,
  INVITE_CARD_INVITEE_LABEL,
  INVITER_NAME_KEY,
  INVITEE_NAME_KEY,
} from "../../data/strings";
import LabelValueText from "../stateless/typography/label-value-text";
import CardContainer from "../stateless/cards/card-container";
import DeleteButton from "../stateless/buttons/delete-button";
import { deleteInvite } from "../../utils/api";

const InviteCard = ({ invite }) => {
  return (
    <CardContainer>
      <Box>
        <LabelValueText
          label={INVITE_CARD_INVITER_LABEL}
          value={invite[INVITER_NAME_KEY]}
        />
        <LabelValueText
          label={INVITE_CARD_INVITEE_LABEL}
          value={invite[INVITEE_NAME_KEY]}
        />
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <DeleteButton onClick={() => deleteInvite(invite)}>Delete</DeleteButton>
      </Box>
    </CardContainer>
  );
};

export default InviteCard;
