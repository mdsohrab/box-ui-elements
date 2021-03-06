// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import IconCheck from '../../../../icons/general/IconCheck';
import IconReject from '../../../../icons/general/IconClose';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_INCOMPLETE } from '../../../../constants';
import messages from '../../../common/messages';

type Props = {|
    status: TaskStatus,
|};

const ICON_SIZE = 14;

const IconIncompleteNoSvg = props => <span {...props}>?</span>;

const StatusIcon = ({ status, ...rest }: { status: TaskStatus }) => {
    switch (status) {
        case TASK_NEW_APPROVED:
        case TASK_NEW_COMPLETED:
            return <IconCheck width={ICON_SIZE} height={ICON_SIZE} {...rest} />;
        case TASK_NEW_REJECTED:
            return <IconReject width={ICON_SIZE} height={ICON_SIZE} {...rest} />;
        case TASK_NEW_INCOMPLETE:
            return <IconIncompleteNoSvg width={ICON_SIZE} height={ICON_SIZE} {...rest} />;
        default:
            return null;
    }
};

const StatusMessage = ({ status }: { status: TaskStatus }) => {
    switch (status) {
        case TASK_NEW_APPROVED:
            return <FormattedMessage {...messages.tasksFeedApprovedLabel} />;
        case TASK_NEW_COMPLETED:
            return <FormattedMessage {...messages.tasksFeedCompletedLabel} />;
        case TASK_NEW_REJECTED:
            return <FormattedMessage {...messages.tasksFeedRejectedLabel} />;
        case TASK_NEW_INCOMPLETE:
            return <FormattedMessage {...messages.tasksFeedIncompleteLabel} />;
        default:
            return null;
    }
};

const Status = React.memo<Props>(({ status }: Props) => (
    <div className="bcs-task-status">
        <StatusIcon status={status} className={`bcs-task-status-icon ${status}`} aria-hidden />
        <StatusMessage status={status} />
    </div>
));

export default Status;
