import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseEditUrl?: string;
  courseTitle?: string;
  nextStep?: string;
  recipientName?: string;
  reviewNotes?: string;
};

export default function RejectedCourse({
  courseEditUrl = 'https://discoverwhoami.com/instructor/courses/course-title/edit',
  courseTitle = 'Course Title',
  nextStep = 'Update your course and resubmit.',
  recipientName = 'there',
  reviewNotes = 'Please add a course description and two lesson previews.',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Course needs updates" preheader="Please review feedback and resubmit.">
      <h1 style={styles.h1}>Course needs updates</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Thanks for submitting your course. We need a few updates before we can publish it.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Review notes', value: reviewNotes },
          { label: 'Next step', value: nextStep },
        ]}
      />
      <EmailButton href={courseEditUrl} label="Edit course" />
    </EmailLayout>
  );
}
