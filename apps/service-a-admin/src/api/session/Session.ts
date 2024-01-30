export type Session = {
  id: string;
  sessionToken: string | null;
  expires: Date | null;
  userId: string | null;
};
