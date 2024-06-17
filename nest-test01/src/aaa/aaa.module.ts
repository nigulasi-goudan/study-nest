/*
 * @creator: 19923098964 2289618624@qq.com
 * @since: 2024-06-17 14:08:42
 * @lastTime: 2024-06-17 14:09:44
 * @LastAuthor: 19923098964 2289618624@qq.com
 * @文件相对于项目的路径: /nextjs/nest-test01/src/aaa/aaa.module.ts
 * @message: 头部注释配置模板
 */
import { Module } from '@nestjs/common';
import { AaaController } from './aaa.controller';

@Module({
  controllers: [AaaController],
})
export class AaaModule {}
