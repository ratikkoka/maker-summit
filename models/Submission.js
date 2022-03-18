import mongoose from 'mongoose'

const SubmissionSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  studentId: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  groupCheck: {
    type: String,
  },
  groupMembers: {
    type: String,
  },
  entryType: {
    type: String,
  },
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  film: {
    type: String,
  },
  images: {
    type: String,
  },
  attending: {
    type: String,
  },
  notes: {
    type: String,
  },
})

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema)
