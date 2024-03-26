const z = require("zod");

const todoCreateSchema = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean().default(false),
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
