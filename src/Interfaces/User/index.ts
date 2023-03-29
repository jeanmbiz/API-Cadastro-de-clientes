export interface iUserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface iUserResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
