"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField, SelectField, TextareaField } from "@/components/ui/FormField";
import { mainAreas } from "@/data/areas";
import { cn } from "@/lib/utils";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  phone: string;
  companyName: string;
  companySize: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  phone: "",
  companyName: "",
  companySize: "",
  interest: "",
  message: "",
};

const companySizeOptions = ["1–10", "11–50", "51–200", "201–500", "Mais de 500"];

const interestOptions = [...mainAreas.map((a) => a.label), "Ainda não sei, quero conhecer a Atria"];

function validateField(name: keyof FormValues, values: FormValues): string | undefined {
  switch (name) {
    case "firstName":
      return values.firstName.trim() ? undefined : "Informe seu nome.";
    case "lastName":
      return values.lastName.trim() ? undefined : "Informe seu sobrenome.";
    case "email":
      if (!values.email.trim()) return "Informe seu e-mail profissional.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) return "Informe um e-mail válido.";
      return undefined;
    case "phone":
      if (!values.phone.trim()) return "Informe um telefone para contato.";
      if (values.phone.replace(/\D/g, "").length < 8) return "Informe um telefone válido.";
      return undefined;
    case "companyName":
      return values.companyName.trim() ? undefined : "Informe o nome da empresa.";
    case "companySize":
      return values.companySize ? undefined : "Selecione o tamanho da empresa.";
    case "interest":
      return values.interest ? undefined : "Selecione uma opção.";
    default:
      return undefined;
  }
}

const requiredFields: (keyof FormValues)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "companyName",
  "companySize",
  "interest",
];

function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  for (const field of requiredFields) {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  }
  return errors;
}

export function TrialForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const reduced = useReducedMotion();

  function updateField<K extends keyof FormValues>(name: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const nextError = validateField(name, { ...values, [name]: value });
      const next = { ...prev };
      if (nextError) next[name] = nextError;
      else delete next[name];
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = requiredFields.find((field) => nextErrors[field]);
      if (firstInvalid) {
        formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      }
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 1100);
  }

  const transition = { duration: reduced ? 0 : 0.4, ease: [0.23, 1, 0.32, 1] as const };

  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-soft-lg sm:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex flex-col items-center py-8 text-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-sage text-ink">
              <CheckCircle2 className="size-8" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink">
              Formulário enviado com sucesso!
            </h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-text-muted">
              Recebemos os seus dados. Nossa equipe vai entrar em contato para liberar o seu
              acesso de 7 dias grátis à Atria.
            </p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-[1.75rem]">
              Comece seus 7 dias grátis
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
              Preencha os dados abaixo e nossa equipe libera o seu acesso à Atria.
            </p>

            <form ref={formRef} noValidate onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <TextField
                  id="firstName"
                  label="Nome"
                  required
                  autoComplete="given-name"
                  value={values.firstName}
                  error={errors.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                />
                <TextField
                  id="lastName"
                  label="Sobrenome"
                  required
                  autoComplete="family-name"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>

              <TextField
                id="email"
                type="email"
                label="E-mail profissional"
                required
                autoComplete="email"
                value={values.email}
                error={errors.email}
                onChange={(e) => updateField("email", e.target.value)}
              />

              <TextField
                id="jobTitle"
                label="Título do trabalho"
                autoComplete="organization-title"
                value={values.jobTitle}
                onChange={(e) => updateField("jobTitle", e.target.value)}
              />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-ink">
                  Telefone
                  <span aria-hidden className="ml-0.5 text-amber-dark">
                    *
                  </span>
                </label>
                <div className="flex gap-2">
                  <span className="flex h-[46px] shrink-0 items-center gap-1.5 rounded-xl border border-line bg-cream-soft px-3.5 text-[15px] font-medium text-text-muted">
                    🇧🇷 +55
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(11) 91234-5678"
                    required
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    value={values.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={cn(
                      "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-text-soft transition-colors duration-200 focus:outline-none focus:ring-4",
                      errors.phone
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : "border-line focus:border-amber focus:ring-amber/15"
                    )}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" role="alert" className="text-xs font-medium text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <TextField
                  id="companyName"
                  label="Nome da empresa"
                  required
                  autoComplete="organization"
                  value={values.companyName}
                  error={errors.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                />
                <SelectField
                  id="companySize"
                  label="Tamanho da empresa"
                  required
                  placeholder="Selecione"
                  value={values.companySize}
                  error={errors.companySize}
                  onChange={(e) => updateField("companySize", e.target.value)}
                >
                  {companySizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option} colaboradores
                    </option>
                  ))}
                </SelectField>
              </div>

              <SelectField
                id="interest"
                label="O que você gostaria de explorar?"
                required
                placeholder="Selecione uma área"
                value={values.interest}
                error={errors.interest}
                onChange={(e) => updateField("interest", e.target.value)}
              >
                {interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </SelectField>

              <TextareaField
                id="message"
                label="Mensagem"
                placeholder="Conte-nos mais sobre sua agência e o que você gostaria de gerenciar com a Atria."
                value={values.message}
                onChange={(e) => updateField("message", e.target.value)}
              />

              <Button type="submit" size="lg" icon={false} disabled={status === "submitting"} className="mt-2 w-full">
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  "Começar os 7 dias grátis"
                )}
              </Button>

              <p className="text-center text-xs leading-relaxed text-text-soft">
                Ao enviar este formulário, você autoriza que a Atria entre em contato para fins
                de ativação do seu teste gratuito, conforme a política de privacidade da Atria.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
