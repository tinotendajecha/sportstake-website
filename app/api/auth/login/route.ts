// API Route: POST /api/auth/login
// Handles user authentication (sign in)
// Verifies credentials and returns user info if valid

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword } from '@/lib/auth';

// Force dynamic rendering - this route uses request.json() and makes database calls
export const dynamic = 'force-dynamic';

// Helper function to check if string is email or phone
function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

// Helper function to normalize phone number (remove spaces, dashes, etc.)
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, ''); // Remove all non-digit characters
}

// POST handler for user login
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { emailOrPhone, password } = body;

    // Validate input
    if (!emailOrPhone || !password) {
      return NextResponse.json(
        { error: 'Email/phone and password are required' },
        { status: 400 }
      );
    }

    let user;

    // Check if input is email or phone
    if (isEmail(emailOrPhone)) {
      // Find user by email (case-insensitive)
      user = await prisma.user.findUnique({
        where: { email: emailOrPhone.toLowerCase() },
      });
    } else {
      // Find user by phone (normalize phone number)
      // Note: Using findFirst as fallback for phone lookup until Prisma client is regenerated
      const normalizedPhone = normalizePhone(emailOrPhone);
      user = await prisma.user.findFirst({
        where: { phone: normalizedPhone },
      } as any);
    }

    // Generic error message to prevent enumeration
    // Always check password even if user doesn't exist (timing attack mitigation)
    if (!user) {
      // Still hash a dummy password to prevent timing attacks
      await verifyPassword(password, '$2a$10$dummyhashforsecurity');
      return NextResponse.json(
        { error: 'Invalid email/phone or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email/phone or password' },
        { status: 401 }
      );
    }

    // Return success response with user info (no password)
    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
          phone: (user as any).phone || null,
          createdAt: user.createdAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}

