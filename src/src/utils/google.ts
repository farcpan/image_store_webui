/**
 * Google認可用エンドポイントURLを取得する
 *
 * @returns Google認可用エンドポイントURL
 */
export const getGoogleAuthEndpoint = (): string => {
  const baseUrl =
    import.meta.env.VITE_GOOGLE_AUTH_BASEURL ?? "https://hoge.com";
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "hoge";
  const redirectUrl =
    import.meta.env.VITE_REDIRECT_URL ?? "http://localhost:3000/login";

  const scope = encodeURIComponent("openid email profile phone");
  const accessType = "offline";

  const queryParameter =
    `scope=${scope}` +
    `&access_type=${accessType}` +
    `&include_granted_scope=true` +
    `&prompt=consent` +
    `&response_type=code` +
    `&client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUrl)}`;

  const uri = baseUrl + "?" + queryParameter;
  return uri;
};
