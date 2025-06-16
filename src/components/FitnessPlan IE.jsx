import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, Heart, ArrowUp, Download } from 'lucide-react';

// Inference Engine for Fitness Expert System
// base rules
const baseRules = [
  {
    // weight loss
    if: { goal: "Weight Loss", level: "Beginner", equipment: "No" },
    then: {
      fitness_plan: "Low-impact home cardio (e.g., brisk walk, step jacks) 3x/week",
      nutrition_advice: "Caloric deficit with high-protein meals and whole foods",
      lifestyle_tip: "Avoid sugary drinks, walk after meals, track progress weekly"
    }
  },
  {
    if: { goal: "Weight Loss", level: "Beginner", equipment: "Yes" },
    then: {
      fitness_plan: "Elliptical or treadmill cardio and light resistance 3x/week",
      nutrition_advice: "Control portions, hydrate often, include fiber-rich food",
      lifestyle_tip: "Use gym machines with supervision, avoid late-night snacks"
    }
  },
  {
    if: { goal: "Weight Loss", level: "Intermediate", equipment: "No" },
    then: {
      fitness_plan: "Bodyweight circuits (squats, lunges, mountain climbers) 4x/week",
      nutrition_advice: "Moderate carbs, higher protein, avoid processed foods",
      lifestyle_tip: "Add walk breaks during work, use fitness tracking apps"
    }
  },
  {
    if: { goal: "Weight Loss", level: "Intermediate", equipment: "Yes" },
    then: {
      fitness_plan: "Weight-based circuits with treadmill or rowing cardio 4x/week",
      nutrition_advice: "Eat lean protein, avoid excess fats, keep a food journal",
      lifestyle_tip: "Try group classes, weigh yourself once a week"
    }
  },
  {
    if: { goal: "Weight Loss", level: "Advanced", equipment: "No" },
    then: {
      fitness_plan: "HIIT bodyweight training 5x/week (e.g., burpees, jump squats)",
      nutrition_advice: "Meal prep with portion control, focus on lean proteins",
      lifestyle_tip: "Track calories, set weekly goals, integrate rest days"
    }
  },
  {
    if: { goal: "Weight Loss", level: "Advanced", equipment: "Yes" },
    then: {
      fitness_plan: "HIIT with kettlebells/treadmill + resistance training 5x/week",
      nutrition_advice: "High-protein, complex carbs, minimize added sugar",
      lifestyle_tip: "Monitor progress with photos or body scans"
    }
  },
  // muscle gain
  {
    if: { goal: "Muscle Gain", level: "Beginner", equipment: "No" },
    then: {
      fitness_plan: "Bodyweight strength workouts (push-ups, wall sits, glute bridges) 3x/week",
      nutrition_advice: "Eat more protein, healthy fats, and sufficient calories",
      lifestyle_tip: "Use resistance bands, track reps, rest well"
    }
  },
  {
    if: { goal: "Muscle Gain", level: "Beginner", equipment: "Yes" },
    then: {
      fitness_plan: "Full-body gym workouts with machines 3x/week",
      nutrition_advice: "Surplus calories with high-protein intake",
      lifestyle_tip: "Focus on form and increase resistance gradually"
    }
  },
  {
    if: { goal: "Muscle Gain", level: "Intermediate", equipment: "No" },
    then: {
      fitness_plan: "Advanced bodyweight strength (incline push-ups, pistol squats) 4x/week",
      nutrition_advice: "Increase calorie intake with complex carbs and proteins",
      lifestyle_tip: "Track workouts, improve technique, increase reps/sets"
    }
  },
  {
    if: { goal: "Muscle Gain", level: "Intermediate", equipment: "Yes" },
    then: {
      fitness_plan: "Upper/lower split weight training 4x/week",
      nutrition_advice: "Protein shakes, moderate surplus, track intake",
      lifestyle_tip: "Stick to progressive overload, take weekly progress pics"
    }
  },
  {
    if: { goal: "Muscle Gain", level: "Advanced", equipment: "No" },
    then: {
      fitness_plan: "Calisthenics and static holds (planks, dips, push-up variations) 5x/week",
      nutrition_advice: "High-protein, add healthy snacks like nuts and eggs",
      lifestyle_tip: "Use weighted vests or backpacks, rest actively"
    }
  },
  {
    if: { goal: "Muscle Gain", level: "Advanced", equipment: "Yes" },
    then: {
      fitness_plan: "Push/Pull/Legs 6x/week with barbell and dumbbell work",
      nutrition_advice: "Track macros, include creatine or whey protein",
      lifestyle_tip: "Train to failure occasionally, monitor sleep and recovery"
    }
  },
  // general fitness
  {
    if: { goal: "General Fitness", level: "Beginner", equipment: "No" },
    then: {
      fitness_plan: "Mobility training, basic yoga, and bodyweight exercises 3x/week",
      nutrition_advice: "Eat balanced meals with a focus on hydration",
      lifestyle_tip: "Walk daily, reduce screen time, stretch in the morning"
    }
  },
  {
    if: { goal: "General Fitness", level: "Beginner", equipment: "Yes" },
    then: {
      fitness_plan: "Light resistance + treadmill or stationary cycling 3x/week",
      nutrition_advice: "Whole grains, fruits, water intake > 2L/day",
      lifestyle_tip: "Schedule sessions in the morning, mix it up for fun"
    }
  },
  {
    if: { goal: "General Fitness", level: "Intermediate", equipment: "No" },
    then: {
      fitness_plan: "Calisthenics, core work, and yoga/stretching 4x/week",
      nutrition_advice: "More veggies and lean proteins, less fried food",
      lifestyle_tip: "Bike to work or walk instead of driving when possible"
    }
  },
  {
    if: { goal: "General Fitness", level: "Intermediate", equipment: "Yes" },
    then: {
      fitness_plan: "Cardio + light-to-moderate resistance training combo 4x/week",
      nutrition_advice: "Eat clean 80% of the time, allow occasional treats",
      lifestyle_tip: "Follow a consistent sleep-wake cycle"
    }
  },
  {
    if: { goal: "General Fitness", level: "Advanced", equipment: "No" },
    then: {
      fitness_plan: "Dynamic stretching, plyometrics, bodyweight strength 5x/week",
      nutrition_advice: "Follow intuitive eating, hydrate consistently",
      lifestyle_tip: "Add variety with sports or dance classes"
    }
  },
  {
    if: { goal: "General Fitness", level: "Advanced", equipment: "Yes" },
    then: {
      fitness_plan: "Hybrid training: strength + endurance (e.g., kettlebell + run) 5x/week",
      nutrition_advice: "Macro-balanced meals, avoid excessive caffeine or alcohol",
      lifestyle_tip: "Track both physical and mental wellness"
    }
  }
];

