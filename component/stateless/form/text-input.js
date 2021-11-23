import { TextField } from "@mui/material";

const TextInput = ({ value, onChange, label }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      sx={{ my: 1 }}
      fullWidth
    />
  );
};

export default TextInput;
