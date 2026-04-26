export interface Vlog {
  id: number;
  platform: 'tiktok' | 'facebook';
  title: string;
  description: string;
  url: string;
  embedUrl?: string;
  thumbnail?: string;
}

export const vlogs: Vlog[] = [
  // TikTok Videos - Dental Health Education
  {
    id: 1,
    platform: "tiktok",
    title: "Root Canal Treatment Explained",
    description:
      "आपके दांत को बचाने के लिए रूट कैनाल - A complete guide to root canal therapy and what to expect",
    url: "https://www.tiktok.com/@usmiledental/video/root-canal-guide",
    embedUrl: "https://www.tiktok.com/embed/v2/root-canal-guide",
    thumbnail: "/vlog-root-canal.jpg",
  },
  {
    id: 2,
    platform: "tiktok",
    title: "Proper Teeth Brushing Technique",
    description:
      "दांतों को सही तरीके से कैसे ब्रश करें - Learn the correct technique to brush your teeth and prevent cavities",
    url: "https://www.tiktok.com/@usmiledental/video/brushing-technique",
    embedUrl: "https://www.tiktok.com/embed/v2/brushing-technique",
    thumbnail: "/vlog-brushing.jpg",
  },
  {
    id: 3,
    platform: "tiktok",
    title: "Cosmetic Dentistry Transformations",
    description:
      "स्माइल मेकओवर - Beautiful smile transformations using cosmetic dentistry at U Smile Dental Clinic",
    url: "https://www.tiktok.com/@usmiledental/video/cosmetic-transformation",
    embedUrl: "https://www.tiktok.com/embed/v2/cosmetic-transformation",
    thumbnail: "/vlog-cosmetic.jpg",
  },
  {
    id: 4,
    platform: "tiktok",
    title: "Gum Disease Prevention Tips",
    description:
      "मसूढ़े की बीमारी से कैसे बचें - Important tips to prevent gum disease and keep your teeth healthy",
    url: "https://www.tiktok.com/@usmiledental/video/gum-disease-prevention",
    embedUrl: "https://www.tiktok.com/embed/v2/gum-disease-prevention",
    thumbnail: "/vlog-gum-health.jpg",
  },
  {
    id: 5,
    platform: "tiktok",
    title: "Dental Implants: What You Need to Know",
    description:
      "दंत प्रत्यारोपण क्या है - Complete guide to dental implants, procedure, benefits, and aftercare",
    url: "https://www.tiktok.com/@usmiledental/video/dental-implants-guide",
    embedUrl: "https://www.tiktok.com/embed/v2/dental-implants-guide",
    thumbnail: "/vlog-implants.jpg",
  },
  {
    id: 6,
    platform: "tiktok",
    title: "Teeth Whitening at Home vs Professional",
    description:
      "दांतों को सफ़ेद करने का सही तरीका - Comparison of home whitening vs professional whitening treatments",
    url: "https://www.tiktok.com/@usmiledental/video/teeth-whitening-comparison",
    embedUrl: "https://www.tiktok.com/embed/v2/teeth-whitening-comparison",
    thumbnail: "/vlog-whitening.jpg",
  },
  {
    id: 7,
    platform: "tiktok",
    title: "Children's Dental Health Tips",
    description:
      "बच्चों के दांत की देखभाल - How to maintain healthy teeth in children and build good dental habits early",
    url: "https://www.tiktok.com/@usmiledental/video/childrens-dental-health",
    embedUrl: "https://www.tiktok.com/embed/v2/childrens-dental-health",
    thumbnail: "/vlog-kids-dental.jpg",
  },
  {
    id: 8,
    platform: "tiktok",
    title: "Common Dental Myths Debunked",
    description:
      "दंत चिकित्सा की गलतफहमियां - Clearing up common misconceptions about dental health and treatment",
    url: "https://www.tiktok.com/@usmiledental/video/dental-myths",
    embedUrl: "https://www.tiktok.com/embed/v2/dental-myths",
    thumbnail: "/vlog-myths.jpg",
  },
  {
    id: 9,
    platform: "facebook",
    title: "Patient Testimonials from U Smile Dental",
    description:
      "Happy patients sharing their experience at U Smile Dental Clinic - Root canal treatment and smile makeovers",
    url: "https://www.facebook.com/usmiledental/videos/testimonials",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/usmiledental/videos/testimonials",
    thumbnail: "/vlog-testimonials.jpg",
  },
  {
    id: 10,
    platform: "facebook",
    title: "Emergency Dental Care: What To Do",
    description:
      "दंत आपातकाल में क्या करें - Quick guide on handling dental emergencies and when to seek immediate care",
    url: "https://www.facebook.com/usmiledental/videos/emergency-care",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/usmiledental/videos/emergency-care",
    thumbnail: "/vlog-emergency.jpg",
  },
];
