export interface UserProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
  followers_count: number;
}

export interface ProfileResponse {
  profile: UserProfile;
}
