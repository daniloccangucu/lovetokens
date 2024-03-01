export interface LoveToken {
  _id: string;
  labels: string[];
  phrase: string;
  creationDate: string;
  createdBy: {
    userName: string;
    userId: string;
  };
  tokenNumber: number;
}
