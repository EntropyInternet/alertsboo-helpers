import { SimpleApiToken, UserID } from "./base.type";

export interface User {
  id: UserID
  alias: string
  email: string
  stripeCustomerID: string
  apiToken: SimpleApiToken
}
