import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AppDataSource,
  AppSeedDataSource,
} from './infrastructure/databases/config';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './modules/contact/contact.module';
import { UserModule } from './modules/user/user.module';
import { ProfileModule } from './modules/profile/profile.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { QrCodeModule } from './modules/qr-code/qr-code.module';
import { ApplicationTokenModule } from './modules/application-token/application-token.module';
import { ApplicationModule } from './modules/application/application.module';
import { SubscribeModule } from './modules/subscribe/subscribe.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forRoot(AppSeedDataSource.options),
    ContactModule,
    ProfileModule,
    CurrencyModule,
    UserModule,
    QrCodeModule,
    ApplicationTokenModule,
    ApplicationModule,
    SubscribeModule,
  ],
})
export class AppModule {}
