import { LoadingButton } from "@mui/lab";

const BaseButton = ({ children, ...props }) => {
  return (
    <LoadingButton variant="contained" fullWidth sx={{ my: 1 }} {...props}>
      {children}
    </LoadingButton>
  );
};

export default BaseButton;
