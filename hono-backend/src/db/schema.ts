import * as schema from './schemas/index.js';
import { defineRelations } from 'drizzle-orm';

export const relations: any = defineRelations(schema, (r) => ({
  UsersTable: {
    // The first property is a custom key used on the query

    // Get favorite songs based on user
    favoriteSongs: r.many.SongsTable({
      from: r.UsersTable.id.through(r.FavoritesTable.userId),
      to: r.SongsTable.id.through(r.FavoritesTable.songId),
    }),
    // Get song plays based on user
    songPlays: r.many.SongsTable({
      from: r.UsersTable.id.through(r.ImpressionsTable.userId),
      to: r.SongsTable.id.through(r.ImpressionsTable.songId),
    }),
  },
  SongsTable: {
    // Get users based on favorited song
    favoritedBy: r.many.UsersTable({
      from: r.SongsTable.id.through(r.FavoritesTable.songId),
      to: r.UsersTable.id.through(r.FavoritesTable.userId),
    }),
    // Get users based on played song
    playedBy: r.many.UsersTable({
      from: r.SongsTable.id.through(r.ImpressionsTable.userId),
      to: r.UsersTable.id.through(r.ImpressionsTable.userId),
    }),
    // Get artists based on song
    songBy: r.many.ArtistsTable({
      from: r.SongsTable.id.through(r.SongArtistTable.songId),
      to: r.ArtistsTable.id.through(r.SongArtistTable.artistId),
    }),
  },
  ArtistsTable: {
    // Get songs based on artist
    artistSongs: r.many.SongsTable({
      from: r.ArtistsTable.id.through(r.SongArtistTable.artistId),
      to: r.SongsTable.id.through(r.SongArtistTable.songId),
    }),
  },
}));
