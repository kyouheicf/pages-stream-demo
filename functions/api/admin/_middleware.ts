import { cfTeamsAccessAuthMiddleware } from "../../../src/cfAccess";

export const onRequest = [
    cfTeamsAccessAuthMiddleware
]
/*
import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest: PagesFunction<Env> = (context) => {
  const url = new URL(context.request.url);
  if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
    context.data.cloudflareAccess = {
      JWT: {
        payload: {
          name: "First Last",
          email: "localhost@example.com",
        },
      },
    };
    //console.log(JSON.stringify(context.data));
    return context.next();
  }

  return cloudflareAccessPlugin({
      domain: `"https://${context.env.CF_ACCESS_TEAM_NAME}.cloudflareaccess.com"`,
      aud: `"${context.env.CF_ACCESS_APP_AUD}"`,
  })(context);
};
*/

/*
import type { PluginData } from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest: PagesFunction<unknown, any, PluginData> = async ({
  data,
}) => {
  const identity = await data.cloudflareAccess.JWT.getIdentity();

  return new Response(`Hello, ${identity.name || "service user"}!`);
};
*/