export type User = {
  id: string;
  email: string;
  name: string;
  shortDescription: null | string;
  phone: null | string;
  usePackage: string;
  role: string;
  status: string;
  packageTime: null;
  isSubscribed: false;
  subscriptionExpiredDate: null | string;
  createdAt: string;
};
