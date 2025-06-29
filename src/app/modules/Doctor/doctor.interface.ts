export type IDoctor = {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: "male" | "female" | "other";
  password: string;
  specialization: string;
  hospitalName: string;
  hospitalFloor: string;
};

export type DoctorFilters = {
  hospitalName?: string;
  specialization?: string;
  serviceName?: string;
};
