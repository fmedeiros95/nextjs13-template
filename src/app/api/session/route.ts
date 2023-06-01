import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { apiClient } from '~/lib/api';
import { ApiResponseError } from '~/types/api';

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/login', request.url);

  // ** Get the session token from the cookie and redirect if it doesn't exist
  const sessionToken = cookies().get('token');

  try {
    const { data } = await apiClient.get('/v1/auth/me', {
      headers: {
        Authorization: `Bearer ${sessionToken?.value}`,
      },
    });

    return NextResponse.json({ user: data });
  } catch (error) {
    const { response } = error as ApiResponseError;

    return NextResponse.json(
      { redirectURL, ...response?.data },
      {
        status: response?.status,
        statusText: response?.statusText,
        headers: {
          'Set-Cookie': `token=; Path=/; max-age=0;`,
        },
      }
    );
  }
}
