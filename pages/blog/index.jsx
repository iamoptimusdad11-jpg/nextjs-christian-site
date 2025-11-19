import Layout from '../../components/Layout';

export default function BlogIndex() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-gray-700">List of posts — store posts as markdown or use a headless CMS.</p>
      <ul className="mt-4 space-y-3">
        <li><a href="/blog/hello-world" className="underline">Hello, Grace — an introduction</a></li>
      </ul>
    </Layout>
  );
}
