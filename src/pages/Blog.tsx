import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import { supabase, BlogPost } from '../lib/supabase';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Section background="primary" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Growth Insights</h1>
          <p className="text-lg text-neutral-100">
            Simple, practical tips on how to get more leads and sales online.
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-neutral-700">Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-700">No posts found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} hover padding="lg" className="flex flex-col h-full">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-neutral-700">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.created_at)}
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-neutral-700 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">By {post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center group"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Section>

      <Section background="gray" padding="md">
        <div className="text-center">
          <p className="text-lg text-neutral-700 mb-4">
            Want us to implement these strategies for you?
          </p>
          <Link
            to="/contact"
            className="text-secondary hover:text-secondary-dark font-semibold inline-flex items-center group text-lg"
          >
            Work with us
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>
    </>
  );
}
