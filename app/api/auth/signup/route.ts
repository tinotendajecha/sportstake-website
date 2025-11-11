// API Route: POST /api/auth/signup
// Handles user registration (sign up)
// Creates a new user with hashed password and returns user info (without password)

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

// Force dynamic rendering - this route uses request.json() and makes database calls
export const dynamic = 'force-dynamic';

// Helper function to check if string is email
function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

// Helper function to normalize phone number (remove spaces, dashes, etc.)
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, ''); // Remove all non-digit characters
}

// Helper function to validate phone number format
function isValidPhone(phone: string): boolean {
  const normalized = normalizePhone(phone);
  // Basic validation: at least 10 digits (adjust as needed for your use case)
  return normalized.length >= 10 && normalized.length <= 15;
}

// POST handler for user signup
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { email, phone, password } = body;

    // Validate that at least one identifier is provided
    if ((!email && !phone) || !password) {
      return NextResponse.json(
        { error: 'Email or phone number, and password are required' },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email) {
      if (!isEmail(email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Validate phone format if provided
    if (phone) {
      if (!isValidPhone(phone)) {
        return NextResponse.json(
          { error: 'Invalid phone number format' },
          { status: 400 }
        );
      }
    }

    // Validate password length (minimum 6 characters)
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists by email
    if (email) {
      const existingUserByEmail = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      if (existingUserByEmail) {
        return NextResponse.json(
          { error: 'An account with this email already exists' },
          { status: 400 }
        );
      }
    }

    // Check if user already exists by phone
    if (phone) {
      const normalizedPhone = normalizePhone(phone);
      const existingUserByPhone = await prisma.user.findFirst({
        where: { phone: normalizedPhone },
      } as any);

      if (existingUserByPhone) {
        return NextResponse.json(
          { error: 'An account with this phone number already exists' },
          { status: 400 }
        );
      }
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Prepare user data
    const userData: any = {
      password: hashedPassword,
    };

    if (email) {
      userData.email = email.toLowerCase();
    }

    if (phone) {
      userData.phone = normalizePhone(phone);
    }

    // Create new user
    const user = await prisma.user.create({
      data: userData,
      // Exclude password from response
      select: {
        id: true,
        email: true,
        phone: true,
        createdAt: true,
      } as any,
    });

    // Return success response with user info (no password)
    return NextResponse.json(
      {
        message: 'User created successfully',
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'An error occurred during signup' },
      { status: 500 }
    );
  }
}

