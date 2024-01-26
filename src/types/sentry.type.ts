import { SentryID } from "./base.type";
import { BellPlatform, BellType } from "./bell.type";


export interface Sentry {
  id: SentryID;
  platform: BellPlatform
  type: BellType
  alias: string
  slug: string
  url: string
  createdAt: Date
}