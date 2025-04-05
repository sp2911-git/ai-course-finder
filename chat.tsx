import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import CourseCard, { CourseCardProps } from '../components/CourseCard';

// Mock data for course recommendations
const allCourses: CourseCardProps[] = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning algorithms and applications.',
    platform: 'Coursera',
    rating: 4.8,
    tags: ['Machine Learning', 'Beginner', 'Python'],
    difficulty: 'Beginner',
    imageUrl: 'https://via.placeholder.com/300x200?text=Machine+Learning'
  },
  {
    id: '2',
    title: 'Deep Learning Specialization',
    description: 'Master deep learning techniques with practical projects.',
    platform: 'Udemy',
    rating: 4.6,
    tags: ['Deep Learning', 'Neural Networks', 'Intermediate'],
    difficulty: 'Intermediate',
    imageUrl: 'https://via.placeholder.com/300x200?text=Deep+Learning'
  },
  {
    id: '3',
    title: 'Natural Language Processing',
    description: 'Build and deploy NLP models for text analysis and generation.',
    platform: 'edX',
    rating: 4.7,
    tags: ['NLP', 'Transformers', 'Advanced'],
    difficulty: 'Expert',
    imageUrl: 'https://via.placeholder.com/300x200?text=NLP'
  },
  {
    id: '4',
    title: 'Computer Vision with TensorFlow',
    description: 'Learn to build and train computer vision models using TensorFlow and Keras.',
    platform: 'Coursera',
    rating: 4.5,
    tags: ['Computer Vision', 'TensorFlow', 'Intermediate'],
    difficulty: 'Intermediate',
    imageUrl: 'https://via.placeholder.com/300x200?text=Computer+Vision'
  },
  {
    id: '5',
    title: 'Reinforcement Learning Fundamentals',
    description: 'Understand the principles of reinforcement learning and implement algorithms.',
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

// Define message types
type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Define user profile type
type UserProfile = {
  background: string;
  interests: string[];
  experience: string;
  goals: string;
};

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI course assistant. I can help you find the perfect AI courses based on your background and learning goals. What are you interested in learning?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<CourseCardProps[]>([]);
  const [conversationStage, setConversationStage] = useState<'intro' | 'background' | 'interests' | 'experience' | 'goals' | 'recommendations'>('intro');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Process user input based on conversation stage
    setTimeout(() => {
      processUserInput(userMessage.text);
      setIsTyping(false);
    }, 1000);
  };

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, botMessage]);
  };

  const processUserInput = (input: string) => {
    switch (conversationStage) {
      case 'intro':
        addBotMessage("Great! To help you find the best courses, I'd like to know a bit about your background. What's your current level of experience with AI or programming?");
        setConversationStage('background');
        break;
        
      case 'background':
        setUserProfile(prev => ({ ...prev, background: input } as UserProfile));
        addBotMessage("Thanks for sharing! What specific AI topics are you most interested in? For example: machine learning, computer vision, NLP, reinforcement learning, etc.");
        setConversationStage('interests');
        break;
        
      case 'interests':
        const interests = input.split(',').map(i => i.trim());
        setUserProfile(prev => ({ ...prev, interests } as UserProfile));
        addBotMessage("Excellent choices! How would you describe your experience level? (Beginner, Intermediate, or Expert)");
        setConversationStage('experience');
        break;
        
      case 'experience':
        setUserProfile(prev => ({ ...prev, experience: input } as UserProfile));
        addBotMessage("Almost done! What are your learning goals? Are you looking to build practical skills, understand theoretical concepts, or prepare for a specific career?");
        setConversationStage('goals');
        break;
        
      case 'goals':
        setUserProfile(prev => ({ ...prev, goals: input } as UserProfile));
        
        // Generate recommendations based on user profile
        setTimeout(() => {
          generateRecommendations();
          setConversationStage('recommendations');
        }, 1000);
        
        addBotMessage("Thanks for all this information! I'm analyzing your profile to find the best courses for you. This will just take a moment...");
        break;
        
      case 'recommendations':
        // Handle follow-up questions after recommendations
        if (input.toLowerCase().includes('thank')) {
          addBotMessage("You're welcome! Feel free to ask if you need more recommendations or have questions about specific courses.");
        } else if (input.toLowerCase().includes('more')) {
          addBotMessage("I'd be happy to provide more recommendations. Could you tell me more specifically what you're looking for?");
          setConversationStage('intro');
        } else {
          addBotMessage("Is there anything specific about these courses you'd like to know more about? Or would you like different recommendations?");
        }
        break;
    }
  };

  const generateRecommendations = () => {
    if (!userProfile) return;
    
    // In a real app, this would use a more sophisticated algorithm
    // and would call an API to get personalized recommendations
    
    // Simple filtering based on user profile
    let filteredCourses = [...allCourses];
    
    // Filter by experience level
    if (userProfile.experience.toLowerCase().includes('beginner')) {
      filteredCourses = filteredCourses.filter(course => course.difficulty === 'Beginner');
    } else if (userProfile.experience.toLowerCase().includes('intermediate')) {
      filteredCourses = filteredCourses.filter(course => course.difficulty === 'Intermediate');
    } else if (userProfile.experience.toLowerCase().includes('expert')) {
      filteredCourses = filteredCourses.filter(course => course.difficulty === 'Expert');
    }
    
    // Filter by interests
    if (userProfile.interests.length > 0) {
      filteredCourses = filteredCourses.filter(course => 
        course.tags.some(tag => 
          userProfile.interests.some(interest => 
            tag.toLowerCase().includes(interest.toLowerCase())
          )
        )
      );
    }
    
    // If no matches, return all courses
    if (filteredCourses.length === 0) {
      filteredCourses = allCourses;
    }
    
    // Limit to 3 recommendations
    const topRecommendations = filteredCourses.slice(0, 3);
    setRecommendations(topRecommendations);
    
    addBotMessage(`Based on your profile, I've found ${topRecommendations.length} courses that match your interests and experience level. Take a look at these recommendations below!`);
  };

  return (
    <MainLayout title="AI Course Recommendation Chat - AI Course Finder">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI Course Recommendation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-primary-600 text-white">
                <h2 className="text-xl font-semibold">Chat with AI Assistant</h2>
                <p className="text-sm opacity-80">Get personalized course recommendations</p>
              </div>
              
              {/* Chat messages */}
              <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 ${
                      message.sender === 'user' ? 'text-right' : ''
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary-600 text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                    <div
                      className={`text-xs mt-1 text-gray-500 ${
                        message.sender === 'user' ? 'text-right' : ''
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="mb-4">
                    <div className="inline-block p-3 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Chat input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-lg"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              
              {userProfile ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">Background</h3>
                    <p className="text-gray-600">{userProfile.background}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Interests</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {userProfile.interests.map((interest, index) => (
                        <span key={index} className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Experience Level</h3>
                    <p className="text-gray-600">{userProfile.experience}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Learning Goals</h3>
                    <p className="text-gray-600">{userProfile.goals}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">
                  Chat with our AI assistant to build your profile and get personalized course recommendations.
                </p>
              )}
            </div>
            
            {recommendations.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
                <div className="space-y-4">
                  {recommendations.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
