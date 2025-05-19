export default function setCase(text: string, textCase: string | undefined): string {
    switch(textCase) {
        case "upper":
            return text.toUpperCase();
        case "lower":
            return text.toLowerCase();
        case "capital":
            return text.split(" ").map((value: string) => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
    }
    return text;
}