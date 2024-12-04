export type Policy = {
  policyName: string;
  title: string;
  status: string;
  date: string;
  description: string;
  publicHealthImpact: string;
  environmentalImpact: string;
  communityTestimonial: string | null;
  partners: string[];
  psrLaContribution: string;
  timeline: { date: string; title: string; description: string }[];
};

export const mockPolicies: Policy[] = [
  {
    policyName: 'Clean Air for Schools Act',
    title: 'Breathing Easy: Ensuring Clean Air in Schools',
    status: 'Passed',
    date: '2021-09-15',
    description:
      'Advocated for funding to install air filtration systems in public schools near industrial areas.',
    publicHealthImpact:
      'Reduced asthma rates among schoolchildren by 15% within the first year.',
    environmentalImpact:
      'Improved indoor air quality in 120 schools across Los Angeles.',
    communityTestimonial:
      'My kids can finally breathe easy at school. Thank you, PSR-LA! - Maria Lopez, Parent',
    partners: ['California Department of Education', 'LAUSD'],
    psrLaContribution:
      'Provided health impact studies and testified before the legislature.',
    timeline: [
      {
        date: '2021-01-01',
        title: 'Bill introduced to the state legislature',
        description:
          'The Clean Air for Schools Act was formally presented to lawmakers to address air quality concerns in schools near industrial areas.',
      },
      {
        date: '2021-06-10',
        title: 'Committee hearing and public testimony',
        description:
          'Advocates, including PSR-LA representatives, testified on the health impacts of poor air quality, pushing for bipartisan support.',
      },
      {
        date: '2021-09-15',
        title: 'Bill signed into law by the governor',
        description:
          'Governor approved the act, allocating funds for installing air filtration systems in over 100 schools across Los Angeles.',
      },
    ],
  },
  {
    policyName: 'Ban on Chlorpyrifos Pesticide',
    title: 'A Safer Harvest: Banning Harmful Pesticides',
    status: 'Passed',
    date: '2020-01-01',
    description:
      'Supported a statewide ban on chlorpyrifos, a pesticide linked to developmental issues in children.',
    publicHealthImpact:
      'Decreased pesticide-related health complaints by 40% in agricultural communities.',
    environmentalImpact: 'Reduced toxic runoff in rivers and streams.',
    communityTestimonial:
      'Our community is finally free from this harmful chemical. - Jose Rivera, Farmworker Advocate',
    partners: ['Pesticide Action Network', 'Sierra Club'],
    psrLaContribution:
      'Led public awareness campaigns and organized town halls.',
    timeline: [
      {
        date: '2019-03-01',
        title: 'PSR-LA launched advocacy campaign',
        description:
          'PSR-LA began a statewide campaign to raise awareness about the harmful effects of chlorpyrifos on health and the environment.',
      },
      {
        date: '2019-10-15',
        title: 'Public hearing on the effects of chlorpyrifos',
        description:
          'Scientists and community leaders presented data on the developmental risks associated with chlorpyrifos exposure.',
      },
      {
        date: '2020-01-01',
        title: 'State officially banned the use of chlorpyrifos',
        description:
          'The state government enacted a ban, becoming a leader in pesticide reform to protect agricultural communities.',
      },
    ],
  },
  {
    policyName: 'Nuclear Disarmament Resolution',
    title: 'A Step Toward Global Peace: Supporting Nuclear Disarmament',
    status: 'Adopted',
    date: '2022-03-12',
    description:
      'Advocated for the city of Los Angeles to support the Treaty on the Prohibition of Nuclear Weapons.',
    publicHealthImpact: 'Elevated public awareness of nuclear risks.',
    environmentalImpact:
      'Supported global advocacy against nuclear proliferation.',
    communityTestimonial:
      'This is a step toward a safer world for all of us. - Dr. Anika Sharma',
    partners: [
      'International Campaign to Abolish Nuclear Weapons (ICAN)',
      'Local Universities',
    ],
    psrLaContribution: 'Drafted the resolution and presented to the council.',
    timeline: [
      {
        date: '2021-05-01',
        title: 'Initial discussions with city council members',
        description:
          'PSR-LA held meetings with council members to explain the significance of supporting the Treaty on the Prohibition of Nuclear Weapons.',
      },
      {
        date: '2021-11-15',
        title: 'Draft resolution presented for review',
        description:
          'The draft resolution was formally submitted to the city council, emphasizing the city’s role in global disarmament advocacy.',
      },
      {
        date: '2022-03-12',
        title: 'Resolution adopted by city council',
        description:
          'Los Angeles became one of the first cities to publicly support the Treaty, promoting global nuclear disarmament efforts.',
      },
    ],
  },
  {
    policyName: 'Industrial Pollution Buffer Zones',
    title: 'Safe Spaces: Buffering Communities from Industrial Pollution',
    status: 'In Progress',
    date: '2025-12-31',
    description:
      'Campaign to create buffer zones around industrial facilities to protect residential areas.',
    publicHealthImpact: 'Expected reduction in respiratory illnesses.',
    environmentalImpact:
      'Decrease in airborne particulates near residential zones.',
    communityTestimonial:
      'We’re hopeful this will protect our kids from harmful pollution. - Elena Sanchez, Community Leader',
    partners: ['LA County Department of Public Health'],
    psrLaContribution: 'Conducting health impact assessments.',
    timeline: [
      {
        date: '2023-01-01',
        title: 'Stakeholder meetings began',
        description:
          'PSR-LA engaged with community leaders and industrial representatives to discuss buffer zone policies.',
      },
      {
        date: '2023-06-01',
        title: 'Draft policy shared with the public',
        description:
          'The draft policy was released for public comment, encouraging input from residents and environmental experts.',
      },
      {
        date: '2025-12-31',
        title: 'Policy expected to be finalized',
        description:
          'The finalized policy aims to enforce buffer zones, reducing pollution in residential areas near industrial facilities.',
      },
    ],
  },
  {
    policyName: 'Safe Drinking Water Initiative',
    title: 'Clean Water, Healthy Lives: Advocating for Safer Standards',
    status: 'Pending Legislation',
    date: 'TBD',
    description:
      'Advocating for stricter regulations on contaminants in drinking water.',
    publicHealthImpact: 'Protect communities from lead and PFAS contamination.',
    environmentalImpact: 'Anticipated improvement in groundwater quality.',
    communityTestimonial: null,
    partners: ['Water Quality Alliance', 'State Water Resources Control Board'],
    psrLaContribution:
      'Organizing community forums and lobbying state legislators.',
    timeline: [
      {
        date: '2022-09-01',
        title: 'Community forums held in affected areas',
        description:
          'PSR-LA hosted forums in communities facing drinking water contamination to gather insights and concerns.',
      },
      {
        date: '2023-03-15',
        title: 'Proposed bill submitted to the legislature',
        description:
          'A bill proposing stricter water quality standards was submitted, backed by community testimonies and scientific evidence.',
      },
      {
        date: 'TBD',
        title: 'Pending review and decision',
        description:
          'The legislature is reviewing the bill, with updates expected in the next legislative session.',
      },
    ],
  },
];
