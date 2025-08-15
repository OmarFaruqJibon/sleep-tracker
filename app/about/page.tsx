import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          About SleepTracker
        </h1>
        <p className="text-lg ">
          Your ultimate companion for tracking sleep and improving your health.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="   max-w-3xl mx-auto text-center">
          SleepTracker is dedicated to helping people improve their sleep and
          overall health by offering valuable insights into their sleep
          patterns. Quality rest fosters a healthier, happier life — and we are
          here to support you on that journey.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose SleepTracker?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-md shadow border-1 border-gray-900">
            <h3 className="text-xl font-bold mb-2">Comprehensive Tracking</h3>
            <p className="">
              Monitor your sleep patterns and identify areas for improvement.
            </p>
          </div>
          <div className="p-6 rounded-md shadow border-1 border-gray-900">
            <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
            <p className="  ">
              Receive tailored recommendations to enhance your sleep quality.
            </p>
          </div>
          <div className="p-6 rounded-md shadow border-1 border-gray-900">
            <h3 className="text-xl font-bold mb-2">User-Friendly Design</h3>
            <p className="  ">
              Enjoy an intuitive and seamless experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-8  ">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="max-w-3xl mx-auto text-center">
          SleepTracker was built to meet the rising demand for effective sleep
          management solutions. Our team of sleep specialists and technologists
          crafted a platform that blends advanced technology with practical,
          actionable insights. Since our debut, we have empowered countless
          users to enjoy better sleep and enhance their overall well-being.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px- text-center">
        <h2 className="text-3xl font-bold mb-4 ">Ready to Sleep Better?</h2>
        <p className="text-lg mb-6">
          Join SleepTracker today and take the first step towards better sleep
          and a healthier life.
        </p>
        <Link
          href="/sign-up"
          className="inline-block px-6 py-3 rounded-md font-medium shadow-md transition bg-gray-900"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
