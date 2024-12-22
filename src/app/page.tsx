import { useAuth } from "@/context/AuthContext";
import { Button, Stack, Typography } from "@mui/material";

export default function Main() {
  const { user, logOut = async () => {}, logIn = async () => {} } = useAuth();
  const isLoggedIn = Boolean(user) && Boolean(logOut);

  return (
    <>
      <Stack>
        <Typography>31 Game</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault();
            try {
              if (isLoggedIn) {
                logOut();
              } else {
                logIn();
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Typography>Login</Typography>
        </Button>
      </Stack>
    </>
  );
}
