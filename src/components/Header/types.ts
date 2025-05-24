export type SmartHeaderProps = {
    logo?: React.ReactElement<HTMLImageElement>;
    logoText?: string;
    sections: [
        {
            section: string,
            hasDropbox?: boolean,
            dropbox?: [
                icon: React.ReactElement<HTMLImageElement | SVGElement>,
                title: string,
                description: string
            ],
            isOutside?: boolean,
        }
    ];
    
}