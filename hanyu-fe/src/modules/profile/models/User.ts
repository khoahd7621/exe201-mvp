export type User = {
  id: string;
  isSubscribed: boolean;
  email: string;
  name: string;
  role: string;
  subscriptionExpiredDate: Date | null;
  status: string;
};
