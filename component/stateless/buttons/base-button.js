import { LoadingButton } from "@mui/lab";

const BaseButton = ({ children, ...props }) => {
  return (
    <LoadingButton variant="contained" sx={{ my: 1, width: 150 }} {...props}>
      {children}
    </LoadingButton>
  );
};

export default BaseButton;
