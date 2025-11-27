import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Generate JWT token
const generateToken = (userId: string): string => {
  const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
  
  return jwt.sign({ userId }, jwtSecret, {
    expiresIn: '7d'
  });
};

// Register new user
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, firstName, lastName } = req.body;
    
    // Validate input
    if (!email || !password || !firstName || !lastName) {
      res.status(400).json({ message: 'Please provide all required fields' });
      return;
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists with this email' });
      return;
    }
    
    // Create new user
    const user = new User({
      email,
      password,
      firstName,
      lastName
    });
    
    await user.save();
    
    // Generate token
    const token = generateToken(user._id.toString());
    
    // Return user data and token
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};

// Login user
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      res.status(400).json({ message: 'Please provide email and password' });
      return;
    }
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }
    
    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }
    
    // Generate token
    const token = generateToken(user._id.toString());
    
    // Return user data and token
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login', error: error.message });
  }
};

// Get current user profile
export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId;
    
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt
      }
    });
  } catch (error: any) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
