
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="gradient-button p-2 rounded-xl">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FitExpert
            </h1>
            <p className="text-sm text-gray-400">Personal Fitness Coach</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
