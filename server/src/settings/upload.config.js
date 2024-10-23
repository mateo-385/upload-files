import multer from 'multer'
import path from 'node:path'
import crypto from 'node:crypto'

//storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'src/uploads/')
  },
  filename: (_req, file, cb) => {
    const fileName =
      crypto.randomUUID().toString() + path.extname(file.originalname)
    cb(null, fileName)
  },
})

//limits
const maxMb = 20
const limits = { fileSize: 1024 * 1024 * maxMb }

//filters
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif|webp/
  const allowExtName = fileTypes.test(path.extname(file.originalname))

  if (!allowExtName) {
    return cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, gif, webp'))
  }

  return cb(null, true)
}

export const upload = multer({
  storage,
  fileFilter,
  limits,
})
