import { Box, Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../contexts/main-context";
import {
  ADD_INVITE_BUTTON_TEXT,
  COUNTER_CARD_HEADER,
  VIEW_INVITES_BUTTON_TEXT,
} from "../../data/strings";
import AddButton from "../stateless/buttons/add-button";
import ViewButton from "../stateless/buttons/view-button";
import CardContainer from "../stateless/cards/card-container";
import CounterCardHeader from "../stateless/typography/counter-card-header";
import CounterCardValue from "../stateless/typography/counter-card-value";
const CounterCard = ({ value }) => {
  const { openNewInviteForm, openViewInvites } = useContext(MainContext);

  return (
    <CardContainer>
      <Box>
        <CounterCardHeader>{COUNTER_CARD_HEADER}</CounterCardHeader>
        <CounterCardValue>{value}</CounterCardValue>
      </Box>
      <Box p={5}>
        <AddButton onClick={openNewInviteForm}>
          {ADD_INVITE_BUTTON_TEXT}
        </AddButton>
        <ViewButton onClick={openViewInvites}>
          {VIEW_INVITES_BUTTON_TEXT}
        </ViewButton>
      </Box>
    </CardContainer>
  );
};

export default CounterCard;
