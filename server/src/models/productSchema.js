import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(1, 'El nombre del producto no debe estar vacío'),
  description: z
    .string()
    .min(1, 'La descripcion del producto no debe estar vacío')
    .optional(),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'El precio debe ser un número positivo',
    }),
  productImage: z.string(),
})
