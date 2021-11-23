import { Box, Card, CardContent } from "@mui/material";

const CardContainer = ({ children }) => {
  return (
    <Card>
      <CardContent>
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
