import TimeLine from '@/components/TimeLine';
import { Policy, mockPolicies as policies } from '../../../utils/mockData';

type PolicyDetailsProps = {
  params: { id: string };
};

export default function PolicyDetails({ params }: PolicyDetailsProps) {
  const { id } = params;

  const policy: Policy | undefined = policies.find(
    (p) => p.policyName === decodeURIComponent(id)
  );

  if (!policy) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Policy Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the requested policy could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            {policy.policyName}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Status:</strong> {policy.status}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>Date:</strong>{' '}
            {policy.date !== 'TBD' ? policy.date : 'To Be Determined'}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Description
            </h2>
            <p className="text-gray-700">{policy.description}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Impact
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Public Health:</strong> {policy.publicHealthImpact}
            </p>
            <p className="text-gray-700">
              <strong>Environment:</strong> {policy.environmentalImpact}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Timeline
            </h2>
            <TimeLine events={policy.timeline} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Community Testimonial
            </h2>
            {policy.communityTestimonial ? (
              <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4">
                {policy.communityTestimonial}
              </blockquote>
            ) : (
              <p className="text-gray-500">No testimonial available.</p>
            )}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Partners
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {policy.partners.map((partner, index) => (
                <li key={index}>{partner}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              PSR-LA Contribution
            </h2>
            <p className="text-gray-700">{policy.psrLaContribution}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
