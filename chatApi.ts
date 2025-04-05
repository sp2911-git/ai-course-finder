import { ChatMessage, UserSession } from '../utils/schema';
import { getRecommendedCourses, UserProfile } from './courseApi';

// Mock data for user sessions
const userSessionsData: Record<string, UserSession> = {};

// Function to create a new user session
export const createUserSession = (userId: string): UserSession => {
  const id = Date.now().toString();
  const newSession: UserSession = {
    id,
    userId,
    chatMessages: [],
    recommendations: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  userSessionsData[id] = newSession;
  return newSession;
};

// Function to get a user session by ID
export const getUserSession = (sessionId: string): UserSession | undefined => {
  return userSessionsData[sessionId];
};

// Function to add a message to a session
export const addMessageToSession = (
  sessionId: string, 
  text: string, 
  sender: 'user' | 'bot'
): ChatMessage | undefined => {
  const session = userSessionsData[sessionId];
  if (!session) return undefined;
  
  const newMessage: ChatMessage = {
    id: Date.now().toString(),
    userId: session.userId,
    text,
    sender,
    timestamp: new Date()
  };
  
  session.chatMessages.push(newMessage);
  session.updatedAt = new Date();
  
  return newMessage;
};

// Function to get all messages for a session
export const getSessionMessages = (sessionId: string): ChatMessage[] => {
  const session = userSessionsData[sessionId];
  if (!session) return [];
  
  return session.chatMessages;
};

// Function to update recommendations for a session based on user profile
export const updateSessionRecommendations = (sessionId: string, profile: UserProfile): string[] => {
  const session = userSessionsData[sessionId];
  if (!session) return [];
  
  const recommendedCourses = getRecommendedCourses(profile);
  session.recommendations = recommendedCourses.map(course => course.id);
  session.updatedAt = new Date();
  
  return session.recommendations;
};

// Function to get recommendations for a session
export const getSessionRecommendations = (sessionId: string): string[] => {
  const session = userSessionsData[sessionId];
  if (!session) return [];
  
  return session.recommendations;
};
