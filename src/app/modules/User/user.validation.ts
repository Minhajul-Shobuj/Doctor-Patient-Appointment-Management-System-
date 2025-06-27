type IUser = {
  email: string;
  password: string;
  role: "user" | "admin" | "superAdmin" | "doctor";
  isActive: boolean;
  isDeleted: boolean;
};
