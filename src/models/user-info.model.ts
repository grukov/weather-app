export interface UserInfo {
    isAnonymous: boolean;
    email: string;
    displayName: string;
    photoURL?: string;
    providerId: string;
    uid: string;
}
