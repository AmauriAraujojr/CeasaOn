
import { z } from "zod";
import { addressCreateSchema, addressUpdateSchema } from "./address.schema";
import { UserType } from "../entities/user.entity";

const userSchema = z.object({
  id: z.number().positive(),
  nome: z.string().max(50),
  cpf: z.string().max(30),
  celular: z.string().max(30),
  tipo_de_conta: z.nativeEnum(UserType),
});

const userCreateSchema = userSchema
  .omit({
    id: true,
  })
  .extend({
    address: addressCreateSchema,
  });

const userReturnSchema = userSchema.extend({address:addressCreateSchema});
const userUpdateSchema = userCreateSchema
  .omit({ tipo_de_conta: true, address: true })
  .extend({ address: addressUpdateSchema })
  .partial();

export { userSchema, userCreateSchema, userUpdateSchema, userReturnSchema };
