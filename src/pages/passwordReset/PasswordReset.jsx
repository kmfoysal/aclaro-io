import PasswordResetForm from "../../components/passwordResetForm/PasswordResetForm";
import AuthLayout from "../../shared/AuthLayout";

const PasswordReset = () => {
  return (
    <div>
      <AuthLayout component={<PasswordResetForm />} />
    </div>
  );
};

export default PasswordReset;
