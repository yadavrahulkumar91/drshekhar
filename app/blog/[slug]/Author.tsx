interface AuthorProps {
  author: string;
  authorBio?: string;
  authorImage?: string;
}

export default function Author({ author, authorBio, authorImage }: AuthorProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-xl mb-12 border border-emerald-200 dark:border-emerald-700/50">
      <div className="flex items-center gap-4 mb-4">
        {authorImage ? (
          <img
            src={authorImage}
            alt={author}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 flex items-center justify-center text-3xl">
            👨‍⚕️
          </div>
        )}
        <div>
          <h3
            className="font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent"
            dangerouslySetInnerHTML={{ __html: author }}
          />
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Specialist in Gastroenterology and Hepatology
          </p>
        </div>
      </div>
      {authorBio && (
        <p
          className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-700"
          dangerouslySetInnerHTML={{ __html: authorBio }}
        />
      )}
    </div>
  );
}
