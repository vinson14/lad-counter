import { Typography } from "@mui/material";

const CounterCardHeader = ({ children }) => {
  return (
    <Typography component="div" variant="h5" align="center" my={2}>
      {children}
    </Typography>
  );
};

export default CounterCardHeader;
