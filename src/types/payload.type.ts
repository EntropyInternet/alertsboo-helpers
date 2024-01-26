import { BellPlatform, BellType } from "./bell.type"


export type RawAlertData = any

export type InstagramPayload = Payload_IGPost | Payload_IGReel | Payload_IGStory

export interface Payload_IGPost {
  platform: BellPlatform
  type: BellType
  raw: RawAlertData
  data: {
    [key: string]: any
  }
}

export interface Payload_IGReel {
  platform: BellPlatform
  type: BellType
  raw: RawAlertData
  data: {
    [key: string]: any
  }
}

export interface Payload_IGStory {
  platform: BellPlatform
  type: BellType
  raw: RawAlertData
  data: {
    [key: string]: any
  }
}