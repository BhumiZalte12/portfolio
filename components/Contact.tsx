export const ContactSection = () => {

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        resetForm();
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  
    return (
        <section id="contact" className="min-h-screen bg-gray-600 text-white">
  

      <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          
        </p>
        <h2 className="text-4xl font-serif text-center mt-4">
          Contact Me
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-8">
        Have a question or want to work together? Fill out the form below!        </p>
  
          {/* Contact Form */}
          <form className="max-w-3xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-gray-700 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>
  
              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>
            </div>
  
            {/* Subject Field */}
            <div className="flex flex-col mt-6">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="mt-2 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>
  
            {/* Message Field */}
            <div className="flex flex-col mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-300"
              >
                Write a Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="mt-2 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </section>
      
    );
  };
  