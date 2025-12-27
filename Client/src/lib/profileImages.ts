import { UserRole } from '@/types';

// Default profile images for each role - these are random male profile images from Google
// Images are sourced from publicly available and commonly used male avatar/profile image sources
const defaultProfileImages: Record<UserRole, string[]> = {
  admin: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  ],
  manager: [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1519085360771-9852263f94d7?w=100&h=100&fit=crop',
  ],
  technician: [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1519085360771-9852263f94d7?w=100&h=100&fit=crop',
  ],
  employee: [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1519085360771-9852263f94d7?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  ],
};

/**
 * Get a default profile image based on user role and their ID
 * Uses a hash of the ID to pick a consistent random image for each user
 */
export const getDefaultProfileImage = (role: UserRole, userId?: string): string => {
  const images = defaultProfileImages[role] || defaultProfileImages.employee;
  
  // If no userId provided, return first image
  if (!userId) {
    return images[0];
  }
  
  // Create a simple hash from userId to ensure same user always gets same image
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    const char = userId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  const index = Math.abs(hash) % images.length;
  return images[index];
};

/**
 * Get profile image with fallback to default
 */
export const getProfileImage = (avatar: string | undefined, role: UserRole, userId?: string): string => {
  return avatar || getDefaultProfileImage(role, userId);
};
