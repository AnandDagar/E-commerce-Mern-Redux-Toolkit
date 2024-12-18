import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
function AuthLogin() {
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
            Login to your account
          </h1>
          <p className="mt-2">
            Don't have an account{" "}
            <Link
              className="font-medium ml-2 text-primary hover:underline"
              to="/auth/register"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={loginFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          buttonText={"Login"}
        />
      </div>
    </>
  );
}

export default AuthLogin;
