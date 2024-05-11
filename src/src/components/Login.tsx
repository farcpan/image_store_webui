import { useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";

const url = import.meta.env.VITE_API_ENDPOINT ?? "hoge.com";

export const Login = () => {
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
        console.info(result);
      } catch (e) {
        console.error(e);
      }
    };

    if (code) {
      getIdToken(code);
    }
  }, [code]);

  return <></>;
};
