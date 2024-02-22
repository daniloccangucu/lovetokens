export interface User {
  _id: { $oid: string };
  username: string;
  email: string;
  role: string;
}
