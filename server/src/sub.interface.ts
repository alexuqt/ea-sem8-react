import { ObjectId } from "mongoose";

export interface Sub{
    nick: string
    avatar: string
    subMonths: number
    age: number
    description?: string
  }