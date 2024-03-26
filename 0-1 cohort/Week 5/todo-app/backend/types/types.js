const z = require("zod");

const todoCreateSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const todoGetSchema = z.object({
  id: z.string(),
});

const todoUpdateSchema = todoGetSchema;

module.exports = {
  todoCreateSchema,
  todoGetSchema,
  todoUpdateSchema,
};
