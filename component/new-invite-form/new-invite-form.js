import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { MainContext } from "../../contexts/main-context";
import {
  INVITEE_NAME_FIELD_LABEL,
  INVITEE_NAME_KEY,
  INVITER_NAME_FIELD_LABEL,
  INVITER_NAME_KEY,
  NEW_INVITE_FORM_TITLE,
} from "../../data/strings";
import { postInvite } from "../../utils/api";
import AddButton from "../stateless/buttons/add-button";
import FormContainer from "../stateless/form/form-container";
import TextInput from "../stateless/form/text-input";
import ModalContainer from "../stateless/modal/modal-container";
import MainHeader from "../stateless/typography/main-header";

const NewInviteForm = () => {
  const { newInviteFormState, closeNewInviteForm, setLoading } =
    useContext(MainContext);
  const [formLoading, setFormLoading] = useState(false);
  const [formState, setFormState] = useState({
    [INVITER_NAME_KEY]: "",
    [INVITEE_NAME_KEY]: "",
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    setFormLoading(true);
    postInvite(formState).then((res) => {
      if (res) {
        setFormLoading(false);
        closeNewInviteForm();
        setLoading(true);
      }
    });
  };
  const onChange = (event, name) => {
    setFormState({ ...formState, [name]: event.target.value });
  };
  return (
    <ModalContainer
      open={newInviteFormState}
      onClose={closeNewInviteForm}
      title={NEW_INVITE_FORM_TITLE}
    >
      <FormContainer onSubmit={onSubmit}>
        <Box p={3}>
          <TextInput
            value={formState[INVITER_NAME_KEY]}
            label={INVITER_NAME_FIELD_LABEL}
            onChange={(event) => onChange(event, INVITER_NAME_KEY)}
          />
          <TextInput
            value={formState[INVITEE_NAME_KEY]}
            label={INVITEE_NAME_FIELD_LABEL}
            onChange={(event) => onChange(event, INVITEE_NAME_KEY)}
          />
          <Box display="flex" justifyContent="center">
            <AddButton loading={formLoading} type="submit">
              Add Invite
            </AddButton>
          </Box>
        </Box>
      </FormContainer>
    </ModalContainer>
  );
};

export default NewInviteForm;
