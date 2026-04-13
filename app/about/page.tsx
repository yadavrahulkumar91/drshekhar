import { doctorProfile } from "@/data/doctor";
import Image from "next/image";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Award, Briefcase, BookOpen } from "lucide-react";
import Achievement from "@/components/Achievement";

export const metadata: Metadata = {
  title: "About Dr. Shekhar Poudel - Gastroenterologist Nepal",
  description: `Learn about Dr. Shekhar Poudel, the first Nepali DM holder in Gastroenterology from AIIMS and first LTSI-certified Transplant Hepatologist from Nepal.`,
  keywords: [
    "Dr. Shekhar Poudel",
    "gastroenterologist",
    "hepatologist",
    "AIIMS",
    "LTSI",
  ],
};

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              About Dr. Shekhar Poudel
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pioneer in gastroenterology and liver transplantation in Nepal
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-3xl p-8">
                <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden">
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/dr-shekhar-poudel_BaxEz1X.jpg"
                        alt="Dr. Shekhar Poudel - Gastroenterologist"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {doctorProfile.name}
                    </h2>
                    <p className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent font-semibold">
                      {doctorProfile.specialization}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {doctorProfile.title}
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Contact
                      </p>
                      <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                        {doctorProfile.mobile}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {doctorProfile.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-6">
                Professional Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {doctorProfile.bio}
              </p>

              {/* Key Achievements */}
              <div className="space-y-4 mb-8">
                {doctorProfile.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700/50"
                  >
                    <Award
                      size={24}
                      className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8 flex items-center space-x-3">
              <BookOpen className="text-emerald-600 dark:text-emerald-400" />
              <span>Education & Training</span>
            </h2>

            <div className="space-y-4">
              {doctorProfile.qualifications.map((qual, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {qual.degree}
                    </h3>
                    {qual.year && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        {qual.year}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {qual.institution}
                  </p>
                  {qual.achievement && (
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-2">
                      {qual.achievement}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8 flex items-center space-x-3">
              <Briefcase className="text-emerald-600 dark:text-emerald-400" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-4">
              {doctorProfile.experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {exp.position}
                    </h3>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    {exp.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.location}
                  </p>
                  {exp.achievement && (
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-2">
                      ✓ {exp.achievement}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Section */}
          <Achievement />
        </div>
      </div>
    </>
  );
}
