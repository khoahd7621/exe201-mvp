export type User = {
  id: string;
  isSubscribed: boolean;
  email: string;
  name: string;
  role: string;
  createdAt: Date | null;
  subscriptionExpiredDate: Date | null;
  status: string;
};
