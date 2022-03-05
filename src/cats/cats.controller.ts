import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  index(@Param('id') id): string {
    console.log('id', id);
    return 'there are a cats';
  }
}
