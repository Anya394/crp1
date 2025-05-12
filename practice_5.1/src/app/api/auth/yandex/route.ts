import { NextResponse, type NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code'); // Код от Яндекс.OAuth
    
    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code not found' },
        { status: 400 }
      );
    }

    // Обмен кода на токен
    const response = await fetch('https://oauth.yandex.ru/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID!,
        client_secret: process.env.YANDEX_CLIENT_SECRET!,
        redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/yandex`,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error_description || 'Failed to fetch access token');
    }

    const { access_token } = data

    // Получение информации о пользователе
    const userInfo = await axios.get('https://login.yandex.ru/info', {
      headers: { Authorization: `OAuth ${access_token}` },
      params: { format: 'json' },
    })

    // можно использовать JWT
    const res = NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth`);
    res.cookies.set('yandex_token', access_token, { httpOnly: true });
    res.cookies.set('user', JSON.stringify(userInfo.data), { httpOnly: true });

    return res;
  } catch (error) {
    console.error('Yandex OAuth error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}