import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/valditaions";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardcolor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const {
    value: emailValue,
    handleInputBlur: HnadleEmailBlur,
    handleInputChange: handleEmailChange,
    isEdited: isEmailEdited,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputBlur: HnadlePasswordBlur,
    handleInputChange: handlePasswordChange,
    isEdited: isPasswordEdited,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleFormmSumbit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12">
          <div className={`card border ${cardcolor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormmSumbit}>
                <Input
                  id="email"
                  name="email"
                  labelText="Email"
                  error={emailHasError && "Geçerli Email Giriniz."}
                  type="email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  onBlur={HnadleEmailBlur}
                />
                <Input
                  id="password"
                  name="password"
                  labelText="Password"
                  error={passwordHasError && "Min 5 Karakter Giriniz."}
                  type="password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  onBlur={HnadlePasswordBlur}
                />

                <button className={`btn btn-outline-${btnColor}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
