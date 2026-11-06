CREATE TYPE "statusEnum" AS ENUM('active', 'deleted', 'banned');--> statement-breakpoint
CREATE TABLE "artists" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "artists_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"artist" varchar NOT NULL,
	"discogs_id" integer NOT NULL UNIQUE,
	"description" varchar
);
--> statement-breakpoint
CREATE TABLE "favorites" (
	"song_id" integer,
	"user_id" integer,
	CONSTRAINT "favorites_pkey" PRIMARY KEY("song_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "impressions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "impressions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"song_id" integer NOT NULL,
	"user_id" integer,
	"shown_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "song_artists" (
	"song_id" integer,
	"artist_id" integer,
	CONSTRAINT "song_artists_pkey" PRIMARY KEY("song_id","artist_id")
);
--> statement-breakpoint
CREATE TABLE "songs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "songs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar NOT NULL,
	"url" varchar NOT NULL UNIQUE
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" varchar NOT NULL UNIQUE,
	"email" varchar NOT NULL UNIQUE,
	"password_hash" varchar NOT NULL,
	"bio" varchar(10000),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone DEFAULT now(),
	"statusEnum" "statusEnum" DEFAULT 'active'::"statusEnum" NOT NULL
);
--> statement-breakpoint
CREATE INDEX "favorite_song_in_idx" ON "favorites" ("user_id","song_id");--> statement-breakpoint
CREATE INDEX "song_impression_idx" ON "impressions" ("user_id","song_id","shown_at");--> statement-breakpoint
CREATE INDEX "artist_by_song_idx" ON "song_artists" ("song_id","artist_id");--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_song_id_songs_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "impressions" ADD CONSTRAINT "impressions_song_id_songs_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE RESTRICT;--> statement-breakpoint
ALTER TABLE "impressions" ADD CONSTRAINT "impressions_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE "song_artists" ADD CONSTRAINT "song_artists_song_id_songs_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "song_artists" ADD CONSTRAINT "song_artists_artist_id_artists_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "artists"("id") ON DELETE CASCADE;