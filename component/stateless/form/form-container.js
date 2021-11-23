import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FormContainer = ({ children, onSubmit, open, onClose, title }) => {
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <Box
        px={3}
        pt={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default FormContainer;
