import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  completionDate?: string;
  courseTitle?: string;
  courseUrl?: string;
  recipientName?: string;
};

export default function FinishedCourse({
  completionDate = 'March 11, 2025',
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Course completed" preheader="Completion recorded.">
      <h1 style={styles.h1}>Course completed</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Your completion has been recorded.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Completed on', value: completionDate },
        ]}
      />
      <EmailButton href={courseUrl} label="View course" />
    </EmailLayout>
  );
}
