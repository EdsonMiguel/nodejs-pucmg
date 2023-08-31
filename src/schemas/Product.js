const { z } = require("zod");

const productSchema = z.object({
  id: z.string().uuid().optional(),
  description: z.string(),
  price: z.number(),
  brand: z.string(),
});

module.exports = productSchema;
