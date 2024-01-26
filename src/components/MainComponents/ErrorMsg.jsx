const ErrorMsg = ({ msg }) => {
  return (
    <p className="error">
      <span>🔴 </span> {msg}
    </p>
  );
};

export default ErrorMsg;
