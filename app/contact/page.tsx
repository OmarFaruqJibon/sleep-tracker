"use client";

const ContactPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8   ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          Contact SleepTracker
        </h1>
        <p className="text-lg md:text-xl">
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8   ">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form
          className="max-w-3xl mx-auto space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById("name") as HTMLInputElement)
              ?.value;
            const email = (document.getElementById("email") as HTMLInputElement)
              ?.value;
            const message = (
              document.getElementById("message") as HTMLTextAreaElement
            )?.value;
            const mailtoLink = `mailto:omarfaruq.jb@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
            window.location.href = mailtoLink;
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-900 rounded-md shadow-sm  "
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-mediu">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-900 rounded-md shadow-sm  "
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mediu">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-900 rounded-md shadow-sm  "
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 px-4 py-2 rounded-md font-medium shadow-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-8   ">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Information
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="">omarfaruq.jb@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="">+880 1742-189270</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="">Rajshahi, Bangladesh</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
