import type { introContentType } from '@/types/types';
import { introCredits } from './lists/introCredits';
import { plannedFeatures } from './lists/plannedFeatures';

export const introContent: introContentType[] = [
  {
    title: 'Welcome',
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: (
          <>
            This is sort of like an introduction to my application. You may skip
            the whole section if you wish, as it can be a bit lengthy, just hit
            the skip button below :)
          </>
        ),
      },
      {
        id: 2,
        type: 'paragraph',
        content: (
          <>
            Also, this introduction is only shown once on initial visit (except
            if you clear your browser cache of course). Anyways let's get
            started.
          </>
        ),
      },
    ],
  },
  {
    title: 'Crate Digging',
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: (
          <>
            Sources like{' '}
            <a
              className="underline hover:text-blue-500"
              href="https://hangout.fm/blog/posts/what-is-crate-digging"
            >
              Hangout
            </a>{' '}
            (2022),{' '}
            <a
              className="underline hover:text-blue-500"
              href="https://medium.com/cuepoint/the-lost-art-of-cratedigging-4ed652643618"
            >
              Iandoli
            </a>{' '}
            (2014) and{' '}
            <a
              className="underline hover:text-blue-500"
              href="https://www.mylegendvinyl.co.uk/blogs/news/crate-digging"
            >
              Legend Vinyl
            </a>{' '}
            (N.d.) describe term "Crate Digging" as action of going to a record
            store or a similar premise to look for songs to sample. The digging
            term comes from the fact that vinyls are usually stored in crates or
            boxes. The sought out songs are primarily either rare or unknown,
            goal being to find fresh or unheard samples to use on songs, and
            their genres usually include variety of different genres, such as
            jazz and funk. The desired outcome is that anyone hearing the song
            cannot not recognize the sample. This technique is used to bypass
            legal aspects of not having lisences to songs. Crate Digging isn't
            however merely just looking for samples. Vinyls have both unique,
            authentic charm to them, but they can also have huge monetary value.
            Some people look for vinyls for the financial aspect, while others
            simply want to own their own collection of vinyls. Overall, Crate
            Digging can be understood as the passion for seeking for vinyls, no
            matter the reason.
          </>
        ),
      },
      {
        id: 2,
        type: 'paragraph',
        content: (
          <>
            Crate Digging applies to other genres, but the term's origins are
            deeply rooted in hip hop. Early DJs hunted for vinyls, looking for
            new sounds to sample. Huge conventions were held, one prominent one
            being The Roosevelt Hotel Record Convention on E. 45th Street in New
            York City, where old school hip hop legends gathered under the same
            roof to buy wax (slang for vinyl record) from dealers. The practice
            of Crate Digging even birthed a collection named{' '}
            <a
              className="underline hover:text-blue-500"
              href="https://en.wikipedia.org/wiki/D.I.T.C."
            >
              D.I.T.C
            </a>
            , which literally means Digging In The Crates. The collection was
            founded in 1992 by legendary hip hop producer Diamond D and it
            featured many notable names tied to hip hop's golden era, such as
            Lord Finesse, Buckwild and Big L.
          </>
        ),
      },
      {
        id: 3,
        type: 'paragraph',
        content: (
          <>
            Even if platforms such as Youtube and Spotify have made media easily
            accessible for anyone, Crate Digging is still relevant in modern
            world. Even if the songs are available for listening, the desired
            ones still need to be found. I would coin this "Digital Crate
            Digging". The threshold is lower since everything can be found in
            singular device, rather than physically visiting a record shop. You
            also, depending on the platform, don't need to pay anything before
            listening to to a record. Given how expensive some vinyls can be,
            this is a massive difference. People however still like to have
            physical collections of vinyls, so traditional Crate Digging lives
            on as a practice.
          </>
        ),
      },
      {
        id: 4,
        type: 'paragraph',
        content: (
          <>
            Given the description below, I would say that this application
            provider better structured experience of Digital Crate Digging. You
            don't need to go looking for individual videos on Youtube,
            everything is cleanly available in "one package".
          </>
        ),
      },
    ],
  },
  {
    title: 'About (1/2)',
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: (
          <>
            This application is a one-person passion project. I discovered
            underground 90s hip hop relatively late (circa 2021-2022) but
            quickly fell in love with it. This is why it was an easy pick for
            basis when I was trying to figure out what kind of application I
            would like to make. Additionally, I have not discovered another
            application with a similar premise.
          </>
        ),
      },
      {
        id: 2,
        type: 'paragraph',
        content: (
          <>
            I also study web software development, so wanting to use what I have
            learned in a practical use was another motivator for this project.
            At the end of the day though, it is just nice to have my own project
            that I can return to and work on.
          </>
        ),
      },
    ],
  },
  {
    title: 'About (2/2)',
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: (
          <>
            Currently, at the time of writing, the application is still its
            infancy, so no real features have been made yet, just some pages and
            components.
          </>
        ),
      },
      {
        id: 2,
        type: 'paragraph',
        content: <>Planned features include following:</>,
      },
      {
        id: 3,
        type: 'list',
        content: plannedFeatures,
      },
    ],
  },
  {
    title: 'Credits',
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: (
          <>
            This is a list of creators I want to credit for both uploading 90s
            underground hip hop to Youtube and also for introducing me to
            countless amount of dope music, this application wouldn't be a thing
            without them. Keep on digging.
          </>
        ),
      },
      {
        id: 2,
        type: 'list',
        content: introCredits,
      },
    ],
  },
  {
    title: "That's about it",
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: (
          <>
            Hopefully you will enjoy the application. I will add updates
            whenever I have time and motivation to do so.
          </>
        ),
      },
      {
        id: 2,
        type: 'paragraph',
        content: (
          <>You can open this again in the settings at any time you want.</>
        ),
      },
      {
        id: 3,
        type: 'paragraph',
        content: <>Last updated September 23rd, 2026.</>,
      },
    ],
  },
];
