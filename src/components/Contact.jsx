import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Feel free to reach out for collaboration, opportunities, or any questions.
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl">
          {/* Success/Error Message */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 animate-fade-in">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}
          
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 animate-fade-in">
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-400 font-medium">Oops! Something went wrong. Please try again.</span>
            </div>
          )}

          <form
            action="https://formspree.io/f/xjgvozjl"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 sm:p-4 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full p-3 sm:p-4 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
                className="w-full p-3 sm:p-4 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me more..."
                required
                className="w-full p-3 sm:p-4 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
