import LoginForm from "../../components/loginForm/LoginForm";
import AuthLayout from "../../shared/AuthLayout";


const Login = () => {
  return (
    <div>
      <AuthLayout component={<LoginForm/>}/>
    </div>
  );
};

export default Login;
