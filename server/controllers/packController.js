import pack from '../models/Package';

export async function getAllPackages(req, res) {
  try {
    const packs = await pack.find({});
    res.json(packs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}