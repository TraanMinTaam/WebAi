// import { Toast } from "@/components/ui/toast"

export function useToast() {
  return {
    toast: (props: any) => console.log(props),
    dismiss: (toastId?: string) => {},
    onOpenChange: (open: boolean) => {}
  }
}
