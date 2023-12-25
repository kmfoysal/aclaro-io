import SignupForm from "../../components/signupForm/SignupForm";
import AuthLayout from "../../shared/AuthLayout";


const Signup = () => {
    return (
        <div>
      <AuthLayout component={<SignupForm/>}/>
    </div>
    );
};

export default Signup;