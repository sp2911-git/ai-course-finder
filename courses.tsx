import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import CourseCard, { CourseCardProps } from '../components/CourseCard';
import SearchBar from '../components/SearchBar';

// Mock data for courses
const allCourses: CourseCardProps[] = [
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
  {
    id: '7',
    title: 'Data Science for AI',
    description: 'Learn essential data science skills for AI applications including data cleaning, visualization, and statistical analysis.',
    platform: 'DataCamp',
    rating: 4.6,
    tags: ['Data Science', 'Statistics', 'Python'],
    difficulty: 'Beginner',
    imageUrl: 'https://via.placeholder.com/300x200?text=Data+Science'
  },
  {
    id: '8',
    title: 'Advanced Deep Learning Architectures',
    description: 'Explore cutting-edge deep learning architectures including transformers, GANs, and self-supervised learning.',
    platform: 'Udemy',
    rating: 4.7,
    tags: ['Deep Learning', 'GANs', 'Transformers'],
    difficulty: 'Expert',
    imageUrl: 'https://via.placeholder.com/300x200?text=Advanced+DL'
  },
  {
    id: '9',
    title: 'AI for Healthcare',
    description: 'Apply AI techniques to healthcare problems including medical imaging, diagnosis, and treatment planning.',
    platform: 'Coursera',
    rating: 4.8,
    tags: ['Healthcare', 'Medical AI', 'Computer Vision'],
    difficulty: 'Intermediate',
    imageUrl: 'https://via.placeholder.com/300x200?text=AI+Healthcare'
  },
];

// All available tags from courses
const allTags = Array.from(new Set(allCourses.flatMap(course => course.tags)));

// All available platforms
const allPlatforms = Array.from(new Set(allCourses.map(course => course.platform)));

// Difficulty levels
const difficultyLevels = ['Beginner', 'Intermediate', 'Expert'];

type FilterState = {
  tags: string[];
  difficulty: string[];
  price: string[];
  platform: string[];
  minRating: number;
};

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    tags: [],
    difficulty: [],
    price: [],
    platform: [],
    minRating: 0,
  });
  const [sortBy, setSortBy] = useState('popularity'); // popularity, newest, rating

  // Filter courses based on current filters
  const filteredCourses = allCourses.filter(course => {
    // Search query filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Tags filter
    if (filters.tags.length > 0 && !course.tags.some(tag => filters.tags.includes(tag))) {
      return false;
    }
    
    // Difficulty filter
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(course.difficulty)) {
      return false;
    }
    
    // Platform filter
    if (filters.platform.length > 0 && !filters.platform.includes(course.platform)) {
      return false;
    }
    
    // Rating filter
    if (course.rating < filters.minRating) {
      return false;
    }
    
    return true;
  });

  // Sort courses based on current sort option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      // In a real app, we would sort by date
      return parseInt(b.id) - parseInt(a.id);
    } else { // popularity (default)
      // In a real app, we would have a popularity metric
      return b.rating * 1.5 - a.rating * 1.5;
    }
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagFilter = (tag: string) => {
    setFilters(prev => {
      const newTags = prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: newTags };
    });
  };

  const handleDifficultyFilter = (difficulty: string) => {
    setFilters(prev => {
      const newDifficulty = prev.difficulty.includes(difficulty)
        ? prev.difficulty.filter(d => d !== difficulty)
        : [...prev.difficulty, difficulty];
      return { ...prev, difficulty: newDifficulty };
    });
  };

  const handlePlatformFilter = (platform: string) => {
    setFilters(prev => {
      const newPlatform = prev.platform.includes(platform)
        ? prev.platform.filter(p => p !== platform)
        : [...prev.platform, platform];
      return { ...prev, platform: newPlatform };
    });
  };

  const handleRatingFilter = (rating: number) => {
    setFilters(prev => ({ ...prev, minRating: rating }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <MainLayout title="AI Courses - Find and Compare AI Courses">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI Courses</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <SearchBar onSearch={handleSearch} placeholder="Search courses..." />
              </div>
              
              {/* Tags filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Tags</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allTags.map((tag, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`tag-${index}`}
                        checked={filters.tags.includes(tag)}
                        onChange={() => handleTagFilter(tag)}
                        className="mr-2"
                      />
                      <label htmlFor={`tag-${index}`}>{tag}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Difficulty filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Difficulty Level</h3>
                <div className="space-y-2">
                  {difficultyLevels.map((level, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`difficulty-${index}`}
                        checked={filters.difficulty.includes(level)}
                        onChange={() => handleDifficultyFilter(level)}
                        className="mr-2"
                      />
                      <label htmlFor={`difficulty-${index}`}>{level}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price filter (mock) */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Price</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="price-free"
                      checked={filters.price.includes('free')}
                      onChange={() => setFilters(prev => ({
                        ...prev,
                        price: prev.price.includes('free')
                          ? prev.price.filter(p => p !== 'free')
                          : [...prev.price, 'free']
                      }))}
                      className="mr-2"
                    />
                    <label htmlFor="price-free">Free</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="price-paid"
                      checked={filters.price.includes('paid')}
                      onChange={() => setFilters(prev => ({
                        ...prev,
                        price: prev.price.includes('paid')
                          ? prev.price.filter(p => p !== 'paid')
                          : [...prev.price, 'paid']
                      }))}
                      className="mr-2"
                    />
                    <label htmlFor="price-paid">Paid</label>
                  </div>
                </div>
              </div>
              
              {/* Platform filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Platform</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`platform-${index}`}
                        checked={filters.platform.includes(platform)}
                        onChange={() => handlePlatformFilter(platform)}
                        className="mr-2"
                      />
                      <label htmlFor={`platform-${index}`}>{platform}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rating filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Minimum Rating</h3>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={filters.minRating}
                    onChange={(e) => handleRatingFilter(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-2">{filters.minRating.toFixed(1)}</span>
                </div>
              </div>
              
              {/* Reset filters button */}
              <button
                onClick={() => setFilters({
                  tags: [],
                  difficulty: [],
                  price: [],
                  platform: [],
                  minRating: 0,
                })}
                className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Course results */}
          <div className="lg:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{sortedCourses.length}</span> courses found
                </div>
                <div className="flex items-center">
                  <label htmlFor="sort-by" className="mr-2">Sort by:</label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={handleSortChange}
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>
            
            {sortedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search query.</p>
                <button
                  onClick={() => {
                    setFilters({
                      tags: [],
                      difficulty: [],
                      price: [],
                      platform: [],
                      minRating: 0,
                    });
                    setSearchQuery('');
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
