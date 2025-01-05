import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type FAQItemProps = {
  id: string;
  question: string;
  answer: React.ReactNode; // The answer content, can be JSX
  expanded: boolean;
  handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void; // Function to handle expansion
};

const faqData = [
  {
    id: 'panel1',
    question: '1. What services do you offer?',
    answer: (
      <>
        We offer a range of virtual telehealth services designed to support ICU survivors and improve post-ICU recovery, including: <br /><br />
          •	Virtual consultations with healthcare professionals (including intensivists)<br />
          •	Medication reconciliation to ensure the safe and effective use of medications<br />
          •	Post-ICU recovery support, including mental health resources and rehabilitation guidance<br />
          •	Assistance with creating advanced directives and healthcare planning<br />
          •	Collaboration with primary care physicians for continued care<br />
          •	Educational resources for patients and caregivers<br />

      </>
    ),
  },
  {
    id: 'panel2',
    question: '2. How does your virtual consultation process work?',
    answer: (
      <>
        Our virtual consultations are designed to be convenient and flexible. Here&apos;s how it works:<br /><br />
          1.	Schedule a Consultation: Book a virtual appointment at a time that works for you through our online booking system.<br />
          2.	Meet with a Healthcare Professional: During the consultation, you&apos;ll meet with one of our healthcare team members (including intensivists or other specialists) via video call.<br />
          3.	Receive Personalized Advice: We&apos;ll assess your recovery progress, answer any questions, and provide guidance on next steps.<br />
          4.	Follow-Up Care: Based on your needs, we&apos;ll arrange follow-up appointments to ensure you stay on track with your recovery.<br /><br />

        Our goal is to make your care as easy and accessible as possible from the comfort of your home.<br />

      </>
    ),
  },
  {
    id: 'panel3',
    question: '3. How can I book an appointment?',
    answer: (
      <>
        You can book an appointment by visiting our <Link href="/contact">Booking Page</Link>. Simply choose a time that works for you and complete the required information. Once your appointment is confirmed, you&apos;ll receive a link to join the virtual consultation.
      </>
    ),
  },
  {
    id: 'panel4',
    question: '4. Is my consultation covered by insurance?',
    answer: (
      <>
        We work with various insurance providers, and many of our services are eligible for reimbursement. We recommend checking with your insurance company to confirm coverage for virtual consultations, medication reconciliation, and post-ICU support services. Our team can assist you with any paperwork or documentation needed for insurance claims.
      </>
    ),
  },
  {
    id: 'panel5',
    question: '5. What is medication reconciliation, and why is it important?',
    answer: (
      <>
        Medication reconciliation is the process of reviewing all the medications you are taking to ensure there are no discrepancies or potential interactions. This step is crucial, especially after an ICU stay, as medication errors or confusion can lead to complications and readmissions. Our team works with you to review your medications and make sure you&apos;re taking them correctly for the best possible recovery outcomes.
      </>
    ),
  },
  {
    id: 'panel6',
    question: '6. How do you assist with advanced directives and healthcare planning?',
    answer: (
      <>
        Advanced directives are legal documents that outline your healthcare preferences in the event you are unable to communicate them. We provide guidance on completing these documents, including:<br /><br />
          •	Living wills<br />
          •	Healthcare power of attorney<br />
          •	Do-not-resuscitate (DNR) orders<br /><br />

        Our team will help you understand your options, explain each document&apos;s purpose, and guide you in making decisions that reflect your values and wishes.

      </>
    ),
  },
  {
    id: 'panel7',
    question: '7. How can I support my loved one who is recovering after an ICU stay?',
    answer: (
      <>
        Supporting a loved one after an ICU stay can be challenging. Here are some tips to help:<br /><br />

          •	Be patient: Recovery takes time, and both physical and mental challenges are common after an ICU stay.<br />
          •	Stay informed: Use our educational resources to understand their recovery process and what to expect.<br />
          •	Encourage communication: Let your loved one know that it&apos;s okay to ask for help, whether they need emotional support or practical assistance.<br />
          •	Access our caregiver resources: We offer guides specifically for family members and caregivers to provide the best possible care.<br /><br />

        For more detailed resources, visit our <Link href="/contact">Family and Caregiver Support Page</Link>.

      </>
    ),
  },
  {
    id: 'panel8',
    question: '8. What should I do if I have a question during my recovery?',
    answer: (
      <>
        If you have a question or concern at any point during your recovery, don&apos;t hesitate to reach out to us. You can schedule a virtual consultation, contact our team directly through our <Link href="/contact">Contact Page</Link>, or access our educational resources for more information. We&apos;re here to help you every step of the way.
      </>
    ),
  },
  {
    id: 'panel9',
    question: '9. Can I access your services if I live outside the United States?',
    answer: (
      <>
        Currently, we are focusing our services on patients within the United States. However, if you live outside the U.S. and are interested in receiving care, please contact us to discuss potential options. We are always looking for ways to expand our reach and support more individuals in their recovery.
      </>
    ),
  },
  {
    id: 'panel10',
    question: '10. What should I expect during my first consultation?',
    answer: (
      <>
        During your first consultation, you&apos;ll meet with one of our healthcare professionals who will:<br /><br />

          •	Review your health history and recovery progress<br />
          •	Discuss any concerns or questions you have about your health or recovery process<br />
          •	Create a personalized plan to guide your recovery<br />
          •	Provide recommendations for next steps, including follow-up appointments and additional resources<br /><br />

        Our goal is to ensure you feel confident, informed, and supported during your recovery journey.

      </>
    ),
  },
  {
    id: 'panel11',
    question: '11. How do I know if your services are right for me?',
    answer: (
      <>
        Our services are designed to support anyone who has recently been discharged from the ICU and is seeking comprehensive, virtual care. If you are managing multiple medications, facing challenges in your recovery, or need help navigating the post-ICU care process, our team is here to assist you. If you&apos;re unsure, we encourage you to schedule an initial consultation so we can assess your specific needs.
      </>
    ),
  },
];

const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer, expanded, handleChange }) => (
  <Accordion expanded={expanded} onChange={handleChange(id)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Typography component="span" variant="subtitle2">
        {question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '90%' } }}>
        {answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
);

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prevExpanded) =>
        isExpanded
          ? [...prevExpanded, panel] // Add the panel to the expanded list
          : prevExpanded.filter((item) => item !== panel) // Remove the panel from the expanded list
      );
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box sx={{ width: '100%' }}>
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            expanded={expanded.includes(item.id)}
            handleChange={handleChange}
          />
        ))}
      </Box>
      <Typography
        sx={{
          textAlign: 'left',
          color: 'text.secondary',
          width: '100%',
        }}
      >
        This <b>FAQ Page</b> is designed to answer common questions while providing a reassuring, helpful tone to your visitors.
      </Typography>
    </Container>
  );
}
