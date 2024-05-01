import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

const prisma = new PrismaClient().$extends(withAccelerate());

const api = new Hono().basePath("/api/v1");

console.log(" calling here ");
api.post("/user/signup", (c) => {
  return c.text("signup");
});

api.post("/user/signin", async (c) => {
  const body = await c.req.json();
  console.log(" body ", body);
  return c.text("signin");
});

api.post("/blog", (c) => {
  return c.text("blog post");
});

api.put("/blog", (c) => {
  return c.text(" blog edit");
});

api.get("/blog/:id", (c) => {
  console.log(" getting id ", c.req.param("id"));
  return c.text("get blog by id");
});

api.get("/blog/bulk", (c) => {
  console.log(" calling here ");

  return c.text("get all blogs");
});

export default api;
