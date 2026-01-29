export interface Student {
  id: string
  name: string
  email: string
  className: string
  status: "active" | "inactive"
  averageScore: number
}