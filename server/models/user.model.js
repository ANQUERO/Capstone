import mongoose from 'mongoose';

const personalDetailsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  birthPlace: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: 'Birthdate cannot be in the future.',
    },
  },
  occupation: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?:\+639|09)\d{9}$/.test(value);
      },
      message: 'Invalid Philippine phone number format.',
    },
  },
  civilStatus: {
    type: String,
    enum: ['Single', 'Married', 'Widowed', 'Separated'],
    required: true,
  },
});

// Virtual for calculating age
personalDetailsSchema.virtual('age').get(function () {
  if (this.birthDate) {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return null;
});

// Include virtuals when converting to JSON or Object
personalDetailsSchema.set('toJSON', { virtuals: true });
personalDetailsSchema.set('toObject', { virtuals: true });

export default mongoose.model('PersonalDetails', personalDetailsSchema);
