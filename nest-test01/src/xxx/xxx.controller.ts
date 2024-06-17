/*
 * @creator: 19923098964 2289618624@qq.com
 * @since: 2024-06-17 14:10:11
 * @lastTime: 2024-06-17 14:11:51
 * @LastAuthor: 19923098964 2289618624@qq.com
 * @文件相对于项目的路径: /nextjs/nest-test01/src/xxx/xxx.controller.ts
 * @message: 头部注释配置模板
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { XxxService } from './xxx.service';
import { CreateXxxDto } from './dto/create-xxx.dto';
import { UpdateXxxDto } from './dto/update-xxx.dto';

@Controller('xxx')
export class XxxController {
  constructor(private readonly xxxService: XxxService) {}

  @Post()
  create(@Body() createXxxDto: CreateXxxDto) {
    return this.xxxService.create(createXxxDto);
  }

  @Get()
  findAll() {
    return this.xxxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.xxxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateXxxDto: UpdateXxxDto) {
    return this.xxxService.update(+id, updateXxxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.xxxService.remove(+id);
  }
}
