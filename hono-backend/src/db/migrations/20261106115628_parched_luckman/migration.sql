CREATE TYPE "roleEnum" AS ENUM('user', 'admin', 'owner');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "roleEnum" "roleEnum" DEFAULT 'user'::"roleEnum" NOT NULL;