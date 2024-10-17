
const Authorization = require('../models/authorizationModel');


exports.createAuthorization = async (req, res) => {
  const { patientId, treatmentType, insurancePlan, dateOfService, doctorNotes } = req.body;

  try {
    const authorization = new Authorization({
      patientId,
      treatmentType,
      insurancePlan,
      dateOfService,
      doctorNotes
    });
    await authorization.save();
    res.status(201).json(authorization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAuthorizationsByPatient = async (req, res) => {
  try {
    const { patientId } = req.query;
    const authorizations = await Authorization.find({ patientId });
    res.status(200).json(authorizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
