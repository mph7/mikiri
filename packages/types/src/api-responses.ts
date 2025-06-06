import { User } from "./models";

// UserController
interface ResponseFail {
    success: false;
    message: string;
}

interface AuthResponseSuccess {
    success: true;
    token: string;
    user: Pick<User, "id" | "name" | "email">;
}

export type AuthResponse = ResponseFail | AuthResponseSuccess;

export type GetCurrentUserResponse =
    | {
          success: true;
          user: Pick<User, "id" | "name" | "email">;
      }
    | ResponseFail;

export type UpdateProfileResponse = { success: true; user: Pick<User, "id" | "name" | "email"> } | ResponseFail;

export type UpdatePasswordResponse = { success: true; message: "Password changed." } | ResponseFail;

// Material Controller
