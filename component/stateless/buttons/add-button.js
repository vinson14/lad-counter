import BaseButton from "./base-button";

const AddButton = ({ children, ...props }) => {
  return (
    <BaseButton color="secondary" {...props}>
      {children}
    </BaseButton>
  );
};

export default AddButton;
