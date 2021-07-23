import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const token = authorization.split(' ')[1];

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.useEmail = email;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
