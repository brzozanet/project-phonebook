import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";

const css = {
  containerDiv: ["flex", "justify-center", "mt-28"].join(" "),
  loginForm: [
    "flex",
    "flex-col",
    "border-2",
    "p-14",
    "bg-white",
    "rounded-2xl",
    "shadow-lg",
  ].join(" "),
  label: "mb-5",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const loginElement = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(loginElement));
    form.reset();
  };

  return (
    <div className={css.containerDiv}>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <label className={css.label}>
          <TextField
            id="login-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </label>
        <label className={css.label}>
          <TextField
            id="login-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};
