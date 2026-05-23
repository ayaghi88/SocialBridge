import { SocialAccount, PhoneNumber, ScheduledPost, EngagementData, AuditLogEntry } from './types';

export const MOCK_ACCOUNTS: SocialAccount[] = [
  { id: '1', username: 'jdoe_health', email: 'jdoe@ambershealthcare.com', platform: 'Twitter', status: 'Active', createdAt: '2024-01-15', phoneNumberId: 'p1' },
  { id: '2', username: 'asmith_care', email: 'asmith@ambershealthcare.com', platform: 'Instagram', status: 'Active', createdAt: '2024-01-16', phoneNumberId: 'p2' },
  { id: '3', username: 'bwilliams_h', email: 'bwilliams@ambershealthcare.com', platform: 'LinkedIn', status: 'Flagged', createdAt: '2024-01-17', phoneNumberId: 'p3' },
  { id: '4', username: 'clark_health', email: 'clark@ambershealthcare.com', platform: 'Twitter', status: 'Active', createdAt: '2024-01-18', phoneNumberId: 'p4' },
  { id: '5', username: 'davis_care', email: 'davis@ambershealthcare.com', platform: 'Facebook', status: 'Active', createdAt: '2024-01-19', phoneNumberId: 'p5' },
  { id: '6', username: 'ambers_vlogs', email: 'media@ambershealthcare.com', platform: 'YouTube', status: 'Active', createdAt: '2024-02-01', phoneNumberId: 'p1' },
  { id: '7', username: 'ambers_care_tips', email: 'social@ambershealthcare.com', platform: 'TikTok', status: 'Active', createdAt: '2024-02-05', phoneNumberId: 'p2' },
];

export const MOCK_PHONES: PhoneNumber[] = [
  { id: 'p1', number: '+1 (555) 010-1234', country: 'USA', provider: 'Twilio', status: 'Active', expiresAt: '2024-12-31' },
  { id: 'p2', number: '+44 20 7946 0000', country: 'UK', provider: 'Vonage', status: 'Active', expiresAt: '2024-11-30' },
  { id: 'p3', number: '+1 (555) 010-5678', country: 'USA', provider: 'Twilio', status: 'Expired', expiresAt: '2024-02-01' },
  { id: 'p4', number: '+1 (555) 010-9012', country: 'USA', provider: 'Telnyx', status: 'Active', expiresAt: '2025-01-15' },
  { id: 'p5', number: '+1 (555) 010-3456', country: 'USA', provider: 'Twilio', status: 'Pending', expiresAt: '2024-03-15' },
];

export const MOCK_POSTS: ScheduledPost[] = [
  { id: 'post1', accountId: '1', content: 'Excited to share our new health tips!', scheduledTime: '2024-03-01T10:00:00Z', status: 'Scheduled' },
  { id: 'post2', accountId: '2', content: 'Check out our latest facility photos.', scheduledTime: '2024-03-02T14:30:00Z', status: 'Scheduled' },
];

export const MOCK_ENGAGEMENT: EngagementData[] = [
  { date: '2024-02-18', likes: 120, shares: 45, comments: 12 },
  { date: '2024-02-19', likes: 150, shares: 50, comments: 18 },
  { date: '2024-02-20', likes: 180, shares: 65, comments: 22 },
  { date: '2024-02-21', likes: 210, shares: 70, comments: 25 },
  { date: '2024-02-22', likes: 190, shares: 60, comments: 20 },
  { date: '2024-02-23', likes: 240, shares: 85, comments: 30 },
  { date: '2024-02-24', likes: 280, shares: 95, comments: 35 },
];

export const MOCK_AUDIT_LOG: AuditLogEntry[] = [
  { id: 'a1', timestamp: '2024-02-24 09:00:00', user: 'admin@ambershealthcare.com', action: 'Account Created', details: 'Created Twitter account for jdoe_health' },
  { id: 'a2', timestamp: '2024-02-24 09:15:00', user: 'admin@ambershealthcare.com', action: 'Phone Assigned', details: 'Assigned +1 (555) 010-1234 to jdoe_health' },
  { id: 'a3', timestamp: '2024-02-24 10:30:00', user: 'system', action: 'Status Update', details: 'Account bwilliams_h flagged by LinkedIn' },
];
