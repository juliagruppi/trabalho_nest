import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, Matches, Max, Min } from 'class-validator';

export class ProtocoloQueryDto {

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    @Min(1)
    @Max(20)
    limit?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    @Min(0)
    offset?: number;

    @IsOptional()
    @Matches(/^(id|created_at)$/)
    orderBy?: string;

    @IsOptional()
    @Matches(/^(asc|desc)$/)
    direction?: string;

    @IsOptional()
    @IsString()
    search?: string;

}