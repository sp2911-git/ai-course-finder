import { useState } from 'react';
import MainLayout from '../components/MainLayout';
import SearchBar from '../components/SearchBar';
import CourseCard, { CourseCardProps } from '../components/CourseCard';
import AIChatRecommendation from '../components/AIChatRecommendation';
import NewsletterSignup from '../components/NewsletterSignup';

// Mock data for featured courses
const featuredCourses: CourseCardProps[] = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning algorithms and applications. This course covers supervised and unsupervised learning techniques.',
    platform: 'Coursera',
    rating: 4.8,
    tags: ['Machine Learning', 'Beginner', 'Python'],
    difficulty: 'Beginner',
    imageUrl: 'https://via.placeholder.com/300x200?text=Machine+Learning'
  },
  {
    id: '2',
    title: 'Deep Learning Specialization',
    description: 'Master deep learning techniques with practical projects. Build neural networks and implement deep learning algorithms.',
    platform: 'Udemy',
    rating: 4.6,
    tags: ['Deep Learning', 'Neural Networks', 'Intermediate'],
    difficulty: 'Intermediate',
    imageUrl: 'https://via.placeholder.com/300x200?text=Deep+Learning'
  },
  {
    id: '3',
    title: 'Natural Language Processing',
    description: 'Build and deploy NLP models for text analysis and generation. Learn about transformers, BERT, and GPT architectures.',
    platform: 'edX',
    rating: 4.7,
    tags: ['NLP', 'Transformers', 'Advanced'],
    difficulty: 'Expert',
    imageUrl: 'https://via.placeholder.com/300x200?text=NLP'
  },
];

// Mock data for new courses
const newCourses: CourseCardProps[] = [
  {
    id: '4',
    title: 'Computer Vision with TensorFlow',
    description: 'Learn to build and train computer vision models using TensorFlow and Keras. Implement object detection and image classification.',
    platform: 'Coursera',
    rating: 4.5,
    tags: ['Computer Vision', 'TensorFlow', 'Intermediate'],
    difficulty: 'Intermediate',
    imageUrl: 'https://via.placeholder.com/300x200?text=Computer+Vision'
  },
  {
    id: '5',
    title: 'Reinforcement Learning Fundamentals',
    description: 'Understand the principles of reinforcement learning and implement algorithms like Q-learning and policy gradients.',
    platform: 'Udacity',
    rating: 4.4,
    tags: ['Reinforcement Learning', 'Python', 'Advanced'],
    difficulty: 'Expert',
    imageUrl: 'https://via.placeholder.com/300x200?text=Reinforcement+Learning'
  },
  {
    id: '6',
    title: 'AI Ethics and Responsible AI',
    description: 'Explore the ethical considerations in AI development and learn to build responsible AI systems.',
    platform: 'edX',
    rating: 4.9,
    tags: ['AI Ethics', 'Responsible AI', 'Beginner'],
    difficulty: 'Beginner',
    imageUrl: 'https://via.placeholder.com/300x200?text=AI+Ethics'
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // In a real implementation, this would redirect to the search page with the query
  };

  const handleSubscribe = (email: string) => {
    console.log('Subscribed with email:', email);
    // In a real implementation, this would call an API to handle the subscription
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-700 mb-4">
            AI Course Finder
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Find, compare, and register for the best AI courses from across the web
          </p>
          
          {/* Main search bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Find Your Perfect AI Course</h2>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </section>
        
        {/* Featured courses section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>
        
        {/* New courses section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">New Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>
        
        {/* AI Chat recommendation */}
        <section className="mb-16">
          <AIChatRecommendation />
        </section>
        
        {/* Newsletter signup */}
        <section className="mb-16">
          <NewsletterSignup onSubscribe={handleSubscribe} />
        </section>
      </div>
    </MainLayout>
  );
}
