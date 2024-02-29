export interface AuthenticatedUser {
  id: number
  firstname: string
  lastname: string
  email: string
  avatar: string
  monthly_target: number
  created_at: string
  updated_at: string
  access_token: string
  token_type: string
  expires_at: string
}