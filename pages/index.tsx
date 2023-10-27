import Head from 'next/head';
import CharacterList from '../components/CharacterList';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Rick and Morty Character Feed</title>
        <meta name="description" content="Rick and Morty Character Feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Rick and Morty Character Feed</h1>
        <CharacterList />
      </main>

      <footer>
        <p>Powered by Next.js and the Rick and Morty API</p>
      </footer>
    </div>
  );
};

export default Home;
