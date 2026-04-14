export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  fallbackImage: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  keywords: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'gastritis-causes-symptoms-treatment',
    title: 'Gastritis: Causes, Symptoms, and Treatment Options',
    description: 'Complete guide to gastritis including causes, symptoms, diagnosis, and effective treatment strategies.',
    category: 'Gastritis',
    author: 'Dr. Shekhar Poudel',
    date: '2024-01-15',
    readTime: 8,
    keywords: ['gastritis', 'stomach inflammation', 'gastritis treatment', 'causes of gastritis'],
    featured: true,
    image: '/gastrirtisb1.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/12/33/stomach-1209785_640.jpg',
    content: `Gastritis is inflammation of the stomach lining caused by various factors. This comprehensive guide covers everything you need to know about this common condition.

What is Gastritis?

Gastritis occurs when the protective lining of your stomach becomes inflamed or irritated. This can happen suddenly (acute gastritis) or develop gradually over time (chronic gastritis).

Common Causes

The most common causes include:
- H. pylori bacterial infection
- Prolonged use of NSAIDs (aspirin, ibuprofen)
- Alcohol consumption
- Stress and anxiety
- Autoimmune disorders
- Bile reflux

Symptoms to Watch For

- Abdominal pain and cramping
- Nausea and vomiting
- Loss of appetite
- Bloating
- Indigestion
- Dark or bloody stools

Diagnosis

Dr. Poudel recommends:
- Endoscopy examination
- H. pylori testing
- Blood tests
- Stool analysis

Treatment Options

Treatment depends on the underlying cause:
1. Medication therapy
2. H. pylori eradication
3. Lifestyle modifications
4. Dietary changes
5. Stress management

Early diagnosis and treatment can prevent complications like ulcers and bleeding.

References & Sources:
- Mayo Clinic - Gastritis: https://www.mayoclinic.org/diseases-conditions/gastritis
- NIH - Gastritis and Associated Disorders: https://www.ncbi.nlm.nih.gov/books/NBK534116/
- American College of Gastroenterology (ACG) - Gastritis Guidelines
- CDC - Helicobacter pylori Infection: https://www.cdc.gov/cancer/stomach/basic_info/h_pylori.htm`
  },
  {
    id: '2',
    slug: 'acid-reflux-gerd-solutions',
    title: 'Managing Acid Reflux and GERD: Expert Solutions',
    description: 'Effective strategies and medical treatments for acid reflux and gastroesophageal reflux disease.',
    category: 'GERD',
    author: 'Dr. Shekhar Poudel',
    date: '2024-01-20',
    readTime: 7,
    keywords: ['acid reflux', 'GERD', 'heartburn', 'reflux disease'],
    featured: true,
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/12/34/abdomen-1209783_640.jpg',
    image: '/GERDb2.jpg',
    content: `Acid reflux affects millions globally. Here's what you need to know about GERD and how to manage it effectively.

Understanding GERD

GERD occurs when stomach acid frequently flows back into the esophagus, causing discomfort and potential damage.

Risk Factors

- Obesity
- Pregnancy
- Smoking
- Excessive alcohol
- Large meals
- Certain medications
- Hiatal hernia

Lifestyle Modifications

1. Eat smaller, frequent meals
2. Avoid trigger foods
3. Don't eat 2-3 hours before bed
4. Elevate your head while sleeping
5. Maintain healthy weight
6. Quit smoking

Medical Treatment

- Antacids
- H2 receptor blockers
- Proton pump inhibitors
- Surgical options for severe cases

When to See a Doctor

Seek medical attention if:
- Symptoms persist despite lifestyle changes
- You have difficulty swallowing
- You experience chest pain
- You have unexplained weight loss

References & Sources:
- Mayo Clinic - GERD: https://www.mayoclinic.org/diseases-conditions/gerd
- American College of Gastroenterology - GERD Guidelines
- NIH - Gastroesophageal Reflux Disease: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987305/`
  },
  {
    id: '3',
    slug: 'ibs-management-diet-lifestyle',
    title: 'IBS Management: Diet, Triggers, and Lifestyle Tips',
    description: 'Comprehensive guide to managing Irritable Bowel Syndrome through diet and lifestyle changes.',
    category: 'IBS',
    author: 'Dr. Shekhar Poudel',
    date: '2024-01-25',
    readTime: 9,
    keywords: ['IBS', 'irritable bowel syndrome', 'IBS diet', 'IBS treatment'],
    featured: true,
    image: '/IBDb3.png',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/10/06/03/24/intestine-1717444_640.jpg',
    content: `Irritable Bowel Syndrome affects up to 15% of the population. Learn how to manage IBS effectively.

Types of IBS

- IBS-D (diarrhea predominant)
- IBS-C (constipation predominant)
- IBS-M (mixed type)

Identifying Your Triggers

Keep a food diary to identify:
- Problematic foods
- Stress patterns
- Timing relationships

Dietary Recommendations

- Increase fiber gradually
- Stay hydrated
- Limit caffeine
- Reduce fat intake
- Eat regularly

Stress Management

- Meditation
- Yoga
- Deep breathing exercises
- Regular exercise
- Adequate sleep
- Counseling if needed

Medical Treatments
-Antispasmodic medications to relieve abdominal pain and cramping
-Laxatives for IBS-C (constipation)
-Antidiarrheal medications for IBS-D (diarrhea)
-Fiber supplements (e.g., psyllium husk) to regulate bowel movements
-Probiotics to improve gut health and balance intestinal bacteria


References & Sources:
- Mayo Clinic - Irritable Bowel Syndrome: https://www.mayoclinic.org/diseases-conditions/ibs
- American College of Gastroenterology - IBS Guidelines
- Rome Foundation - IBS Diagnostic Criteria: https://theromefoundation.org/
- NIH - Irritable Bowel Syndrome Research: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6539318/`
  },
  {
    id: '4',
    slug: 'liver-health-prevention',
    title: 'Liver Health: Prevention and Early Detection',
    description: 'Essential information about liver health, common diseases, and prevention strategies.',
    category: 'Liver Health',
    author: 'Dr. Shekhar Poudel',
    date: '2024-02-01',
    readTime: 8,
    keywords: ['liver health', 'liver disease', 'hepatitis', 'liver prevention'],
    featured: true,
    image: '/LIverhealth preventionb4.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2017/07/19/11/41/liver-2519045_640.jpg',
    content: `Your liver is vital for survival. Learn how to keep it healthy and detect problems early.

Liver Functions

- Detoxification
- Protein synthesis
- Production of biochemicals
- Nutrient storage
- Immune function

Common Liver Diseases

- Hepatitis A, B, C
- Fatty liver disease
- Cirrhosis
- Liver cancer
- Alcoholic liver disease

Risk Factors

- Viral hepatitis
- Excessive alcohol
- Obesity
- Diabetes
- Autoimmune conditions
- Genetic factors

Prevention Strategies

1. Limit alcohol consumption
2. Maintain healthy weight
3. Get vaccinated for hepatitis
4. Safe practices to avoid infections
5. Healthy diet rich in vegetables
6. Regular exercise
7. Avoid sharing personal items

Regular Screening

- Annual liver function tests
- Ultrasound screening
- Specialized tests if at risk

Warning Signs

Seek medical he

References & Sources:
- Mayo Clinic - Liver Disease: https://www.mayoclinic.org/diseases-conditions/liver-disease
- NIH - Liver Diseases: https://www.ncbi.nlm.nih.gov/books/NBK481616/`
  },
  {
    id: '5',
    slug: 'endoscopy-procedure-guide',
    title: 'Endoscopy Explained: What to Expect',
    description: 'Complete guide to endoscopy procedures, preparation, and what to expect before and after.',
    category: 'Procedures',
    author: 'Dr. Shekhar Poudel',
    date: '2024-02-05',
    readTime: 6,
    keywords: ['endoscopy', 'upper endoscopy', 'endoscopy procedure', 'endoscopy preparation'],
    featured: false,
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    image: '/Endospcopy.jpg',
    content: `Understanding what endoscopy involves can help reduce anxiety and ensure proper preparation.

What is Endoscopy?

A minimally invasive procedure using a thin, flexible tube with a camera to visualize the upper digestive tract.

Types of Endoscopy

- Upper endoscopy (esophagus, stomach, duodenum)
- Colonoscopy (large intestine)
- ERCP (pancreatic and bile ducts)

Why Might You Need It?

- Persistent heartburn
- Difficulty swallowing
- Abdominal pain
- Cancer screening
- Treatment of bleeding

Pre-Procedure Preparation

- Fasting for 6-8 hours
- Medication adjustments
- Arranged transportation
- Comfortable clothing

During the Procedure

- Sedation provided
- Throat numbed
- 15-30 minutes duration
- Minimal discomfort
- Tissue samples if needed

Post-Procedure

- Observation period
- Throat soreness
- Avoid driving same day
- Normal diet gradually
- Follow-up instructions

Recovery

Most people recover within 24 hours with minimal side effects.

References & Sources:
- Mayo Clinic - Endoscopy: https://www.mayoclinic.org/tests-procedures/endoscopy
- American Society for Gastrointestinal Endoscopy (ASGE): https://www.asge.org/
- NIH - Gastrointestinal Endoscopy: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6007622/`
  },
  {
    id: '6',
    slug: 'hepatitis-types-prevention',
    title: 'Hepatitis Types: Understanding A, B, C, D, and E',
    description: 'Comprehensive overview of all hepatitis types, transmission, prevention, and treatment.',
    category: 'Liver Health',
    author: 'Dr. Shekhar Poudel',
    date: '2024-02-10',
    readTime: 10,
    keywords: ['hepatitis', 'hepatitis A', 'hepatitis B', 'hepatitis C', 'viral hepatitis'],
    featured: true,
    image: '/Hepatitis.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Hepatitis affects millions worldwide. Understanding each type is crucial for prevention and treatment.

Hepatitis A

- Transmission: Contaminated food/water
- Duration: Acute, usually self-limiting
- Prevention: Vaccination, hygiene
- Prognosis: Excellent with supportive care

Hepatitis B

- Transmission: Blood, body fluids, sexual contact
- Duration: Can become chronic
- Prevention: Vaccination (90% effective)
- Treatment: Antiviral medications
- Complications: Cirrhosis, liver cancer

Hepatitis C

- Transmission: Blood contact (historically transfusions)
- Duration: Often becomes chronic
- Treatment: Direct-acting antivirals (cure rate >95%)
- Prevention: Blood screening, safe practices

Hepatitis D

- Only in people with Hepatitis B
- More severe than B alone
- Vaccination against B prevents D

Hepatitis E

- Transmission: Contaminated water
- Usually acute in healthy individuals
- Serious in pregnant women
- No vaccine currently available

Screening Recommendations

Anyone with risk factors should be tested.

References & Sources:
- CDC - Viral Hepatitis: https://www.cdc.gov/hepatitis
- WHO - Hepatitis: https://www.who.int/news/fact-sheets/detail/hepatitis
- Mayo Clinic - Hepatitis: https://www.mayoclinic.org/diseases-conditions/hepatitis
- NIH - Hepatitis Information: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5815181/`
  },
  {
    id: '7',
    slug: 'colonoscopy-cancer-screening',
    title: 'Colorectal Cancer Screening: Why Colonoscopy Matters',
    description: 'Importance of colonoscopy for cancer prevention and early detection.',
    category: 'Prevention',
    author: 'Dr. Shekhar Poudel',
    date: '2024-02-15',
    readTime: 7,
    keywords: ['colonoscopy', 'colon cancer', 'cancer screening', 'colorectal cancer'],
    featured: false,
    image: '/CRC.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Colorectal cancer is preventable with regular screening. Here's why colonoscopy is important.

Cancer Prevention

Colonoscopy can:
- Detect cancer early
- Remove precancerous polyps
- Prevent cancer development
- Save lives

Screening Guidelines

- Start at age 45
- Every 10 years if normal
- More frequent if polyps found
- Earlier if family history

Risk Factors

- Age over 45
- Family history
- Inflammatory bowel disease
- Obesity
- Smoking
- Alcohol use
- Red meat consumption

Preparation

- Clear liquid diet
- Bowel cleansing solution
- Fasting 6-8 hours
- Medication adjustments

What Happens

- Sedation provided
- Examination of entire colon
- Polyp removal if found
- Tissue biopsy if needed
- 30-60 minutes typically

After the Procedure

- Recovery area observation
- Diet restrictions lifted gradually
- Results usually available in 1-2 weeks
- Follow-up recommendations

References & Sources:
- American Cancer Society - Colorectal Cancer Screening: https://www.cancer.org/cancer/colon-rectal-cancer.html
- Mayo Clinic - Colorectal Cancer: https://www.mayoclinic.org/diseases-conditions/colon-cancer
- NIH - Colorectal Cancer Screening: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8274046/
- USPSTF - Colorectal Cancer Screening Recommendations`
  },
  {
    id: '8',
    slug: 'fatty-liver-disease-reversal',
    title: 'Fatty Liver Disease: Can It Be Reversed?',
    description: 'Understanding non-alcoholic fatty liver disease and strategies for reversal.',
    category: 'Liver Health',
    author: 'Dr. Shekhar Poudel',
    date: '2024-02-20',
    readTime: 8,
    keywords: ['fatty liver', 'NAFLD', 'liver disease', 'fatty liver treatment'],
    featured: true,
    image: '/Fattyliber.jpeg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Fatty liver disease affects approximately 25% of the global population. The good news: it's often reversible.

Understanding NAFLD

Non-alcoholic fatty liver disease (NAFLD) involves fat accumulation in liver cells despite minimal alcohol consumption.

Risk Factors

- Obesity
- Diabetes
- Metabolic syndrome
- High cholesterol
- Insulin resistance
- Sedentary lifestyle

NAFLD Progression

1. Simple steatosis (fatty liver)
2. NASH (with inflammation)
3. Fibrosis
4. Cirrhosis
5. Liver failure

Can It Be Reversed?

YES! Early stages are reversible through:

1. Weight loss (5-10% can help)
2. Regular exercise
3. Healthy diet
4. Managing diabetes
5. Treating cholesterol

Dietary Recommendations

- Mediterranean diet
- Whole grains
- Lean proteins
- Healthy fats
- Limited sugar
- Reduced refined carbs

Medical Management

- No specific medications
- Treat underlying conditions
- Vitamin E in some cases
- Regular monitoring
- Liver ultrasound screening

Prognosis

With lifestyle changes, many people normalize liver function and prevent progression.

References & Sources:
- Mayo Clinic - Fatty Liver Disease: https://www.mayoclinic.org/diseases-conditions/fatty-liver-disease
- NIH - Non-alcoholic Fatty Liver Disease: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6015251/
- AASLD - NAFLD Guidelines: https://www.aasld.org/
- Hepatology Journal - NAFLD Management`
  },
  {
    id: '9',
    slug: 'digestive-enzymes-gut-health',
    title: 'Digestive Enzymes and Gut Health: Complete Guide',
    description: 'How digestive enzymes work and strategies to improve gut health and digestion.',
    category: 'Digestion',
    author: 'Dr. Shekhar Poudel',
    date: '2024-02-25',
    readTime: 7,
    keywords: ['digestive enzymes', 'gut health', 'digestion', 'probiotics'],
    featured: false,
    image: '/Guthealth.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Good digestion is fundamental to overall health. Learn how your digestive system works.

Types of Digestive Enzymes

1. Amylase - breaks down carbohydrates
2. Protease - breaks down proteins
3. Lipase - breaks down fats
4. Maltase - breaks down sugars

Where Enzymes Are Produced

- Salivary glands
- Stomach
- Small intestine
- Pancreas

Optimal Digestion

- Proper enzyme production
- Balanced pH
- Adequate stomach acid
- Healthy gut bacteria
- Sufficient fiber

Signs of Enzyme Deficiency

- Bloating
- Gas
- Constipation or diarrhea
- Undigested food in stool
- Nutrient deficiencies

Ways to Support Digestion

1. Eat slowly and chew thoroughly
2. Include fermented foods
3. Consume probiotics
4. Stay hydrated
5. Manage stress
6. Exercise regularly
7. Consume whole foods

When to See a Specialist

Persistent digestive issues warrant professional evaluation.

References & Sources:
- NIH - Digestive Enzymes: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3715154/
- Mayo Clinic - Digestive Health: https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating
- American Journal of Gastroenterology - Enzyme Disorders
- National Pancreas Foundation - Digestive Enzymes`
  },
  {
    id: '10',
    slug: 'diet-after-endoscopy-recovery',
    title: 'Diet After Endoscopy: Recovery Nutrition Guide',
    description: 'What to eat and avoid after endoscopy for optimal recovery.',
    category: 'Recovery',
    author: 'Dr. Shekhar Poudel',
    date: '2024-03-01',
    readTime: 5,
    keywords: ['post-endoscopy diet', 'endoscopy recovery', 'recovery nutrition'],
    featured: false,
    image: '/diet after endocopy.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Proper nutrition after endoscopy supports healing and recovery. Here's what you should eat.

Immediately After (First 2 Hours)

Wait before eating or drinking to ensure sedation wears off completely.

First 24 Hours

Soft, easy-to-digest foods:
- Broths and soups
- Pudding
- Yogurt
- Mashed potatoes
- Scrambled eggs
- Soft fruits (banana, applesauce)
- Toast

Days 2-3

Gradually introduce:
- Lean proteins
- Cooked vegetables
- Rice
- Pasta
- Chicken

Foods to Avoid

- Spicy foods
- Alcohol
- Caffeine (24 hours)
- Hard or crunchy foods
- High-fat foods
- Hot beverages

Hydration

- Water is best
- Herbal tea
- Coconut water
- Avoid carbonated drinks initially

Special Considerations

If polyps were removed:
- Follow specific dietary recommendations
- Avoid strenuous activity
- Follow-up appointments essential

Contact your doctor if experiencing pain or complications.

References & Sources:
- American Journal of Gastroenterology - Post-Endoscopy Care
- ASGE - Patient Education: https://www.asge.org/home/for-patients
- Mayo Clinic - Endoscopy Recovery: https://www.mayoclinic.org/tests-procedures/endoscopy
- NIH - Post-procedural Recovery Guidelines`
  },
  {
    id: '11',
    slug: 'stress-management-gut-health',
    title: 'The Gut-Brain Connection: Stress and Digestive Health',
    description: 'How stress affects digestion and strategies for managing stress-related GI issues.',
    category: 'Lifestyle',
    author: 'Dr. Shekhar Poudel',
    date: '2024-03-05',
    readTime: 8,
    keywords: ['stress management', 'gut health', 'stress anxiety', 'IBS stress'],
    featured: true,
    image: '/Gut-Brain-Connection.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `The gut-brain axis is powerful. Stress directly impacts digestion and GI health.

How Stress Affects Digestion

1. Reduces stomach acid
2. Impairs nutrient absorption
3. Triggers inflammation
4. Disrupts gut bacteria
5. Increases intestinal sensitivity
6. Alters gut motility

Stress-Related Conditions

- IBS symptoms worsen
- Ulcers develop/worsen
- GERD flares
- Food intolerances increase
- Constipation or diarrhea

Stress Management Techniques

#Physical Activity
- 30 minutes daily exercise
- Walking, yoga, swimming
- Reduces stress hormones

#Mindfulness Practices
- Meditation
- Deep breathing
- Progressive muscle relaxation

#Dietary Support
- Omega-3 rich foods
- Probiotic foods
- Limit caffeine
- Regular meal timing

#Sleep Hygiene
- 7-9 hours nightly
- Consistent schedule
- Dark, cool room
- Limit screens before bed

#Professional Support
- Therapy (CBT)
- Counseling
- Medical treatment if needed

Integration Approach

Holistic treatment addresses both physical and psychological aspects.

References & Sources:
- NIH - Gut-Brain Axis: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7695857/
- Mayo Clinic - Stress and Digestive Health
- American Psychological Association - Stress Effects
- Gastroenterology Journal - Psychosomatic Gastrointestinal Disorders`
  },
  {
    id: '12',
    slug: 'probiotics-gut-microbiome',
    title: 'Probiotics and Gut Microbiome: What You Need to Know',
    description: 'Understanding probiotics, their benefits, and how to choose quality products.',
    category: 'Nutrition',
    author: 'Dr. Shekhar Poudel',
    date: '2024-03-10',
    readTime: 7,
    keywords: ['probiotics', 'gut microbiome', 'beneficial bacteria', 'gut health'],
    featured: false,
    image: '/Gutmicrbiome.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Your gut microbiome contains trillions of bacteria crucial for health. Probiotics support beneficial bacteria.

What Are Probiotics?

Live beneficial bacteria that support digestive and immune health.

Key Strains

- Lactobacillus
- Bifidobacterium
- Saccharomyces boulardii

Benefits

- Improved digestion
- Enhanced immunity
- Better nutrient absorption
- Reduced inflammation
- Potential allergy relief
- Mental health support

Food Sources

- Yogurt (with live cultures)
- Kefir
- Sauerkraut
- Kimchi
- Miso
- Tempeh
- Kombucha

Choosing Supplements

- Look for CFU count
- Multiple strains
- Proper storage
- Reputable manufacturer
- Check expiration

When to Use

- Antibiotic courses
- After food poisoning
- IBS symptoms
- Immune support
- During travel

Potential Side Effects

- Temporary bloating
- Mild gas
- Usually resolves quickly

Consult before use if immunocompromised.

References & Sources:
- Mayo Clinic - Probiotics: https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/probiotics/faq-20058065
- NIH - Probiotics and Health: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3539293/
- American Gastroenterological Association - Probiotics
- Nature Reviews - Microbiome Research`
  },
  {
    id: '13',
    slug: 'hemorrhoids-treatment-prevention',
    title: 'Hemorrhoids: Prevention and Treatment Options',
    description: 'Everything you need to know about hemorrhoid prevention and treatment.',
    category: 'Conditions',
    author: 'Dr. Shekhar Poudel',
    date: '2024-03-15',
    readTime: 6,
    keywords: ['hemorrhoids', 'piles', 'hemorrhoid treatment', 'hemorrhoid prevention'],
    featured: false,
    image: '/Hemorrhioids.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Hemorrhoids are common and treatable. Here's what you need to know.

Types

Internal: Inside the rectum
External: Under the skin around the anus

Causes

- Straining during bowel movements
- Chronic constipation
- Prolonged sitting
- Anal intercourse
- Pregnancy
- Heavy lifting

Symptoms

- Itching
- Pain during bowel movements
- Bleeding (bright red)
- Swelling
- Lumps around anus

Prevention Strategies

1. High-fiber diet
2. Adequate hydration
3. Regular exercise
4. Don't strain during bowel movements
5. Use stool softeners if needed
6. Limit time on toilet
7. Avoid prolonged sitting

At-Home Treatment

- Warm baths
- Over-the-counter creams
- High-fiber diet
- Hydration
- Ice packs for relief

Medical Treatments

- Rubber band ligation
- Sclerotherapy
- Infrared coagulation
- Hemorrhoidectomy (surgery)

When to See a Doctor

Persistent symptoms warrant professional evaluation.

References & Sources:
- Mayo Clinic - Hemorrhoids: https://www.mayoclinic.org/diseases-conditions/hemorrhoids
- American College of Gastroenterology - Hemorrhoid Management
- NIH - Hemorrhoids Overview: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5774152/`
  },
  {
    id: '14',
    slug: 'celiac-disease-gluten-sensitivity',
    title: 'Celiac Disease vs. Gluten Sensitivity: Key Differences',
    description: 'Understanding celiac disease, gluten sensitivity, and proper diagnosis and management.',
    category: 'Conditions',
    author: 'Dr. Shekhar Poudel',
    date: '2024-03-20',
    readTime: 8,
    keywords: ['celiac disease', 'gluten sensitivity', 'gluten-free', 'digestive health'],
    featured: true,
    image: '/celiac-disease.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Celiac disease and gluten sensitivity are distinct conditions requiring different management approaches.

Celiac Disease

Autoimmune disorder triggered by gluten (wheat, barley, rye protein).

#Symptoms
- Abdominal pain
- Diarrhea
- Bloating
- Weight loss
- Malnutrition
- Fatigue

#Diagnosis
- Serology testing (tissue transglutaminase antibodies)
- Endoscopy with biopsy
- Genetic testing

#Management
- Strict gluten-free diet
- Regular monitoring
- Nutritional supplementation
- Bone density screening

Non-Celiac Gluten Sensitivity

Adverse reaction to gluten without autoimmune features.

#Differences
- No intestinal damage
- Negative celiac serology
- Similar symptoms
- Improving on gluten-free diet

Wheat Allergy

Immune reaction to wheat proteins.

#Distinct from both conditions
- Can outgrow in children
- IgE-mediated
- Can cause anaphylaxis

Gluten-Free Living

- Read food labels carefully
- Risk of cross-contamination
- Nutritional deficiencies to avoid
- Support groups available
- Professional guidance helpful

Prognosis

With proper management, both conditions have excellent outcomes.

References & Sources:
- Mayo Clinic - Celiac Disease: https://www.mayoclinic.org/diseases-conditions/celiac-disease
- NIH - Celiac Disease: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6481814/
- American College of Gastroenterology - Celiac Guidelines
- Celiac Disease Foundation: https://celiac.org/`
  },
  {
    id: '15',
    slug: 'ulcerative-colitis-crohns-disease',
    title: 'IBD Explained: Ulcerative Colitis vs. Crohn\'s Disease',
    description: 'Comprehensive comparison of ulcerative colitis and Crohn\'s disease with treatment options.',
    category: 'IBD',
    author: 'Dr. Shekhar Poudel',
    date: '2024-03-25',
    readTime: 9,
    keywords: ['ulcerative colitis', 'Crohn\'s disease', 'IBD', 'inflammatory bowel disease'],
    featured: true,
    image: '/inflammatory-bowel-disease-ibd.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Inflammatory Bowel Disease includes two main types with different characteristics and treatment approaches.

Ulcerative Colitis

Inflammation limited to colon and rectum.

#Characteristics
- Continuous inflammation
- Affects mucosal layer
- Begins in rectum
- Can lead to cancer

#Symptoms
- Bloody diarrhea
- Urgency
- Tenesmus
- Weight loss

Crohn's Disease

Can affect entire GI tract (mouth to anus).

#Characteristics
- Patchy inflammation
- Affects all layers
- Skip lesions
- Higher complication rate

#Symptoms
- Abdominal pain
- Diarrhea (usually nonbloody)
- Weight loss
- Mouth sores
- Perirectal disease

Key Differences

- Location affected
- Continuity of inflammation
- Depth of inflammation
- Extraintestinal manifestations

Diagnosis

- Colonoscopy with biopsy
- CT/MRI imaging
- Blood tests
- Stool studies

Treatment

- Anti-inflammatory drugs
- Immunosuppressants
- Biologics (TNF inhibitors)
- Surgery for complications
- Nutritional support

Lifestyle Management

- Avoid triggers
- Stress management
- Adequate nutrients
- Support groups

Prognosis

Modern treatments have improved significantly, with many people achieving remission.

References & Sources:
- Mayo Clinic - Inflammatory Bowel Disease: https://www.mayoclinic.org/diseases-conditions/inflammatory-bowel-disease
- Crohn's & Colitis Foundation: https://www.crohnscolitisfoundation.org/
- NIH - IBD Research: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6474080/
- American College of Gastroenterology - IBD Guidelines`
  },
  {
    id: '16',
    slug: 'liver-transplantation-guide',
    title: 'Liver Transplantation: What You Need to Know',
    description: 'Comprehensive guide to liver transplantation, eligibility, process, and outcomes.',
    category: 'Treatment',
    author: 'Dr. Shekhar Poudel',
    date: '2024-04-01',
    readTime: 10,
    keywords: ['liver transplant', 'organ transplant', 'transplantation', 'liver failure'],
    featured: true,
    image: '/liver-transplantation.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Liver transplantation is life-saving for patients with end-stage liver disease.

Who Needs a Transplant?

- Cirrhosis
- Acute liver failure
- Liver cancer (select cases)
- Chronic hepatitis
- Familial amyloidosis
- Primary biliary cholangitis
- Primary sclerosing cholangitis

Eligibility Criteria

- Age and overall health
- No active cancer (except HCC)
- Absence of infection
- Compliance ability
- Psychosocial factors
- Financial considerations

Types of Transplants

#Orthotopic (Deceased donor)
- Entire liver replaced
- Waiting list
- May be urgent

#Living donor
- Partial liver from relative/friend
- Risks and benefits
- Higher success rates
- Coordination important

Pre-Transplant Evaluation

- Extensive testing
- Organ compatibility
- Infection screening
- Nutritional assessment
- Psychological evaluation
- Financial counseling

The Surgery

- 4-8 hour procedure
- General anesthesia
- Native liver removed
- Donor liver implanted
- Vascular and bile duct anastomosis

Post-Transplant Life

- Lifelong immunosuppression
- monthly check-ups initially
- Medication adherence critical
- Diet modifications
- Exercise and lifestyle
- Sexual function usually normal
- Work possible
- Pregnancy possible

Complications

Short-term:
- Rejection
- Infection
- Bleeding
- Bile duct issues

Long-term:
- Chronic rejection
- Medication side effects
- Malignancy risk
- Metabolic issues

Success Rates

- 1-year survival: 85-90%
- 5-year survival: 70-75%
- Excellent quality of life improvement

Current Advances

- Dr. Poudel trained in latest techniques
- LTSI certification ensures expertise
- Improved outcome tracking
- Better immunosuppression

References & Sources:
- Mayo Clinic - Liver Transplant: https://www.mayoclinic.org/tests-procedures/liver-transplant
- AASLD - Liver Transplant Guidelines: https://www.aasld.org/
- American Society of Transplantation: https://www.astro.org/
- NIH - Organ Transplantation: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2827505/`
  },
  {
    id: '17',
    slug: 'endoscopic-ultrasound-eus',
    title: 'EUS (Endoscopic Ultrasound): Advanced Diagnostic Tool',
    description: 'Understanding EUS technology and its applications in gastroenterology.',
    category: 'Procedures',
    author: 'Dr. Shekhar Poudel',
    date: '2024-04-05',
    readTime: 7,
    keywords: ['EUS', 'endoscopic ultrasound', 'diagnosis', 'GI procedures'],
    featured: false,
    image: '/EUS.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Endoscopic Ultrasound (EUS) combines endoscopy with ultrasound for detailed imaging.

What is EUS?

Minimally invasive procedure using a special scope with ultrasound capabilities inserted through mouth or anus.

Advantages

- High resolution images
- Detailed layer-by-layer visualization
- Guided tissue sampling
- Therapeutic interventions
- Minimal invasion
- Accurate diagnosis

Diagnostic Uses

- Pancreatic disorders
- Bile duct imaging
- Submucosal lesions
- Staging GI cancers
- Lymph node assessment
- Unexplained bleeding

Therapeutic Applications

- Tissue biopsy (FNA/FNB)
- Cyst drainage
- Variceal coiling (Dr. Poudel's specialty)
- Pseudocyst drainage
- Fiducial placement
- Ablation therapies

Preparation

- Similar to endoscopy
- Fasting required
- Sedation provided
- Anticoagulants may need adjustment

Procedure

- Takes 30-60 minutes
- Minimal discomfort
- Real-time imaging
- Tissue sampling possible
- Therapeutic intervention if needed

Safety

- Complication rate: <1%
- Generally safe
- Perforation risk: minimal
- Infection risk: very low

Results

Rapid diagnosis allows timely treatment decisions.

References & Sources:
- ASGE - Endoscopic Ultrasound: https://www.asge.org/
- Mayo Clinic - EUS: https://www.mayoclinic.org/tests-procedures/endoscopic-ultrasound
- NIH - EUS Applications: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6032533/`
  },
  {
    id: '18',
    slug: 'ercp-pancreatic-bile-duct',
    title: 'ERCP Procedures: Pancreatic and Bile Duct Treatment',
    description: 'Understanding ERCP technology and its role in treating biliary and pancreatic diseases.',
    category: 'Procedures',
    author: 'Dr. Shekhar Poudel',
    date: '2024-04-10',
    readTime: 8,
    keywords: ['ERCP', 'bile duct', 'pancreatic duct', 'biliary disease'],
    featured: true,
    image: '/ERCP.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `ERCP (Endoscopic Retrograde Cholangiopancreatography) treats bile and pancreatic duct problems.

What is ERCP?

Endoscopic procedure combining X-ray with endoscopy to visualize and treat pancreatic and biliary ducts.

Diagnostic Indications

- Jaundice evaluation
- Pancreatitis
- Bile duct obstruction
- Pancreatic duct strictures
- Suspected stones

Therapeutic Indications

- Gallstone removal
- Stent placement
- Stricture dilation
- Debris extraction
- Sphincterotomy

Preparation

- Fasting 6-8 hours
- Medication adjustments
- Sedation arranged
- Consent discussion
- NPO status

The Procedure

- Scope passed orally
- Bile duct identified
- Contrast injection
- Fluoroscopy imaging
- Therapeutic intervention
- Duration: 30-90 minutes

Therapeutic Interventions

- Papillotomy (sphincter cutting)
- Stone extraction
- Stent placement
- Balloon dilation
- Lithotripsy

Success Rate

- Stone removal: >90%
- Stricture management: 60-80%
- Depends on indication

Complications

- Acute pancreatitis (3-5%)
- Bleeding (1-3%)
- Perforation (<1%)
- Infection (rare)
- Usually manageable

Post-Procedure

- Medical monitoring
- Pain management
- Diet progression
- Follow-up care
- Activity restriction

When Necessary

Can be life-saving for serious biliary obstruction or pancreatitis.

References & Sources:
- ASGE - ERCP Guidelines: https://www.asge.org/
- Mayo Clinic - ERCP: https://www.mayoclinic.org/tests-procedures/ercp
- American Journal of Gastroenterology - ERCP Outcomes
- NIH - ERCP Research: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7202449/`
  },
  {
    id: '19',
    slug: 'peptic-ulcer-disease-treatment',
    title: 'Peptic Ulcer Disease: Causes, Treatment, and Prevention',
    description: 'Complete guide to peptic ulcer disease, H. pylori infection, and modern treatment.',
    category: 'Ulcers',
    author: 'Dr. Shekhar Poudel',
    date: '2024-04-15',
    readTime: 8,
    keywords: ['peptic ulcer', 'ulcer disease', 'H. pylori', 'stomach ulcer'],
    featured: true,
    image: '/peptic-ulcer.png',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Peptic ulcers are common but treatable. Modern therapy has revolutionized management.

What is a Peptic Ulcer?

A break in the lining of the stomach, duodenum, or esophagus.

Causes

#H. pylori Infection (60%)
- Bacterial colonization
- Triggers inflammation
- Treatable with antibiotics

#NSAIDs (30%)
- Aspirin
- Ibuprofen
- Naproxen
- Celecoxib
- Impairs protective mechanisms

#Other Causes (10%)
- Stress
- Zollinger-Ellison syndrome
- Malignancy
- Radiation

Symptoms

- Abdominal pain (burning)
- Bloating
- Heartburn
- Nausea
- Vomiting
- Dark/bloody stools (severe)

Diagnosis

- Endoscopy (gold standard)
- H. pylori testing
- Blood tests
- Stool antigen

H. pylori Treatment

Triple or quadruple therapy:
- Two antibiotics
- Proton pump inhibitor
- Bismuth compound (sometimes)
- 10-14 days treatment
- Excellent cure rates (90%+)

NSAID-Related Ulcers

- Stop NSAID if possible
- Use safer alternative
- Add PPI or H2 blocker
- Protective prostaglandins

Lifestyle Modifications

- Stress reduction
- Spicy food avoidance
- Caffeine limitation
- Smoking cessation
- Alcohol moderation

Prognosis

With proper treatment, >95% heal without complications.

References & Sources:
- Mayo Clinic - Peptic Ulcer: https://www.mayoclinic.org/diseases-conditions/peptic-ulcer
- NIH - Peptic Ulcer Disease: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3879513/
- American College of Gastroenterology - Ulcer Management
- Helicobacter Journal - Treatment Guidelines`
  },
  {
    id: '20',
    slug: 'constipation-management-solutions',
    title: 'Constipation: When It\'s Serious and How to Treat It',
    description: 'Comprehensive guide to constipation causes, treatment, and when to see a doctor.',
    category: 'Digestion',
    author: 'Dr. Shekhar Poudel',
    date: '2024-04-20',
    readTime: 7,
    keywords: ['constipation', 'bowel movement', 'constipation relief', 'chronic constipation'],
    featured: false,
    image: '/Constipation.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Constipation affects many people. Most cases are manageable with lifestyle changes.

Definitions

Fewer than 3 bowel movements per week, or difficult passage.

Causes

- Low fiber diet
- Dehydration
- Sedentary lifestyle
- Medications
- IBS
- Thyroid disorders
- Depression
- Neurological conditions
- Structural issues

Risk Factors

- Age over 65
- Female gender
- Pregnancy
- Medications (opioids, antacids)
- Lack of physical activity

Treatment Approaches

#Dietary
- Increase fiber gradually
- 25-30g daily
- Fruits and vegetables
- Whole grains
- Legumes

#Hydration
- 6-8 glasses water
- Limit caffeine
- Reduce alcohol

#Lifestyle
- Regular exercise
- Establish routine
- Don't suppress urges
- Take time for bowel movements
- Relaxation

#Medications

Mild:
- Stool softeners
- Bulk laxatives

Moderate:
- Osmotic laxatives
- Magnesium hydroxide

Severe:
- Stimulant laxatives
- Prescription agents

#Medical Interventions

- Biofeedback
- Colonic irrigation
- Surgery (rare)

When to Seek Help

- Sudden change in habits
- Persistent constipation
- Blood in stool
- Severe pain
- Weight loss
- Family history of cancer

References & Sources:
- Mayo Clinic - Constipation: https://www.mayoclinic.org/diseases-conditions/constipation
- NIH - Constipation Management: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6315390/
- American College of Gastroenterology - Constipation Guidelines
- Gastroenterology Journal - Chronic Constipation`
  },
  {
    id: '21',
    slug: 'diarrhea-causes-treatment',
    title: 'Diarrhea: Causes, Treatment, and When to Worry',
    description: 'Understanding acute and chronic diarrhea, causes, and appropriate management.',
    category: 'Digestion',
    author: 'Dr. Shekhar Poudel',
    date: '2024-04-25',
    readTime: 7,
    keywords: ['diarrhea', 'loose stools', 'gastroenteritis', 'chronic diarrhea'],
    featured: false,
    image: '/Diarrhea.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Diarrhea is common and usually self-limited, but can indicate serious conditions.

Types

Acute: Less than 4 weeks duration
Chronic: More than 4 weeks duration

Causes - Acute

- Viral infection (most common)
- Bacterial infection
- Food poisoning
- Parasites
- Antibiotics
- Dietary changes

Causes - Chronic

- IBS
- Inflammatory bowel disease
- Malabsorption
- Medication side effects
- Infections
- Endocrine disorders
- Structural abnormalities

Symptoms to Monitor

- Frequency and consistency
- Presence of blood/mucus
- Associated fever
- Abdominal pain
- Weight changes

Home Management - Acute

- Hydration (key)
- Electrolyte replacement
- Bland diet
- Rest
- Gradual food reintroduction

Hydration Solutions

- Oral rehydration solutions
- Water-based drinks
- Broths
- Avoid high-sugar drinks

Medications

- Antimotility agents (careful use)
- Bismuth subsalicylate
- Antibiotics (if bacterial)
- Address underlying cause

Dietary Modifications

- BRAT diet (Bananas, Rice, Applesauce, Toast)
- Avoid dairy initially
- Limit fat and fiber initially
- Gradual reintroduction

When to Seek Medical Care

- Severe dehydration
- Blood or mucus present
- High fever
- Severe abdominal pain
- Persistent symptoms (>2 weeks acute, >1 week with features)
- Immunocompromised
- Extreme age or infancy

Proper evaluation ensures appropriate treatment.`
  },
  {
    id: '22',
    slug: 'colon-cancer-prevention-screening',
    title: 'Colon Cancer Prevention and Early Screening',
    description: 'Strategies for colon cancer prevention and the importance of screening programs.',
    category: 'Prevention',
    author: 'Dr. Shekhar Poudel',
    date: '2024-05-01',
    readTime: 8,
    keywords: ['colon cancer', 'cancer prevention', 'cancer screening', 'bowel cancer'],
    featured: true,
    image: '/CRC.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Colorectal cancer is largely preventable with proper screening and lifestyle measures.

Risk Factors

- Age over 45
- Family history
- Inflammatory bowel disease
- Obesity
- Smoking
- Alcohol use
- Red meat consumption
- Polyps

Prevention Strategies

Lifestyle Modifications:
- Increase physical activity
- Maintain healthy weight
- High-fiber diet
- Limit red/processed meat
- Quit smoking
- Limit alcohol
- Adequate calcium and vitamin D

Screening Methods

#Colonoscopy
- Gold standard
- Can remove polyps
- Every 10 years if normal

#FIT (Fecal Immunochemical Test)
- Detects blood in stool
- Annually if normal
- Non-invasive

#FOBT (Fecal Occult Blood Test)
- Older method
- Annual testing

#CT Colonography
- Virtual colonoscopy
- Every 5 years if normal
- Good for those refusing colonoscopy

#Sigmoidoscopy
- Examines rectum and sigmoid colon
- Every 5 years
- Used with FIT

Screening Guidelines

- Start at age 45
- More frequent if risk factors
- Continue to age 75
- Individualize after 75

Early Detection

- Polyp detection and removal prevents 75-90% of cancers
- Early-stage cancer has excellent prognosis
- Regular screening is the best investment

Current Research

Dr. Poudel stays updated on latest screening technologies and techniques.`
  },
  {
    id: '23',
    slug: 'esophageal-cancer-awareness',
    title: 'Esophageal Cancer: Risk Factors, Symptoms, and Survival',
    description: 'Comprehensive guide to esophageal cancer including risk factors, diagnosis, and prognosis.',
    category: 'Cancer',
    author: 'Dr. Shekhar Poudel',
    date: '2024-05-05',
    readTime: 9,
    keywords: ['esophageal cancer', 'throat cancer', 'cancer awareness', 'cancer diagnosis'],
    featured: false,
    image: '/Esophageal cancer.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Esophageal cancer awareness and early detection are crucial for improving outcomes.

Types

#Squamous Cell Carcinoma
- Upper and middle esophagus
- Associated with tobacco and alcohol

#Adenocarcinoma
- Lower esophagus
- Associated with Barrett's esophagus
- More common in developed countries

Risk Factors

- Tobacco use
- Alcohol consumption
- Barrett's esophagus
- Chronic GERD
- Obesity
- Hot beverage consumption
- Caustic injury
- Achalasia

Symptoms

- Difficulty swallowing
- Chest pain
- Weight loss
- Hoarseness
- Persistent cough
- Vomiting

Diagnosis

- Endoscopy with biopsy
- CT imaging
- Endoscopic ultrasound
- Staging investigations

Treatment

- Surgery (esophagectomy)
- Chemotherapy and radiation
- Palliative care
- Combined modality therapy

Prognosis

- Depends on stage at diagnosis
- Early-stage: better outcomes
- Late-stage: guarded
- Overall 5-year survival: 20%

Prevention

- Avoid tobacco and alcohol
- Manage GERD
- Maintain healthy weight
- Regular screening if at risk

Barrett's Esophagus Surveillance

- Endoscopy every 2-3 years
- More frequent if dysplasia present
- Early detection prevents cancer

References & Sources:
- Mayo Clinic - Esophageal Cancer: https://www.mayoclinic.org/diseases-conditions/esophageal-cancer
- American Cancer Society - Esophageal Cancer
- NIH - Esophageal Cancer: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7047066/
- Gastric Cancer Journal - Cancer Prevention`
  },
  {
    id: '24',
    slug: 'pancreatitis-causes-management',
    title: 'Acute and Chronic Pancreatitis: Causes and Management',
    description: 'Understanding acute and chronic pancreatitis, their causes, and treatment approaches.',
    category: 'Pancreas',
    author: 'Dr. Shekhar Poudel',
    date: '2024-05-10',
    readTime: 9,
    keywords: ['pancreatitis', 'pancreas inflammation', 'acute pancreatitis', 'chronic pancreatitis'],
    featured: true,
    image: '/Acute pancreatitis.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Pancreatitis ranges from mild to life-threatening. Understanding it is crucial.

Acute Pancreatitis

Sudden inflammation, usually self-limited.

#Causes
- Gallstones (most common)
- Alcohol
- Medications
- Metabolic (hypertriglyceridemia, hypercalcemia)
- Infections
- Post-ERCP
- Trauma
- Idiopathic

#Symptoms
- Upper abdominal pain (sudden)
- Pain radiating to back
- Nausea and vomiting
- Fever
- Tachycardia
- Possible shock

#Diagnosis
- Elevated amylase and lipase
- Imaging (ultrasound, CT)
- Blood glucose changes
- Liver function tests

#Treatment
- Hospitalization (often)
- Nil orally initially
- Intravenous fluids
- Pain management
- Treat underlying cause
- Monitor for complications

#Complications
- Necrosis
- Infection
- Systemic inflammatory response
- Organ failure
- Pseudocyst formation

Chronic Pancreatitis

Long-standing inflammation causing permanent damage.

#Causes
- Chronic alcohol use (major)
- Obstruction
- Genetic mutations
- Autoimmune
- Metabolic
- Idiopathic

#Symptoms
- Chronic pain
- Steatorrhea
- Malabsorption
- Diabetes
- Weight loss

#Treatment
- Pain management
- Enzyme supplements
- Management of complications
- Alcohol cessation
- Dietary modifications
- ERCP for obstruction

Pancreatic Cancer Risk

Increased in chronic pancreatitis – requires surveillance.

Management with Dr. Poudel

Specialized expertise in complex pancreatic cases.

References & Sources:
- Mayo Clinic - Pancreatitis: https://www.mayoclinic.org/diseases-conditions/pancreatitis
- American Pancreatic Association: https://americanpancreatic.org/
- NIH - Pancreatitis: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8253066/`
  },
  {
    id: '25',
    slug: 'biliary-colic-gallstones',
    title: 'Gallstones and Biliary Colic: When Surgery Is Needed',
    description: 'Understanding gallstones, biliary colic, and the role of cholecystectomy.',
    category: 'Gallbladder',
    author: 'Dr. Shekhar Poudel',
    date: '2024-05-15',
    readTime: 8,
    keywords: ['gallstones', 'biliary colic', 'cholecystectomy', 'gallbladder disease'],
    featured: false,
    image: '/gallstones.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    content: `Gallstones are common, but only symptomatic ones require treatment.

What Are Gallstones?

Hardened deposits of bile in the gallbladder.

Risk Factors (4 Fs)

- Female
- Forty (age)
- Fat (obesity)
- Fertile (multiparity)

Additional Factors

- Rapid weight loss
- Sedentary lifestyle
- Ethnic background
- Family history
- Liver disease
- Certain medications

Types

#Cholesterol Stones (80%)
- Most common
- Form from bile supersaturation

#Pigment Stones (20%)
- Bilirubin-based
- Often due to hemolysis
- Associated with cirrhosis

Asymptomatic vs. Symptomatic

Asymptomatic (80%):
- No treatment needed
- Monitor for symptoms

Symptomatic:
- Biliary colic
- Cholecystitis
- Pancreatitis
- Requires intervention

Biliary Colic

Classic presentation:
- Right upper quadrant pain
- Sudden onset
- Severe intensity
- Occurs after fatty meal
- Lasts 30 minutes to several hours
- May radiate to back or shoulder

Diagnosis

- Ultrasound (first-line)
- CT imaging
- HIDA scan
- Endoscopic ultrasound

Treatment

#Medical Management
- High-dose ursodeoxycholic acid
- Long-term therapy
- Success rate 50% (rarely used)

#Surgical Management
- Laparoscopic cholecystectomy (standard)
- Open surgery (if complicated)
- Gold standard treatment

#Complications

If left untreated:
- Cholecystitis
- Pancreatitis
- Bile duct obstruction
- Bowel obstruction (rare)
- Gallbladder perforation
- Gallbladder cancer (rare but increased risk)

Outcomes

Cholecystectomy has excellent outcomes with symptomatic relief in >90% of cases.

References & Sources:
- Mayo Clinic - Gallstones: https://www.mayoclinic.org/diseases-conditions/gallstones
- NIH - Cholelithiasis: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8074046/`
  }
];
