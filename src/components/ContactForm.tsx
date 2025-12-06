import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// Form validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z.string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
});

type FormData = z.infer<typeof contactSchema>;

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const ContactForm = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const baseInputClasses = cn(
    "rounded-2xl transition focus-visible:ring-2 backdrop-blur-xl",
    isDark
      ? "border-white/10 bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/50 focus-visible:border-primary/40 focus-visible:ring-primary/30"
      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:border-primary/50 focus-visible:ring-primary/40"
  );

  const getFieldClasses = (hasError: boolean) =>
    cn(
      baseInputClasses,
      hasError && (isDark ? "border-red-500/80 focus-visible:ring-red-500" : "border-red-500 focus-visible:ring-red-400")
    );

  const accentLabelClass = isDark ? "text-white/50" : "text-slate-400";
  const headingClass = isDark ? "text-white" : "text-slate-900";
  const bodyTextClass = isDark ? "text-white/60" : "text-slate-600";
  const captionTextClass = isDark ? "text-white/45" : "text-slate-500";
  const charCountClass = isDark ? "text-white/40" : "text-slate-400";
  const errorTextClass = isDark ? "text-red-400" : "text-red-500";
  const requiredMarkerClass = isDark ? "text-white/35" : "text-slate-400";

  const primaryButtonClass = cn(
    "group flex h-12 w-full items-center justify-center gap-2 rounded-full border text-base font-semibold transition disabled:opacity-60 disabled:hover:bg-transparent",
    isDark
      ? "border-white/10 bg-white/5 text-white shadow-[0_30px_80px_-40px_rgba(59,130,246,0.8)] hover:bg-white/10 hover:text-white"
      : "border-slate-200 bg-slate-900 text-white shadow-[0_25px_70px_-50px_rgba(8,15,40,0.55)] hover:bg-slate-800 hover:text-white"
  );

  const confirmationBadgeClass = cn(
    "grid h-16 w-16 place-items-center rounded-full",
    isDark
      ? "border border-white/15 bg-white/10 shadow-[0_0_45px_-15px_rgba(59,130,246,0.7)]"
      : "border border-emerald-100 bg-emerald-50 shadow-[0_0_45px_-25px_rgba(16,185,129,0.45)]"
  );

  const avatarFrameClass = cn(
    "relative flex h-14 w-14 items-center justify-center rounded-3xl p-1",
    isDark
      ? "border border-white/15 bg-white/10 shadow-[0_25px_55px_-35px_rgba(59,130,246,0.8)]"
      : "border border-slate-200 bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.2)]"
  );

  const renderCard = (content: ReactNode) => (
    <div className="relative">
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-[52px] blur-3xl",
          isDark ? "bg-primary/35 opacity-25" : "bg-primary/20 opacity-40"
        )}
      />
      <div
        className={cn(
          "relative rounded-[48px] p-[0.9rem] shadow-[0_55px_140px_-70px_rgba(7,12,35,0.9)]",
          isDark
            ? "bg-[radial-gradient(circle_at_top_left,#0d1536_0%,#070d28_50%,#03040f_100%)]"
            : "bg-[radial-gradient(circle_at_top_left,#f6f8ff_0%,#eef2ff_50%,#e2e7ff_100%)] shadow-[0_45px_120px_-60px_rgba(15,23,42,0.2)]"
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[48px] opacity-70",
            isDark
              ? "bg-gradient-to-br from-white/6 via-transparent to-primary/20"
              : "bg-gradient-to-br from-white via-transparent to-primary/15"
          )}
        />
        <div
          className={cn(
            "relative overflow-hidden rounded-[36px] px-6 py-10 backdrop-blur-2xl sm:px-10",
            isDark
              ? "border border-white/10 bg-[#030714]/95 text-white"
              : "border border-slate-200 bg-white/95 text-slate-900"
          )}
        >
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[36px] border",
              isDark ? "border-white/10" : "border-slate-200/70"
            )}
          />
          <span
            aria-hidden
            className={cn(
              "absolute top-1/2 -right-10 h-20 w-20 -translate-y-1/2 rounded-full blur-xl",
              isDark ? "bg-primary/60" : "bg-primary/30"
            )}
          />
          <div className="relative z-10">
            {content}
          </div>
        </div>
      </div>
    </div>
  );

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as keyof FormErrors] = issue.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS configuration. Please add your service ID, template ID, and public key.");
      }
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "N/A",
          message: formData.message,
        },
        {
          publicKey,
        }
      );

      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return renderCard(
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center space-y-6 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
          className={confirmationBadgeClass}
        >
          <CheckCircle className={cn("h-9 w-9", isDark ? "text-emerald-400" : "text-emerald-500")} />
        </motion.div>
        <div className="space-y-2">
          <h3 className={cn("text-2xl font-semibold", headingClass)}>Thank you for reaching out!</h3>
          <p className={cn("text-sm", bodyTextClass)}>
            We've received your message and will get back to you within 24 hours.
          </p>
        </div>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="ghost"
          className={cn(
            "w-full rounded-full px-8 py-6 text-base font-semibold transition sm:w-auto",
            isDark
              ? "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900"
          )}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return renderCard(
    <div className="space-y-10">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-4">
          <span className={cn("text-[0.7rem] font-semibold uppercase tracking-[0.5em]", accentLabelClass)}>
            Now
          </span>
          <div className="space-y-3">
            <h2 className={cn("text-3xl font-semibold sm:text-4xl", headingClass)}>
              Let's have a chat
            </h2>
            <p className={cn("max-w-md text-sm sm:text-base", bodyTextClass)}>
              We'll talk through your goals, blockers, and what you actually need. No fluff. No 10-page briefs.
            </p>
          </div>
        </div>
        <div className={avatarFrameClass}>
          <Avatar className="h-full w-full rounded-3xl">
            <AvatarImage src="/placeholder.svg" alt="Team member" className="object-cover" />
            <AvatarFallback
              className={cn(
                "rounded-3xl text-sm font-semibold uppercase",
                isDark ? "bg-primary/60 text-white" : "bg-primary/20 text-primary"
              )}
            >
              TC
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className={cn("text-xs font-semibold uppercase tracking-[0.25em]", bodyTextClass)}>
              Name <span className={requiredMarkerClass}>*</span>
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange("name")}
              placeholder="John Doe"
              disabled={isSubmitting}
              className={getFieldClasses(Boolean(errors.name))}
            />
            {errors.name && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("flex items-center gap-2 text-xs font-medium", errorTextClass)}
              >
                <AlertCircle size={14} />
                <span>{errors.name}</span>
              </motion.div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={cn("text-xs font-semibold uppercase tracking-[0.25em]", bodyTextClass)}>
              Email <span className={requiredMarkerClass}>*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
              placeholder="john@company.com"
              disabled={isSubmitting}
              className={getFieldClasses(Boolean(errors.email))}
            />
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("flex items-center gap-2 text-xs font-medium", errorTextClass)}
              >
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className={cn("text-xs font-semibold uppercase tracking-[0.25em]", bodyTextClass)}>
            Company
          </label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange("company")}
            placeholder="Your company name"
            disabled={isSubmitting}
            className={getFieldClasses(Boolean(errors.company))}
          />
          {errors.company && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex items-center gap-2 text-xs font-medium", errorTextClass)}
            >
              <AlertCircle size={14} />
              <span>{errors.company}</span>
            </motion.div>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className={cn("text-xs font-semibold uppercase tracking-[0.25em]", bodyTextClass)}>
            Message <span className={requiredMarkerClass}>*</span>
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange("message")}
            placeholder="Tell us about your project, goals, and timeline..."
            rows={6}
            disabled={isSubmitting}
            className={`${getFieldClasses(Boolean(errors.message))} min-h-[160px] resize-none`}
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            {errors.message ? (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("flex items-center gap-2 text-xs font-medium", errorTextClass)}
              >
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </motion.div>
            ) : (
              <span />
            )}
            <span className={cn("text-xs font-medium tracking-wider", charCountClass)}>
              {formData.message.length}/1000
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={primaryButtonClass}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending..
              </>
            ) : (
              "Send Enquiry"
            )}
          </Button>
          {submissionError && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("text-center text-sm font-medium", errorTextClass)}
              role="alert"
            >
              {submissionError}
            </motion.p>
          )}
        
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
