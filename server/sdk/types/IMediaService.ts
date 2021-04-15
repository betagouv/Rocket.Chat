import { Readable } from 'stream';

import sharp from 'sharp';

export type ResizeResult = {
	data: Buffer;
	width: number;
	height: number;
}

export interface IMediaService {
	resizeFromBuffer(input: Buffer, width: number, height: number, keepType: boolean, blur: boolean, enlarge: boolean, fit?: keyof sharp.FitEnum | undefined): Promise<ResizeResult>;
	resizeFromStream(input: Readable, width: number, height: number, keepType: boolean, blur: boolean, enlarge: boolean, fit?: keyof sharp.FitEnum | undefined): Promise<ResizeResult>;
}
