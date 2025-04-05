import React from 'react';

type NewsletterSignupProps = {
  title?: string;
  description?: string;
  onSubscribe?: (email: string) => void;
};

export default function NewsletterSignup({
  title = "Stay Updated with New AI Courses",
  description = "Subscribe to our newsletter to receive personalized course recommendations and updates.",
  onSubscribe = () => {}
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail('');
  };

  return (
    <div className="bg-primary-50 p-8 rounded-lg border border-primary-200">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            required
            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
