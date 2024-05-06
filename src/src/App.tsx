//import Axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import { getGoogleAuthEndpoint } from "./utils/google";

const logoUri = "vite.svg"; // publicがroot扱いとなる

export const App = () => {
  const onClickGoogleLogin = () => {
    window.open(getGoogleAuthEndpoint(), "_self");
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
