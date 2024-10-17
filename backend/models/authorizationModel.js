
const mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  treatmentType: {
    type: String,
    required: true
  },
  insurancePlan: {
    type: String,
    required: true
  },
  dateOfService: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'denied'],
    default: 'pending'
  },
  doctorNotes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Authorization', authorizationSchema);
