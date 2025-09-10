import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import { createWriteStream } from 'node:fs';

const userUrl = await input({ message: 'URL: ' });
let qr_svg = qr.image(userUrl);
qr_svg.pipe(createWriteStream('./qrImages/yourQrCode.png'));
