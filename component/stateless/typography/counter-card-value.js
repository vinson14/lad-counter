import { Typography } from "@mui/material";

const CounterCardValue = ({ children }) => {
  return (
    <Typography variant="h3" align="center">
      {children}
    </Typography>
  );
};

export default CounterCardValue;
