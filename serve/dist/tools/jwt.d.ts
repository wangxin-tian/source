import { JwtPayload } from 'jsonwebtoken';
export declare const generateToken: (_id: any) => string;
interface Payload extends JwtPayload {
    _id: string;
}
export declare const verifyToken: (token: any) => false | Payload;
export {};
