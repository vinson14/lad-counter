import { Button } from "@mui/material";

const BaseButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" fullWidth sx={{ my: 1 }} {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
