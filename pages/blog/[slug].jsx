import Layout from '../../components/Layout';

export default function Post() {
  return (
    <Layout>
      <article>
        <h1 className="text-3xl font-bold">Sample Post</h1>
        <p className="mt-4 text-gray-700">This is where your post content will go.</p>
      </article>
    </Layout>
  );
}
