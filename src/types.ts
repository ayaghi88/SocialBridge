export type SocialPlatform = 'Twitter' | 'Instagram' | 'LinkedIn' | 'Facebook' | 'YouTube' | 'TikTok';

export interface SocialAccount {
  id: string;
  username: string;
  email: string;
  platform: SocialPlatform;
  status: 'Active' | 'Flagged' | 'Suspended';
  createdAt: string;
  phoneNumberId?: string;
}

export interface PhoneNumber {
  id: string;
  number: string;
  country: string;
  provider: string;
  status: 'Active' | 'Expired' | 'Pending';
  expiresAt: string;
}

export interface ScheduledPost {
  id: string;
  accountId: string;
  content: string;
  scheduledTime: string;
  status: 'Scheduled' | 'Posted' | 'Failed';
}

export interface EngagementData {
  date: string;
  likes: number;
  shares: number;
  comments: number;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
}
