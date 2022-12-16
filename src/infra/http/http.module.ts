import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';

import { CancelNotification } from 'src/app/use-cases/cancel-notification';
import { CountRecipientNotifications } from 'src/app/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from 'src/app/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/app/use-cases/read-notification';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { UnreadNotification } from 'src/app/use-cases/unread-notification';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
    ],
})
export class HttpModule { }