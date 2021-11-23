import BaseButton from "./base-button";

const ViewButton = ({ children, ...props }) => {
  return (
    <BaseButton color="primary" {...props}>
      {children}
    </BaseButton>
  );
};

export default ViewButton;
