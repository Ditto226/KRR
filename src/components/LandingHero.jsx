
import { ArrowDown, Running, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingHero = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="gradient-card p-4 rounded-2xl animate-bounce">
            <Running className="h-8 w-8 text-purple-400" />
          </div>
          <div className="gradient-card p-4 rounded-2xl animate-bounce delay-100">
            <Heart className="h-8 w-8 text-pink-400" />
          </div>
          <div className="gradient-card p-4 rounded-2xl animate-bounce delay-200">
            <Calendar className="h-8 w-8 text-purple-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Expert Fitness
          </span>
          <br />
          <span className="text-white">System</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Get personalized fitness plans tailored to your goals, lifestyle, and experience level.
          <br />
          <span className="text-purple-400">Your AI-powered personal trainer awaits.</span>
        </p>
        
        <div className="space-y-4 mb-12">
          <Button 
            onClick={onStartQuiz}
            className="gradient-button text-white text-lg px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Start Your Fitness Journey
          </Button>
          
          <div className="flex flex-col items-center text-gray-400">
            <p className="mb-2">Takes 2 minutes • Get instant results</p>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="gradient-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">Personal</div>
            <p className="text-gray-300">Customized workout plans based on your unique profile</p>
          </div>
          
          <div className="gradient-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-pink-400 mb-2">Smart</div>
            <p className="text-gray-300">AI-powered recommendations for optimal results</p>
          </div>
          
          <div className="gradient-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">Flexible</div>
            <p className="text-gray-300">Adapts to your equipment, time, and fitness level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
