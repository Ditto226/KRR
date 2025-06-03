import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, Heart, ArrowUp, Download } from 'lucide-react';

const FitnessPlan = ({ userData, onRestart }) => {
  const generatePlan = (data) => {
    const age = data.age[0];
    const goal = data.fitnessGoal;
    const level = data.fitnessLevel;
    const equipment = data.equipment;
    const time = data.timeAvailability[0];
    
    let workoutPlan = {};
    let nutritionAdvice = {};
    let lifestyleTips = {};

    // Generate workout plan based on goal and level
    if (goal === 'Lose Weight') {
      workoutPlan = {
        frequency: level === 'Beginner' ? '3-4 times/week' : level === 'Intermediate' ? '4-5 times/week' : '5-6 times/week',
        focus: 'Cardio + Strength Training',
        workouts: [
          `${time}min HIIT Cardio (3x/week)`,
          `${Math.round(time * 0.8)}min Full-Body Strength (2x/week)`,
          '30min Active Recovery (1x/week)'
        ]
      };
      nutritionAdvice = {
        calories: 'Moderate caloric deficit (300-500 calories below maintenance)',
        macros: 'Protein: 30% | Carbs: 35% | Fat: 35%',
        suggestions: ['Lean proteins', 'Complex carbohydrates', 'Healthy fats', 'Plenty of vegetables']
      };
    } else if (goal === 'Build Muscle') {
      workoutPlan = {
        frequency: level === 'Beginner' ? '3-4 times/week' : level === 'Intermediate' ? '4-5 times/week' : '5-6 times/week',
        focus: 'Progressive Strength Training',
        workouts: [
          `${time}min Upper Body Strength (2x/week)`,
          `${time}min Lower Body Strength (2x/week)`,
          `${Math.round(time * 0.7)}min Core & Accessory (1x/week)`
        ]
      };
      nutritionAdvice = {
        calories: 'Slight caloric surplus (200-300 calories above maintenance)',
        macros: 'Protein: 35% | Carbs: 40% | Fat: 25%',
        suggestions: ['High-quality proteins', 'Complex carbs pre/post workout', 'Creatine supplementation', 'Post-workout nutrition']
      };
    } else if (goal === 'Improve Endurance') {
      workoutPlan = {
        frequency: level === 'Beginner' ? '4-5 times/week' : level === 'Intermediate' ? '5-6 times/week' : '6-7 times/week',
        focus: 'Cardiovascular Training',
        workouts: [
          `${time}min Steady-State Cardio (3x/week)`,
          `${Math.round(time * 0.7)}min HIIT Training (2x/week)`,
          `${Math.round(time * 0.8)}min Strength Training (2x/week)`
        ]
      };
      nutritionAdvice = {
        calories: 'Maintenance calories with workout fuel',
        macros: 'Protein: 25% | Carbs: 50% | Fat: 25%',
        suggestions: ['Carb-rich pre-workout meals', 'Electrolyte balance', 'Recovery nutrition', 'Adequate hydration']
      };
    } else {
      workoutPlan = {
        frequency: '4-5 times/week',
        focus: 'Balanced Fitness',
        workouts: [
          `${time}min Full-Body Workout (3x/week)`,
          `${Math.round(time * 0.8)}min Cardio (2x/week)`,
          '20min Flexibility/Yoga (2x/week)'
        ]
      };
      nutritionAdvice = {
        calories: 'Maintenance calories',
        macros: 'Protein: 30% | Carbs: 40% | Fat: 30%',
        suggestions: ['Balanced meals', 'Variety of nutrients', 'Regular meal timing', 'Stay hydrated']
      };
    }

    lifestyleTips = {
      sleep: age < 30 ? '7-9 hours per night' : age < 50 ? '7-8 hours per night' : '7-8 hours per night',
      hydration: 'Half your body weight in ounces of water daily',
      recovery: level === 'Advanced' ? '1-2 rest days per week' : '2-3 rest days per week',
      stress: 'Meditation, deep breathing, or yoga for stress management'
    };

    return { workoutPlan, nutritionAdvice, lifestyleTips };
  };

  const plan = generatePlan(userData);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="gradient-button p-3 rounded-2xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Personal Fitness Plan
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Customized for your goals, level, and lifestyle
          </p>
          
          {/* User Profile Summary */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Age: {userData.age[0]}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Goal: {userData.fitnessGoal}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Level: {userData.fitnessLevel}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Time: {userData.timeAvailability[0]} min
            </div>
          </div>
        </div>

        {/* Plan Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Workout Plan */}
          <Card className="gradient-card p-8 rounded-3xl border-0 h-fit">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-600 p-3 rounded-xl">
                <ArrowUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Workout Plan</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Frequency</h3>
                <p className="text-gray-300">{plan.workoutPlan.frequency}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Focus Area</h3>
                <p className="text-gray-300">{plan.workoutPlan.focus}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Weekly Schedule</h3>
                <div className="space-y-3">
                  {plan.workoutPlan.workouts.map((workout, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 glass-effect rounded-xl">
                      <Calendar className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{workout}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Nutrition Advice */}
          <Card className="gradient-card p-8 rounded-3xl border-0 h-fit">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-pink-600 p-3 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Nutrition Guide</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Caloric Intake</h3>
                <p className="text-gray-300 text-sm">{plan.nutritionAdvice.calories}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Macro Distribution</h3>
                <p className="text-gray-300 text-sm">{plan.nutritionAdvice.macros}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-3">Key Foods</h3>
                <div className="space-y-2">
                  {plan.nutritionAdvice.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 glass-effect rounded-lg">
                      <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Lifestyle Tips */}
          <Card className="gradient-card p-8 rounded-3xl border-0 h-fit">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-600 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Lifestyle Tips</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Sleep Target</h3>
                <p className="text-gray-300 text-sm">{plan.lifestyleTips.sleep}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Hydration</h3>
                <p className="text-gray-300 text-sm">{plan.lifestyleTips.hydration}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Recovery</h3>
                <p className="text-gray-300 text-sm">{plan.lifestyleTips.recovery}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Stress Management</h3>
                <p className="text-gray-300 text-sm">{plan.lifestyleTips.stress}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button className="gradient-button px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Download Plan (PDF)</span>
          </Button>
          
          <Button 
            onClick={onRestart}
            
            className="glass-effect border-gray-600 text-gray-300 hover:border-purple-500 px-8 py-4 rounded-2xl font-semibold"
          >
            Create New Plan
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            * This plan is generated based on your inputs. Always consult with a healthcare professional before starting any new fitness program, especially if you have medical conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlan;
