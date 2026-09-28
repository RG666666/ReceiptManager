export interface ReceiptListItem {
    key:string;
    date: Date;
    id: string;
    label: string;
    fileCount: number;
    isUploaded: boolean;
}

export interface ReceiptDetail{
    key:string;
    date: Date;
    id: string;
    label: string;
    filePaths: string[];
    isUploaded: boolean;
    description:string;
}

export interface Attachment {
    key: string
    fileName: string
    relativePath: string
}