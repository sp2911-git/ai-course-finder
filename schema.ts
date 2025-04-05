// This file contains the database schema for the AI Course Finder application
// In a real application, this would be implemented using an ORM like Prisma or Sequelize

// Course model
export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  platform: string;
  instructor: string;
  duration: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  price: string;
  imageUrl: string;
  syllabus: string[];
  enrollmentLink: string;
  createdAt: Date;
  updatedAt: Date;
}

// User model
export interface User {
  id: string;
  email: string;
  name?: string;
  profilePicture?: string;
  background?: string;
  interests?: string[];
  experience?: string;
  goals?: string;
  favoriteCourses: string[]; // Array of course IDs
  createdAt: Date;
  updatedAt: Date;
}

// Blog Post model
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

// Newsletter Subscriber model
export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  interests?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Platform model
export interface Platform {
  id: string;
  name: string;
  website: string;
  logoUrl: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tag model
export interface Tag {
  id: string;
  name: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// Review model
export interface Review {
  id: string;
  courseId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

// ChatMessage model
export interface ChatMessage {
  id: string;
  userId: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// UserSession model
export interface UserSession {
  id: string;
  userId: string;
  chatMessages: ChatMessage[];
  recommendations: string[]; // Array of course IDs
  createdAt: Date;
  updatedAt: Date;
}
