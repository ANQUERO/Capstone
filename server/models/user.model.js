import mongoose from 'mongoose';

const personalDetailsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  birthPlace: { type: String, required: true },
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
  occupation: { type: String, required: true },
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

// Virtual for age
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

// Include virtuals when converting to JSON/Object
personalDetailsSchema.set('toJSON', { virtuals: true });
personalDetailsSchema.set('toObject', { virtuals: true });

const addressDetailsSchema = new mongoose.Schema({
  purok: {
    type: String,
    required: true,
    enum: ['Purok 1', 'Purok 2', 'Purok 3', 'Purok 4', 'Purok 5', 'Purok 6'],
  },
  barangay: { type: String, required: true },
  municipality: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const voterStatusSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ['Registered', 'Unregistered'],
  },
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  mimeType: { type: String, required: true },
  fileSize: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      // custom email validation could go here
    },
    password: {
      type: String,
      minlength: 8,
    },
    status: {
      type: String,
      enum: ['pending', 'active', 'inactive'],
      default: 'active',
      required: true,
    },
    role: {
      type: [String],
      default: [],
    },
    lastActiveAt: { type: Date, default: null },
    emailVerifiedAt: { type: Date, default: null },
    rememberToken: { type: String, default: null },
    inviteToken: { type: String },
    inviteTokenExpiry: { type: Date },

    // Embedded subdocuments here
    personalDetails: personalDetailsSchema,
    addressDetails: addressDetailsSchema,
    voterStatus: voterStatusSchema,
  },
  {
    timestamps: true,
  }
);

// Export model
export default mongoose.model('User', userSchema);
