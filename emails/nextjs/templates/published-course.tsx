import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  courseUrl?: string;
  publishedDate?: string;
  recipientName?: string;
};

export default function PublishedCourse({
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  publishedDate = 'March 12, 2025',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Your course is live" preheader="Students can now enroll.">
      <h1 style={styles.h1}>Your course is published</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Your course is now live and available for enrollment.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Published on', value: publishedDate },
          { label: 'Course URL', value: courseUrl },
        ]}
      />
      <EmailButton href={courseUrl} label="View course" />
    </EmailLayout>
  );
}
