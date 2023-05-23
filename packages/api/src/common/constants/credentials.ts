export const TOKEN = process.env.TOKEN;
export const REDIRECT_URI = process.env.REDIRECT_URI ?? '';
export const CLIENT_ID = process.env.CLIENT_ID ?? '';
export const AUTH_URL = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&state=TEST`;
