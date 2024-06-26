export interface ISelectData {
  value: string;
  label: string;
}

export interface IIconComponent {
  fill?: string;
  stroke?: string;
}

export interface AuthState {
  isLogged: boolean;
  token: string | null;
}
