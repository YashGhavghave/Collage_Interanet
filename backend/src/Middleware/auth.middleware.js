import JWT from "jsonwebtoken";
import dotenvx from "@dotenvx/dotenvx";

dotenvx.config({ path: "../../.env" });

export function GetToken(id, email, rememberMe) {
  try {
    const token = JWT.sign(
      { id, email },
      process.env.JWT_KEY,
      {
        expiresIn: rememberMe ? "30d" : "1d" // string works fine
      }
    );

const maxAge = rememberMe ? 30 * 86400000 : 86400000;

    return {
      token,
      message: "Token Generated",
      status: 200,
      expiresIn: maxAge // return ms for frontend/cookie
    };
  } catch (error) {
    return { 
      error, 
      message: error.message, 
      status: 500 
    };
  }
}
