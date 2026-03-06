import { type Material, type User } from "./models";

interface ResponseFail {
    success: false;
    message: string;
}

// UserController
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

export type MaterialResponse = { success: true; material: Material } | ResponseFail;
export type MaterialsResponse = { success: true; materials: Material[] } | ResponseFail;
export type DeleteMaterialResponse = { success: true; message: "Material deleted." } | ResponseFail;
