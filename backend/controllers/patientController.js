
const Patient = require('../models/patientModel');


exports.getPatients = async (req, res) => {
    try {
      const { name, condition, page = 1, limit = 10 } = req.query;
      const query = {};
  
      if (name) query.name = { $regex: name, $options: 'i' };
      if (condition) query.treatmentPlan = { $regex: condition, $options: 'i' };
  
      const patients = await Patient.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit);
  
      const count = await Patient.countDocuments(query);
  
      res.status(200).json({
        patients,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
