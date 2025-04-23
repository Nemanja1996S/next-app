import { z } from 'zod'

const schema = z.object({
    // id: z.number().int(),
    name: z.string().min(3),
    price: z.number().nonnegative()
})

export default schema