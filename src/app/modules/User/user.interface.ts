export type UserRole = "user" | "admin" | "superAdmin" | "doctor";
export type TUser = {
  name: string;
  phone: string;
  gender: "male" | "female" | "other";
  age: number;
  email: string;
  password: string;
  role: UserRole;
  status: "active" | "blocked";
  isActive: boolean;
  isDeleted: boolean;
};
