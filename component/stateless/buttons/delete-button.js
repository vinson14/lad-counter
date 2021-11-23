import BaseButton from "./base-button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ children, ...props }) => {
  return (
    <BaseButton color="error" {...props} endIcon={<DeleteIcon />}>
      {children}
    </BaseButton>
  );
};

export default DeleteButton;
