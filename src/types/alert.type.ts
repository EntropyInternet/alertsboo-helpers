import { AlertID } from "./base.type";
import { BellPlatform, BellType } from "./bell.type";
import { InstagramPayload } from "./payload.type";

export interface Alert {
  id: AlertID;
  sentryID: string;
  platform: BellPlatform
  type: BellType
  alias: string
  slug: string
  createdAt: Date
  text: string; // from push notif
  payload: InstagramPayload | null;
}
