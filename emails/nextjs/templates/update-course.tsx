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
  updateDate?: string;
};

export default function UpdateCourse({
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  recipientName = 'there',
  reviewStatus = 'In review',
  updateDate = 'March 9, 2025',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Course update received" preheader="Your course updates were saved.">
      <h1 style={styles.h1}>Course updated</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Your course updates are saved and pending review if required.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Updated on', value: updateDate },
          { label: 'Review status', value: reviewStatus },
        ]}
      />
      <EmailButton href={courseUrl} label="View course" />
    </EmailLayout>
  );
}
