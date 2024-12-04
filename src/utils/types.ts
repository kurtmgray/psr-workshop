export interface JsonFile {
    path: string;
    content: {bill:Bill};
  }
  
  interface Bill {
    bill_id: number;
    change_hash: string;
    session_id: number;
    session: Session;
    url: string;
    state_link: string;
    completed: number;
    status: number;
    status_date: string;
    progress: Progress[];
    state: string;
    state_id: number;
    bill_number: string;
    bill_type: string;
    bill_type_id: string;
    body: string;
    body_id: number;
    current_body: string;
    current_body_id: number;
    title: string;
    description: string;
    pending_committee_id: number;
    committee: any[]; // Define this if there are specific committee structures
    referrals: Referral[];
    history: History[];
    sponsors: Sponsor[];
    sasts: any[]; // Define this if necessary
    subjects: any[]; // Define this if necessary
    texts: Text[];
    votes: Vote[];
    amendments: any[]; // Define this if necessary
    supplements: any[]; // Define this if necessary
    calendar: Calendar[];
  }
  
  interface Session {
    session_id: number;
    state_id: number;
    year_start: number;
    year_end: number;
    prefile: number;
    sine_die: number;
    prior: number;
    special: number;
    session_tag: string;
    session_title: string;
    session_name: string;
  }
  
  interface Progress {
    date: string;
    event: number;
  }
  
  interface Referral {
    date: string;
    committee_id: number;
    chamber: string;
    chamber_id: number;
    name: string;
  }
  
  interface History {
    date: string;
    action: string;
    chamber: string;
    chamber_id: number;
    importance: number;
  }
  
  interface Sponsor {
    people_id: number;
    person_hash: string;
    party_id: string;
    state_id: number;
    party: string;
    role_id: number;
    role: string;
    name: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    suffix: string;
    nickname: string;
    district: string;
    ftm_eid: number;
    votesmart_id: number;
    opensecrets_id: string;
    knowwho_pid: string;
    ballotpedia: string;
    bioguide_id: string;
    sponsor_type_id: number;
    sponsor_order: number;
    committee_sponsor: number;
    committee_id: number;
    state_federal: number;
  }
  
  interface Text {
    doc_id: number;
    date: string;
    type: string;
    type_id: number;
    mime: string;
    mime_id: number;
    url: string;
    state_link: string;
    text_size: number;
    text_hash: string;
    alt_bill_text: number;
    alt_mime: string;
    alt_mime_id: number;
    alt_state_link: string;
    alt_text_size: number;
    alt_text_hash: string;
  }
  
  interface Vote {
    roll_call_id: number;
    date: string;
    desc: string;
    yea: number;
    nay: number;
    nv: number;
    absent: number;
    total: number;
    passed: number;
    chamber: string;
    chamber_id: number;
    url: string;
    state_link: string;
  }
  
  interface Calendar {
    type_id: number;
    event_hash: string;
    type: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }
  