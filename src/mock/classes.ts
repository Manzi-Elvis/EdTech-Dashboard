export interface Class {
  id: string
  name: string
  schedule: string
  teacher: string
}

export const classes = [
  { id: "c1", name: "Math 101", schedule: "Mon & Wed 9-11am", teacher: "Mr. Adams" },
  { id: "c2", name: "English 101", schedule: "Tue & Thu 10-12am", teacher: "Ms. Baker" },
]