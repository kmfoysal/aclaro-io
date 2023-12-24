import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    dealGroupID: "3",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    postalCode: "",
    phoneNumber: "",
    userStatus: "",
  });

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
