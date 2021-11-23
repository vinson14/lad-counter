import { Box, CircularProgress } from "@mui/material";

const LoadingBox = () => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingBox;
