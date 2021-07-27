import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotosController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { filename, originalname } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ filename, originalname, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: 'Usuário inexistente',
        });
      }
    });
  }
}

export default new FotosController();
