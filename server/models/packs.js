import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema({
  name: String,
  available: Boolean
});

const PackSchema = new Schema({
  tier: { type: String, required: true, unique: true },
  title: String,
  currency: String,
  price: Number,
  services: [ServiceSchema],
  desc: String,
  badge: String
});

const Package = model('Package', PackSchema);

export default Pack;