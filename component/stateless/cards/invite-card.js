import { Typography } from "@mui/material";
import {
  INVITE_CARD_INVITER_LABEL,
  INVITE_CARD_INVITEE_LABEL,
} from "../../../data/strings";
import LabelValueText from "../typography/label-value-text";
import CardContainer from "./card-container";

const InviteCard = ({ inviter, invitee }) => {
  return (
    <CardContainer>
      <LabelValueText label={INVITE_CARD_INVITER_LABEL} value={inviter} />
      <LabelValueText label={INVITE_CARD_INVITEE_LABEL} value={invitee} />
    </CardContainer>
  );
};

export default InviteCard;
