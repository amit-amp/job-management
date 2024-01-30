export type Account = {
  id: string;
  typeField: string | null;
  provider: string | null;
  providerAccountId: string | null;
  refreshToken: string | null;
  accessToken: string | null;
  refreshTokenExpiresIn: number | null;
  expiresAt: number | null;
  tokenType: string | null;
  scope: string | null;
  idToken: string | null;
  sessionState: string | null;
  userId: string | null;
};
