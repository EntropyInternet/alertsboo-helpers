import { BellID, SentryID, UserID } from './base.type'

export interface Bell {
  id: BellID
  platform: BellPlatform
  type: BellType
  alias: string
  slug: string
  url: string
  createdAt: Date
  isActive: boolean
  status: BellStatus
  webhookUrl: string
  autoExpire: number // in seconds
  expiresAt: Date // updated every new alert or when toggle active
  userID: UserID // owner of this bell
  customData: BellCustomData // customer defined
  sentryID: SentryID // unified bell for all customers
}

export enum BellPlatform {
  instagram = 'Instagram',
  // twitter = 'twitter',
  // reddit = 'reddit'
}
export enum BellType {
  instagram_story = 'instagram_story',
  instagram_post = 'instagram_post',
  instagram_reel = 'instagram_reel',
}
export enum BellStatus {
  pending = 'Pending',
  awaiting = 'Awaiting',
  active = 'Active',
  paused = 'Paused',
}
// json serializable
export interface BellCustomData {
  [key: string]: string | number | boolean | Date | BellCustomData | BellCustomDataArray | null
}
export interface BellCustomDataArray
  extends Array<string | number | boolean | Date | BellCustomData | BellCustomDataArray | null> {}
