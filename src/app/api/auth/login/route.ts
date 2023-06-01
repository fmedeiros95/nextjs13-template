import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '~/lib/api';
import { ApiResponseError } from '~/types/api';

interface LoginPayload {
  email: string;
  password: string;
  remember?: boolean;
}

interface LoginResponse {
  accessToken: string;
  userData: any;
}

export async function POST(request: NextRequest) {
  const { email, password, remember }: LoginPayload = await request.json();
  const redirectTo = request.cookies.get('redirectTo')?.value || '/';

  try {
    const { data } = await apiClient.post<LoginResponse>('/v1/auth/login', { email, password });
    const { accessToken, userData } = data;

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30; // 30 days
    const redirectURL = redirectTo ?? new URL('/commercial', request.url);

    return NextResponse.json(
      { userData, redirectURL },
      {
        headers: {
          'Set-Cookie': `token=${accessToken}; Path=/; ${remember && `max-age=${cookieExpiresInSeconds};`}`,
        },
      }
    );
  } catch (error) {
    const { response } = error as ApiResponseError;

    return NextResponse.json(response?.data, {
      status: response?.status,
      statusText: response?.statusText,
    });
  }
}
