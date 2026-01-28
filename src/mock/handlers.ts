import { http, HttpResponse } from "msw"
import { students } from "../mock/students"
import { classes } from "../mock/classes"
import { performanceAnalytics } from "../mock/analytics"

export const handlers = [
  http.get("/api/students", () => {
    return HttpResponse.json(students, { status: 200 })
  }),

  http.get("/api/students/:id", ({ params }) => {
    const { id } = params
    const student = students.find((s) => s.id === id)

    return student
      ? HttpResponse.json(student, { status: 200 })
      : HttpResponse.json(
          { error: "Student not found" },
          { status: 404 }
        )
  }),

  http.get("/api/classes", () => {
    return HttpResponse.json(classes, { status: 200 })
  }),

  http.get("/api/analytics/performance", () => {
    return HttpResponse.json(performanceAnalytics, { status: 200 })
  }),
]