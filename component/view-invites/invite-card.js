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
import { useContext, useState } from "react";
import { MainContext } from "../../contexts/main-context";

const InviteCard = ({ invite }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { closeViewInvites, setLoading } = useContext(MainContext);
  const onDelete = async () => {
    setDeleteLoading(true);
    const response = await deleteInvite(invite);
    if (response) {
      setDeleteLoading(false);
      closeViewInvites();
      setLoading(true);
    }
  };
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
        <DeleteButton loading={deleteLoading} onClick={onDelete}>
          Delete
        </DeleteButton>
      </Box>
    </CardContainer>
  );
};

export default InviteCard;
