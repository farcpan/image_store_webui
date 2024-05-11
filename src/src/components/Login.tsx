import { useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { removeIdToken, saveIdToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_API_ENDPOINT ?? "hoge.com";

export const Login = () => {
  const navitage = useNavigate();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const code = query.get("code") ?? "";

  useEffect(() => {
    const getIdToken = async (authCode: string) => {
      try {
        const result = await Axios.post<{ idToken: string }>(
          url + "/token",
          {
            code: authCode,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (result.data.idToken) {
          saveIdToken(result.data.idToken);
          navitage("/");
        } else {
          console.error("failed to get id_token");
          removeIdToken();
        }
      } catch (e) {
        console.error(e);
        removeIdToken();
      }
    };

    if (code) {
      getIdToken(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return <></>;
};
