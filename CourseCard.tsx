import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  platform: string;
  rating: number;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  imageUrl?: string;
};

export default function CourseCard({
  id,
  title,
  description,
  platform,
  rating,
  tags,
  difficulty,
  imageUrl = 'https://via.placeholder.com/300x200?text=AI+Course'
}: CourseCardProps) {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-40 mb-4 rounded-t-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
          {difficulty}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary-600 font-medium mr-2">{platform}</span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        <Link href={`/courses/${id}`} className="btn-primary text-sm">
          View Details
        </Link>
      </div>
    </div>
  );
}
