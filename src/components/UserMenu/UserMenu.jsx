import { Button } from "@mui/material";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="flex items-baseline gap-8">
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </div>
  );
};
