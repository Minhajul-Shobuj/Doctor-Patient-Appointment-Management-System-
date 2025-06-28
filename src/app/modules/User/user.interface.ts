export type UserRole = "user" | "admin" | "superAdmin" | "doctor";
export type TUser = {
  email: string;
  password: string;
  role: UserRole;
  status: "active" | "blocked";
  isActive: boolean;
  isDeleted: boolean;
};
