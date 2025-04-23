import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { ContactFormSchema, contactSchema } from "../validation/contactSchema";

export function useContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  async function onSubmit(data: ContactFormSchema) {
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.log("EmailJS error", err);
      setStatus("error");
    }
  }

  return { form, onSubmit, status };
}
