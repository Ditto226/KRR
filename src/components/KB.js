const rules = [
  {
    id: 'R1',
    conditions: [
      (data) => data.goal === "weight loss",
      (data) => data.fitness_level === "beginner",
      (data) => data.time_available <= 30,
      (data) => data.equipment === "none",
    ],
    result: {
      workoutPlan: "Bodyweight cardio/HIIT: squats, push-ups, planks (3–4x/week)",
      nutritionAdvice: "Caloric deficit, quick balanced meals",
      lifestyleTip: "Stretch daily, avoid skipping meals, keep moving throughout the day"
    }
  },
  {
    id: 'R2',
    conditions: [
      (data) => data.time_available >= 45,
      (data) => data.equipment !== "none",
      (data) => data.fitness_level !== "advanced",
    ],
    result: {
      workoutPlan: "Full-body strength + cardio split 4–5x/week using resistance tools",
      nutritionAdvice: "Balanced macronutrients, meal timing for workout support",
      lifestyleTip: "Stretch post-workout, track weekly fitness and diet goals"
    }
  },
  {
    id: 'R3',
    conditions: [
      (data) => data.goal === "muscle gain",
      (data) => ["intermediate", "advanced"].includes(data.fitness_level),
      (data) => data.time_available >= 45,
    ],
    result: {
      workoutPlan: "Strength split training (push/pull/legs), 5–6x/week with heavy lifts",
      nutritionAdvice: "Calorie surplus, high-protein intake, include pre/post workout nutrition",
      lifestyleTip: "Monitor recovery, sleep ≥ 7 hours, track volume/progression"
    }
  },
  {
    id: 'R4',
    conditions: [
      (data) => data.health_condition === "joint pain",
    ],
    result: {
      workoutPlan: "Low-impact training (e.g., cycling, resistance bands), avoid jumping/squats",
      nutritionAdvice: "Anti-inflammatory diet: omega-3, turmeric, leafy greens",
      lifestyleTip: "Use supportive shoes/mats, warm up thoroughly, avoid high impact"
    }
  },
  {
    id: 'R5',
    conditions: [
      (data) => data.health_condition === "asthma",
    ],
    result: {
      workoutPlan: "Indoor low-moderate intensity workouts (e.g., elliptical, resistance bands)",
      nutritionAdvice: "Avoid inflammatory foods, increase omega-3 intake",
      lifestyleTip: "Have inhaler nearby, gradually warm up, avoid dusty environments"
    }
  },
  {
    id: 'R6',
    conditions: [
      (data) => data.gender === "female",
      (data) => data.age >= 45,
    ],
    result: {
      workoutPlan: "Resistance-based training 3x/week, low-impact cardio (e.g., walking)",
      nutritionAdvice: "High calcium, vitamin D, and iron intake",
      lifestyleTip: "Stretch regularly, monitor bone health, avoid overtraining"
    }
  },
  {
    id: 'R7',
    conditions: [
      (data) => data.occupation === "desk job",
    ],
    result: {
      workoutPlan: "Daily 20–30 minute bodyweight or resistance band workouts",
      nutritionAdvice: "Avoid constant snacking, eat on schedule",
      lifestyleTip: "Take breaks every 30 minutes to stretch or stand"
    }
  },
  {
    id: 'R8',
    conditions: [
      (data) => data.health_condition === "pregnant",
      (data) => data.fitness_level === "beginner",
    ],
    result: {
      workoutPlan: "Prenatal yoga, walking, and light resistance 3–4x/week",
      nutritionAdvice: "Folic acid, iron, hydration-focused diet",
      lifestyleTip: "Avoid lying flat after 1st trimester, consult doctor regularly"
    }
  },
  {
    id: 'R9',
    conditions: [
      (data) => data.age >= 60,
    ],
    result: {
      workoutPlan: "Low-impact strength and mobility 2–3x/week (chair squats, band rows)",
      nutritionAdvice: "High-protein, calcium-rich meals with fiber",
      lifestyleTip: "Monitor balance, stay active daily, walk often"
    }
  },
  {
    id: 'R10',
    conditions: [
      (data) => data.BMI >= 30,
      (data) => data.goal === "weight loss",
    ],
    result: {
      workoutPlan: "Low-impact cardio (e.g., walking, pool exercises) 5x/week",
      nutritionAdvice: "Structured caloric deficit, whole-foods diet",
      lifestyleTip: "Avoid long sitting periods, sleep well, log meals and workouts"
    }
  },
  {
    id: 'R11',
    conditions: [
      (data) => data.BMI < 18.5,
      (data) => data.goal === "weight gain",
    ],
    result: {
      workoutPlan: "Resistance training (bodyweight/dumbbells) 3x/week",
      nutritionAdvice: "High-calorie, nutrient-dense diet with healthy fats",
      lifestyleTip: "Eat frequently, add snacks, track gradual weight gain"
    }
  },
  {
    id: 'R12',
    conditions: [
      (data) => data.gender === "female",
      (data) => data.health_condition === "PCOS",
    ],
    result: {
      workoutPlan: "Strength + cardio blend (moderate intensity), 4–5x/week",
      nutritionAdvice: "Low-GI carbs, avoid sugar spikes, increase fiber",
      lifestyleTip: "Avoid overtraining, sleep well, manage stress"
    }
  },
  {
    id: 'R13',
    conditions: [
      (data) => data.goal === "general fitness",
      (data) => data.equipment === "none",
    ],
    result: {
      workoutPlan: "Bodyweight routine: squats, push-ups, planks 3–5x/week",
      nutritionAdvice: "Balanced macro intake, portion control",
      lifestyleTip: "Walk daily, stay hydrated, stretch post-workout"
    }
  },
  {
    id: 'R14',
    conditions: [
      (data) => data.equipment === "resistance band",
      (data) => ["weight loss", "muscle gain", "general fitness"].includes(data.goal),
    ],
    result: {
      workoutPlan: "Resistance band full-body circuit 4x/week",
      nutritionAdvice: "Protein-rich balanced meals",
      lifestyleTip: "Vary intensity weekly, maintain good form"
    }
  },
  {
    id: 'R15',
    conditions: [
      (data) => data.progress === "no change after 2 weeks",
    ],
    result: {
      workoutPlan: "Increase training frequency or intensity",
      nutritionAdvice: "Reevaluate calorie intake, reduce hidden sugar",
      lifestyleTip: "Improve sleep, track meals, adjust goals"
    }
  },
];

export default rules;
