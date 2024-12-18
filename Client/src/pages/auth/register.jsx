import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};
function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="mx-auto w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Create new account
          </h1>
          <p className="mt-2">
            Already have an account{" "}
            <Link
              className="font-medium ml-2 text-primary hover:underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={registerFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          buttonText={"Sign Up"}
        />
      </div>
    </>
  );
}

export default AuthRegister;
