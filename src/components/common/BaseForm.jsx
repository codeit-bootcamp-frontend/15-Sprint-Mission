const BaseForm = ({ children, onSubmit, ...props }) => {
  return (
    <form onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};

export default BaseForm;
