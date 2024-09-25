import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  bairro: z.string().max(100),
  rua: z.string().max(150).nullish(),
  numero: z.string().max(7).nullish(),
});

const addressCreateSchema = addressSchema.omit({ id: true });
const addressUpdateSchema = addressCreateSchema.partial();

export { addressSchema, addressCreateSchema, addressUpdateSchema };
