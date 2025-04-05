import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/MainLayout';

// Mock course data (in a real app, this would come from an API)
const coursesData = {
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
    enrollmentLink: 'https://coursera.org/learn/machine-learning'
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
    enrollmentLink: 'https://udemy.com/course/deep-learning-specialization'
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
    enrollmentLink: 'https://edx.org/learn/nlp'
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
    enrollmentLink: 'https://coursera.org/learn/computer-vision-tensorflow'
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
    enrollmentLink: 'https://udacity.com/course/reinforcement-learning'
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
    enrollmentLink: 'https://edx.org/course/ai-ethics'
  }
};

export default function CourseDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [isFavorite, setIsFavorite] = useState(false);
  
  // In a real app, we would fetch the course data from an API
  const course = id && coursesData[id as string];
  
  if (!course) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Course not found</h1>
          <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/courses" className="btn-primary">
            Browse Courses
          </Link>
        </div>
      </MainLayout>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, we would save this to the user's profile
  };

  return (
    <MainLayout title={`${course.title} - AI Course Finder`}>
      <div className="container mx-auto px-4 py-8">
        {/* Course header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded mr-2">
                    {course.platform}
                  </span>
                  <span className="bg-secondary-100 text-secondary-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {course.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-700">{course.rating.toFixed(1)}</span>
                    <span className="ml-1 text-gray-500">({course.reviewCount} reviews)</span>
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">Instructor:</span> {course.instructor}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-8 flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg text-center mb-4 w-full">
                  <div className="text-2xl font-bold text-primary-700 mb-2">{course.price}</div>
                  <div className="text-gray-600 mb-4">Duration: {course.duration}</div>
                  <a 
                    href={course.enrollmentLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full mb-2"
                  >
                    Enroll Now
                  </a>
                  <button 
                    onClick={toggleFavorite}
                    className={`w-full py-2 px-4 rounded-lg border flex items-center justify-center ${
                      isFavorite 
                        ? 'bg-secondary-50 text-secondary-700 border-secondary-300' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray
(Content truncated due to size limit. Use line ranges to read in chunks)