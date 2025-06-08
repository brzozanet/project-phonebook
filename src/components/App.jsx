import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Layout } from "../layouts/RootLayout/RootLayout";

const LoginPage = lazy(() =>
  import("pages/Login/Login" /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import("pages/Register/Register" /* webpackChunkName: "register-page" */)
);
const PhonebookPage = lazy(() =>
  import("pages/Phonebook/Phonebook" /* webpackChunkName: "phonebook-page" */)
);
const HomePage = lazy(() =>
  import("pages/Home/Home" /* webpackChunkName: "home-page" */)
);

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="w-4/6">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<PhonebookPage />}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
