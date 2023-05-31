export type Subscription = {
  id: number;
  name: string;
  description: string;
  period: string;
  price: string;
  isBest: boolean;
};

export const ListSubscriptions: Subscription[] = [
  {
    id: 1,
    name: "3 tháng",
    description: "Gói cơ bản",
    period: "3",
    price: "399.999đ",
    isBest: false,
  },
  {
    id: 2,
    name: "1 năm",
    description: "Gói tiêu chuẩn",
    period: "1",
    price: "599.999đ",
    isBest: false,
  },
  {
    id: 3,
    name: "Vĩnh viễn",
    description: "Được người dùng yêu thích nhất",
    period: "99",
    price: "899.999đ",
    isBest: true,
  },
];
