import type { ComponentType } from 'react';
import BecomeAnInstructor from './templates/become-an-instructor';
import CancelledOrderAdmin from './templates/cancelled-order-admin';
import CancelledOrderGuest from './templates/cancelled-order-guest';
import CancelledOrderInstructor from './templates/cancelled-order-instructor';
import CancelledOrderUser from './templates/cancelled-order-user';
import CompletedOrderAdmin from './templates/completed-order-admin';
import CompletedOrderGuest from './templates/completed-order-guest';
import CompletedOrderUser from './templates/completed-order-user';
import EnrolledCourse from './templates/enrolled-course';
import EnrolledCourseAdmin from './templates/enrolled-course-admin';
import EnrolledCourseInstructor from './templates/enrolled-course-instructor';
import EnrolledCourseUser from './templates/enrolled-course-user';
import FinishedCourse from './templates/finished-course';
import FinishedCourseAdmin from './templates/finished-course-admin';
import FinishedCourseInstructor from './templates/finished-course-instructor';
import FinishedCourseUser from './templates/finished-course-user';
import InstructorAccepted from './templates/instructor-accepted';
import InstructorDenied from './templates/instructor-denied';
import NewCourse from './templates/new-course';
import NewOrderAdmin from './templates/new-order-admin';
import NewOrderGuest from './templates/new-order-guest';
import NewOrderInstructor from './templates/new-order-instructor';
import NewOrderUser from './templates/new-order-user';
import ProcessingOrderGuest from './templates/processing-order-guest';
import ProcessingOrderUser from './templates/processing-order-user';
import PublishedCourse from './templates/published-course';
import RejectedCourse from './templates/rejected-course';
import ResetPassword from './templates/reset-password';
import UpdateCourse from './templates/update-course';
import UserOrderChangedStatus from './templates/user-order-changed-status';
import UserOrderCompleted from './templates/user-order-completed';

export type EmailTemplateEntry = {
  slug: string;
  title: string;
  Component: ComponentType<Record<string, unknown>>;
};

const toTitle = (slug: string) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const emailTemplates: EmailTemplateEntry[] = [
  { slug: 'become-an-instructor', title: toTitle('become-an-instructor'), Component: BecomeAnInstructor },
  { slug: 'cancelled-order-admin', title: toTitle('cancelled-order-admin'), Component: CancelledOrderAdmin },
  { slug: 'cancelled-order-guest', title: toTitle('cancelled-order-guest'), Component: CancelledOrderGuest },
  { slug: 'cancelled-order-instructor', title: toTitle('cancelled-order-instructor'), Component: CancelledOrderInstructor },
  { slug: 'cancelled-order-user', title: toTitle('cancelled-order-user'), Component: CancelledOrderUser },
  { slug: 'completed-order-admin', title: toTitle('completed-order-admin'), Component: CompletedOrderAdmin },
  { slug: 'completed-order-guest', title: toTitle('completed-order-guest'), Component: CompletedOrderGuest },
  { slug: 'completed-order-user', title: toTitle('completed-order-user'), Component: CompletedOrderUser },
  { slug: 'enrolled-course', title: toTitle('enrolled-course'), Component: EnrolledCourse },
  { slug: 'enrolled-course-admin', title: toTitle('enrolled-course-admin'), Component: EnrolledCourseAdmin },
  { slug: 'enrolled-course-instructor', title: toTitle('enrolled-course-instructor'), Component: EnrolledCourseInstructor },
  { slug: 'enrolled-course-user', title: toTitle('enrolled-course-user'), Component: EnrolledCourseUser },
  { slug: 'finished-course', title: toTitle('finished-course'), Component: FinishedCourse },
  { slug: 'finished-course-admin', title: toTitle('finished-course-admin'), Component: FinishedCourseAdmin },
  { slug: 'finished-course-instructor', title: toTitle('finished-course-instructor'), Component: FinishedCourseInstructor },
  { slug: 'finished-course-user', title: toTitle('finished-course-user'), Component: FinishedCourseUser },
  { slug: 'instructor-accepted', title: toTitle('instructor-accepted'), Component: InstructorAccepted },
  { slug: 'instructor-denied', title: toTitle('instructor-denied'), Component: InstructorDenied },
  { slug: 'new-course', title: toTitle('new-course'), Component: NewCourse },
  { slug: 'new-order-admin', title: toTitle('new-order-admin'), Component: NewOrderAdmin },
  { slug: 'new-order-guest', title: toTitle('new-order-guest'), Component: NewOrderGuest },
  { slug: 'new-order-instructor', title: toTitle('new-order-instructor'), Component: NewOrderInstructor },
  { slug: 'new-order-user', title: toTitle('new-order-user'), Component: NewOrderUser },
  { slug: 'processing-order-guest', title: toTitle('processing-order-guest'), Component: ProcessingOrderGuest },
  { slug: 'processing-order-user', title: toTitle('processing-order-user'), Component: ProcessingOrderUser },
  { slug: 'published-course', title: toTitle('published-course'), Component: PublishedCourse },
  { slug: 'rejected-course', title: toTitle('rejected-course'), Component: RejectedCourse },
  { slug: 'reset-password', title: toTitle('reset-password'), Component: ResetPassword },
  { slug: 'update-course', title: toTitle('update-course'), Component: UpdateCourse },
  { slug: 'user-order-changed-status', title: toTitle('user-order-changed-status'), Component: UserOrderChangedStatus },
  { slug: 'user-order-completed', title: toTitle('user-order-completed'), Component: UserOrderCompleted },
];

export const emailTemplateMap = Object.fromEntries(
  emailTemplates.map((template) => [template.slug, template])
) as Record<string, EmailTemplateEntry>;
