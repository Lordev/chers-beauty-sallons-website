import respondToScreenWidthPhone from "../utility/respondToScreenWidth";

export const IG_URL =
    "https://graph.instagram.com/me/media?fields=media_type,media_url,username,timestamp,permalink&access_token=";
export const IG_KEY =
    "IGQWROZAlB0U1dHbENOSk9HX3ktX0xGbU9nQ0VCTC0xa3RlSWRXc1U1cTE1bFRlYk5wRFRwVEEwUW1PbGRUMEJtQlF0VGI5N3oxa0hHbUdDRGd0dGdMM1BXNEJUamZAodHpyRFJ2cWdkMklQeHFMeFpUMWxoR2FYNE0ZD";

// "IGQWRPUm1oMDh3VnZAoa0dGS2VqN0hTdllRQThVckJLajRrMUh4TGh2LUVlNl90cFpsMnNiMkhOeWpVOGMwSWwzX3RjTURjdE96UHpxVjU1aWptTkFsQ1RKbEI0TVNVazNwY0VTM25pRkw2Vl83SVpYa0VtbVNQbFEZD";

export let PORTFOLIO_IMGS = 8;

respondToScreenWidthPhone(() => {
    return (PORTFOLIO_IMGS = 5);
});
