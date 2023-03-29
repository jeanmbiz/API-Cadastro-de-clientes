import * as yup from "yup";
import { SchemaOf } from "yup";
import { iUserRequest, iUserResponse, iUserUpdate } from "../Interfaces/User";

const createUserSchema: SchemaOf<iUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
});

const userResponseSchema: SchemaOf<iUserResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const userUpdateSchema: SchemaOf<iUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  phone: yup.string().notRequired(),
});

export { createUserSchema, userResponseSchema, userUpdateSchema };
