export interface AuthenticateUserResponse {
  success: Success
}

interface Success {
  user: User
  status: string
}

interface User {
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
