import { Course } from '../utils/schema';

// Mock data for courses
export const coursesData: Record<string, Course> = {
  '1': {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning algorithms and applications. This course covers supervised and unsupervised learning techniques.',
    longDescription: `
      This comprehensive course introduces you to the exciting world of Machine Learning. You'll start with the basics and gradually move to more advanced concepts.
      
      ## What you'll learn
      - Fundamentals of Machine Learning algorithms
      - Supervised learning techniques including regression and classification
      - Unsupervised learning methods like clustering and dimensionality reduction
      - How to implement ML algorithms using Python and popular libraries
      - Real-world applications of Machine Learning
      
      ## Course content
      The course is divided into 10 modules, each focusing on different aspects of Machine Learning. You'll complete hands-on projects and assignments to reinforce your learning.
      
      ## Prerequisites
      - Basic knowledge of Python programming
      - Understanding of basic statistics and linear algebra
      - No prior Machine Learning experience required
    `,
    platform: 'Coursera',
    instructor: 'Dr. Sarah Johnson',
    duration: '8 weeks',
    rating: 4.8,
    reviewCount: 1245,
    tags: ['Machine Learning', 'Beginner', 'Python'],
    difficulty: 'Beginner',
    price: 'Free (Certificate: $49)',
    imageUrl: 'https://via.placeholder.com/800x400?text=Machine+Learning',
    syllabus: [
      'Introduction to Machine Learning',
      'Data Preprocessing and Exploration',
      'Regression Algorithms',
      'Classification Algorithms',
      'Clustering Techniques',
      'Dimensionality Reduction',
      'Model Evaluation and Validation',
      'Ensemble Methods',
      'Introduction to Neural Networks',
      'Final Project'
    ],
    enrollmentLink: 'https://coursera.org/learn/machine-learning',
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-03-20')
  },
  '2': {
    id: '2',
    title: 'Deep Learning Specialization',
    description: 'Master deep learning techniques with practical projects. Build neural networks and implement deep learning algorithms.',
    longDescription: `
      The Deep Learning Specialization is a foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology.
      
      ## What you'll learn
      - Build and train deep neural networks, implement vectorized neural networks, identify architecture parameters
      - Use best practices to train and develop test sets and analyze bias/variance for building DL applications
      - Use standard neural network techniques, implement and apply a variety of optimization algorithms
      - Apply deep learning to computer vision, natural language processing, and other applications
      
      ## Course content
      This specialization consists of 5 courses that will give you a comprehensive understanding of deep learning techniques.
      
      ## Prerequisites
      - Intermediate Python programming skills
      - Basic understanding of linear algebra and calculus
      - Familiarity with machine learning concepts
    `,
    platform: 'Udemy',
    instructor: 'Prof. Michael Chen',
    duration: '16 weeks',
    rating: 4.6,
    reviewCount: 3782,
    tags: ['Deep Learning', 'Neural Networks', 'Intermediate'],
    difficulty: 'Intermediate',
    price: '$79.99',
    imageUrl: 'https://via.placeholder.com/800x400?text=Deep+Learning',
    syllabus: [
      'Neural Networks and Deep Learning',
      'Improving Deep Neural Networks',
      'Structuring Machine Learning Projects',
      'Convolutional Neural Networks',
      'Sequence Models'
    ],
    enrollmentLink: 'https://udemy.com/course/deep-learning-specialization',
    createdAt: new Date('2024-11-05'),
    updatedAt: new Date('2025-02-10')
  },
  '3': {
    id: '3',
    title: 'Natural Language Processing',
    description: 'Build and deploy NLP models for text analysis and generation. Learn about transformers, BERT, and GPT architectures.',
    longDescription: `
      This advanced course covers the latest techniques in Natural Language Processing (NLP) using deep learning. You'll learn how to build models for text classification, sentiment analysis, machine translation, and text generation.
      
      ## What you'll learn
      - Fundamental NLP concepts and techniques
      - Word embeddings and language models
      - Sequence models for NLP tasks
      - Transformer architectures including BERT and GPT
      - Building and deploying NLP applications
      
      ## Course content
      The course combines theoretical lectures with practical coding exercises and projects. You'll implement state-of-the-art NLP models and apply them to real-world problems.
      
      ## Prerequisites
      - Strong programming skills in Python
      - Experience with deep learning frameworks (PyTorch or TensorFlow)
      - Understanding of machine learning fundamentals
    `,
    platform: 'edX',
    instructor: 'Dr. Emily Zhang',
    duration: '12 weeks',
    rating: 4.7,
    reviewCount: 956,
    tags: ['NLP', 'Transformers', 'Advanced'],
    difficulty: 'Expert',
    price: '$199',
    imageUrl: 'https://via.placeholder.com/800x400?text=NLP',
    syllabus: [
      'Introduction to NLP',
      'Text Preprocessing and Feature Extraction',
      'Language Modeling',
      'Word Embeddings',
      'Sequence Models for NLP',
      'Attention Mechanisms',
      'Transformer Architectures',
      'BERT and Contextual Embeddings',
      'GPT and Text Generation',
      'NLP Applications and Deployment'
    ],
    enrollmentLink: 'https://edx.org/learn/nlp',
    createdAt: new Date('2024-12-20'),
    updatedAt: new Date('2025-03-15')
  },
  '4': {
    id: '4',
    title: 'Computer Vision with TensorFlow',
    description: 'Learn to build and train computer vision models using TensorFlow and Keras. Implement object detection and image classification.',
    longDescription: `
      This course will teach you how to build computer vision applications using TensorFlow and Keras. You'll learn to create models for image classification, object detection, and image segmentation.
      
      ## What you'll learn
      - Fundamentals of computer vision
      - Building and training convolutional neural networks (CNNs)
      - Transfer learning with pre-trained models
      - Object detection and localization
      - Image segmentation techniques
      
      ## Course content
      Through a series of hands-on projects, you'll gain practical experience in developing computer vision applications. The course includes coding exercises, quizzes, and a final project.
      
      ## Prerequisites
      - Python programming experience
      - Basic understanding of neural networks
      - Familiarity with TensorFlow or Keras is helpful but not required
    `,
    platform: 'Coursera',
    instructor: 'Dr. Robert Lee',
    duration: '10 weeks',
    rating: 4.5,
    reviewCount: 1823,
    tags: ['Computer Vision', 'TensorFlow', 'Intermediate'],
    difficulty: 'Intermediate',
    price: 'Free (Certificate: $49)',
    imageUrl: 'https://via.placeholder.com/800x400?text=Computer+Vision',
    syllabus: [
      'Introduction to Computer Vision',
      'TensorFlow and Keras Basics',
      'Convolutional Neural Networks',
      'Image Classification',
      'Transfer Learning',
      'Object Detection',
      'Image Segmentation',
      'Advanced CNN Architectures',
      'Deployment of Computer Vision Models',
      'Final Project'
    ],
    enrollmentLink: 'https://coursera.org/learn/computer-vision-tensorflow',
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-03-10')
  },
  '5': {
    id: '5',
    title: 'Reinforcement Learning Fundamentals',
    description: 'Understand the principles of reinforcement learning and implement algorithms like Q-learning and policy gradients.',
    longDescription: `
      This course provides a comprehensive introduction to reinforcement learning, covering both the theoretical foundations and practical implementations of key algorithms.
      
      ## What you'll learn
      - Fundamentals of reinforcement learning
      - Markov decision processes
      - Dynamic programming methods
      - Monte Carlo methods
      - Temporal-difference learning
      - Function approximation
      - Policy gradient methods
      - Deep reinforcement learning
      
      ## Course content
      The course combines theoretical lectures with programming assignments. You'll implement various reinforcement learning algorithms and apply them to classic control problems and games.
      
      ## Prerequisites
      - Strong programming skills in Python
      - Understanding of probability and statistics
      - Familiarity with machine learning concepts
    `,
    platform: 'Udacity',
    instructor: 'Prof. David Wilson',
    duration: '14 weeks',
    rating: 4.4,
    reviewCount: 756,
    tags: ['Reinforcement Learning', 'Python', 'Advanced'],
    difficulty: 'Expert',
    price: '$399',
    imageUrl: 'https://via.placeholder.com/800x400?text=Reinforcement+Learning',
    syllabus: [
      'Introduction to Reinforcement Learning',
      'Markov Decision Processes',
      'Dynamic Programming',
      'Monte Carlo Methods',
      'Temporal-Difference Learning',
      'Q-Learning and SARSA',
      'Function Approximation',
      'Policy Gradient Methods',
      'Deep Q-Networks',
      'Advanced Topics in RL'
    ],
    enrollmentLink: 'https://udacity.com/course/reinforcement-learning',
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2025-02-20')
  },
  '6': {
    id: '6',
    title: 'AI Ethics and Responsible AI',
    description: 'Explore the ethical considerations in AI development and learn to build responsible AI systems.',
    longDescription: `
      This course examines the ethical implications of artificial intelligence and provides frameworks for developing responsible AI systems. You'll explore case studies, engage in discussions, and learn practical approaches to addressing ethical challenges in AI.
      
      ## What you'll learn
      - Ethical frameworks for AI development
      - Fairness, accountability, and transparency in AI
      - Bias detection and mitigation
      - Privacy considerations in AI systems
      - Responsible AI development practices
      
      ## Course content
      The course includes lectures, case studies, discussions, and projects that explore the ethical dimensions of AI. You'll analyze real-world examples and develop strategies for addressing ethical challenges.
      
      ## Prerequisites
      - Basic understanding of AI and machine learning concepts
      - No programming experience required
    `,
    platform: 'edX',
    instructor: 'Dr. Maria Rodriguez',
    duration: '6 weeks',
    rating: 4.9,
    reviewCount: 432,
    tags: ['AI Ethics', 'Responsible AI', 'Beginner'],
    difficulty: 'Beginner',
    price: 'Free (Certificate: $99)',
    imageUrl: 'https://via.placeholder.com/800x400?text=AI+Ethics',
    syllabus: [
      'Introduction to AI Ethics',
      'Ethical Frameworks for AI',
      'Fairness and Bias in AI',
      'Transparency and Explainability',
      'Privacy and Data Protection',
      'Responsible AI Development',
      'Case Studies in AI Ethics',
      'Future of Ethical AI'
    ],
    enrollmentLink: 'https://edx.org/course/ai-ethics',
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-03-25')
  }
};

