export interface iCustomerRequest {
  name: string;
  email: string;
  phone: string;
}

export interface iCustomerResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iCustomerUpdate {
  name?: string;
  email?: string;
  phone?: string;
}