// rules that will override the base rules
const overrideRules = [
  {
    // age
    if: (input) => input.age[0] >= 30,
    then: {
      fitness_plan: "Mobility & light resistance training (e.g., chair squats, band rows) 3x/week",
      nutrition_advice: "Protein, fiber, and bone-health nutrients (Calcium, Vitamin D)",
      lifestyle_tip: "Train with supervision if needed, walk daily, and maintain flexibility with stretches"
    }
  },
  // health conditions
  {
    if: (input) => input.medicalConditions === "Obesity",
    then: {
      fitness_plan: "Prioritize low-impact workouts (e.g., walking, elliptical, water aerobics)",
      nutrition_advice: "Adopt a high-fiber, high-protein diet; avoid sugary snacks and drinks",
      lifestyle_tip: "Set achievable short-term goals, track body measurements, and celebrate milestones"
    }
  },
  {
    if: (input) => input.medicalConditions === "Breathing Problems (Asthma)",
    then: {
      fitness_plan: "Avoid high-intensity workouts; focus on steady-state cardio like walking or cycling",
      nutrition_advice: "Include omega-3 rich foods (e.g., fish, flaxseeds); avoid dairy if it worsens symptoms",
      lifestyle_tip: "Always warm up and cool down, train in ventilated areas, and keep an inhaler nearby"
    }
  },
  {
    if: (input) => input.medicalConditions === "Back Problems",
    then: {
      fitness_plan: "Emphasize core stability and flexibility (e.g., bird-dog, cat-cow stretches)",
      nutrition_advice: "Maintain a healthy weight to reduce spinal pressure",
      lifestyle_tip: "Avoid heavy lifting; use proper posture and consult a specialist if needed"
    }
  },
  {
    if: (input) => input.medicalConditions === "Arthritis",
    then: {
      fitness_plan: "Prioritize joint-friendly movements like swimming or resistance bands",
      nutrition_advice: "Eat omega-3-rich foods and avoid processed, inflammatory items",
      lifestyle_tip: "Avoid high-impact or repetitive stress on affected joints"
    }
  }
];

