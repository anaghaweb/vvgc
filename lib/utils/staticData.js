import path from 'path';
import {promises as fs} from 'fs';

export default async function localJsonData(){
    const jsonDir = path.join(process.cwd(), 'json');
    const contents = await fs.readFile( 'lib/data/regularevents.json', 'utf-8');
    const result = await JSON.parse(contents);
    return result;
}