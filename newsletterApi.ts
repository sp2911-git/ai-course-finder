import { NewsletterSubscriber } from '../utils/schema';

// Mock data for newsletter subscribers
const newsletterSubscribersData: Record<string, NewsletterSubscriber> = {};

// Function to add a new subscriber
export const addNewsletterSubscriber = (email: string, name?: string, interests?: string[]): NewsletterSubscriber => {
  // Check if email already exists
  const existingSubscriber = Object.values(newsletterSubscribersData).find(
    subscriber => subscriber.email.toLowerCase() === email.toLowerCase()
  );
  
  if (existingSubscriber) {
    // Update existing subscriber
    existingSubscriber.name = name || existingSubscriber.name;
    existingSubscriber.interests = interests || existingSubscriber.interests;
    existingSubscriber.updatedAt = new Date();
    return existingSubscriber;
  }
  
  // Create new subscriber
  const id = Date.now().toString();
  const newSubscriber: NewsletterSubscriber = {
    id,
    email,
    name,
    interests,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  newsletterSubscribersData[id] = newSubscriber;
  return newSubscriber;
};

// Function to get all subscribers
export const getAllNewsletterSubscribers = (): NewsletterSubscriber[] => {
  return Object.values(newsletterSubscribersData);
};

// Function to remove a subscriber
export const removeNewsletterSubscriber = (email: string): boolean => {
  const subscriber = Object.values(newsletterSubscribersData).find(
    subscriber => subscriber.email.toLowerCase() === email.toLowerCase()
  );
  
  if (subscriber) {
    delete newsletterSubscribersData[subscriber.id];
    return true;
  }
  
  return false;
};
