import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  courseUrl?: string;
  recipientName?: string;
  reviewStatus?: string;
  submittedDate?: string;
};

export default function NewCourse({
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  recipientName = 'there',
  reviewStatus = 'In review',
  submittedDate = 'March 9, 2025',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Course submitted for review" preheader="We received your course submission.">
      <h1 style={styles.h1}>Course submitted</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Thanks for submitting your course. Our team will review it and get back to you.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Submitted on', value: submittedDate },
          { label: 'Review status', value: reviewStatus },
        ]}
      />
      <EmailButton href={courseUrl} label="View course" />
    </EmailLayout>
  );
}
