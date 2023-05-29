export const oktaConfig = {
  clientId: "0oa9qnssdrI4VWLtI5d7",
  issuer: "https://dev-83482028.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
