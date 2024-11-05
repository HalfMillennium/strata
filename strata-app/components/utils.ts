interface PlatformItem {
  title: string;
  platformColor: string;
  id: string;
  logoUrl: string;
}

export const SUPPORTED_PLATFORMS: PlatformItem[] = [
  { title: 'Facebook', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png', platformColor: '#0066fe', id: 'facebook' },
  { title: 'Instagram', logoUrl: 'https://troyredfern.com/wp-content/uploads/2021/04/new-instagram-logo-white-border-icon-png-large.png', platformColor: '#f16245', id: 'instagram' },
  { title: 'YouTube', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png', platformColor: "#ff0000", id: 'youtube' }
]

export interface SupportedAccounts {
  [key: string]: boolean;
  facebook: boolean;
  instagram: boolean;
  youtube: boolean;
}