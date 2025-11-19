import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <Banner />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Latest from the Blog</h3>
            <p className="mt-2 text-gray-700">A preview of your latest posts — link these to your blog index.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Need Prayer or Guidance?</h3>
            <p className="mt-2 text-gray-700">Use the chatbot below for compassionate, biblically informed answers.</p>
            <div className="mt-4">
              <Chatbot />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
