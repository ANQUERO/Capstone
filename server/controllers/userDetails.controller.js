import PersonalDetails from '../models/user.model.js'

export const createPersonalDetails = async (req, res) => {
    try {
      const newDetails = new PersonalDetails(req.body);
      await newDetails.save();
      res.status(201).json({
        message: 'Personal details created successfully.',
        data: newDetails,
      });
    } catch (error) {
      res.status(400).json({
        message: 'Error creating personal details.',
        error: error.message,
      });
    }
  };

  export const getAllPersonalDetails = async (req, res) => {
    try {
      const details = await PersonalDetails.find();
      res.status(200).json(details);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching personal details.',
        error: error.message,
      });
    }
  };

  export const getPersonalDetailsById = async (req, res) => {
    try {
      const detail = await PersonalDetails.findById(req.params.id);
      if (!detail) {
        return res.status(404).json({ message: 'Personal detail not found.' });
      }
      res.status(200).json(detail);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching personal detail.',
        error: error.message,
      });
    }
  };


  export const updatePersonalDetailsById = async (req, res) => {
    try {
      const detail = await PersonalDetails.findById(req.params.id);
      if (!detail) {
        return res.status(404).json({ message: 'Personal detail not found.' });
      }
      res.status(200).json(detail);
        
    } catch (error) {
        
    }
  }