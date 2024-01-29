import { Module,Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//@Global() //added
@Module({
  providers: [PrismaService],
  exports: [PrismaService], //If we do not mention it we will face this error: Nest can not resolve dependencies of the AuthService
})
export class PrismaModule {}
