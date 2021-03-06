import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  reservationDate: {
    type: Date,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
