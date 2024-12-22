import admin from "firebase-admin";

const adminConfig: any = {};

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const json: { name: string; gameId: string } = await request.json();
  const { gameId, name } = json;

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
      databaseURL: "https://thirty-one-game-default-rtdb.firebaseio.com",
    });
  }

  const key = admin.database().ref(`games/${gameId}/players`).push(name).key;

  return NextResponse.json({ playerKey: key }, { status: 202 });
}
