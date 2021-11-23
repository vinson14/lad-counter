import { Box, Card, CardContent, Typography } from "@mui/material";
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
  return (
    <CardContainer>
      <Box>
        <CounterCardHeader>{COUNTER_CARD_HEADER}</CounterCardHeader>
        <CounterCardValue>{value}</CounterCardValue>
      </Box>
      <Box p={5}>
        <AddButton>{ADD_INVITE_BUTTON_TEXT}</AddButton>
        <ViewButton>{VIEW_INVITES_BUTTON_TEXT}</ViewButton>
      </Box>
    </CardContainer>
  );
};

export default CounterCard;
