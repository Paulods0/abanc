import {
  NewsLetterFormType,
  newsLetterFormSchema,
} from "@/lib/validation/schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { ToastAction } from "../ui/toast"

const NewsletterDialog = () => {
  const { toast } = useToast()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<NewsLetterFormType>({
    resolver: zodResolver(newsLetterFormSchema),
    mode: "all",
  })

  const handleSubmitForm = (data: NewsLetterFormType) => {
    try {
      toast({
        title: "Subscrição realizada com sucesso",
        style: {
          color: "#c64034",
        },
      })
      reset()
      console.log(data)
      console.log("Formulário submetido com sucesso")
    } catch (error) {
      toast({
        title: "Erro ao fazer a subscrição",
        action: (
          <ToastAction className="bg-vermelho text-white" altText="Retry">
            Tentar novamente
          </ToastAction>
        ),
      })
      reset()
      console.log("Erro ao submeter o formulário")
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="text-base lg:text-sm capitalize">
        subscrever newsletter
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Preencha o formulário</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-3">
          <div className="flex flex-col gap-2">
            <Label>Nome</Label>
            <Input {...register("name")} />
            {errors.name && (
              <span className="text-xs text-vermelho">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input {...register("email")} />
            {errors.email && (
              <span className="text-xs text-vermelho">
                {errors.email.message}
              </span>
            )}
          </div>
          <Button disabled={isSubmitting} className="bg-vermelho text-white">
            Subscrever
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewsletterDialog
