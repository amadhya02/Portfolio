import GTLogo from '../assets/images/gt-logo.png';
import PecLogo from '../assets/images/pec-logo.png';
import SchoolLogo from '../assets/images/school-logo.png';

export const INSTITUTE_LOGO = {
  GA_TECH: GTLogo,
  PEC: PecLogo,
  SCHOOL: SchoolLogo,
};

const EDUCATION = [
  {
    duration: 'Jan, 2022 - Dec, 2024',
    degree: 'M.Sc. in Computing Systems',
    institute: 'Georgia Institute of Technology',
    other: '3.8 GPA',
    logo: INSTITUTE_LOGO.GA_TECH,
  },
  {
    duration: 'Aug, 2016 - Jun, 2020',
    degree: 'B.Tech in Electronics & Communication',
    institute: 'Punjab Engineering College',
    other: '8.1 CGPA',
    logo: INSTITUTE_LOGO.PEC,
  },
  {
    duration: 'Aug, 2014 - Mar, 2016',
    degree: 'Non Medical',
    institute: 'GMSSS-35',
    other: null,
    logo: INSTITUTE_LOGO.SCHOOL,
  },
];

export default EDUCATION;
