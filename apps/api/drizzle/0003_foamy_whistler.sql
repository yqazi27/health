CREATE TABLE IF NOT EXISTS "tenant" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar NOT NULL,
	"metadata" jsonb DEFAULT '{}'::jsonb
);
