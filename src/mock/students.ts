export interface Student {
  id: string
  name: string
  email: string
  grade: number
  attendance: number
  classId: string
}

export const students = [
  { id: "1", name: "Elvis Manzi", email: "elvis@gmail.com", grade: 90, attendance: 95, classId: "c1" },
  { id: "2", name: "Shyoli Pierre", email: "shyoli@gmail.com", grade: 82, attendance: 88, classId: "c2" },
  { id: "3", name: "Ivan Ntwali", email: "ivan@gmail.com", grade: 76, attendance: 92, classId: "c1" },
]
