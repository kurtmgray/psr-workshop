export default function Home() {
  return (
    <div>
      <header className="bg-gray-100 py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Track Policy Impacts for a Better Future
        </h1>
        <p className="text-lg mt-4 text-gray-700">
          Explore how policies shape public health and the environment.
        </p>
        <a
          href="/policies"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Explore Policies
        </a>
      </header>
    </div>
  );
}
