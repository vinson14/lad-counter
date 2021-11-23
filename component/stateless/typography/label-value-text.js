import { Box, Typography } from "@mui/material";

const LabelValueText = ({ label, value }) => {
  return (
    <Box p={1}>
      <Typography>{label}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Box>
  );
};

export default LabelValueText;
