import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { assertCloudflareEnv } from "~/types/cloudflareEnv";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  assertCloudflareEnv(context.env);
  const { "verification-token": verificationToken, challenge } =
    await request.json<{ "verification-token": string; challenge: string }>();
  console.error("api.redox:", { verificationToken, challenge });
  if (verificationToken !== context.env.REDOX_VERIFICATION_TOKEN) {
    return json({ message: "Invalid verification token" }, { status: 401 });
  }
  console.log("api.redox: verification token matched!");
  return json({ challenge }, { status: 200 });
};
