import Link from 'next/link';
import { Policy, mockPolicies as policies } from '../../utils/mockData';

export default function PoliciesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-12">
          Policies Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy: Policy) => (
            <div
              key={policy.policyName}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
            >
              <div>
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                  {policy.policyName}
                </h2>
                <p className="text-sm text-blue-500 font-medium mb-1">
                  Status: {policy.status}
                </p>
                <p className="text-sm text-gray-500 font-light mb-4">
                  Date:{' '}
                  {policy.date !== 'TBD' ? policy.date : 'To Be Determined'}
                </p>
                <p className="text-gray-700 text-base mb-6">
                  {policy.description}
                </p>
              </div>
              <Link
                href={`/policies/${encodeURIComponent(policy.policyName)}`}
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
