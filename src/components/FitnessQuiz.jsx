
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { ArrowDown } from 'lucide-react';

const FitnessQuiz = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    age: [25],
    gender: '',
    fitnessGoal: '',
    fitnessLevel: '',
    equipment: '',
    timeAvailability: [30],
    medicalConditions: ''
  });

  const steps = [
    {
      title: "What's your age?",
      key: 'age',
      type: 'slider',
      min: 16,
      max: 80,
      step: 1,
      unit: 'years'
    },
    {
      title: "What's your gender?",
      key: 'gender',
      type: 'choice',
      options: ['Male', 'Female', 'Other', 'Prefer not to say']
    },
    {
      title: "What's your primary fitness goal?",
      key: 'fitnessGoal',
      type: 'choice',
      options: ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'General Fitness', 'Strength Training']
    },
    {
      title: "What's your current fitness level?",
      key: 'fitnessLevel',
      type: 'choice',
      options: ['Beginner', 'Intermediate', 'Advanced']
    },
    {
      title: "What equipment do you have access to?",
      key: 'equipment',
      type: 'choice',
      options: ['No Equipment', 'Dumbbells', 'Resistance Bands', 'Full Gym', 'Home Gym Setup']
    },
    {
      title: "How much time can you dedicate per workout?",
      key: 'timeAvailability',
      type: 'slider',
      min: 15,
      max: 120,
      step: 15,
      unit: 'minutes'
    },
    {
      title: "Any medical conditions or injuries?",
      key: 'medicalConditions',
      type: 'choice',
      options: ['None', 'Back Problems', 'Knee Issues', 'Heart Condition', 'Other (please consult doctor)']
    }
  ];

  const currentStepData = steps[currentStep];

  const handleSliderChange = (value) => {
    setFormData({ ...formData, [currentStepData.key]: value });
  };

  const handleChoiceSelect = (option) => {
    setFormData({ ...formData, [currentStepData.key]: option });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    const value = formData[currentStepData.key];
    if (currentStepData.type === 'slider') {
      return value && value.length > 0;
    }
    return value && value.length > 0;
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="gradient-card p-8 rounded-3xl border-0 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            {currentStepData.title}
          </h2>

          {currentStepData.type === 'slider' && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {formData[currentStepData.key]?.[0] || currentStepData.min}
                </div>
                <div className="text-gray-400 text-lg">{currentStepData.unit}</div>
              </div>
              
              <div className="px-4">
                <Slider
                  value={formData[currentStepData.key] || [currentStepData.min]}
                  onValueChange={handleSliderChange}
                  min={currentStepData.min}
                  max={currentStepData.max}
                  step={currentStepData.step}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>{currentStepData.min}</span>
                  <span>{currentStepData.max}</span>
                </div>
              </div>
            </div>
          )}

          {currentStepData.type === 'choice' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStepData.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleChoiceSelect(option)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                    formData[currentStepData.key] === option
                      ? 'gradient-button border-purple-500 text-white'
                      : 'glass-effect border-gray-600 text-gray-300 hover:border-purple-500'
                  }`}
                >
                  <div className="font-semibold">{option}</div>
                </button>
              ))}
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            className="glass-effect border-gray-600 text-gray-300 hover:border-purple-500 px-6 py-3 rounded-xl"
          >
            Previous
          </Button>

          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className="gradient-button px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            {currentStep === steps.length - 1 ? 'Generate Plan' : 'Next'}
            <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FitnessQuiz;
