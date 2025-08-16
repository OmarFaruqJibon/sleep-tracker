import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const DefaultHomepage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-16 pt-20">
        <div className="flex-1 mb-8 xl:pl-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to SleepTracker
          </h1>
          <p className="md:text-xl mb-6">
            Track your sleep, improve your health, and wake up feeling refreshed
            with SleepTracker.
          </p>
          <SignInButton>
            <button className="w-full md:w-auto bg-gray-900 px-4 py-2 rounded-md font-medium cursor-pointer">
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/sleep3.png"
            alt="sleep"
            width={500}
            height={500}
            className="w-full md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultHomepage;
