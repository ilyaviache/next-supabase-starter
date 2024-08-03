import { cookies } from 'next/headers';

import HomePage from '@/modules/Home/Home.page';
import { GithubStars, TestData } from '@/modules/Home/Home.types';
import { withMainLayoutPage } from '@/packages/components/layouts/Pages/Main';
import { createServerClient } from '@/packages/utils/supabase';

async function getStars(): Promise<number> {
  const res = await fetch(
    'https://api.github.com/repos/yaseenmustapha/nextjs14-app',
    { next: { revalidate: 60 } }
  );
  const data: GithubStars = await res.json();
  return data.stargazers_count;
}

async function getTestData(): Promise<TestData[]> {
  const cookiesStore = cookies();
  const supabase = createServerClient(cookiesStore);
  const { data, error } = await supabase.from('test_table').select('id, created_at');
  console.log('1111 ---->', data, error);
  if (error) {
    console.error('Error fetching data from Supabase:', error);
    return [];
  }

  return data as TestData[];
}

const Home = async() => {
  const githubStars = await getStars();
  const testData = await getTestData();

  const props = {
    githubStars,
    testData
  };

  return <HomePage {...props} />;
};

export default withMainLayoutPage(Home);
