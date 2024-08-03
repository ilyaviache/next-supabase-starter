export interface GithubStars {
  stargazers_count: number;
}

export interface TestData {
  id: number;
  created_at: Date | string;
}

export interface HomePageProps {
  githubStars: number;
  testData: TestData[];
}
