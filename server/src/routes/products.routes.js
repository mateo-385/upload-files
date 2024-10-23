import { Router } from 'express'

import { uploadImage } from '../middlewares/upload.middleware.js'
import { validationsZod } from '../validations/validationZod.js'

import { createProduct } from '../controllers/products.controller.js'

import { productSchema } from '../models/productSchema.js'

export const productRoute = Router()

productRoute.post(
  '/product',
  uploadImage('productImage'),
  validationsZod(productSchema),
  createProduct
)
