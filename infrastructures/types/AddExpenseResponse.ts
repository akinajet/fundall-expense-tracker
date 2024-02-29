export interface AddExpenseResponse {
  success: Success
}

interface Success {
  status: string
  message: string
}
