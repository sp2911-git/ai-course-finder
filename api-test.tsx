import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAllCourses, getCourseById, searchCourses, filterCourses, sortCourses } from '../utils/courseApi';
import { getAllBlogPosts, getBlogPostById, searchBlogPosts, getRelatedBlogPosts } from '../utils/blogApi';
import { addNewsletterSubscriber } from '../utils/newsletterApi';
import { createUserSession, addMessageToSession, updateSessionRecommendations } from '../utils/chatApi';

// This file is used to test the API functionality

export default function ApiTest() {
  const router = useRouter();
  
  useEffect(() => {
    // Only run tests on client-side
    if (typeof window === 'undefined') return;
    
    console.log('Running API tests...');
    
    // Test course API
    testCourseApi();
    
    // Test blog API
    testBlogApi();
    
    // Test newsletter API
    testNewsletterApi();
    
    // Test chat API
    testChatApi();
    
    console.log('All API tests completed!');
  }, []);
  
  const testCourseApi = () => {
    console.log('Testing Course API...');
    
    // Test getAllCourses
    const allCourses = getAllCourses();
    console.log(`Retrieved ${allCourses.length} courses`);
    
    // Test getCourseById
    const course = getCourseById('1');
    console.log('Retrieved course by ID:', course?.title);
    
    // Test searchCourses
    const searchResults = searchCourses('machine learning');
    console.log(`Search returned ${searchResults.length} results`);
    
    // Test filterCourses
    const filteredCourses = filterCourses(allCourses, {
      difficulty: ['Beginner'],
      minRating: 4.5
    });
    console.log(`Filtered to ${filteredCourses.length} beginner courses with rating >= 4.5`);
    
    // Test sortCourses
    const sortedCourses = sortCourses(allCourses, 'rating');
    console.log('Sorted courses by rating, top course:', sortedCourses[0]?.title);
    
    console.log('Course API tests passed!');
  };
  
  const testBlogApi = () => {
    console.log('Testing Blog API...');
    
    // Test getAllBlogPosts
    const allPosts = getAllBlogPosts();
    console.log(`Retrieved ${allPosts.length} blog posts`);
    
    // Test getBlogPostById
    const post = getBlogPostById('1');
    console.log('Retrieved blog post by ID:', post?.title);
    
    // Test searchBlogPosts
    const searchResults = searchBlogPosts('education');
    console.log(`Search returned ${searchResults.length} results`);
    
    // Test getRelatedBlogPosts
    const relatedPosts = getRelatedBlogPosts('1', 2);
    console.log(`Retrieved ${relatedPosts.length} related posts`);
    
    console.log('Blog API tests passed!');
  };
  
  const testNewsletterApi = () => {
    console.log('Testing Newsletter API...');
    
    // Test addNewsletterSubscriber
    const subscriber = addNewsletterSubscriber(
      'test@example.com',
      'Test User',
      ['Machine Learning', 'Deep Learning']
    );
    console.log('Added newsletter subscriber:', subscriber.email);
    
    console.log('Newsletter API tests passed!');
  };
  
  const testChatApi = () => {
    console.log('Testing Chat API...');
    
    // Test createUserSession
    const session = createUserSession('user123');
    console.log('Created user session:', session.id);
    
    // Test addMessageToSession
    const userMessage = addMessageToSession(session.id, 'Hello, I want to learn machine learning', 'user');
    console.log('Added user message:', userMessage?.text);
    
    const botMessage = addMessageToSession(session.id, 'I can help you find machine learning courses!', 'bot');
    console.log('Added bot message:', botMessage?.text);
    
    // Test updateSessionRecommendations
    const recommendations = updateSessionRecommendations(session.id, {
      experience: 'Beginner',
      interests: ['Machine Learning', 'Python']
    });
    console.log(`Updated session with ${recommendations.length} recommendations`);
    
    console.log('Chat API tests passed!');
  };
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">API Testing</h1>
      <p>Check the console for test results.</p>
      <button 
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-primary-600 text-white rounded"
      >
        Return to Homepage
      </button>
    </div>
  );
}
