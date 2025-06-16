import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { ArrowDown, ArrowUp, CheckCircle2 } from 'lucide-react';

const FitnessQuiz = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    age: [25],
    gender: '',
    fitnessGoal: '',
    fitnessLevel: '',
    equipment: '',
    medicalConditions: '',
    timeAvailability: [30]
  });

  const steps = [
    {
      title: "What's your age?",
      description: "This helps us tailor exercises to your age group",
      key: 'age',
      type: 'slider',
      min: 18,
      max: 80,
      step: 1,
      unit: 'years',
      icon: '🎂'
    },
    {
      title: "What's your gender?",
      description: "This helps us create a personalized workout plan",
      key: 'gender',
      type: 'choice',
      options: ['Male', 'Female'],
      icon: '👤'
    },
    {
      title: "What's your primary fitness goal?",
      description: "Choose the main focus of your fitness journey",
      key: 'fitnessGoal',
      type: 'choice',
      options: ['Weight Loss', 'Muscle Gain', 'General Fitness'],
      icon: '🎯'
    },
    {
      title: "What's your current fitness level?",
      description: "Be honest - this helps us start at the right intensity",
      key: 'fitnessLevel',
      type: 'choice',
      options: ['Beginner', 'Intermediate', 'Advanced'],
      icon: '📈'
    },
    {
      title: "Do you have equipments available?",
      description: "We'll customize workouts based on your availability",
      key: 'equipment',
      type: 'choice',
      options: ['Yes', 'No'],
      icon: '🏋️'
    },
    {
      title: "Any medical conditions or injuries?",
      description: "This helps us ensure your safety during workouts",
      key: 'medicalConditions',
      type: 'choice',
      options: ['None', 'Obesity', 'Breathing Problems (Asthma)', 'Back Problems', 'Arthritis'],
      icon: '❤️'
    },
    {
      title: "How much time can you dedicate per workout?",
      description: "We'll create efficient workouts that fit your schedule",
      key: 'timeAvailability',
      type: 'slider',
      min: 15,
      max: 120,
      step: 15,
      unit: 'minutes',
      icon: '⏰'
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span className="font-medium">Question {currentStep + 1} of {steps.length}</span>
            <span className="font-medium">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-gradient-to-br from-slate-800 to-gray-900 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 mb-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">{steps[currentStep].icon}</div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {currentStepData.title}
              </h2>
              <p className="text-gray-400">{currentStepData.description}</p>
            </div>
          </div>

          {currentStepData.type === 'slider' && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
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
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                    formData[currentStepData.key] === option
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-blue-500 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`font-semibold text-lg ${
                      formData[currentStepData.key] === option ? 'text-white' : 'text-gray-300'
                    }`}>
                      {option}
                    </div>
                    {formData[currentStepData.key] === option && (
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    )}
                  </div>
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
            className={`px-6 py-3 rounded-xl gap-2 transition-all duration-300 ${
              currentStep === 0 
                ? 'bg-slate-800/50 text-gray-500 cursor-not-allowed' 
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-600 hover:border-blue-500'
            }`}
          >
            <ArrowUp className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 gap-2 ${
              !isStepComplete()
                ? 'bg-slate-800/50 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:scale-105'
            }`}
          >
            {currentStep === steps.length - 1 ? 'Generate Plan' : 'Next'}
            <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FitnessQuiz;
