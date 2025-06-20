export interface IAuthService {
  login: (email: string, password: string) => Promise<{ user: any; token: string }>;
}