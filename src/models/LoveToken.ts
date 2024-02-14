export interface LoveToken {
  _id: { $oid: string };
  labels: string[];
  phrase: string;
  creationDate: string;
  createdBy: {
    userName: string;
    userId: string;
  };
}
