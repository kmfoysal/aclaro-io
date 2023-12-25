import useAuth from "../../hooks/useAuth";


const DashBoard = () => {

    const {user} = useAuth();


    return (
        <div className="align-center my-36">
            <h1>Hi ! {user?.firstName}  {user?.lastName}. Welcome to Dashboard</h1>
        </div>
    );
};

export default DashBoard;