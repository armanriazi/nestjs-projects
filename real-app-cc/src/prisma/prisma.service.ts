import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  /*
  constructor(){
    super({
      datasources: {
        db:{
          url: 'postgres://ckrsqdhmivhinr:a95bcb2f127d1752cd1af6d58eeb07d9b496db77259f29422481fffc3f105464@ec2-34-205-46-149.compute-1.amazonaws.com:5432/dfcqp9nbf020sr'
        }
      }
    })
  }
  */
  async onModuleInit() {
    await this.$connect;
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
