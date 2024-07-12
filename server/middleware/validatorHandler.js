import { validationResult } from 'express-validator';

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next(); // 確保函數在每種情況下都有返回值
};

export default validateResult;
