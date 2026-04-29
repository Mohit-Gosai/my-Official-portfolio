import { motion } from 'framer-motion';

const ProjectSkeleton = () => {
  return (
    <div className="bg-gray-950 border border-gray-900 rounded-xl overflow-hidden p-0 h-full">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-900 relative overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent"
        />
      </div>

      <div className="p-8 space-y-4">
        {/* Type Skeleton */}
        <div className="h-2 w-16 bg-gray-900 rounded"></div>
        
        {/* Title Skeleton */}
        <div className="h-6 w-3/4 bg-gray-900 rounded"></div>
        
        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-900 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-900 rounded"></div>
        </div>

        {/* Tech Stack Skeleton */}
        <div className="flex gap-2 pt-4">
          <div className="h-5 w-12 bg-gray-900 rounded-sm"></div>
          <div className="h-5 w-12 bg-gray-900 rounded-sm"></div>
          <div className="h-5 w-12 bg-gray-900 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;