// rules that will modify the base rules
const modifierRules = [
  {
    // gender
    if: (input) => input.gender === "Female",
    then: {
      fitness_plan: "Include core and pelvic floor strengthening",
      nutrition_advice: "Monitor iron and calcium intake",
      lifestyle_tip: "Consider menstrual cycle phases when planning high-intensity workouts"
    }
  },
  {
    if: (input) => input.gender === "Male",
    then: {
      fitness_plan: "Emphasize upper-body and core strength (e.g., push-ups, pull-ups, bench press)",
      nutrition_advice: "Ensure sufficient calorie intake, especially protein and complex carbs",
      lifestyle_tip: "Focus on posture, manage stress, and maintain cardiovascular health"
    }
  },
  // available time
  {
    if: (input) => input.timeAvailability[0] <= 30,
    then: {
      fitness_plan: "High-efficiency workouts like bodyweight HIIT or Tabata circuits",
      nutrition_advice: "Prepare quick, nutrient-dense meals in advance",
      lifestyle_tip: "Schedule sessions during consistent times daily; avoid skipping workouts"
    }
  },
  {
    if: (input) => input.timeAvailability[0] > 30,
    then: {
      fitness_plan: "Balanced routine with warm-up, strength or cardio, and cooldown",
      nutrition_advice: "Plan meals around workout time (e.g., protein before/after)",
      lifestyle_tip: "Incorporate both short- and long-duration activity for variety"
    }
  }
];

function matchBaseRule(userInput) {
  return baseRules.find(rule => {
    return rule.if.goal === userInput.fitnessGoal &&
      rule.if.level === userInput.fitnessLevel &&
      rule.if.equipment === userInput.equipment;
  })?.then;
}

function applyOverrideRules(userInput) {
  for (let rule of overrideRules) {
    if (rule.if(userInput)) {
      return rule.then; // First match takes priority
    }
  }
  return null;
}

function applyModifierRules(userInput, basePlan) {
  let modifiedPlan = { ...basePlan };

  for (let rule of modifierRules) {
    if (rule.if(userInput)) {
      modifiedPlan.fitness_plan += "\n" + rule.then.fitness_plan;
      modifiedPlan.nutrition_advice += "\n" + rule.then.nutrition_advice;
      modifiedPlan.lifestyle_tip += "\n" + rule.then.lifestyle_tip;
    }
  }

  return modifiedPlan;
}

function generateRecommendation(userInput) {
  const override = applyOverrideRules(userInput);
  if (override) return override;

  const base = matchBaseRule(userInput);
  if (!base) return { error: "No matching base plan found." };

  return applyModifierRules(userInput, base);
}

// React Component
const FitnessPlan = ({ userData, onRestart }) => {
  console.log(userData);
  const plan = generateRecommendation(userData);

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
              Gender: {userData.gender[0]}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Goal: {userData.fitnessGoal}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Level: {userData.fitnessLevel}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Equipment: {userData.equipment}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Medical Condition: {userData.medicalConditions}
            </div>
            <div className="glass-effect px-4 py-2 rounded-full text-sm">
              Time: {userData.timeAvailability[0]} min
            </div>
          </div>
        </div>

        {plan.error ? (
          <p className="text-red-600">{plan.error}</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="gradient-card p-8 rounded-3xl border-0 h-fit">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <ArrowUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Workout Plan</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="space-y-3">
                    {/* <p>{plan.fitness_plan}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: plan.fitness_plan.replace(/\n/g, '<br />') }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gradient-card p-8 rounded-3xl border-0 h-fit">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-pink-600 p-3 rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Nutrition Advice</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="space-y-3">
                    {/* <p>{plan.nutrition_advice}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: plan.nutrition_advice.replace(/\n/g, '<br />') }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gradient-card p-8 rounded-3xl border-0 h-fit">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Lifestyle Tips</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="space-y-3">
                    {/* <p>{plan.lifestyle_tip}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: plan.lifestyle_tip.replace(/\n/g, '<br />') }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

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
