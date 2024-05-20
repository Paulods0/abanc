import z from "zod"

export const newsLetterFormSchema = z.object({
  name: z.string().min(1, "*Por favor, insira o seu nome"),
  email: z.string().min(1, "*Por favor, insira o seu email").email(),
})

export type NewsLetterFormType = z.infer<typeof newsLetterFormSchema>
