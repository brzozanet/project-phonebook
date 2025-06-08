import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../redux/auth/operations";

const css = {
  containerDiv: ["flex", "justify-center", "pt-32"].join(" "),
  registerForm: [
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const registerData = {
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (registerData.name.lenght < 2) {
      return ToastContainer.error("Name must be at least 2 characters long", {
        position: "top-right",
        autoClose: 3000,
        hideprogressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    dispatch(register(registerData));
    form.reset();
  };

  return (
    <div className={css.containerDiv}>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <label className={css.label}>
          <TextField
            id="register-name-input"
            label="Name"
            type="text"
            name="username"
            autoComplete="off"
            autoFocus
          />
        </label>
        <label className={css.label}>
          <TextField
            id="register-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </label>
        <label className={css.label}>
          <TextField
            id="register-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="off"
          />
        </label>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideprogressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
      />
    </div>
  );
};
