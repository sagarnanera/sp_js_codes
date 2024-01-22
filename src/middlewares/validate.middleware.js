const validate = (validator) => {
  return (req, res, next) => {
    const { error } = validator.validate(req.body, { abortEarly: false });

    if (error) {
      const errorList = error.details.map((error) => error.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        fields: errorList
      });
    }

    next();
  };
};

module.exports = validate;
