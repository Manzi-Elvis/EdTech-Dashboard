import { rest } from "msw"
import { students } from "../mock/students"
import { classes } from "../mock/classes"
import { performanceAnalytics } from "../mock/analytics"

export const handlers = [
  rest.get("/api/students", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(students))
  }),

  rest.get("/api/students/:id", (req, res, ctx) => {
    const { id } = req.params
    const student = students.find((s) => s.id === id)
    return student
      ? res(ctx.status(200), ctx.json(student))
      : res(ctx.status(404), ctx.json({ error: "Student not found" }))
  }),

  rest.get("/api/classes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(classes))
  }),

  rest.get("/api/analytics/performance", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(performanceAnalytics))
  }),
]