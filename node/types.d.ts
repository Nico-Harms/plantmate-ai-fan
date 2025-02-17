import { UserType } from "./src/models/user";

declare global {
  namespace Express {
    interface Request {
      user?: UserType;
    }
  }
}
