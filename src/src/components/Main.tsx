import { useMemo } from "react";
import Axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import { getGoogleAuthEndpoint } from "../utils/google";
import { getIdToken } from "../utils/token";

const logoUri = "vite.svg"; // publicがroot扱いとなる
const url = import.meta.env.VITE_API_ENDPOINT ?? "hoge.com";

export const Main = () => {
  const onClickGoogleLogin = () => {
    window.open(getGoogleAuthEndpoint(), "_self");
  };

  const idToken = useMemo(() => {
    return getIdToken();
  }, []);

  const update = async () => {
    try {
      const result = await Axios.post<{ url: string }>(
        url + "/presigned",
        {
          name: "20240512/sample.png",
        },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );
      console.info(result.data.url);
    } catch (e) {
      console.error(e);
    }
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
      {idToken ? (
        <Box>
          <Typography>ログイン済</Typography>
          <Button onClick={update}>更新</Button>
        </Box>
      ) : (
        <Button onClick={onClickGoogleLogin}>Googleでログインする</Button>
      )}
    </Box>
  );
};
