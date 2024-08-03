import Footer from '@/modules/Home/components/Footer';
import JokeList from '@/modules/Joke/components/JokeList';
import Image from '@/packages/components/base/Images/Image';
import ButtonLink from '@/packages/components/base/Navigations/ButtonLink';
import NextLink from '@/packages/components/base/Navigations/NextLink';

import styles from './Home.page.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Image
          effect="blur"
          src="https://gading.dev/media/banners/1.jpg"
          width={500}
          alt="Vercel Logo"
          className="flex justify-center items-center min-h-[150px] sm:min-h-[300px] rounded h-full object-fit"
          wrapperClassName="mt-10 max-w-full -mb-10 rounded"
        />

        <p className={styles.description}>
          Visit the demo API{' '}
          <NextLink href="/api/jokes">
            <code className={styles.code}>/api/jokes</code>
          </NextLink>
        </p>

        <ButtonLink className="bg-fuchsia-400 text-center mt-5" href="/about?text=Hello%20World">
          About Page
        </ButtonLink>

        <hr className="w-full max-w-lg my-8" />

        {/* Example calling Server Component inside Server Component */}
        <JokeList />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
