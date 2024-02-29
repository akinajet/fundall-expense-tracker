export interface GetUserResponse {
  success: Success
}

interface Success {
  data: User
  status: string
}

interface User {
  id: number
  firstname: string
  lastname: string
  avatar: string
  email: string
  total_balance: string
  income: string
  spent: string
}
