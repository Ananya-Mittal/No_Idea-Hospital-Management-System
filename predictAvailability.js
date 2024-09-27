const mongoose = require('mongoose');
const Bed = mongoose.model('Bed');

async function predictAvailability() {
  const totalBeds = await Bed.countDocuments();
  const occupiedBeds = await Bed.countDocuments({ availability: false });
  const availableBeds = totalBeds - occupiedBeds;
  return availableBeds;
}

module.exports = predictAvailability;