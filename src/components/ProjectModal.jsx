export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 max-w-3xl w-full rounded-xl p-4 md:p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white text-lg md:text-2xl z-10 bg-gray-900/90 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center transition-all hover:bg-gray-800"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Hero section - Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-36 sm:h-44 md:h-56 object-cover rounded-lg md:rounded mb-3 md:mb-5"
        />

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 pr-8 md:pr-0 text-white leading-tight">
          {project.title}
        </h3>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] sm:text-xs px-2 py-0.5 md:py-1 bg-purple-600/20 text-purple-300 rounded border border-purple-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-4 md:mb-6 text-sm sm:text-base md:text-base">
          {project.full}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col gap-2.5 sm:gap-3 md:flex-row md:gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 sm:px-6 md:px-6 md:py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-semibold text-sm sm:text-base text-center w-full sm:w-auto"
          >
            View on GitHub →
          </a>
          {project.pypi && (
            <a
              href={project.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 sm:px-6 md:px-6 md:py-3 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition text-white font-semibold text-sm sm:text-base text-center w-full sm:w-auto"
            >
              View on PyPI →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 sm:px-6 md:px-6 md:py-3 bg-green-600 rounded-lg hover:bg-green-700 transition text-white font-semibold text-sm sm:text-base text-center w-full sm:w-auto"
            >
              View Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
