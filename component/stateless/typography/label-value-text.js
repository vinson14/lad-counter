import { Box, Typography } from "@mui/material";

const LabelValueText = ({ label, value }) => {
  return (
    <Box p={1}>
      <Typography align="center">{label}</Typography>
      <Typography align="center" variant="h6">
        {value}
      </Typography>
    </Box>
  );
};

export default LabelValueText;
