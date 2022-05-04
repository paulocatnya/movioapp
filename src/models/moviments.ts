import { IUser } from "./user";

export interface ResumeWithMoviments {
  balance: number;
  totalDeposit: number;
  totalWithdraw: number;
  moviments: IMoviment[];
}

export interface IMoviment {
  createdAt: string;
  description: string;
  id: string;
  type: "WITHDRAW" | "DEPOSIT";
  updatedAt: string;
  value: string;
  user: IUser;
}

export enum TypeMovimentEnum {
  Saque = "WITHDRAW",
  Depósito = "DEPOSIT",
}
