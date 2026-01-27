import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import { supabase, BlogPost as BlogPostType } from '../lib/supabase';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);

    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (data) {
      setPost(data);
      fetchRelatedPosts(data.category, data.id);
    }

    setLoading(false);
  };

  const fetchRelatedPosts = async (category: string, currentPostId: string) => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('category', category)
      .eq('published', true)
      .neq('id', currentPostId)
      .order('created_at', { ascending: false })
      .limit(3);

    if (data) {
      setRelatedPosts(data);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <Section background="white" padding="xl">
        <div className="text-center py-12">
          <p className="text-neutral-700">Loading post...</p>
        </div>
      </Section>
    );
  }

  if (!post) {
    return (
      <Section background="white" padding="xl">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-neutral-700 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button href="/blog" variant="accent">
            Back to Blog
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-neutral-700">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatDate(post.created_at)}</span>
              </div>
            </div>
          </div>

          {post.featured_image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            <div className="whitespace-pre-wrap text-neutral-700 leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <Card padding="lg" className="bg-gradient-to-br from-secondary/10 to-primary/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help Implementing This?</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Let our team handle the strategy and execution so you can focus on running
                your business.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Book a Free Strategy Call
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section background="white" padding="xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} hover padding="lg">
                  <div className="mb-4">
                    <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-neutral-700 mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center group"
                  >
                    Read more
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
