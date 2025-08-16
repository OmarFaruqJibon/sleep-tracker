import AddRecord from "@/components/AddRecord";
import DefaultHomepage from "@/components/DefaultHomePage";
import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    return <DefaultHomepage />;
  }

  return (
    <main className="font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* User Details */}
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome {user.firstName}
            </h2>
            <p className="mb-4">
              Here&#39;s a quick overview of your recent sleep activity
            </p>
            <div className="space-y-2">
              <p className="">
                <span className="font-semibold">Joined:</span>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
              <p className="">
                <span className="font-semibold">Last Active:</span>{" "}
                {user.lastActiveAt
                  ? new Date(user.lastActiveAt).toLocaleString()
                  : "N/A"}
              </p>
            </div>
          </div>
          {/* Placeholder for AddSleepRecord */}
          <AddRecord />
        </div>
      </div>
    </main>
  );
};

export default Home;
