import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name should contain atleast 3 characters!"],
    maxLength: [30, "First name cannot exceed 30 Characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name should contain atleast 3 characters!"],
    maxLength: [30, "Last name cannot exceed 30 Characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain only 10 characters"],
    maxLength: [10, "Phone number must contain only 10 characters"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
