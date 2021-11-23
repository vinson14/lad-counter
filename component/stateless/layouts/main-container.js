import { Box, Container } from "@mui/material";
import MetaData from "../misc/meta-data";

const MainContainer = ({ children }) => {
  return (
    <Box
      bgcolor="grey.100"
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      p={3}
    >
      <MetaData />
      <Container> {children}</Container>
    </Box>
  );
};

export default MainContainer;