// Function to get all courses
export const getAllCourses = (): Course[] => {
  return Object.values(coursesData);
};

// Function to get a course by ID
export const getCourseById = (id: string): Course | undefined => {
  return coursesData[id];
};

// Function to search courses
export const searchCourses = (query: string): Course[] => {
  const lowerCaseQuery = query.toLowerCase();
  return Object.values(coursesData).filter(course => 
    course.title.toLowerCase().includes(lowerCaseQuery) ||
    course.description.toLowerCase().includes(lowerCaseQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};

// Function to filter courses
export type CourseFilters = {
  tags?: string[];
  difficulty?: ('Beginner' | 'Intermediate' | 'Expert')[];
  platform?: string[];
  minRating?: number;
  price?: ('free' | 'paid')[];
};

export const filterCourses = (courses: Course[], filters: CourseFilters): Course[] => {
  return courses.filter(course => {
    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      if (!course.tags.some(tag => filters.tags!.includes(tag))) {
        return false;
      }
    }
    
    // Filter by difficulty
    if (filters.difficulty && filters.difficulty.length > 0) {
      if (!filters.difficulty.includes(course.difficulty)) {
        return false;
      }
    }
    
    // Filter by platform
    if (filters.platform && filters.platform.length > 0) {
      if (!filters.platform.includes(course.platform)) {
        return false;
      }
    }
    
    // Filter by rating
    if (filters.minRating !== undefined) {
      if (course.rating < filters.minRating) {
        return false;
      }
    }
    
    // Filter by price
    if (filters.price && filters.price.length > 0) {
      const isFree = course.price.toLowerCase().includes('free');
      if (filters.price.includes('free') && !isFree) {
        return false;
      }
      if (filters.price.includes('paid') && isFree) {
        return false;
      }
    }
    
    return true;
  });
};

// Function to sort courses
export type SortOption = 'popularity' | 'newest' | 'rating';

export const sortCourses = (courses: Course[], sortBy: SortOption): Course[] => {
  return [...courses].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      return b.createdAt.getTime() - a.createdAt.getTime();
    } else { // popularity (default)
      // In a real app, we would have a popularity metric
      // Here we're using a combination of rating and review count as a proxy
      return (b.rating * Math.log(b.reviewCount)) - (a.rating * Math.log(a.reviewCount));
    }
  });
};

// Function to get recommended courses based on user profile
export type UserProfile = {
  background?: string;
  interests?: string[];
  experience?: 'Beginner' | 'Intermediate' | 'Expert';
  goals?: string;
};

export const getRecommendedCourses = (profile: UserProfile): Course[] => {
  let filteredCourses = getAllCourses();
  
  // Filter by experience level
  if (profile.experience) {
    filteredCourses = filteredCourses.filter(course => course.difficulty === profile.experience);
  }
  
  // Filter by interests
  if (profile.interests && profile.interests.length > 0) {
    filteredCourses = filteredCourses.filter(course => 
      course.tags.some(tag => 
        profile.interests!.some(interest => 
          tag.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );
  }
  
  // If no matches, return all courses
  if (filteredCourses.length === 0) {
    filteredCourses = getAllCourses();
  }
  
  // Sort by rating
  filteredCourses = sortCourses(filteredCourses, 'rating');
  
  // Return top 3 recommendations
  return filteredCourses.slice(0, 3);
};
