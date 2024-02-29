export interface GetExpensesResponse {
  success: Success
}

export interface Success {
  current_page: number
  data: Data[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface Data {
  id: number
  date: string
  price: string
}
