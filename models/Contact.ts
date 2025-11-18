// models/Contact.ts
import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    service: { type: String },
    preferred: { type: String },
    referral: { type: String },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export const Contact =
  models.Contact || model("Contact", ContactSchema);
