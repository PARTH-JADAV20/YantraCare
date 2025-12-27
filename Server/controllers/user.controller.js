import ApiError from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select('-password').populate('teamId');
  res.json({ success: true, data: users });
});

export const updateUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const allowed = ['name', 'avatar', 'role', 'teamId'];
  const payload = {};
  for (const key of allowed) if (key in req.body) payload[key] = req.body[key];

  if (payload.role && !['admin', 'manager', 'technician', 'employee'].includes(payload.role)) {
    return next(new ApiError(400, 'Invalid role'));
  }

  const user = await User.findByIdAndUpdate(id, payload, { new: true }).select('-password').populate('teamId');
  if (!user) return next(new ApiError(404, 'User not found'));
  res.json({ success: true, data: user });
});

export const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role = 'employee', avatar, teamId } = req.body;

  if (!name || !email || !password) {
    return next(new ApiError(400, 'name, email, password required'));
  }
  if (!['admin', 'manager', 'technician', 'employee'].includes(role)) {
    return next(new ApiError(400, 'Invalid role'));
  }

  const existing = await User.findOne({ email });
  if (existing) return next(new ApiError(409, 'Email already in use'));

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role, avatar, teamId });
  const safe = await User.findById(user._id).select('-password').populate('teamId');
  res.status(201).json({ success: true, data: safe });
});
