import { Typography } from "@mui/material";

const MainHeader = ({ children }) => {
  return (
    <Typography align="center" variant="h4" fontWeight={600} my={3}>
      {children}
    </Typography>
  );
};

export default MainHeader;
