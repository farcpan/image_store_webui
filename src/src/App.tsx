//import Axios from "axios";
import { Box, Button, Typography } from "@mui/material";

const logoUri = "vite.svg"; // publicがroot扱いとなる

const googleAuthEndpoint =
  "https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email%20profile%20phone&access_type=offline&include_granted_scope=true&prompt=consent&response_type=code&client_id=312673029722-629upopck0n8rislpilf2svik11oared.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5173";

export const App = () => {
  const onClickGoogleLogin = () => {
    window.open(googleAuthEndpoint, "_self");
  };

  return (
    <Box
      sx={{ width: "100%", padding: "8px" }}
      display="flex"
      flexDirection="column"
    >
      <Typography sx={{ width: "100%", textAlign: "center" }}>
        IMAGE STORE
      </Typography>
      <img src={logoUri} alt={"logo"} />

      {/* ログイン */}
      <Button onClick={onClickGoogleLogin}>Googleでログインする</Button>
    </Box>
  );
};
