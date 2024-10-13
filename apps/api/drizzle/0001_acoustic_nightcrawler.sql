ALTER TABLE "patient" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "patient" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "patient" ADD COLUMN "phone" varchar;--> statement-breakpoint
ALTER TABLE "patient" ADD COLUMN "email" varchar;--> statement-breakpoint
ALTER TABLE "patient" ADD COLUMN "metadata" jsonb DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "patient" ADD CONSTRAINT "patient_phone_unique" UNIQUE("phone");--> statement-breakpoint
ALTER TABLE "patient" ADD CONSTRAINT "patient_email_unique" UNIQUE("email");